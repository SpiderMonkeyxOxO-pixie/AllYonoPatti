import Image from "next/image";
import Link from "next/link";
import { newestPinnedSlug, type GameEntry } from "@/data/games";
import { CopyButton } from "@/components/ui/CopyButton";
import {
  DownloadDisclosureNote,
  DownloadLink,
} from "@/components/ui/DownloadLink";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { formatDate } from "@/lib/seo";

type Period = {
  key: "morning" | "afternoon" | "evening";
  label: string;
  short: string;
};

const PERIODS: Period[] = [
  { key: "morning", label: "Morning", short: "AM" },
  { key: "afternoon", label: "Afternoon", short: "PM" },
  { key: "evening", label: "Evening", short: "Eve" },
];

type PromoDailyCardProps = {
  game: GameEntry;
};

/**
 * Per-platform daily promo card: morning / afternoon / evening code slots.
 * A slot without a supplied code renders "Not released yet" — slots are
 * never filled with invented codes.
 */
export function PromoDailyCard({ game }: PromoDailyCardProps) {
  const daily = game.promoDaily;

  return (
    <article
      id={`promo-${game.slug}`}
      className="relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-3 pt-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-4 sm:pt-5"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-brand-600 via-brand-500 to-gold-400"
      />
      {game.slug === newestPinnedSlug && (
        <span className="absolute top-2 right-2 z-10 rounded-full bg-gold-400 px-2 py-0.5 text-[10px] font-bold tracking-wide text-brand-950 uppercase shadow-sm">
          New
        </span>
      )}
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <Image
            src={game.logo}
            alt={`${game.name} logo`}
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 rounded-lg border border-slate-100 object-cover sm:h-10 sm:w-10"
          />
          <h3 className="truncate font-semibold text-slate-900">
            <Link
              href={`/promo-codes/${game.slug}`}
              className="hover:text-brand-700 hover:underline"
            >
              {game.name}
            </Link>
          </h3>
        </div>
        <div className="hidden shrink-0 gap-1 sm:flex" aria-hidden="true">
          {PERIODS.map((p) => (
            <span
              key={p.key}
              className={`rounded-full border px-1.5 py-0.5 text-[10px] font-semibold ${
                daily?.[p.key]
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border-slate-200 bg-slate-50 text-slate-400"
              }`}
            >
              {p.short}
            </span>
          ))}
        </div>
      </div>

      <dl className="mt-3 flex-1 divide-y divide-slate-100 border-y border-slate-100">
        {PERIODS.map((p) => {
          const code = daily?.[p.key];
          return (
            <div
              key={p.key}
              className="flex flex-wrap items-center gap-x-2 gap-y-1 py-2"
            >
              <dt className="w-16 shrink-0 text-xs font-medium text-slate-500">
                {p.label}
              </dt>
              {code ? (
                <dd className="flex min-w-0 shrink grow basis-28 items-center gap-2">
                  <code className="block min-w-0 flex-1 truncate rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-800">
                    {code}
                  </code>
                  <CopyButton
                    value={code}
                    label={`Copy the ${p.label.toLowerCase()} code for ${game.name}`}
                  />
                </dd>
              ) : (
                <dd className="flex-1 text-xs text-slate-400">
                  Not released yet
                </dd>
              )}
            </div>
          );
        })}
      </dl>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
        <StatusBadge status={game.promoStatus} kind="promo" />
        <span>
          {daily?.date
            ? `Codes for ${formatDate(daily.date)}`
            : game.promoLastChecked
              ? `Last checked ${formatDate(game.promoLastChecked)}`
              : "Not yet checked"}
        </span>
      </div>
      {game.promoConditions && (
        <p className="mt-1.5 text-xs text-slate-500">{game.promoConditions}</p>
      )}

      <div className="mt-3 flex flex-col gap-2">
        {game.downloadUrl && (
          <DownloadLink
            href={game.downloadUrl}
            gameName={game.name}
            gameSlug={game.slug}
            placement="promo_card"
          />
        )}
        <Link
          href={`/promo-codes/${game.slug}`}
          aria-label={`Promo details for ${game.name}`}
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-brand-600 px-3.5 text-sm font-medium text-brand-700 hover:bg-brand-50"
        >
          Promo details
        </Link>
        <Link
          href={`/games/${game.slug}`}
          aria-label={`Game details for ${game.name}`}
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-3.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Game details
        </Link>
      </div>
      {game.downloadUrl && <DownloadDisclosureNote />}
    </article>
  );
}

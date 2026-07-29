import Image from "next/image";
import Link from "next/link";
import {
  DownloadDisclosureNote,
  DownloadLink,
} from "@/components/ui/DownloadLink";

type GameCardProps = {
  game: {
    name: string;
    slug: string;
    logo: string;
    category: string;
    shortDescription: string;
    downloadUrl?: string;
  };
  /** Shows a "NEW" corner badge — the newest featured platform's #1 slot. */
  isNewest?: boolean;
};

export function GameCard({ game, isNewest }: GameCardProps) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-3 pt-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-4 sm:pt-5">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-brand-600 via-brand-500 to-gold-400"
      />
      {isNewest && (
        <span className="absolute top-2 right-2 z-10 rounded-full bg-gold-400 px-2 py-0.5 text-[10px] font-bold tracking-wide text-brand-950 uppercase shadow-sm">
          New
        </span>
      )}
      <div className="flex items-start gap-2.5 sm:gap-3">
        <Image
          src={game.logo}
          alt={`${game.name} logo`}
          width={56}
          height={56}
          className="h-10 w-10 shrink-0 rounded-lg border border-slate-100 object-cover sm:h-12 sm:w-12 sm:rounded-xl"
        />
        <div className="min-w-0">
          <h3 className="font-semibold text-slate-900">
            <Link
              href={`/games/${game.slug}`}
              className="hover:text-brand-700 hover:underline"
            >
              {game.name}
            </Link>
          </h3>
          <p className="mt-0.5 text-xs text-slate-500">{game.category}</p>
        </div>
      </div>
      <p className="mt-3 line-clamp-3 flex-1 text-sm text-slate-600">
        {game.shortDescription}
      </p>
      <div className="mt-4 flex flex-col gap-2">
        {game.downloadUrl && (
          <DownloadLink
            href={game.downloadUrl}
            gameName={game.name}
            gameSlug={game.slug}
            placement="game_card"
          />
        )}
        <Link
          href={`/games/${game.slug}`}
          aria-label={`View details for ${game.name}`}
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-brand-600 px-3.5 text-sm font-medium text-brand-700 hover:bg-brand-50"
        >
          View details
        </Link>
        <Link
          href={`/promo-codes/${game.slug}`}
          aria-label={`Promo info for ${game.name}`}
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-3.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Promo info
        </Link>
      </div>
      {game.downloadUrl && <DownloadDisclosureNote />}
    </article>
  );
}

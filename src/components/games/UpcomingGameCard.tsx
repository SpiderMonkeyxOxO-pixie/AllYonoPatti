"use client";

import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { releaseStartUtc, type UpcomingGame } from "@/data/upcoming-games";
import { formatDate } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type UpcomingGameCardProps = {
  game: UpcomingGame;
};

/**
 * Module-level singleton clock, shared by every card on the page — one
 * interval total, not one per card. Critically, `subscribeToClock` and
 * `getClockSnapshot` are stable references (defined once, not recreated
 * per render): passing a new `subscribe` function to useSyncExternalStore
 * on every render makes React re-subscribe every render, and this
 * particular subscribe fired an update as its first action, which is
 * exactly the infinite-render-loop shape ("Maximum update depth
 * exceeded") that happens when that isn't stable.
 */
let clockValue = Date.now();
const clockListeners = new Set<() => void>();
let clockIntervalId: ReturnType<typeof setInterval> | null = null;

function subscribeToClock(onStoreChange: () => void): () => void {
  clockListeners.add(onStoreChange);
  if (clockIntervalId === null) {
    clockIntervalId = setInterval(() => {
      clockValue = Date.now();
      clockListeners.forEach((listener) => listener());
    }, 1000);
  }
  return () => {
    clockListeners.delete(onStoreChange);
    if (clockListeners.size === 0 && clockIntervalId !== null) {
      clearInterval(clockIntervalId);
      clockIntervalId = null;
    }
  };
}

function getClockSnapshot(): number {
  return clockValue;
}

function getServerClockSnapshot(): null {
  return null;
}

/**
 * Ticks once a second, client-side only. `getServerSnapshot` returns null
 * so SSR never has to guess "now" — a build-time value would just be
 * wrong by the time a visitor loads the page — and the real clock takes
 * over on the client without a hydration mismatch.
 */
function useTickingNow(): number | null {
  return useSyncExternalStore(
    subscribeToClock,
    getClockSnapshot,
    getServerClockSnapshot,
  );
}

function formatCountdown(msRemaining: number) {
  const totalSeconds = Math.max(0, Math.floor(msRemaining / 1000));
  return {
    days: Math.floor(totalSeconds / 86_400),
    hours: Math.floor((totalSeconds % 86_400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function formatHour12(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${hour12} ${period}` : `${hour12}:${String(m).padStart(2, "0")} ${period}`;
}

/**
 * Live-ticking "coming soon" card for an announced-but-not-yet-live game.
 * The countdown is client-only (starts at "—" on the server render and
 * fills in after mount) so the SSR/hydration pass never has to guess
 * "now" — a build-time countdown value would just be wrong by the time a
 * visitor actually loads the page.
 */
export function UpcomingGameCard({ game }: UpcomingGameCardProps) {
  const now = useTickingNow();
  const mounted = now !== null;
  const remainingMs = now === null ? 0 : releaseStartUtc(game).getTime() - now;

  const { days, hours, minutes, seconds } = formatCountdown(remainingMs);
  const units = [
    { label: "Days", value: days },
    { label: "Hrs", value: hours },
    { label: "Min", value: minutes },
    { label: "Sec", value: seconds },
  ];

  const content = (
    <>
      <div className="flex items-start gap-4">
        <Image
          src={game.logo}
          alt={`${game.name} logo`}
          width={96}
          height={96}
          className="h-20 w-20 shrink-0 rounded-xl border border-slate-100 object-cover sm:h-24 sm:w-24"
        />
        <div
          className="flex gap-2"
          aria-hidden="true"
        >
          {units.map((u) => (
            <div
              key={u.label}
              className="flex w-14 flex-col items-center rounded-lg border border-slate-200 bg-slate-50 py-1.5"
            >
              <span className="font-display text-lg font-bold text-slate-900">
                {mounted ? String(u.value).padStart(2, "0") : "—"}
              </span>
              <span className="text-[10px] font-medium tracking-wide text-slate-500 uppercase">
                {u.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold tracking-wide text-brand-700 uppercase">
          Coming soon
        </span>
        <span className="inline-flex items-center rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-medium text-brand-700">
          Scheduled
        </span>
      </div>

      <h3 className="font-display mt-2 text-lg font-bold text-slate-900">
        {game.gameSlug ? (
          <Link href={`/games/${game.gameSlug}`} className="hover:underline">
            {game.name} is joining the directory
          </Link>
        ) : (
          `${game.name} is joining the directory`
        )}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Expected to launch between {formatHour12(game.windowStart)}–
        {formatHour12(game.windowEnd)} IST on {formatDate(game.releaseDate)}.{" "}
        {game.blurb}
      </p>

      <a
        href={siteConfig.telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex min-h-11 w-fit items-center justify-center rounded-full bg-brand-700 px-5 text-sm font-semibold text-white hover:bg-brand-800"
      >
        Join Telegram for launch updates
      </a>
    </>
  );

  return (
    <article className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-brand-600 via-brand-500 to-gold-400"
      />
      {content}
    </article>
  );
}

"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import {
  savePromoSheet,
  startNewDay,
  type SaveResult,
  type SlotValues,
} from "@/app/admin/actions";

export type EditorGame = SlotValues & {
  slug: string;
  name: string;
  logo: string;
  hasDownload: boolean;
};

type Props = {
  games: EditorGame[];
  date: string;
  today: string;
  savedAt?: string;
  siteUrl: string;
};

const SLOTS = [
  ["morning", "Morning"],
  ["afternoon", "Afternoon"],
  ["evening", "Evening"],
] as const;

function toCodes(games: EditorGame[]): Record<string, SlotValues> {
  return Object.fromEntries(
    games.map((g) => [
      g.slug,
      { morning: g.morning, afternoon: g.afternoon, evening: g.evening },
    ]),
  );
}

export function PromoEditor({
  games,
  date: initialDate,
  today,
  savedAt,
  siteUrl,
}: Props) {
  const [saved, setSaved] = useState(() => toCodes(games));
  const [codes, setCodes] = useState(saved);
  const [savedDate, setSavedDate] = useState(initialDate);
  const [date, setDate] = useState(initialDate);
  const [lastSaved, setLastSaved] = useState(savedAt);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<SaveResult | null>(null);
  const [pending, startTransition] = useTransition();

  const dirtySlugs = useMemo(
    () =>
      new Set(
        games
          .filter((g) => {
            const a = codes[g.slug];
            const b = saved[g.slug];
            return (
              a.morning !== b.morning ||
              a.afternoon !== b.afternoon ||
              a.evening !== b.evening
            );
          })
          .map((g) => g.slug),
      ),
    [codes, saved, games],
  );
  const dirty = dirtySlugs.size > 0 || date !== savedDate;
  const filled = games.filter((g) => {
    const c = codes[g.slug];
    return c.morning || c.afternoon || c.evening;
  }).length;

  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  function apply(
    r: SaveResult,
    nextCodes: Record<string, SlotValues>,
    nextDate: string,
  ) {
    setResult(r);
    if (r.ok) {
      setCodes(nextCodes);
      setSaved(nextCodes);
      setDate(nextDate);
      setSavedDate(nextDate);
      setLastSaved(r.savedAt);
    }
  }

  function save() {
    startTransition(async () => {
      apply(await savePromoSheet({ date, codes }), codes, date);
    });
  }

  function newDay() {
    if (
      !window.confirm(
        `Start a new day? This clears ALL codes for every platform and sets the date to ${today}.`,
      )
    )
      return;
    startTransition(async () => {
      const blank = toCodes(
        games.map((g) => ({ ...g, morning: "", afternoon: "", evening: "" })),
      );
      apply(await startNewDay(), blank, today);
    });
  }

  const q = query.trim().toLowerCase();
  const stale = savedDate !== today;
  const input =
    "block min-h-10 w-full rounded-md border border-slate-300 bg-white px-2 font-mono text-sm text-slate-900 placeholder:font-sans placeholder:text-slate-300";

  return (
    <div className="mt-5">
      {stale && (
        <div
          role="status"
          className="mb-4 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900"
        >
          The sheet is dated <strong>{savedDate}</strong> but today is{" "}
          <strong>{today}</strong> (IST). Visitors may be seeing old codes —
          press <strong>Start new day</strong> to clear them.
        </div>
      )}

      <div className="flex flex-wrap items-end gap-3 rounded-xl border border-slate-200 bg-white p-4">
        <label className="text-sm font-medium text-slate-700">
          Codes are for date
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block min-h-10 rounded-md border border-slate-300 px-2"
          />
        </label>
        <label className="min-w-48 flex-1 text-sm font-medium text-slate-700">
          Find a platform
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. spin gold"
            className="mt-1 block min-h-10 w-full rounded-md border border-slate-300 px-2"
          />
        </label>
        <button
          type="button"
          onClick={newDay}
          disabled={pending}
          className="min-h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-60"
        >
          Start new day
        </button>
        <p className="w-full text-xs text-slate-500">
          {filled} of {games.length} platforms have a code
          {lastSaved &&
            ` · last saved ${new Date(lastSaved).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST`}
        </p>
      </div>

      <ul className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {games.map((g) => {
          const hidden = q && !`${g.name} ${g.slug}`.toLowerCase().includes(q);
          const changed = dirtySlugs.has(g.slug);
          return (
            <li
              key={g.slug}
              hidden={Boolean(hidden)}
              className={`rounded-xl border bg-white p-3 ${changed ? "border-gold-400 ring-1 ring-gold-300" : "border-slate-200"}`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={g.logo}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-md object-cover"
                  />
                  <h2 className="truncate text-sm font-semibold text-slate-900">
                    {g.name}
                  </h2>
                </div>
                <a
                  href={`${siteUrl}/promo-codes/${g.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-xs text-brand-700 underline"
                >
                  View page
                </a>
              </div>
              <div className="mt-2 space-y-1.5">
                {SLOTS.map(([key, label]) => (
                  <label key={key} className="flex items-center gap-2">
                    <span className="w-20 shrink-0 text-xs font-medium text-slate-500">
                      {label}
                    </span>
                    <input
                      type="text"
                      value={codes[g.slug][key]}
                      maxLength={40}
                      autoComplete="off"
                      autoCapitalize="off"
                      spellCheck={false}
                      placeholder="Not released yet"
                      onChange={(e) =>
                        setCodes((c) => ({
                          ...c,
                          [g.slug]: { ...c[g.slug], [key]: e.target.value },
                        }))
                      }
                      className={input}
                    />
                  </label>
                ))}
              </div>
              {!g.hasDownload && (
                <p className="mt-2 text-xs text-amber-700">
                  No download link set for this platform.
                </p>
              )}
            </li>
          );
        })}
      </ul>

      <div className="sticky bottom-0 z-10 -mx-4 mt-4 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={save}
            disabled={pending || !dirty}
            className="min-h-11 rounded-lg bg-brand-600 px-6 font-medium text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {pending ? "Saving…" : "Save changes"}
          </button>
          <span className="text-sm text-slate-600" aria-live="polite">
            {dirty
              ? `${dirtySlugs.size} platform${dirtySlugs.size === 1 ? "" : "s"} changed${date !== savedDate ? " · date changed" : ""} — not saved yet`
              : "All changes saved"}
          </span>
          {result?.ok && !dirty && (
            <span
              role="status"
              className="text-sm font-medium text-emerald-700"
            >
              ✓ Saved — {result.liveGames} platform
              {result.liveGames === 1 ? "" : "s"} now live
            </span>
          )}
        </div>
        {result && !result.ok && (
          <ul
            role="alert"
            className="mx-auto mt-2 max-w-6xl list-disc pl-5 text-sm text-red-700"
          >
            {result.errors.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

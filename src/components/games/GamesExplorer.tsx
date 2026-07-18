"use client";

import { useId, useMemo, useState } from "react";
import { GameCard } from "@/components/ui/GameCard";

export type ExplorerGame = {
  name: string;
  slug: string;
  logo: string;
  category: string;
  shortDescription: string;
  aliases: string[];
  firstLetter: string;
  downloadUrl?: string;
};

type GamesExplorerProps = {
  games: ExplorerGame[];
  categories: string[];
};

/**
 * Client-side search and filtering for the directory. Filter state lives in
 * component state only (no URL parameters), so no indexable filter
 * combinations are ever created; /games remains the single canonical URL.
 */
export function GamesExplorer({ games, categories }: GamesExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [letter, setLetter] = useState("all");
  const searchId = useId();
  const categoryId = useId();

  const letters = useMemo(
    () => [...new Set(games.map((g) => g.firstLetter))].sort(),
    [games],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return games.filter((g) => {
      if (category !== "all" && g.category !== category) return false;
      if (letter !== "all" && g.firstLetter !== letter) return false;
      if (!q) return true;
      return (
        g.name.toLowerCase().includes(q) ||
        g.aliases.some((a) => a.toLowerCase().includes(q))
      );
    });
  }, [games, query, category, letter]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label
            htmlFor={searchId}
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Search games
          </label>
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. Yono Rummy"
            autoComplete="off"
            className="h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-base text-slate-900 placeholder:text-slate-400"
          />
        </div>
        <div>
          <label
            htmlFor={categoryId}
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Category
          </label>
          <select
            id={categoryId}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-base text-slate-900"
          >
            <option value="all">All categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <fieldset className="mt-4">
        <legend className="mb-2 text-sm font-medium text-slate-700">
          Browse alphabetically
        </legend>
        <div className="flex flex-wrap gap-1.5" role="group">
          <button
            type="button"
            onClick={() => setLetter("all")}
            aria-pressed={letter === "all"}
            className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border px-3 text-sm font-medium ${
              letter === "all"
                ? "border-brand-600 bg-brand-600 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            All
          </button>
          {letters.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLetter(l === letter ? "all" : l)}
              aria-pressed={letter === l}
              className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border text-sm font-medium ${
                letter === l
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </fieldset>

      <p className="mt-5 text-sm text-slate-500" role="status">
        Showing {filtered.length} of {games.length} games
      </p>

      {filtered.length === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
          <h2 className="font-semibold text-slate-900">No games match</h2>
          <p className="mt-1.5 text-sm text-slate-600">
            No listing matches your current search and filters. Try a shorter
            search term, or clear the filters below.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
              setLetter("all");
            }}
            className="mt-4 inline-flex min-h-11 items-center rounded-lg border border-slate-300 bg-white px-4 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Clear search and filters
          </button>
        </div>
      ) : (
        <ul className="mt-4 grid list-none grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {filtered.map((game) => (
            <li key={game.slug}>
              <GameCard game={game} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

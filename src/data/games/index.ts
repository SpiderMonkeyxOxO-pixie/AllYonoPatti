import { blogPosts, guideArticles } from "../articles";
import { jaihoFamily } from "./jaiho-family";
import { miscPlatforms } from "./misc-platforms";
import { rummyFamily } from "./rummy-family";
import { slotsFamily } from "./slots-family";
import { spinFamily } from "./spin-family";
import type { GameEntry } from "./types";
import { yonoFamily } from "./yono-family";
import { getPromoDailyMap, type PromoDailyEntry } from "../promo-daily";

export type { GameEntry, GameCategory, PromoStatus, VerificationStatus } from "./types";

const EXPECTED_GAME_COUNT = 55;

// Catches an unfilled template URL before it ships as a real Download
// button — "flag it in the code" rather than silently publishing a
// broken link (2026-07-23 requirement).
const PLACEHOLDER_URL_PATTERN =
  /example\.(com|org|net)|yourdomain|\[.*\]|<.*>|TODO|PLACEHOLDER|xxx\.xxx|lorem ?ipsum/i;

/**
 * promo-code.txt is the owner's daily-editing surface for morning/
 * afternoon/evening codes — when it sets a slug's slots, that overrides
 * whatever (if anything) a game's own file has for promoDaily. A live
 * daily code is itself owner-supplied evidence — reflect that in the
 * status badge rather than leaving it stuck on "awaiting review" next to
 * a code that's visibly right there. Never override a status the owner
 * set to something other than the default, e.g. "expired".
 */
function mergePromoDaily(g: GameEntry, daily: PromoDailyEntry | undefined): GameEntry {
  if (!daily) return g;
  const hasLiveCode = Boolean(daily.morning || daily.afternoon || daily.evening);
  const promoStatus =
    hasLiveCode && g.promoStatus === "awaiting-review"
      ? ("reported-active" as const)
      : g.promoStatus;
  return { ...g, promoDaily: daily, promoStatus };
}

// A build-time snapshot — good enough for the statically-generated game
// pages, where "live" freshness isn't the point. The promo-codes pages use
// getGamesWithLivePromo() below instead, which re-reads the file on every
// request.
const buildTimePromoDaily = getPromoDailyMap();

const allGames: GameEntry[] = [
  ...yonoFamily,
  ...jaihoFamily,
  ...rummyFamily,
  ...spinFamily,
  ...slotsFamily,
  ...miscPlatforms,
].map((g) => mergePromoDaily(g, buildTimePromoDaily.get(g.slug)));

// A slug in promo-code.txt that matches no real game is a silent no-op
// otherwise — almost always a typo in the file's first column. Warn so it
// gets noticed instead of "why isn't this code showing up?" a day later.
{
  const realSlugs = new Set(allGames.map((g) => g.slug));
  for (const slug of buildTimePromoDaily.keys()) {
    if (!realSlugs.has(slug)) {
      console.warn(
        `[promo-code.txt] "${slug}" doesn't match any game slug — this row's codes are being ignored.`,
      );
    }
  }
}

/**
 * Build-time content validation. Any violation throws, which fails
 * `next build` before an invalid page can ship.
 */
function validate(entries: GameEntry[]): GameEntry[] {
  const errors: string[] = [];

  if (entries.length !== EXPECTED_GAME_COUNT) {
    errors.push(
      `Expected exactly ${EXPECTED_GAME_COUNT} games, found ${entries.length}.`,
    );
  }

  const slugs = new Set<string>();
  const ids = new Set<string>();
  const shortDescriptions = new Set<string>();
  const fullDescriptions = new Set<string>();

  for (const g of entries) {
    if (slugs.has(g.slug)) errors.push(`Duplicate slug: ${g.slug}`);
    slugs.add(g.slug);

    if (ids.has(g.id)) errors.push(`Duplicate id: ${g.id}`);
    ids.add(g.id);

    if (!g.name.trim()) errors.push(`Missing name for slug ${g.slug}`);
    if (!g.shortDescription.trim())
      errors.push(`Missing shortDescription: ${g.slug}`);
    if (!g.fullDescription.trim())
      errors.push(`Missing fullDescription: ${g.slug}`);
    if (!g.category) errors.push(`Missing category: ${g.slug}`);
    if (!g.logo) errors.push(`Missing logo path: ${g.slug}`);
    if (!g.featuredImage) errors.push(`Missing featuredImage: ${g.slug}`);
    if (!g.ageNotice.trim()) errors.push(`Missing ageNotice: ${g.slug}`);
    if (!g.legalNotice.trim()) errors.push(`Missing legalNotice: ${g.slug}`);
    if (!g.informationalStatus.trim())
      errors.push(`Missing informationalStatus: ${g.slug}`);
    if (!g.publishedAt) errors.push(`Missing publishedAt: ${g.slug}`);
    if (!g.updatedAt) errors.push(`Missing updatedAt: ${g.slug}`);

    if (shortDescriptions.has(g.shortDescription))
      errors.push(`Copied shortDescription detected on: ${g.slug}`);
    shortDescriptions.add(g.shortDescription);

    if (fullDescriptions.has(g.fullDescription))
      errors.push(`Copied fullDescription detected on: ${g.slug}`);
    fullDescriptions.add(g.fullDescription);

    // A promo code without explicit owner-supplied verification data must
    // never be labelled as reported-active — a supplied main code or a
    // live daily-slot code both count as that evidence.
    const hasDailyCode = Boolean(
      g.promoDaily?.morning || g.promoDaily?.afternoon || g.promoDaily?.evening,
    );
    if (!g.promoCode && !hasDailyCode && g.promoStatus === "reported-active") {
      errors.push(
        `Promo status "reported-active" without a supplied code: ${g.slug}`,
      );
    }

    // Daily promo slots must carry the date they refer to.
    if (
      g.promoDaily &&
      (g.promoDaily.morning ||
        g.promoDaily.afternoon ||
        g.promoDaily.evening) &&
      !g.promoDaily.date
    ) {
      errors.push(`promoDaily slots set without a date: ${g.slug}`);
    }

    // A downloadUrl must be a real, syntactically valid link — not an
    // unfilled template placeholder that would otherwise ship silently as
    // a broken Download button.
    if (g.downloadUrl) {
      let parsed: URL | null = null;
      try {
        parsed = new URL(g.downloadUrl);
      } catch {
        parsed = null;
      }
      if (!parsed || !/^https?:$/.test(parsed.protocol)) {
        errors.push(
          `downloadUrl is not a valid http(s) URL: ${g.slug} — "${g.downloadUrl}"`,
        );
      } else if (PLACEHOLDER_URL_PATTERN.test(g.downloadUrl)) {
        errors.push(
          `downloadUrl looks like an unfilled placeholder, not a real link: ${g.slug} — "${g.downloadUrl}"`,
        );
      }
    }
  }

  for (const g of entries) {
    for (const rel of g.relatedGameSlugs ?? []) {
      if (!slugs.has(rel)) {
        errors.push(`Invalid related-game reference "${rel}" on: ${g.slug}`);
      }
      if (rel === g.slug) {
        errors.push(`Self-referencing related game on: ${g.slug}`);
      }
    }
  }

  const articleSlugs = new Set([
    ...blogPosts.map((a) => a.slug),
    ...guideArticles.map((a) => a.slug),
  ]);
  for (const g of entries) {
    for (const rel of g.relatedArticleSlugs ?? []) {
      if (!articleSlugs.has(rel)) {
        errors.push(`Invalid related-article reference "${rel}" on: ${g.slug}`);
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(
      `Game data validation failed with ${errors.length} error(s):\n- ${errors.join("\n- ")}`,
    );
  }

  return entries;
}

/**
 * Manually pinned display order for the top of every listing (/games,
 * /promo-codes, homepage Featured listings, and the JSON-LD item list —
 * all of them just map over `games` in order, so this one array is the
 * single place that controls it). Owner-directed, not derived from any
 * data field: when a new platform is announced, the owner adds it at #1
 * and the rest shift down (2026-07-19: "strictly abide this arrangement
 * ... the #1 will become #2"). Anything not listed here falls back to
 * alphabetical order after the pinned entries. A slug that no longer
 * exists is silently skipped rather than breaking the build.
 */
const PINNED_ORDER: string[] = [
  "win-rummy",
  "dhan-game",
  "max-rummy",
  "yono-rummy",
  "yono-games",
  "yono-777",
  "yono-arcade",
];

function withPinnedOrder(entries: GameEntry[]): GameEntry[] {
  const bySlug = new Map(entries.map((g) => [g.slug, g] as const));
  const pinned = PINNED_ORDER.map((slug) => bySlug.get(slug)).filter(
    (g): g is GameEntry => Boolean(g),
  );
  const pinnedSlugs = new Set(pinned.map((g) => g.slug));
  const rest = entries
    .filter((g) => !pinnedSlugs.has(g.slug))
    .sort((a, b) => a.name.localeCompare(b.name, "en"));
  return [...pinned, ...rest];
}

/** All 54 games — pinned order first, then the rest alphabetically. */
export const games: GameEntry[] = withPinnedOrder(validate(allGames));

export const featuredGames: GameEntry[] = games.filter((g) => g.featured);

/**
 * Re-merges promo-code.txt fresh (bypassing the build-time snapshot above)
 * onto the validated game list. Call this from request-time code — a
 * route marked `export const dynamic = "force-dynamic"`, or a Route
 * Handler — so an edit to promo-code.txt shows up on the next request,
 * with no rebuild. Never cached at module scope.
 */
export function getGamesWithLivePromo(): GameEntry[] {
  const live = getPromoDailyMap();
  return games.map((g) => mergePromoDaily(g, live.get(g.slug)));
}

export function getGameWithLivePromo(slug: string): GameEntry | undefined {
  return getGamesWithLivePromo().find((g) => g.slug === slug);
}

function countFreshPromo(entries: GameEntry[]): { count: number; date?: string } {
  const withCode = entries.filter(
    (g) =>
      g.promoDaily &&
      (g.promoDaily.morning || g.promoDaily.afternoon || g.promoDaily.evening),
  );
  return { count: withCode.length, date: withCode[0]?.promoDaily?.date };
}

/** Live (not build-time-cached) count of games with a code today, for the API route. */
export function getFreshPromoStatus(): { count: number; date?: string } {
  return countFreshPromo(getGamesWithLivePromo());
}

export const gameCategories: string[] = [
  ...new Set(games.map((g) => g.category)),
].sort();

export function getGameBySlug(slug: string): GameEntry | undefined {
  return games.find((g) => g.slug === slug);
}

export function getRelatedGames(game: GameEntry): GameEntry[] {
  return (game.relatedGameSlugs ?? [])
    .map((slug) => getGameBySlug(slug))
    .filter((g): g is GameEntry => Boolean(g));
}

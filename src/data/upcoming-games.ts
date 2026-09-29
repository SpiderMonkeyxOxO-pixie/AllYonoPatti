/**
 * Homepage "coming soon" announcements. Separate from the main game
 * collection (src/data/games) so an announcement never requires a full
 * listing to exist yet — this entry happens to also have one (dhan-game),
 * linked via gameSlug, but that's optional.
 */

export type UpcomingGame = {
  slug: string;
  name: string;
  /** Path under /public. */
  logo: string;
  /** Release day, IST, as YYYY-MM-DD. */
  releaseDate: string;
  /** Release window, IST, 24-hour "HH:MM". */
  windowStart: string;
  windowEnd: string;
  blurb: string;
  /** Set when a matching GameEntry already exists, to link the card to it. */
  gameSlug?: string;
};

// DhanGame launched 2026-07-23, Win Rummy launched 2026-07-29, Gold
// Rummy launched 2026-08-19, and Money Rummy launched 2026-09-09; all
// moved into the main game collection (src/data/games).
export const upcomingGames: UpcomingGame[] = [
  {
    slug: "jeet-spin-launch",
    name: "Jeet Spin",
    logo: "/images/games/jeet-spin.webp",
    releaseDate: "2026-09-30",
    windowStart: "10:00",
    windowEnd: "23:59",
    blurb:
      "A victory-themed spin app joining the Spin series. Launching 30 September 2026.",
    gameSlug: "jeet-spin",
  },
];

const IST_OFFSET_MINUTES = 5 * 60 + 30;

/** The release window's start instant, as a real UTC timestamp. */
export function releaseStartUtc(game: UpcomingGame): Date {
  const [hours, minutes] = game.windowStart.split(":").map(Number);
  const utcMs =
    Date.parse(`${game.releaseDate}T00:00:00Z`) +
    (hours * 60 + minutes - IST_OFFSET_MINUTES) * 60_000;
  return new Date(utcMs);
}

/**
 * Only games whose release window hasn't started yet — evaluated at build
 * time, so the card naturally drops off the homepage on the next rebuild
 * after launch, with no manual cleanup needed.
 */
export function getActiveUpcomingGames(): UpcomingGame[] {
  const now = Date.now();
  return upcomingGames.filter((g) => releaseStartUtc(g).getTime() > now);
}

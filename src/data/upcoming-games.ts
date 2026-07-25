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

// DhanGame launched 2026-07-23 and moved into the main game collection
// (src/data/games/misc-platforms.ts).
export const upcomingGames: UpcomingGame[] = [
  {
    slug: "win-rummy",
    name: "Win Rummy",
    logo: "/images/games/win-rummy.png",
    releaseDate: "2026-07-29",
    windowStart: "09:00",
    windowEnd: "10:00",
    blurb:
      "Win Rummy is joining this directory's catalogue. We'll add category, promo-code, and safety information once the game is available and can be independently reviewed.",
    gameSlug: "win-rummy",
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

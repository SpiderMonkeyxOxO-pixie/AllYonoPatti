/**
 * Shared content model for the game directory.
 *
 * Every game page (/games/[slug]) and promo-code page (/promo-codes/[slug])
 * is generated from this single typed collection. Do not create standalone
 * route files per game.
 */

export type VerificationStatus =
  | "verified"
  | "unverified"
  | "awaiting-review"
  | "expired";

export type PromoStatus =
  | "reported-active"
  | "unverified"
  | "expired"
  | "availability-unknown"
  | "awaiting-review";

export type GameCategory =
  | "Rummy-focused platform"
  | "Slots-style platform"
  | "Spin-style platform"
  | "Bingo-style platform"
  | "Arcade & casual games"
  | "Multi-game platform";

export type GameEntry = {
  /** Stable unique identifier (kebab-case, matches slug by convention). */
  id: string;
  /** Display name as supplied by the project owner. */
  name: string;
  /** URL slug, unique across the collection. */
  slug: string;
  /** Alternative spellings people use for this platform. */
  aliases?: string[];
  /** One or two sentences for cards and list views. Unique per game. */
  shortDescription: string;
  /** Longer editorial description for the game page. Unique per game. */
  fullDescription: string;
  /** Informational category derived from how the platform presents itself. */
  category: GameCategory;
  /** Distribution platforms as commonly reported. */
  platform: string[];
  supportedDevices: string[];
  supportedLanguages: string[];
  /** Path under /public. WebP Yono logo set supplied by the project owner. */
  logo: string;
  /** Path under /public used for social sharing / featured slots. */
  featuredImage: string;
  /** Only set when a documented official source has been supplied. */
  officialWebsite?: string;
  /** Owner-supplied download/redirect link (their own affiliate/tracking URL). Only set when explicitly supplied — never invented. */
  downloadUrl?: string;
  /** Documented sources used while researching the entry. */
  sourceUrls?: string[];
  /** Editorial framing of what this listing represents. */
  informationalStatus: string;
  verificationStatus: VerificationStatus;
  /** ISO date the listing facts were last checked, if ever. */
  lastChecked?: string;
  /** Only present when a code has been explicitly supplied. Never invented. */
  promoCode?: string;
  promoStatus: PromoStatus;
  promoDescription?: string;
  promoConditions?: string;
  promoLastChecked?: string;
  rewardInformation?: string;
  safetyNotes?: string;
  ageNotice: string;
  legalNotice: string;
  /**
   * Daily release-period codes (morning / afternoon / evening), entered
   * manually when supplied by the project owner. A slot left unset renders
   * as "Not released yet". Codes are never invented to fill slots.
   */
  promoDaily?: {
    /** ISO date the slots below refer to. Required when any slot is set. */
    date: string;
    morning?: string;
    afternoon?: string;
    evening?: string;
  };
  /** Slugs of related games. Validated at build time. */
  relatedGameSlugs?: string[];
  /** Slugs of blog posts or guides that go deeper on this game. Validated at build time. */
  relatedArticleSlugs?: string[];
  tags?: string[];
  featured?: boolean;
  /** ISO dates. */
  publishedAt: string;
  updatedAt: string;
};

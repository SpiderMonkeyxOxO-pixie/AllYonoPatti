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

/**
 * How genuinely Teen Patti-relevant this specific listing is, independent of
 * its primary `category`. This is deliberately a second dimension rather
 * than a seventh category value: an app's primary category (Rummy-focused,
 * Multi-game, etc.) describes how the platform presents itself, while this
 * field answers "does this specific entry's own copy document a Teen Patti
 * offering, and how central is it?" A Rummy-focused platform can be
 * Teen-Patti-"mode" and a Multi-game platform can be Teen-Patti-"none" —
 * the two dimensions are independent.
 *
 * Values, in descending order of Teen Patti centrality:
 * - "core": the entry's own description positions Teen Patti as the
 *   platform's primary/headline offering, not one mode among many.
 * - "mode": Teen Patti is documented as a specific, named, identifiable
 *   component of the platform's lobby (not just "card games" in general).
 * - "incidental": Teen Patti is mentioned only vaguely, hedged, or as
 *   secondary/marketing language ("sometimes mentioned as extras", a
 *   testimonial) — not established as an identifiable feature.
 * - "none": the entry has been reviewed and its copy contains no Teen
 *   Patti-specific claim at all — a confirmed negative finding.
 * - "unknown": the entry has NOT yet been reviewed for Teen Patti
 *   relevance. This is deliberately distinct from "none" — an unreviewed
 *   entry must never be presented or counted as confirmed "no Teen Patti."
 *
 * Set by hand per entry from the entry's own shortDescription/
 * fullDescription text — never inferred from category, branding, or the
 * fact that an app is a card game. Every one of the 55 entries reviewed in
 * the AllYonoPatti Phase 1 audit sets this field explicitly (including
 * "none"), so no current entry relies on a default. Defaults to "unknown"
 * in defineGame() — never "none" — so that a future entry added without an
 * explicit review is flagged as unreviewed rather than silently counted as
 * a confirmed absence of Teen Patti evidence.
 */
export type TeenPattiRelevance =
  | "core"
  | "mode"
  | "incidental"
  | "none"
  | "unknown";

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
  /** Teen Patti relevance of this specific entry — see TeenPattiRelevance. */
  teenPattiRelevance: TeenPattiRelevance;
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

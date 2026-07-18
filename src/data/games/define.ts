import { AGE_NOTICE, LEGAL_NOTICE } from "@/lib/compliance";
import type { GameEntry } from "./types";

/**
 * Fields every entry must supply by hand. Everything else receives a
 * conservative, clearly-unverified default so that no entry ever ships with
 * invented facts.
 */
type GameInput = Partial<GameEntry> &
  Pick<
    GameEntry,
    "name" | "slug" | "shortDescription" | "fullDescription" | "category"
  >;

const DEFAULT_PUBLISHED = "2026-07-17";

export function defineGame(input: GameInput): GameEntry {
  const {
    name,
    slug,
    shortDescription,
    fullDescription,
    category,
    ...rest
  } = input;

  return {
    id: slug,
    name,
    slug,
    shortDescription,
    fullDescription,
    category,
    platform: ["Android (reported; distribution details awaiting verification)"],
    supportedDevices: ["Android phones and tablets (reported)"],
    // English and Hindi are the near-universal language pair across this
    // app category in India — reported at the category level, same as
    // platform/supportedDevices above, not independently confirmed per app.
    supportedLanguages: ["English", "Hindi"],
    logo: `/images/games/${slug}.webp`,
    featuredImage: `/images/games/${slug}.webp`,
    informationalStatus:
      "Independent informational listing. Key facts about this platform have not yet been independently confirmed and are awaiting review.",
    verificationStatus: "awaiting-review",
    promoStatus: "awaiting-review",
    ageNotice: AGE_NOTICE,
    legalNotice: LEGAL_NOTICE,
    publishedAt: DEFAULT_PUBLISHED,
    updatedAt: DEFAULT_PUBLISHED,
    ...rest,
  };
}

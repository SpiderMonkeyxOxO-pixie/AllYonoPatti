import { defineGame } from "./define";
import type { GameEntry } from "./types";

/**
 * Slots-branded platforms supplied by the project owner.
 */
export const slotsFamily: GameEntry[] = [
  defineGame({
    name: "567 Slots",
    slug: "567-slots",
    downloadUrl: "https://join567slots.cc/?code=9UXNF2XJ68V&t=1781948821",
    aliases: ["567Slots"],
    category: "Slots-style platform",
    shortDescription:
      "A number-branded slots app reported to carry a catalogue of themed reel games.",
    fullDescription:
      "567 Slots uses an ascending-number hook where most of its peers reach for sevens, but the reported substance is familiar: a catalogue of themed reel games with short rounds and bonus-style features. Slots catalogues in this segment are often licensed or copied between apps, so identical-looking games can appear under many brands. The app's operator and catalogue sources have not been verified.",
    tags: ["slots", "numbered"],
    relatedGameSlugs: ["saga-slots", "share-slots", "789-jackpot"],
  }),
  defineGame({
    name: "Ind Slots",
    slug: "ind-slots",
    downloadUrl: "https://www.indslotsgame.com/?code=T2QAZY5XRX5&t=1781954995",
    category: "Slots-style platform",
    shortDescription:
      "The slots entry of the Ind series, reportedly offering reel games for an Indian audience.",
    fullDescription:
      "Ind Slots covers the reel-game slot in the Ind series line-up, alongside its rummy, bingo, and club siblings. Descriptions point to standard slot mechanics with India-flavoured theming. Series apps often share accounts or wallets behind the scenes, which can matter for spending limits — if one login covers several apps, so does your budget. No such details have been confirmed for this listing.",
    tags: ["slots", "ind-series"],
    relatedGameSlugs: ["ind-rummy", "ind-club", "yono-slots"],
  }),
  defineGame({
    name: "Saga Slots",
    slug: "saga-slots",
    downloadUrl: "https://www.sagaslots23.com/?code=0QHQQDQR832&t=1781963464",
    category: "Slots-style platform",
    shortDescription:
      "A story-branded slots app whose name suggests progression mechanics over its reel games.",
    fullDescription:
      "Saga Slots borrows the 'saga' suffix familiar from casual mobile gaming, hinting at level-progression mechanics layered over reel play. Progression systems in staked games deserve attention because they add a second reason to keep playing beyond the games themselves. Whether this app actually uses such mechanics — and everything else about it — remains unverified; the description here is based on its presentation, not on inspection.",
    tags: ["slots", "progression"],
    relatedGameSlugs: ["567-slots", "slots-winner", "share-slots"],
  }),
  defineGame({
    name: "Share Slots",
    slug: "share-slots",
    downloadUrl: "https://share977.com/?code=YAZ4PR9XNK4&t=1781964196",
    category: "Slots-style platform",
    shortDescription:
      "A slots app whose name suggests social or referral features around its reel catalogue.",
    fullDescription:
      "Share Slots stands out for a name that implies social mechanics — sharing, referrals, or invite rewards around a standard reel-game core. Referral systems are common in this segment and are worth understanding before you use them, since they typically reward you for bringing other people into staked play. Whether this app runs such a programme is unconfirmed, as are its operator and catalogue details.",
    tags: ["slots", "referral"],
    safetyNotes:
      "If an app rewards you for inviting friends, remember what you are inviting them into. Referral bonuses tied to deposits deserve especially careful reading of their terms.",
    relatedGameSlugs: ["saga-slots", "567-slots", "ind-slots"],
  }),
  defineGame({
    name: "Slots Winner",
    slug: "slots-winner",
    downloadUrl: "https://slotswinnerk.com/?code=PGVZ35PE57E&t=1781965038",
    category: "Slots-style platform",
    featured: true,
    shortDescription:
      "An outcome-branded slots app; the name is marketing, not a description of results.",
    fullDescription:
      "Slots Winner makes the boldest naming claim in the slots group, and it is worth stating plainly: no slots app makes players winners by design, and reel games pay out according to configured odds that this directory has not seen for this or any listed app. Its reported catalogue is conventional themed reels. Evaluate it on verifiable operator details, not the name — those details are currently awaiting review.",
    tags: ["slots", "outcome-branding", "popular"],
    relatedGameSlugs: ["spin-winner", "saga-slots", "yono-slots"],
  }),
];

import { defineGame } from "./define";
import type { GameEntry } from "./types";

/**
 * Jaiho-branded platforms supplied by the project owner.
 */
export const jaihoFamily: GameEntry[] = [
  defineGame({
    name: "Jaiho 777",
    slug: "jaiho-777",
    downloadUrl: "https://jaiho77790.com/?code=RZP8TTL2EXP&t=1781955169",
    aliases: ["Jahio 777", "Jaiho777"],
    category: "Slots-style platform",
    featured: true,
    shortDescription:
      "The 777-branded slots entry of the Jaiho family, often listed with card tables alongside its reel games.",
    fullDescription:
      "Jaiho 777 leads the Jaiho group's slots line-up, with descriptions centring on 777-style reel games and a side menu of card play that reportedly includes Teen Patti-style tables. The name is frequently misspelled as 'Jahio 777' in listings and shared links, which makes cross-checking sources unusually tricky for this app. Its operator, catalogue, and payment handling have not been verified by this directory.",
    // Mode: Teen Patti-style tables are named as a specific, identifiable
    // lobby component ("a side menu of card play that reportedly includes
    // Teen Patti-style tables"), secondary to the slots focus.
    teenPattiRelevance: "mode",
    tags: ["jaiho", "slots", "777"],
    safetyNotes:
      "This app's name circulates in at least two spellings. Confirm which spelling the official listing uses before trusting third-party pages that reference either one.",
    relatedGameSlugs: ["jaiho-slot", "yono-777", "jaiho-win"],
  }),
  defineGame({
    name: "Jaiho Rummy",
    slug: "jaiho-rummy",
    downloadUrl: "https://jaihorummyagent.club/?code=3NPMVPS8ECT&t=1781957652",
    aliases: ["JaihoRummy"],
    category: "Rummy-focused platform",
    shortDescription:
      "The Jaiho family's rummy app, reportedly pairing Indian rummy tables with Teen Patti-style games.",
    fullDescription:
      "Jaiho Rummy takes the family's card-game slot, with Indian rummy formats as the advertised core and Teen Patti-style tables commonly mentioned in the same breath. Rummy apps in this segment tend to emphasise quick matchmaking and small-stakes tables, but we have not confirmed how this particular app handles stakes, accounts, or withdrawals. Treat its published claims as unverified until you have checked them at the source.",
    // Mode: rummy is the advertised core, but Teen Patti-style tables are
    // named as a specific, identifiable secondary component, not vague
    // marketing — "commonly mentioned in the same breath" as the rummy core.
    teenPattiRelevance: "mode",
    tags: ["jaiho", "rummy", "card-games"],
    relatedGameSlugs: ["yono-rummy", "jaiho-win", "ind-rummy", "boss-rummy"],
  }),
  defineGame({
    name: "Jaiho Slot",
    slug: "jaiho-slot",
    downloadUrl: "https://www.jaihoslots24.com/?code=QJS2Y15LD48&t=1781957788",
    aliases: ["Jaiho Slots"],
    category: "Slots-style platform",
    // Reviewed: no Teen Patti text anywhere in this entry's copy.
    teenPattiRelevance: "none",
    shortDescription:
      "A reel-focused Jaiho app that appears to be the family's dedicated slot-machine catalogue.",
    fullDescription:
      "Jaiho Slot sits next to Jaiho 777 in the family line-up, and the distinction between the two is not well documented — both are described as slots-first apps with overlapping game types. If you are comparing them, be aware that third-party pages often mix screenshots and details from one into articles about the other. Nothing about this app's operator or game catalogue has been independently confirmed for this listing.",
    tags: ["jaiho", "slots"],
    relatedGameSlugs: ["jaiho-777", "yono-slots", "ind-slots"],
  }),
  defineGame({
    name: "Jaiho Spin",
    slug: "jaiho-spin",
    downloadUrl: "https://7jaihospinagent.com/?code=4168H4BCEUT&t=1781958114",
    aliases: ["JaihoSpin"],
    category: "Spin-style platform",
    // Reviewed: no Teen Patti text anywhere in this entry's copy.
    teenPattiRelevance: "none",
    shortDescription:
      "The Jaiho family's spin-branded app, built around wheel and spin-style games by most accounts.",
    fullDescription:
      "Jaiho Spin is described around spin-wheel mechanics — short rounds where a wheel or reel decides the outcome — rather than the longer card sessions of its rummy sibling. Spin-style apps rely heavily on reward-style presentation, which is worth keeping in mind when you evaluate screenshots or promotional videos. This directory has not verified its mechanics, odds disclosures, or operator details.",
    tags: ["jaiho", "spin"],
    relatedGameSlugs: ["yes-spin", "jaiho-arcade", "slot-spin"],
  }),
  defineGame({
    name: "Jaiho Win",
    slug: "jaiho-win",
    downloadUrl: "https://www.jaihowin11.com/?code=XZD1DCCQ3N4&t=1781958256",
    aliases: ["JaihoWin"],
    category: "Multi-game platform",
    // Reviewed: copy names only "card tables" generically, no Teen Patti text.
    teenPattiRelevance: "none",
    shortDescription:
      "A Jaiho-family app with a broad reported catalogue spanning card, spin, and reel-style games.",
    fullDescription:
      "Jaiho Win appears to be the family's catch-all app, with reports describing a mixed lobby of card tables, spin games, and slots rather than one specialty. Its name leans promotional, so it is worth separating the branding from the substance: a name containing 'win' says nothing about actual outcomes, which depend on game rules and odds that this directory has not been able to review. Operator and catalogue details are awaiting verification.",
    tags: ["jaiho", "multi-game"],
    safetyNotes:
      "Treat outcome-flavoured app names ('win', 'lucky', 'jackpot') as branding only. They carry no information about how games actually pay out.",
    relatedGameSlugs: ["jaiho-91", "jaiho-rummy", "yono-games"],
  }),
  defineGame({
    name: "Jaiho91",
    slug: "jaiho-91",
    downloadUrl: "https://jaiho91agents.com/?code=C42CFSG9NU1&t=1781970545",
    aliases: ["Jaiho 91"],
    category: "Multi-game platform",
    shortDescription:
      "A numbered Jaiho app that reportedly bundles the family's usual card and casual game mix.",
    fullDescription:
      "Jaiho91 follows the number-suffix naming common in this segment, and available descriptions suggest a general-purpose lobby similar to Jaiho Win's: card games including Teen Patti-style tables, plus spin and slot options. Numbered variants often exist because earlier versions of an app were rebranded or re-released, so version history is worth checking if you research it further. None of its details have been independently confirmed here.",
    // Mode: Teen Patti-style tables are named explicitly as one component
    // of a documented general-purpose lobby, not vague card-game language.
    teenPattiRelevance: "mode",
    tags: ["jaiho", "multi-game"],
    relatedGameSlugs: ["jaiho-win", "rummy-91", "bingo-101"],
  }),
  defineGame({
    name: "Jaiho Arcade",
    slug: "jaiho-arcade",
    downloadUrl: "https://www.jaihoarcade48.com/?code=74SY92P3WEB&t=1781955258",
    aliases: ["JaihoArcade"],
    category: "Arcade & casual games",
    // Reviewed: copy names only "familiar card options" generically, no
    // Teen Patti text.
    teenPattiRelevance: "none",
    shortDescription:
      "The casual-games corner of the Jaiho family, reportedly focused on quick arcade-style titles.",
    fullDescription:
      "Jaiho Arcade rounds out the family with short-session games — the kind you open for a few minutes rather than a long evening. Reports place familiar card options in its lobby too, but the arcade titles are the differentiator from its siblings. As with all arcade-style apps here, rotating mini-games make older reviews unreliable guides to the current catalogue. Operator and reward mechanics are awaiting review.",
    tags: ["jaiho", "arcade", "casual"],
    relatedGameSlugs: ["yono-arcade", "jaiho-spin", "spin-crush"],
  }),
];

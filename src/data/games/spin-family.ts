import { defineGame } from "./define";
import type { GameEntry } from "./types";

/**
 * Spin-branded platforms supplied by the project owner.
 */
export const spinFamily: GameEntry[] = [
  defineGame({
    name: "Slot Spin",
    slug: "slot-spin",
    downloadUrl: "https://slotsspiny.com/?code=C1A3LUE98Y9&t=1781964366",
    category: "Spin-style platform",
    // Reviewed: no Teen Patti text anywhere in this entry's copy.
    teenPattiRelevance: "none",
    shortDescription:
      "A hybrid-named app that reportedly sits between reel slots and wheel-spin mechanics.",
    fullDescription:
      "Slot Spin's name covers both of the segment's short-round formats, and descriptions suggest it delivers both: reel-based slot games plus wheel-spin rounds. Hybrid apps like this often funnel players from free spins into staked play, a transition worth noticing when it happens. This directory has not verified its mechanics, operator, or how its free and paid modes are separated.",
    tags: ["spin", "slots"],
    relatedGameSlugs: ["yes-spin", "jaiho-spin"],
  }),
  defineGame({
    name: "Spin 101",
    slug: "spin-101",
    downloadUrl: "https://spin101-f.com/?code=Z9BRWVJXE7T&t=1781966141",
    category: "Spin-style platform",
    // Reviewed: no Teen Patti text anywhere in this entry's copy.
    teenPattiRelevance: "none",
    shortDescription:
      "A 101-numbered spin app, part of a numbered series that also includes bingo and arcade titles.",
    fullDescription:
      "Spin 101 shares its number with Bingo 101 and 101Z, hinting at a common brand family built on wheel and chance mechanics. Its own reported focus is spin-round games with quick outcomes. The '101' branding suggests beginner-friendliness, but simplicity of play says nothing about the fairness or transparency of outcomes, which remain unverified for this listing.",
    tags: ["spin", "numbered"],
    relatedGameSlugs: ["bingo-101", "101z"],
  }),
  defineGame({
    name: "Spin Crush",
    slug: "spin-crush",
    downloadUrl: "https://spincrush61.com/?code=ADE75XVN5W2&t=1782646860",
    category: "Spin-style platform",
    // Reviewed: no Teen Patti text anywhere in this entry's copy.
    teenPattiRelevance: "none",
    shortDescription:
      "A spin app with casual-game branding reminiscent of match-style mobile titles.",
    fullDescription:
      "Spin Crush borrows its naming energy from casual match-three games, and that seems deliberate — reports describe fast, colourful spin rounds pitched at players who might not think of themselves as gamblers at all. That framing is worth pausing on: casual presentation around staked outcomes deserves the same care as any casino-style product. Nothing about the app's mechanics or operator has been confirmed.",
    tags: ["spin", "casual"],
    safetyNotes:
      "Casual, playful presentation can blur the line between entertainment apps and staked gaming. Check whether real money or purchases are involved before treating this as a casual game.",
    relatedGameSlugs: ["jaiho-arcade", "spin-winner", "spin-gold"],
  }),
  defineGame({
    name: "Spin Gold",
    slug: "spin-gold",
    downloadUrl: "https://spingoldvipagent.cc/?code=S9VSKRLMRJB&t=1781965765",
    category: "Spin-style platform",
    // Reviewed: no Teen Patti text anywhere in this entry's copy.
    teenPattiRelevance: "none",
    featured: true,
    shortDescription:
      "A gold-themed spin app, one of the more visible titles in the Spin series.",
    fullDescription:
      "Spin Gold dresses the series' wheel mechanics in premium gold theming, and its search visibility suggests it is among the better-known Spin titles. The premium look is presentation, not evidence of quality or reliability — the questions that matter (who operates it, how outcomes are determined, how funds are handled) are the same as for every app here, and none have been answered with verified information.",
    tags: ["spin", "popular"],
    relatedGameSlugs: ["spin-winner", "spin-crush"],
  }),
  defineGame({
    name: "Spin Winner",
    slug: "spin-winner",
    downloadUrl: "https://spinwinner-y.com/?code=QVT5YKQQ4ZZ&t=1781966029",
    category: "Spin-style platform",
    // Reviewed: no Teen Patti text anywhere in this entry's copy.
    teenPattiRelevance: "none",
    shortDescription:
      "An outcome-branded spin app whose name promises more than any game can guarantee.",
    fullDescription:
      "Spin Winner joins Slots Winner in the outcome-branded corner of this directory, and the same caveat applies: no app can promise winning, and a name is not a payout policy. Reported gameplay follows the Spin series pattern of wheel-based rounds. If you evaluate this app, put your attention on verifiable operator details and terms rather than the branding — this directory has been able to confirm neither.",
    tags: ["spin", "outcome-branding"],
    relatedGameSlugs: ["slots-winner", "spin-gold"],
  }),
  defineGame({
    name: "Yes Spin",
    slug: "yes-spin",
    downloadUrl: "https://www.yesspinclub.com/?code=47TPM5YAUBY&t=1781968075",
    category: "Spin-style platform",
    // Reviewed: no Teen Patti text anywhere in this entry's copy.
    teenPattiRelevance: "none",
    shortDescription:
      "An affirmatively-named spin app with the series' standard quick-round wheel format.",
    fullDescription:
      "Yes Spin closes out the Spin series with upbeat branding and, by available accounts, the same underlying format as its siblings: short wheel rounds with reward-style presentation. When a series shares this much structure, operator identity becomes the real differentiator between apps — and that is exactly the detail that remains unverified across the whole group, this app included.",
    tags: ["spin"],
    relatedGameSlugs: ["jaiho-spin", "slot-spin", "spin-101"],
  }),
];

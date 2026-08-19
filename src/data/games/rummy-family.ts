import { defineGame } from "./define";
import type { GameEntry } from "./types";

/**
 * Rummy-branded platforms supplied by the project owner.
 */
export const rummyFamily: GameEntry[] = [
  defineGame({
    name: "ABC Rummy",
    slug: "abc-rummy",
    downloadUrl: "https://www.11abcrummy.com/?code=6X4TN4LWGST&t=1781949033",
    category: "Rummy-focused platform",
    shortDescription:
      "A rummy app with a back-to-basics name, reportedly offering standard Indian rummy formats.",
    fullDescription:
      "ABC Rummy markets itself on simplicity — the name promises rummy without frills, and available descriptions match that: points-style tables and standard Indian rummy formats, with Teen Patti-style games sometimes mentioned as extras. Simple branding cuts both ways, though; generic names are easy for unrelated apps to imitate. Its operator, table rules, and account handling have not been verified for this listing.",
    // Incidental: "sometimes mentioned as extras" is hedged, secondary
    // marketing language, not a documented identifiable mode.
    teenPattiRelevance: "incidental",
    tags: ["rummy", "card-games"],
    relatedGameSlugs: ["game-rummy", "ok-rummy", "hi-rummy"],
  }),
  defineGame({
    name: "Boss Rummy",
    slug: "boss-rummy",
    downloadUrl: "https://www.bossrummyv.com/?code=9HF54MYMV8X&t=1781969528",
    category: "Rummy-focused platform",
    // Reviewed: no Teen Patti text anywhere in this entry's copy.
    teenPattiRelevance: "none",
    shortDescription:
      "A rummy platform whose listings emphasise competitive tables and tournament-style play.",
    fullDescription:
      "Boss Rummy pitches itself at players who want competition, with descriptions mentioning tournament-style formats alongside regular tables. Tournament claims deserve particular scrutiny in this segment — entry conditions, prize handling, and scheduling are exactly the details that change without notice. This directory has not confirmed the app's operator, formats, or whether its reported tournaments currently run.",
    tags: ["rummy", "tournaments"],
    relatedGameSlugs: ["top-rummy", "max-rummy", "rumble-rummy"],
  }),
  defineGame({
    name: "Game Rummy",
    slug: "game-rummy",
    downloadUrl: "https://gamerummyq.com/?code=GAF5Y5CUMVU&t=1781950990",
    category: "Rummy-focused platform",
    shortDescription:
      "A generically-named rummy app reported to carry the standard mix of Indian rummy tables.",
    fullDescription:
      "Game Rummy is about as literal as app naming gets, and its reported offering is equally standard: Indian rummy variants at the centre, with side games that listings occasionally describe as including Teen Patti-style tables. The generic name makes it one of the hardest apps in this directory to research reliably, since search results blend it with dozens of similarly-named products. Every substantive detail remains awaiting verification.",
    // Incidental: "listings occasionally describe" is hedged, secondary
    // language, not a documented identifiable mode.
    teenPattiRelevance: "incidental",
    tags: ["rummy", "card-games"],
    safetyNotes:
      "Because this name is so generic, search results mix multiple unrelated apps. Anchor your research to the exact publisher and icon, not the name alone.",
    relatedGameSlugs: ["abc-rummy", "ind-rummy", "joy-rummy"],
  }),
  defineGame({
    name: "Gogo Rummy",
    slug: "gogo-rummy",
    downloadUrl: "https://www.gogorummy30.com/?code=V4U7LU1TUDZ&t=1781951275",
    category: "Rummy-focused platform",
    // Reviewed: no Teen Patti text anywhere in this entry's copy.
    teenPattiRelevance: "none",
    shortDescription:
      "A rummy app branded around speed, reportedly favouring quick tables and fast matchmaking.",
    fullDescription:
      "Gogo Rummy's branding suggests pace — quick seating, short rounds, minimal waiting — and the descriptions we have seen lean the same way. Fast-format card apps tend to encourage more hands per session, which is worth being conscious of if you track your own play time. The app's operator, formats, and account mechanics have not been independently reviewed for this listing.",
    tags: ["rummy", "quick-play"],
    relatedGameSlugs: ["rumble-rummy", "hi-rummy", "love-rummy"],
  }),
  defineGame({
    name: "Hi Rummy",
    slug: "hi-rummy",
    downloadUrl: "https://joinhirummy.cc/?code=RX37ZA9H7G7&t=1781952763",
    category: "Rummy-focused platform",
    // Reviewed: copy names only "the usual companion card games" generically,
    // no Teen Patti text.
    teenPattiRelevance: "none",
    shortDescription:
      "A casually-branded rummy app that positions itself as friendly and easy to pick up.",
    fullDescription:
      "Hi Rummy goes for an approachable feel, presenting rummy as a casual pastime rather than a competitive pursuit. Descriptions mention standard tables with beginner-friendly presentation, and the usual companion card games appear in some listings. Approachable branding does not change the underlying category, though — if real money is involved, the same care applies here as anywhere. Details are awaiting verification.",
    tags: ["rummy", "casual"],
    relatedGameSlugs: ["gogo-rummy", "joy-rummy", "abc-rummy"],
  }),
  defineGame({
    name: "Ind Rummy",
    slug: "ind-rummy",
    downloadUrl: "https://indrummyvip30.com/?code=2BAB6MWU1ST&t=1781954340",
    category: "Rummy-focused platform",
    // Reviewed: no Teen Patti text anywhere in this entry's copy.
    teenPattiRelevance: "none",
    shortDescription:
      "An India-branded rummy app in the Ind series, reportedly built around classic Indian rummy.",
    fullDescription:
      "Ind Rummy anchors the 'Ind' series of apps, and its reported focus is exactly what the name implies: classic Indian rummy formats for an Indian audience. Sibling apps in the series cover slots, bingo, and club-style lobbies, suggesting shared infrastructure across the group. Whether that sharing extends to accounts or wallets is unknown — like everything else about the series, it awaits verification.",
    tags: ["rummy", "ind-series"],
    relatedGameSlugs: ["ind-club", "ind-slots", "inr-rummy"],
  }),
  defineGame({
    name: "INR Rummy",
    slug: "inr-rummy",
    downloadUrl: "https://inrrummysvip.net/?code=JMQK62EW7RW&t=1781969140",
    aliases: ["INR-Rummy"],
    category: "Rummy-focused platform",
    // Reviewed: no Teen Patti text anywhere in this entry's copy.
    teenPattiRelevance: "none",
    shortDescription:
      "A rummy app named after the rupee, signalling an explicitly Indian, cash-table orientation.",
    fullDescription:
      "INR Rummy wears its market on its sleeve — the rupee abbreviation in the name signals Indian cash tables as the core offering. Cash-oriented branding raises the stakes of every unverified detail: deposits, withdrawals, and fee structures matter more when money moves. None of those mechanics have been confirmed for this listing, so verify them directly with the operator before committing anything.",
    tags: ["rummy", "cash-tables"],
    safetyNotes:
      "Apps that foreground cash play deserve the strictest checks. Confirm withdrawal terms and minimums from the operator's own documentation, not from screenshots or forwarded messages.",
    relatedGameSlugs: ["club-inr", "ind-rummy", "mbm-bet"],
  }),
  defineGame({
    name: "Joy Rummy",
    slug: "joy-rummy",
    downloadUrl: "https://www.joyrummy8.com/?code=J5KZREFFUG5&t=1781969686",
    aliases: ["Joy-Rummy"],
    category: "Rummy-focused platform",
    // Reviewed: copy names only "occasional side games" generically, no
    // Teen Patti text.
    teenPattiRelevance: "none",
    shortDescription:
      "A cheerfully-branded rummy app reported to offer standard tables with a lighter presentation.",
    fullDescription:
      "Joy Rummy pairs standard Indian rummy formats with upbeat branding aimed at casual players. Reports suggest the familiar structure — points tables, quick matches, occasional side games — without a distinctive specialty. Cheerful presentation can make it easy to lose track of time or spending, so the same session-limit habits recommended across this directory apply. Operator and format details are awaiting review.",
    tags: ["rummy", "casual"],
    relatedGameSlugs: ["hi-rummy", "love-rummy", "game-rummy"],
  }),
  defineGame({
    name: "Love Rummy",
    slug: "love-rummy",
    downloadUrl: "https://www.loverummy88.com/?code=R6KTL37DEVW&t=1781958746",
    category: "Rummy-focused platform",
    // Reviewed: no Teen Patti text anywhere in this entry's copy.
    teenPattiRelevance: "none",
    shortDescription:
      "A rummy app with affectionate branding, reportedly carrying the segment's usual table formats.",
    fullDescription:
      "Love Rummy rounds out the emotive-branding corner of this segment, offering what descriptions suggest are conventional rummy tables beneath the themed presentation. There is little public documentation distinguishing it from similarly-positioned apps, which itself is useful information: when an app is hard to research, the burden of verification falls entirely on you. All substantive details remain unconfirmed.",
    tags: ["rummy", "casual"],
    relatedGameSlugs: ["joy-rummy", "gogo-rummy", "hi-rummy"],
  }),
  defineGame({
    name: "Max Rummy",
    slug: "max-rummy",
    downloadUrl: "https://www.maxrummy99.com/?code=QUMV1MBQR7L&t=1783566019",
    aliases: ["MAX RUMMY"],
    category: "Rummy-focused platform",
    // Reviewed: no Teen Patti text anywhere in this entry's copy.
    teenPattiRelevance: "none",
    logo: "/images/games/max-rummy.png",
    featuredImage: "/images/games/max-rummy.png",
    shortDescription:
      "A rummy platform whose 'max' branding suggests larger tables or higher-stakes positioning.",
    fullDescription:
      "Max Rummy positions itself above the casual tier, with branding that implies bigger tables, higher limits, or a more serious player base. Higher-stakes positioning makes operator credibility the single most important unknown, and it is an unknown — this directory has no verified information about who runs the app or how it handles player funds. Approach any stakes-related claims with corresponding caution.",
    tags: ["rummy", "high-stakes"],
    relatedGameSlugs: ["boss-rummy", "top-rummy", "rummy-888"],
  }),
  defineGame({
    name: "OkRummy",
    slug: "ok-rummy",
    downloadUrl: "https://www.okrummy48.com/?code=H2GNJTTB4TP&t=1781959294",
    aliases: ["OK Rummy", "OkRUMMY"],
    category: "Rummy-focused platform",
    // Reviewed: no Teen Patti text anywhere in this entry's copy.
    teenPattiRelevance: "none",
    shortDescription:
      "A minimally-branded rummy app reported to focus on straightforward, no-frills table play.",
    fullDescription:
      "OkRummy's understated name matches its reported offering: plain rummy tables without elaborate themes or side attractions. Minimal apps can be pleasant to use, but minimal public presence also means minimal accountability trail — reviews, operator history, and support records are all thin. Consider that trade-off before creating an account, and treat every detail here as unverified.",
    tags: ["rummy", "minimal"],
    relatedGameSlugs: ["abc-rummy", "game-rummy", "ind-rummy"],
  }),
  defineGame({
    name: "Rumble Rummy",
    slug: "rumble-rummy",
    downloadUrl: "https://www.rumblerummy333.net/?code=82MDH43NXH9&t=1781961857",
    category: "Rummy-focused platform",
    // Reviewed: no Teen Patti text anywhere in this entry's copy.
    teenPattiRelevance: "none",
    shortDescription:
      "A competition-flavoured rummy app whose branding leans into head-to-head energy.",
    fullDescription:
      "Rumble Rummy sells competitive energy — the name evokes head-to-head contests, and descriptions mention versus-style formats alongside regular tables. Competitive framing often comes with leaderboard and streak mechanics designed to keep sessions going, which is a pattern worth recognising in your own play. The app's actual formats, operator, and reward mechanics have not been confirmed.",
    tags: ["rummy", "competitive"],
    relatedGameSlugs: ["boss-rummy", "gogo-rummy", "max-rummy"],
  }),
  defineGame({
    name: "Rummy 91",
    slug: "rummy-91",
    downloadUrl: "https://www.rummy91q.bet/?code=UXT67QH88MK&t=1781963162",
    aliases: ["Rummy91"],
    category: "Rummy-focused platform",
    // Reviewed: copy names only "companion card games" generically, no
    // Teen Patti text.
    teenPattiRelevance: "none",
    shortDescription:
      "A numbered rummy app, one of several 91-suffixed titles circulating in this segment.",
    fullDescription:
      "Rummy 91 belongs to the cluster of 91-numbered apps in this space — the suffix nods to India's dialling code and appears across unrelated products, so the number alone tells you nothing about who operates it. Reported offerings are standard rummy tables with occasional mentions of companion card games. Distinguish it carefully from other '91' apps before applying anything you read; all details here await verification.",
    tags: ["rummy", "numbered"],
    safetyNotes:
      "Several unrelated apps use the '91' suffix. Confirm the exact icon and publisher so you do not act on information about a different '91' product.",
    relatedGameSlugs: ["jaiho-91", "rummy-77", "rummy-888"],
  }),
  defineGame({
    name: "Rummy77",
    slug: "rummy-77",
    downloadUrl: "https://rummy77z.vip/?code=F3VMY7HUKLD&t=1781962775",
    aliases: ["Rummy 77"],
    category: "Rummy-focused platform",
    // Reviewed: no Teen Patti text anywhere in this entry's copy.
    teenPattiRelevance: "none",
    shortDescription:
      "A 77-numbered rummy app reported to blend classic tables with lightweight bonus mechanics.",
    fullDescription:
      "Rummy77 pairs standard Indian rummy with the number-luck branding common to this family of apps. Some listings mention daily bonus mechanics layered over the tables — the kind of retention feature that is easy to overstate in promotional material, so weigh such claims accordingly. Operator identity, bonus terms, and table rules all remain unverified for this listing.",
    tags: ["rummy", "numbered"],
    relatedGameSlugs: ["rummy-91", "rummy-888", "hindi-777"],
  }),
  defineGame({
    name: "Rummy888",
    slug: "rummy-888",
    downloadUrl: "https://rummy888vip37.com/?code=TPUREFESN3G&t=1781963064",
    aliases: ["Rummy 888"],
    category: "Rummy-focused platform",
    // Reviewed: no Teen Patti text anywhere in this entry's copy.
    teenPattiRelevance: "none",
    featured: true,
    shortDescription:
      "A prominent 888-branded rummy app, among the more frequently searched titles in this directory.",
    fullDescription:
      "Rummy888 uses the triple-eight branding long associated with luck in gaming culture, and it appears to be one of the more visible apps in this segment based on search interest. Visibility is not verification: a well-known name still requires the same checks on operator identity, fund handling, and fairness as an obscure one. This directory has confirmed none of those details and lists the app on an informational basis only.",
    tags: ["rummy", "numbered", "popular"],
    relatedGameSlugs: ["rummy-77", "max-rummy", "yono-rummy", "777-game"],
  }),
  defineGame({
    name: "Rummy Ludo",
    slug: "rummy-ludo",
    downloadUrl: "https://www.rummyludo1.com/?code=UWPCL2TP9N3&t=1781963324",
    aliases: ["Rummy-Ludo"],
    category: "Multi-game platform",
    // Reviewed: no Teen Patti text anywhere in this entry's copy.
    teenPattiRelevance: "none",
    shortDescription:
      "A dual-genre app pairing rummy tables with ludo boards, unusual among this directory's listings.",
    fullDescription:
      "Rummy Ludo is the only app in this directory that leads with a board game: it reportedly pairs Indian rummy tables with ludo matches in one lobby. The combination targets players who move between card and board games, and it raises a specific question worth checking — whether both halves use the same wallet and stake rules. As with all entries here, no operational details have been independently confirmed.",
    tags: ["rummy", "ludo", "board-games"],
    relatedGameSlugs: ["yono-games", "maha-games", "game-rummy"],
  }),
  defineGame({
    name: "Top Rummy",
    slug: "top-rummy",
    downloadUrl: "https://www.toprummy.cc/?code=M4GW3PJNE81&t=1781967667",
    category: "Rummy-focused platform",
    // Reviewed: no Teen Patti text anywhere in this entry's copy.
    teenPattiRelevance: "none",
    shortDescription:
      "A rummy app whose superlative branding positions it as a leading option, a claim to weigh carefully.",
    fullDescription:
      "Top Rummy's name is a marketing claim in itself, and it is the kind of claim this directory exists to put in context: 'top' reflects branding, not any ranking or endorsement. Its reported offering is conventional — Indian rummy formats with standard table types. Judge it by verifiable specifics like operator identity and withdrawal terms rather than the name, none of which have been confirmed here.",
    tags: ["rummy", "card-games"],
    relatedGameSlugs: ["boss-rummy", "max-rummy", "rumble-rummy"],
  }),
  defineGame({
    name: "Win Rummy",
    slug: "win-rummy",
    downloadUrl: "https://www.winrummy10.com/?code=8JT9D83WCC3&t=1785293043",
    category: "Multi-game platform",
    logo: "/images/games/win-rummy.png",
    featuredImage: "/images/games/win-rummy.png",
    shortDescription:
      "A newly launched multi-game platform advertising 25+ games including Teen Patti, rummy, poker, and Andar Bahar — the app is now downloadable, but individual game claims remain unverified.",
    fullDescription:
      "Win Rummy has launched, with a working download link now available. Its marketing website advertises more than 25 games, naming rummy, poker, Teen Patti, Andar Bahar, Dragon and Tiger, Baccarat, Blackjack, Roulette, and several non-card titles. Rummy is the most prominently presented category — it appears in the platform name, the Top Games section, and the app-download area — but Teen Patti is only mentioned in the site's description text and a testimonial, not shown as its own tile in the visible Top Games grid. Which specific games and variants actually work inside the released app has not yet been independently reviewed. See this directory's full write-up on whether Win Rummy includes Teen Patti for the detailed breakdown.",
    informationalStatus:
      "This platform has launched and a download link is now available. Every game named on the website — including Teen Patti — is still advertised only at this stage, not independently app-verified.",
    // Incidental, not "mode": the entry's own fullDescription explicitly
    // states Teen Patti "is only mentioned in the site's description text
    // and a testimonial, not shown as its own tile in the visible Top Games
    // grid" — the textbook definition of secondary/testimonial-only
    // reference, despite the "teen-patti" tag below (kept for discoverability,
    // not as a relevance claim).
    teenPattiRelevance: "incidental",
    tags: ["newly-launched", "multi-game", "teen-patti"],
    relatedArticleSlugs: ["win-rummy-teen-patti-card-games"],
    publishedAt: "2026-07-25",
    updatedAt: "2026-07-29",
  }),
  defineGame({
    name: "Gold Rummy",
    slug: "gold-rummy",
    downloadUrl: "https://goldrummy20.com/?code=JLX7LRP2YTG&t=1787111858",
    category: "Rummy-focused platform",
    logo: "/images/games/gold-rummy.png",
    featuredImage: "/images/games/gold-rummy.png",
    shortDescription:
      "A newly launched rummy platform with a working download link — no welcome bonus or promo code has been announced yet.",
    fullDescription:
      "Gold Rummy has launched, with a working download link now available. As a newly launched app, its full feature set, table formats, and promo-code schedule have not yet been independently reviewed. This entry will be updated with verified category specifics, promo codes, and safety notes as they can be confirmed, in line with this directory's policy of never publishing invented details.",
    informationalStatus:
      "This platform has launched and a download link is now available. Its feature set, table formats, and promo codes are still unverified at this stage.",
    tags: ["newly-launched", "rummy"],
    publishedAt: "2026-08-18",
    updatedAt: "2026-08-19",
  }),
];

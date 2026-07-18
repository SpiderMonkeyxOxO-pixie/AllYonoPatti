import { defineGame } from "./define";
import type { GameEntry } from "./types";

/**
 * Remaining platforms supplied by the project owner that sit outside the
 * main Yono / Jaiho / Rummy / Spin / Slots naming families.
 */
export const miscPlatforms: GameEntry[] = [
  defineGame({
    name: "101Z",
    slug: "101z",
    downloadUrl: "https://101z19.com/?code=398FMU1E4UC&t=1781948650",
    aliases: ["101z", "101 Z"],
    category: "Multi-game platform",
    shortDescription:
      "A tersely-named app in the 101 cluster with a reported mixed catalogue of quick games.",
    fullDescription:
      "101Z is the most cryptic name in this directory, and public documentation is correspondingly thin. It appears to belong to the same 101-branded cluster as Spin 101 and Bingo 101, with reports suggesting a mixed lobby of quick chance-based games. When an app is this hard to research, treat the information gap itself as a signal: you would be relying almost entirely on the operator's own claims, none of which have been verified here.",
    tags: ["numbered", "multi-game"],
    safetyNotes:
      "Very little public information exists about this app. Assume nothing, verify everything, and be cautious with any page claiming detailed knowledge of it.",
    relatedGameSlugs: ["spin-101", "bingo-101"],
  }),
  defineGame({
    name: "777 Game",
    slug: "777-game",
    downloadUrl: "https://www.777game2.com/?code=H53WZ731GKT&t=1781948890",
    aliases: ["777Game"],
    category: "Slots-style platform",
    shortDescription:
      "A plainly-named 777 app whose reported focus is classic lucky-seven reel play.",
    fullDescription:
      "777 Game strips the formula to its base elements: sevens and reels. Reports describe classic slot-style rounds without the family branding of its Yono and Jaiho counterparts, which may mean an independent operator or simply quieter marketing. The unadorned name makes it particularly prone to confusion with the many other 777-titled apps in circulation. Its operator and catalogue remain unverified.",
    tags: ["slots", "777"],
    relatedGameSlugs: ["yono-777", "jaiho-777", "hindi-777"],
  }),
  defineGame({
    name: "789 Jackpot",
    slug: "789-jackpot",
    downloadUrl: "https://join789jackpots.cc/?code=VJJL7DL96SG&t=1781948943",
    aliases: ["789Jackpot"],
    category: "Slots-style platform",
    shortDescription:
      "A jackpot-branded reel app; jackpot terms are exactly the details to verify before believing.",
    fullDescription:
      "789 Jackpot extends the number theme past seven and puts the jackpot promise front and centre. Jackpot mechanics — how prize pools accumulate, who is eligible, and how winners are paid — are among the most misrepresented details in this segment, so any specific jackpot figures you see attributed to this app should be treated as unverified marketing until proven otherwise. This directory has confirmed none of its mechanics.",
    tags: ["slots", "jackpot"],
    safetyNotes:
      "Specific jackpot amounts circulating in ads or messages are unverifiable without operator documentation. Never deposit on the strength of a screenshotted jackpot figure.",
    relatedGameSlugs: ["567-slots", "777-game", "slots-winner"],
  }),
  defineGame({
    name: "Bet 213",
    slug: "bet-213",
    downloadUrl: "https://www.bet213app.com/?code=2QTMHNTC4J9&t=1781949147",
    aliases: ["Bet213"],
    category: "Multi-game platform",
    shortDescription:
      "An explicitly betting-branded app, which makes local-law checks especially important.",
    fullDescription:
      "Bet 213 carries 'bet' directly in its name, which removes any ambiguity about its category: this is staked gaming, presented as such. That directness has a practical consequence — the legal considerations that apply to real-money gaming apply squarely here, and several Indian states restrict or prohibit such products. Check your state's current rules before going further. The app's operator, catalogue, and licensing are all unverified.",
    tags: ["betting", "multi-game"],
    safetyNotes:
      "Betting-branded apps sit clearly inside real-money gaming regulation. Confirm the current legal position in your state before creating an account or depositing.",
    relatedGameSlugs: ["mbm-bet", "club-inr", "789-jackpot"],
  }),
  defineGame({
    name: "Bingo 101",
    slug: "bingo-101",
    downloadUrl: "https://bingo101.info/?code=3WFYXGESSL8&t=1781949273",
    aliases: ["Bingo101"],
    category: "Bingo-style platform",
    shortDescription:
      "A bingo-first app in the 101 cluster, the only bingo-focused title listed here.",
    fullDescription:
      "Bingo 101 brings number-draw bingo to the 101 cluster, making it the only bingo-focused entry in this directory. Bingo's simple format can obscure that staked versions are still gambling products, with the same questions about odds, operators, and fund handling as any slots app. Descriptions suggest standard bingo rooms with themed variations; none of this has been independently confirmed.",
    tags: ["bingo", "numbered"],
    relatedGameSlugs: ["spin-101", "101z"],
  }),
  defineGame({
    name: "Club INR",
    slug: "club-inr",
    downloadUrl: "https://clubinr2.top/?code=WZJ9KYQMY2X&t=1781949863",
    aliases: ["ClubINR"],
    category: "Multi-game platform",
    featured: true,
    shortDescription:
      "A club-styled, rupee-branded platform reportedly organising mixed games in a members' lobby.",
    fullDescription:
      "Club INR combines the members-club framing of Ind Club with the currency branding of INR Rummy: a lobby of mixed games — card tables reportedly among them — presented as a club for Indian players. Club framing plus cash branding is a combination that warrants double care, since both elements are designed to build commitment. Membership mechanics, fund handling, and the operator behind it all remain unverified.",
    tags: ["club", "cash-tables", "multi-game"],
    relatedGameSlugs: ["inr-rummy", "ind-club", "neta-vip"],
  }),
  defineGame({
    name: "Hindi777",
    slug: "hindi-777",
    downloadUrl: "https://www.hindi777agent4.com/?code=7LFAXV7ZFX2&t=1781953691",
    aliases: ["Hindi 777"],
    category: "Slots-style platform",
    shortDescription:
      "A 777 app branded for Hindi-speaking players, suggesting localised presentation.",
    fullDescription:
      "Hindi777 is the one app in this directory whose name promises language localisation, pairing lucky-seven reel branding with an explicit appeal to Hindi-speaking players. Whether the interface is genuinely available in Hindi is exactly the kind of claim worth confirming first-hand, since language support listed in promotional material does not always survive into the app itself. Its catalogue and operator details are awaiting review.",
    tags: ["slots", "777", "hindi"],
    relatedGameSlugs: ["777-game", "yn-777", "maha-games"],
  }),
  defineGame({
    name: "Ind Club",
    slug: "ind-club",
    downloadUrl: "https://indclub38.com/?code=W231VYT9S4K&t=1781953944",
    category: "Multi-game platform",
    shortDescription:
      "The club-styled hub of the Ind series, reportedly gathering the family's games in one lobby.",
    fullDescription:
      "Ind Club presents itself as the gathering point of the Ind series — a club-styled lobby that reportedly brings the family's rummy, slots, and bingo offerings together. Hub apps concentrate convenience and risk in equal measure: one account touching many staked games means one set of terms governing all of them. Read those terms directly from the operator if you proceed; this directory has not been able to verify them.",
    tags: ["club", "ind-series", "multi-game"],
    relatedGameSlugs: ["ind-rummy", "ind-slots", "club-inr"],
  }),
  defineGame({
    name: "Maha Games",
    slug: "maha-games",
    downloadUrl: "https://mahagames-a.com/?code=J245HMNW4C3&t=1781958855",
    aliases: ["MahaGames"],
    category: "Multi-game platform",
    shortDescription:
      "A grandly-named multi-game app whose 'maha' branding promises scale across genres.",
    fullDescription:
      "Maha Games reaches for scale in its very name — 'maha' meaning great — and reports describe a correspondingly broad lobby spanning card, spin, and casual titles. Grand branding sets expectations that catalogues do not always meet, and in this segment catalogue size is also unverifiable without inspection. Judge the app by specifics you can confirm with the operator, none of which have been confirmed here.",
    tags: ["multi-game", "hindi"],
    relatedGameSlugs: ["yono-games", "rummy-ludo", "hindi-777"],
  }),
  defineGame({
    name: "MBM Bet",
    slug: "mbm-bet",
    downloadUrl: "https://www.mbmbet21.com/?code=UPHZHE49PH6&t=1781958952",
    aliases: ["MBMBet"],
    category: "Multi-game platform",
    shortDescription:
      "An initialled betting app with minimal public documentation of what the initials stand for.",
    fullDescription:
      "MBM Bet pairs unexplained initials with explicit betting branding, and public information about it is among the thinnest in this directory — we found no reliable account of what MBM stands for or who operates the app. Betting-branded products with opaque ownership are the highest-caution combination this directory lists. If you research it, prioritise identifying the operator before considering anything else; every detail here awaits verification.",
    tags: ["betting", "initials"],
    safetyNotes:
      "Opaque ownership plus betting branding warrants maximum caution. Do not deposit funds with an operator you cannot identify.",
    relatedGameSlugs: ["bet-213", "club-inr"],
  }),
  defineGame({
    name: "Neta Vip",
    slug: "neta-vip",
    downloadUrl: "https://neta7.vip/?code=DR0TFBX29CG&t=1781959176",
    aliases: ["Neta VIP", "NetaVip"],
    category: "Multi-game platform",
    shortDescription:
      "A VIP-styled multi-game app whose leader-flavoured branding targets status-conscious players.",
    fullDescription:
      "Neta Vip layers status branding — 'neta' evoking a leader — over what reports suggest is a standard mixed-game lobby. Like Yono Vip, its VIP framing implies membership tiers and perks, claims that live entirely in unverified territory for this listing. Status mechanics are designed to reward continued spending, which is worth keeping in view however the app actually implements them. Operator and catalogue details are awaiting review.",
    tags: ["vip", "multi-game"],
    relatedGameSlugs: ["yono-vip", "club-inr", "maha-games"],
  }),
];

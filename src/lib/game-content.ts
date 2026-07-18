import type { GameEntry } from "@/data/games";
import type { FaqItem } from "@/components/ui/FaqSection";
import { promoStatusLabels } from "@/lib/compliance";

/**
 * Category-specific reported characteristics. These describe how apps in
 * each category are commonly presented, not verified facts about any
 * individual app — the wording keeps that distinction explicit.
 */
const categoryFeatures: Record<string, string[]> = {
  "Rummy-focused platform": [
    "Indian rummy tables (points-style formats are most commonly reported)",
    "Teen Patti-style card tables often listed alongside the rummy lobby",
    "Quick matchmaking into small tables rather than scheduled events",
    "In-app wallets for staked play (terms vary and require direct verification)",
  ],
  "Slots-style platform": [
    "Catalogues of themed reel games with short rounds",
    "Bonus-round and free-spin mechanics inside individual games",
    "Card tables, sometimes including Teen Patti-style games, as secondary options",
    "Reward-flavoured presentation that should be read as marketing, not odds",
  ],
  "Spin-style platform": [
    "Wheel-spin rounds where a single spin decides the outcome",
    "Very short sessions with immediate results",
    "Daily-spin or bonus-spin mechanics commonly used for retention",
    "Simple interfaces designed for one-handed phone play",
  ],
  "Bingo-style platform": [
    "Number-draw bingo rooms with automatic daubing",
    "Themed room variations at different reported stake levels",
    "Chat or social features in some rooms",
    "Side games that can include card tables",
  ],
  "Arcade & casual games": [
    "Short-session arcade and casual mini-games",
    "Rotating game line-ups that change without notice",
    "Familiar card options reported alongside the casual titles",
    "Casual presentation that can understate the staked nature of some games",
  ],
  "Multi-game platform": [
    "A single lobby collecting card, spin, slot, and casual games",
    "One account and wallet reported to span the whole catalogue",
    "Teen Patti-style tables commonly included in the card section",
    "Catalogues that change frequently, making old reviews unreliable",
  ],
};

const categoryModes: Record<string, string> = {
  "Rummy-focused platform":
    "Apps in this category usually organise play around table formats: points rummy for quick rounds, with pool or deals formats sometimes reported, plus a separate card-games section where Teen Patti-style tables typically live.",
  "Slots-style platform":
    "Play is organised as a catalogue of individual reel games rather than tables. Each game has its own theme and bonus mechanics; card tables, where present, sit in a separate lobby section.",
  "Spin-style platform":
    "The core loop is a wheel or spin round with an immediate outcome. Variations mostly change theming and stake levels rather than mechanics, and some apps add card tables as a secondary section.",
  "Bingo-style platform":
    "Rooms run on draw cycles that players join between rounds. Different rooms vary the card price, pattern, and pace, and side lobbies can carry unrelated games.",
  "Arcade & casual games":
    "The lobby presents a rotating shelf of mini-games with different mechanics. Expect the line-up to differ from week to week; card and spin options usually occupy their own tabs.",
  "Multi-game platform":
    "The app is a hub: separate sections for cards, slots, spins, and casual titles behind one login. Section contents change often, so treat any specific game list as a snapshot.",
};

export function getReportedFeatures(game: GameEntry): string[] {
  return categoryFeatures[game.category] ?? [];
}

export function getModesDescription(game: GameEntry): string {
  return categoryModes[game.category] ?? "";
}

export function buildGameFaqs(game: GameEntry): FaqItem[] {
  const promoLabel = promoStatusLabels[game.promoStatus] ?? game.promoStatus;
  return [
    {
      question: `Is ${game.name} an official or verified app?`,
      answer: `No verification has been supplied for this listing. ${game.name} is listed on an informational basis with status "awaiting review" — this directory has not confirmed its operator, licensing, or catalogue, and is not affiliated with it. Verify any claim of official status directly with the operator.`,
    },
    {
      question: `Does ${game.name} have a promo code right now?`,
      answer: `The current promo status for ${game.name} is "${promoLabel}". No code has been supplied and verified for this listing, and this directory never publishes invented codes. Check the dedicated promo page for the latest recorded status.`,
    },
    {
      question: `Is ${game.name} free to use?`,
      answer: `Unknown. Apps in the ${game.category.toLowerCase()} category are typically free to install but commonly involve real-money play, purchases, or staked games. Confirm the cost model in the app's own terms before creating an account, and remember that "free to download" is not the same as "free to play".`,
    },
    {
      question: `Where can I download ${game.name}?`,
      answer: game.downloadUrl
        ? `A download button for ${game.name} is provided on this page. It uses a referral link managed by this website's operator and opens an external platform site that this directory does not operate; it has not been separately verified as the platform's official channel. This directory does not host APK files itself — avoid third-party APK mirrors, which are a common route for tampered apps.`
        : `This directory does not host downloads or APK files and has no verified official source on record for ${game.name}. If you decide to install it, locate the operator's documented official channel yourself and avoid third-party APK mirrors, which are a common route for tampered apps.`,
    },
    {
      question: `Is ${game.name} legal in my state?`,
      answer: `Rules for online real-money gaming differ between Indian states and change over time, so no listing here can answer that for you. Check your state's current position before registering — our legalities overview explains why the answer varies.`,
    },
  ];
}

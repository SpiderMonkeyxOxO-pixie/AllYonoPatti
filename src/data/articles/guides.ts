import type { Article } from "./types";

/**
 * Educational guides: evergreen explanations of Teen Patti itself.
 */
export const guides: Article[] = [
  {
    slug: "what-is-teen-patti",
    title: "What Is Teen Patti? A Beginner-Friendly Explanation",
    description:
      "Teen Patti is India's three-card betting game, played socially for generations and now available in dozens of apps. Here is how it works and where it came from.",
    category: "Teen Patti Basics",
    featuredImage: "/images/blog/what-is-teen-patti.webp",
    publishedAt: "2026-07-17",
    updatedAt: "2026-07-17",
    relatedSlugs: ["teen-patti-rules", "teen-patti-hand-rankings", "teen-patti-vs-poker"],
    sections: [
      {
        paragraphs: [
          "Teen Patti — literally 'three cards' in Hindi — is a betting card game played with a standard 52-card deck, usually by three to six players. Each player receives three cards face down, and the game revolves around betting on whose hand ranks highest. It has been a fixture of Indian households for generations, especially around Diwali, when playing cards is considered auspicious in many families.",
          "The game is [often called Indian poker](/guides/teen-patti-vs-poker), and the comparison is fair as far as it goes: both are vying games where players bet in rounds and the best hand wins if things reach a showdown. But Teen Patti is older in its lineage — it descends from the British game three-card brag — and its rhythm is quite different from poker's, faster and more direct.",
        ],
      },
      {
        heading: "The shape of a hand",
        paragraphs: [
          "A round of Teen Patti is simple in outline. Everyone puts a small agreed stake — the boot — into the pot. The dealer gives each player three cards face down. Betting then moves around the table: on your turn you either put in chips to stay in the round or fold (pack) and give up your cards.",
          "What makes the game distinctive is the choice to play blind. A blind player bets without looking at their cards, and in exchange pays less to stay in than a player who has looked (a seen player). This creates the game's central tension — a confident blind player can pressure seen players into folding decent hands.",
          "The round ends when only one player remains, who wins the pot without showing anything, or when two remaining players go to a show and compare hands. Highest-ranking hand takes the pot.",
        ],
      },
      {
        heading: "How hands rank",
        paragraphs: [
          "From strongest to weakest: three of a kind (trail or set), straight flush (pure sequence), straight (sequence), flush (colour), pair, and high card. Aces are high, and the rarest hands beat the more common ones — with three cards, a trail comes along very rarely, which is why it sits at the top. Our [hand rankings guide](/guides/teen-patti-hand-rankings) walks through each with examples.",
        ],
      },
      {
        heading: "Where people play it now",
        paragraphs: [
          "Alongside the traditional home game, Teen Patti now exists in a crowded world of mobile apps — some free-to-play with virtual chips, others involving real money. The two experiences look similar on screen but are very different products, legally and financially. Real-money play is regulated differently across Indian states, and the apps offering it vary enormously in transparency and quality.",
          "That variety is the reason this directory exists. If you are [exploring Teen Patti apps](/games), learn the game itself first — it costs nothing at a family table — and read our [platform review guide](/guides/how-to-review-a-teen-patti-platform-safely) before trusting any app with money or personal information.",
        ],
      },
    ],
    faq: [
      {
        question: "How many players do you need for Teen Patti?",
        answer:
          "Three to six players is typical. The game uses a standard 52-card deck, with each player dealt three cards face down.",
      },
      {
        question: "What does playing blind mean in Teen Patti?",
        answer:
          "A blind player bets without looking at their cards and pays less per bet than a player who has looked. It creates the game's central tension — a confident blind player can pressure seen players into folding decent hands.",
      },
      {
        question: "Is Teen Patti the same as poker?",
        answer:
          "They are related — both are vying games where players bet in rounds and the best hand wins at showdown — but Teen Patti descends from the British game three-card brag, uses fixed three-card hands, and plays faster and more directly than poker.",
      },
      {
        question: "Is Teen Patti played for real money?",
        answer:
          "Both versions exist. Some apps are free-to-play with virtual chips; others involve real money, which is regulated differently across Indian states. The two look similar on screen but are very different products, so establish which kind an app is before committing anything.",
      },
    ],
  },
  {
    slug: "teen-patti-rules",
    title: "Teen Patti Rules Explained",
    description:
      "The complete rules of Teen Patti: the boot, dealing, blind and seen play, chaal, sideshow, and show — explained step by step for new players.",
    category: "Rules and Hand Rankings",
    featuredImage: "/images/blog/teen-patti-rules.webp",
    publishedAt: "2026-07-17",
    updatedAt: "2026-07-17",
    relatedSlugs: ["what-is-teen-patti", "teen-patti-hand-rankings", "teen-patti-terms"],
    sections: [
      {
        paragraphs: [
          "Teen Patti's rules fit on a page, but the betting structure has a few moving parts that confuse newcomers — mainly the difference between blind and seen play. This guide walks through a complete round in order.",
        ],
      },
      {
        heading: "Setting up",
        paragraphs: [
          "The game uses one standard 52-card deck, no jokers (in the classic version). Three to six players is typical. Before dealing, every player contributes the boot — a fixed minimum stake agreed in advance — which forms the starting pot. The dealer shuffles and deals three cards face down to each player, one at a time.",
        ],
      },
      {
        heading: "Blind and seen",
        paragraphs: [
          "Each player chooses whether to look at their cards. A player who has not looked plays blind; a player who has looked is seen. The distinction sets betting prices: a blind player's bet is the current stake, while a seen player must put in double the current stake to play (their bet is called [chaal](/guides/teen-patti-terms)).",
          "A blind player may look at their cards at any point, becoming seen from that moment. Blind players may also raise by betting double the current stake, which doubles the pressure on everyone behind them.",
        ],
      },
      {
        heading: "The betting rounds",
        paragraphs: [
          "Betting starts with the player left of the dealer and moves clockwise. On your turn you have two basic options: bet the required amount to stay in, or pack (fold), dropping out of the round and forfeiting anything you have already put in. There is no checking — staying in always costs chips.",
          "Betting continues around the table as many times as needed. The stake can escalate as players raise, and the pot grows quickly. Most rounds end long before a showdown, when everyone but one player has packed.",
        ],
      },
      {
        heading: "Sideshow and show",
        paragraphs: [
          "A seen player may, on their turn, request a sideshow with the previous seen player: a private comparison of hands. If the previous player accepts, the lower hand must pack; if hands are equal, the requester packs. If the request is refused, play simply continues. Sideshows thin the table without inflating the pot.",
          "When only two players remain, either may pay for a show: the hands are revealed and the [higher-ranking hand](/guides/teen-patti-hand-rankings) wins the pot. A blind player pays the current stake for a show; a seen player pays double. If the hands tie exactly, the player who did not pay for the show wins in most rule sets — house rules vary on this point, so agree before playing.",
        ],
      },
      {
        heading: "House and app variations",
        paragraphs: [
          "Home games and apps layer countless variations on this base: limits on how long you can stay blind, maximum pot sizes, joker cards, and [variant games](/guides/common-teen-patti-variations) like Muflis (lowest hand wins) or AK47. None of them change the fundamentals above, but always confirm which rules are in force — in an app, including any listed in our [games directory](/games), that means reading the rules screen for the specific table you join.",
        ],
      },
    ],
    faq: [
      {
        question: "What is the boot in Teen Patti?",
        answer:
          "The boot is a fixed minimum stake every player contributes before the deal. It forms the starting pot and sets the scale for all betting that follows.",
      },
      {
        question: "How much does a seen player have to bet?",
        answer:
          "A seen player puts in double the current stake to stay in — a bet called chaal. A blind player pays just the current stake.",
      },
      {
        question: "Can a blind player look at their cards mid-round?",
        answer:
          "Yes, at any point. From that moment they play as a seen player and pay seen prices. There is no way back to blind.",
      },
      {
        question: "What happens if both hands tie at a show?",
        answer:
          "In most rule sets the player who did not pay for the show wins a tie, but house rules vary on this point — agree before playing, or check the rules screen of the app table you join.",
      },
      {
        question: "Is there a check option like in poker?",
        answer:
          "No. Staying in always costs chips: on your turn you either bet the required amount or pack (fold), forfeiting anything you have already put in.",
      },
    ],
  },
  {
    slug: "teen-patti-hand-rankings",
    title: "Teen Patti Hand Rankings from Highest to Lowest",
    description:
      "All six Teen Patti hand ranks explained with examples: trail, pure sequence, sequence, colour, pair, and high card — and how ties break.",
    category: "Rules and Hand Rankings",
    featuredImage: "/images/blog/teen-patti-hand-rankings.webp",
    publishedAt: "2026-07-17",
    updatedAt: "2026-07-17",
    relatedSlugs: ["teen-patti-rules", "teen-patti-terms", "what-is-teen-patti"],
    sections: [
      {
        paragraphs: [
          "Teen Patti has six hand ranks. They follow rarity: the harder a hand is to be dealt in three cards, the higher it ranks. Here they are from strongest to weakest, with the tie-breaking rules that decide close calls. How the betting gets you to a show in the first place is covered in our [rules guide](/guides/teen-patti-rules).",
        ],
      },
      {
        heading: "1. Trail (three of a kind)",
        paragraphs: [
          "Three cards of the same rank — three kings, three sevens, three aces. The best possible hand is A-A-A, and trails rank by their card value: three aces beat three kings, down to three twos. A trail is rare enough that many players go whole sessions without one.",
        ],
      },
      {
        heading: "2. Pure sequence (straight flush)",
        paragraphs: [
          "Three consecutive cards in the same suit, such as 9-10-J of hearts. The highest pure sequence is A-K-Q suited; most rule sets also allow A-2-3 as a valid low sequence, ranking just below A-K-Q. Two pure sequences compare by their highest card. Our [sequence guide](/guides/teen-patti-sequence-guide) covers the ace's two positions in detail.",
        ],
      },
      {
        heading: "3. Sequence (straight)",
        paragraphs: [
          "Three consecutive cards in mixed suits — 4-5-6 with two clubs and a diamond, say. Ranking works exactly as with pure sequences, only the matching suits are missing. A sequence beats a colour because ordered runs are rarer than same-suit collections in three cards.",
        ],
      },
      {
        heading: "4. Colour (flush)",
        paragraphs: [
          "Three cards of the same suit that do not form a sequence, like 2-7-K of spades. Colours compare by highest card first, then second, then third — so K-8-3 of hearts beats Q-J-9 of clubs.",
        ],
      },
      {
        heading: "5. Pair",
        paragraphs: [
          "Two cards of the same rank plus one other card. Pairs compare by the pair's rank first — a pair of aces beats a pair of kings — with the third card (the kicker) breaking ties between equal pairs.",
        ],
      },
      {
        heading: "6. High card",
        paragraphs: [
          "None of the above. The hand ranks by its highest card, then the next, then the last. A-K-J of mixed suits is the best possible high-card hand; 5-3-2 is the worst hand in the game.",
        ],
      },
      {
        heading: "Worth memorising",
        paragraphs: [
          "The order trips up poker players in one place: in Teen Patti, a straight (sequence) beats a flush (colour), the reverse of [poker's order](/guides/teen-patti-vs-poker). The maths of three-card hands makes runs rarer than suits, and the rankings follow the maths. And if you are comparing the apps that host these tables, our [games directory](/games) is the place to browse.",
        ],
      },
    ],
    faq: [
      {
        question: "What is the best hand in Teen Patti?",
        answer:
          "A trail (three of a kind) of aces — A-A-A. Trails rank by card value, so three aces beat three kings, down to three twos at the bottom of the class.",
      },
      {
        question: "Does a sequence beat a colour in Teen Patti?",
        answer:
          "Yes. A sequence (straight) beats a colour (flush) — the reverse of poker's order. In three-card hands, runs are rarer than same-suit collections, and the rankings follow rarity.",
      },
      {
        question: "What is the worst hand in Teen Patti?",
        answer:
          "5-3-2 in mixed suits — the lowest possible high-card hand. The best high-card hand is A-K-J in mixed suits.",
      },
      {
        question: "How do ties break between two pairs?",
        answer:
          "The pair's rank compares first — a pair of aces beats a pair of kings — and the third card (the kicker) breaks ties between equal pairs.",
      },
      {
        question: "Is A-2-3 a valid sequence?",
        answer:
          "In most rule sets, yes — it ranks just below A-K-Q. Some tables treat it differently, so confirm the rule where you play before real chips move.",
      },
    ],
  },
  {
    slug: "teen-patti-terms",
    title: "Teen Patti Terms: Blind, Chaal, Pack, Show and Sideshow",
    description:
      "A plain-language glossary of Teen Patti's betting vocabulary — boot, blind, seen, chaal, pack, show, sideshow, and the phrases apps use for them.",
    category: "Teen Patti Basics",
    featuredImage: "/images/blog/teen-patti-terms.webp",
    publishedAt: "2026-07-17",
    updatedAt: "2026-07-17",
    relatedSlugs: ["teen-patti-rules", "teen-patti-hand-rankings"],
    sections: [
      {
        paragraphs: [
          "Teen Patti's vocabulary is short but load-bearing: five or six terms carry the whole [betting structure](/guides/teen-patti-rules). Apps sometimes relabel them in English, which adds confusion rather than removing it. Here is the working glossary — and for the same terms with Hindi script alongside, see our [Teen Patti in Hindi guide](/guides/teen-patti-in-hindi).",
        ],
      },
      {
        heading: "Boot",
        paragraphs: [
          "The compulsory starting stake every player pays before cards are dealt. It seeds the pot and sets the scale of the round — everything that follows is priced relative to the current stake, which begins at the boot amount. Apps may call it the ante or entry.",
        ],
      },
      {
        heading: "Blind and seen",
        paragraphs: [
          "A blind player bets without having looked at their cards and pays the current stake to stay in. A seen player has looked and pays double. Playing blind is cheaper and applies psychological pressure, but you are betting on nothing. You can convert from blind to seen at any time simply by looking; there is no way back.",
        ],
      },
      {
        heading: "Chaal",
        paragraphs: [
          "The regular bet a seen player makes to continue — literally 'move'. The chaal is twice the current stake if the previous bettor was blind, or matches the seen stake otherwise. When apps show a 'Chaal' button, it means 'pay the required amount and stay in the round'.",
        ],
      },
      {
        heading: "Pack",
        paragraphs: [
          "To fold: drop your cards, give up the round, and forfeit whatever you have already put in the pot. Packing early and often is the least glamorous and most effective habit in the game — most dealt hands are not worth backing against rising stakes.",
        ],
      },
      {
        heading: "Show",
        paragraphs: [
          "The showdown, available only when two players remain. The requester pays for the privilege (one stake if blind, two if seen), both hands are revealed, and the [higher hand](/guides/teen-patti-hand-rankings) takes the pot. House rules decide ties, most commonly in favour of the player who did not ask for the show.",
        ],
      },
      {
        heading: "Sideshow",
        paragraphs: [
          "A private hand comparison a seen player can request with the seen player who bet just before them. If accepted, the loser packs immediately and the game continues without revealing anything to the table. The other player may refuse, at no cost. Apps sometimes call this a 'compromise' or 'back show' — labels vary across the apps in our [games directory](/games), but the mechanic is the same.",
        ],
      },
    ],
    faq: [
      {
        question: "What does chaal mean in Teen Patti?",
        answer:
          "Chaal — literally 'move' — is the regular bet a seen player makes to continue. When an app shows a Chaal button, it means pay the required amount and stay in the round.",
      },
      {
        question: "What is the difference between a show and a sideshow?",
        answer:
          "A show is the final comparison when only two players remain: the requester pays for it and both hands are revealed. A sideshow is a private comparison a seen player can request with the previous seen player mid-round — the lower hand packs, and nothing is revealed to the table.",
      },
      {
        question: "Can a sideshow request be refused?",
        answer:
          "Yes, at no cost to the player refusing. If the request is refused, play simply continues.",
      },
      {
        question: "What do apps call packing?",
        answer:
          "Pack means fold — dropping your cards and forfeiting whatever you have already put in the pot. Apps may label the button Pack or Fold, and some relabel sideshow as 'compromise' or 'back show'.",
      },
    ],
  },
  {
    slug: "teen-patti-vs-poker",
    title: "Teen Patti vs Poker: What's Actually Different",
    description:
      "Teen Patti is often called Indian poker, but the games differ in hand size, betting structure, information, and pace. A side-by-side comparison.",
    category: "Game Comparisons",
    featuredImage: "/images/blog/teen-patti-vs-poker.webp",
    publishedAt: "2026-07-17",
    updatedAt: "2026-07-17",
    relatedSlugs: ["what-is-teen-patti", "teen-patti-hand-rankings", "teen-patti-rules"],
    sections: [
      {
        paragraphs: [
          "Calling Teen Patti 'Indian poker' is a useful shorthand and a misleading one. The games share ancestry — both descend from European vying games — and both revolve around betting on concealed hands. Almost everything else differs. Here is the comparison, point by point.",
        ],
      },
      {
        heading: "Cards and hands",
        paragraphs: [
          "Teen Patti deals three cards, all private, and that is your hand — no draws, no community cards, no improvement. Texas hold'em, poker's dominant form, deals two private cards and five shared ones, with hands built from the best five of seven available cards. The result: poker hands develop across streets, while a Teen Patti hand is fixed from the deal. Teen Patti's drama comes entirely from the betting, not the cards changing.",
        ],
      },
      {
        heading: "Hand rankings",
        paragraphs: [
          "Both games rank hands by rarity, but [three-card maths](/guides/teen-patti-sequence-guide) reorders things: in Teen Patti a sequence (straight) beats a colour (flush), the opposite of poker. Poker's larger hand space also has ranks Teen Patti simply lacks — full houses, four of a kind, two pair. Our [hand rankings guide](/guides/teen-patti-hand-rankings) lists Teen Patti's full order.",
        ],
      },
      {
        heading: "Blind play",
        paragraphs: [
          "Teen Patti's defining mechanic has no poker equivalent: choosing not to look at your own cards in exchange for cheaper betting. Poker's 'blinds' are just forced bets; the players still see their cards. A Teen Patti table where two players stay blind and keep raising is a dynamic poker cannot produce — betting on pure nerve, priced at a discount.",
        ],
      },
      {
        heading: "Information and skill",
        paragraphs: [
          "Poker gives players public information to reason about — community cards, bet sizing across multiple streets, position. Skilled play compounds over time. Teen Patti offers far less to analyse: no shared cards, one escalating betting sequence, and the sideshow as its only information-buying tool. Psychology and stake management matter in both, but poker has more room for technical edge, which is one reason Indian courts have treated some poker and rummy formats as skill-predominant while the position on Teen Patti differs. That legal distinction varies by state and continues to evolve — our [Indian online gaming awareness primer](/blog/teen-patti-and-indian-online-gaming-awareness) maps the landscape, and current local rules beat any assumption.",
        ],
      },
      {
        heading: "Pace and culture",
        paragraphs: [
          "A Teen Patti round takes a fraction of the time of a poker hand, which makes it more social — and, in staked play, means money moves faster. Culturally the games sit in different rooms: poker in card rooms and online tournaments, Teen Patti at festival gatherings and family tables. The app ecosystems mirror this: poker apps tend toward the competitive, [Teen Patti apps](/games) toward the casual — a casualness worth staying alert to when real money is involved.",
        ],
      },
    ],
    faq: [
      {
        question: "Is Teen Patti just Indian poker?",
        answer:
          "The shorthand is useful but loose. The games share ancestry, but Teen Patti deals three fixed cards with no draws or community cards, prices blind play at a discount, and moves much faster than a poker hand.",
      },
      {
        question: "Why does a straight beat a flush in Teen Patti?",
        answer:
          "Three-card maths. With three cards, sequences are rarer than same-suit hands, so they rank higher — the exact reverse of five-card poker, where flushes are the rarer hand.",
      },
      {
        question: "Which game involves more skill?",
        answer:
          "Poker gives players more public information to reason about — community cards, multiple betting streets, position — so there is more room for technical edge. Teen Patti leans more on psychology and stake management. That difference is one reason some poker and rummy formats have been treated as skill-predominant in Indian court rulings while the position on Teen Patti differs; the legal picture varies by state and continues to evolve.",
      },
      {
        question: "Does poker have blind play like Teen Patti?",
        answer:
          "No. Poker's 'blinds' are just forced bets — those players still see their cards. Choosing not to look at your own cards in exchange for cheaper betting is unique to Teen Patti between the two games.",
      },
    ],
  },
  {
    slug: "how-to-review-a-teen-patti-platform-safely",
    title: "How to Review a Teen Patti Platform Safely",
    description:
      "A practical checklist for evaluating any Teen Patti app before installing: operator identity, terms, permissions, payment handling, and red flags.",
    category: "Platform Guides",
    featuredImage: "/images/blog/how-to-review-a-teen-patti-platform-safely.webp",
    publishedAt: "2026-07-17",
    updatedAt: "2026-07-17",
    relatedSlugs: ["what-is-teen-patti", "teen-patti-rules"],
    sections: [
      {
        paragraphs: [
          "[Dozens of Teen Patti apps](/games) compete for Indian players, many with near-identical names, borrowed artwork, and bold promises. Some are ordinary businesses; some are not. Since app stores and search results will not sort this out for you, here is a review process you can run yourself in fifteen minutes, before an app ever touches your phone.",
        ],
      },
      {
        heading: "Step 1: Identify the operator",
        paragraphs: [
          "Find out who actually runs the app. Look for a company name, registered address, and working contact details — on the app's website, in its store listing, and in its terms. If you cannot establish who operates an app, stop there. An operator you cannot identify is an operator you cannot hold to anything: no complaint route, no accountability for your deposit, no one to answer when withdrawals stall.",
        ],
      },
      {
        heading: "Step 2: Read the money terms",
        paragraphs: [
          "Before creating an account, read the deposit, withdrawal, and bonus terms in full. Specifically check: minimum withdrawal amounts, processing timelines, fees, KYC requirements, and any [playthrough conditions attached to bonuses](/blog/how-promo-codes-usually-work). Vague or missing terms are themselves an answer. If the terms exist only as screenshots on third-party sites, treat them as unverified.",
        ],
      },
      {
        heading: "Step 3: Check the legal position",
        paragraphs: [
          "Online real-money gaming is [regulated state by state in India](/blog/teen-patti-and-indian-online-gaming-awareness), and several states restrict or prohibit it. Confirm the current position where you live — not where the app claims to operate from. A platform accepting players from restricted states without any geographic controls is telling you something about its general approach to compliance.",
        ],
      },
      {
        heading: "Step 4: Inspect before you install",
        paragraphs: [
          "Check the [requested permissions](/blog/understanding-app-permissions) in the listing. A card game needs network access and little else; requests for contacts, SMS, call logs, or file storage deserve either a documented explanation or a decision not to install. Note the download source too — this directory's position is simple: no sideloaded APKs from forwarded links or mirror sites, ever. Tampered APKs are the single most common way [fake gaming apps](/blog/how-to-identify-fake-teen-patti-apps) reach phones in India.",
        ],
      },
      {
        heading: "Step 5: Test with nothing at stake",
        paragraphs: [
          "If the app passes the first four steps and you proceed, start with zero commitment: explore free tables if they exist, and test any deposit path with the smallest possible amount — then test withdrawal immediately, before playing. A platform that pays out a small withdrawal promptly has passed a more meaningful test than any review can offer. One that makes withdrawal difficult at ₹100 will not improve at ₹10,000.",
        ],
      },
      {
        heading: "Red flags that end the review",
        list: [
          "No identifiable operator or contact route",
          "Pressure tactics: countdown timers, 'last chance' bonuses, urgency scripts",
          "Bonus offers requiring payment or OTP sharing to 'unlock'",
          "Withdrawal terms that are missing, vague, or buried",
          "Distribution only via APK links shared in messages or social media",
          "Reviews that read as templated or appear in identical wording across sites",
        ],
      },
    ],
    faq: [
      {
        question: "What is the first thing to check before installing a Teen Patti app?",
        answer:
          "The operator. Find a company name, registered address, and working contact details on the app's website, store listing, and terms. If you cannot establish who runs an app, stop there — an operator you cannot identify is one you cannot hold to anything.",
      },
      {
        question: "Which permissions should a card game never request?",
        answer:
          "A card game needs network access and little else. Requests for contacts, SMS, call logs, or file storage deserve either a documented explanation or a decision not to install.",
      },
      {
        question: "Is it safe to install a Teen Patti APK from a shared link?",
        answer:
          "No. This directory's position is simple: no sideloaded APKs from forwarded links or mirror sites, ever. Tampered APKs are the single most common way fake gaming apps reach phones in India.",
      },
      {
        question: "How can I test a platform without risking much?",
        answer:
          "Start with zero commitment: explore free tables if they exist, then test any deposit path with the smallest possible amount and withdraw immediately, before playing. A platform that pays a small withdrawal promptly has passed a more meaningful test than any review can offer.",
      },
      {
        question: "Which red flags should end a review immediately?",
        answer:
          "Any one of these: no identifiable operator or contact route, pressure tactics like countdown timers, bonuses requiring payment or OTP sharing to unlock, missing or vague withdrawal terms, or distribution only through APK links shared in messages.",
      },
    ],
  },
  {
    slug: "teen-patti-sequence-guide",
    title: "Teen Patti Sequence Guide: How Runs and Pure Runs Really Work",
    description:
      "What counts as a run in Teen Patti, how A-K-Q and A-2-3 rank, why a sequence beats a colour, and how two runs compare at a show — with the maths.",
    category: "Rules and Hand Rankings",
    featuredImage: "/images/blog/teen-patti-sequence-guide.webp",
    publishedAt: "2026-07-17",
    updatedAt: "2026-07-17",
    relatedSlugs: [
      "teen-patti-hand-rankings",
      "teen-patti-vs-poker",
      "common-teen-patti-variations",
    ],
    sections: [
      {
        paragraphs: [
          "Two of Teen Patti's six hand ranks are runs: the pure sequence (three consecutive cards in one suit) and the sequence (three consecutive cards in mixed suits). They are also where most table disputes start — what the ace can do, whether K-A-2 counts, why a run beats a flush at all. Our [hand rankings guide](/guides/teen-patti-hand-rankings) places these hands in the full order; this guide settles the details.",
        ],
      },
      {
        heading: "What counts as a sequence",
        paragraphs: [
          "A sequence is three cards of consecutive rank — 5-6-7, 9-10-J, J-Q-K — in any mix of suits. Suits are irrelevant to whether the run exists; they decide only whether it is pure. Counting the ace's two positions, there are exactly twelve possible runs, from A-2-3 at one end to A-K-Q at the other.",
          "The ranks do not wrap around: K-A-2 is not a run, just an ace-high hand. The ace can sit at the top of a run or at the bottom, never in the middle.",
        ],
      },
      {
        heading: "Pure sequence versus sequence",
        paragraphs: [
          "When all three cards of a run share a suit — 9-10-J of hearts — the hand is a pure sequence, poker's straight flush, and it ranks second only to a trail. The same run in mixed suits is a plain sequence, sitting below trail and pure sequence but above colour.",
          "The gap between the two matters at a show: any pure sequence beats any plain sequence. Pure 2-3-4 of clubs beats mixed A-K-Q. Rank class is compared first; only when both hands sit in the same class do the cards themselves get compared.",
        ],
      },
      {
        heading: "The ace's two jobs: A-K-Q and A-2-3",
        paragraphs: [
          "In the most widely used convention, A-K-Q is the highest run and A-2-3 the second highest, with K-Q-J third and the rest descending to 4-3-2 at the bottom. That A-2-3 outranks K-Q-J surprises players coming from poker, where the ace-low straight is the weakest — but the convention is standard across most Teen Patti tables and apps.",
          "It is not universal, though. Some rule sets rank A-2-3 as the lowest run instead. This is exactly the kind of detail worth confirming on an app's rules screen before real chips move, because it changes who wins a run-against-run show. That check applies equally to every app in our [games directory](/games).",
        ],
      },
      {
        heading: "Why a sequence beats a colour",
        paragraphs: [
          "Poker players expect a flush to beat a straight; Teen Patti reverses this, and the reversal is pure arithmetic. There are 22,100 possible three-card hands. Runs account for 768 of them (twelve runs, each in 4 × 4 × 4 suit combinations), of which 48 are pure. Same-suit hands are more plentiful: 1,144 in total, of which the same 48 are pure sequences, leaving 1,096 plain colours.",
          "So a plain sequence turns up in roughly 3.3% of deals and a plain colour in about 5% — sequences are the rarer hand, and Teen Patti's rankings simply follow rarity. [Five-card poker](/guides/teen-patti-vs-poker) runs the same logic to the opposite conclusion: with five cards, straights outnumber flushes, so the flush ranks higher. Neither game is being eccentric; both are counting.",
        ],
      },
      {
        heading: "Comparing two runs at a show",
        paragraphs: [
          "When two sequences (or two pure sequences) meet, compare the runs by their top card: 10-J-Q beats 5-6-7, and J-Q-K beats 10-J-Q. The two ace runs sit above all of that in the standard convention — A-K-Q first, A-2-3 second.",
          "Suits never break ties. If two players hold the same run in different suit mixes, the hands are equal, and the show's tie rule decides the pot — in most rule sets the player who paid for the show loses a tie, as our [rules guide](/guides/teen-patti-rules) covers. A pure sequence against a plain one of the same run is not a tie at all; the pure hand wins by class.",
        ],
      },
      {
        heading: "How often you will actually see one",
        paragraphs: [
          "Any sequence, pure or plain, arrives about once every 29 deals; the pure sequence alone shows up about once in 460 — genuinely rare, though not trail-rare. What makes runs valuable in play is the other side of the arithmetic: a plain sequence beats roughly 96% of all dealt hands, since high cards, pairs, and colours together make up almost everything the deck produces.",
          "The practical read: a seen player holding any run is ahead of nearly every hand at the table and can bet with conviction — while remembering that the two hands that beat a plain sequence, pure sequence and trail, are exactly what an opponent's unshakeable confidence might be announcing.",
        ],
      },
    ],
    faq: [
      {
        question: "Is K-A-2 a valid run in Teen Patti?",
        answer:
          "No. Runs do not wrap around — the ace can sit at the top of a run (A-K-Q) or at the bottom (A-2-3), never in the middle. K-A-2 is just an ace-high hand.",
      },
      {
        question: "Which is higher, A-2-3 or K-Q-J?",
        answer:
          "In the most widely used convention, A-2-3 is the second-highest run, above K-Q-J. Some rule sets rank A-2-3 as the lowest run instead, so confirm on the rules screen before real chips move.",
      },
      {
        question: "Does a pure sequence always beat a plain sequence?",
        answer:
          "Yes. Rank class compares first, so pure 2-3-4 of clubs beats mixed A-K-Q. The cards themselves are compared only when both hands sit in the same class.",
      },
      {
        question: "How rare is a pure sequence?",
        answer:
          "About once in 460 deals. Any sequence, pure or plain, arrives about once every 29 deals — and a plain sequence still beats roughly 96% of all dealt hands.",
      },
      {
        question: "Do suits break ties between equal runs?",
        answer:
          "No. Two players holding the same run in different suit mixes have equal hands, and the show's tie rule decides the pot — in most rule sets against the player who paid for the show.",
      },
    ],
  },
  {
    slug: "common-teen-patti-variations",
    title: "Common Teen Patti Variations: Muflis, AK47, Joker and More",
    description:
      "The best-known Teen Patti variants — Muflis, AK47, joker rounds, Lowest Card Joker, Best of Four, and 999 — and how each one changes the base game's odds.",
    category: "Teen Patti Basics",
    featuredImage: "/images/blog/common-teen-patti-variations.webp",
    publishedAt: "2026-07-17",
    updatedAt: "2026-07-17",
    relatedSlugs: [
      "teen-patti-rules",
      "teen-patti-hand-rankings",
      "teen-patti-sequence-guide",
    ],
    sections: [
      {
        paragraphs: [
          "The base game of Teen Patti is remarkably stable — boot, blind, chaal, show — but almost nobody plays only the base game. Home tables rotate variants round by round at the dealer's whim, and apps bundle their own selections of variant tables. This guide covers the variants you are most likely to meet and what each one does to the game.",
          "One note on scope: this is a general guide to variants that exist across the Teen Patti world. Which variants any specific app offers changes with updates and differs table by table, and we have not verified variant availability for [the games listed in this directory](/games). Treat the rules screen of the actual table you join as the only authority.",
        ],
      },
      {
        heading: "Muflis: lowest hand wins",
        paragraphs: [
          "Muflis inverts the entire [ranking table](/guides/teen-patti-hand-rankings): the lowest hand wins, so the classic worst hand — 5-3-2 in mixed suits — becomes the best, and a trail of aces becomes a disaster. Nothing else about the betting changes.",
          "The strategic effect is disorienting in the best way. Hands you have spent years folding become monsters, and the instinct to bet big on a pair works exactly against you. Expect to misread your own cards for the first few rounds — everyone does.",
        ],
      },
      {
        heading: "AK47: fixed wild cards",
        paragraphs: [
          "In AK47, every ace, king, four, and seven is a joker — a wild card its holder can count as any card needed. With sixteen of the 52 cards wild, strong hands stop being rare: trails and pure sequences appear constantly, and a hand containing no wilds at all is usually in trouble.",
          "The adjustment is recalibrating what 'strong' means. A trail assembled from wilds is ordinary here, and the betting habits of classic Teen Patti — where a single pair is a playable hand — lose steadily at an AK47 table.",
        ],
      },
      {
        heading: "Joker rounds: random wilds",
        paragraphs: [
          "The broader family of joker variants designates wilds freshly each round — typically the dealer draws one or more cards from the deck, and every card of that rank becomes a joker for the hand. The character of the round then depends on luck twice over: the deal and the draw.",
          "The habit to build is checking what is wild before betting, every single round. A hand that looks mediocre may contain two jokers; a hand that looks strong may contain none.",
        ],
      },
      {
        heading: "Lowest Card Joker",
        paragraphs: [
          "Here each player's own lowest card is wild — for that player only, along with any other cards of the same rank in their hand. Everyone therefore holds at least one joker, but nobody knows which rank is wild in anyone else's cards.",
          "It is a subtler variant than AK47: hands run stronger than classic Teen Patti without being saturated in wilds, and reading opponents gets harder because their wild rank is private information.",
        ],
      },
      {
        heading: "Best of Four",
        paragraphs: [
          "Each player receives four cards instead of three and plays the best three-card hand they can make from them. Rankings and betting are unchanged; only average hand strength rises, since everyone is choosing the best of four possible combinations.",
          "The practical effect is inflation. Pairs become commonplace, high-card hands become weak holdings, and the thresholds for betting and packing need to shift up accordingly.",
        ],
      },
      {
        heading: "999",
        paragraphs: [
          "999 abandons hand rankings altogether. In the usual form, each card contributes a digit — ace as one, two through nine at face value, tens and picture cards as zero — and players arrange their three digits to get as close to 999 as possible. Closest to 999 wins the show.",
          "Because the goal changes completely, so does hand reading: a hand full of nines and picture cards is the dream, and the trail-hunting instincts of the base game are simply irrelevant.",
        ],
      },
      {
        heading: "Other tables you may meet",
        list: [
          "Community: some cards are dealt face up and shared by all players, a structure borrowed from poker",
          "Stud: a mix of face-up and face-down cards, so part of every hand is public",
          "High-Low split: the pot divides between the highest and lowest hands, rewarding both ends of the rankings",
          "Dealer's-choice hybrids: home-table inventions that combine the mechanics above in local ways — always ask for the rules before anteing",
        ],
      },
      {
        heading: "How to approach a variant table",
        paragraphs: [
          "Two things change at any variant table: the odds, and your intuitions — and the second lags the first. Wild cards in particular transform hand frequencies so thoroughly that experience from classic Teen Patti actively misleads until you recalibrate, which argues for watching a few rounds, or playing at minimal stakes, before treating any new variant as understood.",
          "And confirm the rules where you actually play. Apps implement the 'same' variant differently — which cards are wild, how ties resolve, whether A-2-3 counts — and the rules screen for the specific table is the only description that binds. Our [rules guide](/guides/teen-patti-rules) and [sequence guide](/guides/teen-patti-sequence-guide) cover the base game these variants are built on.",
        ],
      },
    ],
    faq: [
      {
        question: "What is Muflis in Teen Patti?",
        answer:
          "A variant where the lowest hand wins. The ranking table is inverted, so 5-3-2 in mixed suits becomes the best hand and a trail of aces becomes a disaster — nothing else about the betting changes.",
      },
      {
        question: "Which cards are wild in AK47?",
        answer:
          "Every ace, king, four, and seven — sixteen of the 52 cards. Strong hands stop being rare, so the betting habits of classic Teen Patti need recalibrating at an AK47 table.",
      },
      {
        question: "How does the 999 variant work?",
        answer:
          "It abandons hand rankings altogether. Each card contributes a digit — ace as one, two through nine at face value, tens and picture cards as zero — and players arrange their three digits to get as close to 999 as possible.",
      },
      {
        question: "Do all apps offer the same variants?",
        answer:
          "No. Variant selections change with updates and differ table by table, and this directory has not verified variant availability for its listed games. The rules screen of the actual table you join is the only authority.",
      },
      {
        question: "How should I approach an unfamiliar variant table?",
        answer:
          "Watch a few rounds, or play at minimal stakes, before treating any new variant as understood. Wild cards in particular change hand frequencies so thoroughly that experience from classic Teen Patti actively misleads until you recalibrate.",
      },
    ],
  },
  {
    slug: "teen-patti-in-hindi",
    title: "Teen Patti in Hindi: The Game's Own Language, Explained",
    description:
      "Teen Patti's vocabulary in Hindi and English side by side — अंधा, चाल, पैक, शो — with the hand names and a bilingual walk through a full round.",
    category: "Teen Patti Basics",
    featuredImage: "/images/blog/teen-patti-in-hindi.webp",
    publishedAt: "2026-07-17",
    updatedAt: "2026-07-17",
    relatedSlugs: ["what-is-teen-patti", "teen-patti-rules", "teen-patti-terms"],
    sections: [
      {
        paragraphs: [
          "Teen Patti is a Hindi name — तीन पत्ती, 'three cards' — and at most family tables the game has always been played in Hindi. Yet nearly every written guide, including the rest of this site, explains it in English. This guide bridges the two: the game's core terms in Devanagari and English side by side, and a round narrated the way it actually sounds at the table. For fuller English definitions of each term, our [terms glossary](/guides/teen-patti-terms) goes deeper.",
          "If you arrived here searching for how to play — teen patti kaise khelte hain (तीन पत्ती कैसे खेलते हैं) — the short answer follows, and our full [rules guide](/guides/teen-patti-rules) covers every step in detail.",
        ],
      },
      {
        heading: "The basics, in both languages",
        paragraphs: [
          "हर खिलाड़ी को तीन पत्ते मिलते हैं — every player receives three cards, face down. Before the deal, everyone contributes a fixed starting stake to the pot. Betting then moves clockwise: on your turn you pay to stay in the round, or you fold and are out. The last player standing wins the pot, or the final two compare cards and the higher hand — ऊँचा हाथ — takes it.",
          "The game's signature choice is whether to look at your cards at all. Playing without looking is cheaper per bet and puts pressure on everyone who has looked — the whole character of Teen Patti flows from that one trade.",
        ],
      },
      {
        heading: "Betting terms",
        list: [
          "Boot — बूट: the compulsory stake every player pays before the deal; it seeds the pot",
          "Blind — ब्लाइंड, traditionally अंधा (andhā, 'blind'): betting without looking at your cards, at the cheaper rate",
          "Seen — सीन / देखकर (dekhkar, 'having looked'): you have seen your cards and now pay double the blind rate to stay in",
          "Chaal — चाल (chāl, 'move'): the regular continuing bet of a seen player; apps show it as a button of the same name",
          "Pack — पैक: to fold — drop your cards and forfeit what you have already put in; app interfaces also say फोल्ड",
          "Show — शो: the final comparison when two players remain; the player who requests it pays for it",
          "Sideshow — साइड शो: a private comparison a seen player can request with the previous seen player; the lower hand packs",
        ],
      },
      {
        heading: "The hand names",
        paragraphs: [
          "At Hindi-speaking tables the hand names are mostly English words spoken as loanwords, which is also how apps label them. From strongest to weakest, as our [hand rankings guide](/guides/teen-patti-hand-rankings) explains in full:",
        ],
        list: [
          "Trail (three of a kind) — ट्रेल, also ट्रायो (trio): तीन एक जैसे पत्ते, three cards of the same rank",
          "Pure sequence — प्योर सीक्वेंस: three consecutive cards, एक ही रंग के — all in one suit",
          "Sequence — सीक्वेंस, sometimes रन (run): three consecutive cards in mixed suits",
          "Colour — कलर: three cards of one suit that are not consecutive; रंग (rang) is the Hindi word for suit",
          "Pair — पेयर / जोड़ा (joṛā, 'pair'): two cards of the same rank plus one other",
          "High card — हाई कार्ड: none of the above; the highest card decides",
        ],
      },
      {
        heading: "A note on regional slang",
        paragraphs: [
          "Home tables across India carry their own slang beyond this list, and it varies enough by region that we will not guess at it here. Where a regional term exists that we have not verified, this site uses the standard English word — which is what most apps display in any case.",
        ],
      },
      {
        heading: "A round, as it sounds",
        paragraphs: [
          "Here is a round in table language. Everyone pays the boot (बूट). Cards go around — पत्ते बँट गए. Two players look at their cards; one stays अंधा. The blind player bets the minimum; the seen players must each pay double or say पैक. Someone raises — चाल बढ़ गई, the stake has gone up. A seen player asks the player before them for a साइड शो; it is accepted, and the lower hand packs. Two players left: one pays for the शो, the cards turn over, and ऊँचा हाथ takes the pot.",
          "Every mechanic in that paragraph is covered step by step in our rules guide; the glossary above is just the soundtrack.",
        ],
      },
      {
        heading: "Hindi in apps",
        paragraphs: [
          "Many Teen Patti apps offer Hindi or Hinglish interface options, though buttons and hand names usually stay in English or transliterated Hindi whatever the setting. Knowing both vocabularies means no table can confuse you. One caution consistent with the rest of this directory: we have not independently verified the language support of [the specific apps listed here](/games) — check an app's own settings rather than relying on store descriptions.",
        ],
      },
    ],
    faq: [
      {
        question: "What does Teen Patti mean in Hindi?",
        answer:
          "तीन पत्ती — literally 'three cards'. Every player receives three cards face down, and the highest-ranking hand wins the pot.",
      },
      {
        question: "What does andha mean in Teen Patti?",
        answer:
          "अंधा (andhā, 'blind') is the traditional term for playing blind — betting without looking at your cards, at the cheaper rate. Apps usually label it Blind.",
      },
      {
        question: "Are the hand names different in Hindi?",
        answer:
          "Mostly no. At Hindi-speaking tables the hand names are English words spoken as loanwords — ट्रेल (trail), सीक्वेंस (sequence), कलर (colour) — which is also how apps label them.",
      },
      {
        question: "Do Teen Patti apps have Hindi interfaces?",
        answer:
          "Many offer Hindi or Hinglish options, though buttons and hand names usually stay in English or transliterated Hindi whatever the setting. This directory has not independently verified the language support of the specific apps it lists — check an app's own settings.",
      },
    ],
  },
];

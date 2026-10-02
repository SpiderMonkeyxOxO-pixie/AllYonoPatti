import type { Article } from "./types";

/**
 * 15-day Teen Patti content series (2 Oct 2026 start). Articles are
 * date-gated in index.ts: nothing is built or linked before its
 * publishedAt (IST). `hold: true` keeps an article unpublished
 * regardless of date.
 */
export const guidesOct2026: Article[] = [
  {
    "slug": "blind-vs-seen-teen-patti",
    "title": "Blind vs Seen in Teen Patti: What Each Option Means",
    "seoTitle": "Blind vs Seen in Teen Patti: Differences Explained",
    "description": "What does playing blind or seen mean in Teen Patti? Learn the bet sizes, the strategy trade-off and when each option makes sense. Simple examples.",
    "category": "Teen Patti Basics",
    "featuredImage": "/images/blog/blind-vs-seen-teen-patti.webp",
    "featuredImageAlt": "Three face-down cards beside three face-up cards, showing blind versus seen play in Teen Patti",
    "publishedAt": "2026-10-02",
    "updatedAt": "2026-10-02",
    "relatedSlugs": [
      "teen-patti-terms",
      "teen-patti-rules",
      "teen-patti-boot-amount-and-pot-limit"
    ],
    "sections": [
      {
        "paragraphs": [
          "Quick answer: A blind player bets without looking at their three cards; a seen player has looked at them. In most Teen Patti rules, a blind player pays a smaller bet than a seen player, and a seen player pays double the current stake. Rules vary by table, so check them before you play.",
          "Every Teen Patti hand starts the same way: three cards are dealt face down. Before your first real decision you have a choice that no other card game gives you so cleanly. You can look at your cards, or you can play without looking. That choice is the whole idea behind \"blind\" and \"seen\", and understanding it will make the rest of the game, from betting to showdowns, far easier to follow."
        ]
      },
      {
        "heading": "What \"blind\" means",
        "paragraphs": [
          "A player is blind when they have not looked at their cards. They are betting without information. Because they know nothing about their hand, most tables charge them a smaller bet to stay in. A blind player can also keep playing blind for several rounds, up to a table limit called the maximum blinds."
        ]
      },
      {
        "heading": "What \"seen\" means",
        "paragraphs": [
          "A player becomes seen the moment they look at their cards. From that point they decide with knowledge, but they pay for it: a seen player's bet is normally double the current stake. Only seen players can use certain options, most notably the [sideshow](/guides/teen-patti-sideshow-rules)."
        ]
      },
      {
        "heading": "How the bet sizes compare",
        "paragraphs": [
          "The exact numbers depend on the table or app, but the common pattern looks like this. \"Stake\" means the current bet level that blind players pay."
        ],
        "table": {
          "headers": [
            "Player type",
            "Typical bet (chaal)",
            "Can ask for a sideshow?"
          ],
          "rows": [
            [
              "Blind",
              "1× the current stake, with the option to raise to 2×",
              "Usually no"
            ],
            [
              "Seen",
              "2× the current stake, with the option to raise to 4×",
              "Yes"
            ]
          ]
        }
      },
      {
        "paragraphs": [
          "For example, if the stake is 10, a blind player pays 10 (or raises to 20), while a seen player pays 20 (or raises to 40). You can learn how the starting pot is built in our guide to the [boot amount and pot limit](/guides/teen-patti-boot-amount-and-pot-limit)."
        ]
      },
      {
        "heading": "Why the difference exists",
        "paragraphs": [
          "Looking at your cards is real information, and the game charges you for it. That is the core trade-off:"
        ],
        "list": [
          "Stay blind: pay less per turn and keep opponents guessing, but you cannot respond to a weak hand.",
          "Go seen: pay more, but you can fold a poor hand early or push harder with a strong one."
        ]
      },
      {
        "paragraphs": [
          "Neither is \"correct\". It is a choice about how much variance you are comfortable with."
        ]
      },
      {
        "heading": "How the choice changes as the hand goes on",
        "paragraphs": [
          "The blind-or-seen decision is not made once. It comes back every turn, and the right feel for it changes with the size of the pot."
        ],
        "list": [
          "Early in a hand, when bets are small, staying blind costs very little. Many players stay blind for a round or two simply to keep the cost down while they watch what the table does.",
          "As the stake rises, staying blind gets riskier because you are committing more money to a hand you know nothing about. This is the point where many players look.",
          "When others turn seen, you learn something. A player who suddenly looks and then raises is telling you something, and a player who looks and packs immediately is telling you something else."
        ]
      },
      {
        "paragraphs": [
          "Remember that opponents read you in the same way. A player who stays blind through several large bets may be confident, bluffing, or simply playing for variance, and the table cannot tell which."
        ]
      },
      {
        "heading": "The maximum blinds rule",
        "paragraphs": [
          "Most tables limit how many rounds a player may stay blind. This is the maximum blinds setting you will see in the lobby. When you reach it, you are normally required to look at your cards or pack. The rule exists to stop one blind player from dragging out a hand at the cheaper rate indefinitely. If you are learning the game, check this number first, because it tells you how long the cheaper option stays available."
        ]
      },
      {
        "heading": "Common beginner confusions",
        "list": [
          "Looking is permanent. A blind player can look at any time, but once they do, they are seen for the rest of that hand. You cannot go back to blind.",
          "Blind players can still win. A blind hand is as likely to be good as any other. Blind simply means you did not check.",
          "Blind vs blind. If only blind players remain, the table's show rules decide when and how cards are revealed.",
          "Not all tables match. Some apps change the blind multiple or limit how many rounds you can stay blind."
        ]
      },
      {
        "heading": "A simple example",
        "paragraphs": [
          "Four players sit down with a boot of 10. Player A stays blind and bets 10. Player B looks at their cards, so they pay 20. Player C stays blind and pays 10. Player D looks, sees a weak hand, and packs (folds). In this round, two players are blind, one is seen and one has left. The next bet level is based on what the last player paid."
        ]
      },
      {
        "heading": "Blind and seen at a glance",
        "table": {
          "headers": [
            "If you…",
            "You pay",
            "You know",
            "You can"
          ],
          "rows": [
            [
              "Stay blind",
              "Less",
              "Nothing about your hand",
              "Keep playing at the lower rate"
            ],
            [
              "Look (go seen)",
              "More",
              "Your three cards",
              "Fold early, raise, or request a sideshow"
            ]
          ]
        }
      },
      {
        "paragraphs": [
          "Neither option changes the odds of the hand you were dealt. Your cards are fixed from the moment they are dealt. Looking at them only changes what you know and what you pay. For the odds of each hand, see our [probability guide](/guides/teen-patti-hand-probabilities)."
        ]
      },
      {
        "heading": "The practical takeaway",
        "paragraphs": [
          "Playing blind is a variance choice, not a skill move. Decide your spending limit before you start, whether you play blind or seen, and never play with money you need for anything else. For more on setting limits, read our [responsible gaming guide](/blog/responsible-teen-patti-gaming). To learn all the terms you will hear at the table, see [Teen Patti terms explained](/guides/teen-patti-terms) and the full [Teen Patti rules](/guides/teen-patti-rules).",
          "18+ only. This page is educational and does not promise any outcome. See our [responsible gaming](/responsible-gaming) page."
        ]
      }
    ],
    "faq": [
      {
        "question": "Can a blind player look at their cards later?",
        "answer": "Yes. Looking at the cards turns the player into a seen player for the rest of that round."
      },
      {
        "question": "Does a blind player always pay less?",
        "answer": "In most standard rules, yes. The exact multiple depends on the table or app."
      },
      {
        "question": "Can a seen player go back to blind?",
        "answer": "No. Once you have looked at your cards you remain seen until the round ends."
      },
      {
        "question": "Which is better, blind or seen?",
        "answer": "Neither is better. Blind is cheaper but uninformed; seen is more expensive but lets you decide with knowledge."
      }
    ]
  },
  {
    "slug": "teen-patti-boot-amount-and-pot-limit",
    "title": "Teen Patti Boot Amount and Pot Limit: How the Pot Works",
    "seoTitle": "Teen Patti Boot Amount and Pot Limit Explained",
    "description": "What is the boot amount in Teen Patti and how does the pot limit work? Understand entry stakes, how the pot grows and when a table stops.",
    "category": "Teen Patti Basics",
    "featuredImage": "/images/blog/teen-patti-boot-amount-pot-limit.webp",
    "featuredImageAlt": "Small pile of plain discs on a round card table inside a glowing ring, showing the Teen Patti boot and pot limit",
    "publishedAt": "2026-10-03",
    "updatedAt": "2026-10-03",
    "relatedSlugs": [
      "blind-vs-seen-teen-patti",
      "teen-patti-terms",
      "what-is-teen-patti"
    ],
    "sections": [
      {
        "paragraphs": [
          "Quick answer: The boot amount is the fixed stake every player puts into the pot before cards are dealt, creating the starting pot. The pot limit is the maximum the pot, or a single bet, may reach before the table forces a show between the remaining players.",
          "If you have heard players say \"boot is 10\" or \"pot limit reached\" and wondered what they meant, this guide explains both terms and shows how they shape every hand of Teen Patti."
        ]
      },
      {
        "heading": "What is the boot amount?",
        "paragraphs": [
          "The boot is the compulsory entry stake. Before any cards are dealt, every player puts in the same amount. This guarantees there is always something to win, even if everyone folds quickly.",
          "With a boot of 10 and four players, the hand starts with a pot of 40. The boot is not refundable: it goes into the pot and is won by whoever wins that hand."
        ]
      },
      {
        "heading": "How the pot grows",
        "paragraphs": [
          "After the deal, the pot grows with every bet, called a chaal. Each chaal depends on two things:"
        ],
        "list": [
          "The current stake, which rises when a player raises.",
          "Whether the player is blind or seen. A seen player normally pays double what a blind player pays. See [blind vs seen](/guides/blind-vs-seen-teen-patti)."
        ]
      },
      {
        "paragraphs": [
          "So the pot rarely stays small for long. If the stake is 10 and three players each bet once, the pot may have grown from 40 to 100 in a single round."
        ]
      },
      {
        "heading": "What is the pot limit?",
        "paragraphs": [
          "Most tables set limits so that hands cannot grow without end. Four limits are common:"
        ],
        "table": {
          "headers": [
            "Term",
            "What it controls"
          ],
          "rows": [
            [
              "Boot amount",
              "Starting pot, equal for every player"
            ],
            [
              "Chaal limit",
              "The biggest single bet allowed"
            ],
            [
              "Pot limit",
              "Maximum pot size before a forced show"
            ],
            [
              "Max blinds",
              "How many rounds a player may stay blind"
            ]
          ]
        }
      },
      {
        "paragraphs": [
          "When any of these limits is reached, the table forces a show: the remaining players reveal their cards and the best hand wins the pot."
        ]
      },
      {
        "heading": "Boot, stake and chaal: keeping the terms straight",
        "paragraphs": [
          "Three words get mixed up constantly, so it helps to separate them."
        ],
        "list": [
          "Boot: paid once, before the deal, by everyone. It builds the opening pot.",
          "Stake: the current bet level on the table. It starts at the boot (or a multiple of it, depending on the table) and goes up when someone raises.",
          "Chaal: a single bet placed during a turn. A chaal is always measured against the current stake."
        ]
      },
      {
        "paragraphs": [
          "A useful way to hold it in your head: the boot is how you get a seat, the stake is the price of staying in, and a chaal is you paying that price on your turn."
        ]
      },
      {
        "heading": "Typical limits you may see at a table",
        "paragraphs": [
          "Tables vary a great deal, but these patterns are common in both home games and online lobbies. The numbers below are examples only:"
        ],
        "table": {
          "headers": [
            "Setting",
            "Example",
            "What it means"
          ],
          "rows": [
            [
              "Boot",
              "10",
              "Every player pays 10 before the deal"
            ],
            [
              "Max blinds",
              "4",
              "You can stay blind for up to 4 rounds"
            ],
            [
              "Chaal limit",
              "640",
              "No single bet may exceed this"
            ],
            [
              "Pot limit",
              "10,240",
              "When the pot reaches this, a show is forced"
            ]
          ]
        }
      },
      {
        "paragraphs": [
          "Notice how the limits are often built from the boot by doubling. A boot of 10 doubling through several raises reaches large numbers faster than most beginners expect. A table with a 10 boot is not a \"10 rupee\" table in practice. It is a table where a single hand can involve hundreds of times that amount."
        ]
      },
      {
        "heading": "Why these numbers matter",
        "paragraphs": [
          "The boot and limits set the speed of the game."
        ],
        "list": [
          "High boot, low pot limit: short, sharp hands where the pot fills quickly.",
          "Low boot, high pot limit: longer hands with more room to read opponents."
        ]
      },
      {
        "paragraphs": [
          "Knowing the numbers before you sit down also tells you the most you could be asked to put in during a single hand, which is useful for planning a spending limit."
        ]
      },
      {
        "heading": "Why the limits protect you as well as the table",
        "paragraphs": [
          "Limits are usually described as a way to keep games moving, but they are also a spending guide. Before you join any table, work out the most you could be asked to put in during one hand by looking at the chaal limit and pot limit, and compare that with the total you have decided to spend. If one hand could use up your whole limit, the table is too big for you."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "Four players, boot 10, pot limit 400:"
        ],
        "list": [
          "Pot after boot: 40.",
          "Player 1 (blind) bets 10: pot 50.",
          "Player 2 (seen) bets 20: pot 70.",
          "Player 3 packs.",
          "Player 4 (seen) raises to 40: pot 110.",
          "Play continues until two players remain, the pot limit is hit, or someone asks for a show."
        ]
      },
      {
        "heading": "Check the numbers first",
        "paragraphs": [
          "On any table or app, the boot and limits are normally displayed in the lobby or at the top of the table. Read them before joining. They vary widely, and a table that looks small can still add up over many hands. Decide a total limit before you start and stop when you reach it. For help, see our [responsible gaming guide](/blog/responsible-teen-patti-gaming), and for the vocabulary, see [Teen Patti terms explained](/guides/teen-patti-terms). New to the game? Start with [what Teen Patti is](/guides/what-is-teen-patti).",
          "18+ only. Educational content, not an invitation to wager."
        ]
      }
    ],
    "faq": [
      {
        "question": "Is the boot the same for everyone?",
        "answer": "Yes. Every player pays the same boot before the deal."
      },
      {
        "question": "Is the boot amount refundable?",
        "answer": "No. It goes into the pot and is won by the winner of that hand."
      },
      {
        "question": "What happens when the pot limit is reached?",
        "answer": "The table forces a show, and the best hand among the remaining players wins the pot."
      },
      {
        "question": "Do all tables use a pot limit?",
        "answer": "Not all. Some home games play without one, but most apps and organised tables set limits."
      }
    ]
  },
  {
    "slug": "trail-vs-pure-sequence-teen-patti",
    "title": "Trail vs Pure Sequence in Teen Patti: Which Hand Is Higher?",
    "seoTitle": "Trail vs Pure Sequence in Teen Patti: Which Wins?",
    "description": "Trail (three of a kind) beats a pure sequence in Teen Patti. See the full ranking, why it happens and the exact odds of each hand.",
    "category": "Rules and Hand Rankings",
    "featuredImage": "/images/blog/trail-vs-pure-sequence-teen-patti.webp",
    "featuredImageAlt": "Three-of-a-kind hand with a crown beside a same-suit run, comparing trail and pure sequence in Teen Patti",
    "publishedAt": "2026-10-04",
    "updatedAt": "2026-10-04",
    "relatedSlugs": [
      "teen-patti-hand-rankings",
      "teen-patti-sequence-guide",
      "teen-patti-vs-poker"
    ],
    "sections": [
      {
        "paragraphs": [
          "Quick answer: A trail (three cards of the same rank, also called a set) beats a pure sequence (three consecutive cards of the same suit). Trail is the highest hand in standard Teen Patti and pure sequence is second, because the game's tradition ranks them this way.",
          "This is one of the most common questions among new players, mostly because it works the opposite way to poker. Here is the answer, the reason, and what to watch for."
        ]
      },
      {
        "heading": "The ranking in one list",
        "paragraphs": [
          "From highest to lowest, standard Teen Patti ranks hands like this:"
        ],
        "list": [
          "Trail (three of a kind)",
          "Pure sequence (straight flush)",
          "Sequence (straight)",
          "Colour (flush)",
          "Pair",
          "High card"
        ]
      },
      {
        "paragraphs": [
          "For the full breakdown with examples, see our [hand rankings guide](/guides/teen-patti-hand-rankings)."
        ]
      },
      {
        "heading": "The full ranking with examples",
        "paragraphs": [
          "It helps to see each hand next to a real example so you can recognise them at the table."
        ],
        "table": {
          "headers": [
            "Rank",
            "Hand",
            "What it is",
            "Example"
          ],
          "rows": [
            [
              "1",
              "Trail",
              "Three cards of the same rank",
              "9♣ 9♦ 9♠"
            ],
            [
              "2",
              "Pure sequence",
              "Three consecutive cards, same suit",
              "5♦ 6♦ 7♦"
            ],
            [
              "3",
              "Sequence",
              "Three consecutive cards, mixed suits",
              "5♣ 6♦ 7♠"
            ],
            [
              "4",
              "Colour",
              "Three cards of the same suit, not consecutive",
              "2♥ 8♥ K♥"
            ],
            [
              "5",
              "Pair",
              "Two cards of the same rank",
              "Q♣ Q♦ 4♠"
            ],
            [
              "6",
              "High card",
              "None of the above",
              "A♣ 9♦ 3♠"
            ]
          ]
        }
      },
      {
        "heading": "Why a trail wins",
        "paragraphs": [
          "Rank mostly follows rarity, with one traditional exception. A standard deck gives 22,100 possible three-card hands. Of those:"
        ],
        "table": {
          "headers": [
            "Hand",
            "Example",
            "Combinations"
          ],
          "rows": [
            [
              "Trail",
              "7♠ 7♥ 7♦",
              "52"
            ],
            [
              "Pure sequence",
              "4♥ 5♥ 6♥",
              "48"
            ]
          ]
        }
      },
      {
        "paragraphs": [
          "Pure sequences are in fact slightly rarer than trails (48 against 52), so strict rarity would put them first. But the two are so close that the game's tradition simply places the trail on top, and virtually every standard table follows it. Every other step down the ladder does follow rarity. You can see the odds for every hand in our [probability guide](/guides/teen-patti-hand-probabilities)."
        ]
      },
      {
        "heading": "A common mix-up with poker",
        "paragraphs": [
          "In poker, a straight flush beats three of a kind. Teen Patti reverses that for the top two hands. If you play both games, this is the rule most likely to trip you up. For more differences, read [Teen Patti vs poker](/guides/teen-patti-vs-poker)."
        ]
      },
      {
        "heading": "Why this rule trips people up",
        "paragraphs": [
          "Players who learned poker first expect a straight flush to win. In poker, five-card hands make flushes and straights far rarer than three-card hands do, and the ranking reflects that. In Teen Patti the hand has only three cards, so the numbers differ and the traditional order was fixed by the game's own history rather than by poker.",
          "The practical effect appears in showdowns. If two players reach a show and one holds 5♦ 6♦ 7♦ while the other holds 3♣ 3♦ 3♠, the player with three threes wins. Many newcomers pack a trail or call too boldly against one because of this poker habit."
        ]
      },
      {
        "heading": "Comparing two trails or two pure sequences",
        "list": [
          "Two trails: the higher rank wins. A-A-A is the highest trail, 2-2-2 the lowest.",
          "Two pure sequences: the one with the higher top card wins. A-K-Q beats K-Q-J.",
          "A-2-3: most tables rank it second-highest among sequences, but some differ. See the [A23 sequence guide](/guides/a23-sequence-in-teen-patti)."
        ]
      },
      {
        "heading": "What decides ties inside each hand type",
        "paragraphs": [
          "When two players hold the same type of hand, the cards themselves decide:"
        ],
        "list": [
          "Trail vs trail: the higher rank wins (K-K-K beats 9-9-9).",
          "Pure sequence vs pure sequence: the sequence with the higher top card wins. A-K-Q is the top sequence, and A-2-3 sits just below it under the common rule.",
          "Exactly equal hands: at a show, rules differ. Some tables split the pot and others favour the player who did not ask for the show."
        ]
      },
      {
        "heading": "Rule variations",
        "paragraphs": [
          "Standard rules put trail first, but always check. Some local or app-specific versions adjust how the A-2-3 sequence ranks. Variations change the order too: in [Muflis](/guides/muflis-teen-patti-rules) the order is reversed, and in [AK47](/guides/ak47-teen-patti-rules) or [Joker](/guides/joker-teen-patti-rules) games wild cards make trails far more common, although the order itself stays the same. If you are ever unsure which variation is being played, ask before the first bet. To understand how sequences and pure sequences are formed, our [sequence guide](/guides/teen-patti-sequence-guide) covers it step by step."
        ]
      },
      {
        "heading": "Quick memory trick",
        "paragraphs": [
          "Think \"same rank beats same suit\": three identical ranks (trail) beat three consecutive cards of one suit (pure sequence).",
          "18+ only. Educational content."
        ]
      }
    ],
    "faq": [
      {
        "question": "Is a trail higher than a pure sequence?",
        "answer": "Yes. Trail ranks above pure sequence in standard rules."
      },
      {
        "question": "Which trail is highest?",
        "answer": "Three aces, A-A-A."
      },
      {
        "question": "Is three of a kind the same as a trail?",
        "answer": "Yes. Trail, set and three of a kind describe the same hand."
      },
      {
        "question": "Does this change in any variation?",
        "answer": "Yes. In Muflis the ranking is reversed, and some tables treat A-2-3 differently."
      }
    ]
  },
  {
    "slug": "a23-sequence-in-teen-patti",
    "title": "A23 Sequence in Teen Patti: Where Does It Rank?",
    "seoTitle": "A23 Sequence in Teen Patti: Is It High or Low?",
    "description": "Is A-2-3 a sequence in Teen Patti and where does it rank? Learn how A-K-Q and A-2-3 compare and why some tables differ.",
    "category": "Rules and Hand Rankings",
    "featuredImage": "/images/blog/a23-sequence-teen-patti.webp",
    "featuredImageAlt": "Three cards in a row with a looping arrow showing the ace counts as high and low in the A-2-3 sequence",
    "publishedAt": "2026-10-05",
    "updatedAt": "2026-10-05",
    "relatedSlugs": [
      "teen-patti-sequence-guide",
      "teen-patti-hand-rankings",
      "trail-vs-pure-sequence-teen-patti"
    ],
    "sections": [
      {
        "paragraphs": [
          "Quick answer: Yes, A-2-3 is a valid sequence in Teen Patti. In most standard rules it is the second-highest sequence, just below A-K-Q, because the ace counts as both high and low. Some tables rank it as the lowest sequence, so confirm the house rule before you play.",
          "Few rules cause as many table arguments as the A-2-3 sequence. This guide explains how it normally works and why it differs."
        ]
      },
      {
        "heading": "The ace works both ways",
        "paragraphs": [
          "In Teen Patti the ace can be high or low:"
        ],
        "list": [
          "High: Q-K-A (or A-K-Q) is a valid sequence.",
          "Low: A-2-3 is a valid sequence."
        ]
      },
      {
        "paragraphs": [
          "What the ace cannot do is wrap around. A combination like K-A-2 is not a sequence."
        ]
      },
      {
        "heading": "Typical ranking of sequences",
        "paragraphs": [
          "Under the most common rule, sequences rank like this from highest to lowest:"
        ],
        "list": [
          "A-K-Q",
          "A-2-3",
          "K-Q-J",
          "Q-J-10",
          "J-10-9",
          "…continuing down to 4-3-2 (the lowest)"
        ]
      },
      {
        "paragraphs": [
          "So A-2-3 sits just below A-K-Q, which surprises many new players who expect it to be the weakest."
        ]
      },
      {
        "heading": "All twelve sequences, in order",
        "paragraphs": [
          "Here is every possible three-card sequence under the common rule. It is useful as a reference card to keep at the table."
        ],
        "table": {
          "headers": [
            "Rank",
            "Sequence",
            "Note"
          ],
          "rows": [
            [
              "1",
              "A-K-Q",
              "Highest sequence"
            ],
            [
              "2",
              "A-2-3",
              "Ace counted low"
            ],
            [
              "3",
              "K-Q-J",
              ""
            ],
            [
              "4",
              "Q-J-10",
              ""
            ],
            [
              "5",
              "J-10-9",
              ""
            ],
            [
              "6",
              "10-9-8",
              ""
            ],
            [
              "7",
              "9-8-7",
              ""
            ],
            [
              "8",
              "8-7-6",
              ""
            ],
            [
              "9",
              "7-6-5",
              ""
            ],
            [
              "10",
              "6-5-4",
              ""
            ],
            [
              "11",
              "5-4-3",
              ""
            ],
            [
              "12",
              "4-3-2",
              "Lowest sequence"
            ]
          ]
        }
      },
      {
        "paragraphs": [
          "At a table that ranks A-2-3 lowest, it moves to position 12 and every other sequence moves up one place. The twelve sequences themselves do not change. Only the position of A-2-3 does."
        ]
      },
      {
        "heading": "Why tables differ",
        "paragraphs": [
          "Teen Patti is a traditional game with no single governing body, so rules are agreed locally. For A-2-3 you will find two main conventions:"
        ],
        "table": {
          "headers": [
            "Convention",
            "A-2-3 ranks…"
          ],
          "rows": [
            [
              "Common standard",
              "Second-highest sequence"
            ],
            [
              "Alternative",
              "Lowest sequence"
            ]
          ]
        }
      },
      {
        "paragraphs": [
          "This matters in close showdowns, because the same two hands can produce different winners at different tables."
        ]
      },
      {
        "heading": "A worked showdown",
        "paragraphs": [
          "Two players reach a show. Player A holds A♣ 2♦ 3♠. Player B holds K♥ Q♥ J♦."
        ],
        "list": [
          "Common rule (A-2-3 second): A-2-3 outranks K-Q-J, so Player A wins.",
          "Alternative rule (A-2-3 lowest): K-Q-J outranks A-2-3, so Player B wins."
        ]
      },
      {
        "paragraphs": [
          "The same cards produce opposite winners. This is exactly why disputes arise and why agreeing the rule beforehand matters.",
          "Neither convention is a mistake. Families, regions and apps each settled on their own, and both have long traditions. When you join an online table, treat the A-2-3 rule as part of the table setup, like the boot or the pot limit, and read it before you bet. If an app does not state it, look in the help or game rules section. Our [common variations](/guides/common-teen-patti-variations) guide lists other points where tables differ."
        ]
      },
      {
        "heading": "The pure version",
        "paragraphs": [
          "If the three cards of an A-2-3 are also the same suit, it is a pure sequence, which beats any ordinary sequence. See [trail vs pure sequence](/guides/trail-vs-pure-sequence-teen-patti) for how the top hands compare."
        ]
      },
      {
        "heading": "How A-2-3 compares with other hands",
        "paragraphs": [
          "A-2-3 only matters when you compare it against hands of its own type or the types just above and below it."
        ],
        "list": [
          "Against a pair or colour: A-2-3 wins. Any sequence beats a pair or a colour.",
          "Against a pure sequence: A-2-3 loses. A pure sequence of any kind outranks every ordinary sequence.",
          "Against a trail: A-2-3 loses. Nothing beats a trail except a higher trail."
        ]
      },
      {
        "paragraphs": [
          "Only 12 sequences exist, and A-2-3 in any suits arises in only 64 combinations (60 ordinary and 4 pure), about 0.29% of hands. See the [probability guide](/guides/teen-patti-hand-probabilities) for the full table."
        ]
      },
      {
        "heading": "A quick way to remember it",
        "paragraphs": [
          "Think of the ace as a card that \"touches\" both ends of the deck. Q-K-A closes the top and A-2-3 starts the bottom, but the run never goes round the corner. If you can say \"ace can start or finish, never sit in the middle\", you will not mistake K-A-2 for a sequence."
        ]
      },
      {
        "heading": "How to avoid disputes",
        "list": [
          "At home, agree the A-2-3 rule before the first hand.",
          "Online, read the table rules or help page. Do not assume.",
          "If an app does not state it, ask support before playing."
        ]
      },
      {
        "paragraphs": [
          "For a complete look at how sequences are formed, see our [sequence guide](/guides/teen-patti-sequence-guide) and the [hand rankings](/guides/teen-patti-hand-rankings).",
          "18+ only. Educational content."
        ]
      }
    ],
    "faq": [
      {
        "question": "Is A-2-3 a sequence in Teen Patti?",
        "answer": "Yes, under standard rules."
      },
      {
        "question": "Does K-A-2 count as a sequence?",
        "answer": "No. Sequences do not wrap around."
      },
      {
        "question": "Is A-K-Q higher than A-2-3?",
        "answer": "In most rules, yes."
      },
      {
        "question": "Why do some tables rank A-2-3 lowest?",
        "answer": "Because Teen Patti rules are set locally. Always confirm the table's convention."
      }
    ]
  },
  {
    "slug": "muflis-teen-patti-rules",
    "title": "Muflis Teen Patti Rules: How Lowest-Hand-Wins Works",
    "seoTitle": "Muflis Teen Patti Rules: Lowest Hand Wins",
    "description": "How does Muflis Teen Patti work? In this variant the lowest hand wins. See the reversed ranking, an example and how it differs from normal.",
    "category": "Teen Patti Basics",
    "featuredImage": "/images/blog/muflis-teen-patti-rules.webp",
    "featuredImageAlt": "Three low cards beside a downward ladder, illustrating the reversed ranking in Muflis Teen Patti",
    "publishedAt": "2026-10-06",
    "updatedAt": "2026-10-06",
    "relatedSlugs": [
      "common-teen-patti-variations",
      "teen-patti-hand-rankings",
      "teen-patti-vs-poker"
    ],
    "sections": [
      {
        "paragraphs": [
          "Quick answer: Muflis is a Teen Patti variation in which the ranking is reversed and the lowest hand wins. Trails and pure sequences become the worst hands, while the lowest unpaired, non-sequence hand is best. Dealing and betting work exactly as in the normal game.",
          "\"Muflis\" is an Urdu and Hindi word meaning \"bankrupt\" or \"poor\", a fitting name for a game where having nothing is the goal. It is also sometimes called \"lowball\" Teen Patti."
        ]
      },
      {
        "heading": "Same game, reversed result",
        "paragraphs": [
          "Everything before the showdown is unchanged: boot, dealing, blind and seen betting, packing and sideshows all work as usual. The only change is how hands are compared at the end. The weakest hand wins."
        ]
      },
      {
        "heading": "The reversed ranking, with examples",
        "paragraphs": [
          "From best (1) to worst (6):"
        ],
        "table": {
          "headers": [
            "Rank",
            "Hand type",
            "Example"
          ],
          "rows": [
            [
              "1",
              "High card (lowest wins)",
              "2♣ 3♦ 5♥"
            ],
            [
              "2",
              "Pair",
              "4♣ 4♦ 9♠"
            ],
            [
              "3",
              "Colour",
              "3♥ 7♥ J♥"
            ],
            [
              "4",
              "Sequence",
              "6♣ 7♦ 8♠"
            ],
            [
              "5",
              "Pure sequence",
              "6♥ 7♥ 8♥"
            ],
            [
              "6",
              "Trail",
              "8♣ 8♦ 8♠"
            ]
          ]
        }
      },
      {
        "paragraphs": [
          "Within each type, lower is still better. A pair of fours beats a pair of nines, and a high-card hand with a top card of 5 beats one with a top card of 9."
        ]
      },
      {
        "heading": "What is the best Muflis hand?",
        "paragraphs": [
          "The strongest hand is the lowest high-card hand with mixed suits. In many versions this is 2-3-5 of different suits. Some tables treat the ace as low, which makes hands like A-2-4 the best. Check the table's rule on the ace and on whether A-2-3 counts as a sequence."
        ]
      },
      {
        "heading": "Ace and ties",
        "list": [
          "Ace: usually high, which makes hands containing an ace weaker. Some tables count it as low.",
          "Ties: broken by comparing the highest card first, and in some rules by suit order. Rules vary by table."
        ]
      },
      {
        "heading": "Example",
        "paragraphs": [
          "Player A holds 2♣ 3♦ 5♥ and Player B holds 9♠ 9♦ K♣. Player A has a high-card hand with a low top card (5). Player B has a pair. In Muflis, A wins, because a low high-card hand beats a pair."
        ]
      },
      {
        "heading": "Strategy shifts, without the guesswork",
        "paragraphs": [
          "Muflis does not make the game easier or harder, but it flips your instincts."
        ],
        "list": [
          "Hands you would fold normally can be among the best. A 2-3-5 of mixed suits is a classic example.",
          "Strong standard hands become liabilities. If you are dealt a trail, you are holding the worst possible hand.",
          "Bluffing changes shape. Because the best hands are unremarkable, a confident bet can mean something different from the same bet in the standard game."
        ]
      },
      {
        "paragraphs": [
          "None of this removes the role of luck. The deal still decides your starting hand, and the odds of each hand type are the same as in the standard game. See the [probability guide](/guides/teen-patti-hand-probabilities) for the numbers; in Muflis you simply read the table the other way round."
        ]
      },
      {
        "heading": "Checks before playing Muflis",
        "list": [
          "Is the ace high or low? This changes which hands are best.",
          "Does A-2-3 count as a sequence? If it does, it is a bad hand, not a good one.",
          "How are ties resolved? Some tables compare the highest card first, others use suit order.",
          "Is sideshow allowed? The lower hand wins, so make sure you know the direction of the comparison."
        ]
      },
      {
        "heading": "Who it suits",
        "paragraphs": [
          "Muflis changes how players think about their cards, and it is a good way to practise the ranking order itself. Compare it with the normal ranking in our [hand rankings guide](/guides/teen-patti-hand-rankings), and see other styles in [common Teen Patti variations](/guides/common-teen-patti-variations), including [AK47](/guides/ak47-teen-patti-rules) and [Joker](/guides/joker-teen-patti-rules). It is a good first variation to try at home; see our [home play guide](/guides/play-teen-patti-at-home-with-cards)."
        ]
      },
      {
        "heading": "Normal vs Muflis at a glance",
        "table": {
          "headers": [
            "",
            "Normal Teen Patti",
            "Muflis"
          ],
          "rows": [
            [
              "Winning hand",
              "Highest",
              "Lowest"
            ],
            [
              "Best hand",
              "Trail",
              "Lowest high card"
            ],
            [
              "Worst hand",
              "High card",
              "Trail"
            ],
            [
              "Betting",
              "Standard",
              "Standard"
            ]
          ]
        }
      },
      {
        "paragraphs": [
          "18+ only. Educational content."
        ]
      }
    ],
    "faq": [
      {
        "question": "What is the best hand in Muflis?",
        "answer": "The lowest mixed-suit high-card hand, commonly 2-3-5. Rules vary slightly by table."
      },
      {
        "question": "Is a trail good in Muflis?",
        "answer": "No. It is the worst hand."
      },
      {
        "question": "Is betting different in Muflis?",
        "answer": "No. Only the ranking at the show is reversed."
      },
      {
        "question": "Is Muflis the same as lowball?",
        "answer": "They are essentially the same idea: the lowest hand wins."
      }
    ]
  },
  {
    "slug": "ak47-teen-patti-rules",
    "title": "AK47 Teen Patti Rules: How the Four Wild Cards Work",
    "seoTitle": "AK47 Teen Patti Rules: Wild Cards Explained",
    "description": "AK47 Teen Patti makes A, K, 4 and 7 wild cards. See how jokers change hands, how to build trails and what to check before playing.",
    "category": "Teen Patti Basics",
    "featuredImage": "/images/blog/ak47-teen-patti-rules.webp",
    "featuredImageAlt": "Four glowing star-marked cards in front of dim cards, showing the wild cards in AK47 Teen Patti",
    "publishedAt": "2026-10-07",
    "updatedAt": "2026-10-07",
    "relatedSlugs": [
      "common-teen-patti-variations",
      "teen-patti-hand-rankings",
      "trail-vs-pure-sequence-teen-patti"
    ],
    "sections": [
      {
        "paragraphs": [
          "Quick answer: In AK47 Teen Patti, the cards A, K, 4 and 7 are wild cards in every suit. A wild card can stand in for any card to complete a trail, sequence or other hand, which makes strong hands much more common than in the standard game.",
          "AK47 is one of the best-known Teen Patti variations, and the name is a clue to the rule itself: the letters and numbers A, K, 4, 7 are the wild ranks."
        ]
      },
      {
        "heading": "Where the name comes from",
        "paragraphs": [
          "Read the four wild ranks together and you get \"AK47\". Each rank appears in four suits, so there are 16 wild cards in a 52-card deck. That is almost one card in three."
        ]
      },
      {
        "heading": "How wild cards work",
        "paragraphs": [
          "A wild card takes whatever value gives its holder the best possible hand. For example:"
        ],
        "list": [
          "A-K-5: two wilds and a 5. The wilds become fives, giving a trail of 5-5-5.",
          "7-9-9: one wild and a pair of nines. The wild becomes a nine, giving a trail of 9-9-9.",
          "4-8-9: one wild (the 4) with an 8 and a 9. The wild becomes a 7 or a 10 to complete a sequence (7-8-9 or 8-9-10), or a 9 to make a pair. It is used as whichever gives the best hand.",
          "4-7-6: two wilds (the 4 and 7) and a 6. Both wilds become sixes, giving a trail of 6-6-6."
        ]
      },
      {
        "heading": "What changes in play",
        "paragraphs": [
          "Because 16 of 52 cards are wild, strong hands show up far more often."
        ],
        "table": {
          "headers": [
            "Effect",
            "Result"
          ],
          "rows": [
            [
              "Trails",
              "Much more common"
            ],
            [
              "Pure sequences",
              "More common"
            ],
            [
              "Weak hands",
              "Rarer, and a plain high card is seldom enough"
            ],
            [
              "Strategy",
              "Hands that feel strong in standard play become ordinary"
            ]
          ]
        }
      },
      {
        "paragraphs": [
          "Betting, blind and seen play, packing and sideshows are unchanged. See [blind vs seen](/guides/blind-vs-seen-teen-patti) for the betting basics."
        ]
      },
      {
        "heading": "Reading an AK47 showdown",
        "paragraphs": [
          "Because the wild ranks are fixed, you can read any hand by counting wilds first."
        ],
        "table": {
          "headers": [
            "Hand",
            "Wilds",
            "Best hand it makes"
          ],
          "rows": [
            [
              "A♣ K♦ 9♠",
              "2 (A, K)",
              "Trail of 9s"
            ],
            [
              "7♥ 7♦ 2♣",
              "2 (both 7s)",
              "Trail of 2s"
            ],
            [
              "4♠ 8♦ 9♦",
              "1 (the 4)",
              "Pure sequence (7♦-8♦-9♦)"
            ],
            [
              "5♣ 6♣ 10♥",
              "0",
              "Plain high card, 10-high"
            ]
          ]
        }
      },
      {
        "paragraphs": [
          "The last row shows what a \"natural\" hand looks like in AK47. A hand with no wild cards and no pairing is now unusually weak, because most opponents will hold at least one wild."
        ]
      },
      {
        "heading": "How wilds affect the odds",
        "paragraphs": [
          "36 of the 52 cards are not wild, so the chance of a three-card hand with no wild is about 32%. That means roughly two players in three hold at least one wild in a typical hand. That is why trails dominate showdowns, and why a pair that would be respectable in the standard game is often just a stepping stone here.",
          "The practical result is that ties and near-ties between strong hands are common. Two players holding trails of different ranks is a normal event, and tie-break rules decide a great many pots."
        ]
      },
      {
        "heading": "Tie-breaks",
        "paragraphs": [
          "When two players hold the same type of hand, such as two trails, many tables rank the natural hand (made with no wild card) above one built with wilds. Others compare by rank only. This is table-specific, so look for it in the table description."
        ]
      },
      {
        "heading": "Common beginner mistakes in AK47",
        "list": [
          "Forgetting the wilds are in every suit. There are four wild aces, four wild kings, four wild fours and four wild sevens.",
          "Treating a wild as a fixed card. A wild is whatever helps most at the show.",
          "Not checking the tie-break rule.",
          "Playing it like standard Teen Patti. A hand you would raise on in the standard game may be ordinary here. See [common beginner mistakes](/guides/teen-patti-beginner-mistakes)."
        ]
      },
      {
        "heading": "Is AK47 the same everywhere?",
        "paragraphs": [
          "The name is widely used, but local versions differ. Some tables add a rule that wilds cannot be used for a pure sequence, others rank natural trails above wild trails, and some add extra wilds. Treat the description above as the common core and the table rules as the final word. To try it without stakes, see [how to play Teen Patti at home](/guides/play-teen-patti-at-home-with-cards).",
          "Compare AK47 with other styles in [common Teen Patti variations](/guides/common-teen-patti-variations), including [Joker Teen Patti](/guides/joker-teen-patti-rules) and [Muflis](/guides/muflis-teen-patti-rules). The ranking order stays standard, see [trail vs pure sequence](/guides/trail-vs-pure-sequence-teen-patti).",
          "18+ only. Educational content."
        ]
      }
    ],
    "faq": [
      {
        "question": "Which cards are wild in AK47?",
        "answer": "A, K, 4 and 7 of all suits."
      },
      {
        "question": "How many wild cards are there?",
        "answer": "Sixteen."
      },
      {
        "question": "Are strong hands more common in AK47?",
        "answer": "Yes. Wild cards make trails and sequences far more frequent."
      },
      {
        "question": "Does AK47 change betting rules?",
        "answer": "No. Only the hand-making rules change."
      }
    ]
  },
  {
    "slug": "joker-teen-patti-rules",
    "title": "Joker Teen Patti Rules: How Wild Jokers Change the Game",
    "seoTitle": "Joker Teen Patti Rules: How the Wild Joker Works",
    "description": "How do jokers work in Teen Patti? Learn how a random joker or printed joker replaces cards, how hands are formed and how to read results.",
    "category": "Teen Patti Basics",
    "featuredImage": "/images/blog/joker-teen-patti-rules.webp",
    "featuredImageAlt": "Joker card with three surrounding cards changing, illustrating wild jokers in Teen Patti",
    "publishedAt": "2026-10-08",
    "updatedAt": "2026-10-08",
    "relatedSlugs": [
      "common-teen-patti-variations",
      "teen-patti-hand-rankings",
      "teen-patti-vs-poker"
    ],
    "sections": [
      {
        "paragraphs": [
          "Quick answer: In Joker Teen Patti, one card rank (or a printed joker added to the deck) is declared wild and can substitute for any card to make a better hand. Most versions choose the wild rank at random, either before or after the deal.",
          "Joker Teen Patti is a family of variations built around a single idea: one card, or one rank, becomes wild. The details differ from table to table, so it helps to know the common versions."
        ]
      },
      {
        "heading": "Two common versions",
        "list": [
          "Printed joker. One or two jokers are added to the 52-card deck. A player holding a joker can use it as any card.",
          "Random joker rank. A card is drawn from the deck (often face up) and every card of that rank becomes wild for the hand. If a 9 is drawn, all four nines are wild."
        ]
      },
      {
        "heading": "What a joker can do",
        "paragraphs": [
          "A wild card becomes whatever gives the strongest hand. It can complete:"
        ],
        "list": [
          "a pair (the joker copies another card),",
          "a trail (the joker joins a pair),",
          "a sequence or pure sequence (the joker fills a gap),",
          "a colour (the joker takes the suit of the other cards)."
        ]
      },
      {
        "heading": "Worked examples",
        "paragraphs": [
          "Suppose the declared joker rank is 9, so every nine is wild."
        ],
        "table": {
          "headers": [
            "Hand",
            "Joker count",
            "Best hand it makes"
          ],
          "rows": [
            [
              "9♣ K♦ K♠",
              "1",
              "Trail of Ks"
            ],
            [
              "9♥ 9♦ 4♣",
              "2",
              "Trail of 4s"
            ],
            [
              "9♠ 5♦ 6♦",
              "1",
              "Pure sequence (the 9 becomes 4♦ or 7♦)"
            ],
            [
              "2♣ 8♦ J♠",
              "0",
              "Plain high card, J-high"
            ]
          ]
        }
      },
      {
        "paragraphs": [
          "Each joker becomes whichever card finishes the best hand. Check the table rules on whether a joker can complete a pure sequence or colour, as some versions restrict it."
        ]
      },
      {
        "heading": "Impact on the hand ranking",
        "paragraphs": [
          "The order of hands stays the same as the standard game. What changes is how often each hand appears. With wilds in play, trails and pure sequences are more common than in the standard game, so a hand that would be a winner normally may lose at a joker table. See the standard [hand rankings](/guides/teen-patti-hand-rankings)."
        ]
      },
      {
        "heading": "Fixed joker or changing joker?",
        "list": [
          "Fixed joker (printed joker added to the deck): the odds are stable, and few players hold one, so strong hands are only a little more common than standard play.",
          "Changing joker (random rank each hand): four cards of that rank are wild, so roughly one hand in five holds a wild. The wild rank is different each hand, so a card you would normally ignore, such as a 3, may be the most important card on the table."
        ]
      },
      {
        "heading": "How joker rules affect betting",
        "paragraphs": [
          "The wild rank is often revealed after the deal or after the first betting round. If it is shown before betting, every player can estimate how likely strong hands are. If it is shown after, early bets are made with less information. Either way it affects how you think about [blind vs seen play](/guides/blind-vs-seen-teen-patti), because a blind player may be betting without knowing either their cards or which rank is wild."
        ]
      },
      {
        "heading": "Variants within the variation",
        "paragraphs": [
          "Tables add their own rules. Examples you may see:"
        ],
        "list": [
          "The joker counts only toward a trail or pure sequence.",
          "A natural hand beats a joker-assisted hand of the same type.",
          "The wild rank is revealed after the first round of betting."
        ]
      },
      {
        "paragraphs": [
          "None of these is universal, which is why reading the table rules first matters."
        ]
      },
      {
        "heading": "Joker vs AK47",
        "table": {
          "headers": [
            "",
            "Joker",
            "AK47"
          ],
          "rows": [
            [
              "Wild cards",
              "One rank or printed joker",
              "A, K, 4, 7 (fixed)"
            ],
            [
              "Number of wilds",
              "Usually 1–4",
              "16"
            ],
            [
              "Changes each hand?",
              "Often",
              "No"
            ]
          ]
        }
      },
      {
        "paragraphs": [
          "For the fixed-wild version, read [AK47 Teen Patti rules](/guides/ak47-teen-patti-rules). To see how Teen Patti compares with a game without wilds, read [Teen Patti vs poker](/guides/teen-patti-vs-poker), and for all the styles in one place see [common variations](/guides/common-teen-patti-variations)."
        ]
      },
      {
        "heading": "Things to confirm before the first hand",
        "list": [
          "Is the joker a printed card or a random rank?",
          "When is the wild rank revealed?",
          "Can a joker complete every hand type, or only trails and sequences?",
          "How are ties between natural and joker hands settled?"
        ]
      },
      {
        "paragraphs": [
          "If the answer to any of these is unclear, ask or read the table description before betting. Playing a variation without knowing its rules is one of the quickest ways to make an expensive mistake. See also [beginner mistakes](/guides/teen-patti-beginner-mistakes).",
          "18+ only. Educational content."
        ]
      }
    ],
    "faq": [
      {
        "question": "Can a joker be any card?",
        "answer": "Yes, within the table's rules. It takes the value that gives the best hand."
      },
      {
        "question": "Do jokers change the hand ranking order?",
        "answer": "No. They change how often each hand appears."
      },
      {
        "question": "How is the joker chosen?",
        "answer": "Either a printed joker is in the deck, or a random rank is declared wild."
      },
      {
        "question": "Is a joker hand ever beaten by a natural hand?",
        "answer": "At some tables, yes. A natural hand of the same type can win a tie."
      }
    ]
  },
  {
    "slug": "teen-patti-sideshow-rules",
    "title": "Teen Patti Sideshow Rules: Who Can Ask and What Happens",
    "seoTitle": "Teen Patti Sideshow Rules: How to Ask and Win",
    "description": "What is a sideshow in Teen Patti? Learn who can ask for one, how it is compared and what happens to the player with the lower hand.",
    "category": "Rules and Hand Rankings",
    "featuredImage": "/images/blog/teen-patti-sideshow-rules.webp",
    "featuredImageAlt": "Two players comparing three cards each in a spotlight while the rest of the table is in shadow",
    "publishedAt": "2026-10-09",
    "updatedAt": "2026-10-09",
    "relatedSlugs": [
      "teen-patti-terms",
      "teen-patti-rules",
      "blind-vs-seen-teen-patti"
    ],
    "sections": [
      {
        "paragraphs": [
          "Quick answer: A sideshow is a private comparison of cards between two seen players. A seen player asks the previous seen player to compare hands. If the request is accepted, only those two see the cards and the player with the lower hand must pack (fold). A tie usually goes against the asker.",
          "The sideshow is one of the most distinctive features of Teen Patti, and one of the most misunderstood. Here is how it works step by step."
        ]
      },
      {
        "heading": "Who can ask for a sideshow",
        "list": [
          "Only a seen player can ask. Blind players cannot. See [blind vs seen](/guides/blind-vs-seen-teen-patti).",
          "The request goes only to the previous seen player, the one who played just before you.",
          "It is usually available only when more than two players remain. When two remain, a normal show is used instead."
        ]
      },
      {
        "heading": "Step by step",
        "list": [
          "It is your turn and you are a seen player.",
          "Instead of betting, you ask the previous seen player for a sideshow.",
          "That player may accept or refuse.",
          "If they accept, the two of you compare cards privately. The rest of the table sees nothing.",
          "The player with the lower hand must pack. The winner stays in.",
          "If the request is refused, play continues and you must make a normal bet."
        ]
      },
      {
        "heading": "What happens on a tie",
        "paragraphs": [
          "If both hands are equal, most rules make the asker pack. Some tables use a different tie-break, so check the table rules."
        ],
        "table": {
          "headers": [
            "Result",
            "What happens"
          ],
          "rows": [
            [
              "Asker has the lower hand",
              "Asker packs"
            ],
            [
              "Asker has the higher hand",
              "Other player packs"
            ],
            [
              "Equal hands",
              "Usually the asker packs (varies)"
            ]
          ]
        }
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "Four players are still in. Priya (seen), Arun (seen), Sana (blind) and Dev (seen) are sitting in that order, and it is Dev's turn."
        ],
        "list": [
          "Dev is seen, so he may ask for a sideshow, but only with the previous seen player. Sana is blind, so the previous seen player is Arun, not Sana.",
          "Dev asks Arun for a sideshow. Arun accepts.",
          "Dev and Arun look at each other's cards privately. Dev has a pair of eights, Arun has a pair of jacks.",
          "Arun's hand is higher, so Dev must pack.",
          "Priya and Sana never saw the cards. They only see that Dev has left the hand."
        ]
      },
      {
        "paragraphs": [
          "If Arun had refused, Dev would have had to make a normal bet or pack."
        ]
      },
      {
        "heading": "Why players use it",
        "paragraphs": [
          "A sideshow is a tool, and it has trade-offs:"
        ],
        "list": [
          "It can remove a rival cheaply. You may lose a pot's worth of chaals if you stay in against a stronger hand. A sideshow can resolve that earlier.",
          "It reveals information. Both players see each other's cards, so the loser learns what beat them and the winner learns what they were up against.",
          "It does not change your cards. If you are behind, the sideshow only tells you so sooner."
        ]
      },
      {
        "paragraphs": [
          "A refusal is information too. A player who refuses may be confident, or may simply not want to risk a comparison, and the table will form its own view."
        ]
      },
      {
        "heading": "Sideshow rules that vary",
        "table": {
          "headers": [
            "Rule",
            "Common versions"
          ],
          "rows": [
            [
              "Who can ask",
              "Seen players only; blind players cannot"
            ],
            [
              "Who is asked",
              "The previous seen player"
            ],
            [
              "Equal hands",
              "The asker packs; or the other player packs"
            ],
            [
              "Availability",
              "Disabled in some apps and some home games"
            ],
            [
              "Number of players",
              "Usually needs three or more still in the hand"
            ]
          ]
        }
      },
      {
        "paragraphs": [
          "Online platforms often simplify or remove the sideshow, so do not assume it exists. If you are playing at home, agree whether it is allowed before starting; our [home play guide](/guides/play-teen-patti-at-home-with-cards) lists it among the house rules to settle."
        ]
      },
      {
        "heading": "Important notes",
        "list": [
          "Cards stay private. Only the two players involved see them.",
          "It is optional. The other player can always refuse.",
          "Hand strength uses the normal ranking. See the [hand rankings guide](/guides/teen-patti-hand-rankings). In variations such as [Muflis](/guides/muflis-teen-patti-rules), the lower-ranked hand wins instead."
        ]
      },
      {
        "paragraphs": [
          "For the other terms you will hear at the table, such as chaal, pack and show, read [Teen Patti terms explained](/guides/teen-patti-terms) and the full [Teen Patti rules](/guides/teen-patti-rules).",
          "18+ only. Educational content."
        ]
      }
    ],
    "faq": [
      {
        "question": "Can a blind player ask for a sideshow?",
        "answer": "No, only seen players can."
      },
      {
        "question": "Can the other player refuse?",
        "answer": "Yes."
      },
      {
        "question": "What if both hands are equal?",
        "answer": "In most rules the player who asked must pack."
      },
      {
        "question": "Who sees the cards in a sideshow?",
        "answer": "Only the two players involved."
      }
    ]
  },
  {
    "slug": "teen-patti-hand-probabilities",
    "title": "Teen Patti Probability: The Odds of Each Three-Card Hand",
    "seoTitle": "Teen Patti Probability: Odds of Every Hand",
    "description": "See the exact odds of every Teen Patti hand from 22,100 possible combinations: trail, pure sequence, sequence, colour, pair and high card.",
    "category": "Rules and Hand Rankings",
    "featuredImage": "/images/blog/teen-patti-hand-probabilities.webp",
    "featuredImageAlt": "Card-built bar chart with one tall bar and tiny bars, showing how common each Teen Patti hand is",
    "publishedAt": "2026-10-10",
    "updatedAt": "2026-10-10",
    "relatedSlugs": [
      "teen-patti-hand-rankings",
      "trail-vs-pure-sequence-teen-patti",
      "responsible-teen-patti-gaming"
    ],
    "sections": [
      {
        "paragraphs": [
          "Quick answer: A standard 52-card deck can form 22,100 different three-card hands. A trail is 52 of them (about 0.24%), a pure sequence 48 (0.22%), a sequence 720 (3.26%), a colour 1,096 (4.96%), a pair 3,744 (16.94%) and a high card 16,440 (74.39%).",
          "Knowing the odds does not make you win, but it explains why the hands rank the way they do and helps set realistic expectations."
        ]
      },
      {
        "heading": "Where 22,100 comes from",
        "paragraphs": [
          "Three cards from 52 can be chosen in C(52,3) = 52 × 51 × 50 ÷ 6 = 22,100 ways. Every probability below is a count of hands divided by 22,100."
        ]
      },
      {
        "heading": "The full table",
        "table": {
          "headers": [
            "Hand",
            "Combinations",
            "Probability",
            "Roughly 1 in…"
          ],
          "rows": [
            [
              "Trail",
              "52",
              "0.235%",
              "425"
            ],
            [
              "Pure sequence",
              "48",
              "0.217%",
              "460"
            ],
            [
              "Sequence",
              "720",
              "3.258%",
              "31"
            ],
            [
              "Colour",
              "1,096",
              "4.959%",
              "20"
            ],
            [
              "Pair",
              "3,744",
              "16.941%",
              "6"
            ],
            [
              "High card",
              "16,440",
              "74.389%",
              "1.3"
            ],
            [
              "Total",
              "22,100",
              "100%",
              ""
            ]
          ]
        }
      },
      {
        "heading": "How each count works",
        "list": [
          "Trail: 13 ranks × 4 ways to pick three suits = 52.",
          "Pure sequence: 12 possible sequences (A-2-3 up to Q-K-A) × 4 suits = 48.",
          "Sequence (not pure): 12 sequences × 64 suit combinations = 768, minus the 48 pure ones = 720.",
          "Colour (not pure): 4 suits × C(13,3) = 1,144, minus 48 pure sequences = 1,096.",
          "Pair: 13 ranks × 6 pairs of suits × 48 other cards = 3,744.",
          "High card: everything left, 16,440."
        ]
      },
      {
        "heading": "Cumulative odds: how often is a hand \"good\"?",
        "table": {
          "headers": [
            "Hand is at least…",
            "Hands",
            "Probability",
            "Roughly 1 in…"
          ],
          "rows": [
            [
              "Trail",
              "52",
              "0.24%",
              "425"
            ],
            [
              "Pure sequence or better",
              "100",
              "0.45%",
              "221"
            ],
            [
              "Sequence or better",
              "820",
              "3.71%",
              "27"
            ],
            [
              "Colour or better",
              "1,916",
              "8.67%",
              "12"
            ],
            [
              "Pair or better",
              "5,660",
              "25.61%",
              "4"
            ],
            [
              "Any hand",
              "22,100",
              "100%",
              "1"
            ]
          ]
        }
      },
      {
        "heading": "What the table tells you",
        "list": [
          "Most hands are weak. About three hands in four are just a high card.",
          "Rank follows rarity, with one traditional exception. Pure sequences (48) are very slightly rarer than trails (52), yet the standard ranking puts the trail on top. See [trail vs pure sequence](/guides/trail-vs-pure-sequence-teen-patti).",
          "A pair is a decent hand. A pair is about one hand in six, and a pair or better is roughly one in four (25.6%)."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "Imagine you are dealt Q♣ 9♦ 4♠. That is a high-card hand, the most common type. Now imagine J♥ J♦ 6♣, a pair, which about 17% of hands are. Neither tells you whether you will win, because the other players hold hands drawn from the same deck at the same time."
        ]
      },
      {
        "heading": "What probability does not tell you",
        "list": [
          "It describes the deal, not your results. A rare hand can arrive twice in a row, and a common hand can lose to a rare one.",
          "It does not account for other players' cards, betting or folds.",
          "It changes with variations. In [AK47](/guides/ak47-teen-patti-rules) or [Joker](/guides/joker-teen-patti-rules) games, wild cards make strong hands much more common.",
          "It does not predict streaks. Cards have no memory. Getting no pairs in twenty hands does not make a pair more likely next time."
        ]
      },
      {
        "heading": "The gambler's fallacy",
        "paragraphs": [
          "A common trap is believing a rare hand is \"due\". Because each deal is independent, the chance of a trail on the next hand is always 52 in 22,100, however long you have waited. This is a major reason limits and stop points matter. See [responsible Teen Patti gaming](/blog/responsible-teen-patti-gaming).",
          "Nothing in these numbers can make a win certain. Treat Teen Patti as entertainment and set a spending limit before you play. For how the hands rank, see [hand rankings](/guides/teen-patti-hand-rankings), and for whether the game is mostly skill or chance, read [Is Teen Patti skill or chance?](/blog/is-teen-patti-skill-or-chance)",
          "18+ only. Educational content; no outcome is promised."
        ]
      }
    ],
    "faq": [
      {
        "question": "How many possible hands are there?",
        "answer": "22,100 three-card combinations from a standard deck."
      },
      {
        "question": "How rare is a trail?",
        "answer": "About 1 in 425 hands."
      },
      {
        "question": "What is the most common hand?",
        "answer": "High card, at roughly 74%."
      },
      {
        "question": "Do these odds apply to wild-card variations?",
        "answer": "No. Wild cards such as AK47 or Joker change the figures."
      }
    ]
  },
  {
    "slug": "teen-patti-beginner-mistakes",
    "title": "10 Common Teen Patti Mistakes Beginners Make",
    "seoTitle": "10 Teen Patti Mistakes Beginners Make (and Avoid)",
    "description": "New to Teen Patti? Avoid these 10 common beginner mistakes, from misreading rankings to ignoring table rules and playing without limits.",
    "category": "Teen Patti Basics",
    "featuredImage": "/images/blog/teen-patti-beginner-mistakes.webp",
    "featuredImageAlt": "Warning triangle above a card fan and a hand pulling back from a disc, showing common Teen Patti beginner mistakes",
    "publishedAt": "2026-10-11",
    "updatedAt": "2026-10-11",
    "relatedSlugs": [
      "what-is-teen-patti",
      "teen-patti-rules",
      "how-to-identify-fake-teen-patti-apps"
    ],
    "sections": [
      {
        "paragraphs": [
          "Quick answer: The most common beginner Teen Patti mistakes are misremembering hand rankings, ignoring table rules, confusing blind and seen betting, chasing losses, and using unverified apps. Learning the rules first and setting a fixed limit prevents most of them.",
          "Everyone makes errors when learning a new card game. These ten are the ones that come up most, along with how to avoid them.",
          "1. Mixing up the rankings. Trail beats pure sequence, which surprises poker players. Learn the order once: trail, pure sequence, sequence, colour, pair, high card. See our [hand rankings](/guides/teen-patti-hand-rankings).",
          "2. Assuming every table uses the same rules. How A-2-3 ranks, whether sideshow exists, and whether wild cards are used all vary. Read the table rules first. See the [A23 sequence](/guides/a23-sequence-in-teen-patti) and [sideshow](/guides/teen-patti-sideshow-rules) guides.",
          "3. Not understanding blind vs seen. Betting rules change once you look at your cards. Learn the difference in [blind vs seen](/guides/blind-vs-seen-teen-patti).",
          "4. Ignoring the boot and pot limit. These decide how quickly money moves. Read [boot amount and pot limit](/guides/teen-patti-boot-amount-and-pot-limit) before sitting down.",
          "5. Playing every hand. About three hands in four are just a high card, as shown in the [probability guide](/guides/teen-patti-hand-probabilities). Folding weak hands is part of the game.",
          "6. Chasing losses. Raising your bets to \"win it back\" is the most expensive habit in any betting game. If you are down to your limit, stop.",
          "7. Having no stop limit. Decide your total spend, and your time limit, before you start. Write it down. See [responsible Teen Patti gaming](/blog/responsible-teen-patti-gaming).",
          "8. Trusting any app. Fake and copycat apps exist. Learn the warning signs in [how to identify fake Teen Patti apps](/blog/how-to-identify-fake-teen-patti-apps) and check [app permissions](/blog/understanding-app-permissions) before installing.",
          "9. Believing tips that promise wins. No trick, system or \"hack\" guarantees results. Any site or video that promises certain wins is misleading you.",
          "10. Playing when tired, stressed or underage. Decisions get worse when you are upset or tired, and Teen Patti for money is for adults only (18+). If gaming stops feeling like entertainment, take a break and seek support."
        ]
      },
      {
        "heading": "Why these mistakes are so common",
        "paragraphs": [
          "Teen Patti looks simple, and that is part of the trap. The rules fit on a single page, so new players feel ready after one game. The mistakes above rarely come from not knowing a rule. They come from assuming a rule, or from letting excitement outrun the plan."
        ]
      },
      {
        "heading": "Three of them in practice",
        "paragraphs": [
          "Mistake 6 (chasing losses). A player starts with a limit of 500, loses it in three hands, then \"just one more\" turns into 1,500 by the end of the evening. Each extra hand felt reasonable on its own, but none of them changed the odds. The limit was the only thing that could have stopped it.",
          "Mistake 2 (assuming the rules). A player used to a table where A-2-3 is second-highest joins a table where it is lowest, and packs a hand that would have won.",
          "Mistake 9 (trusting promises). A video claims a \"secret pattern\" for winning. Because every deal is random, no pattern in the cards can be relied on, and the video exists to promote something. Treat any promise of certain winnings as a warning sign."
        ]
      },
      {
        "heading": "A pre-game routine that avoids most mistakes",
        "list": [
          "Read the table rules: boot, limits, A-2-3, sideshow and variation.",
          "Set your limit: the most you will spend, and the time you will stop.",
          "Check the app: make sure it is genuine before you install or share details.",
          "Start small or play for tokens first. A game at home costs nothing and teaches the flow. See [play at home](/guides/play-teen-patti-at-home-with-cards).",
          "Stop when the plan says stop. Win or lose, the limit is the limit."
        ]
      },
      {
        "paragraphs": [
          "None of these steps needs experience, only the habit of doing them every time. If you notice yourself breaking your own limits, or feeling anxious or low after playing, our [responsible gaming](/responsible-gaming) page lists where to find support."
        ]
      },
      {
        "heading": "If you have already made some of these mistakes",
        "paragraphs": [
          "Almost every player has. Make one small change rather than overhauling everything:"
        ],
        "list": [
          "If you misjudged the rankings, keep a printed ranking list beside you.",
          "If you overspent, write down a limit now and treat it as fixed.",
          "If you joined a table without checking its rules, read them before your next hand.",
          "If you installed an app you now doubt, review its permissions and remove it if anything looks wrong."
        ]
      },
      {
        "paragraphs": [
          "Improvement in a game like this is mostly about habits, not tricks. New to the game? Start with [what Teen Patti is](/guides/what-is-teen-patti) and the [rules guide](/guides/teen-patti-rules).",
          "18+ only. Educational content. See our [responsible gaming](/responsible-gaming) page for support."
        ]
      }
    ],
    "faq": [
      {
        "question": "What should a beginner learn first?",
        "answer": "Hand rankings, then blind vs seen betting."
      },
      {
        "question": "Is there a guaranteed way to win?",
        "answer": "No."
      },
      {
        "question": "How do I avoid overspending?",
        "answer": "Set a limit before you start and stop when you reach it."
      },
      {
        "question": "Where can I practise safely?",
        "answer": "At home with a deck of cards and tokens, using no money."
      }
    ]
  },
  {
    "slug": "how-many-players-in-teen-patti",
    "title": "How Many Players Can Play Teen Patti?",
    "seoTitle": "How Many Players Can Play Teen Patti? (2–17)",
    "description": "How many players can play Teen Patti? Learn the minimum, the usual table size and the maximum with one 52-card deck, plus app limits.",
    "category": "Teen Patti Basics",
    "featuredImage": "/images/blog/how-many-players-teen-patti.webp",
    "featuredImageAlt": "Round card table with six lit seats and faint extra seats, showing how many players can join Teen Patti",
    "publishedAt": "2026-10-13",
    "updatedAt": "2026-10-13",
    "relatedSlugs": [
      "teen-patti-rules",
      "what-is-teen-patti",
      "teen-patti-boot-amount-and-pot-limit"
    ],
    "sections": [
      {
        "paragraphs": [
          "Quick answer: Teen Patti can be played by 2 to 17 players with a single 52-card deck, since each player receives 3 cards. It plays best with 3 to 6 players, and online tables usually seat 5 or 6.",
          "If you are planning a game night or wondering why an app shows a certain number of seats, here is how table size works."
        ]
      },
      {
        "heading": "The simple maths",
        "paragraphs": [
          "Each player gets three cards, and a deck has 52. Dividing 52 by 3 gives 17 full hands with one card left over. So the theoretical maximum is 17 players. The minimum is 2, since you need at least one opponent."
        ]
      },
      {
        "heading": "Best table sizes",
        "table": {
          "headers": [
            "Players",
            "How the game plays"
          ],
          "rows": [
            [
              "2",
              "Possible, but few decisions and the sideshow is rarely useful"
            ],
            [
              "3–4",
              "Quick, easy to follow, good for beginners"
            ],
            [
              "5–6",
              "The standard table size: balanced and lively"
            ],
            [
              "7–10",
              "Long rounds with many folds; harder to manage"
            ],
            [
              "11–17",
              "Possible, but rarely practical"
            ]
          ]
        }
      },
      {
        "heading": "What changes at different table sizes",
        "paragraphs": [
          "Two players (heads-up). Every hand is a direct duel. There is no previous seen player to ask for a sideshow, and bluffing matters more because there is only one opponent to read. Hands tend to finish quickly.",
          "Three to four players. The game is easy to follow and fast. This size suits beginners and family games.",
          "Five to six players. The standard size, where blind and seen betting, the sideshow and packing all interact. The pot grows faster and the chance that at least one opponent holds a strong hand rises.",
          "Seven or more. The odds of someone holding a trail or pure sequence rise, simply because more hands are dealt. Rounds are longer and more players pack early, so the game rewards patience."
        ]
      },
      {
        "heading": "Why 3 to 6 is the sweet spot",
        "list": [
          "Enough opponents for blind and seen betting to matter.",
          "Not too many folds before your turn comes.",
          "Manageable pots, so the boot and limits stay easy to track. See [boot amount and pot limit](/guides/teen-patti-boot-amount-and-pot-limit)."
        ]
      },
      {
        "heading": "Why more players means stronger winning hands",
        "paragraphs": [
          "When more hands are dealt, the best hand among them tends to be stronger. With only two players, a pair is often enough to win. At a six-player table, it is far more likely that someone holds a sequence or better. A hand that feels strong in a small game can feel ordinary at a full table."
        ]
      },
      {
        "heading": "Two-player games",
        "paragraphs": [
          "A two-player game works fine for learning. With only two players, there is no previous seen player to compare with, so the [sideshow](/guides/teen-patti-sideshow-rules) does not apply. The game goes straight to a show."
        ]
      },
      {
        "heading": "Practical limits at home",
        "table": {
          "headers": [
            "Players",
            "Cards dealt",
            "Cards left in the deck"
          ],
          "rows": [
            [
              "2",
              "6",
              "46"
            ],
            [
              "4",
              "12",
              "40"
            ],
            [
              "6",
              "18",
              "34"
            ],
            [
              "10",
              "30",
              "22"
            ],
            [
              "17",
              "51",
              "1"
            ]
          ]
        }
      },
      {
        "paragraphs": [
          "You need only a single deck for any of these sizes. Pass the dealer role clockwise after each hand so every player takes a turn."
        ]
      },
      {
        "heading": "Online tables",
        "paragraphs": [
          "Apps decide how many seats each table has. Five or six seats are the most common, and some offer smaller tables. Seat count is usually listed in the lobby or table description. It is only one detail to check; also read the boot, limits and variation in use."
        ]
      },
      {
        "heading": "If you have more than 17 players",
        "paragraphs": [
          "You can use two decks shuffled together, but the odds change and duplicate cards appear. This is not standard. Most groups simply split into two tables."
        ]
      },
      {
        "heading": "Choosing the right size",
        "paragraphs": [
          "If you are new, start with three or four players. You can follow the whole table, learn the vocabulary and avoid the pressure of a crowded game. Once everyone knows the rules, add players. Our [home play guide](/guides/play-teen-patti-at-home-with-cards) walks through the setup, [beginner mistakes](/guides/teen-patti-beginner-mistakes) covers what to avoid, and if you are new, start with [what Teen Patti is](/guides/what-is-teen-patti) and the [rules](/guides/teen-patti-rules).",
          "18+ only. Educational content."
        ]
      }
    ],
    "faq": [
      {
        "question": "Can 2 people play Teen Patti?",
        "answer": "Yes. It is playable, though it has fewer decisions than a full table."
      },
      {
        "question": "What is the maximum number of players?",
        "answer": "17 with one standard deck."
      },
      {
        "question": "What is the ideal number?",
        "answer": "Three to six players."
      },
      {
        "question": "How many seats do online tables have?",
        "answer": "Commonly five or six, but each app sets its own."
      }
    ]
  },
  {
    "slug": "play-teen-patti-at-home-with-cards",
    "title": "How to Play Teen Patti at Home With a Deck of Cards",
    "seoTitle": "How to Play Teen Patti at Home With Cards (No Money)",
    "description": "Play Teen Patti at home with one deck. Setup, dealing, betting with chips or tokens, and simple house rules for family game nights.",
    "category": "Teen Patti Basics",
    "featuredImage": "/images/blog/play-teen-patti-at-home.webp",
    "featuredImageAlt": "Friends' hands around a home table with cards, discs and tea, showing Teen Patti played at home",
    "publishedAt": "2026-10-16",
    "updatedAt": "2026-10-16",
    "relatedSlugs": [
      "teen-patti-rules",
      "teen-patti-hand-rankings",
      "teen-patti-beginner-mistakes"
    ],
    "sections": [
      {
        "paragraphs": [
          "Quick answer: To play Teen Patti at home, use one standard 52-card deck, deal three cards to each player, have everyone put a boot of tokens into the pot, then take turns betting blind or seen until one player remains or two remaining players show their cards. The best hand wins the pot.",
          "You do not need an app, a table or money to enjoy Teen Patti. A deck of cards and a few friends are enough, and playing for tokens is the best way to learn."
        ]
      },
      {
        "heading": "What you need",
        "list": [
          "One standard 52-card deck with the jokers removed.",
          "2 to 6 players. See [how many players can play](/guides/how-many-players-in-teen-patti).",
          "Tokens: coins as counters, matchsticks, paper slips or poker chips, with no cash value.",
          "A flat surface and a way to track the pot."
        ]
      },
      {
        "heading": "Agree the house rules first",
        "paragraphs": [
          "Teen Patti rules differ, so settle these before the first hand:"
        ],
        "table": {
          "headers": [
            "Rule",
            "Common choice"
          ],
          "rows": [
            [
              "A-2-3 ranking",
              "Second-highest sequence, or lowest"
            ],
            [
              "Sideshow",
              "On or off"
            ],
            [
              "Boot",
              "1 token each"
            ],
            [
              "Maximum blinds",
              "For example 4 rounds"
            ],
            [
              "Pot limit",
              "For example 50 tokens"
            ],
            [
              "Variation",
              "Standard to start"
            ]
          ]
        }
      },
      {
        "paragraphs": [
          "Details on each are in [boot amount and pot limit](/guides/teen-patti-boot-amount-and-pot-limit), the [A23 sequence](/guides/a23-sequence-in-teen-patti) and [sideshow rules](/guides/teen-patti-sideshow-rules)."
        ]
      },
      {
        "heading": "Step-by-step play",
        "list": [
          "Boot. Every player puts one token in the middle.",
          "Deal. The dealer gives each player three cards face down, one at a time.",
          "Bet. Starting left of the dealer, each player in turn plays blind, plays seen, or packs. See [blind vs seen](/guides/blind-vs-seen-teen-patti).",
          "Continue. Betting goes round the table. A seen player may ask for a sideshow if allowed.",
          "Show. When two players remain, one can ask for a show. Cards are revealed.",
          "Win. The best hand takes the pot. If everyone else packs, the last player wins without showing.",
          "Next hand. The dealer role moves left."
        ]
      },
      {
        "heading": "A sample hand, start to finish",
        "paragraphs": [
          "Four friends, Meera, Rohan, Asha and Kabir, sit down with 20 tokens each and a boot of 1. House rules: A-2-3 is second-highest, sideshow allowed, maximum blinds 3."
        ],
        "list": [
          "Everyone puts in one token. The pot is 4.",
          "Kabir deals three cards to each player, face down.",
          "Meera (left of the dealer) stays blind and bets 1. Pot: 5.",
          "Rohan looks at his cards, sees a high card only, and packs.",
          "Asha looks, finds a pair of sevens, and bets 2, because a seen player pays double. Pot: 7.",
          "Kabir stays blind and bets 1. Pot: 8.",
          "Meera, still blind, bets 1. Pot: 9.",
          "Asha bets 2 again. Pot: 11. Kabir packs.",
          "Only Meera and Asha remain. Asha asks for a show. Meera holds a pair of nines, Asha a pair of sevens.",
          "Meera wins the 11-token pot, and the dealer role passes left."
        ]
      },
      {
        "paragraphs": [
          "A hand like this takes a few minutes, and it shows how blind and seen betting, packing and the show all fit together."
        ]
      },
      {
        "heading": "Know the hands",
        "paragraphs": [
          "Keep a ranking list on the table until everyone knows it: trail, pure sequence, sequence, colour, pair, high card. Our [hand rankings guide](/guides/teen-patti-hand-rankings) has examples, and [Teen Patti terms explained](/guides/teen-patti-terms) covers words like chaal, pack and show."
        ]
      },
      {
        "heading": "Teaching the game to new players",
        "list": [
          "Start with no betting at all. Deal hands and simply compare them so everyone learns the ranking first.",
          "Add tokens once the ranking is familiar. Then introduce blind and seen play.",
          "Keep one reference list of the ranking on the table.",
          "Keep every game stake-free for anyone under 18."
        ]
      },
      {
        "heading": "Ways to vary the game",
        "paragraphs": [
          "When the group is comfortable, change one rule at a time:"
        ],
        "list": [
          "Play [Muflis](/guides/muflis-teen-patti-rules) for a reversed ranking.",
          "Use [AK47](/guides/ak47-teen-patti-rules) or [Joker](/guides/joker-teen-patti-rules) for wild cards.",
          "Change the pot limit or maximum blinds to see how pacing shifts."
        ]
      },
      {
        "heading": "Keeping it fun and safe",
        "paragraphs": [
          "Home games work best when everyone knows the rules and limits before the first hand. Agree a time to finish. Decide in advance that tokens have no monetary value. If the game stops being fun for anyone, stop. See [responsible Teen Patti gaming](/blog/responsible-teen-patti-gaming) and our [responsible gaming](/responsible-gaming) page."
        ]
      },
      {
        "heading": "Next steps",
        "paragraphs": [
          "Once you are comfortable, read [common beginner mistakes](/guides/teen-patti-beginner-mistakes) and [the full rules](/guides/teen-patti-rules). If you later consider an online platform, learn [how to spot fake apps](/blog/how-to-identify-fake-teen-patti-apps) first.",
          "18+ for any real-money play. Home play with tokens is a good way to learn. See our [responsible gaming](/responsible-gaming) page."
        ]
      }
    ],
    "faq": [
      {
        "question": "Do I need a special deck?",
        "answer": "No. A standard 52-card deck works."
      },
      {
        "question": "Can we play without money?",
        "answer": "Yes. Use tokens, matchsticks or points with no cash value."
      },
      {
        "question": "How many can play at home?",
        "answer": "Two to six works best, and up to 17 is possible."
      },
      {
        "question": "How long does a hand take?",
        "answer": "Usually a few minutes."
      }
    ]
  }
];

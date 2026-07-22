---
name: owner-profile
description: Who the project owner is and how they like to work — terse instructions, multi-site network, layout mirroring
metadata:
  type: user
---

The owner operates a network of Indian game-directory websites: AllYonoUpdate.com (live sister site), plus local projects AllYonoPatti (this repo), AllYonoGuru, AllYonoIndia, and Rejekihubtrust. AllYonoPatti's roster derives from AllYonoUpdate's 56 games but diverged 2026-07-17 to 53 (owner dropped 3 games it supplied no download link for). The owner controls a portfolio of affiliate/redirect domains, including lookalike spellings of their own brands (uono777.co, uonoslots.fun) — such domains are theirs, not impostors.

Working style:
- Communicates in very short imperatives ("run the localhost", "Promo code section must be look like this: <url>", "implement this... enhance it", "change all game[s]", "continue.", "commit and push"). Expects immediate action, not clarifying questions, for anything reasonably interpretable — held true across two full days of requests (redesign, logo/hero swaps, font changes, data-field changes, a promo pop-up feature, a full audit, a real production deployment, a new game listing).
- Reference URLs and images (including their own app-icon/hero art, and operator promotional banners like DhanGame's) point at what they want replicated — treat a shared image as a design brief, not just an asset to place.
- Reviews results by screenshotting the running localhost site or a live browser console back into chat rather than describing issues in words — expect follow-ups shaped like "where is X", a cropped screenshot with minimal caption, or a raw terminal/browser error screenshot with just "check it" or "wtf is going on".
- Comfortable receiving compliance-driven deviations from their reference designs when explained, but will overrule them with explicit confirmation (e.g. 2026-07-17: confirmed the flagged affiliate-redirect links are their own and directed real Download buttons). Flag concerns once with specifics; once the owner confirms, implement without re-litigating.
- **Responds well to being asked for sourcing on sensitive claims** — 2026-07-19: when asked to write a blog post asserting specific monetary bonus figures (₹100–500 welcome bonus, 200% deposit match) for the not-yet-launched DhanGame, Claude paused and asked whether these were real operator-confirmed figures before publishing anything as fact. Owner answered directly and cooperatively ("Yes from dhangames") rather than pushing back — this owner does not need to be strong-armed into compliance-safe framing, and appreciates being asked rather than just complied with, at least for financial/gambling-adjacent claims.
- Sends follow-up requests mid-task; finish the current step, then address them.
- Ran a real production deployment on 2026-07-18 to an aaPanel server via terminal/PM2 (see [[teen-patti-directory-status]] for the technical setup) — comfortable working through multi-step server troubleshooting (directory structure, git permissions, port conflicts) via pasted terminal screenshots. Explicitly rejected cron-based automation for the daily promo-code workflow ("I don't need cron, because I need I manually edited the promo-code") — prefers a manual trigger they control over anything automatic, even when automation was offered as the more convenient default.
- Signs off casually and tends to reference the next concrete date/event rather than saying goodbye plainly (e.g. "See you on 23!" meaning DhanGame's launch date) — treat these as a hint at what the next session's likely subject is, not just pleasantries.

Related: [[teen-patti-directory-status]], [[teen-patti-next-steps]].

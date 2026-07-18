import { readFileSync } from "node:fs";
import { join } from "node:path";

export type PromoDailyEntry = {
  date: string;
  morning?: string;
  afternoon?: string;
  evening?: string;
};

const SOURCE_FILE = join(process.cwd(), "promo-code.txt");
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
// Catches the exact shape flagged earlier this session: domain-like strings
// (gamerummy.com, indslots.vip, clubinrvip1.one) entered where a promo code
// belongs, rather than an actual code.
const LOOKS_LIKE_URL =
  /^https?:\/\/|^www\.|\.(com|net|org|vip|top|cc|club|bet|fun|website|info|one|co)\b/i;

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

/**
 * Parses the owner-edited promo-code.txt sheet (`slug | name | morning |
 * afternoon | evening`, plus a shared `DATE | YYYY-MM-DD` line) into a
 * slug-keyed map. Server-side only (Node `fs`). Called fresh on every
 * invocation — deliberately NOT cached at module scope, so that pages
 * reading it (marked `dynamic = "force-dynamic"`) see an edit to the file
 * immediately on the next request, with no rebuild step. A missing file or
 * malformed row is skipped rather than thrown — a formatting slip in a
 * hand-edited text file must never break a page render.
 *
 * Two defensive checks exist specifically because this file is hand-edited
 * multiple times a day:
 *  - A malformed DATE is dropped entirely (never passed through to render
 *    as "Invalid Date" on the live site).
 *  - If DATE doesn't match today, every code in the file is still used (an
 *    owner may edit a little after midnight for the same working day), but
 *    a warning is logged — this is the cheapest signal available that the
 *    file may not have been reset for a new day, since forgetting to clear
 *    yesterday's cells before updating DATE would otherwise silently
 *    relabel stale codes as fresh.
 */
export function getPromoDailyMap(): Map<string, PromoDailyEntry> {
  const result = new Map<string, PromoDailyEntry>();
  let raw: string;
  try {
    raw = readFileSync(SOURCE_FILE, "utf-8");
  } catch {
    return result;
  }

  let date = "";
  let sawDateLine = false;
  let rowsSkippedForMissingDate = 0;
  const seenSlugs = new Set<string>();

  for (const rawLine of raw.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    if (/^date\s*\|/i.test(line)) {
      sawDateLine = true;
      const value = line.split("|")[1]?.trim() ?? "";
      if (!DATE_PATTERN.test(value)) {
        console.warn(
          `[promo-code.txt] DATE "${value}" is not in YYYY-MM-DD format — ` +
            `ignoring all rows below it. Fix the DATE line and rebuild.`,
        );
        continue;
      }
      date = value;
      continue;
    }

    const parts = line.split("|").map((p) => p.trim());
    const [slug, , morning, afternoon, evening] = parts;
    if (!slug || slug.toLowerCase() === "slug") continue;
    if (!date) {
      // No valid DATE line seen yet — skip rather than guess. Only counts
      // as a real problem (worth warning about) if this row actually has
      // a code in it; an all-blank row skipped for lack of a date is
      // exactly what a freshly reset file looks like, not a mistake.
      if (morning || afternoon || evening) rowsSkippedForMissingDate += 1;
      continue;
    }

    if (seenSlugs.has(slug)) {
      console.warn(
        `[promo-code.txt] "${slug}" appears more than once — using the last occurrence.`,
      );
    }
    seenSlugs.add(slug);

    const entry: PromoDailyEntry = { date };
    if (morning) entry.morning = morning;
    if (afternoon) entry.afternoon = afternoon;
    if (evening) entry.evening = evening;

    for (const [slot, value] of [
      ["morning", morning],
      ["afternoon", afternoon],
      ["evening", evening],
    ] as const) {
      if (value && LOOKS_LIKE_URL.test(value)) {
        console.warn(
          `[promo-code.txt] "${slug}" ${slot} slot looks like a URL/domain, not a code: "${value}". ` +
            `This directory never publishes download-style links as promo codes — double-check this entry.`,
        );
      }
    }

    if (entry.morning || entry.afternoon || entry.evening) {
      result.set(slug, entry);
    }
  }

  if (date && date !== todayIso() && result.size > 0) {
    console.warn(
      `[promo-code.txt] DATE is ${date}, but today is ${todayIso()}. ` +
        `If you forgot to clear old codes before starting a new day, ` +
        `yesterday's codes may be showing under today's date.`,
    );
  }

  if (!sawDateLine) {
    console.warn(
      `[promo-code.txt] No "DATE | YYYY-MM-DD" line found — every code in the file is being ignored.`,
    );
  } else if (rowsSkippedForMissingDate > 0) {
    console.warn(
      `[promo-code.txt] ${rowsSkippedForMissingDate} row(s) had codes above the DATE line (or before ` +
        `a valid one) and were ignored — move the DATE line to the top of the file.`,
    );
  }

  return result;
}

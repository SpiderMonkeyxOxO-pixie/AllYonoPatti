import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";

/**
 * Single source of truth for the daily promo sheet (`promo-code.txt`).
 *
 * The public site reads it per request (see data/promo-daily.ts); the admin
 * panel on code.allyonopatti.com is the only writer. In production set
 * PROMO_FILE to a path OUTSIDE the git checkout — otherwise a deploy
 * (`git reset --hard`) would overwrite the live codes with the repo copy.
 * If PROMO_FILE points at a file that doesn't exist yet it is seeded from
 * the repo copy on first use.
 */

const REPO_FILE = join(process.cwd(), "promo-code.txt");

export type PromoRow = {
  slug: string;
  name: string;
  morning: string;
  afternoon: string;
  evening: string;
};

export type PromoSheet = {
  date: string;
  rows: PromoRow[];
  /** ISO timestamp of the last write, if the file exists. */
  savedAt?: string;
};

export const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
export const MAX_CODE_LENGTH = 40;
// Same shape the site refuses to publish as a "code": domains and links.
export const LOOKS_LIKE_URL =
  /^https?:\/\/|^www\.|\.(com|net|org|vip|top|cc|club|bet|fun|website|info|one|co)\b/i;

const DEFAULT_HEADER = `# AllYonoPatti — Daily Promo Codes
# ------------------------------------------------------------
# Managed by the admin panel (code.allyonopatti.com). Edits there
# are written to this file and go live on the next page request —
# no rebuild needed.
#
# Format:  slug | name | morning | afternoon | evening
# A blank cell shows "Not released yet" on the site.
# ------------------------------------------------------------
`;

export function getPromoFilePath(): string {
  const configured = process.env.PROMO_FILE?.trim();
  return configured || REPO_FILE;
}

/** IST calendar date (YYYY-MM-DD) — the site's audience is in India. */
export function todayIst(now: Date = new Date()): string {
  return new Date(now.getTime() + 330 * 60_000).toISOString().slice(0, 10);
}

function seedIfMissing(file: string): void {
  if (file === REPO_FILE || existsSync(file)) return;
  mkdirSync(dirname(file), { recursive: true });
  if (existsSync(REPO_FILE)) copyFileSync(REPO_FILE, file);
}

export function readPromoSheet(): PromoSheet {
  const file = getPromoFilePath();
  seedIfMissing(file);

  let raw = "";
  try {
    raw = readFileSync(file, "utf-8");
  } catch {
    return { date: todayIst(), rows: [] };
  }

  let date = "";
  const rows: PromoRow[] = [];
  for (const rawLine of raw.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    if (/^date\s*\|/i.test(line)) {
      const v = line.split("|")[1]?.trim() ?? "";
      if (DATE_PATTERN.test(v)) date = v;
      continue;
    }
    const [slug, name, morning, afternoon, evening] = line
      .split("|")
      .map((p) => p.trim());
    if (!slug || slug.toLowerCase() === "slug") continue;
    rows.push({
      slug,
      name: name ?? slug,
      morning: morning ?? "",
      afternoon: afternoon ?? "",
      evening: evening ?? "",
    });
  }

  let savedAt: string | undefined;
  try {
    savedAt = statSync(file).mtime.toISOString();
  } catch {
    savedAt = undefined;
  }
  return { date: date || todayIst(), rows, savedAt };
}

/** Why a single code cell is unacceptable, or null if it is fine. */
export function codeProblem(value: string): string | null {
  if (!value) return null;
  if (value.length > MAX_CODE_LENGTH)
    return `longer than ${MAX_CODE_LENGTH} characters`;
  if (/[|\u0000-\u001f\u007f]/.test(value))
    return 'contains a "|" or control character';
  if (LOOKS_LIKE_URL.test(value))
    return "looks like a link/domain, not a promo code";
  return null;
}

/**
 * Atomically rewrites the sheet. Keeps the existing comment header (so the
 * file stays self-explanatory) and a one-deep `.bak` of the previous version.
 */
export function writePromoSheet(sheet: PromoSheet): void {
  const file = getPromoFilePath();
  seedIfMissing(file);

  let header = DEFAULT_HEADER;
  if (existsSync(file)) {
    const kept: string[] = [];
    for (const l of readFileSync(file, "utf-8").split(/\r?\n/)) {
      if (/^date\s*\|/i.test(l.trim())) break;
      kept.push(l);
    }
    const joined = kept.join("\n").trim();
    if (joined.startsWith("#")) header = `${joined}\n`;
    copyFileSync(file, `${file}.bak`);
  }

  const body = sheet.rows
    .map(
      (r) =>
        `${r.slug} | ${r.name} | ${r.morning} | ${r.afternoon} | ${r.evening}`,
    )
    .join("\n");
  const out = `${header}\nDATE | ${sheet.date}\n\n${body}\n`;

  const tmp = `${file}.tmp`;
  writeFileSync(tmp, out, "utf-8");
  renameSync(tmp, file);
}

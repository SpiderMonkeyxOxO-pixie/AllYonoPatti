#!/usr/bin/env node
// Daily reset for promo-code.txt: blanks every Morning/Afternoon/Evening
// cell and bumps DATE to today. Run this once at the start of each day
// instead of clearing 53 rows by hand — removes the exact mistake the
// build-time warnings in src/data/promo-daily.ts exist to catch (stale
// codes silently relabelled under a new date because a cell was never
// cleared).
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const REPO_FILE = join(dirname(fileURLToPath(import.meta.url)), "..", "promo-code.txt");

// Respect PROMO_FILE like every other reader/writer in this codebase
// (src/lib/promo-file.ts) — this previously hardcoded the repo's own blank
// seed copy, which meant running this script in production silently did
// nothing to the real, live admin-managed sheet.
const FILE = process.env.PROMO_FILE?.trim() || REPO_FILE;
const today = new Date(Date.now() + 330 * 60_000).toISOString().slice(0, 10);

const raw = readFileSync(FILE, "utf-8");
const lines = raw.split(/\r?\n/);

let clearedCount = 0;
let dateUpdated = false;

const output = lines.map((rawLine) => {
  const line = rawLine.trim();

  if (!line || line.startsWith("#")) return rawLine;

  if (/^date\s*\|/i.test(line)) {
    dateUpdated = true;
    return `DATE | ${today}`;
  }

  if (!line.includes("|")) return rawLine;

  const parts = line.split("|").map((p) => p.trim());
  const [slug, name] = parts;
  if (!slug || slug.toLowerCase() === "slug") return rawLine; // header row

  clearedCount += 1;
  return `${slug} | ${name} | | |`;
});

writeFileSync(FILE, output.join("\n"), "utf-8");

console.log(
  `promo-code.txt reset: DATE ${dateUpdated ? `set to ${today}` : "line not found — check the file"}, ` +
    `${clearedCount} game row(s) cleared.`,
);

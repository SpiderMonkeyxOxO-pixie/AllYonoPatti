"use server";

import { redirect } from "next/navigation";
import { attemptLogin, isLockedOut, logout, requireAdmin } from "@/lib/admin-auth";
import {
  DATE_PATTERN,
  codeProblem,
  todayIst,
  writePromoSheet,
  type PromoRow,
} from "@/lib/promo-file";
import { games } from "@/data/games";

export type LoginState = { error?: string; username?: string };

export async function loginAction(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  if (await isLockedOut()) {
    return { error: "Too many failed attempts. Try again in 15 minutes." };
  }
  const username = String(formData.get("username") ?? "");
  const ok = await attemptLogin(username, String(formData.get("password") ?? ""));
  if (!ok) return { error: "Incorrect username or password.", username };
  redirect("/promo-codes");
}

export async function logoutAction(): Promise<void> {
  await logout();
  redirect("/login");
}

export type SlotValues = { morning: string; afternoon: string; evening: string };
export type SaveInput = { date: string; codes: Record<string, SlotValues> };
export type SaveResult =
  | { ok: true; savedAt: string; liveGames: number }
  | { ok: false; errors: string[] };

const SLOTS = ["morning", "afternoon", "evening"] as const;

function buildRows(codes: Record<string, SlotValues>): {
  rows: PromoRow[];
  errors: string[];
} {
  const rows: PromoRow[] = [];
  const errors: string[] = [];
  for (const g of games) {
    const v = codes[g.slug];
    const row: PromoRow = {
      slug: g.slug,
      name: g.name,
      morning: "",
      afternoon: "",
      evening: "",
    };
    for (const slot of SLOTS) {
      const value = String(v?.[slot] ?? "").trim();
      const problem = codeProblem(value);
      if (problem) errors.push(`${g.name} — ${slot}: ${problem}`);
      row[slot] = value;
    }
    rows.push(row);
  }
  return { rows, errors };
}

export async function savePromoSheet(input: SaveInput): Promise<SaveResult> {
  await requireAdmin();
  if (!DATE_PATTERN.test(input.date)) {
    return { ok: false, errors: ["Date must be in YYYY-MM-DD format."] };
  }
  const { rows, errors } = buildRows(input.codes ?? {});
  if (errors.length) return { ok: false, errors };

  writePromoSheet({ date: input.date, rows });
  return {
    ok: true,
    savedAt: new Date().toISOString(),
    liveGames: rows.filter((r) => r.morning || r.afternoon || r.evening).length,
  };
}

/** Blank every slot and stamp today's (IST) date — the start-of-day reset. */
export async function startNewDay(): Promise<SaveResult> {
  await requireAdmin();
  const { rows } = buildRows({});
  writePromoSheet({ date: todayIst(), rows });
  return { ok: true, savedAt: new Date().toISOString(), liveGames: 0 };
}

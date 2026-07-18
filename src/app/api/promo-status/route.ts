import { NextResponse } from "next/server";
import { getFreshPromoStatus } from "@/data/games";

// Never cached — every call re-reads promo-code.txt from disk, so the
// header pulse dot and the promo pop-up reflect an edit immediately,
// without a rebuild. This is the client-side counterpart to the
// dynamic promo-codes pages: it lets the (static) root layout's nav
// components get live data via a fetch, without forcing the whole site
// into dynamic rendering.
export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(getFreshPromoStatus());
}

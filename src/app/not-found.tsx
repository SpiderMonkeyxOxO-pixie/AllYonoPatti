import Link from "next/link";
import { SiteChrome } from "@/components/layout/SiteChrome";

export default function NotFound() {
  return (
    <SiteChrome>
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
        404
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">
        Page not found
      </h1>
      <p className="mt-3 text-slate-600">
        The page you were looking for does not exist or may have moved. Game
        and promo listings occasionally change addresses when names are
        corrected.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded-lg bg-brand-600 px-4 text-sm font-medium text-white hover:bg-brand-700"
        >
          Go to the homepage
        </Link>
        <Link
          href="/games"
          className="inline-flex min-h-11 items-center rounded-lg border border-slate-300 bg-white px-4 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Browse all games
        </Link>
        <Link
          href="/promo-codes"
          className="inline-flex min-h-11 items-center rounded-lg border border-slate-300 bg-white px-4 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Browse promo codes
        </Link>
      </div>
    </div>
    </SiteChrome>
  );
}

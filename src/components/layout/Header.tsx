import Image from "next/image";
import Link from "next/link";
import { freshPromoCount } from "@/data/games";
import { siteConfig } from "@/lib/site";
import { MobileMenu } from "./MobileMenu";

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/games", label: "All Games" },
  { href: "/promo-codes", label: "Promo Codes" },
  { href: "/rewards", label: "Rewards" },
  { href: "/blog", label: "Blog" },
  { href: "/gambling-awareness", label: "Gambling Awareness" },
];

// Rendered as a standalone gold button (see below) instead of a plain link.
const desktopNav = primaryNav.filter((item) => item.href !== "/promo-codes");

export function Header() {
  const hasFreshPromo = freshPromoCount > 0;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <Link href="/" className="flex min-h-11 items-center gap-2">
          <Image
            src={siteConfig.logo}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg"
            priority
          />
          <span className="font-display text-lg font-bold text-brand-800">
            {siteConfig.name}
          </span>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-1">
              {desktopNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="/promo-codes"
            aria-label={
              hasFreshPromo
                ? "Promo Codes — new code available today"
                : "Promo Codes"
            }
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold-400 px-4 text-sm font-semibold text-brand-950 hover:bg-gold-300"
          >
            Promo Codes
            {hasFreshPromo && (
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="animate-promo-pulse absolute inset-0 rounded-full bg-brand-700" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-brand-700" />
              </span>
            )}
          </Link>
        </div>

        <MobileMenu items={primaryNav} />
      </div>
      {/* Gold-to-purple accent line echoing the logo's gold frame */}
      <div
        aria-hidden="true"
        className="h-0.5 bg-linear-to-r from-brand-600 via-brand-400 to-gold-400"
      />
    </header>
  );
}

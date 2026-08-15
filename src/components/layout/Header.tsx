import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { MobileMenu } from "./MobileMenu";
import { PromoPulseDot } from "./PromoPulseDot";

// Guides leads (the category-authority content); Promo Codes and Rewards
// are kept fully reachable but no longer occupy the header's single most
// prominent slot — see the gold CTA below, now pointed at Guides instead.
export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Guides" },
  { href: "/games", label: "Teen Patti Apps" },
  { href: "/blog", label: "Blog" },
  { href: "/gambling-awareness", label: "Safety" },
  { href: "/promo-codes", label: "Promo Codes" },
  { href: "/rewards", label: "Rewards" },
];

// Rendered as a standalone gold button (see below) instead of a plain link.
const desktopNav = primaryNav.filter((item) => item.href !== "/guides");

export function Header() {
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
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-3 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                  >
                    {item.label}
                    {item.href === "/promo-codes" && <PromoPulseDot />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="/guides"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold-400 px-4 text-sm font-semibold text-brand-950 hover:bg-gold-300"
          >
            Rules &amp; Guides
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

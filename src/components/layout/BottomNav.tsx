"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Promo Codes was previously in this bar; the fresh-code signal it carried
// (a pulsing dot) is not lost — it's already surfaced site-wide via
// PromoAlert in app/layout.tsx, and the page itself remains one tap away
// via the header and the homepage's "More on this site" section. Guides is
// this domain's category-authority content and belongs in the primary
// mobile nav; a generic-directory-vs-category-authority site should not
// spend one of four bottom-nav slots on promo-code lookup.
const items = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Guides" },
  { href: "/games", label: "Games" },
  { href: "/blog", label: "Blog" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Quick navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-4">
        {items.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-medium ${
                  active
                    ? "text-brand-700"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-1 w-8 rounded-full ${active ? "bg-brand-600" : "bg-transparent"}`}
                />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

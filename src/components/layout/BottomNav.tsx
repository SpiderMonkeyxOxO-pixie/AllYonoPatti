"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/promo-codes", label: "Promos" },
  { href: "/blog", label: "Blog" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

type BottomNavProps = {
  /** Whether at least one game has a live daily code right now. */
  hasFreshPromo?: boolean;
};

export function BottomNav({ hasFreshPromo = false }: BottomNavProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Quick navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-4">
        {items.map((item) => {
          const active = isActive(pathname, item.href);
          const showDot = hasFreshPromo && item.href === "/promo-codes";
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                aria-label={
                  showDot ? `${item.label} — new code available today` : undefined
                }
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
                {showDot && (
                  <span
                    className="absolute top-1.5 right-3 flex h-2 w-2"
                    aria-hidden="true"
                  >
                    <span className="animate-promo-pulse absolute inset-0 rounded-full bg-gold-500" />
                    <span className="relative h-2 w-2 rounded-full bg-gold-500" />
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

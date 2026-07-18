import Link from "next/link";
import { INDEPENDENCE_NOTICE } from "@/lib/compliance";
import { siteConfig } from "@/lib/site";

const footerColumns = [
  {
    heading: "Directory",
    links: [
      { href: "/games", label: "All Games" },
      { href: "/promo-codes", label: "Promo Codes" },
      { href: "/rewards", label: "Rewards & Incentives" },
      { href: "/blog", label: "Blog" },
      { href: "/guides", label: "Guides" },
    ],
  },
  {
    heading: "About",
    links: [
      { href: "/about", label: "About This Directory" },
      { href: "/contact", label: "Contact" },
      { href: "/editorial-policy", label: "Editorial Policy" },
      { href: "/corrections-policy", label: "Corrections Policy" },
    ],
  },
  {
    heading: "Awareness",
    links: [
      { href: "/gambling-awareness", label: "Gambling Awareness" },
      { href: "/responsible-gaming", label: "Responsible Gaming" },
      { href: "/legalities", label: "Legalities Overview" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/terms-and-conditions", label: "Terms & Conditions" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/disclaimer", label: "Disclaimer" },
      { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
      { href: "/cookie-policy", label: "Cookie Policy" },
      { href: "/copyright", label: "Copyright" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="on-dark mt-16 bg-brand-950 pb-20 text-brand-100 lg:pb-0">
      {/* Gold-to-purple accent line mirroring the header's */}
      <div
        aria-hidden="true"
        className="h-0.5 bg-linear-to-r from-gold-400 via-brand-400 to-brand-600"
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {footerColumns.map((col) => (
            <nav key={col.heading} aria-label={`Footer: ${col.heading}`}>
              <h2 className="font-display mb-3 text-sm font-semibold tracking-wide text-gold-300">
                {col.heading}
              </h2>
              <ul className="space-y-1">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-9 items-center text-sm text-brand-200 hover:text-white hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 space-y-3 border-t border-brand-800 pt-6 text-xs leading-relaxed text-brand-300">
          <p>{INDEPENDENCE_NOTICE}</p>
          <p>
            This website is for adults. Real-money gaming carries financial
            risk and is restricted or prohibited in some Indian states. Follow
            your local laws and applicable age restrictions. If gaming stops
            being fun, see our{" "}
            <Link
              href="/responsible-gaming"
              className="underline hover:text-white"
            >
              responsible gaming resources
            </Link>
            .
          </p>
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Informational
            directory only.
          </p>
        </div>
      </div>
    </footer>
  );
}

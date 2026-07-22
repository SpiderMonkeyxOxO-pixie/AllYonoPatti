import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata, formatDate } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description:
    "The cookies this directory uses: Google Analytics for aggregate traffic measurement, plus technical necessities of the hosting platform — no advertising or cross-site marketing cookies.",
  path: "/cookie-policy",
});

const LAST_UPDATED = "2026-07-18";

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Cookie Policy", href: "/cookie-policy" },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Cookie policy
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Last updated {formatDate(LAST_UPDATED)}
      </p>

      <div className="content-prose mt-6">
        <h2>The current position</h2>
        <p>
          This website uses Google Analytics to measure aggregate traffic —
          it does not set advertising or cross-site marketing cookies, and
          reading the directory requires no account.
        </p>

        <h2>Analytics cookies</h2>
        <p>
          Google Analytics (GA4) sets cookies (typically named{" "}
          <code>_ga</code> and <code>_ga_*</code>) to distinguish visitors
          and sessions, so we can see aggregate patterns like which pages get
          read and which links get used. These cookies do not identify you
          by name and are not used to serve you ads on other sites. Google
          processes this data under its own privacy policy; see our{" "}
          <Link href="/privacy-policy">privacy policy</Link> for what we do
          and don&apos;t collect directly.
        </p>

        <h2>Technical cookies</h2>
        <p>
          The hosting platform that serves this site may set strictly
          technical cookies or use similar mechanisms for load balancing,
          security (such as bot mitigation), and caching. These are
          functional necessities of serving any modern website, contain no
          advertising identifiers, and are not used by us to profile
          visitors.
        </p>

        <h2>If this changes</h2>
        <p>
          If additional analytics, advertising, or any other
          cookie-setting service is introduced in future, this page will be
          updated first with the service&apos;s name, purpose, cookie
          lifetimes, and any consent controls — and the{" "}
          <Link href="/privacy-policy">privacy policy</Link> will be
          revised to match. A practice change will never precede its
          disclosure here.
        </p>

        <h2>Managing cookies yourself</h2>
        <p>
          All major browsers let you view, block, and delete cookies per
          site through their settings. Blocking cookies for this site will
          not break any of its content.
        </p>
      </div>
    </div>
  );
}

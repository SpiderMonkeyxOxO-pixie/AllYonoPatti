import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata, formatDate } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description:
    "The cookies this directory does and does not use: no marketing or tracking cookies, only technical necessities of the hosting platform.",
  path: "/cookie-policy",
});

const LAST_UPDATED = "2026-07-17";

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
          This website does not set marketing, advertising, or cross-site
          tracking cookies, and it does not currently run a third-party
          analytics service. Reading the directory requires no account and no
          consent banner because there is nothing to consent to.
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
          If analytics or any other cookie-setting service is introduced in
          future, this page will be updated first with the service&apos;s
          name, purpose, cookie lifetimes, and any consent controls — and
          the <Link href="/privacy-policy">privacy policy</Link> will be
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

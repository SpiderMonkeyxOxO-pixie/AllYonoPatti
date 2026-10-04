import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Rewards & Incentives — How They Usually Work",
  description:
    "How reward structures on Teen Patti platforms typically work: time-based and activity-based incentives, common restrictions, and why no reward is ever guaranteed.",
  path: "/rewards",
});

export default function RewardsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Rewards & Incentives", href: "/rewards" },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Rewards and incentives, explained neutrally
      </h1>

      <div className="content-prose mt-6">
        <p>
          Nearly every platform in this directory advertises rewards of some
          kind — sign-up credits, daily bonuses, referral incentives, loyalty
          tiers. This page explains how those structures usually work so you
          can read any offer with clear eyes. It describes patterns, not
          promises: <strong>this directory does not issue rewards</strong>,
          and nothing here means any specific platform will give you anything.
        </p>

        <h2>Reward structures vary by platform</h2>
        <p>
          There is no standard reward system across these apps. One platform&apos;s
          &quot;daily bonus&quot; is a small credit for opening the app; another&apos;s is a
          spin with a wide prize range; a third ties everything to deposits.
          Even platforms that look identical can run entirely different
          reward economies behind the same interface. The only reliable
          description of a platform&apos;s rewards is its own current terms.
        </p>

        <h2>Common incentive types</h2>
        <ul>
          <li>
            <strong>Time-based incentives</strong> — daily check-in bonuses,
            hourly chip top-ups, or streak rewards for consecutive days. These
            are retention mechanics: their purpose is to make opening the app
            a habit.
          </li>
          <li>
            <strong>Activity-based incentives</strong> — rewards for hands
            played, deposits made, or friends referred. These scale with
            engagement and spending, which is worth noticing: the reward
            follows the behaviour the platform wants more of.
          </li>
          <li>
            <strong>Sign-up incentives</strong> — credits or chips for new
            accounts, sometimes tied to promo codes. Usually one-time,
            usually conditional, and usually the most heavily advertised
            number a platform publishes.
          </li>
          <li>
            <strong>Loyalty or VIP tiers</strong> — escalating perks for
            sustained play or spending. Tier benefits can be changed or
            withdrawn by the operator at any time.
          </li>
        </ul>

        <h2>Restrictions are the norm, not the exception</h2>
        <p>
          Credits and virtual rewards almost always carry restrictions, and
          the important ones are rarely in the headline. Common patterns:
          bonus credits that can be played but not withdrawn until wagering
          conditions are met; rewards capped at maximum values; expiry windows
          measured in days; and eligibility rules that exclude existing users,
          certain regions, or repeat redemptions. When evaluating any offer,
          the restrictions paragraph is the offer.
        </p>

        <h2>Availability and eligibility change</h2>
        <p>
          Reward programmes are marketing campaigns, and operators adjust them
          continuously — a bonus available today can shrink, gain conditions,
          or disappear tomorrow, without notice and without affecting anything
          you were already credited. Screenshots of reward tables circulating
          on social media describe, at best, a moment in the past.
        </p>

        <h2>Rewards are not earnings</h2>
        <p>
          No reward structure on any platform converts play into dependable
          income, and any presentation suggesting otherwise is marketing that
          has crossed into misdirection. Staked games carry financial risk;
          rewards offset a small part of that risk at most, under conditions
          the operator controls. If your interest in a platform is primarily
          the rewards, that is worth examining — it is exactly the response
          reward systems are engineered to produce.
        </p>

        <h2>Checking a specific platform</h2>
        <p>
          Each game profile in this directory has a rewards section recording
          what, if anything, has been verified for that platform — for most
          listings, reward details are marked as awaiting verification, which
          is stated plainly rather than papered over. For the promo-code side
          of incentives, see the{" "}
          <Link href="/promo-codes">promo-code hub</Link> and our explainer on{" "}
          <Link href="/blog/how-promo-codes-usually-work">
            how promo codes usually work
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

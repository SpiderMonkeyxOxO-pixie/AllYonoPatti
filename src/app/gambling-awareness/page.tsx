import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gambling Awareness",
  description:
    "Understanding gambling risk: age restrictions, how staked games are designed, warning signs of problematic play, and where to find non-judgmental support in India.",
  path: "/gambling-awareness",
});

export default function GamblingAwarenessPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Gambling Awareness", href: "/gambling-awareness" },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Gambling awareness
      </h1>

      <div className="content-prose mt-6">
        <p>
          This directory lists platforms that offer staked games, so it owes
          its readers a clear-eyed page about what staked play involves. What
          follows is written to inform, not to judge — most people who play
          card games do so without harm, and understanding the risks is what
          keeps it that way.
        </p>

        <h2>These products are for adults</h2>
        <p>
          Real-money gaming platforms are adult products. Age limits vary by
          platform and state, with 18 the common minimum and some contexts
          requiring 21. Age gates exist because the risks of gambling —
          financial and psychological — land hardest on developing
          decision-making. If you are underage, no content on this site is an
          invitation; the games will still exist later.
        </p>

        <h2>How staked games are built</h2>
        <p>
          It helps to understand that games of chance are products designed by
          teams whose success is measured in engagement and revenue.
          Near-miss outcomes, celebration animations, daily streaks, and
          escalating reward tiers are not accidents — they are retention
          machinery, and they work on everyone, not only on people with a
          problem. Playing with that knowledge is different from playing
          without it. Two structural truths follow: the odds favour the
          house over time, and no pattern of past results changes the next
          round.
        </p>

        <h2>When play stops being recreation</h2>
        <p>Patterns worth taking seriously, in yourself or someone close:</p>
        <ul>
          <li>Losing track of, or control over, time and money spent</li>
          <li>Chasing losses — playing on to win back what a session took</li>
          <li>Play displacing sleep, work, study, or relationships</li>
          <li>Borrowing money to play, or playing with money set aside for essentials</li>
          <li>Hiding play or being defensive when it comes up</li>
          <li>Restlessness or irritability when unable to play</li>
        </ul>
        <p>
          Any one of these occasionally is human; several of them,
          persistently, deserve attention — and attention works best early.
        </p>

        <h2>Protective habits and tools</h2>
        <ul>
          <li>Set spending and time limits before playing, and keep them mechanical</li>
          <li>Never chase losses; treat lost money as the cost of the session</li>
          <li>Use platform tools where offered: deposit limits, cooling-off periods, self-exclusion</li>
          <li>Add friction outside the app: payment limits, screen-time controls, uninstalling for a while</li>
          <li>Keep play social where possible — isolation and problem play reinforce each other</li>
        </ul>

        <h2>Finding support</h2>
        <p>
          If gambling is causing harm, talking to someone is the step that
          changes trajectories: a doctor, a counsellor, or a mental-health
          helpline. In India, public mental-health services and helplines
          such as those run by government and institutional providers (for
          example Tele-MANAS and iCall) offer free, confidential support in
          multiple languages, and can direct you to specialised help for
          gambling-related harm. Support also exists for families — you do
          not need to be the person playing to ask for guidance.
        </p>
        <p>
          Our <Link href="/responsible-gaming">responsible gaming</Link> page
          covers the practical limit-setting side in more depth, and{" "}
          <Link href="/blog/responsible-teen-patti-gaming">
            this article
          </Link>{" "}
          applies it specifically to Teen Patti.
        </p>
      </div>
    </div>
  );
}

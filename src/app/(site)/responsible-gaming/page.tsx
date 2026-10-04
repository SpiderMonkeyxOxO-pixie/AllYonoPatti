import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Responsible Gaming",
  description:
    "Practical responsible gaming resources: setting limits, self-exclusion, recognising when play stops being voluntary, and where to seek support.",
  path: "/responsible-gaming",
});

export default function ResponsibleGamingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Responsible Gaming", href: "/responsible-gaming" },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Responsible gaming
      </h1>

      <div className="content-prose mt-6">
        <p>
          Responsible gaming is not a warning label — it is a set of habits
          that keep play something you choose rather than something that
          happens to you. This page collects the practical side: limits,
          tools, and support routes. It applies to every platform in this
          directory and to card games generally.
        </p>

        <h2>Limits work when set in advance</h2>
        <p>
          The single most effective practice is deciding three numbers before
          any session: how much money you can lose without consequence, how
          long you will play, and when you will stop regardless of results.
          Decisions made during play are made under the influence of the
          session — wins create invincibility, losses create urgency, and
          both argue for continuing. A limit set beforehand carries no such
          bias, which is exactly why it works.
        </p>

        <h2>The one rule above others</h2>
        <p>
          Never chase losses. Money lost in a session is the cost of that
          session, not a debt the next session can repay. Chasing is the
          mechanism by which affordable losses become unaffordable ones, and
          it is the most consistent early marker of play becoming a problem.
        </p>

        <h2>Tools worth using</h2>
        <ul>
          <li>
            <strong>Platform tools</strong> — some platforms offer deposit
            limits, session reminders, cooling-off periods, and
            self-exclusion. Where offered, use them; where absent, weigh the
            absence.
          </li>
          <li>
            <strong>Self-exclusion</strong> — a formal request that a
            platform close or freeze your access for a set period. If play
            has repeatedly escaped your limits, this is the strongest tool a
            platform can offer, and asking for it is a practical act, not an
            admission of failure.
          </li>
          <li>
            <strong>Money-side friction</strong> — UPI and bank spending
            limits, separate accounts for entertainment money, no saved
            payment methods in gaming apps.
          </li>
          <li>
            <strong>Device-side friction</strong> — screen-time limits on
            specific apps, notification switches, or uninstalling for a
            period.
          </li>
        </ul>

        <h2>Checking in with yourself</h2>
        <p>
          Three questions, asked honestly, cover most of the ground: Is the
          amount I spend on play still trivial to my finances? Do I stop when
          I planned to? Would I be comfortable if the people close to me saw
          my play history? A &quot;no&quot; is not a crisis — it is a signal
          to adjust while adjusting is easy. The warning signs of deeper
          trouble are listed on our{" "}
          <Link href="/gambling-awareness">gambling awareness</Link> page.
        </p>

        <h2>Support</h2>
        <p>
          If limits keep failing or play is causing harm, bring another
          person into the picture: a doctor, a counsellor, or a confidential
          helpline such as India&apos;s public mental-health services
          (Tele-MANAS among them). Earlier conversations are shorter ones.
          Family members seeking guidance about someone else&apos;s play are
          equally welcome to use these routes.
        </p>

        <p>
          This page exists to support readers, not to promote play; nothing
          on it links to any platform. Under-18s should not be using
          real-money gaming products at all.
        </p>
      </div>
    </div>
  );
}

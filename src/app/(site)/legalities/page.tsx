import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Legalities of Online Gaming in India — An Overview",
  description:
    "A high-level educational overview of how online real-money gaming is regulated in India, why the position varies by state, and how to check the rules where you live.",
  path: "/legalities",
});

export default function LegalitiesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Legalities", href: "/legalities" },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        The legal landscape, at a high level
      </h1>

      <div className="content-prose mt-6">
        <p>
          <strong>
            This page is educational background, not legal advice.
          </strong>{" "}
          It describes the general shape of how online gaming is regulated in
          India without reaching conclusions about any specific platform,
          game, or state. Laws in this area change frequently; always check
          the current rules where you live.
        </p>

        <h2>Why there is no single answer</h2>
        <p>
          In India, betting and gambling are primarily matters for individual
          states, which is why the same app can be accessible in one state and
          restricted in a neighbouring one. On top of state rules, central
          legislation has increasingly addressed online real-money gaming
          specifically — including recent central law aimed at online money
          games — and tax law treats winnings from online games under its own
          provisions. The result is a layered, shifting picture rather than a
          single national rule.
        </p>

        <h2>The skill-versus-chance distinction</h2>
        <p>
          Much of Indian gaming law history turns on whether a game is
          predominantly one of skill or of chance, because several legal
          frameworks treat the two differently. Courts have examined games
          like rummy and certain poker formats through this lens over the
          decades. How any particular Teen Patti format is classified can
          differ by state and by the specific way a platform implements the
          game — this directory takes no position on the classification of
          any listed platform&apos;s games.
        </p>

        <h2>What this means practically</h2>
        <ul>
          <li>
            The legality of using a real-money gaming app depends on your
            state, the game format, and current law — all three can change.
          </li>
          <li>
            A platform being downloadable in your state is not evidence that
            using it is permitted there.
          </li>
          <li>
            Age restrictions apply independently of everything above; these
            products are for adults only.
          </li>
          <li>
            Winnings from online games have specific tax treatment; that is a
            question for current tax rules and, where sums matter, a
            professional.
          </li>
        </ul>

        <h2>How to check your position</h2>
        <p>
          Look for current, primary sources: your state government&apos;s
          publications, central ministry announcements on online gaming, and
          reporting from established news organisations — dated within the
          last year, because older material in this area misleads. Platform
          marketing pages are not a source for whether that platform is legal
          for you to use.
        </p>

        <p>
          For the related questions of platform safety and responsible play,
          see{" "}
          <Link href="/guides/how-to-review-a-teen-patti-platform-safely">
            how to review a platform safely
          </Link>{" "}
          and our <Link href="/responsible-gaming">responsible gaming</Link>{" "}
          resources.
        </p>
      </div>
    </div>
  );
}

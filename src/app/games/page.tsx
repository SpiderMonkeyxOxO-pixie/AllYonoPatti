import Link from "next/link";
import { GamesExplorer } from "@/components/games/GamesExplorer";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  gameCategories,
  games,
  newestPinnedSlug,
  teenPattiRelevantGames,
} from "@/data/games";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: `Teen Patti Apps & Platforms — ${teenPattiRelevantGames.length} Documented, ${games.length} Tracked`,
  description: `Which apps genuinely document a Teen Patti table or mode, versus which are tracked here as part of the wider card/casual-app ecosystem. Search and filter by category and Teen Patti relevance, and open each entry's profile and promo-code page.`,
  path: "/games",
});

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Teen Patti apps and card/casual-app ecosystem directory",
  numberOfItems: games.length,
  itemListElement: games.map((g, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: g.name,
    url: absoluteUrl(`/games/${g.slug}`),
  })),
};

export default function GamesPage() {
  const explorerGames = games.map((g) => ({
    name: g.name,
    slug: g.slug,
    logo: g.logo,
    category: g.category,
    shortDescription: g.shortDescription,
    aliases: g.aliases ?? [],
    firstLetter: /^[0-9]/.test(g.name) ? "#" : g.name[0].toUpperCase(),
    downloadUrl: g.downloadUrl,
    teenPattiRelevance: g.teenPattiRelevance,
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd data={itemListSchema} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "All Games", href: "/games" },
        ]}
      />
      <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900">
        Teen Patti apps and platforms
      </h1>
      <p className="mt-3 max-w-3xl text-slate-600">
        {teenPattiRelevantGames.length} of the {games.length} platforms
        tracked here have their own description explicitly documenting a
        Teen Patti table or mode — those are marked{" "}
        <strong>Teen Patti platform</strong> or{" "}
        <strong>Teen Patti mode reported</strong> below. The rest are rummy,
        slots, spin, bingo, and multi-game apps in the same ecosystem that
        this directory tracks for context but does not claim as Teen Patti
        offerings. Use the Teen Patti relevance filter to see only the
        documented set, or read{" "}
        <Link href="/guides" className="text-brand-700 underline">
          how Teen Patti itself works
        </Link>{" "}
        first if you are new to the game. Each entry links to a detailed
        profile and a promo-code page. Listing here is informational and is
        not a recommendation; details marked as awaiting verification have
        not been independently confirmed.
      </p>
      <div className="mt-7">
        <GamesExplorer
          games={explorerGames}
          categories={gameCategories}
          newestSlug={newestPinnedSlug}
        />
      </div>
    </div>
  );
}

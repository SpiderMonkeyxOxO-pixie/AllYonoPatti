import { GamesExplorer } from "@/components/games/GamesExplorer";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { gameCategories, games } from "@/data/games";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "All Teen Patti Games — Directory of 53 Platforms",
  description:
    "A teen patti game directory covering 53 platforms. Search and filter by category, compare features, and open each game's profile and promo-code page.",
  path: "/games",
});

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Teen Patti game directory",
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
        All Teen Patti games in this directory
      </h1>
      <p className="mt-3 max-w-3xl text-slate-600">
        This teen patti online game directory lists {games.length} platforms —
        from rummy-first apps to slots, spin, and bingo hybrids that carry 3
        patti tables in their lobbies. Each entry links to a detailed profile
        and a promo-code page. Listing here is informational and is not a
        recommendation; details marked as awaiting verification have not been
        independently confirmed.
      </p>
      <div className="mt-7">
        <GamesExplorer games={explorerGames} categories={gameCategories} />
      </div>
    </div>
  );
}

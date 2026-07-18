import type { MetadataRoute } from "next";
import { blogPosts, guideArticles } from "@/data/articles";
import { games } from "@/data/games";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/games",
    "/promo-codes",
    "/rewards",
    "/blog",
    "/guides",
    "/about",
    "/contact",
    "/legalities",
    "/terms-and-conditions",
    "/privacy-policy",
    "/disclaimer",
    "/gambling-awareness",
    "/responsible-gaming",
    "/editorial-policy",
    "/corrections-policy",
    "/affiliate-disclosure",
    "/cookie-policy",
    "/copyright",
  ].map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date("2026-07-17"),
    changeFrequency: "weekly" as const,
  }));

  const gameRoutes = games.flatMap((game) => [
    {
      url: absoluteUrl(`/games/${game.slug}`),
      lastModified: new Date(game.updatedAt),
      changeFrequency: "weekly" as const,
      images: [absoluteUrl(game.logo)],
    },
    {
      url: absoluteUrl(`/promo-codes/${game.slug}`),
      lastModified: new Date(game.updatedAt),
      changeFrequency: "weekly" as const,
    },
  ]);

  const articleRoutes = [
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
    })),
    ...guideArticles.map((guide) => ({
      url: absoluteUrl(`/guides/${guide.slug}`),
      lastModified: new Date(guide.updatedAt),
      changeFrequency: "monthly" as const,
    })),
  ];

  return [...staticRoutes, ...gameRoutes, ...articleRoutes];
}

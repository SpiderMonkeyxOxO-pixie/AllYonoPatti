import { guides as baseGuides } from "./guides";
import { guidesOct2026 } from "./guides-oct2026";
import { posts as basePosts } from "./posts";
import { postsOct2026 } from "./posts-oct2026";
import type { Article } from "./types";

export type { Article, ArticleCategory, ArticleSection } from "./types";

// Every authored article, including scheduled and held ones. Validation runs
// against this full set so scheduled articles can link to each other.
const guides: Article[] = [...baseGuides, ...guidesOct2026];
const posts: Article[] = [...basePosts, ...postsOct2026];

/** Today's date in IST (YYYY-MM-DD), evaluated at build time. */
function todayIST(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
}

/** An article is live once its publishedAt has arrived and it is not on hold. */
function isLive(a: Article): boolean {
  return !a.hold && a.publishedAt <= todayIST();
}

function validateArticles(entries: Article[], label: string): Article[] {
  const errors: string[] = [];
  const slugs = new Set<string>();

  for (const a of entries) {
    if (slugs.has(a.slug)) errors.push(`Duplicate ${label} slug: ${a.slug}`);
    slugs.add(a.slug);
    if (!a.title.trim()) errors.push(`Missing title: ${a.slug}`);
    if (!a.description.trim()) errors.push(`Missing description: ${a.slug}`);
    if (a.sections.length === 0) errors.push(`No sections: ${a.slug}`);
  }

  for (const a of entries) {
    for (const rel of a.relatedSlugs ?? []) {
      if (![...guides, ...posts].some((x) => x.slug === rel)) {
        errors.push(`Invalid related article "${rel}" on ${label}: ${a.slug}`);
      }
    }
  }

  const LINK_PATTERN = /\[([^\]]+)\]\((\/[^)\s]+)\)/g;
  for (const a of entries) {
    const text = a.sections
      .flatMap((s) => [...(s.paragraphs ?? []), ...(s.list ?? [])])
      .join("\n");
    for (const match of text.matchAll(LINK_PATTERN)) {
      const href = match[2];
      const articleMatch = href.match(/^\/(guides|blog)\/([^/]+)$/);
      if (
        articleMatch &&
        ![...guides, ...posts].some((x) => x.slug === articleMatch[2])
      ) {
        errors.push(
          `Broken inline link "${href}" on ${label}: ${a.slug}`,
        );
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(
      `Article validation failed (${label}):\n- ${errors.join("\n- ")}`,
    );
  }
  return entries;
}

export const blogPosts: Article[] = validateArticles(posts, "blog").filter(isLive);
export const guideArticles: Article[] = validateArticles(guides, "guide").filter(isLive);

export function getPostBySlug(slug: string): Article | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getGuideBySlug(slug: string): Article | undefined {
  return guideArticles.find((g) => g.slug === slug);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getPostBySlug(slug) ?? getGuideBySlug(slug);
}

/** Returns the base path ("/blog" or "/guides") an article lives under. */
export function articleBasePath(article: Article): string {
  return blogPosts.some((p) => p.slug === article.slug) ? "/blog" : "/guides";
}

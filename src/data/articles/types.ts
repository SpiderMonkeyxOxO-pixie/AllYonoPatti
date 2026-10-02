export type ArticleTable = {
  headers: string[];
  rows: string[][];
};

export type ArticleSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  table?: ArticleTable;
};

export type ArticleCategory =
  | "Teen Patti Basics"
  | "Rules and Hand Rankings"
  | "Game Comparisons"
  | "Platform Guides"
  | "Safety and Privacy"
  | "Promo-Code Awareness"
  | "Responsible Gaming"
  | "Legal and Industry Updates";

export type ArticleFaqItem = {
  question: string;
  answer: string;
};

export type Article = {
  slug: string;
  title: string;
  /** Optional distinct <title>/meta title. Falls back to `title` (the H1) when unset. */
  seoTitle?: string;
  description: string;
  category: ArticleCategory;
  publishedAt: string;
  updatedAt: string;
  sections: ArticleSection[];
  relatedSlugs?: string[];
  /** Path under /public. Only set when a supplied banner image exists — never invented. */
  featuredImage?: string;
  /** Alt text for the featured image. Omit for a decorative (empty-alt) image. */
  featuredImageAlt?: string;
  /** When true the article stays unpublished regardless of `publishedAt` (e.g. awaiting legal review). */
  hold?: boolean;
  /**
   * Optional FAQ block rendered with FAQPage structured data. Answers must
   * be grounded in what the article already says — never a new claim.
   */
  faq?: ArticleFaqItem[];
};

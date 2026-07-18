export type ArticleSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
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
  description: string;
  category: ArticleCategory;
  publishedAt: string;
  updatedAt: string;
  sections: ArticleSection[];
  relatedSlugs?: string[];
  /** Path under /public. Only set when a supplied banner image exists — never invented. */
  featuredImage?: string;
  /**
   * Optional FAQ block rendered with FAQPage structured data. Answers must
   * be grounded in what the article already says — never a new claim.
   */
  faq?: ArticleFaqItem[];
};

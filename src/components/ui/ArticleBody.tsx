import Link from "next/link";
import type { ReactNode } from "react";
import type { ArticleSection } from "@/data/articles";

type ArticleBodyProps = {
  sections: ArticleSection[];
};

/** Matches the site's `[label](/path)` inline-link convention in article prose. */
const LINK_PATTERN = /\[([^\]]+)\]\((\/[^)\s]+)\)/g;

/**
 * Article copy is authored with plain `[label](/path)` markers for internal
 * links rather than raw JSX, so content stays data (typed, validated at
 * build time) instead of components. This renders those markers as real
 * Next.js links; everything else stays plain text.
 */
function renderWithLinks(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    nodes.push(
      <Link key={`link-${key++}`} href={href}>
        {label}
      </Link>,
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

export function ArticleBody({ sections }: ArticleBodyProps) {
  return (
    <div className="content-prose mt-6">
      {sections.map((section, i) => (
        <section key={section.heading ?? `section-${i}`}>
          {section.heading && <h2>{section.heading}</h2>}
          {section.paragraphs?.map((p) => (
            <p key={p.slice(0, 40)}>{renderWithLinks(p)}</p>
          ))}
          {section.list && (
            <ul>
              {section.list.map((item) => (
                <li key={item.slice(0, 40)}>{renderWithLinks(item)}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}

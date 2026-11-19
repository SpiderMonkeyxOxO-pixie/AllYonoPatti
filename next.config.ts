import type { NextConfig } from "next";

// React's dev-mode tooling (Fast Refresh stack-trace reconstruction) needs
// eval(), which the production CSP correctly blocks. Without this, every
// local dev session shows a permanent (harmless) console error overlay.
// React never uses eval() in production, so prod stays strict.
const scriptSrc =
  process.env.NODE_ENV === "development"
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
    : "script-src 'self' 'unsafe-inline'";

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      scriptSrc,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self'",
      "connect-src 'self'",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: true,
    // The admin panel posts Server Actions from code.allyonopatti.com.
    serverActions: {
      allowedOrigins: [process.env.ADMIN_HOST ?? "code.allyonopatti.com"],
    },
  },
  images: {
    // Next's default (4h) is well inside Lighthouse's "efficient cache
    // lifetimes" threshold for optimized image responses — these are
    // content-hashed by query string, so a year-long cache is safe.
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    // Five standalone Teen Patti variant-rules guides were consolidated into
    // anchored subsections of /guides/teen-patti-rules to resolve internal
    // keyword cannibalization (all 5 were competing with the canonical guide
    // for the same "teen patti rules"/"variant rules" query intent).
    return [
      {
        source: "/guides/joker-teen-patti-rules",
        destination: "/guides/teen-patti-rules#joker",
        permanent: true,
      },
      {
        source: "/guides/muflis-teen-patti-rules",
        destination: "/guides/teen-patti-rules#muflis",
        permanent: true,
      },
      {
        source: "/guides/ak47-teen-patti-rules",
        destination: "/guides/teen-patti-rules#ak47",
        permanent: true,
      },
      {
        source: "/guides/999-paplu-teen-patti-rules",
        destination: "/guides/teen-patti-rules#999-paplu",
        permanent: true,
      },
      {
        source: "/guides/lowest-card-joker-teen-patti-rules",
        destination: "/guides/teen-patti-rules#lowest-card-joker",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      // Hashed build output never changes under a given filename, so it's
      // safe (and expected) to cache it for a year. Without this, Lighthouse
      // flags every JS/CSS chunk as a short-lived resource that gets
      // needlessly re-downloaded on repeat visits.
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;

import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PromoAlert } from "@/components/promo/PromoAlert";
import { TelegramWidget } from "@/components/promo/TelegramWidget";
import { JsonLd } from "@/components/seo/JsonLd";
import { freshPromoCount } from "@/data/games";
import { absoluteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Independent Teen Patti Game Directory`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "An independent, informational directory of Teen Patti games and related platforms for Indian players, with promo-code information, safety guidance, and educational guides.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: absoluteUrl(siteConfig.logo),
  description:
    "Independent informational directory of Teen Patti games and related platforms. Not a gambling operator.",
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <JsonLd data={organizationSchema} />
        <JsonLd data={webSiteSchema} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1 pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <BottomNav hasFreshPromo={freshPromoCount > 0} />
        <PromoAlert count={freshPromoCount} />
        <TelegramWidget />
      </body>
    </html>
  );
}

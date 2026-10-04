import Script from "next/script";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PromoAlert } from "@/components/promo/PromoAlert";
import { TelegramWidget } from "@/components/promo/TelegramWidget";
import { siteConfig } from "@/lib/site";

/**
 * Public-site frame (header, footer, nav, promo pop-up). Lives outside the
 * root layout so the admin area on code.allyonopatti.com can render without it.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      {siteConfig.gaMeasurementId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${siteConfig.gaMeasurementId}');
            `}
          </Script>
        </>
      )}
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
      <BottomNav />
      <PromoAlert />
      <TelegramWidget />
    </>
  );
}

import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { siteConfig } from "@/lib/site";
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

// The public-site frame (header, footer, analytics, structured data) lives in
// app/(site)/layout.tsx so the admin area can render without any of it.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body
        className="flex min-h-screen flex-col font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

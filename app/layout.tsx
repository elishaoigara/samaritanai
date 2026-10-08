import type { Metadata, Viewport } from "next";
import { brandName, siteUrl } from "@/lib/site";
import { Navigation, Footer } from "@/components/navigation";
import "./globals.css";
import "./theme.css";
import "./business.css";
import "./brand.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brandName} — Practical technology for your business`,
    template: `%s | ${brandName}`,
  },
  description:
    "AI, websites, online stores, POS, CRM, payments and business automation for Kenya and East Africa. Practical software built around your business.",
  icons: {
    icon: { url: "/icon.svg?v=orbit-1", type: "image/svg+xml" },
    apple: { url: "/apple-icon", type: "image/png", sizes: "180x180" },
  },
  openGraph: { type: "website", siteName: brandName, locale: "en_KE" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#2452bd" };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

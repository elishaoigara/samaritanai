import type { Metadata, Viewport } from "next";
import { Navigation, Footer } from "@/components/navigation";
import "./globals.css";
import "./theme.css";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Samaritan AI — Practical AI for East African businesses",
    template: "%s | Samaritan AI",
  },
  description:
    "AI assistants, business automation and thoughtful software for Kenya and East Africa. English and Swahili. WhatsApp and M-Pesa. Built around your business.",
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
  openGraph: { type: "website", siteName: "Samaritan AI", locale: "en_KE" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#536b7a" };
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

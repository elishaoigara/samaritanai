import type { Metadata } from "next";

export const brandName = "Samaritan AI & Software";
// Planned domain. Activate only after purchase and Vercel DNS/HTTPS verification.
export const plannedSiteUrl = "https://samaritandigital.com";

// Keep the current deployment usable while the custom domain is being purchased.
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const siteUrl = new URL(
  configuredUrl ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
).origin;

export function pageIdentity(path: string): Metadata {
  const url = new URL(path, siteUrl).toString();
  return {
    alternates: { canonical: url },
    openGraph: {
      url,
      siteName: brandName,
      type: "website",
      locale: "en_KE",
    },
  };
}

import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : null);
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    ...(url ? { sitemap: `${url.replace(/\/$/, "")}/sitemap.xml` } : {}),
  };
}

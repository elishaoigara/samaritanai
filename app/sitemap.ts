import type { MetadataRoute } from "next";
import { services } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000")
  ).replace(/\/$/, "");
  return [
    "",
    "/solutions",
    "/industries",
    "/products",
    "/pricing",
    "/about",
    "/contact",
    "/demo",
    "/use-cases",
    "/privacy",
    "/terms",
    ...services.map((s) => `/solutions/${s.slug}`),
  ].map((path) => ({
    url: base + path,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}

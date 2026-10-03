import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { services } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/solutions",
    "/solutions/marketing-growth",
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
    url: new URL(path || "/", siteUrl).toString(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}

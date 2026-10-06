import type { MetadataRoute } from "next";
import { properties } from "@/lib/properties";
const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/listings", "/contact"].map((p) => ({ url: `${BASE}${p}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: p ? 0.8 : 1 }));
  const props = properties.map((p) => ({ url: `${BASE}/property/${p.slug}`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 }));
  return [...pages, ...props];
}

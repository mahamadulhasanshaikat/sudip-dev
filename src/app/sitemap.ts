// src/app/sitemap.ts
import { MetadataRoute } from "next";

// Cloudflare Pages / Static Export এর জন্য আবশ্যক
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sudipsarker14.github.io",
      lastModified: new Date("2026-10-12"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
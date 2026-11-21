import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteOrigin ? [{ url: siteOrigin.href }] : [];
}

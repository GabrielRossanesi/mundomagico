import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/business";

export default function robots(): MetadataRoute.Robots {
  if (!siteOrigin) return { rules: { userAgent: "*", disallow: "/" } };

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", siteOrigin).href,
  };
}

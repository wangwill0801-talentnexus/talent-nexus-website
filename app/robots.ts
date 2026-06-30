import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://talentnexus.com.tw/sitemap.xml",
    host: "https://talentnexus.com.tw"
  };
}

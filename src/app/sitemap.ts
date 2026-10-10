import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(/\/$/, "");
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";
  return [
    { url: `${origin}${basePath}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${origin}${basePath}/projetos/pet-joyful/`, changeFrequency: "monthly", priority: 0.8 },
  ];
}

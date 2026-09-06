import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://aura-restaurant.com";
  const lastModified = new Date();

  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/menu`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/reservar`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contacto`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
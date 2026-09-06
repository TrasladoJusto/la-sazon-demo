import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://aura-restaurant.com";
  const lastModified = new Date();

  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/menu`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/chef`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/experiencia`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/galeria`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/eventos`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/reservar`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contacto`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
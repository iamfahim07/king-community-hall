import type { MetadataRoute } from 'next';
import { categories, siteInfo } from '@/data/siteData';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteInfo.url, changeFrequency: 'monthly', priority: 1 },
    ...categories.map((category) => ({
      url: `${siteInfo.url}${category.route}`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    { url: `${siteInfo.url}/gallery`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteInfo.url}/contact`, changeFrequency: 'yearly', priority: 0.8 },
  ];
}

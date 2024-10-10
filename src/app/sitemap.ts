import type { MetadataRoute } from 'next';
import config from '@/config';


export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: config.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}

import { MetadataRoute } from 'next';
import { locations } from '@/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrls: MetadataRoute.Sitemap = [
    {
      url: 'https://agraescort.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://agraescort.com/locations',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://agraescort.com/rates',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://agraescort.com/services',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://agraescort.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const locationUrls: MetadataRoute.Sitemap = locations.map(loc => ({
    url: `https://agraescort.com/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...baseUrls, ...locationUrls];
}

// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://leozinwf.space';
  
  return [
    { 
      url: baseUrl, 
      lastModified: new Date(), 
      changeFrequency: 'monthly', 
      priority: 1 
    },
    { 
      url: `${baseUrl}/contact`, 
      lastModified: new Date(), 
      changeFrequency: 'yearly', 
      priority: 0.8 
    },
  ];
}
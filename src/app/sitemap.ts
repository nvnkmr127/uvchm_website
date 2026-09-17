import type { MetadataRoute } from 'next';
import { PROGRAMS } from '@/data/collegeData';
import { getAllLocations } from '@/lib/locations';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.uvchm.com';

  const staticRoutes = [
    '',
    '/about',
    '/campuses',
    '/contact',
    '/courses',
    '/facilities',
    '/facilities/gallery',
    '/faculty',
    '/location',
    '/placements',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const courseRoutes = PROGRAMS.map((program) => ({
    url: `${baseUrl}/courses/${program.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const locationRoutes = getAllLocations().map((loc) => ({
    url: `${baseUrl}/location/${loc.slug}`,
    lastModified: loc.date ? new Date(loc.date) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...courseRoutes, ...locationRoutes];
}

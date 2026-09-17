import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.uvchm.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin-enquiries', '/api/enquiries'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

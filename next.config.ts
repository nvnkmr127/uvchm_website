import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/admin-enquiries/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive, nosnippet',
          },
        ],
      },
      {
        source: '/api/enquiries/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive, nosnippet',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      // Map legacy Yoast/RankMath WordPress sitemap URL to Next.js App Router sitemap
      {
        source: '/sitemap_index.xml',
        destination: '/sitemap.xml',
      },
    ];
  },
  async redirects() {
    return [
      // Old WordPress course URLs -> Next.js dynamic course pages
      {
        source: '/craft-course-in-food-production',
        destination: '/courses/craft-course-food-production',
        permanent: true,
      },
      {
        source: '/craft-course-in-food-production/',
        destination: '/courses/craft-course-food-production',
        permanent: true,
      },
      {
        source: '/pg-diploma-in-hotel-management',
        destination: '/courses/pg-diploma-hotel-mgmt',
        permanent: true,
      },
      {
        source: '/pg-diploma-in-hotel-management/',
        destination: '/courses/pg-diploma-hotel-mgmt',
        permanent: true,
      },
      {
        source: '/diploma-course-in-hotel-management',
        destination: '/courses/diploma-hotel-mgmt',
        permanent: true,
      },
      {
        source: '/diploma-course-in-hotel-management/',
        destination: '/courses/diploma-hotel-mgmt',
        permanent: true,
      },

      // Malformed location URLs (crawler concatenation / old broken backlinks)
      {
        source: '/location/https-www-uv-college-com-hotel-management-college-ysr-kadapa',
        destination: '/location/hotel-management-college-ysr-kadapa',
        permanent: true,
      },
      {
        source: '/location/https-www-uv-college-com-hotel-management-college-ysr-kadapa/',
        destination: '/location/hotel-management-college-ysr-kadapa',
        permanent: true,
      },
      {
        source: '/location/https-www-uv-college-com-hotel-management-college-chittoor',
        destination: '/location/hotel-management-college-chittoor',
        permanent: true,
      },
      {
        source: '/location/https-www-uv-college-com-hotel-management-college-chittoor/',
        destination: '/location/hotel-management-college-chittoor',
        permanent: true,
      },
      {
        source: '/location/hotel-management-courses-karimnagar',
        destination: '/location/hotel-management-college-karimnagar',
        permanent: true,
      },
      {
        source: '/location/hotel-management-courses-karimnagar/',
        destination: '/location/hotel-management-college-karimnagar',
        permanent: true,
      },

      // Generic handler for any malformed prefixed location URLs
      {
        source: '/location/https-www-uv-college-com-:slug*',
        destination: '/location/:slug*',
        permanent: true,
      },
      {
        source: '/location/https-www-:slug*',
        destination: '/location/:slug*',
        permanent: true,
      },

      // Legacy WordPress paths
      {
        source: '/wp-content/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

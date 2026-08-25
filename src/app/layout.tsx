import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';
import Providers from '@/components/Providers';
import WhatsAppChat from '@/components/WhatsAppChat';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'UVCHM | Best Hotel Management College in Nizamabad, Telangana',
  description: 'Official website of UVCHM (UV College of Hotel Management). The biggest hotel management college in Northern Telangana offering BHM, Culinary Arts, Bakery, and Beverage Management with 100% 5-star placement in Taj, Oberoi, Marriott & Hyatt.',
  keywords: ['UVCHM', 'UV College of Hotel Management', 'Hotel Management Degree', 'Culinary Arts College in Nizamabad', 'BHM Admissions Telangana', '5-Star Hotel Placements', 'Best Hotel Management College'],
  metadataBase: new URL('https://www.uvchm.com'),
  openGraph: {
    title: 'UVCHM | Best Hotel Management College in Nizamabad, Telangana',
    description: 'UVCHM offers 100% 5-star placement in top hotels. Enroll now for BHM, Culinary Arts, and Mixology courses in Nizamabad.',
    url: 'https://www.uvchm.com',
    siteName: 'UVCHM',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UVCHM | Best Hotel Management College in Nizamabad, Telangana',
    description: 'UVCHM offers 100% 5-star placement in top hotels. Enroll now for BHM, Culinary Arts, and Mixology courses in Nizamabad.',
  },
  alternates: {
    canonical: 'https://www.uvchm.com',
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
  },
  icons: {
    icon: '/fav.png',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollegeOrUniversity",
      "@id": "https://www.uvchm.com/#college",
      "name": "UVCHM (UV College of Hotel Management)",
      "url": "https://www.uvchm.com",
      "logo": "https://www.uvchm.com/images/uvchm_logo.png",
      "description": "Northern Telangana's biggest hotel management college offering 100% 5-star placements.",
      "telephone": "+91-8463995959",
      "email": "Info@uvchm.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2nd floor, Never Give Up Building, 1, Gangastan",
        "addressLocality": "Nizamabad",
        "addressRegion": "Telangana",
        "postalCode": "503003",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/uv_chm?igsh=MW5rODhmNDQ3cm51ag%3D%3D&utm_source=qr",
        "https://wa.me/918463995959",
        "https://www.facebook.com/UVCHM/",
        "https://www.youtube.com/@uvchm",
        "https://www.linkedin.com/company/uv-college-of-hotel-managements/about/?viewAsMember=true"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.uvchm.com/#localbusiness",
      "name": "UVCHM",
      "url": "https://www.uvchm.com",
      "telephone": "+91-8465995959",
      "email": "Info@uvchm.com",
      "image": "https://www.uvchm.com/images/uvchm_logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2nd floor, Never Give Up Building, 1, Gangastan",
        "addressLocality": "Nizamabad",
        "addressRegion": "Telangana",
        "postalCode": "503003",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 18.6700,
        "longitude": 78.1000
      },
      "priceRange": "$$"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans">
        <Providers>
          {children}
          <WhatsAppChat />
        </Providers>
        <Analytics />
        <GoogleTagManager gtmId="GTM-K6M64ZQS" />
      </body>
    </html>
  );
}

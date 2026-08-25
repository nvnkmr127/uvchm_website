import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'UVCHM | Building Careers Bringing Excellence',
  description: 'Official website of UVCHM. Offering BHM, Culinary Arts, Bakery, and Beverage Management with 100% 5-star placement in Taj, Oberoi, Marriott & Hyatt.',
  keywords: ['UVCHM', 'UVCHM', 'Hotel Management Degree', 'Culinary Arts College', 'BHM Admissions', '5-Star Hotel Placements'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getAllLocations } from '@/lib/locations';
import { MapPin } from 'lucide-react';

export const metadata = {
  title: 'Our Locations | UVCHM',
  description: 'Explore hotel management college locations across Telangana and beyond.',
};

export default function LocationListingPage() {
  const locations = getAllLocations();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Our <span className="text-pink-600">Locations</span>
          </h1>
          <p className="text-slate-600 text-lg font-medium">
            Discover the best hotel management college near you. Find our localized information pages for students across different cities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <Link key={loc.slug} href={`/location/${loc.slug}`} className="group block">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-pink-300 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-pink-600" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-pink-600 transition-colors line-clamp-2">
                    {loc.title}
                  </h2>
                </div>
                <div className="mt-6 text-sm font-bold text-pink-600 flex items-center gap-2">
                  Read More 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}

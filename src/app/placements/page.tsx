import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoogleReviews from '@/components/GoogleReviews';
import { RECRUITERS, COLLEGE_INFO } from '@/data/collegeData';
import { Trophy, Sparkles, Building2, Globe, ShieldCheck, CheckCircle2, ArrowRight, Star, GraduationCap } from 'lucide-react';
import ApplyButton from '@/components/ApplyButton';
import Image from 'next/image';

export default function PlacementsPage() {

  const stats = [
    { title: '100%', label: 'Placement Record' },
    { title: 'Growing', label: 'Alumni Network' },
    { title: '100+', label: '5-Star Recruiting Partners' },
    { title: 'Global', label: 'Placement Network' },
  ];

  const alumni = [
    {
      name: 'Rajesh Varma',
      role: 'Commis Chef',
      hotel: 'Burj Al Arab, Dubai',
      batch: 'Batch of 2025',
    },
    {
      name: 'Pooja Reddy',
      role: 'Guest Relations Executive',
      hotel: 'Taj Lake Palace, Udaipur',
      batch: 'Batch of 2026',
    },
    {
      name: 'Suresh Kumar',
      role: 'Head Mixologist',
      hotel: 'Marriott Resort, Maldives',
      batch: 'Batch of 2025',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-pink-600 selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-[#0D0D0D] text-white overflow-hidden border-b border-[#E80088]/20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#443C87]/30 to-[#0D0D0D] backdrop-blur-3xl" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#E80088]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-sm">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="text-white">Guaranteed 100% Placement Record</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Placements & <span className="bg-gradient-to-r from-[#E80088] via-[#90268B] to-[#E80088] bg-clip-text text-transparent">Global Careers</span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
            UVCHM guarantees 100% placement for eligible students in top luxury 5-star hotel chains in India and foreign employment overseas via UV Consultancy.
          </p>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((s, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                <div className="text-3xl sm:text-4xl font-black text-pink-600 mb-1">{s.title}</div>
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Recruiters Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <div className="text-pink-600 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5">
            <Building2 className="w-4 h-4" />
            <span>Our Recruiting Partners</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900">Top 5-Star Hotel Chains Hiring Our Students</h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            From heritage palaces to international luxury brands, our graduates are recruited directly from campus drives.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {RECRUITERS.map((r, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-pink-500/30 transition-all flex flex-col items-center justify-center text-center space-y-2 group"
            >
              <div className="w-full h-16 flex items-center justify-center mb-2 relative">
                <Image 
                  src={`/logos/${idx + 1}.png`} 
                  alt={r.name} 
                  fill
                  className="object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-black text-slate-900 text-sm">{r.name}</h3>
                <span className="text-[10px] font-bold text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
                  {r.tier}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Overseas Placements via UV Consultancy */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 p-8 sm:p-12 rounded-3xl text-white border border-pink-500/30 shadow-2xl space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-500/20 text-pink-300 text-xs font-bold rounded-full border border-pink-500/30">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>Ministry of External Affairs Approved</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black">Direct International Placements via UV Consultancy</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                UVCHM is backed by UV Consultancy — an officially licensed foreign recruitment agency. We facilitate legal work visas, flights, and direct job contracts in 5-star luxury resorts across Dubai, Abu Dhabi, Singapore, Malaysia, Maldives, and Cruise Liners.
              </p>
              <div className="space-y-2">
                {['Dubai & UAE Luxury Hotels', 'Maldives 5-Star Island Resorts', 'Singapore & Asian Cruise Lines', 'European & Middle East Hospitality Jobs'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
              <h3 className="text-lg font-black text-white">Featured Alumni Success Stories</h3>
              <div className="space-y-3">
                {alumni.map((a, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-950/60 rounded-xl border border-white/10 space-y-1">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-pink-400">{a.name}</span>
                    </div>
                    <div className="text-xs text-white font-medium">{a.role} — {a.hotel}</div>
                    <div className="text-[10px] text-slate-400">{a.batch}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4 space-y-6">
        <h2 className="text-3xl font-black text-slate-900">Ready to Start Your 5-Star Hospitality Career?</h2>
        <p className="text-slate-600 text-sm">Apply today to secure your seat for the upcoming 2026 academic batch with 100% placement assistance.</p>
        <ApplyButton
          text="APPLY FOR ADMISSION"
          className="px-8 py-3.5 bg-pink-600 hover:bg-pink-700 text-white font-black text-xs uppercase tracking-wider rounded-full shadow-lg shadow-pink-600/30 inline-flex items-center gap-2 transition-all hover:scale-105"
        />
      </section>

      <GoogleReviews />

      <Footer />
    </main>
  );
}

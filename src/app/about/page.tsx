import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoogleReviews from '@/components/GoogleReviews';
import { COLLEGE_INFO } from '@/data/collegeData';
import { GraduationCap, Award, ShieldCheck, Building2, Sparkles, CheckCircle2, Globe, Users, ArrowRight, Compass } from 'lucide-react';
import Link from 'next/link';
import YoutubePromo from '@/components/YoutubePromo';
import ApplyButton from '@/components/ApplyButton';

export default function AboutPage() {

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-pink-600 selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-[#0D0D0D] text-white overflow-hidden border-b border-[#E80088]/20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#443C87]/30 to-[#0D0D0D] backdrop-blur-3xl" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#E80088]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-sm">
            <Sparkles className="w-4 h-4 text-[#E80088]" />
            <span className="text-white">Est. {COLLEGE_INFO.established} • Nizamabad&apos;s Premiere Institute</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            About <span className="bg-gradient-to-r from-[#E80088] via-[#90268B] to-[#E80088] bg-clip-text text-transparent">{COLLEGE_INFO.name}</span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
            Pioneering luxury hospitality education in Telangana for over 16 years. Empowering students with 5-star hotel training labs, expert faculty, and guaranteed placement in global hotel chains.
          </p>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {COLLEGE_INFO.stats.map((stat, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:border-pink-500/30 transition-all">
                <div className="text-3xl sm:text-4xl font-black text-pink-600 mb-1">{stat.value}</div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">{stat.label}</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience UVCHM Video */}
      <YoutubePromo />

      {/* Core Mission & Leadership */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-pink-600 text-xs font-black uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Our Legacy & Vision</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Shaping Tomorrow&apos;s Hospitality Leaders & Global Hotel Executives
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Founded in 2010, UVCHM was built with a singular vision: to bridge the gap between academic education and real-world luxury hotel operations.
            </p>
            <div className="space-y-3">
              {[
                'Govt Recognized Professional Programs',
                'State-of-the-Art 5-Star Hotel Training Labs on Campus',
                'Direct Foreign Employment via UV Consultancy (MEA Approved)',
                '100% Guaranteed Paid Internships in Taj, Oberoi, Marriott & Overseas',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-800 text-sm font-bold">
                  <CheckCircle2 className="w-5 h-5 text-pink-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <ApplyButton />
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <img
                src="https://cdn.uvchm.com/images/frontoffice_dept.png"
                alt="UVCHM Campus Training"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <div className="text-white space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-pink-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Government Recognized Institution</span>
                  </div>
                  <h3 className="text-xl font-bold">Nizamabad&apos;s Premier Hospitality Hub</h3>
                  <p className="text-xs text-slate-300">Empowering youth with job-ready professional culinary, mixology & hotel admin skills.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Backed by UV Consultancy Banner */}
        <div className="p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 rounded-3xl text-white border border-pink-500/20 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-pink-600 flex items-center justify-center font-black text-xl shadow-lg shadow-pink-600/30">
              UV
            </div>
            <div>
              <span className="text-xs font-black text-pink-400 uppercase tracking-widest">Global Career Placement Partner</span>
              <h3 className="text-2xl font-black">Backed by UV Consultancy</h3>
            </div>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
            UVCHM students enjoy exclusive placement access through UV Consultancy — an official Foreign Employment Agency authorized by the Ministry of External Affairs, Govt. of India. Our students secure high-paying positions in luxury resorts across Dubai, Singapore, Maldives, Qatar, and Cruise Liners.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/placements"
              className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs uppercase tracking-wider rounded-full flex items-center gap-2 transition-all"
            >
              <span>Explore Placements</span>
              <ArrowRight className="w-4 h-4 text-pink-600" />
            </Link>
          </div>
        </div>
      </section>

      <GoogleReviews />

      <Footer />
    </main>
  );
}

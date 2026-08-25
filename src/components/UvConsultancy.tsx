'use client';

import React from 'react';
import { Globe, Plane, ShieldCheck, Sparkles, Star, Award, Building, ArrowRight, CheckCircle2, Building2, Briefcase, MapPin, Compass } from 'lucide-react';
import { useApplyModal } from '@/context/ApplyModalContext';

export default function UvConsultancy() {
  const { openModal } = useApplyModal();
  return (
    <section className="py-16 bg-white relative overflow-hidden border-b border-slate-200">
      
      {/* Background Soft Ambient Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-pink-50/50 via-purple-50/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Creative Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-300 text-pink-700 text-xs font-black uppercase tracking-wider shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-pink-600" />
            <span>MINISTRY OF EXTERNAL AFFAIRS, GOVT OF INDIA APPROVED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Backed by <span className="text-pink-600">UV Consultancy</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Your Gateway to Global Hospitality Careers — Professionally managed foreign employment agency with over 12 years of overseas recruitment leadership.
          </p>
        </div>

        {/* Creative Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Official Story & Overseas Destinations (7 Columns) */}
          <div className="lg:col-span-7 bg-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-pink-500/30 flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-pink-600/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/40 text-pink-300 text-[10px] font-black uppercase rounded-full">
                  12+ YEARS RECRUITMENT EXCELLENCE
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black leading-tight text-white">
                Bridging Talent to Global Hospitality Leaders
              </h3>

              <div className="space-y-3 text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                <p>
                  UVCHM is proudly supported by UV Consultancy, a professionally managed foreign employment agency with over 12 years of experience. Recognized by the Ministry of External Affairs, Government of India, UV Consultancy is one of the most reputed and reliable overseas recruitment agencies in the country.
                </p>
                <p>
                  We specialize in bridging the gap between talented Indian professionals and manpower-starved international hospitality employers. With deep expertise in the hotel industry and a personalized recruitment process, we ensure that every candidate is matched with the right opportunity abroad.
                </p>
                <p>
                  Our experienced team uses the latest technology and industry insights to provide job seekers with the best possible career options while supporting global clients with skilled, qualified, and job-ready talent.
                </p>
              </div>
            </div>

            {/* Destination Badges */}
            <div className="relative z-10 pt-4 border-t border-white/10 space-y-2">
              <div className="text-[10px] font-black uppercase tracking-widest text-pink-400 flex items-center gap-1">
                <Compass className="w-3.5 h-3.5" /> ACTIVE OVERSEAS DESTINATIONS
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  '🇦🇪 Dubai, UAE',
                  '🇸🇬 Singapore',
                  '🇲🇻 Maldives',
                  '🇪🇺 Europe & Gulf',
                  '🇮🇳 5-Star India Metros',
                ].map((dest, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 bg-slate-900 border border-white/15 rounded-xl text-xs font-black text-slate-200"
                  >
                    {dest}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="relative z-10 pt-2">
              <button
                onClick={() => openModal()}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#E80088] via-[#90268B] to-[#443C87] text-white font-black text-xs uppercase tracking-wider rounded-full shadow-lg shadow-[#E80088]/35 flex items-center justify-center gap-2 hover:scale-105 transition-all"
              >
                <span>EXPLORE OVERSEAS CAREERS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 3 Creative Visual Feature Cards (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* Card 1 */}
            <div className="flex-1 bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-950">Ministry of External Affairs Approved</h4>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  Reputed, licensed foreign employment agency with trusted Govt accreditation.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex-1 bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-950">Personalized Matching Process</h4>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  Custom matching candidates to manpower-starved international 5-star hotel chains.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex-1 bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <Plane className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-950">Job-Ready Global Talent</h4>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  Latest technology & industry insights ensuring verified international job offers.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

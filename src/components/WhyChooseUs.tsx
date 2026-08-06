'use client';

import React from 'react';
import { Award, Briefcase, Building2, Globe, ShieldCheck, Sparkles, Star, Users, ArrowRight } from 'lucide-react';

export default function WhyChooseUs({ onOpenApply }: { onOpenApply: () => void }) {
  const pillars = [
    {
      icon: <Award className="w-6 h-6 text-pink-600" />,
      title: '100% Guaranteed Placements',
      description: 'On-campus recruitment drives with Taj, Oberoi, Marriott, Hyatt, ITC, and luxury international resort chains.',
      badge: '100% SUCCESS TRACK',
    },
    {
      icon: <Briefcase className="w-6 h-6 text-purple-600" />,
      title: '6-Month Paid Internships',
      description: 'Gain real-world paid internship exposure in Dubai, Singapore, Maldives, and India’s premier 5-star hotels.',
      badge: 'PAID STIPEND',
    },
    {
      icon: <Building2 className="w-6 h-6 text-orange-600" />,
      title: '16+ Practical Training Labs',
      description: 'State-of-the-art commercial quantity kitchens, Opera PMS front office terminals, model bar, and guest suite lab.',
      badge: 'MODERN INFRASTRUCTURE',
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      title: 'Expert Faculty Leaders',
      description: 'Learn directly from master chefs and former 5-star hotel general managers with 20+ years of luxury experience.',
      badge: 'INDUSTRY VETERANS',
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-600" />,
      title: '5,000+ Alumni Network',
      description: 'Join a powerful global alumni network working across luxury hotels, airlines, cruise lines, and fine dining.',
      badge: 'GLOBAL REACH',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-pink-600" />,
      title: '16+ Years of Excellence',
      description: "Nizamabad's #1 hotel management college with AICTE approved curriculum and personality grooming.",
      badge: "NIZAMABAD'S #1",
    },
  ];

  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden border-t border-b border-slate-200">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 border border-pink-300 text-pink-700 text-xs font-black uppercase tracking-wider shadow-xs">
            <Star className="w-3.5 h-3.5 fill-current text-pink-600" />
            <span>EXCELLENCE IN HOSPITALITY EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Why Choose <span className="text-pink-600">UV College of Hotel Management?</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Discover why thousands of students trust UV College to launch lucrative global careers in 5-star hotel administration and culinary arts.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 space-y-4 hover:-translate-y-1.5 group relative"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-[10px] font-black uppercase rounded-full tracking-wider">
                  {pillar.badge}
                </span>
              </div>

              <h3 className="text-lg font-black text-slate-950 group-hover:text-pink-600 transition-colors leading-snug">
                {pillar.title}
              </h3>

              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-black">Ready to Start Your Hospitality Journey?</h3>
            <p className="text-pink-100 text-xs sm:text-sm">Apply today to secure your seat for the 2026-27 Academic Session.</p>
          </div>

          <button
            onClick={onOpenApply}
            className="px-8 py-3.5 bg-white text-pink-600 hover:bg-pink-50 font-black text-xs uppercase tracking-wider rounded-full shadow-lg flex items-center gap-2 shrink-0 hover:scale-105 transition-all"
          >
            <span>APPLY FOR ADMISSION NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

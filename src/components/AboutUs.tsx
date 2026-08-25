'use client';

import React from 'react';
import { Award, Globe, Heart, ShieldCheck, Sparkles, Star, Users, ArrowRight } from 'lucide-react';

export default function AboutUs({ onOpenApply }: { onOpenApply: () => void }) {
  return (
    <section id="about" className="py-16 bg-white relative overflow-hidden border-b border-slate-200">
      
      {/* Ambient Soft Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Campus & Student Leadership Imagery (5 Columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Campus Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-200 bg-slate-900 group">
                <img
                  src="/college.png"
                  alt="UVCHM 5-Star Campus"
                  className="w-full h-auto max-h-[600px] object-contain group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Floating Women Scholarship Highlight Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-[#E80088] to-[#90268B] text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/20">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0">
                    <Heart className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider">Women Empowerment Scholarship</div>
                    <div className="text-sm font-extrabold text-white">Exclusive 30% Fee Discount for Women</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Official About Us Text (7 Columns) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-300 text-pink-700 text-xs font-black uppercase tracking-wider shadow-xs">
              <Star className="w-3.5 h-3.5 fill-current text-[#E80088]" />
              <span>ABOUT UV COLLEGE OF HOTEL MANAGEMENT</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]">
              More Than Just a College — <br />
              <span className="text-[#E80088]">A Launchpad for Global Careers</span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
              UVCHM (UVCHM) is more than just a college — it’s a launchpad for passionate individuals looking to build global careers in the dynamic hospitality industry. With a mission to empower students with world-class education, practical skills, and international exposure, UVCHM has become a trusted name in hotel management education.
            </p>

            {/* Paragraph 2 */}
            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
              Our state-of-the-art 5-star campus offers the perfect environment for hands-on training, soft skill development, and digital learning. Whether you’re a fresher or looking to upskill, we offer a wide range of programs including Diploma, Craft, Post Graduate, and specialized courses tailored to industry needs.
            </p>

            {/* Paragraph 3 */}
            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
              With 100% job placements in prestigious hotel chains such as Marriott, Hilton, Taj, and more, our students are now working across 10+ countries worldwide. We are proud to offer an exclusive 30% fee discount for women, encouraging more female professionals to step into hospitality leadership roles.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
                <div className="text-lg font-black text-[#E80088]">100%</div>
                <div className="text-[10px] font-bold text-slate-700 uppercase">Job Placements</div>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
                <div className="text-lg font-black text-[#E80088]">10+</div>
                <div className="text-[10px] font-bold text-slate-700 uppercase">Countries Worldwide</div>
              </div>
              <div className="p-3 bg-pink-50 border border-pink-200 rounded-xl text-center">
                <div className="text-lg font-black text-[#90268B]">30% OFF</div>
                <div className="text-[10px] font-bold text-pink-800 uppercase">Discount for Women</div>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenApply}
                className="px-8 py-3.5 bg-gradient-to-r from-[#E80088] via-[#90268B] to-[#443C87] text-white font-black text-xs uppercase tracking-wider rounded-full shadow-lg shadow-[#E80088]/30 flex items-center gap-2 hover:scale-105 transition-all"
              >
                <span>APPLY FOR ADMISSION TODAY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

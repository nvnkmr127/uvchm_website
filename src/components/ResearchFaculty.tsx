'use client';

import React, { useState } from 'react';
import { Quote, ArrowLeft, ArrowRight, Star, ShieldCheck, Sparkles, CheckCircle2, Award } from 'lucide-react';
import { FACULTY } from '@/data/collegeData';

export default function ResearchFaculty({ onOpenApply }: { onOpenApply?: () => void }) {
  const [activeFacultyIndex, setActiveFacultyIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = (newIndex: number) => {
    setIsAnimating(true);
    setActiveFacultyIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevFaculty = () => {
    const newIndex = activeFacultyIndex === 0 ? FACULTY.length - 1 : activeFacultyIndex - 1;
    triggerAnimation(newIndex);
  };

  const nextFaculty = () => {
    const newIndex = (activeFacultyIndex + 1) % FACULTY.length;
    triggerAnimation(newIndex);
  };

  const currentFaculty = FACULTY[activeFacultyIndex];
  const secondFaculty = FACULTY[(activeFacultyIndex + 1) % FACULTY.length];
  const thirdFaculty = FACULTY[(activeFacultyIndex + 2) % FACULTY.length];

  return (
    <section id="faculty" className="py-16 bg-white relative overflow-hidden border-b border-slate-200">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[500px] bg-gradient-to-b from-pink-50/50 via-purple-50/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* 1. Principal's Message Section */}
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-300 text-pink-700 text-xs font-black uppercase tracking-wider shadow-xs">
              <Star className="w-3.5 h-3.5 fill-current text-pink-600 animate-pulse" />
              <span>FOUNDER & PRINCIPAL&apos;S VISION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Principal’s <span className="text-pink-600">Inspiring Message</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium">
              Guided by 12+ years of international recruitment expertise to build confidence, competence, and character.
            </p>
          </div>

          <div className="bg-slate-950 rounded-3xl text-white overflow-hidden shadow-2xl border border-pink-500/30 grid grid-cols-1 lg:grid-cols-12 relative">
            
            {/* Left Column: Founder Spotlight */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-r border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 space-y-6">
                <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-4 border-pink-500/40 shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
                    alt="Sujan Kumar Doddi - Founder & Principal"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 bg-pink-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase rounded-full shadow-lg text-center tracking-wider animate-pulse">
                    ★ FOUNDER & PRINCIPAL
                  </div>
                </div>

                <div className="text-center space-y-1">
                  <h3 className="text-2xl font-black text-white">Sujan Kumar Doddi</h3>
                  <div className="text-pink-400 text-xs font-extrabold uppercase tracking-wider">
                    Founder / Principal
                  </div>
                  <div className="text-slate-400 text-xs font-medium pt-1">
                    Founder of UV Consultancy (12+ Yrs Foreign Employment Agency)
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-white/10 space-y-2 text-xs font-bold text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" />
                  <span>12+ Years Foreign Recruitment Leadership</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" />
                  <span>100% Placement Advocate (Taj, Marriott, Hilton)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Message */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between relative bg-[#0d0f1d] space-y-6">
              <Quote className="w-32 h-32 text-pink-500/10 absolute top-6 right-6 pointer-events-none" />

              <div className="relative z-10 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs font-black uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
                  <span>Official Welcome Address</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Crafting a Future Where Talent Meets World-Class Opportunity
                </h3>

                <div className="space-y-4 text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                  <p className="text-pink-300 font-extrabold text-sm">
                    Dear Students, Parents, and Well-wishers,
                  </p>

                  <p className="text-white font-bold text-sm sm:text-base border-l-2 border-pink-500 pl-3 italic">
                    &ldquo;Welcome to UV College of Hotel Management, where dreams take flight and careers travel the globe!&rdquo;
                  </p>

                  <p>
                    As the Founder and Principal of this esteemed institution, and also the Founder of UV Consultancy—a leading foreign employment agency with over 12 years of experience in international recruitment—I have always believed in empowering youth through practical education and global opportunities.
                  </p>

                  <p>
                    At UV College, we don’t just teach hospitality; we shape future-ready professionals. Our curriculum is designed to match international standards, and our commitment to excellence ensures that every student receives industry-relevant training, mentorship, and 100% placement support in prestigious hotels like Marriott, Taj, Hilton, and more.
                  </p>
                </div>
              </div>

              <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-base font-black text-white">Sujan Kumar Doddi</div>
                  <div className="text-pink-400 text-xs font-bold">Founder / Principal • UVCHM & UV Consultancy</div>
                </div>

                {onOpenApply && (
                  <button
                    onClick={onOpenApply}
                    className="px-6 py-2.5 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-black text-xs uppercase tracking-wider rounded-full shadow-lg shadow-pink-600/30 flex items-center justify-center gap-2 hover:scale-105 transition-all"
                  >
                    <span>APPLY NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Animated Stacked Card Faculty Slider */}
        <div className="space-y-8 pt-8 border-t border-slate-200">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Animated Perspective Quote & Author Details */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="text-pink-600">
                <Quote className="w-14 h-14 fill-current opacity-30 rotate-180 transition-all duration-300" />
              </div>

              {/* Animated Quote Body */}
              <blockquote
                className={`text-xl sm:text-2xl font-medium text-slate-900 leading-relaxed tracking-tight transition-all duration-500 transform ${
                  isAnimating ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
                }`}
              >
                &ldquo;{currentFaculty.perspective}&rdquo;
              </blockquote>

              {/* Animated Position & Expertise Card */}
              <div
                className={`p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 transition-all duration-500 transform ${
                  isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}
              >
                <div className="flex items-center gap-2 text-xs font-black uppercase text-pink-600 tracking-wider">
                  <Award className="w-4 h-4 text-pink-600" />
                  <span>Position & Key Expertise</span>
                </div>
                <div className="text-sm font-black text-slate-950">
                  {currentFaculty.position}
                </div>
                <div className="text-xs font-bold text-slate-700 leading-snug">
                  Expertise: <span className="text-pink-700">{currentFaculty.expertise}</span>
                </div>
              </div>

              {/* Animated Author Profile */}
              <div
                className={`flex items-center space-x-4 pt-1 transition-all duration-500 transform ${
                  isAnimating ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
                }`}
              >
                <img
                  src={currentFaculty.image}
                  alt={currentFaculty.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-pink-500 shadow-sm transition-transform hover:scale-110"
                />
                <div>
                  <div className="text-base font-black text-slate-950">
                    — {currentFaculty.name}
                  </div>
                  <div className="text-xs font-bold text-slate-500">
                    {currentFaculty.position} • {currentFaculty.qualifications}
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center space-x-3 pt-2">
                <button
                  onClick={prevFaculty}
                  disabled={isAnimating}
                  className="w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xs disabled:opacity-50"
                  title="Previous Faculty"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextFaculty}
                  disabled={isAnimating}
                  className="w-11 h-11 rounded-full bg-slate-950 hover:bg-pink-600 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-md disabled:opacity-50"
                  title="Next Faculty"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

            </div>

            {/* Right Column: 3D Animated Stacked Card Deck */}
            <div className="lg:col-span-5 relative py-6">
              <div className="relative w-full max-w-md mx-auto aspect-[4/5] max-h-[420px]">
                
                {/* Back Card 3 (Tilted -rotate-6) */}
                <div
                  className="absolute inset-0 rounded-3xl overflow-hidden shadow-lg transform -rotate-6 bg-slate-200 opacity-60 scale-95 border-2 border-white transition-all duration-700 ease-out"
                  style={{
                    transform: isAnimating ? 'rotate(-12deg) scale(0.9)' : 'rotate(-6deg) scale(0.95)',
                  }}
                >
                  <img
                    src={thirdFaculty.image}
                    alt={thirdFaculty.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Middle Card 2 (Tilted rotate-3) */}
                <div
                  className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl transform rotate-3 bg-slate-300 opacity-80 scale-98 border-2 border-white transition-all duration-700 ease-out"
                  style={{
                    transform: isAnimating ? 'rotate(8deg) scale(0.95)' : 'rotate(3deg) scale(0.98)',
                  }}
                >
                  <img
                    src={secondFaculty.image}
                    alt={secondFaculty.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Front Active Card 1 (Smooth Scale & Spring Transition) */}
                <div
                  className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group transition-all duration-500 ease-out"
                  style={{
                    transform: isAnimating ? 'scale(0.96) translateY(-10px)' : 'scale(1) translateY(0px)',
                  }}
                >
                  <img
                    src={currentFaculty.image}
                    alt={currentFaculty.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                  {/* Badge Tag Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200">
                    <div className="text-[10px] font-black uppercase text-pink-600 tracking-wider">
                      {currentFaculty.position}
                    </div>
                    <div className="text-xs font-black text-slate-950 mt-0.5">
                      {currentFaculty.name}
                    </div>
                    <div className="text-[10px] font-bold text-slate-600 truncate">
                      Focus: {currentFaculty.expertise}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

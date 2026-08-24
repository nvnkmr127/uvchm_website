'use client';

import React, { useState } from 'react';
import { Clock, ArrowRight, Sparkles, X, CheckCircle2, Award, GraduationCap, Flame, GlassWater, BedDouble, Hotel } from 'lucide-react';
import { PROGRAMS, Program } from '@/data/collegeData';

interface ProgramCatalogProps {
  onSelectProgramToApply: (programId: string) => void;
}

export default function ProgramCatalog({ onSelectProgramToApply }: ProgramCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  // Category Color Scheme Mapping as requested
  const categoryThemes: Record<string, { bg: string; text: string; badge: string; border: string; categoryName: string }> = {
    'diploma-hotel-mgmt': {
      bg: 'from-pink-600 to-rose-600',
      text: 'text-pink-600',
      badge: 'bg-pink-50 text-pink-700 border-pink-200',
      border: 'border-pink-500',
      categoryName: 'Hotel Management',
    },
    'advance-diploma-hotel-mgmt': {
      bg: 'from-pink-600 to-rose-600',
      text: 'text-pink-600',
      badge: 'bg-pink-50 text-pink-700 border-pink-200',
      border: 'border-pink-500',
      categoryName: 'Hotel Management',
    },
    'pg-diploma-hotel-mgmt': {
      bg: 'from-pink-600 to-rose-600',
      text: 'text-pink-600',
      badge: 'bg-pink-50 text-pink-700 border-pink-200',
      border: 'border-pink-500',
      categoryName: 'Hotel Management',
    },
    'masters-diploma-hotel-mgmt': {
      bg: 'from-pink-600 to-rose-600',
      text: 'text-pink-600',
      badge: 'bg-pink-50 text-pink-700 border-pink-200',
      border: 'border-pink-500',
      categoryName: 'Hotel Management',
    },
    'bartending-mixology': {
      bg: 'from-purple-600 to-pink-600',
      text: 'text-purple-600',
      badge: 'bg-purple-50 text-purple-700 border-purple-200',
      border: 'border-purple-500',
      categoryName: 'Bartending',
    },
    'craft-course-food-production': {
      bg: 'from-orange-500 to-amber-500',
      text: 'text-orange-600',
      badge: 'bg-orange-50 text-orange-800 border-orange-200',
      border: 'border-orange-500',
      categoryName: 'Culinary',
    },
    'craft-course-fb-service': {
      bg: 'from-orange-500 to-amber-500',
      text: 'text-orange-600',
      badge: 'bg-orange-50 text-orange-800 border-orange-200',
      border: 'border-orange-500',
      categoryName: 'Culinary',
    },
    'craft-course-housekeeping': {
      bg: 'from-blue-600 to-indigo-600',
      text: 'text-blue-600',
      badge: 'bg-blue-50 text-blue-800 border-blue-200',
      border: 'border-blue-500',
      categoryName: 'Housekeeping',
    },
  };

  const courseImages: Record<string, string> = {
    'diploma-hotel-mgmt': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    'advance-diploma-hotel-mgmt': 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    'pg-diploma-hotel-mgmt': 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    'masters-diploma-hotel-mgmt': 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    'bartending-mixology': 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80',
    'craft-course-food-production': 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
    'craft-course-fb-service': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    'craft-course-housekeeping': 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
  };

  const filteredPrograms = PROGRAMS.filter((prog) => {
    const theme = categoryThemes[prog.id] || { categoryName: 'Hotel Management' };
    return selectedCategory === 'All' || theme.categoryName === selectedCategory;
  });

  const featuredCourse = filteredPrograms[0] || PROGRAMS[0];
  const remainingCourses = filteredPrograms.slice(1);

  return (
    <section id="academics" className="py-16 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Editorial Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4 border-b border-slate-200">
          <div className="space-y-2 text-left">
            <span className="text-xs font-black uppercase tracking-widest text-pink-600">
              OFFICIAL ACADEMIC ROSTER
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Hospitality Courses <br />
              <span className="text-pink-600">& Specialized Degrees</span>
            </h2>
          </div>

          {/* Horizontal Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { name: 'All', color: 'bg-slate-950 text-white' },
              { name: 'Hotel Management', color: 'bg-pink-50 text-pink-700 border-pink-200' },
              { name: 'Culinary', color: 'bg-orange-50 text-orange-800 border-orange-200' },
              { name: 'Housekeeping', color: 'bg-blue-50 text-blue-800 border-blue-200' },
              { name: 'Bartending', color: 'bg-purple-50 text-purple-700 border-purple-200' },
            ].map((chip) => (
              <button
                key={chip.name}
                onClick={() => setSelectedCategory(chip.name)}
                className={`px-4 py-2 text-xs font-black rounded-full border transition-all ${
                  selectedCategory === chip.name
                    ? 'bg-pink-600 text-white border-pink-600 shadow-md shadow-pink-600/25 scale-105'
                    : `${chip.color} hover:scale-105`
                }`}
              >
                {chip.name}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Featured Premium Full-Width Card */}
        {featuredCourse && (
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
            {/* Left Image Section */}
            <div className="lg:col-span-7 relative min-h-[280px] lg:min-h-full overflow-hidden">
              <img
                src={courseImages[featuredCourse.id] || courseImages['diploma-hotel-mgmt']}
                alt={featuredCourse.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900 hidden lg:block"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent lg:hidden"></div>

              {/* Floating "100% Placement" Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-pink-600 text-white text-[10px] font-black uppercase rounded-full shadow-lg tracking-wider flex items-center gap-1.5 z-20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>100% Guaranteed Placement</span>
              </div>
            </div>

            {/* Right Info Section */}
            <div className="lg:col-span-5 p-6 sm:p-8 text-white flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/40 text-pink-300 text-[10px] font-black uppercase rounded-full">
                    FEATURED PROGRAM • {featuredCourse.duration}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black leading-tight text-white">
                  {featuredCourse.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                  {featuredCourse.description}
                </p>

                <div className="pt-2 space-y-1.5 text-xs font-bold text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-400" />
                    <span>6-Month 5-Star Hotel Internship (Taj, Oberoi, Marriott)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-400" />
                    <span>Government Recognized Certification</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProgramToApply(featuredCourse.id)}
                  className="px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-black text-xs uppercase tracking-wider rounded-full shadow-lg shadow-pink-600/35 flex items-center gap-2 hover:scale-105 transition-all"
                >
                  <span>APPLY NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setActiveModalProgram(featuredCourse)}
                  className="text-xs font-black text-slate-300 hover:text-white underline"
                >
                  Syllabus Details
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. Asymmetrical Masonry Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
          {remainingCourses.map((prog, idx) => {
            const theme = categoryThemes[prog.id] || {
              bg: 'from-pink-600 to-rose-600',
              text: 'text-pink-600',
              badge: 'bg-pink-50 text-pink-700 border-pink-200',
              border: 'border-pink-500',
              categoryName: 'Hotel Management',
            };

            const pattern = [7, 5, 4, 4, 4, 5, 7];
            const span = pattern[idx % pattern.length];
            const colSpan = `md:col-span-${span}`;

            return (
              <div
                key={prog.id}
                className={`${colSpan} relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-slate-200 min-h-[350px] flex flex-col justify-end`}
              >
                {/* Full Image Background */}
                <img
                  src={courseImages[prog.id] || courseImages['diploma-hotel-mgmt']}
                  alt={prog.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                {/* Floating "100% Placement" Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black uppercase rounded-full shadow-md tracking-wider flex items-center gap-1 z-20">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>100% Placement</span>
                </div>

                {/* Duration Badge Top Left */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-black uppercase rounded-full shadow-md tracking-wider flex items-center gap-1 z-20">
                  <Clock className="w-3 h-3 text-pink-400" />
                  <span>{prog.duration}</span>
                </div>

                {/* White Glass Information Panel Overlay */}
                <div className="relative z-10 m-4 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/50 shadow-xl space-y-2.5 transition-all duration-300 transform group-hover:-translate-y-1">
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase border ${theme.badge}`}>
                      {theme.categoryName}
                    </span>
                    <span className="text-[10px] font-extrabold text-slate-500">
                      {prog.duration}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-950 leading-snug group-hover:text-pink-600 transition-colors">
                    {prog.title}
                  </h3>

                  <p className="text-slate-600 text-xs font-medium leading-relaxed line-clamp-2">
                    {prog.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onSelectProgramToApply(prog.id)}
                      className={`px-4 py-2 bg-gradient-to-r ${theme.bg} text-white font-black text-[11px] uppercase tracking-wider rounded-full shadow-md flex items-center gap-1.5 hover:scale-105 transition-all`}
                    >
                      <span>APPLY NOW</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <button
                      onClick={() => setActiveModalProgram(prog)}
                      className="text-[11px] font-bold text-slate-600 hover:text-slate-900"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Modal */}
      {activeModalProgram && (
        <div
          onClick={(e) => e.target === e.currentTarget && setActiveModalProgram(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto"
        >
          <div className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-4 sm:space-y-6 shadow-2xl border border-slate-200 max-h-[90vh] sm:max-h-[85vh] overflow-y-auto my-auto">
            <button
              onClick={() => setActiveModalProgram(null)}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 p-2 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-full transition-transform active:scale-95 z-10"
              aria-label="Close details modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="space-y-2 pr-6 sm:pr-0">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-[10px] sm:text-[11px] font-black uppercase">
                {activeModalProgram.duration} Course
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">{activeModalProgram.title}</h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                {activeModalProgram.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 p-3.5 sm:p-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-bold">Course Duration</div>
                <div className="text-xs sm:text-sm font-black text-slate-900 mt-0.5">{activeModalProgram.duration}</div>
              </div>
              <div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-bold">Job Placement</div>
                <div className="text-xs sm:text-sm font-black text-emerald-700 mt-0.5">100% Guaranteed</div>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                Career Pathways
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {activeModalProgram.careers.map((c, i) => (
                  <span key={i} className="px-2.5 py-1 bg-pink-50 border border-pink-200 text-pink-800 text-[11px] sm:text-xs font-bold rounded-xl">
                    ✓ {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-1 sm:pt-2">
              <button
                onClick={() => {
                  const pId = activeModalProgram.id;
                  setActiveModalProgram(null);
                  onSelectProgramToApply(pId);
                }}
                className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-pink-600/30 text-center active:scale-95 transition-transform"
              >
                APPLY FOR THIS COURSE NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

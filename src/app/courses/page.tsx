'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ApplyModal from '@/components/ApplyModal';
import { PROGRAMS, Program } from '@/data/collegeData';
import { BookOpen, Search, Sparkles, Clock, Award, ArrowRight, CheckCircle2, Filter } from 'lucide-react';
import Link from 'next/link';

export default function CoursesPage() {
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedProgramId, setSelectedProgramId] = useState<string | undefined>(undefined);
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const levels = ['All', 'Diploma', 'Postgraduate', 'Certification'];

  const filteredPrograms = PROGRAMS.filter((program) => {
    const matchesLevel = selectedLevel === 'All' || program.level === selectedLevel;
    const matchesSearch =
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  const handleApplyClick = (programId: string) => {
    setSelectedProgramId(programId);
    setApplyModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-pink-600 selection:text-white">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-[#0D0D0D] text-white overflow-hidden border-b border-[#E80088]/20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#443C87]/30 to-[#0D0D0D] backdrop-blur-3xl" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#E80088]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-sm">
            <Sparkles className="w-4 h-4 text-[#E80088]" />
            <span className="text-white">Govt Recognized & Industry Certified</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Academic <span className="bg-gradient-to-r from-[#E80088] via-[#90268B] to-[#E80088] bg-clip-text text-transparent">Programs & Courses</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
            Explore industry-crafted diplomas, degrees, craft courses, and mixology certifications designed for global 5-star hotel placement.
          </p>

          {/* Search & Filter Control Bar */}
          <div className="max-w-3xl mx-auto pt-6 flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by course title, culinary, mixology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-pink-500 text-sm backdrop-blur-md transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills & Main Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
                selectedLevel === level
                  ? 'bg-pink-600 text-white shadow-md shadow-pink-600/30 scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {level} {level === 'All' ? `(${PROGRAMS.length})` : ''}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 space-y-3">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-700">No courses match your search</h3>
            <p className="text-xs text-slate-500">Try searching for &quot;Hotel&quot;, &quot;Culinary&quot;, or &quot;Mixology&quot;</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-pink-500/30 transition-all flex flex-col justify-between group"
              >
                {/* Header Image / Badge */}
                <div className="relative h-48 bg-slate-900 overflow-hidden">
                  <img
                    src={program.image || '/images/frontoffice_dept.png'}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-pink-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider rounded-full shadow-sm">
                      {program.level}
                    </span>
                    <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-md text-pink-300 text-[10px] font-bold uppercase tracking-wider rounded-full border border-pink-500/30">
                      {program.duration}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-black uppercase tracking-widest text-pink-400">
                      {program.department}
                    </span>
                    <h3 className="text-lg font-black leading-tight line-clamp-1">{program.title}</h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {program.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-extrabold text-slate-800 uppercase tracking-wider block">
                      Career Outcomes:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {program.careers.map((career, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-medium rounded-lg"
                        >
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-4 flex items-center justify-end gap-2 border-t border-slate-100">
                    <Link
                      href={`/courses/${program.id}`}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors"
                    >
                      Details
                    </Link>
                    <button
                      onClick={() => handleApplyClick(program.id)}
                      className="px-4 py-2 bg-[#E80088] hover:bg-[#90268B] text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-[#E80088]/20 hover:scale-105 active:scale-95"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
      <ApplyModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        selectedProgramId={selectedProgramId}
      />
    </main>
  );
}

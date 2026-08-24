'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ApplyModal from '@/components/ApplyModal';
import { PROGRAMS } from '@/data/collegeData';
import { BookOpen, Sparkles, Clock, ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft, Award, GraduationCap, DollarSign, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function SingleCoursePage() {
  const params = useParams();
  const router = useRouter();
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  const courseId = params?.id as string;
  const program = PROGRAMS.find((p) => p.id === courseId);

  if (!program) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
        <Navbar />
        <div className="max-w-xl mx-auto my-auto text-center px-4 py-32 space-y-6">
          <div className="w-16 h-16 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mx-auto text-2xl font-black">
            !
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">Course Not Found</h1>
          <p className="text-slate-600 text-sm">The course program you are looking for does not exist or has been updated.</p>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg shadow-pink-600/30 hover:bg-pink-700 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Courses</span>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-pink-600 selection:text-white">
      <Navbar />

      {/* Course Header Banner */}
      <section className="relative pt-32 pb-20 bg-[#0D0D0D] text-white overflow-hidden border-b border-[#E80088]/20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#443C87]/30 to-[#0D0D0D] opacity-90" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#E80088]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          <Link href="/courses" className="inline-flex items-center gap-2 text-pink-400 text-xs font-extrabold uppercase tracking-wider hover:text-pink-300 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Course Catalog</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 bg-pink-600 text-white text-xs font-black uppercase tracking-wider rounded-full">
              {program.level}
            </span>
            <span className="px-3.5 py-1 bg-white/10 text-pink-300 text-xs font-bold uppercase tracking-wider rounded-full border border-pink-500/30">
              {program.duration}
            </span>
            <span className="px-3.5 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider rounded-full border border-emerald-500/30">
              Govt Recognized
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight max-w-4xl">
            {program.title}
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            {program.description}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setApplyModalOpen(true)}
              className="px-8 py-3.5 bg-gradient-to-r from-[#E80088] via-[#90268B] to-[#443C87] hover:opacity-90 text-white font-black text-xs uppercase tracking-wider rounded-full shadow-lg shadow-[#E80088]/30 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <span>APPLY FOR ADMISSION NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Detailed Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Info Columns (2 Cols) */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Overview */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-pink-600" />
                <span>Program Overview</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                {program.overviewExtended || 'This comprehensive program at UV College of Hotel Management combines intensive theoretical knowledge with over 500 hours of hands-on practical training inside our 5-star standard campus training labs.'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <Clock className="w-5 h-5 text-pink-600" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Duration</div>
                    <div className="text-xs text-slate-500">{program.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <Award className="w-5 h-5 text-pink-600" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Certification</div>
                    <div className="text-xs text-slate-500">Government Recognized</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Section (Conditionally Rendered) */}
            {program.whyChoose && program.whyChoose.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-pink-600" />
                  <span>Why Choose This Course?</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {program.whyChoose.map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col gap-2">
                      <div className="font-bold text-sm text-slate-900">{item.title}</div>
                      <div className="text-xs text-slate-600 leading-relaxed">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Curriculum Highlights */}
            {program.modules && program.modules.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-pink-600" />
                  <span>Key Modules & Practical Training</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {program.modules.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-xl text-xs font-bold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Careers */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-pink-600" />
                <span>Career Scope & Designation</span>
              </h2>
              <p className="text-xs text-slate-600">Graduates from this program step directly into high-growth roles in 5-Star Hotels, Luxury Resorts, International Cruise Liners, and Airlines.</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {program.careers.map((career, idx) => (
                  <span key={idx} className="px-4 py-2 bg-pink-50 border border-pink-200 text-pink-700 font-bold text-xs rounded-xl">
                    ⚡ {career}
                  </span>
                ))}
              </div>
            </div>

            {/* FAQ Section (Conditionally Rendered) */}
            {program.faq && program.faq.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-black text-sm">?</div>
                  <span>Frequently Asked Questions</span>
                </h2>
                <div className="space-y-4">
                  {program.faq.map((faq, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-100 space-y-2">
                      <h4 className="font-bold text-sm text-slate-900">{faq.question}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}


          </div>

          {/* Right Sidebar Card (1 Col) */}
          <div className="space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-3xl border border-pink-500/30 shadow-xl space-y-6 sticky top-28">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-pink-400">Admissions Open 2026-27</span>
                <h3 className="text-2xl font-black">Course Summary</h3>
              </div>

              <div className="space-y-4 border-t border-b border-slate-800 py-4 text-xs font-medium space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Department:</span>
                  <span className="font-bold text-white">{program.department}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Level:</span>
                  <span className="font-bold text-white">{program.level}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Duration:</span>
                  <span className="font-bold text-white">{program.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Placement:</span>
                  <span className="font-bold text-emerald-400">100% Guaranteed</span>
                </div>
              </div>

              <button
                onClick={() => setApplyModalOpen(true)}
                className="w-full py-4 bg-pink-600 hover:bg-pink-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-pink-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>APPLY NOW FOR THIS COURSE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Admission Counseling Fee</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <ApplyModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        selectedProgramId={program.id}
      />
    </main>
  );
}

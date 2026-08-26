import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FACULTY } from '@/data/collegeData';
import { Users, Sparkles, Award, GraduationCap, ArrowRight, Quote } from 'lucide-react';
import ApplyButton from '@/components/ApplyButton';
import Image from 'next/image';

export default function FacultyPage() {

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-pink-600 selection:text-white">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-[#0D0D0D] text-white overflow-hidden border-b border-[#E80088]/20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#443C87]/30 to-[#0D0D0D] backdrop-blur-3xl" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#E80088]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-sm">
            <Users className="w-4 h-4 text-[#E80088]" />
            <span className="text-white">Veteran Hospitality Mentors</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Industry Leaders & <span className="bg-gradient-to-r from-[#E80088] via-[#90268B] to-[#E80088] bg-clip-text text-transparent">Faculty</span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
            Learn directly from former Executive Chefs, General Managers, and Sommelier Directors from Taj, Oberoi, Marriott, and Hyatt.
          </p>
        </div>
      </section>

      {/* Faculty Showcase Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FACULTY.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-pink-500/30 transition-all flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="w-full sm:w-44 h-64 sm:h-full rounded-2xl overflow-hidden bg-slate-900 shrink-0 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              <div className="space-y-4 flex-1">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-pink-600">
                    {member.department}
                  </span>
                  <h3 className="text-xl font-black text-slate-900">{member.name}</h3>
                  <div className="text-xs font-bold text-slate-700">{member.position}</div>
                </div>

                <div className="p-3 bg-pink-50/50 rounded-xl border border-pink-100 space-y-1">
                  <div className="text-[10px] font-extrabold text-pink-700 uppercase tracking-wider">Qualifications & Exp:</div>
                  <div className="text-xs font-medium text-slate-800">{member.qualifications}</div>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Expertise:</div>
                  <div className="text-xs text-slate-600">{member.expertise}</div>
                </div>

                <div className="pt-2 border-t border-slate-100 relative">
                  <Quote className="w-4 h-4 text-pink-400 mb-1" />
                  <p className="text-xs text-slate-500 italic leading-relaxed">
                    &quot;{member.perspective}&quot;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join Campus Session CTA */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4 space-y-6">
        <h2 className="text-3xl font-black text-slate-900">Want to Attend a Free Faculty Demo Class?</h2>
        <p className="text-slate-600 text-sm">Register for a live workshop or campus walkthrough with our department heads.</p>
        <ApplyButton
          text="REGISTER FOR DEMO CLASS"
          className="px-8 py-3.5 bg-pink-600 hover:bg-pink-700 text-white font-black text-xs uppercase tracking-wider rounded-full shadow-lg shadow-pink-600/30 inline-flex items-center gap-2 transition-all hover:scale-105"
        />
      </section>

      <Footer />
    </main>
  );
}

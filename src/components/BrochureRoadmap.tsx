'use client';

import React from 'react';
import { BROCHURE_FACILITIES, COLLEGE_INFO } from '@/data/collegeData';
import { ChevronRight, Building2, ShieldCheck, ArrowRight, Utensils, Hotel, Laptop, Users, Bus, Trophy, HeartHandshake, Award, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApplyModal } from '@/context/ApplyModalContext';

export default function BrochureRoadmap() {
  const { openModal } = useApplyModal();
  const stepsData = [
    {
      step: '01',
      titleLine1: 'Get Admission',
      titleLine2: 'to UVCHM',
      desc: 'Apply, qualify, and complete admission to start your hospitality career.',
      color: '#F43F5E', // Pink
      lightBg: 'bg-rose-50/70',
      borderColor: 'border-rose-500',
      shadowColor: 'shadow-rose-500/20',
      hasArrow: true,
      icon: (
        <svg className="w-10 h-10 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <circle cx="12" cy="11" r="2" />
          <path d="M9 16.5A3.5 3.5 0 0 1 12 14a3.5 3.5 0 0 1 3 2.5" />
          <circle cx="18" cy="18" r="3" fill="#F43F5E" stroke="none" />
          <path d="m16.5 18 1 1 2-2" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      step: '02',
      titleLine1: 'Choose',
      titleLine2: 'Your Course',
      desc: 'Pick a specialization based on your skills and interests.',
      color: '#8B5CF6', // Purple
      lightBg: 'bg-purple-50/70',
      borderColor: 'border-purple-500',
      shadowColor: 'shadow-purple-500/20',
      hasArrow: true,
      icon: (
        <svg className="w-10 h-10 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      step: '03',
      titleLine1: 'Learn & Grow',
      titleLine2: '',
      desc: 'Gain practical skills, industry knowledge, and soft skills for hospitality success.',
      color: '#2563EB', // Blue
      lightBg: 'bg-blue-50/70',
      borderColor: 'border-blue-600',
      shadowColor: 'shadow-blue-600/20',
      hasArrow: false,
      icon: (
        <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          <path d="m14 10 3-3 4 4" />
          <path d="M21 7v4h-4" />
        </svg>
      ),
    },
    {
      step: '04',
      titleLine1: 'Train in a',
      titleLine2: '5-Star Hotel',
      desc: 'Get real-world experience through internships at top luxury hotels.',
      color: '#0D9488', // Teal
      lightBg: 'bg-teal-50/70',
      borderColor: 'border-teal-600',
      shadowColor: 'shadow-teal-600/20',
      hasArrow: true,
      icon: (
        <svg className="w-10 h-10 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 22v-65a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v65" />
          <rect x="4" y="6" width="16" height="16" rx="2" />
          <path d="M9 10h2v2H9zM13 10h2v2h-2zM9 14h2v2H9zM13 14h2v2h-2z" />
          <path d="M6 3v3M18 3v3" />
        </svg>
      ),
    },
    {
      step: '05',
      titleLine1: 'Get Certified &',
      titleLine2: 'Graduate',
      desc: 'Pass exams, earn your diploma, and prepare for job interviews.',
      color: '#F59E0B', // Amber / Orange
      lightBg: 'bg-amber-50/70',
      borderColor: 'border-amber-500',
      shadowColor: 'shadow-amber-500/20',
      hasArrow: true,
      icon: (
        <svg className="w-10 h-10 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <line x1="7" y1="8" x2="13" y2="8" />
          <line x1="7" y1="12" x2="11" y2="12" />
          <circle cx="16" cy="15" r="3" />
          <path d="M14.5 17.5 13 21l3-1.5 3 1.5-1.5-3.5" />
        </svg>
      ),
    },
    {
      step: '06',
      titleLine1: 'Start Your',
      titleLine2: 'Global Career',
      desc: 'Secure global job placements with UV Overseas Consultancy. Get expert interview and visa support!',
      color: '#F43F5E', // Pink / Red
      lightBg: 'bg-rose-50/70',
      borderColor: 'border-rose-500',
      shadowColor: 'shadow-rose-500/20',
      hasArrow: false,
      icon: (
        <svg className="w-10 h-10 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3.6 9h16.8M3.6 15h16.8" />
          <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18" />
          <rect x="14" y="14" width="6" height="5" rx="1" fill="#F43F5E" stroke="none" />
          <path d="M16 14v-1a1 1 0 0 1 2 0v1" stroke="#F43F5E" strokeWidth="1.5" />
        </svg>
      ),
    },
  ];

  const getFacilityIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Utensils className="w-5 h-5 text-[#E80088]" />;
      case 1: return <Utensils className="w-5 h-5 text-[#90268B]" />;
      case 2: return <Hotel className="w-5 h-5 text-[#443C87]" />;
      case 3: return <Building2 className="w-5 h-5 text-[#E80088]" />;
      case 4: return <Laptop className="w-5 h-5 text-[#90268B]" />;
      case 5: return <Users className="w-5 h-5 text-[#443C87]" />;
      case 6: return <Trophy className="w-5 h-5 text-[#E80088]" />;
      case 7: return <GraduationCap className="w-5 h-5 text-[#90268B]" />;
      case 8: return <Bus className="w-5 h-5 text-[#443C87]" />;
      case 9: return <HeartHandshake className="w-5 h-5 text-[#E80088]" />;
      case 10: return <Building2 className="w-5 h-5 text-[#90268B]" />;
      default: return <Award className="w-5 h-5 text-[#443C87]" />;
    }
  };

  return (
    <section className="py-20 bg-[#FAF9F6] relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto space-y-3"
        >
          {/* Subheader Pill with decorative dots/lines */}
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[2px] bg-rose-300" />
            <span className="text-rose-600 text-xs font-black uppercase tracking-widest flex items-center gap-1.5">
              <span className="text-[10px]">◆</span>
              6 STEPS TO BUILD YOUR HOSPITALITY CAREER
              <span className="text-[10px]">◆</span>
            </span>
            <span className="w-12 h-[2px] bg-rose-300" />
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight">
            Your <span className="text-[#F43F5E]">6-Step</span> Career Roadmap
          </h2>

          {/* Subtitle */}
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            From admission to global success &ndash; we guide you every step of the way.
          </p>

          {/* Underline accent */}
          <div className="w-12 h-1 bg-[#F43F5E] rounded-full mx-auto mt-2" />
        </motion.div>

        {/* 6 Step Cards Grid with Animated Line Passing Through & Beyond */}
        <div className="relative pt-4">
          
          {/* Animated Connecting Line SVG Path Passing Through & Beyond (Desktop) */}
          <div className="hidden lg:block absolute inset-x-0 top-0 bottom-0 pointer-events-none z-0">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 600">
              {/* Background Guide Line Path */}
              <path
                d="M 180,140 L 580,140 L 980,140 C 1120,140 1120,440 980,440 L 580,440 L 180,440 L 0,440"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="4"
                strokeDasharray="8 8"
                strokeLinecap="round"
              />
              {/* Glowing Animated Pulse Line */}
              <path
                d="M 180,140 L 580,140 L 980,140 C 1120,140 1120,440 980,440 L 580,440 L 180,440 L -60,440"
                fill="none"
                stroke="url(#animGradient)"
                strokeWidth="5"
                strokeLinecap="round"
                className="animate-pulse"
              />
              <defs>
                <linearGradient id="animGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F43F5E" />
                  <stop offset="30%" stopColor="#8B5CF6" />
                  <stop offset="60%" stopColor="#0D9488" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {stepsData.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-200/50 p-6 flex flex-col justify-between relative group hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{
                borderLeftWidth: '6px',
                borderLeftColor: item.color,
              }}
            >
              {/* Card Top Row: Step Number + Icon + Title + Description */}
              <div className="space-y-4">
                
                {/* Top Number */}
                <div className="text-3xl sm:text-4xl font-extrabold" style={{ color: item.color }}>
                  {item.step}
                </div>

                {/* Body Content Row: Circular Icon + Text */}
                <div className="grid grid-cols-[auto_1fr] gap-4 items-start pt-1">
                  
                  {/* Left Circular Icon Badge */}
                  <div
                    className={`w-20 h-20 rounded-full ${item.lightBg} border-2 border-white flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>

                  {/* Right Content */}
                  <div className="space-y-2 text-left">
                    <h3 className="text-lg font-black text-[#0F172A] leading-snug">
                      {item.titleLine1}
                      {item.titleLine2 && <><br />{item.titleLine2}</>}
                    </h3>

                    {/* Accent Underline */}
                    <div className="w-7 h-0.5 rounded-full opacity-80" style={{ backgroundColor: item.color }} />

                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>

              </div>

              {/* Right Arrow Button (For Steps 01, 02, 04, 05) */}
              {item.hasArrow && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-400 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-slate-300 transition-all" style={{ color: item.color }}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
          </div>
        </div>

        {/* Bottom Feature Capsule Highlights Bar (Pixel-Perfect from Reference) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-2xl border border-slate-200/80 shadow-md p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
        >
          
          {/* Feature 1 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-pink-50 border border-pink-200 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
                <path d="M12 7v5l3 3" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-extrabold text-[#0F172A] leading-tight">Industry-Focused</div>
              <div className="text-xs font-extrabold text-[#0F172A] leading-tight">Education</div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="10" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-extrabold text-[#0F172A] leading-tight">Expert Faculty &</div>
              <div className="text-xs font-extrabold text-[#0F172A] leading-tight">Mentorship</div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 20h20" />
                <path d="M6 16v4" />
                <path d="M18 16v4" />
                <path d="M12 4a8 8 0 0 0-8 8v4h16v-4a8 8 0 0 0-8-8z" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-extrabold text-[#0F172A] leading-tight">Internships in Top</div>
              <div className="text-xs font-extrabold text-[#0F172A] leading-tight">Hospitality Brands</div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-extrabold text-[#0F172A] leading-tight">Global Exposure &</div>
              <div className="text-xs font-extrabold text-[#0F172A] leading-tight">Placement Support</div>
            </div>
          </div>

        </motion.div>

        {/* 2. Brochure Infrastructure & Facilities Grid */}
        <div className="space-y-8 pt-12 border-t border-slate-200">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-[#E80088] text-xs font-black uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-[#E80088]" />
              <span>5★ STAR CAMPUS INFRASTRUCTURE</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-950">2 Own Campus Buildings & Training Facilities</h3>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BROCHURE_FACILITIES.map((facility, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                key={idx}
                className="p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:shadow-md hover:border-[#E80088]/30 transition-all flex items-start gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {getFacilityIcon(idx)}
                </div>
                <div className="space-y-1 text-left">
                  <div className="text-[10px] font-black text-[#E80088] uppercase tracking-wider">
                    {facility.category}
                  </div>
                  <div className="text-sm font-black text-slate-950 leading-tight">
                    {facility.title}
                  </div>
                  <div className="text-xs text-slate-600 font-medium leading-normal">
                    {facility.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Campus Images Carousel (Infinite Scroll) */}
        <div className="mt-12 w-full overflow-hidden relative pb-4">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-[#FAF9F6] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-[#FAF9F6] to-transparent pointer-events-none"></div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]"
          >
            {/* Array of images repeated twice for infinite loop effect */}
            {[
              'https://cdn.uvchm.com/images/front_office_real.jpg',
              'https://cdn.uvchm.com/images/model_bar_real.jpg',
              'https://cdn.uvchm.com/images/culinary_training_new.jpg',
              'https://cdn.uvchm.com/images/bartending_training_new.jpg',
              'https://cdn.uvchm.com/images/housekeeping_training_new.jpg',
              'https://cdn.uvchm.com/images/2.jpg',
              'https://cdn.uvchm.com/images/3.jpg',
              'https://cdn.uvchm.com/images/4.jpg',
              'https://cdn.uvchm.com/images/front_office_real.jpg',
              'https://cdn.uvchm.com/images/model_bar_real.jpg',
              'https://cdn.uvchm.com/images/culinary_training_new.jpg',
              'https://cdn.uvchm.com/images/bartending_training_new.jpg',
              'https://cdn.uvchm.com/images/housekeeping_training_new.jpg',
              'https://cdn.uvchm.com/images/2.jpg',
              'https://cdn.uvchm.com/images/3.jpg',
              'https://cdn.uvchm.com/images/4.jpg'
            ].map((img, i) => (
              <div key={i} className="w-64 sm:w-80 h-48 sm:h-56 relative rounded-2xl overflow-hidden shadow-md shrink-0 border border-slate-200 group">
                <img src={img} alt={`Campus view ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-10 bg-slate-950 text-white rounded-3xl border border-[#E80088]/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E80088]/20 border border-[#E80088]/40 rounded-full text-[#E80088] text-[10px] font-black uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>2 OWN CAMPUS BUILDINGS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black">Ready to Start Your Global Hospitality Career?</h3>
            <p className="text-xs sm:text-sm text-slate-300">Join Northern Telangana&apos;s Biggest Hotel Management College with 100% placement assurance.</p>
          </div>

          <button
            onClick={() => openModal()}
            className="px-8 py-3.5 bg-gradient-to-r from-[#E80088] via-[#90268B] to-[#443C87] text-white font-black text-xs uppercase tracking-wider rounded-full shadow-lg shadow-[#E80088]/30 flex items-center gap-2 shrink-0 hover:scale-105 transition-all"
          >
            <span>APPLY FOR ADMISSION TODAY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}

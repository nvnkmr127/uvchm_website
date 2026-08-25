'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldCheck, Briefcase, Globe, Award, Utensils, Users, Star, GraduationCap, MapPin, Laptop, HeartHandshake, Trophy, UserCheck } from 'lucide-react';

const comparisonData = [
  {
    feature: "Northern Telangana's Biggest HM College",
    icon: <MapPin className="w-5 h-5 text-red-500" />,
    us: true,
    others: false,
  },
  {
    feature: '100% Placement Assistance Till Job Secured',
    icon: <Briefcase className="w-5 h-5 text-blue-500" />,
    us: true,
    others: false,
  },
  {
    feature: 'Earn While You Learn (Paid Internships)',
    icon: <Award className="w-5 h-5 text-emerald-500" />,
    us: true,
    others: false,
  },
  {
    feature: 'UV Consultancy: Govt-Approved Foreign Placement',
    icon: <ShieldCheck className="w-5 h-5 text-purple-500" />,
    us: true,
    others: false,
  },
  {
    feature: 'Internships in 5-Star Brands (Taj, Marriott, Hyatt)',
    icon: <Star className="w-5 h-5 text-amber-500" />,
    us: true,
    others: false,
  },
  {
    feature: 'World-Class AI-Based Teaching System',
    icon: <Laptop className="w-5 h-5 text-indigo-500" />,
    us: true,
    others: false,
  },
  {
    feature: '3 Training Kitchens, 2 Bars & Front Office Labs',
    icon: <Utensils className="w-5 h-5 text-pink-500" />,
    us: true,
    others: false,
  },
  {
    feature: 'Bilingual Teaching (Telugu + English)',
    icon: <Globe className="w-5 h-5 text-teal-500" />,
    us: true,
    others: false,
  },
  {
    feature: '30% Fee Discount for Girls',
    icon: <HeartHandshake className="w-5 h-5 text-rose-500" />,
    us: true,
    others: false,
  },
  {
    feature: 'No Admission Fee - Easy to Join',
    icon: <Check className="w-5 h-5 text-green-500" />,
    us: true,
    others: false,
  },
  {
    feature: 'Award-Winning: Gold & Bronze (Chefs Assoc.)',
    icon: <Trophy className="w-5 h-5 text-yellow-500" />,
    us: true,
    others: false,
  },
  {
    feature: 'Faculty with 10-20+ Years Global 5-Star Exp.',
    icon: <Users className="w-5 h-5 text-purple-600" />,
    us: true,
    others: false,
  },
  {
    feature: 'Soft Skills, Grooming & Comm. Training',
    icon: <UserCheck className="w-5 h-5 text-cyan-600" />,
    us: true,
    others: false,
  },
  {
    feature: 'Smart Classrooms & Digital Computer Labs',
    icon: <Laptop className="w-5 h-5 text-blue-400" />,
    us: true,
    others: false,
  },
  {
    feature: 'Full-Time Mentors & Individual Attention',
    icon: <Users className="w-5 h-5 text-rose-400" />,
    us: true,
    others: false,
  },
  {
    feature: 'Regular Parent-Teacher Meetings',
    icon: <Users className="w-5 h-5 text-amber-600" />,
    us: true,
    others: false,
  },
  {
    feature: 'Guest Sessions & Career Counselling',
    icon: <Award className="w-5 h-5 text-indigo-400" />,
    us: true,
    others: false,
  },
  {
    feature: 'Safe Campus with Lockers & Lounge',
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    us: true,
    others: false,
  },
  {
    feature: 'Basic Hospitality Degree & Theory Classes',
    icon: <GraduationCap className="w-5 h-5 text-slate-500" />,
    us: true,
    others: true,
  },
];

interface CollegeComparisonProps {
  onOpenApply: () => void;
}

export default function CollegeComparison({ onOpenApply }: CollegeComparisonProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-gradient-to-b from-pink-100/50 to-purple-100/50 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[400px] h-[400px] bg-gradient-to-t from-blue-100/40 to-emerald-100/40 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-black uppercase tracking-wider shadow-sm">
              <Star className="w-4 h-4 fill-pink-600 text-pink-600" />
              <span>THE UV COLLEGE ADVANTAGE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Why We <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Stand Out</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              A side-by-side look at why ambitious students choose us over traditional educational institutions.
            </p>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto relative group">
          {/* Glowing border effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100">
            
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-slate-950 text-white relative z-20 shadow-md">
              <div className="col-span-12 md:col-span-6 p-6 md:p-8 font-bold text-lg md:text-xl flex items-center justify-start border-b md:border-b-0 md:border-r border-slate-800">
                Core Advantages
              </div>
              <div className="col-span-6 md:col-span-3 p-6 font-black text-xl text-center border-r border-slate-800 bg-gradient-to-br from-pink-600 to-purple-700 flex flex-col justify-center items-center shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <span className="relative z-10 drop-shadow-md tracking-wide">UVCHM</span>
              </div>
              <div className="col-span-6 md:col-span-3 p-6 font-bold text-lg md:text-xl text-center flex flex-col justify-center items-center text-slate-400">
                Other Colleges
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-slate-100 bg-slate-50/50">
              {comparisonData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="grid grid-cols-12 hover:bg-white transition-colors duration-300 group/row relative z-10"
                >
                  {/* Feature Name */}
                  <div className="col-span-12 md:col-span-6 p-4 md:p-5 flex items-center gap-4 text-slate-800 font-semibold md:text-base border-b md:border-b-0 md:border-r border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 shadow-sm group-hover/row:scale-110 group-hover/row:bg-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <span>{item.feature}</span>
                  </div>
                  
                  {/* UVCHM Column */}
                  <div className="col-span-6 md:col-span-3 p-4 md:p-5 flex justify-center items-center border-r border-slate-100 bg-pink-50/40 relative overflow-hidden group-hover/row:bg-pink-50/80 transition-colors">
                    {item.us ? (
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/30 transform group-hover/row:scale-110 transition-transform duration-300">
                        <Check className="w-5 h-5 stroke-[3]" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shadow-inner">
                        <X className="w-5 h-5 stroke-[2]" />
                      </div>
                    )}
                  </div>
                  
                  {/* Other Colleges Column */}
                  <div className="col-span-6 md:col-span-3 p-4 md:p-5 flex justify-center items-center group-hover/row:bg-slate-50/80 transition-colors">
                    {item.others ? (
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 shadow-inner">
                        <Check className="w-5 h-5 stroke-[3]" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-300 border border-rose-100">
                        <X className="w-5 h-5 stroke-[2]" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Table Footer / Final Highlight */}
            <div className="bg-slate-900 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-20">
              <div className="text-white text-center md:text-left space-y-1">
                <h4 className="text-xl font-bold">Don't settle for ordinary.</h4>
                <p className="text-slate-400 text-sm">Choose the #1 Hotel Management College in Nizamabad.</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenApply}
                className="px-8 py-3.5 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-black text-sm uppercase tracking-wider rounded-full shadow-lg shadow-pink-600/30 flex items-center gap-2 hover:shadow-xl hover:shadow-pink-600/40 transition-all border border-pink-500"
              >
                Start Your Application
              </motion.button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

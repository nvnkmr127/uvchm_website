'use client';

import React from 'react';
import { GraduationCap, MapPin, Phone, Mail, ArrowRight, ShieldCheck, Star, Award, Heart } from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden border-t border-pink-500/30">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-pink-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Accreditation Column (5 Columns) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-600 flex items-center justify-center text-white shadow-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white leading-none">
                  UV COLLEGE OF HOTEL MANAGEMENT
                </h3>
                <span className="text-[10px] font-black tracking-widest text-pink-400 uppercase">
                  NIZAMABAD&apos;S NO.1 HOTEL MANAGEMENT COLLEGE
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs font-medium leading-relaxed max-w-sm">
              Empowering students with world-class hospitality education, 5-star practical training, paid overseas internships, and 100% guaranteed job placements worldwide.
            </p>

            <div className="p-4 bg-[#131527] border border-pink-500/30 rounded-2xl space-y-2 max-w-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-pink-300">
                <ShieldCheck className="w-4 h-4 text-pink-400" />
                <span>AICTE Approved & Govt Recognized</span>
              </div>
              <div className="text-[11px] text-slate-300 font-medium">
                Backed by UV Consultancy — Overseas Foreign Employment Agency (Ministry of External Affairs Approved).
              </div>
            </div>
          </div>

          {/* Quick Links Column (3 Columns) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-black uppercase tracking-widest text-pink-400">
              EXPLORE PROGRAMS
            </h4>
            <ul className="space-y-2.5 text-xs font-bold text-slate-300">
              <li>
                <a href="#courses" className="hover:text-pink-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-pink-500" /> Diploma in Hotel Management (1 Yr)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-pink-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-pink-500" /> Advance Diploma in Hotel Mgmt (1.5 Yrs)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-pink-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-pink-500" /> PG Diploma in Hotel Mgmt (1 Yr)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-pink-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-pink-500" /> Masters Diploma in Hotel Mgmt (2 Yrs)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-pink-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-pink-500" /> Bartending & Mixology (1 Yr)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-pink-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-pink-500" /> Craft Course in Food Production (1 Yr)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Campus Location Column (4 Columns) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-black uppercase tracking-widest text-pink-400">
              CAMPUS & ADMISSIONS
            </h4>
            
            <div className="space-y-3 text-xs font-medium text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                <span>{COLLEGE_INFO.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-pink-500 shrink-0" />
                <a href={`tel:${COLLEGE_INFO.contact.phone}`} className="hover:text-pink-400 font-bold transition-colors">
                  {COLLEGE_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-pink-500 shrink-0" />
                <a href={`mailto:${COLLEGE_INFO.contact.email}`} className="hover:text-pink-400 font-bold transition-colors">
                  {COLLEGE_INFO.contact.email}
                </a>
              </div>
            </div>

            <div className="p-3 bg-pink-950/50 border border-pink-500/40 rounded-xl space-y-1">
              <div className="text-[11px] font-black text-pink-300 uppercase">Women Scholarship</div>
              <div className="text-xs text-white font-bold">Exclusive 30% Fee Discount for Female Candidates</div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400">
          <div>
            © 2026 {COLLEGE_INFO.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Nizamabad&apos;s #1 Hospitality Education Campus</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

'use client';

import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Heart,
  Clock,
  BookOpen,
  Compass,
  Home,
  Trophy,
  Calendar,
  UserCheck,
  Sparkles,
  Building2,
  Globe,
  CheckCircle2,
  ArrowUp
} from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeData';

// Inline Brand Social Icons for Guaranteed Compatibility & Perfect Sharpness
function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.989 9.984 0 1.76.459 3.474 1.33 4.988l-1.415 5.166 5.287-1.385c1.455.794 3.1 1.216 4.787 1.216 5.507 0 9.99-4.478 9.99-9.985 0-5.506-4.483-9.984-9.99-9.984zm5.82 14.184c-.244.686-1.42 1.31-1.956 1.393-.497.075-1.135.109-3.277-.775-2.738-1.13-4.502-3.923-4.638-4.106-.135-.183-1.107-1.472-1.107-2.808 0-1.336.702-1.99.953-2.253.25-.262.545-.328.727-.328.183 0 .366.002.525.01.168.008.396-.064.62.474.23.551.78 1.905.847 2.044.068.138.113.3.023.481-.09.182-.136.296-.27.457-.136.16-.288.358-.41.48-.137.137-.28.286-.12.56.16.273.71 1.173 1.524 1.898 1.048.933 1.933 1.223 2.207 1.36.274.137.435.114.595-.069.16-.183.687-.799.87-1.073.183-.274.366-.228.618-.137.25.091 1.594.752 1.868.889.274.137.457.206.525.32.068.114.068.663-.176 1.349z" />
    </svg>
  );
}

function FacebookIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function YouTubeIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedInIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function XTwitterIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden border-t border-pink-500/30">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-pink-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 relative z-10 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Brand & Accreditation Column (4 Columns) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-pink-600/30 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white leading-tight">
                  UV COLLEGE OF HOTEL MANAGEMENT
                </h3>
                <span className="text-[10px] font-black tracking-widest text-pink-400 uppercase flex items-center gap-1 mt-0.5">
                  <Sparkles className="w-3 h-3 text-pink-400" />
                  NIZAMABAD&apos;S NO.1 HOTEL MANAGEMENT COLLEGE
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs font-medium leading-relaxed">
              Empowering students with world-class hospitality education, 5-star practical training, paid overseas internships, and 100% guaranteed job placements worldwide.
            </p>

            {/* Accreditation Box */}
            <div className="p-4 bg-[#131527] border border-pink-500/30 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-black text-pink-300">
                <ShieldCheck className="w-4 h-4 text-pink-400 shrink-0" />
                <span>AICTE Approved & Govt Recognized</span>
              </div>
              <div className="flex items-start gap-2 text-[11px] text-slate-300 font-medium">
                <Building2 className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />
                <span>Backed by UV Consultancy — Overseas Foreign Employment Agency (Ministry of External Affairs Approved).</span>
              </div>
            </div>

            {/* Social Media Links with Custom Crisp Icons */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-pink-400" />
                <span>Connect With Us</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {[
                  { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com', color: 'hover:bg-pink-600 hover:text-white' },
                  { name: 'WhatsApp', icon: WhatsAppIcon, href: 'https://wa.me/919876543210', color: 'hover:bg-emerald-600 hover:text-white' },
                  { name: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com', color: 'hover:bg-blue-600 hover:text-white' },
                  { name: 'YouTube', icon: YouTubeIcon, href: 'https://youtube.com', color: 'hover:bg-red-600 hover:text-white' },
                  { name: 'LinkedIn', icon: LinkedInIcon, href: 'https://linkedin.com', color: 'hover:bg-sky-600 hover:text-white' },
                  { name: 'Twitter/X', icon: XTwitterIcon, href: 'https://twitter.com', color: 'hover:bg-slate-700 hover:text-white' },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center transition-all ${s.color} hover:scale-110 active:scale-95`}
                      title={s.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Academic Programs Column (3 Columns) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-black uppercase tracking-widest text-pink-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-pink-500" />
              <span>ACADEMIC PROGRAMS</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-bold text-slate-300">
              <li>
                <a href="#academics" className="hover:text-pink-400 transition-colors flex items-center gap-2 group">
                  <Award className="w-3.5 h-3.5 text-pink-500 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  <span>Diploma in Hotel Mgmt (1 Yr)</span>
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-pink-400 transition-colors flex items-center gap-2 group">
                  <GraduationCap className="w-3.5 h-3.5 text-pink-500 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  <span>Advance Diploma in HM (1.5 Yrs)</span>
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-pink-400 transition-colors flex items-center gap-2 group">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  <span>PG Diploma in Hotel Mgmt (1 Yr)</span>
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-pink-400 transition-colors flex items-center gap-2 group">
                  <Trophy className="w-3.5 h-3.5 text-pink-500 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  <span>Masters Diploma in HM (2 Yrs)</span>
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-pink-400 transition-colors flex items-center gap-2 group">
                  <Sparkles className="w-3.5 h-3.5 text-pink-500 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  <span>Bartending & Mixology (1 Yr)</span>
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-pink-400 transition-colors flex items-center gap-2 group">
                  <BookOpen className="w-3.5 h-3.5 text-pink-500 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  <span>Food Production Craft Course</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links Column (2 Columns) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-black uppercase tracking-widest text-pink-400 flex items-center gap-2">
              <Compass className="w-4 h-4 text-pink-500" />
              <span>EXPLORE</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-bold text-slate-300">
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors flex items-center gap-2 group">
                  <Home className="w-3.5 h-3.5 text-pink-500 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-pink-400 transition-colors flex items-center gap-2 group">
                  <Building2 className="w-3.5 h-3.5 text-pink-500 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  <span>Training Labs</span>
                </a>
              </li>
              <li>
                <a href="#placements" className="hover:text-pink-400 transition-colors flex items-center gap-2 group">
                  <Trophy className="w-3.5 h-3.5 text-pink-500 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  <span>100% Placements</span>
                </a>
              </li>
              <li>
                <a href="#faculty" className="hover:text-pink-400 transition-colors flex items-center gap-2 group">
                  <UserCheck className="w-3.5 h-3.5 text-pink-500 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  <span>Faculty</span>
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-pink-400 transition-colors flex items-center gap-2 group">
                  <Calendar className="w-3.5 h-3.5 text-pink-500 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  <span>Admissions</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Column (3 Columns) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-black uppercase tracking-widest text-pink-400 flex items-center gap-2">
              <Phone className="w-4 h-4 text-pink-500" />
              <span>CAMPUS CONTACT</span>
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
              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-pink-500 shrink-0" />
                <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
              </div>
            </div>

            <div className="p-3 bg-pink-950/50 border border-pink-500/40 rounded-xl space-y-1">
              <div className="text-[11px] font-black text-pink-300 uppercase flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
                <span>Women Scholarship</span>
              </div>
              <div className="text-xs text-white font-bold">Exclusive 30% Fee Discount for Female Candidates</div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back To Top Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>© 2026 {COLLEGE_INFO.name}. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              Nizamabad&apos;s #1 Hospitality Education Campus
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500 text-slate-300 hover:text-white flex items-center gap-1 transition-all active:scale-95"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-pink-500" />
              <span className="text-[10px] font-black uppercase">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

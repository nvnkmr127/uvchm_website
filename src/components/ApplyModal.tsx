'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Send, GraduationCap, Phone, Sparkles } from 'lucide-react';
import { PROGRAMS } from '@/data/collegeData';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyModal({ isOpen, onClose }: ApplyModalProps) {
  const [areaOfInterest, setAreaOfInterest] = useState<string>('Hospitality');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    programId: PROGRAMS[0].id,
    campusLocation: 'Main Hospitality Campus',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  const filteredPrograms = PROGRAMS.filter((prog) => {
    if (areaOfInterest === 'Hospitality') return prog.department.includes('Hotel') || prog.department.includes('Front') || prog.department.includes('Executive');
    if (areaOfInterest === 'Culinary') return prog.department.includes('Culinary') || prog.department.includes('Food');
    return true;
  });

  return (
    <div 
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 border border-slate-200 max-h-[90vh] md:max-h-[85vh] overflow-y-auto my-auto">
        
        {/* Global Close Button - Positioned top right of whole modal container for mobile & desktop */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 p-2 text-slate-600 hover:text-slate-900 bg-white/90 hover:bg-white rounded-full shadow-md backdrop-blur-xs transition-transform active:scale-95"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Left Dark Graphic Banner */}
        <div className="md:col-span-5 bg-gradient-to-b from-[#131527] via-[#0b0d19] to-[#1a0f2e] p-5 sm:p-8 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-4 sm:space-y-6 pr-8 md:pr-0">
            {/* Limited Seats Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 text-[10px] sm:text-[11px] font-black tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <span>LIMITED SEATS AVAILABLE</span>
            </div>

            {/* Headline */}
            <h2 className="text-xl sm:text-3xl font-black leading-tight tracking-tight">
              Unlock Your Career Potential with <span className="text-amber-400">Expert Guidance</span>
            </h2>

            <p className="text-xs text-slate-300 font-medium hidden sm:block">
              Limited Intakes Annually. Enroll Now to Secure Your Seat at UV College of Hotel Management!
            </p>

            {/* Feature Checklist */}
            <div className="space-y-2 sm:space-y-3 pt-1 sm:pt-2 text-xs font-bold text-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-black text-[10px] sm:text-xs shrink-0">
                  ✓
                </div>
                <span>Limited Intakes Annually</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-black text-[10px] sm:text-xs shrink-0">
                  ✓
                </div>
                <span>Expert Career Counseling</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-black text-[10px] sm:text-xs shrink-0">
                  ✓
                </div>
                <span>100% Placement Assistance</span>
              </div>
            </div>
          </div>

          {/* Student Cutout Image Showcase */}
          <div className="relative mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
              alt="UV College Counselor"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-amber-400 object-cover shadow-md shrink-0"
            />
            <div>
              <div className="text-xs font-bold text-white">Dedicated Admissions Team</div>
              <div className="text-[10px] text-amber-400 font-semibold">1-on-1 Counseling Guarantee</div>
            </div>
          </div>
        </div>

        {/* Right White Form Section */}
        <div className="md:col-span-7 p-5 sm:p-8 bg-white flex flex-col justify-between relative">
          
          {isSubmitted ? (
            <div className="py-8 sm:py-12 text-center space-y-4 my-auto">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 text-emerald-600 border border-emerald-300 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Request Submitted!</h3>
              <p className="text-slate-600 text-xs sm:text-sm max-w-xs mx-auto">
                Thank you, <span className="font-bold text-pink-600">{formData.fullName}</span>. Our UV College admissions counselors will call you shortly at <span className="font-mono font-bold text-indigo-700">{formData.phone}</span>.
              </p>
              <div className="pt-2 sm:pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl text-xs shadow-md shadow-pink-600/25 active:scale-95 transition-transform"
                >
                  Back to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Start Your Journey</h3>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Fill in your details and our counselors will reach out to you</p>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-pink-600 focus:bg-white transition-colors"
                />
              </div>

              {/* Mobile Number with Country Code Flag */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number</label>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-2 sm:py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 shrink-0">
                    <span>🇮🇳</span>
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="Enter 10-digit number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 px-3.5 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-pink-600 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Area of Interest Selection Pills */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 sm:mb-1.5">Area of Interest</label>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  {['Hospitality', 'Culinary', 'Management'].map((area) => (
                    <button
                      key={area}
                      type="button"
                      onClick={() => setAreaOfInterest(area)}
                      className={`py-2 text-[11px] sm:text-xs font-bold rounded-xl border transition-all ${
                        areaOfInterest === area
                          ? 'bg-pink-50 border-pink-600 text-pink-700 shadow-2xs'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preferred Program */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Program</label>
                <select
                  value={formData.programId}
                  onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
                  className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-pink-600 focus:bg-white transition-colors"
                >
                  {filteredPrograms.map((prog) => (
                    <option key={prog.id} value={prog.id}>
                      {prog.title} ({prog.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Campus Location */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Campus Location</label>
                <select
                  value={formData.campusLocation}
                  onChange={(e) => setFormData({ ...formData, campusLocation: e.target.value })}
                  className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-pink-600 focus:bg-white transition-colors"
                >
                  <option value="Main Hospitality Campus">Main Hospitality Campus (City Center)</option>
                  <option value="Advanced Culinary Campus">Advanced Culinary Campus (Knowledge Park)</option>
                </select>
              </div>

              {/* Submit CTA Button */}
              <div className="pt-1 sm:pt-2">
                <button
                  type="submit"
                  className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-pink-600/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  REQUEST CALLBACK
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

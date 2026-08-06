'use client';

import React, { useState, useEffect } from 'react';
import { Briefcase, Quote, ChevronLeft, ChevronRight, ArrowRight, Building2, Star, Award } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  packageText: string;
  course: string;
  year: string;
  quote: string;
  image: string;
}

export default function StudentPlacements({ onOpenApply }: { onOpenApply: () => void }) {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 'test-1',
      name: 'Rohan Deshmukh',
      role: 'Assistant Food & Beverage Manager',
      company: 'Burj Al Arab Jumeirah',
      location: 'Dubai, UAE',
      packageText: '₹18.5 LPA International Package',
      course: 'Diploma in Hotel Management',
      year: 'Batch of 2022',
      quote: 'UV College provided me with hands-on fine dining training and foreign placement mentorship through UV Consultancy that directly landed me a role in Dubai right after graduation.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'test-2',
      name: 'Priya Sharma',
      role: 'Sous Chef - Fine Dining',
      company: 'Taj Lake Palace',
      location: 'Udaipur, India',
      packageText: '₹8.4 LPA Domestic Package',
      course: 'Craft Course in Food Production',
      year: 'Batch of 2023',
      quote: 'The 30% Women Empowerment Discount gave me the opportunity to pursue culinary arts. The practical quantity kitchen training helped me clear my Taj Executive Chef interview smoothly.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'test-3',
      name: 'Karan Varma',
      role: 'Front Office Executive',
      company: 'Marriott Marquis',
      location: 'Singapore',
      packageText: '₹14.2 LPA Overseas Package',
      course: 'Advance Diploma in Hotel Management',
      year: 'Batch of 2021',
      quote: 'Learning real Opera PMS software in the college lab meant zero onboarding delay when I joined Marriott in Singapore. UV College’s 100% placement support delivered on every promise.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const prevTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeTestimonialIndex];

  return (
    <section id="placements" className="py-16 bg-[#fbf9f5] border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header with Slider Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/70 border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5 text-pink-600" />
              <span>CAREER RECRUITMENT & ALUMNI SLIDER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Guaranteed Placements & <span className="text-pink-600">Global Careers</span>
            </h2>
            <p className="text-slate-600 text-sm max-w-xl font-medium">
              Over 5,000+ UV College alumni are leading luxury 5-star hotels, resorts, and cruise lines across 10+ countries worldwide.
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={prevTestimonial}
              className="w-11 h-11 rounded-full bg-white border border-slate-300 hover:border-pink-600 text-slate-800 hover:text-pink-600 flex items-center justify-center shadow-xs transition-all hover:scale-105"
              title="Previous Story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-11 h-11 rounded-full bg-slate-950 hover:bg-pink-600 text-white flex items-center justify-center shadow-md transition-all hover:scale-105"
              title="Next Story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 4 Clean Metric Blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-1 shadow-xs">
            <div className="text-3xl sm:text-4xl font-black text-slate-950">100%</div>
            <div className="text-xs font-bold text-slate-700 uppercase">Placement Guarantee</div>
            <div className="text-[11px] text-slate-500 font-medium">On-Campus Drives</div>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-1 shadow-xs">
            <div className="text-3xl sm:text-4xl font-black text-pink-600">₹18.5 LPA</div>
            <div className="text-xs font-bold text-slate-700 uppercase">Highest Package</div>
            <div className="text-[11px] text-slate-500 font-medium">Dubai & Singapore Resort</div>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-1 shadow-xs">
            <div className="text-3xl sm:text-4xl font-black text-slate-950">10+</div>
            <div className="text-xs font-bold text-slate-700 uppercase">Countries Worldwide</div>
            <div className="text-[11px] text-slate-500 font-medium">Global Hospitality Network</div>
          </div>
          <div className="p-6 bg-pink-50 border border-pink-200 rounded-2xl space-y-1 shadow-xs">
            <div className="text-3xl sm:text-4xl font-black text-pink-700">30% OFF</div>
            <div className="text-xs font-bold text-pink-900 uppercase">Women Scholarship</div>
            <div className="text-[11px] text-pink-700 font-medium">Fee Discount for Female Students</div>
          </div>
        </div>

        {/* Auto-Rotating Alumni Testimonial Slider Card */}
        <div
          className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-500"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Photo & Details (5 Columns) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 bg-slate-950 text-white text-[10px] font-black uppercase rounded-lg shadow-md text-center">
                {currentTestimonial.packageText}
              </div>
            </div>

            <div className="text-center space-y-1">
              <h4 className="text-xl font-black text-slate-950">{currentTestimonial.name}</h4>
              <div className="text-pink-600 text-xs font-bold">{currentTestimonial.role}</div>
              <div className="text-slate-600 text-xs font-medium">{currentTestimonial.company} • {currentTestimonial.location}</div>
            </div>
          </div>

          {/* Right Quote & Course (7 Columns) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="text-slate-300">
              <Quote className="w-12 h-12 fill-current opacity-40 rotate-180" />
            </div>

            <blockquote className="text-lg sm:text-xl font-medium text-slate-900 leading-relaxed italic border-l-2 border-pink-600 pl-4">
              &ldquo;{currentTestimonial.quote}&rdquo;
            </blockquote>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-bold text-slate-700">
              <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg">Course: {currentTestimonial.course}</span>
              <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg">{currentTestimonial.year}</span>
            </div>

            {/* Slider Indicator Dots & CTA */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonialIndex(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeTestimonialIndex === idx
                        ? 'w-8 bg-pink-600'
                        : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    title={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={onOpenApply}
                className="px-6 py-2.5 bg-gradient-to-r from-[#E80088] via-[#90268B] to-[#443C87] hover:opacity-90 text-white text-xs font-bold uppercase rounded-full shadow-md flex items-center gap-1.5 transition-all hover:scale-105"
              >
                <span>APPLY NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

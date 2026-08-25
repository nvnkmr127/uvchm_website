'use client';

import React, { useState, useEffect } from 'react';
import { Star, ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeData';
import { useApplyModal } from '@/context/ApplyModalContext';
import Image from 'next/image';

interface HeroSlide {
  id: string;
  badge: string;
  title: string;
  synopsis: string;
  image: string;
}

export default function Hero() {
  const { openModal } = useApplyModal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides: HeroSlide[] = [
    {
      id: 'slide-1',
      badge: '★ UV COLLEGE OF HOTEL MANAGEMENT',
      title: "Nizamabad's #1 Hotel Management College",
      synopsis: 'Launch a global career in 5-star hotel administration and culinary arts. 100% guaranteed job placements in Taj, Oberoi, Marriott, Hyatt, and 6-month paid internships in Dubai, Singapore & Maldives.',
      image: '/images/fnb_training_new.jpg',
    },
    {
      id: 'slide-2',
      badge: '★ CULINARY ARTS & FOOD PRODUCTION',
      title: 'Master Culinary Science & International Gastronomy',
      synopsis: 'Train under master chefs in commercial quantity kitchens, tandoor ranges, combi-ovens, and dedicated bakery suites with 100% hands-on cooking practicals.',
      image: '/images/culinary_training_new.jpg',
    },
    {
      id: 'slide-3',
      badge: '★ BARTENDING & MIXOLOGY',
      title: 'High-Energy Mixology & Flair Bartending',
      synopsis: 'Master working flair, molecular mixology, and bar operations in our state-of-the-art mock bar. Prepare for lucrative careers in international cruise liners and premium nightclubs.',
      image: '/images/bartending_training_new.jpg',
    },
    {
      id: 'slide-4',
      badge: '★ LUXURY HOUSEKEEPING & ACCOMMODATION',
      title: '5-Star Room Operations & Floral Arts',
      synopsis: 'Specialize in luxury suite preparation, horticulture, and international hygiene protocols. Become the backbone of every luxury resort and boutique hotel.',
      image: '/images/housekeeping_training_new.jpg',
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section
      className="relative min-h-[85vh] lg:min-h-screen bg-slate-950 text-white overflow-hidden pt-20 flex flex-col justify-between border-b border-pink-500/30"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* Background Photo Slider Banner */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              className="object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto py-12 space-y-6 text-left">
        
        {/* Clean Official Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs font-black uppercase tracking-wider shadow-lg">
          <Star className="w-3.5 h-3.5 fill-current text-pink-400" />
          <span>{slide.badge}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-3xl leading-[1.08]">
          {slide.title}
        </h1>

        {/* Clean Metadata Line */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-300">
          <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-slate-200">
            2026-27 ADMISSIONS OPEN
          </span>
          <span className="px-3 py-1 bg-pink-600 text-white font-black text-xs rounded-full">
            100% GUARANTEED PLACEMENTS
          </span>
          <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-slate-200">
            GOVT RECOGNIZED
          </span>
        </div>

        {/* Synopsis Paragraph */}
        <p className="text-slate-300 text-sm sm:text-base font-medium max-w-2xl leading-relaxed">
          {slide.synopsis}
        </p>

        {/* Clean Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          
          <button
            onClick={() => openModal()}
            className="px-8 py-4 bg-gradient-to-r from-pink-600 via-pink-500 to-rose-600 text-white font-black text-xs uppercase tracking-wider rounded-full shadow-xl shadow-pink-600/30 flex items-center gap-2 hover:scale-105 transition-all"
          >
            <span>APPLY FOR ADMISSION NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#courses"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-full border border-white/20 flex items-center gap-2 transition-all"
          >
            <span>EXPLORE 8 COURSES</span>
            <ArrowRight className="w-4 h-4" />
          </a>

        </div>

      </div>

      {/* Bottom Bar Stats & Slide Controls */}
      <div className="relative z-10 bg-slate-950/80 backdrop-blur-md py-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center space-x-6 text-xs font-bold text-slate-300">
            <div><span className="text-white font-black text-sm">8+</span> Courses Offered</div>
            <div className="w-1 h-1 rounded-full bg-slate-600"></div>
            <div><span className="text-white font-black text-sm">16+</span> Years Experience</div>
            <div className="w-1 h-1 rounded-full bg-slate-600"></div>
            <div><span className="text-pink-400 font-black text-sm">100%</span> Guaranteed Placements</div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-600 text-white flex items-center justify-center transition-all hover:scale-105"
              title="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`transition-all ${
                    currentSlide === idx
                      ? 'w-8 h-2 bg-pink-600 rounded-full'
                      : 'w-2 h-2 bg-slate-600 hover:bg-slate-400 rounded-full'
                  }`}
                  title={s.title}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-600 text-white flex items-center justify-center transition-all hover:scale-105"
              title="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}

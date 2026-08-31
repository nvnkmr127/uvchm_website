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
  const [loadedSlides, setLoadedSlides] = useState<number[]>([0]);

  const slides: HeroSlide[] = [
    {
      id: 'slide-1',
      badge: '★ UV COLLEGE OF HOTEL MANAGEMENT',
      title: "Nizamabad's #1 Hotel Management College",
      synopsis: "Northern Telangana's biggest hotel management college featuring 2 own campus buildings, 8+ advanced 5★ practical labs including a live show kitchen, and internationally experienced faculty.",
      image: '/college.png',
    },
    {
      id: 'slide-2',
      badge: '★ CULINARY ARTS & FOOD PRODUCTION',
      title: 'Craft Course in Food Production',
      synopsis: 'Train under master chefs in commercial quantity kitchens, tandoor ranges, combi-ovens, and dedicated bakery suites with 100% hands-on cooking practicals.',
      image: '/images/culinary_training_new.jpg',
    },
    {
      id: 'slide-3',
      badge: '★ BARTENDING & MIXOLOGY',
      title: 'Certification in Bartending and Mixology',
      synopsis: 'Master working flair, modern creative cocktails, and bar operations in our state-of-the-art mock bar. Prepare for lucrative careers in international cruise liners and premium nightclubs.',
      image: '/images/bartending_training_new.jpg',
    },
    {
      id: 'slide-4',
      badge: '★ LUXURY HOUSEKEEPING & ACCOMMODATION',
      title: 'Craft Course in Housekeeping',
      synopsis: 'Specialize in luxury suite preparation, plant care & flower arrangements, and international cleaning rules. Become the backbone of every luxury resort and boutique hotel.',
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

  useEffect(() => {
    if (!loadedSlides.includes(currentSlide)) {
      setLoadedSlides((prev) => [...prev, currentSlide]);
    }
  }, [currentSlide, loadedSlides]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section
      className="relative min-h-[85vh] lg:min-h-screen bg-slate-950 text-white overflow-hidden lg:pt-20 flex flex-col justify-between border-b border-pink-500/30"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* Background Photo Slider Banner */}
      <div className="relative h-[45vh] sm:h-[50vh] w-full shrink-0 lg:h-auto lg:absolute lg:inset-0 z-0 [mask-image:linear-gradient(to_top,transparent_0%,black_20%,black_100%)] lg:[mask-image:none]">
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {loadedSlides.includes(idx) && (
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover object-center scale-105"
                priority={idx === 0}
                sizes="100vw"
              />
            )}
            {/* Desktop horizontal fade */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent"></div>
            {/* Vertical fade: smoother on desktop */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            
            {/* Top dark gradient for mobile to ensure any overlapping navbar is readable */}
            <div className="lg:hidden absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-950/60 to-transparent pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex flex-col justify-start lg:justify-center pt-0 pb-8 lg:my-auto lg:py-12 space-y-5 lg:space-y-6 text-center lg:text-left items-center lg:items-start">
        
        {/* Clean Official Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 lg:px-4 lg:py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-[10px] lg:text-xs font-black uppercase tracking-wider shadow-lg backdrop-blur-sm -mt-2 lg:mt-0">
          <Star className="w-3 h-3 lg:w-3.5 lg:h-3.5 fill-current text-pink-400" />
          <span>{slide.badge}</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-7xl font-black tracking-tight text-white max-w-3xl leading-[1.15] lg:leading-[1.08] drop-shadow-lg px-2 lg:px-0">
          {slide.title}
        </h1>

        {/* Clean Metadata Line */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 lg:gap-3 text-[9px] lg:text-xs font-bold text-slate-300 w-full px-2 lg:px-0">
          <span className="px-2 py-1 lg:px-3 lg:py-1 bg-pink-600/90 text-white font-black rounded-full shadow-md shadow-pink-600/20">
            100% GUARANTEED PLACEMENTS
          </span>
          <span className="px-2 py-1 lg:px-3 lg:py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-slate-300">
            GOVT RECOGNIZED
          </span>
        </div>

        {/* Synopsis Paragraph */}
        <p className="text-slate-200 lg:text-slate-300 text-sm sm:text-base font-medium max-w-2xl leading-relaxed drop-shadow-md px-4 lg:px-0">
          {slide.synopsis}
        </p>

        {/* Clean Action CTAs */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 lg:gap-4 pt-2 lg:pt-2 w-full sm:w-auto px-4 lg:px-0">
          
          <button
            onClick={() => openModal()}
            className="w-full sm:w-auto justify-center px-6 py-3.5 lg:px-8 lg:py-4 bg-gradient-to-r from-pink-600 via-pink-500 to-rose-600 text-white font-black text-[11px] lg:text-xs uppercase tracking-wider rounded-full shadow-xl shadow-pink-600/30 flex items-center gap-2 hover:scale-105 transition-all"
          >
            <span>APPLY FOR ADMISSION NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#courses"
            className="w-full sm:w-auto justify-center px-6 py-3.5 lg:px-8 lg:py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold text-[11px] lg:text-xs uppercase tracking-wider rounded-full border border-white/20 flex items-center gap-2 transition-all"
          >
            <span>EXPLORE 8 COURSES</span>
            <ArrowRight className="w-4 h-4" />
          </a>

        </div>

      </div>

      {/* Bottom Bar Stats & Slide Controls */}
      <div className="relative z-10 bg-slate-950/80 backdrop-blur-md py-4 lg:py-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-4 gap-y-2 lg:gap-x-0 lg:space-x-6 text-[10px] lg:text-xs font-bold text-slate-300">
            <div className="flex items-center gap-1"><span className="text-white font-black text-xs lg:text-sm">8+</span> Courses Offered</div>
            <div className="hidden lg:block w-1 h-1 rounded-full bg-slate-600"></div>
            <div className="flex items-center gap-1"><span className="text-white font-black text-xs lg:text-sm">Modern</span> Campus Facilities</div>
            <div className="hidden lg:block w-1 h-1 rounded-full bg-slate-600"></div>
            <div className="flex items-center gap-1 w-full justify-center sm:w-auto"><span className="text-pink-400 font-black text-xs lg:text-sm">100%</span> Guaranteed Placements</div>
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

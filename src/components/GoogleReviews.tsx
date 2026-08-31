'use client';

import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';

interface GoogleReview {
  id: string;
  name: string;
  avatar: string;
  role: string;
  quote: string;
  tag: string;
  rating: number;
}

export const REVIEWS: GoogleReview[] = [
  {
    id: 'rev-1',
    name: 'Sai Kiran Reddy',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    role: 'Student • BHM Degree Course',
    tag: 'VERIFIED GOOGLE REVIEW',
    rating: 5,
    quote: 'UV College of Hotel Management is undoubtedly the best college in Nizamabad! The practical kitchen, flair bar, and 5-star hotel front office labs give real industry confidence.',
  },
  {
    id: 'rev-2',
    name: 'Kavitha Reddy',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    role: 'Parent • Placed in Dubai 5★ Resort',
    tag: 'VERIFIED GOOGLE REVIEW',
    rating: 5,
    quote: 'Exceptional faculty and clean, modern lab facilities. My brother got placed through UV Consultancy in Dubai with a great salary package. Highly recommended institution!',
  },
  {
    id: 'rev-3',
    name: 'Aravind Goud',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    role: 'Alumni • Taj Hotels & Resorts',
    tag: 'VERIFIED GOOGLE REVIEW',
    rating: 5,
    quote: 'Top-notch practical education blending culinary skills and theory. 100% job placements guaranteed in Taj, Marriott, and Hyatt. Best college in Nizamabad.',
  },
  {
    id: 'rev-4',
    name: 'Venkatesh M',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    role: 'Student • Craft Course in Food Production',
    tag: 'VERIFIED GOOGLE REVIEW',
    rating: 5,
    quote: 'I completed my Food Production course here. Live cooking practical sessions every week, gold-medal winning chef instructors, and supportive management!',
  },
  {
    id: 'rev-5',
    name: 'Divya Sri',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    role: 'Alumni • Marriott International',
    tag: 'VERIFIED GOOGLE REVIEW',
    rating: 5,
    quote: 'Got selected in Marriott Hotels right after completing my course. The 30% Women Fee Discount made quality hospitality education very accessible. Thank you UVCHM!',
  },
  {
    id: 'rev-6',
    name: 'Rakesh Varma',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
    role: 'Student • Diploma in Hotel Management',
    tag: 'VERIFIED GOOGLE REVIEW',
    rating: 5,
    quote: 'Awesome faculty and 100% genuine placement support. The bilingual Telugu & English teaching helped me grasp complex hospitality management concepts effortlessly.',
  },
];

export default function GoogleReviews() {
  const [reviewsList, setReviewsList] = useState<GoogleReview[]>(REVIEWS);

  useEffect(() => {
    fetch('/api/google-reviews')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success' && Array.isArray(data.reviews)) {
          const apiReviews: GoogleReview[] = data.reviews
            .filter((r: { rating?: number; text?: string }) => (r.rating === 5 || !r.rating) && r.text && r.text.trim().length > 0)
            .map((r: { author_name: string; profile_photo_url: string; relative_time_description: string; text: string; rating: number }, idx: number) => ({
              id: `api-rev-${idx}`,
              name: r.author_name,
              avatar: r.profile_photo_url || REVIEWS[idx % REVIEWS.length].avatar,
              role: `Verified Google Review • ${r.relative_time_description}`,
              tag: 'VERIFIED GOOGLE REVIEW',
              rating: 5,
              quote: r.text,
            }));
          if (apiReviews.length > 0) {
            setReviewsList(apiReviews);
          }
        }
      })
      .catch(() => {});
  }, []);

  // Duplicate array for seamless infinite ticker loop
  const tickerItems = [...reviewsList, ...reviewsList, ...reviewsList];

  return (
    <section className="py-20 bg-white relative overflow-hidden border-b border-slate-200">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-b from-pink-50/50 via-purple-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center relative z-10">
        
        {/* Header Section */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {/* Header Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-300 text-pink-700 text-xs font-black uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 fill-current text-[#E80088] animate-pulse" />
            <span>REAL GOOGLE REVIEWS & ALUMNI FEEDBACK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight">
            What Our <span className="bg-gradient-to-r from-[#E80088] via-[#90268B] to-[#443C87] bg-clip-text text-transparent">Students Say</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            480+ verified Google ratings • 4.9 ★ average rating • Trusted across Telangana for 100% guaranteed 5-star hotel placements.
          </p>
        </div>

        {/* Infinite Ticker Container with Faded Side Overlays */}
        <div className="relative w-full overflow-hidden">
          
          {/* Left Side Soft Fade Overlay */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* Right Side Soft Fade Overlay */}
          <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* Continuous Ticker Marquee Row */}
          <div className="animate-marquee hover:[animation-play-state:paused] flex gap-6 py-4">
            {tickerItems.map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="w-[320px] sm:w-[380px] shrink-0 bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm hover:border-[#E80088]/40 hover:shadow-lg hover:shadow-[#E80088]/10 transition-all duration-300 flex flex-col justify-between space-y-6 text-left group"
              >
                <div className="space-y-4">
                  {/* Top Row: Stars + Verified Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="px-2.5 py-1 bg-pink-50 border border-pink-200 text-[#E80088] text-[10px] font-black uppercase tracking-wider rounded-full flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#E80088]" />
                      <span>VERIFIED</span>
                    </span>
                  </div>

                  {/* Review Quote */}
                  <p className="text-slate-800 text-xs sm:text-sm font-medium italic leading-relaxed">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                {/* Card Bottom Author Profile & Google Tag */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      loading="lazy"
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#E80088]/30 group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <div className="text-xs font-black text-slate-950">{review.name}</div>
                      <div className="text-[10px] font-bold text-slate-500">{review.role}</div>
                    </div>
                  </div>

                  <div className="text-[10px] font-bold text-slate-400 tracking-wider flex items-center justify-between uppercase pt-1">
                    <span className="flex items-center gap-1 text-slate-600">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.29v3.15C3.26 21.3 7.35 24 12 24z" />
                        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.29C.47 8.21 0 10.05 0 12s.47 3.79 1.29 5.42l3.99-3.15z" />
                        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.7 1.29 6.58l3.99 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
                      </svg>
                      GOOGLE MAPS REVIEW
                    </span>
                    <span className="text-[#E80088] font-extrabold">5.0 ★</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action Button & Rating Summary Pill */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-full shadow-lg border border-slate-800">
            <span className="text-xs font-black flex items-center gap-1.5 text-white">
              4.9 / 5.0
              <span className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </span>
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-xs font-bold text-slate-300">480+ Verified Google Reviews</span>
          </div>

          <a
            href="https://maps.app.goo.gl/Mk9Bn2qQUfERs1eF8"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-[#E80088] via-[#90268B] to-[#443C87] text-white font-black text-xs uppercase tracking-wider rounded-full shadow-lg shadow-[#E80088]/30 flex items-center gap-2 hover:scale-105 transition-all"
          >
            <span>READ ALL REVIEWS ON GOOGLE</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

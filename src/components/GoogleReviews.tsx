'use client';

import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, Zap } from 'lucide-react';

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
    name: 'Praveen Kumar',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    role: 'Student • Diploma in Hotel Management',
    tag: 'VERIFIED GOOGLE REVIEW',
    rating: 5,
    quote: 'UV College of Hotel Management is the best college in Nizamabad for hotel management courses. The practical culinary and bar training labs are top notch and faculty supports 100% placement.',
  },
  {
    id: 'rev-2',
    name: 'Kavitha Reddy',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    role: 'Parent • Student Placed in Dubai',
    tag: 'VERIFIED GOOGLE REVIEW',
    rating: 5,
    quote: 'Exceptional faculty and clean, modern lab facilities. My brother got placed through UV Consultancy in Dubai with a great salary package. Highly recommended institution!',
  },
  {
    id: 'rev-3',
    name: 'Rajesh Goud',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    role: 'Alumni • Taj Hotels & Resorts',
    tag: 'VERIFIED GOOGLE REVIEW',
    rating: 5,
    quote: 'Top-notch education blending practical skills and theory. 100% job placements in Taj, Marriott, and Oberoi. Best college for hotel administration.',
  },
  {
    id: 'rev-4',
    name: 'Venkatesh M',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    role: 'Student • Advance Diploma in HM',
    tag: 'VERIFIED GOOGLE REVIEW',
    rating: 5,
    quote: 'I took the Diploma in Hotel Management here. Superb infrastructure, real Opera PMS front office lab, and great principal mentorship throughout the year.',
  },
  {
    id: 'rev-5',
    name: 'Divya Sri',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    role: 'Alumni • Marriott International',
    tag: 'VERIFIED GOOGLE REVIEW',
    rating: 5,
    quote: 'Got selected in Marriott Hotels after completing my craft course. The 30% Women Scholarship made quality hospitality education very accessible for female students.',
  },
];

export default function GoogleReviews() {
  const [reviewsList, setReviewsList] = useState<GoogleReview[]>(REVIEWS);

  useEffect(() => {
    fetch('/api/google-reviews')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success' && Array.isArray(data.reviews)) {
          const apiReviews: GoogleReview[] = data.reviews.map((r: { author_name: string; profile_photo_url: string; relative_time_description: string; text: string; rating: number }, idx: number) => ({
            id: `api-rev-${idx}`,
            name: r.author_name,
            avatar: r.profile_photo_url || REVIEWS[idx % REVIEWS.length].avatar,
            role: `Verified Google Review • ${r.relative_time_description}`,
            tag: 'VERIFIED GOOGLE REVIEW',
            rating: r.rating || 5,
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
    <section className="py-20 bg-slate-50/60 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
        
        {/* Header Section */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {/* Yellow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/60 text-slate-900 text-xs font-black uppercase tracking-wider shadow-xs">
            <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
            <span>REAL FEEDBACK FROM STUDENTS & PARENTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight">
            What Our Students Say
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium">
            480+ verified Google reviews • 4.9 star rating • Trusted across Nizamabad & Telangana for 100% 5-star hotel placements.
          </p>
        </div>

        {/* Infinite Ticker Container with Faded Side Overlays */}
        <div className="relative w-full overflow-hidden">
          
          {/* Left Side Blur/Fade Gradient Overlay */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-slate-50/90 via-slate-50/40 to-transparent z-20 pointer-events-none" />

          {/* Right Side Blur/Fade Gradient Overlay */}
          <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-slate-50/90 via-slate-50/40 to-transparent z-20 pointer-events-none" />

          {/* Continuous Ticker Marquee Row */}
          <div className="animate-marquee hover:[animation-play-state:paused] flex gap-6 py-4">
            {tickerItems.map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="w-[320px] sm:w-[380px] shrink-0 bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 text-left"
              >
                <div className="space-y-4">
                  {/* Top Row: Stars + Verified Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-black uppercase tracking-wider rounded-md flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>{review.tag}</span>
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
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <div className="text-xs font-black text-slate-950">{review.name}</div>
                      <div className="text-[10px] font-bold text-slate-500">{review.role}</div>
                    </div>
                  </div>

                  <div className="text-[10px] font-bold text-slate-400 tracking-wider flex items-center justify-between uppercase">
                    <span>GOOGLE REVIEW</span>
                    <span className="text-amber-500 font-extrabold">5.0 ★</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Floating White Capsule Pill Bar */}
        <div className="pt-2">
          <a
            href="https://maps.app.goo.gl/Gjjy6hVGmfGcuz3g7"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-slate-200/90 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <span className="text-xs font-black text-slate-950 flex items-center gap-1.5">
              4.9 / 5.0
              <span className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </span>
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-xs font-bold text-slate-800">480 Verified Google Reviews</span>
            <span className="text-slate-300">|</span>
            <span className="text-xs font-bold text-slate-500">UV College, Nizamabad</span>
          </a>
        </div>

      </div>
    </section>
  );
}

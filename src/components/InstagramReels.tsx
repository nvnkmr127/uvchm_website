'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Heart, Eye, Volume2, VolumeX, X, Sparkles, Star, ArrowRight, RefreshCw, ChevronLeft, ChevronRight, MessageCircle, CheckCircle2, Flame } from 'lucide-react';

interface Reel {
  id: string;
  title: string;
  category: string;
  views: string;
  likes: string;
  comments: string;
  thumbnail: string;
  videoUrl: string;
  permalink?: string;
}

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

const FALLBACK_REELS: Reel[] = [
  {
    id: 'reel-1',
    title: '100% Placement Celebrations: Taj & Marriott Offer Letters',
    category: 'Campus Placements',
    views: '89.4K',
    likes: '5.6K',
    comments: '840',
    thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-happy-students-celebrating-graduation-day-43301-large.mp4',
    permalink: 'https://instagram.com',
  },
  {
    id: 'reel-2',
    title: 'Live Gourmet Cooking Competition & Executive Plating Battle',
    category: 'Culinary Practical',
    views: '45.2K',
    likes: '2.4K',
    comments: '312',
    thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-chef-cooking-a-dish-in-a-restaurant-kitchen-40742-large.mp4',
    permalink: 'https://instagram.com',
  },
  {
    id: 'reel-3',
    title: 'Flair Bartending Masterclass: Liquid Nitrogen Cocktail Demo',
    category: 'Mixology Workshop',
    views: '68.9K',
    likes: '4.1K',
    comments: '520',
    thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-bartender-preparing-a-cocktail-in-a-bar-42777-large.mp4',
    permalink: 'https://instagram.com',
  },
  {
    id: 'reel-4',
    title: 'Front Office Check-in Simulator Training',
    category: 'Hotel Administration',
    views: '32.1K',
    likes: '1.8K',
    comments: '215',
    thumbnail: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hotel-receptionist-greeting-a-guest-at-check-in-41484-large.mp4',
    permalink: 'https://instagram.com',
  },
  {
    id: 'reel-5',
    title: 'Artisanal Bakery & Chocolate Tempering Workshop',
    category: 'Bakery Arts',
    views: '54.1K',
    likes: '3.2K',
    comments: '410',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-chef-cooking-a-dish-in-a-restaurant-kitchen-40742-large.mp4',
    permalink: 'https://instagram.com',
  },
];

export default function InstagramReels() {
  const [reels, setReels] = useState<Reel[]>(FALLBACK_REELS);
  const [activeReel, setActiveReel] = useState<Reel | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isLiveSync, setIsLiveSync] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
    if (!token) return;

    async function fetchLiveReels() {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,like_count,comments_count&access_token=${token}`
        );
        const data = await response.json();

        if (data && data.data && Array.isArray(data.data) && data.data.length > 0) {
          const liveItems: Reel[] = data.data.map((item: any) => ({
            id: item.id,
            title: item.caption || 'UVCHM Official Instagram Reel',
            category: 'Live Feed',
            views: 'Live Sync',
            likes: item.like_count ? `${item.like_count}` : '1.2K',
            comments: item.comments_count ? `${item.comments_count}` : '180',
            thumbnail: item.thumbnail_url || item.media_url || FALLBACK_REELS[0].thumbnail,
            videoUrl: item.media_type === 'VIDEO' ? item.media_url : FALLBACK_REELS[0].videoUrl,
            permalink: item.permalink || 'https://instagram.com',
          }));

          setReels(liveItems);
          setIsLiveSync(true);
        }
      } catch (error) {
        console.error('Failed to sync live Instagram Graph API reels:', error);
      }
    }

    fetchLiveReels();
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const featuredReel = reels[0];
  const streamReels = reels.slice(1);

  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-pink-50/70 via-purple-50/40 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 border border-pink-300 text-pink-700 text-xs font-black uppercase tracking-wider shadow-xs">
            <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
            <span>@UVCHM_OFFICIAL • INSTAGRAM REELS SPOTLIGHT</span>
            {isLiveSync && (
              <span className="flex items-center gap-1 ml-1 px-2.5 py-0.5 bg-emerald-600 text-white text-[9px] font-black rounded-full animate-pulse">
                <RefreshCw className="w-2.5 h-2.5 animate-spin" /> LIVE GRAPH API SYNC
              </span>
            )}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Watch Our <span className="text-pink-600">Featured Campus Reels</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto font-medium">
            Daily practicals, masterclasses, and placement celebrations live from UVCHM campus.
          </p>
        </div>

        {/* Asymmetrical Hybrid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Featured Big Reel Spotlight Card (5 Columns) */}
          <div className="lg:col-span-5 relative">
            <div
              onClick={() => setActiveReel(featuredReel)}
              className="relative h-full min-h-[440px] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-950 cursor-pointer group hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-6 text-white"
            >
              <img
                src={featuredReel.thumbnail}
                alt={featuredReel.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

              {/* Top Featured Pill */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3.5 py-1 bg-gradient-to-r from-pink-600 to-rose-600 text-white text-[10px] font-black uppercase rounded-full shadow-lg flex items-center gap-1.5 animate-pulse">
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  <span>FEATURED REEL</span>
                </span>
                <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold rounded-full">
                  @uvchm_official
                </span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="relative z-10 my-auto text-center">
                <div className="w-20 h-20 rounded-full bg-pink-600/90 text-white flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform border-4 border-white/30">
                  <Play className="w-9 h-9 fill-current ml-1" />
                </div>
              </div>

              {/* Bottom Featured Title & Stats */}
              <div className="relative z-10 space-y-2 text-left">
                <div className="flex items-center gap-3 text-xs font-black text-pink-300">
                  <span>👁️ {featuredReel.views} Views</span>
                  <span>❤️ {featuredReel.likes} Likes</span>
                </div>
                <h3 className="text-lg font-black text-white leading-tight">
                  {featuredReel.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: Horizontal Carousel Stream (7 Columns) */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
            
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-slate-700 tracking-wider">
                MORE POPULAR REELS
              </span>

              {/* Carousel Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={scrollLeft}
                  className="w-10 h-10 rounded-full bg-white border border-slate-300 hover:border-pink-600 text-slate-800 hover:text-pink-600 flex items-center justify-center shadow-sm hover:scale-105 transition-all"
                  title="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={scrollRight}
                  className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center shadow-md shadow-pink-600/30 hover:scale-105 transition-all"
                  title="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Horizontal Reels Stream */}
            <div
              ref={carouselRef}
              className="flex space-x-4 overflow-x-auto scrollbar-none pb-2 snap-x snap-mandatory scroll-smooth"
            >
              {streamReels.map((reel) => (
                <div
                  key={reel.id}
                  onClick={() => setActiveReel(reel)}
                  className="w-[220px] sm:w-[240px] shrink-0 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer group border-2 border-slate-200 hover:border-pink-500 hover:-translate-y-2 bg-white snap-start relative flex flex-col justify-between"
                >
                  <div className="relative aspect-[9/14] overflow-hidden bg-slate-900">
                    <img
                      src={reel.thumbnail}
                      alt={reel.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2.5 py-0.5 bg-pink-600 text-white text-[9px] font-black uppercase rounded-full shadow-md">
                        {reel.category}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-pink-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-[10px] font-bold z-10">
                      <span>👁️ {reel.views}</span>
                      <span className="text-pink-400">❤️ {reel.likes}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-white space-y-1 text-left border-t border-slate-100">
                    <h4 className="text-xs font-black text-slate-950 leading-tight line-clamp-2 group-hover:text-pink-600 transition-colors">
                      {reel.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Action Banner */}
            <div className="pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-slate-950 hover:bg-pink-600 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>FOLLOW @UVCHM_OFFICIAL ON INSTAGRAM</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Video Modal Player */}
      {activeReel && (
        <div
          onClick={(e) => e.target === e.currentTarget && setActiveReel(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-sm aspect-[9/16] max-h-[85vh] sm:max-h-[90vh] bg-black rounded-3xl overflow-hidden shadow-2xl border-2 border-pink-500/40 my-auto flex flex-col justify-between">
            
            <button
              onClick={() => setActiveReel(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-pink-600 transition-colors active:scale-95"
              aria-label="Close video player"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-pink-600 transition-colors active:scale-95"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>

            <video
              src={activeReel.videoUrl}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent text-white space-y-1.5 sm:space-y-2 rounded-2xl border border-white/10 z-10">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 sm:px-2.5 bg-pink-600 text-white text-[8px] sm:text-[9px] font-black uppercase rounded-full">
                  {activeReel.category}
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-pink-400">@uvchm_official</span>
              </div>
              <h4 className="text-[11px] sm:text-xs font-black leading-snug line-clamp-2">{activeReel.title}</h4>
              <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-bold text-slate-300 pt-0.5">
                <span>👁️ {activeReel.views} Views</span>
                <span className="text-pink-400">❤️ {activeReel.likes} Likes</span>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

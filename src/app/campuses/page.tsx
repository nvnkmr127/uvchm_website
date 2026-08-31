'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building2, PlayCircle, MapPin, Sparkles, Navigation, X, ChevronLeft, ChevronRight, Maximize2, Filter, Users } from 'lucide-react';
import ApplyButton from '@/components/ApplyButton';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import YouTube from 'react-youtube';

const campuses = [
  {
    id: 0,
    name: 'North Campus',
    type: 'North Campus',
    image: '/college.png',
    desc: 'The North Campus hub featuring core administrative offices, practical kitchens, housekeeping suites, and service training labs.',
    accent: 'from-[#E80088] to-[#90268B]'
  },
  {
    id: 1,
    name: 'South Campus',
    type: 'South Campus',
    image: '/images/bhm_premium.jpg',
    desc: 'A dedicated hub for hands-on 5-star luxury labs, simulated hotel environments, and technical skill development.',
    accent: 'from-[#0D9488] to-[#0F766E]'
  }
];

const horizontalTours = [
  { id: 0, title: 'North Wing Tour', duration: 'Youtube', thumbnail: 'https://img.youtube.com/vi/IeMWp01Giy0/maxresdefault.jpg', category: 'Campus Tour', videoId: 'IeMWp01Giy0' },
  { id: 1, title: 'South Campus Tour', duration: 'Youtube', thumbnail: 'https://img.youtube.com/vi/JkkjJMzBMeg/maxresdefault.jpg', category: 'Campus Tour', videoId: 'JkkjJMzBMeg' },
  { id: 2, title: 'North Campus Overview', duration: 'Youtube', thumbnail: 'https://img.youtube.com/vi/lcgYcWxZSRg/maxresdefault.jpg', category: 'Campus Tour', videoId: 'lcgYcWxZSRg' },
  { id: 3, title: 'Practical Training', duration: 'Youtube', thumbnail: 'https://img.youtube.com/vi/d8Ww-xM1iu8/maxresdefault.jpg', category: 'Facilities', videoId: 'd8Ww-xM1iu8' },
  { id: 4, title: 'Caesar Salad by Students', duration: 'Youtube', thumbnail: 'https://img.youtube.com/vi/qfNDziESHbg/maxresdefault.jpg', category: 'Student Work', videoId: 'qfNDziESHbg' },
  { id: 5, title: 'Culinary Practical Class', duration: 'Youtube', thumbnail: 'https://img.youtube.com/vi/WC-c4s4U88U/maxresdefault.jpg', category: 'Practical Class', videoId: 'WC-c4s4U88U' },
  { id: 6, title: 'Inside UVCHM Practicals', duration: 'Youtube', thumbnail: 'https://img.youtube.com/vi/1K5zkCMg6zg/maxresdefault.jpg', category: 'Student Life', videoId: '1K5zkCMg6zg' },
  { id: 7, title: 'Full Practical Tour', duration: 'Youtube', thumbnail: 'https://img.youtube.com/vi/jcra2qan1Jc/maxresdefault.jpg', category: 'Facilities', videoId: 'jcra2qan1Jc' },
];

const verticalTours = [
  { id: 0, title: 'Campus Life', duration: 'Youtube', thumbnail: 'https://img.youtube.com/vi/z7gQszCUD7Y/hqdefault.jpg', category: 'Shorts', videoId: 'z7gQszCUD7Y' },
  { id: 1, title: 'Student Activity', duration: 'Youtube', thumbnail: 'https://img.youtube.com/vi/8Fw5ESZYaAg/hqdefault.jpg', category: 'Shorts', videoId: '8Fw5ESZYaAg' },
  { id: 2, title: 'Skill Training', duration: 'Youtube', thumbnail: 'https://img.youtube.com/vi/Kny1HKR29ZA/hqdefault.jpg', category: 'Shorts', videoId: 'Kny1HKR29ZA' },
  { id: 3, title: 'Practical Labs', duration: 'Youtube', thumbnail: 'https://img.youtube.com/vi/oHd_AR5C994/hqdefault.jpg', category: 'Shorts', videoId: 'oHd_AR5C994' },
  { id: 4, title: 'College Events', duration: 'Youtube', thumbnail: 'https://img.youtube.com/vi/FhWMonPMHl8/hqdefault.jpg', category: 'Shorts', videoId: 'FhWMonPMHl8' },
  { id: 5, title: 'Campus Highlights', duration: 'Youtube', thumbnail: 'https://img.youtube.com/vi/WZBLhIQUoGU/hqdefault.jpg', category: 'Shorts', videoId: 'WZBLhIQUoGU' },
];

const facultyExperiences = [
  { id: 6, title: 'Faculty Experience', duration: 'Youtube', thumbnail: 'https://img.youtube.com/vi/37ZVkNUyRXI/hqdefault.jpg', category: 'Faculty', videoId: '37ZVkNUyRXI' },
  { id: 7, title: 'Faculty Insights', duration: 'Youtube', thumbnail: 'https://img.youtube.com/vi/PbFgi7NQj_Q/hqdefault.jpg', category: 'Faculty', videoId: 'PbFgi7NQj_Q' },
  { id: 8, title: 'Faculty Spotlight', duration: 'Youtube', thumbnail: 'https://img.youtube.com/vi/yt4AgM8are8/hqdefault.jpg', category: 'Faculty', videoId: 'yt4AgM8are8' },
  { id: 9, title: 'Faculty Interview', duration: 'Youtube', thumbnail: 'https://img.youtube.com/vi/HssWrOM3N6s/hqdefault.jpg', category: 'Faculty', videoId: 'HssWrOM3N6s' },
  { id: 10, title: 'Faculty Message', duration: 'Youtube', thumbnail: 'https://img.youtube.com/vi/XBiDy8jfEtQ/hqdefault.jpg', category: 'Faculty', videoId: 'XBiDy8jfEtQ' },
  { id: 11, title: 'Teaching Philosophy', duration: 'Youtube', thumbnail: 'https://img.youtube.com/vi/-aNZ8SQtris/hqdefault.jpg', category: 'Faculty', videoId: '-aNZ8SQtris' },
  { id: 12, title: 'Faculty Advice', duration: 'Youtube', thumbnail: 'https://img.youtube.com/vi/LslG77yoWUM/hqdefault.jpg', category: 'Faculty', videoId: 'LslG77yoWUM' },
  { id: 13, title: 'Academic Journey', duration: 'Youtube', thumbnail: 'https://img.youtube.com/vi/wKDYaJevd24/hqdefault.jpg', category: 'Faculty', videoId: 'wKDYaJevd24' },
];

const allImages = [
  // North Campus
  { src: '/college.png', alt: 'UVCHM Main Campus Building', campus: 'North Campus', lab: 'General' },
  { src: '/images/bhm_premium.jpg', alt: 'Premium BHM Facilities', campus: 'North Campus', lab: 'General' },
  { src: '/images/IMG_8427.JPG', alt: 'Campus Infrastructure & Courtyard', campus: 'North Campus', lab: 'General' },
  { src: '/images/IMG_9585.JPG', alt: 'Academic & Training Block', campus: 'North Campus', lab: 'General' },
  { src: '/images/IMG_9641.JPG', alt: 'Student Practical Training Area', campus: 'North Campus', lab: 'General' },
  { src: '/images/IMG_9724.JPG', alt: 'Campus View & Facilities', campus: 'North Campus', lab: 'General' },
  { src: '/College Photos/North Campus/WhatsApp Image 2025-02-04 at 12.53.02 PM.jpeg', alt: 'North Campus Main Exterior', campus: 'North Campus', lab: 'General' },
  { src: '/College Photos/North Campus/WhatsApp Image 2025-02-01 at 11.40.45 AM (2).jpeg', alt: 'North Campus Quadrangle', campus: 'North Campus', lab: 'General' },
  { src: '/College Photos/North Campus/WhatsApp Image 2025-02-04 at 12.53.03 PM.jpeg', alt: 'North Campus Academic Corridor', campus: 'North Campus', lab: 'General' },
  { src: '/College Photos/North Campus/IMG_2726.jpeg', alt: 'North Campus Culinary Practical', campus: 'North Campus', lab: 'Culinary' },
  { src: '/College Photos/North Campus/IMG_3615.jpeg', alt: 'North Campus Kitchen Training', campus: 'North Campus', lab: 'Culinary' },
  { src: '/College Photos/North Campus/IMG_8720.jpeg', alt: 'Chef Demo & Practical Station', campus: 'North Campus', lab: 'Culinary' },
  { src: '/College Photos/North Campus/IMG_3013.jpeg', alt: 'Quantity Kitchen Production', campus: 'North Campus', lab: 'Culinary' },
  { src: '/College Photos/North Campus/IMG_4145.jpeg', alt: 'Student Bakery & Cooking Session', campus: 'North Campus', lab: 'Culinary' },
  { src: '/College Photos/North Campus/IMG_3360.jpeg', alt: 'Professional Kitchen Workstations', campus: 'North Campus', lab: 'Culinary' },
  { src: '/College Photos/North Campus/IMG_4276.jpeg', alt: 'North Campus F&B Service Training', campus: 'North Campus', lab: 'Restaurant' },
  { src: '/College Photos/North Campus/IMG_4290.jpeg', alt: 'Dining & Service Practice Lab', campus: 'North Campus', lab: 'Restaurant' },
  { src: '/College Photos/North Campus/IMG_2548.jpeg', alt: 'Restaurant Table Setup Practice', campus: 'North Campus', lab: 'Restaurant' },
  { src: '/College Photos/North Campus/IMG_2560.jpeg', alt: 'North Campus Housekeeping Suite', campus: 'North Campus', lab: 'Housekeeping' },
  { src: '/College Photos/North Campus/IMG_4246.jpeg', alt: 'Housekeeping Practical Area', campus: 'North Campus', lab: 'Housekeeping' },
  { src: '/College Photos/North Campus/IMG_4248.jpeg', alt: 'Linen & Room Maintenance Lab', campus: 'North Campus', lab: 'Housekeeping' },

  // South Campus
  { src: '/images/culinary_basic.jpg', alt: 'Basic Culinary Lab', campus: 'South Campus', lab: 'Culinary' },
  { src: '/images/model_bar_real.jpg', alt: 'Model Bar Training', campus: 'South Campus', lab: 'Bar' },
  { src: '/images/front_office_real.jpg', alt: 'Front Office Suite', campus: 'South Campus', lab: 'Front Office' },
  { src: '/images/housekeeping_training_new.jpg', alt: 'Housekeeping Lab', campus: 'South Campus', lab: 'Housekeeping' },
  { src: '/images/culinary_bakery_display.jpg', alt: 'Bakery & Patisserie Display', campus: 'South Campus', lab: 'Bakery' },
  { src: '/images/front_office_lab.jpg', alt: 'Model Guest Room Suite', campus: 'South Campus', lab: 'Front Office' },
  { src: '/images/bartending_training_new.jpg', alt: 'Bartending Practical Class', campus: 'South Campus', lab: 'Bar' },
  { src: '/images/culinary_flambe.jpg', alt: 'Culinary Flambe Technique', campus: 'South Campus', lab: 'Culinary' },
  { src: '/images/culinary_sushi.jpg', alt: 'Sushi Preparation Training', campus: 'South Campus', lab: 'Culinary' },
  { src: '/images/culinary_training_new.jpg', alt: 'Professional Kitchen Training', campus: 'South Campus', lab: 'Culinary' },
  { src: '/images/fnb_training_new.jpg', alt: 'F&B Fine Dining Training', campus: 'South Campus', lab: 'Restaurant' },
  { src: '/images/model_bar_restaurant.jpg', alt: 'Restaurant & Bar Lounge', campus: 'South Campus', lab: 'Restaurant' },
  { src: '/College Photos/South/IMG_8167.jpeg', alt: 'South Campus Practical Hub', campus: 'South Campus', lab: 'General' },
  { src: '/College Photos/South/IMG_8166.jpeg', alt: 'South Campus Hospitality Suite', campus: 'South Campus', lab: 'General' },
  { src: '/College Photos/South/IMG_8170.jpeg', alt: 'South Campus Training Lab', campus: 'South Campus', lab: 'General' },
  { src: '/College Photos/South/IMG_8177.jpeg', alt: 'South Campus Student Activity Area', campus: 'South Campus', lab: 'General' },
  { src: '/College Photos/South/IMG_8157.jpeg', alt: 'South Campus Practical Class', campus: 'South Campus', lab: 'General' },
  { src: '/College Photos/South/IMG_8182.jpeg', alt: 'South Campus Practical Session', campus: 'South Campus', lab: 'General' },
  { src: '/College Photos/South/17.jpg.jpeg', alt: 'South Campus Lab Facility', campus: 'South Campus', lab: 'General' },
  { src: '/College Photos/South/22.jpg.jpeg', alt: 'South Campus Student Workshop', campus: 'South Campus', lab: 'General' }
];

const northCampusImages = allImages.filter(img => img.campus === 'North Campus');
const southCampusImages = allImages.filter(img => img.campus === 'South Campus');
const row1 = northCampusImages;
const row2 = southCampusImages;

export default function CampusesPage() {
  const [activeCampus, setActiveCampus] = useState(0);
  const activeData = campuses[activeCampus];

  // Video Playlist State
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const activeVideo = horizontalTours[activeVideoIndex];
  
  // Vertical Shorts State
  const [playingShortId, setPlayingShortId] = useState<number | null>(null);
  const [playingFacultyId, setPlayingFacultyId] = useState<number | null>(null);

  // Filter State
  const [filterCampus, setFilterCampus] = useState('All');
  
  const campusOptions = ['All', 'North Campus', 'South Campus'];

  const filteredImages = allImages.filter(img => {
    return filterCampus === 'All' || img.campus === filterCampus;
  });

  const isFiltered = filterCampus !== 'All';

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeImageList = isFiltered ? filteredImages : allImages;

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, activeImageList.length]);

  const openLightbox = (imageSrc: string) => {
    const index = activeImageList.findIndex(img => img.src === imageSrc);
    if (index !== -1) {
      setCurrentIndex(index);
      setLightboxOpen(true);
    }
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % activeImageList.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? activeImageList.length - 1 : prev - 1));
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-pink-600 selection:text-white overflow-hidden">
      <Navbar />

      {/* Interactive Split-Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 overflow-hidden bg-slate-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCampus}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0"
          >
            <Image 
              src={activeData.image} 
              alt={activeData.name} 
              fill 
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-wider backdrop-blur-md"
            >
              <Building2 className="w-4 h-4 text-[#E80088]" />
              <span>Two Premium Locations</span>
            </motion.div>
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-white">
                Discover Our <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E80088] via-[#90268B] to-[#E80088] animate-gradient-x">
                  Campuses
                </span>
              </h1>
              <p className="text-slate-300 text-lg sm:text-xl font-medium max-w-2xl leading-relaxed">
                Step into 5-star hotel environments right from day one. Experience luxury infrastructure designed for the hospitality leaders of tomorrow.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 w-full">
              {campuses.map((campus, idx) => (
                <button
                  key={campus.id}
                  onClick={() => setActiveCampus(idx)}
                  className={`relative px-5 py-4 sm:px-6 rounded-2xl flex flex-col items-start gap-1 transition-all duration-300 border backdrop-blur-md overflow-hidden group w-full sm:w-auto text-left ${
                    activeCampus === idx 
                      ? 'border-white/40 bg-white/10 shadow-2xl scale-[1.02] sm:scale-105' 
                      : 'border-white/10 bg-white/5 hover:bg-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  {activeCampus === idx && (
                    <motion.div 
                      layoutId="activeGlow"
                      className={`absolute inset-0 bg-gradient-to-r ${campus.accent} opacity-20`} 
                    />
                  )}
                  <span className={`text-[10px] font-black uppercase tracking-widest ${activeCampus === idx ? 'text-pink-400' : 'text-slate-400'}`}>
                    {campus.type}
                  </span>
                  <span className="text-white font-bold text-sm sm:text-base relative z-10">
                    {campus.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="pt-2">
              <Link 
                href="/facilities" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-pink-600/30 transition-all hover:scale-105"
              >
                <Building2 className="w-4 h-4" />
                <span>EXPLORE CAMPUS FACILITIES</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-8 lg:mt-0 max-w-sm mx-auto w-full lg:max-w-none z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCampus}
                initial={{ opacity: 0, x: 20, rotateY: -10 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -20, rotateY: 10 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900/50 backdrop-blur-xl p-3 sm:p-4"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group">
                  <Image src={activeData.image} alt={activeData.name} fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 space-y-2">
                    <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                      <MapPin className="w-4 h-4 text-pink-500" /> Location Profile
                    </div>
                    <p className="text-white text-sm font-bold leading-snug">
                      {activeData.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#E80088] rounded-full mix-blend-screen filter blur-[80px] opacity-40 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#0D9488] rounded-full mix-blend-screen filter blur-[80px] opacity-30 animate-pulse"></div>
          </div>
        </div>
      </section>


      {/* Cinematic Video Portal & Playlist */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center space-y-4 mb-10 sm:mb-16 px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">Immersive Virtual Tours</h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">Step inside our facilities before you even arrive. Select a video from the playlist below to explore.</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto px-0 sm:px-6 lg:px-8">
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 rounded-[3rem] blur-2xl opacity-10 sm:opacity-20 animate-pulse hidden sm:block"></div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeVideoIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative sm:rounded-[2rem] overflow-hidden shadow-2xl sm:border-4 border-white/50 bg-slate-900 mb-6 sm:mb-8 pointer-events-none transition-all duration-500 aspect-video"
            >
              {!activeVideo.videoId ? (
                <>
                  <Image src={activeVideo.thumbnail} alt={activeVideo.title} fill sizes="(max-width: 1024px) 100vw, 1000px" className="object-cover opacity-70" />
                  <div className="absolute inset-0 bg-slate-950/20" />
                  
                  <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-black uppercase tracking-widest mb-2 sm:mb-3">
                        <Navigation className="w-3 h-3" /> {activeVideo.category}
                      </div>
                      <div className="text-white font-black text-xl sm:text-2xl md:text-4xl drop-shadow-lg">{activeVideo.title}</div>
                    </div>
                    <div className="text-white/80 font-bold text-xs sm:text-sm tracking-widest uppercase">
                      Coming Soon
                    </div>
                  </div>
                </>
              ) : (
                <YouTube
                  videoId={activeVideo.videoId}
                  opts={{
                    height: '100%',
                    width: '100%',
                    playerVars: {
                      autoplay: 1,
                      mute: 1,
                      controls: 0,
                      modestbranding: 1,
                      rel: 0
                    },
                  }}
                  onEnd={() => {
                    const nextIndex = (activeVideoIndex + 1) % horizontalTours.length;
                    setActiveVideoIndex(nextIndex);
                  }}
                  className="absolute inset-0 w-full h-full pointer-events-auto"
                  iframeClassName="absolute inset-0 w-full h-full border-0"
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Playlist Thumbnails */}
          <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-6 px-4 sm:px-0 snap-x snap-mandatory hide-scrollbar">
            {horizontalTours.map((video, idx) => (
              <button
                key={video.id}
                onClick={() => setActiveVideoIndex(idx)}
                className={`relative w-[75vw] sm:w-64 shrink-0 snap-center sm:snap-start rounded-2xl overflow-hidden aspect-video transition-all duration-300 border-2 ${
                  activeVideoIndex === idx 
                    ? 'border-pink-500 shadow-[0_0_15px_rgba(232,0,136,0.4)] scale-100 opacity-100' 
                    : 'border-transparent shadow-sm scale-95 opacity-60 hover:opacity-100 hover:scale-100'
                }`}
              >
                <Image src={video.thumbnail} alt={video.title} fill sizes="256px" className="object-cover" />
                <div className={`absolute inset-0 transition-colors ${activeVideoIndex === idx ? 'bg-black/10' : 'bg-black/40 hover:bg-black/20'}`} />
                
                {activeVideoIndex === idx && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-pink-600/90 flex items-center justify-center backdrop-blur-sm shadow-md">
                      <PlayCircle className="w-5 h-5 text-white ml-0.5" />
                    </div>
                  </div>
                )}
                
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent text-left">
                  <div className="text-[9px] font-black text-pink-400 uppercase tracking-wider mb-0.5">{video.category}</div>
                  <div className="text-white font-bold text-xs line-clamp-1">{video.title}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Shorts Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-3">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" />
            Campus Shorts
          </h3>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">Quick glimpses of life and learning at UVCHM.</p>
        </div>

        <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-12 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory hide-scrollbar">
          {verticalTours.map((short) => (
            <div 
              key={short.id} 
              className="relative w-64 sm:w-80 shrink-0 snap-center sm:snap-start aspect-[9/16] rounded-[2rem] overflow-hidden bg-white border border-slate-100 group shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300"
            >
              {playingShortId === short.id ? (
                <YouTube
                  videoId={short.videoId}
                  opts={{
                    height: '100%',
                    width: '100%',
                    playerVars: {
                      autoplay: 1,
                      mute: 0,
                      controls: 1,
                      modestbranding: 1,
                      rel: 0
                    },
                  }}
                  className="absolute inset-0 w-full h-full"
                  iframeClassName="absolute inset-0 w-full h-full border-0"
                />
              ) : (
                <>
                  <Image src={short.thumbnail} alt={short.title} fill sizes="320px" className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={() => setPlayingShortId(short.id)}>
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 rounded-full bg-white/20 border border-white/30 flex items-center justify-center backdrop-blur-md shadow-2xl"
                    >
                      <PlayCircle className="w-8 h-8 text-white ml-1 shadow-[0_0_15px_rgba(255,255,255,0.5)] rounded-full" />
                    </motion.div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                    <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-pink-500/80 backdrop-blur-sm rounded text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                      <PlayCircle className="w-3 h-3" /> {short.category}
                    </div>
                    <div className="text-white font-bold text-lg leading-tight drop-shadow-md">
                      {short.title}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
          
          {/* Placeholder for future shorts */}
          <div className="relative w-64 sm:w-80 shrink-0 snap-center sm:snap-start aspect-[9/16] rounded-[2rem] overflow-hidden bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-4 text-slate-400 group cursor-pointer hover:bg-slate-100 hover:border-slate-300 transition-colors">
            <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-8 h-8 text-slate-300 group-hover:text-pink-500 transition-colors" />
            </div>
            <p className="font-bold text-sm tracking-widest uppercase">More Shorts Coming</p>
          </div>
        </div>
      </section>

      {/* Faculty Experience Section */}
      <section className="py-16 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-3">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-500" />
            Faculty Experience
          </h3>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">Hear directly from our expert faculty about their teaching philosophy and industry insights.</p>
        </div>

        <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-12 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory hide-scrollbar">
          {facultyExperiences.map((faculty) => (
            <div 
              key={faculty.id} 
              className="relative w-64 sm:w-80 shrink-0 snap-center sm:snap-start aspect-[9/16] rounded-[2rem] overflow-hidden bg-white border border-slate-100 group shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300"
            >
              {playingFacultyId === faculty.id ? (
                <YouTube
                  videoId={faculty.videoId}
                  opts={{
                    height: '100%',
                    width: '100%',
                    playerVars: {
                      autoplay: 1,
                      mute: 0,
                      controls: 1,
                      modestbranding: 1,
                      rel: 0
                    },
                  }}
                  className="absolute inset-0 w-full h-full"
                  iframeClassName="absolute inset-0 w-full h-full border-0"
                />
              ) : (
                <>
                  <Image src={faculty.thumbnail} alt={faculty.title} fill sizes="320px" className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={() => setPlayingFacultyId(faculty.id)}>
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 rounded-full bg-white/20 border border-white/30 flex items-center justify-center backdrop-blur-md shadow-2xl"
                    >
                      <PlayCircle className="w-8 h-8 text-white ml-1 shadow-[0_0_15px_rgba(255,255,255,0.5)] rounded-full" />
                    </motion.div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                    <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-indigo-500/80 backdrop-blur-sm rounded text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                      <PlayCircle className="w-3 h-3" /> {faculty.category}
                    </div>
                    <div className="text-white font-bold text-lg leading-tight drop-shadow-md">
                      {faculty.title}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Expansive Gallery with Filters */}
      <section className="py-24 bg-slate-100 border-t border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-100 text-pink-700 text-xs font-black uppercase tracking-wider rounded-full border border-pink-200">
                <Sparkles className="w-4 h-4" />
                <span>Expansive Photo Gallery</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
                Designed for <br/> <span className="text-pink-600">5-Star Excellence</span>
              </h2>
            </div>
            <p className="text-slate-600 max-w-sm md:text-right font-medium">
              Click any image to enter full-screen mode. Use the filters below to explore specific facilities.
            </p>
          </div>

          {/* Filter UI */}
          <div className="pt-6 space-y-6 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700 shrink-0">
                <Filter className="w-4 h-4" /> Filter By:
              </div>
              
              <div className="flex flex-wrap gap-2">
                {campusOptions.map((campus) => (
                  <button
                    key={campus}
                    onClick={() => setFilterCampus(campus)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                      filterCampus === campus 
                        ? 'bg-slate-900 text-white shadow-md' 
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {campus}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Gallery Content */}
        {!isFiltered ? (
          /* Marquee Tracks (No Filters) */
          <div className="space-y-6">
            <div className="flex overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-100 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-100 to-transparent z-10 pointer-events-none"></div>
              <div className="animate-marquee flex gap-6 px-3">
                {[...row1, ...row1].map((img, idx) => (
                  <div 
                    key={`r1-${idx}`} 
                    onClick={() => openLightbox(img.src)}
                    className="relative w-80 h-56 sm:w-96 sm:h-64 rounded-3xl overflow-hidden shrink-0 cursor-zoom-in group shadow-sm hover:shadow-xl transition-shadow bg-slate-900"
                  >
                    <Image src={img.src} alt={img.alt} fill sizes="384px" className="object-cover group-hover:scale-110 group-hover:opacity-80 transition-all duration-500" />
                    <div className="absolute inset-0 bg-pink-600/0 group-hover:bg-pink-600/20 transition-colors flex items-center justify-center">
                      <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100 duration-300" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-end items-end">
                      <span className="text-white/60 text-[10px] font-black uppercase tracking-widest bg-black/40 px-2 py-0.5 rounded-sm">{img.lab}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-100 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-100 to-transparent z-10 pointer-events-none"></div>
              <div className="animate-marquee-reverse flex gap-6 px-3">
                {[...row2, ...row2].map((img, idx) => (
                  <div 
                    key={`r2-${idx}`}
                    onClick={() => openLightbox(img.src)}
                    className="relative w-80 h-56 sm:w-96 sm:h-64 rounded-3xl overflow-hidden shrink-0 cursor-zoom-in group shadow-sm hover:shadow-xl transition-shadow bg-slate-900"
                  >
                    <Image src={img.src} alt={img.alt} fill sizes="384px" className="object-cover group-hover:scale-110 group-hover:opacity-80 transition-all duration-500" />
                    <div className="absolute inset-0 bg-pink-600/0 group-hover:bg-pink-600/20 transition-colors flex items-center justify-center">
                      <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100 duration-300" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-end items-end">
                      <span className="text-white/60 text-[10px] font-black uppercase tracking-widest bg-black/40 px-2 py-0.5 rounded-sm">{img.lab}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Grid View (Filters Applied) */
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="popLayout">
              {filteredImages.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  className="py-20 text-center space-y-4"
                >
                  <div className="text-slate-400">No images match your selected filters.</div>
                  <button 
                    onClick={() => setFilterCampus('All')}
                    className="text-pink-600 font-bold hover:underline"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              ) : (
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredImages.map((img) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      key={img.src}
                      onClick={() => openLightbox(img.src)}
                      className="relative h-64 rounded-3xl overflow-hidden cursor-zoom-in group shadow-sm hover:shadow-xl transition-shadow bg-slate-900"
                    >
                      <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-110 group-hover:opacity-80 transition-all duration-500" />
                      <div className="absolute inset-0 bg-pink-600/0 group-hover:bg-pink-600/20 transition-colors flex items-center justify-center">
                        <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100 duration-300" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end">
                        <div className="flex gap-2">
                           <span className="text-white text-[9px] font-black uppercase tracking-widest bg-black/60 px-2 py-0.5 rounded-sm">{img.lab}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* Modern CTA */}
      <section className="py-24 text-center px-4 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('/images/front_office_real.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-950" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl sm:text-5xl font-black text-white">Ready to Step Inside?</h2>
          <p className="text-slate-300 text-lg font-medium">Book an in-person campus walkthrough with our department heads and experience the infrastructure yourself.</p>
          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <ApplyButton
              text="BOOK A CAMPUS VISIT"
              className="px-10 py-4 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-black text-sm uppercase tracking-wider rounded-full shadow-2xl shadow-pink-600/40 inline-flex items-center gap-3 transition-all hover:scale-105"
            />
            <Link
              href="/facilities"
              className="px-8 py-4 border border-white/30 hover:border-white hover:bg-white/10 text-white font-black text-sm uppercase tracking-wider rounded-full backdrop-blur-md inline-flex items-center gap-2 transition-all hover:scale-105"
            >
              <Building2 className="w-4 h-4 text-pink-500" />
              <span>EXPLORE FACILITIES</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Full Screen Lightbox Overlay */}
      <AnimatePresence>
        {lightboxOpen && activeImageList.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
              onClick={() => setLightboxOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            {activeImageList.length > 1 && (
              <>
                <button 
                  className="absolute left-4 sm:left-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 hover:scale-110"
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <button 
                  className="absolute right-4 sm:right-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 hover:scale-110"
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            <div 
              className="relative w-[90vw] h-[80vh] max-w-6xl flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()} 
            >
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="relative w-full h-full"
              >
                <Image 
                  src={activeImageList[currentIndex].src}
                  alt={activeImageList[currentIndex].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </motion.div>
              
              <div className="absolute bottom-0 translate-y-12 text-white text-center">
                <p className="font-bold text-xl flex items-center justify-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-pink-600/80 px-2 py-0.5 rounded-sm">{activeImageList[currentIndex].lab}</span>
                </p>
                {activeImageList.length > 1 && (
                  <p className="text-white/60 text-sm mt-1">{currentIndex + 1} of {activeImageList.length}</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building2, Sparkles, ArrowLeft, X, ChevronLeft, ChevronRight, Maximize2, Filter, Utensils, BedDouble, GlassWater, ShieldCheck, MapPin } from 'lucide-react';
import ApplyButton from '@/components/ApplyButton';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const labCategories = [
  { id: 'all', label: 'All Departments', icon: Building2 },
  { id: 'culinary-kitchen', label: 'Culinary & Kitchen', icon: Utensils },
  { id: 'front-office', label: 'Front Office & Suites', icon: BedDouble },
  { id: 'bartending-bar', label: 'Bartending & Dining', icon: GlassWater },
  { id: 'housekeeping-lab', label: 'Housekeeping & Linen', icon: ShieldCheck },
];



const allLabPhotos = [
  // NORTH CAMPUS - Kitchen / Culinary
  { src: '/College Photos/North Campus/IMG_2726.jpeg', labId: 'culinary-kitchen', campus: 'North Campus' },
  { src: '/College Photos/North Campus/IMG_3615.jpeg', labId: 'culinary-kitchen', campus: 'North Campus' },
  { src: '/College Photos/North Campus/IMG_8720.jpeg', labId: 'culinary-kitchen', campus: 'North Campus' },
  { src: '/College Photos/North Campus/IMG_3013.jpeg', labId: 'culinary-kitchen', campus: 'North Campus' },
  { src: '/College Photos/North Campus/IMG_4145.jpeg', labId: 'culinary-kitchen', campus: 'North Campus' },
  { src: '/College Photos/North Campus/IMG_3360.jpeg', labId: 'culinary-kitchen', campus: 'North Campus' },
  { src: '/College Photos/North Campus/IMG_3613.jpeg', labId: 'culinary-kitchen', campus: 'North Campus' },
  { src: '/College Photos/North Campus/IMG_2720.jpeg', labId: 'culinary-kitchen', campus: 'North Campus' },
  { src: '/College Photos/North Campus/IMG_4231.jpeg', labId: 'culinary-kitchen', campus: 'North Campus' },
  { src: '/College Photos/North Campus/IMG_3805.jpeg', labId: 'culinary-kitchen', campus: 'North Campus' },
  { src: '/College Photos/North Campus/IMG_2828.jpeg', labId: 'culinary-kitchen', campus: 'North Campus' },
  { src: '/College Photos/North Campus/IMG_2941.jpeg', labId: 'culinary-kitchen', campus: 'North Campus' },

  // NORTH CAMPUS - Service & Dining
  { src: '/College Photos/North Campus/IMG_4276.jpeg', labId: 'bartending-bar', campus: 'North Campus' },
  { src: '/College Photos/North Campus/IMG_4290.jpeg', labId: 'bartending-bar', campus: 'North Campus' },
  { src: '/College Photos/North Campus/IMG_2548.jpeg', labId: 'bartending-bar', campus: 'North Campus' },
  { src: '/College Photos/North Campus/IMG_4279.jpeg', labId: 'bartending-bar', campus: 'North Campus' },
  { src: '/College Photos/North Campus/IMG_4278.jpeg', labId: 'bartending-bar', campus: 'North Campus' },

  // NORTH CAMPUS - Housekeeping
  { src: '/College Photos/North Campus/IMG_2560.jpeg', labId: 'housekeeping-lab', campus: 'North Campus' },
  { src: '/College Photos/North Campus/IMG_4246.jpeg', labId: 'housekeeping-lab', campus: 'North Campus' },
  { src: '/College Photos/North Campus/IMG_4248.jpeg', labId: 'housekeeping-lab', campus: 'North Campus' },
  { src: '/College Photos/North Campus/IMG_2563.jpeg', labId: 'housekeeping-lab', campus: 'North Campus' },
  { src: '/College Photos/North Campus/IMG_4252.jpeg', labId: 'housekeeping-lab', campus: 'North Campus' },
  { src: '/College Photos/North Campus/IMG_4170.jpeg', labId: 'housekeeping-lab', campus: 'North Campus' },
  { src: '/College Photos/North Campus/IMG_4254.jpeg', labId: 'housekeeping-lab', campus: 'North Campus' },

  // NORTH CAMPUS - Front Office & Infrastructure
  { src: '/college.png', labId: 'front-office', campus: 'North Campus' },
  { src: '/images/bhm_premium.jpg', labId: 'front-office', campus: 'North Campus' },
  { src: '/images/IMG_8427.JPG', labId: 'front-office', campus: 'North Campus' },
  { src: '/images/IMG_9585.JPG', labId: 'front-office', campus: 'North Campus' },
  { src: '/images/IMG_9641.JPG', labId: 'front-office', campus: 'North Campus' },
  { src: '/College Photos/North Campus/WhatsApp Image 2025-02-04 at 12.53.02 PM.jpeg', labId: 'front-office', campus: 'North Campus' },
  { src: '/College Photos/North Campus/WhatsApp Image 2025-02-01 at 11.40.45 AM (2).jpeg', labId: 'front-office', campus: 'North Campus' },

  // SOUTH CAMPUS - Culinary & Kitchen
  { src: '/images/culinary_basic.jpg', labId: 'culinary-kitchen', campus: 'South Campus' },
  { src: '/images/culinary_flambe.jpg', labId: 'culinary-kitchen', campus: 'South Campus' },
  { src: '/images/culinary_sushi.jpg', labId: 'culinary-kitchen', campus: 'South Campus' },
  { src: '/images/culinary_training_new.jpg', labId: 'culinary-kitchen', campus: 'South Campus' },
  { src: '/images/culinary_bakery_display.jpg', labId: 'culinary-kitchen', campus: 'South Campus' },

  // SOUTH CAMPUS - Front Office & Guest Suites
  { src: '/images/front_office_real.jpg', labId: 'front-office', campus: 'South Campus' },
  { src: '/images/front_office_lab.jpg', labId: 'front-office', campus: 'South Campus' },
  { src: '/College Photos/South/IMG_8166.jpeg', labId: 'front-office', campus: 'South Campus' },
  { src: '/College Photos/South/IMG_8170.jpeg', labId: 'front-office', campus: 'South Campus' },
  { src: '/College Photos/South/IMG_8177.jpeg', labId: 'front-office', campus: 'South Campus' },
  { src: '/College Photos/South/IMG_8157.jpeg', labId: 'front-office', campus: 'South Campus' },

  // SOUTH CAMPUS - Bartending & Mixology Lounge
  { src: '/images/model_bar_real.jpg', labId: 'bartending-bar', campus: 'South Campus' },
  { src: '/images/bartending_training_new.jpg', labId: 'bartending-bar', campus: 'South Campus' },
  { src: '/images/model_bar_restaurant.jpg', labId: 'bartending-bar', campus: 'South Campus' },
  { src: '/images/fnb_training_new.jpg', labId: 'bartending-bar', campus: 'South Campus' },

  // SOUTH CAMPUS - Housekeeping & Facilities
  { src: '/images/housekeeping_training_new.jpg', labId: 'housekeeping-lab', campus: 'South Campus' },
  { src: '/College Photos/South/IMG_8167.jpeg', labId: 'housekeeping-lab', campus: 'South Campus' },
  { src: '/College Photos/South/IMG_8182.jpeg', labId: 'housekeeping-lab', campus: 'South Campus' },
  { src: '/College Photos/South/17.jpg.jpeg', labId: 'housekeeping-lab', campus: 'South Campus' },
  { src: '/College Photos/South/22.jpg.jpeg', labId: 'housekeeping-lab', campus: 'South Campus' },
  { src: '/College Photos/South/27.JPG.jpeg', labId: 'housekeeping-lab', campus: 'South Campus' }
];

function GalleryContent() {
  const searchParams = useSearchParams();
  const initialLab = searchParams.get('lab') || 'all';

  const [activeLabTab, setActiveLabTab] = useState(initialLab);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const labParam = searchParams.get('lab');
    if (labParam) {
      setActiveLabTab(labParam);
    }
  }, [searchParams]);

  const filteredPhotos = allLabPhotos.filter(photo => {
    return activeLabTab === 'all' || photo.labId === activeLabTab;
  });

  const openLightbox = (idx: number) => {
    setCurrentIndex(idx);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredPhotos.length - 1 : prev - 1));
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-pink-600 selection:text-white">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-32 pb-16 bg-[#0D0D0D] text-white overflow-hidden border-b border-pink-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Link 
            href="/facilities" 
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-pink-400 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Facilities
          </Link>
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Campus <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Facilities Photo Gallery</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl">
              Strictly segregated practical training photos from North Campus and South Campus facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Segregated Filters & Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Department / Lab Filter */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <span className="text-xs font-black uppercase tracking-wider text-slate-400 shrink-0 flex items-center gap-1.5">
            <Filter className="w-4 h-4 text-slate-500" /> Select Department:
          </span>
          <div className="flex flex-wrap gap-2">
            {labCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeLabTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveLabTab(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all ${
                    isActive 
                      ? 'bg-slate-900 text-white shadow-md' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-pink-400' : 'text-slate-400'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <AnimatePresence mode="popLayout">
          {filteredPhotos.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="py-20 text-center space-y-4 bg-white rounded-3xl border border-slate-200"
            >
              <div className="text-slate-400 font-bold">No photos match your selected campus and department filter.</div>
              <button 
                onClick={() => setActiveLabTab('all')}
                className="text-pink-600 font-bold hover:underline text-sm"
              >
                Reset All Filters
              </button>
            </motion.div>
          ) : (
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={`${photo.src}-${idx}`}
                  onClick={() => openLightbox(idx)}
                  className="relative h-64 rounded-3xl overflow-hidden cursor-zoom-in group shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-900 border border-slate-200"
                >
                  <Image 
                    src={photo.src} 
                    alt="Campus Lab Photo" 
                    fill 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 group-hover:opacity-80 transition-all duration-500" 
                  />
                  <div className="absolute inset-0 bg-pink-600/0 group-hover:bg-pink-600/20 transition-colors flex items-center justify-center">
                    <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100 duration-300" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-16 bg-slate-900 text-center text-white px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-black">Experience the Infrastructure First-Hand</h2>
          <p className="text-slate-300 text-sm sm:text-base">Schedule a walk-through session with our lab instructors and department heads.</p>
          <div>
            <ApplyButton 
              text="BOOK A CAMPUS VISIT"
              className="px-8 py-3.5 bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg inline-flex items-center gap-2 transition-all hover:scale-105"
            />
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && filteredPhotos.length > 0 && (
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

            {filteredPhotos.length > 1 && (
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
                  src={filteredPhotos[currentIndex].src}
                  alt="Lab Photo"
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </motion.div>
              
              <div className="absolute bottom-0 translate-y-12 text-white text-center">
                {filteredPhotos.length > 1 && (
                  <p className="text-white/60 text-sm">{currentIndex + 1} of {filteredPhotos.length}</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default function FacilitiesGalleryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">Loading Lab Gallery...</div>}>
      <GalleryContent />
    </Suspense>
  );
}

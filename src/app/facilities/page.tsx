import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building2, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Flame, Utensils, GlassWater, BedDouble, Monitor, Eye, Images } from 'lucide-react';
import ApplyButton from '@/components/ApplyButton';
import Image from 'next/image';
import Link from 'next/link';

export default function FacilitiesPage() {

  const trainingLabs = [
    {
      id: 'culinary-kitchen',
      name: 'Advanced Culinary Arts & Quantity Kitchen',
      category: 'Food Production',
      icon: Utensils,
      image: '/images/culinary_basic.jpg',
      galleryImages: [
        '/images/culinary_flambe.jpg',
        '/images/culinary_sushi.jpg',
        '/images/culinary_training_new.jpg',
        '/College Photos/North Campus/IMG_2726.jpeg'
      ],
      description: 'Commercial 5-star standard culinary lab equipped with heavy-duty gas ranges, tandoors, cold storage, butchery stations, and convection ovens.',
      features: [
        'Individual cooking stations for 30+ students',
        'Indian, Chinese, Continental & Bakery sections',
        'Commercial exhaust and stainless steel worktables',
        'HACCP hygiene & food safety standards',
      ],
    },
    {
      id: 'front-office',
      name: 'Model Hotel Guest Suite & Front Desk',
      category: 'Hotel Operations',
      icon: BedDouble,
      image: '/images/front_office_real.jpg',
      galleryImages: [
        '/images/front_office_lab.jpg',
        '/images/bhm_premium.jpg',
        '/College Photos/South/IMG_8166.jpeg',
        '/College Photos/South/IMG_8170.jpeg'
      ],
      description: 'Fully simulated 5-star hotel lobby, reception desk, and guest suite designed to train students in guest check-in, key card allocation, and concierge etiquette.',
      features: [
        'Front office hotel reservation software training',
        'Simulated guest check-in / check-out desk',
        'Concierge & bell desk scenario practice',
        'Luxury guest room layout inspection',
      ],
    },
    {
      id: 'bartending-bar',
      name: 'Flair Bartending & Mixology Lounge',
      category: 'Beverage Management',
      icon: GlassWater,
      image: '/images/model_bar_real.jpg',
      galleryImages: [
        '/images/bartending_training_new.jpg',
        '/images/model_bar_restaurant.jpg',
        '/images/fnb_training_new.jpg',
        '/College Photos/North Campus/IMG_4276.jpeg'
      ],
      description: 'Dedicated training bar featuring professional shakers, flair equipment, speed rails, mocktail syrups, and fine glassware sets.',
      features: [
        'Classic & molecular cocktail preparation',
        'Flair bartending & bottle juggling space',
        'Wine tasting & beverage service etiquette',
        'Bar cost control & inventory management',
      ],
    },
    {
      id: 'housekeeping-lab',
      name: 'Housekeeping & Linen Management Lab',
      category: 'Hospitality Operations',
      icon: ShieldCheck,
      image: '/images/housekeeping_training_new.jpg',
      galleryImages: [
        '/College Photos/North Campus/IMG_2560.jpeg',
        '/College Photos/North Campus/IMG_4246.jpeg',
        '/College Photos/North Campus/IMG_4248.jpeg',
        '/College Photos/North Campus/IMG_2563.jpeg'
      ],
      description: 'Specialized lab designed for room making, turn-down service, flower arrangements, floor scrubbing machinery, and linen care.',
      features: [
        '5-star bed-making techniques & turn-down service',
        'Commercial laundry equipment & stain removal',
        'Flower arrangement & room aesthetics',
        'Chemical safety & surface sanitization',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-pink-600 selection:text-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-[#0D0D0D] text-white overflow-hidden border-b border-[#E80088]/20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#443C87]/30 to-[#0D0D0D] backdrop-blur-3xl" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#E80088]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-sm">
            <Building2 className="w-4 h-4 text-[#E80088]" />
            <span className="text-white">5-Star Standard Practical Infrastructure</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Campus <span className="bg-gradient-to-r from-[#E80088] via-[#90268B] to-[#E80088] bg-clip-text text-transparent">Training Labs & Facilities</span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
            Experience real-world luxury hotel environments right on campus. Over 80% of our curriculum is delivered through hands-on practical sessions inside specialized labs.
          </p>
        </div>
      </section>

      {/* Labs Showcase List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {trainingLabs.map((lab, idx) => {
          const Icon = lab.icon;
          const isEven = idx % 2 === 0;
          return (
            <div
              key={lab.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 text-pink-600 text-xs font-black uppercase tracking-wider rounded-full">
                  <Icon className="w-4 h-4" />
                  <span>{lab.category}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{lab.name}</h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{lab.description}</p>
                <div className="space-y-2.5 pt-2">
                  {lab.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-slate-800 text-xs sm:text-sm font-bold">
                      <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Dual Action Buttons: Book Campus Visit & View Lab Gallery */}
                <div className="pt-4 flex flex-wrap gap-3 items-center">
                  <ApplyButton
                    text="BOOK CAMPUS VISIT"
                    className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md shadow-pink-600/30 flex items-center gap-2 transition-all hover:scale-105"
                  />
                  <Link
                    href={`/facilities/gallery?lab=${lab.id}`}
                    className="px-6 py-3 border border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white text-slate-700 font-bold text-xs uppercase tracking-wider rounded-full flex items-center gap-2 transition-all shadow-sm"
                  >
                    <Eye className="w-4 h-4 text-pink-600" />
                    <span>VIEW LAB GALLERY</span>
                  </Link>
                </div>
              </div>

              {/* Main Image & Thumbnail Carousel Preview */}
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100 bg-slate-900 h-[300px]">
                  <Image src={lab.image} alt={lab.name} fill sizes="(max-width: 1024px) 100vw, 600px" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                    <span className="text-xs font-bold text-white uppercase tracking-wider bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      {lab.name}
                    </span>
                  </div>
                </div>

                {/* Related Thumbnails Grid */}
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {lab.galleryImages.map((thumbSrc, tIdx) => (
                    <Link 
                      key={tIdx} 
                      href={`/facilities/gallery?lab=${lab.id}`}
                      className="relative h-20 rounded-xl overflow-hidden border border-slate-200 group bg-slate-900"
                    >
                      <Image 
                        src={thumbSrc} 
                        alt={`${lab.name} photo ${tIdx + 1}`} 
                        fill 
                        sizes="150px"
                        className="object-cover group-hover:scale-110 group-hover:opacity-75 transition-all duration-300" 
                      />
                      <div className="absolute inset-0 bg-pink-600/0 group-hover:bg-pink-600/20 transition-colors flex items-center justify-center">
                        <Eye className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <Footer />
    </main>
  );
}

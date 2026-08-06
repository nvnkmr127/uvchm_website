'use client';

import React from 'react';

export default function PartnersCarousel() {
  const partnerLogos = [
    { name: 'Taj Hotels & Palaces', src: '/partners/taj.svg' },
    { name: 'The Oberoi Group', src: '/partners/oberoi.svg' },
    { name: 'Marriott International', src: '/partners/marriott.svg' },
    { name: 'Radisson Hotel Group', src: '/partners/radisson.svg' },
    { name: 'Park Inn by Radisson', src: '/partners/parkinn.svg' },
    { name: 'IHCL Hotels', src: '/partners/ihcl.svg' },
    { name: 'Hyatt Regency', src: '/partners/hyatt.svg' },
    { name: 'ITC Hotels', src: '/partners/itc.svg' },
    { name: 'The Leela Palaces', src: '/partners/leela.svg' },
    { name: 'Vivanta by Taj', src: '/partners/vivanta.svg' },
    { name: 'Emirates First Class', src: '/partners/emirates.svg' },
  ];

  return (
    <section id="placements" className="py-8 bg-white relative overflow-hidden border-t border-b border-slate-200">
      
      {/* Container for Infinite Logo Marquee matching pure white site background */}
      <div className="relative w-full overflow-hidden">
        
        {/* Left & Right Pure White Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

        {/* Marquee Track: Tight Horizontal Spacing on Pure White BG */}
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-1">
          {/* Duplicated 3x for continuous seamless infinite marquee loop */}
          {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, idx) => (
            <div
              key={idx}
              className="shrink-0 flex items-center justify-center h-10 px-2 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <img
                src={partner.src}
                alt={`${partner.name} Logo`}
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

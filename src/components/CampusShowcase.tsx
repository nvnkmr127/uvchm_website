'use client';

import React, { useState } from 'react';
import { Compass, CheckCircle2, Sparkles, X } from 'lucide-react';
import { FACILITIES, Facility } from '@/data/collegeData';

export default function CampusShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  const filteredFacilities = FACILITIES.filter(
    (fac) => activeCategory === 'All' || fac.category === activeCategory
  );

  return (
    <section id="facilities" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-black uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" /> Practical Training Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Learn Inside <span className="text-gradient-pink">Modern Training Labs</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Train inside commercial quantity kitchens, front office Opera PMS labs, model bar suites, and 60-seat fine dining student restaurant.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-8 flex justify-center space-x-2 overflow-x-auto pb-2">
          {['All', 'Culinary', 'Hospitality', 'Beverage & F&B'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                activeCategory === cat
                  ? 'bg-pink-600 text-white shadow-sm shadow-pink-600/25'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredFacilities.map((fac) => (
            <div
              key={fac.id}
              onClick={() => setSelectedFacility(fac)}
              className="glass-card rounded-2xl overflow-hidden border border-slate-200 group cursor-pointer"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={fac.image}
                  alt={fac.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-pink-700 border border-pink-200 text-[10px] font-extrabold uppercase rounded-full tracking-wider shadow-xs">
                    {fac.category} Lab
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors">
                    {fac.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{fac.description}</p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                  {fac.features.map((feat, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-700 rounded-lg"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facility Detail Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl space-y-4">
            <button
              onClick={() => setSelectedFacility(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 text-slate-600 hover:text-slate-900 rounded-full shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-72">
              <img
                src={selectedFacility.image}
                alt={selectedFacility.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">
                  {selectedFacility.category} Lab Overview
                </span>
                <h3 className="text-2xl font-black text-white mt-1">{selectedFacility.name}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-slate-600 text-sm">{selectedFacility.description}</p>
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Key Practical Specifications</h4>
                <div className="space-y-1.5">
                  {selectedFacility.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-pink-600" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="px-6 py-2 bg-pink-600 text-white font-bold text-xs rounded-xl shadow-md shadow-pink-600/25"
                >
                  Close Showcase
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import React from 'react';

const YoutubePromo: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold tracking-wider uppercase border border-pink-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-600"></span>
            </span>
            Campus Life
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Experience <span className="text-pink-600">UVCHM</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Take a glimpse into the dynamic, hands-on training and vibrant life of a hospitality professional.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-slate-900 pointer-events-none">
          {/* Scale up by 1.3 to push YouTube title, branding, and buttons outside the visible overflow container */}
          <iframe
            className="absolute top-0 left-0 w-full h-full scale-[1.3] pointer-events-none"
            src="https://www.youtube.com/embed/4_Esyp8b9JU?autoplay=1&mute=1&loop=1&playlist=4_Esyp8b9JU&controls=0&rel=0&disablekb=1&modestbranding=1&playsinline=1&iv_load_policy=3"
            title="UVCHM Campus Life"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          
          {/* Subtle gradient overlay to make it look premium and prevent any clicks */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default YoutubePromo;

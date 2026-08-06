'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PartnersCarousel from '@/components/PartnersCarousel';
import AboutUs from '@/components/AboutUs';
import UvConsultancy from '@/components/UvConsultancy';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProgramCatalog from '@/components/ProgramCatalog';
import StudentPlacements from '@/components/StudentPlacements';
import CampusShowcase from '@/components/CampusShowcase';
import InstagramReels from '@/components/InstagramReels';
import ResearchFaculty from '@/components/ResearchFaculty';
import Footer from '@/components/Footer';
import ApplyModal from '@/components/ApplyModal';

export default function Home() {
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null);

  const handleOpenApplyWithProgram = (programId?: string) => {
    if (programId) {
      setSelectedProgramId(programId);
    }
    setApplyModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-pink-600 selection:text-white">
      {/* Floating Capsule Glass Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero onOpenApply={() => handleOpenApplyWithProgram()} />

      {/* Infinite Partners Carousel */}
      <PartnersCarousel />

      {/* Official About Us Section */}
      <AboutUs onOpenApply={() => handleOpenApplyWithProgram()} />

      {/* Backed by UV Consultancy Section */}
      <UvConsultancy onOpenApply={() => handleOpenApplyWithProgram()} />

      {/* Why Choose Us Section */}
      <WhyChooseUs onOpenApply={() => handleOpenApplyWithProgram()} />

      {/* Hospitality Courses & Degrees (Editorial Showcase Layout) */}
      <ProgramCatalog onSelectProgramToApply={(pId) => handleOpenApplyWithProgram(pId)} />

      {/* 100% Placements & Alumni Success Stories */}
      <StudentPlacements onOpenApply={() => handleOpenApplyWithProgram()} />

      {/* World-Class Campus Facilities */}
      <CampusShowcase />

      {/* Watch Our Latest Videos from Instagram Reels */}
      <InstagramReels />

      {/* Leadership & Faculty Stacked Slider */}
      <ResearchFaculty onOpenApply={() => handleOpenApplyWithProgram()} />

      {/* Footer */}
      <Footer />

      {/* Global Application Modal */}
      <ApplyModal isOpen={applyModalOpen} onClose={() => setApplyModalOpen(false)} />
    </main>
  );
}

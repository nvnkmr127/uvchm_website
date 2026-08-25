import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PartnersCarousel from '@/components/PartnersCarousel';
import AboutUs from '@/components/AboutUs';
import BrochureRoadmap from '@/components/BrochureRoadmap';
import UvConsultancy from '@/components/UvConsultancy';
import WhyChooseUs from '@/components/WhyChooseUs';
import CollegeComparison from '@/components/CollegeComparison';
import ProgramCatalog from '@/components/ProgramCatalog';
import StudentPlacements from '@/components/StudentPlacements';
import CampusShowcase from '@/components/CampusShowcase';
import InstagramReels from '@/components/InstagramReels';
import GoogleReviews from '@/components/GoogleReviews';
import ResearchFaculty from '@/components/ResearchFaculty';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-pink-600 selection:text-white">
      {/* Floating Capsule Glass Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Infinite Partners Carousel */}
      <PartnersCarousel />

      {/* Official About Us Section */}
      <AboutUs />

      {/* Official College Brochure Career Roadmap & Campus Facilities */}
      <BrochureRoadmap />

      {/* Backed by UV Consultancy Section */}
      <UvConsultancy />

      {/* Hospitality Courses & Degrees (Editorial Showcase Layout) */}
      <ProgramCatalog />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* College Comparison Section */}
      <CollegeComparison />

      {/* 100% Placements & Alumni Success Stories */}
      <StudentPlacements />

      {/* World-Class Campus Facilities */}
      <CampusShowcase />

      {/* Watch Our Latest Videos from Instagram Reels */}
      <InstagramReels />

      {/* Leadership & Faculty Stacked Slider */}
      <ResearchFaculty />

      {/* Verified Google Reviews */}
      <GoogleReviews />

      {/* Footer */}
      <Footer />

      {/* Global Application Modal */}
    </main>
  );
}

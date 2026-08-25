'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Menu, X, Sparkles, Search } from 'lucide-react';
import { useApplyModal } from '@/context/ApplyModalContext';

export default function Navbar() {
  const { openModal } = useApplyModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-[#E80088] via-[#90268B] to-[#443C87] text-white text-xs font-black py-1.5 px-4 text-center flex items-center justify-center gap-2 shadow-sm">
        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
        <span>UVCHM — 100% Placements in Taj, Oberoi, Marriott & Overseas Hotels!</span>
        <button
          onClick={() => openModal()}
          className="underline font-black hover:text-pink-200 ml-1"
        >
          Apply Today &rarr;
        </button>
      </div>

      {/* Floating Capsule Glassmorphic Navbar for White Background */}
      <header className="sticky top-3 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="glass-capsule px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-lg transition-all border border-pink-500/20">
            
            {/* Left Brand Logo Badge */}
            <Link href="/" className="flex items-center space-x-3 group shrink-0">
              <div className="bg-white p-1.5 rounded-full shadow-xs border border-slate-200 group-hover:scale-105 transition-transform flex items-center">
                <Image
                  src="/new-logo.png"
                  alt="UVCHM Logo"
                  width={300}
                  height={100}
                  priority
                  className="h-9 sm:h-11 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Center Navigation Links - Crisp Dark Text for White BG */}
            <nav className="hidden lg:flex items-center space-x-6 text-xs font-extrabold text-slate-800 uppercase tracking-wide">
              <Link href="/" className="hover:text-pink-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-pink-600 transition-colors">
                About
              </Link>
              <Link href="/courses" className="hover:text-pink-600 transition-colors flex items-center gap-1">
                Courses <Sparkles className="w-3 h-3 text-pink-600 animate-pulse" />
              </Link>
              <Link href="/placements" className="hover:text-pink-600 transition-colors">
                Placements
              </Link>
              <Link href="/facilities" className="hover:text-pink-600 transition-colors">
                Training Labs
              </Link>
              <Link href="/faculty" className="hover:text-pink-600 transition-colors">
                Faculty
              </Link>
              <Link href="/contact" className="hover:text-pink-600 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Right Action: Hot Magenta Pink Pill Button */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={() => openModal()}
                className="px-6 py-2.5 bg-gradient-to-r from-pink-600 via-pink-500 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-black text-xs uppercase tracking-wider rounded-full shadow-md shadow-pink-600/30 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
              >
                <span>APPLY NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-pink-600 rounded-full focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 max-w-7xl mx-auto bg-white border border-slate-200 backdrop-blur-xl rounded-3xl p-6 space-y-4 shadow-xl animate-fadeIn">
            <div className="relative mb-2">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search BHM, Culinary..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-full text-slate-900 placeholder-slate-400 focus:outline-none focus:border-pink-500"
              />
            </div>

            <nav className="flex flex-col space-y-3 font-extrabold text-slate-800 text-sm uppercase tracking-wide">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-pink-600 py-1">
                Home
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-pink-600 py-1">
                About Us
              </Link>
              <Link href="/courses" onClick={() => setMobileMenuOpen(false)} className="hover:text-pink-600 py-1 flex items-center gap-1">
                Courses ✨
              </Link>
              <Link href="/placements" onClick={() => setMobileMenuOpen(false)} className="hover:text-pink-600 py-1">
                Placements
              </Link>
              <Link href="/facilities" onClick={() => setMobileMenuOpen(false)} className="hover:text-pink-600 py-1">
                Training Labs
              </Link>
              <Link href="/faculty" onClick={() => setMobileMenuOpen(false)} className="hover:text-pink-600 py-1">
                Faculty
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-pink-600 py-1">
                Contact
              </Link>
            </nav>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="w-full py-3 bg-pink-600 hover:bg-pink-700 text-white font-black rounded-full text-center text-xs uppercase tracking-wider shadow-md shadow-pink-600/30 flex items-center justify-center gap-2"
              >
                <span>APPLY NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

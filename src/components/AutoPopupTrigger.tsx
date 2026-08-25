'use client';

import { useEffect, useState } from 'react';
import { useApplyModal } from '@/context/ApplyModalContext';

export default function AutoPopupTrigger() {
  const { openModal, isOpen } = useApplyModal();
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Only trigger once per session
    if (typeof window !== 'undefined' && sessionStorage.getItem('hasSeenPopup')) {
      return;
    }

    const triggerPopup = () => {
      if (!hasTriggered && !isOpen) {
        setHasTriggered(true);
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('hasSeenPopup', 'true');
        }
        openModal();
      }
    };

    // Trigger after 15 seconds of time spent
    const timer = setTimeout(triggerPopup, 15000);

    // Trigger when user scrolls 30% of the page
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (documentHeight <= 0) return; // Prevent division by zero on very short pages
      
      const scrollPercent = (scrollY / documentHeight) * 100;
      
      if (scrollPercent >= 30) {
        triggerPopup();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasTriggered, isOpen, openModal]);

  return null; // Invisible trigger component
}

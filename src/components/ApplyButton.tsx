'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useApplyModal } from '@/context/ApplyModalContext';

interface ApplyButtonProps {
  className?: string;
  text?: string;
  programId?: string;
}

export default function ApplyButton({ 
  className = "px-8 py-3.5 bg-pink-600 hover:bg-pink-700 text-white font-black text-xs uppercase tracking-wider rounded-full shadow-lg shadow-pink-600/30 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95",
  text = "APPLY FOR ADMISSION",
  programId
}: ApplyButtonProps) {
  const { openModal } = useApplyModal();

  return (
    <button
      onClick={() => openModal(programId)}
      className={className}
    >
      <span>{text}</span>
      <ArrowRight className="w-4 h-4" />
    </button>
  );
}

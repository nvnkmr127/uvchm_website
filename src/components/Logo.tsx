'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'badge';
}

export default function Logo({ className = 'h-12', variant = 'full' }: LogoProps) {
  if (variant === 'badge') {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <img
          src="/uv-logo.svg"
          alt="UV College of Hotel Management Logo Badge"
          className="h-full w-auto object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <img
        src="/uv-logo.svg"
        alt="UV College of Hotel Management Logo - Building Careers Bringing Excellence"
        className="h-full w-auto object-contain max-h-14"
      />
    </div>
  );
}

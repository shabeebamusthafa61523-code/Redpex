import React from 'react';

export default function Logo({ theme = 'light', size = 'medium', className = '' }) {
  const isDark = theme === 'dark';
  
  // Increased height scaling as requested
  const heightClass = size === 'large' ? 'h-18 sm:h-22' : size === 'small' ? 'h-10 sm:h-12' : 'h-13 sm:h-16';

  return (
    <div className={`inline-flex items-center ${heightClass} ${className} cursor-pointer group`}>
      {/* 100% Transparent Background Logo Image */}
      <img
        src={isDark ? '/logo-night.png' : '/logo-light.png'}
        alt="Redpex Fire & Safety"
        className="h-full w-auto object-contain transition-all duration-300 group-hover:scale-105 filter drop-shadow-sm"
      />
    </div>
  );
}

import React from 'react';

export default function Logo({ theme = 'light', size = 'medium', className = '' }) {
  const isDark = theme === 'dark';
  
  // Height scaling: compact on mobile (<640px), full scale on sm+ desktop
  const heightClass = size === 'large' ? 'h-12 sm:h-22' : size === 'small' ? 'h-8 sm:h-12' : 'h-9 sm:h-16';

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

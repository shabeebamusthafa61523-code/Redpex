import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop({ theme }) {
  const [isVisible, setIsVisible] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3.5 rounded-full border shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center group ${
        isDark 
          ? 'bg-slate-900/90 border-slate-700 text-white hover:bg-redpex-red hover:border-redpex-red shadow-redpex-red/20' 
          : 'bg-white/90 border-slate-300 text-slate-800 hover:bg-redpex-red hover:text-white hover:border-redpex-red shadow-lg'
      }`}
      title="Scroll to Top"
      aria-label="Scroll to Top"
    >
      <ArrowUp className="w-5 h-5 text-redpex-red group-hover:text-white transition-colors" />
    </button>
  );
}

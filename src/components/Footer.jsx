import React from 'react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, ArrowUp, ExternalLink } from 'lucide-react';

export default function Footer({ theme }) {
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`text-xs border-t py-12 transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-slate-400 border-slate-800' : 'bg-slate-900 text-slate-400 border-slate-800'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Contact Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800 pb-8 mb-6">
          
          <div className="flex flex-col gap-1">
            <Logo theme="dark" size="small" />
            <span className="text-[11px] font-semibold text-slate-400">
              Formerly Focus Fire & Safety — Now Redpex Fire & Safety
            </span>
          </div>

          <div className="flex items-center gap-6 text-slate-300 font-medium">
            <a href="#story" className="hover:text-redpex-red transition-colors">About</a>
            <a href="#services" className="hover:text-redpex-red transition-colors">Services</a>
            <a href="#estimator" className="hover:text-redpex-red transition-colors">Estimator</a>
            <a href="#projects" className="hover:text-redpex-red transition-colors">Projects</a>
            <a href="#contact" className="hover:text-redpex-red transition-colors">Contact</a>
          </div>

          <a href="tel:+919633563340" className="flex items-center gap-2 text-white font-bold hover:text-redpex-red transition-colors">
            <Phone className="w-3.5 h-3.5 text-redpex-red" />
            <span>+91 9633 563 340</span>
          </a>

        </div>

        {/* Bottom Bar with Copyright & Kodbrand Attribution */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Redpex Fire & Safety. All Rights Reserved.</span>
            {/* <span className="hidden sm:inline text-slate-700">•</span> */}
            {/* <span>Formerly Focus Fire & Safety - Now Redpex Fire & Safety</span> */}
          </div>

          <div className="flex items-center gap-6">
            {/* Kodbrand Website Link */}
            <a
              href="https://kodbrand.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white font-semibold transition-colors group"
            >
              <span>Developed by <strong className="text-white group-hover:text-redpex-red transition-colors">Kodbrand</strong></span>
              <ExternalLink className="w-3 h-3 text-redpex-red group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-redpex-red" />
            </button> */}
          </div>

        </div>

      </div>
    </footer>
  );
}

import React from 'react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

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
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800 pb-8 mb-8">
          
          <Logo theme="dark" size="small" />

          <div className="flex items-center gap-6 text-slate-300 font-medium">
            <a href="#services" className="hover:text-redpex-red transition-colors">Services</a>
            <a href="#estimator" className="hover:text-redpex-red transition-colors">Estimator</a>
            <a href="#projects" className="hover:text-redpex-red transition-colors">Projects</a>
            <a href="#contact" className="hover:text-redpex-red transition-colors">Contact</a>
          </div>

          <a href="tel:+919633563340" className="flex items-center gap-2 text-white font-bold hover:text-redpex-red">
            <Phone className="w-3.5 h-3.5 text-redpex-red" />
            <span>+91 9633 563 340</span>
          </a>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Redpex Fire & Safety (Formerly Focus Fire & Safety). All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-redpex-red" />
          </button>
        </div>
      </div>
    </footer>
  );
}

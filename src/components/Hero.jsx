import React from 'react';
import HeroCanvas from './HeroCanvas';
import { ShieldCheck, ArrowRight, Calculator, MapPin } from 'lucide-react';

export default function Hero({ theme, onOpenQuoteModal }) {
  const isDark = theme === 'dark';

  return (
    <section className={`relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-redpex-dark text-slate-100' : 'bg-redpex-cream text-slate-900'
    }`}>
      {/* Canvas Particle Background */}
      <HeroCanvas theme={theme} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Minimal Location Badge */}
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-8 transition-colors ${
          isDark 
            ? 'bg-slate-900/80 border border-slate-800 text-slate-300' 
            : 'bg-white/80 border border-slate-200 text-slate-700 shadow-xs'
        }`}>
          <MapPin className="w-3.5 h-3.5 text-redpex-red" />
          <span>India • Saudi Arabia • Qatar</span>
        </div>

        {/* Minimal Bold Headline */}
        <h1 className={`font-outfit font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight mb-5 uppercase leading-none ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          Vigilant Fire Protection. <br />
          <span className="text-redpex-red">Uncompromising Safety.</span>
        </h1>

        {/* Short One-Liner Subtitle */}
        <p className={`max-w-xl mx-auto text-sm sm:text-base font-normal mb-10 ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Turnkey fire engineering, clean agent suppression & Civil Defence NOC compliance.
        </p>

        {/* Two Minimal CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-redpex-red hover:bg-redpex-red-dark text-white font-outfit font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Request Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href="#estimator"
            className={`w-full sm:w-auto px-8 py-3.5 rounded-full border font-outfit font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
              isDark 
                ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700' 
                : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 shadow-xs'
            }`}
          >
            <Calculator className="w-4 h-4 text-redpex-red" />
            <span>AMC Calculator</span>
          </a>
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Eye, Shield, Flame, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function RebrandStory({ theme }) {
  const [activeSymbol, setActiveSymbol] = useState('flame');
  const isDark = theme === 'dark';

  const symbols = [
    {
      id: 'flame',
      title: 'Crimson Flame',
      tagline: 'Emergency Response',
      icon: Flame,
      description: 'The vibrant crimson red flame represents fire protection, urgency, and immediate emergency preparedness.'
    },
    {
      id: 'eye',
      title: 'Vigilant Eye',
      tagline: '24/7 Monitoring',
      icon: Eye,
      description: 'The white eye cutout inside the flame reflects "Red Eye" vigilance and round-the-clock automated monitoring.'
    },
    {
      id: 'shield',
      title: 'Black Shield',
      tagline: 'Structural Strength',
      icon: Shield,
      description: 'The solid black shield represents unshakeable structural protection, reliability, and total asset defense.'
    }
  ];

  return (
    <section id="story" className={`py-20 border-t transition-colors duration-300 ${
      isDark ? 'bg-redpex-dark border-slate-800/60' : 'bg-white border-slate-200/60'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-redpex-red uppercase tracking-widest block mb-2">Our Evolution</span>
          <h2 className={`font-outfit font-black text-3xl sm:text-4xl uppercase tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Focus to <span className="text-redpex-red">Redpex Fire & Safety</span>
          </h2>
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Narrative */}
          <div className="lg:col-span-6 space-y-4">
            <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Redpex Fire & Safety (formerly {COMPANY_INFO.formerName}) carries forward over a decade of engineering excellence across India, Saudi Arabia, and Qatar.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className={`flex items-center gap-3 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <CheckCircle2 className="w-4 h-4 text-redpex-red shrink-0" />
                <span>NFPA, NBC & Civil Defence Regulations</span>
              </div>
              <div className={`flex items-center gap-3 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <CheckCircle2 className="w-4 h-4 text-redpex-red shrink-0" />
                <span>Value Engineered Hydraulic Pipe Routing</span>
              </div>
              <div className={`flex items-center gap-3 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <CheckCircle2 className="w-4 h-4 text-redpex-red shrink-0" />
                <span>Authorized Hochiki & Honeywell Partner</span>
              </div>
            </div>
          </div>

          {/* Minimal Symbol Explorer */}
          <div className="lg:col-span-6">
            <div className={`p-6 rounded-2xl border text-center ${
              isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              {/* Symbol Buttons */}
              <div className="flex justify-center gap-2 mb-6">
                {symbols.map((sym) => {
                  const IconComp = sym.icon;
                  const isActive = activeSymbol === sym.id;
                  return (
                    <button
                      key={sym.id}
                      onClick={() => setActiveSymbol(sym.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        isActive
                          ? 'bg-redpex-red text-white'
                          : isDark ? 'bg-slate-800 text-slate-400' : 'bg-white border text-slate-600'
                      }`}
                    >
                      <IconComp className="w-3.5 h-3.5" />
                      <span>{sym.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Logo Symbol graphic */}
              <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-24 h-24" viewBox="0 0 100 100">
                  <path d="M50 5 L85 20 V55 C85 75 50 92 50 92 C50 92 15 75 15 55 V20 Z" fill="none" stroke={isDark ? "#ffffff" : "#000000"} strokeWidth="6"/>
                  <path d="M50 20 C65 40 75 52 62 70 C56 78 44 78 38 70 C25 52 35 40 50 20 Z" fill="#be1e2d"/>
                  <circle cx="50" cy="60" r="8" fill="#ffffff"/>
                </svg>
              </div>

              {/* Active description */}
              {symbols.map((sym) => (
                sym.id === activeSymbol && (
                  <p key={sym.id} className={`text-xs max-w-sm mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {sym.description}
                  </p>
                )
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

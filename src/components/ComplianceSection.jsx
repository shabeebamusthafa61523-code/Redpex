import React from 'react';
import { ShieldCheck, Award, FileCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function ComplianceSection({ theme }) {
  const isDark = theme === 'dark';

  return (
    <section id="compliance" className={`py-20 border-t transition-colors duration-300 ${
      isDark ? 'bg-redpex-dark border-slate-800/60' : 'bg-redpex-cream border-slate-200/60'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-redpex-red uppercase tracking-widest block mb-2">Quality & Safety</span>
          <h2 className={`font-outfit font-black text-3xl sm:text-4xl uppercase tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Code <span className="text-redpex-red">Compliance</span>
          </h2>
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          <div className={`p-6 rounded-2xl border ${
            isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h3 className={`font-outfit font-bold text-xl mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Quality Policy</h3>
            <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Our strategies, engineering design, and implementation incorporate supreme quality measures strictly compliant with NFPA & NBC regulations.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-redpex-red shrink-0" />
                <span>Quality Assurance periodic site audits</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-redpex-red shrink-0" />
                <span>Hydraulic pipe sizing & pressure loss verification</span>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-2xl border ${
            isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h3 className={`font-outfit font-bold text-xl mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Health & Safety</h3>
            <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Ensuring a zero-hazard working environment for employees and site personnel before any work commences.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Mandatory personal protective equipment (PPE)</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Environmentally responsible equipment sourcing</span>
              </div>
            </div>
          </div>

        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {COMPANY_INFO.certifications.map((cert, idx) => (
            <span key={idx} className={`px-3 py-1.5 rounded-lg border text-xs font-medium ${
              isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-2xs'
            }`}>
              {cert}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

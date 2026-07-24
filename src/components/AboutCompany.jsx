import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { CheckCircle2, Shield, Globe, Award } from 'lucide-react';

export default function AboutCompany({ theme }) {
  const isDark = theme === 'dark';

  return (
    <section id="story" className={`py-20 border-t transition-colors duration-300 ${
      isDark ? 'bg-redpex-dark border-slate-800/60' : 'bg-white border-slate-200/60'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-redpex-red uppercase tracking-widest block mb-2">Company Overview</span>
          <h2 className={`font-outfit font-black text-3xl sm:text-4xl uppercase tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Guardians of <span className="text-redpex-red">Life & Asset Protection</span>
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {COMPANY_INFO.name} is a premier international fire protection engineering firm operating across <strong>India, Saudi Arabia (KSA), and Qatar</strong>. With over a decade of industry leadership, we deliver end-to-end turnkey fire safety design, equipment supply, installation, testing, and Civil Defence NOC compliance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <Shield className="w-5 h-5 text-redpex-red shrink-0 mt-0.5" />
                <div>
                  <h4 className={`font-outfit font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>NFPA & NBC Codes</h4>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Full compliance with global fire safety standards.</p>
                </div>
              </div>

              <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <Globe className="w-5 h-5 text-redpex-red shrink-0 mt-0.5" />
                <div>
                  <h4 className={`font-outfit font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>3 Global Hubs</h4>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Operational presence in India, KSA & Qatar.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className={`p-6 rounded-2xl border space-y-3 ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <h4 className={`font-outfit font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Core Commitments
              </h4>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-redpex-red shrink-0" />
                  <span>Value engineering for efficient hydraulic designs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-redpex-red shrink-0" />
                  <span>Authorized dealer & partner with Hochiki & Honeywell</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-redpex-red shrink-0" />
                  <span>Certified technicians & 24/7 emergency support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-redpex-red shrink-0" />
                  <span>Civil Defence Fire NOC issuance & renewal liaisoning</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

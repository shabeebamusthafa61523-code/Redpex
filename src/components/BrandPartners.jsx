import React, { useState } from 'react';
import { BRAND_PARTNERS } from '../data/companyData';
import { Search, Award, ShieldCheck } from 'lucide-react';

export default function BrandPartners({ theme }) {
  const [searchTerm, setSearchTerm] = useState('');
  const isDark = theme === 'dark';

  const filteredBrands = BRAND_PARTNERS.filter(b => 
    b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="partners" className={`py-20 border-t transition-colors duration-300 ${
      isDark ? 'bg-redpex-dark border-slate-800/60' : 'bg-redpex-cream border-slate-200/60'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-redpex-red uppercase tracking-widest block mb-2">Manufacturers</span>
          <h2 className={`font-outfit font-black text-3xl sm:text-4xl uppercase tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Brand <span className="text-redpex-red">Partners</span>
          </h2>
        </div>

        {/* Minimal Authorized Dealer Card */}
        <div className={`mb-10 p-6 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-6 ${
          isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center border border-slate-200 shrink-0">
              <div className="text-center">
                <div className="font-outfit font-black text-sm text-black">HOCHIKI</div>
                <div className="text-[7px] font-bold text-redpex-red uppercase">Authorized</div>
              </div>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-redpex-red block mb-1">Official Authorized Dealer</span>
              <h3 className={`font-outfit font-bold text-xl ${isDark ? 'text-white' : 'text-slate-900'}`}>HOCHIKI Fire Alarm Systems</h3>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Addressable panels, optical smoke sensors, beam detectors, and graphic software.</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 shrink-0">
            <ShieldCheck className="w-4 h-4" />
            <span>OEM Warranty</span>
          </div>
        </div>

        {/* Search */}
        <div className="max-w-xs mx-auto mb-8 relative">
          <Search className={`w-4 h-4 absolute left-3 top.1/2 top-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
          <input
            type="text"
            placeholder="Search brands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-9 pr-4 py-2 rounded-full border text-xs focus:outline-none focus:border-redpex-red ${
              isDark ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
            }`}
          />
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredBrands.map((brand, idx) => (
            <div
              key={idx}
              className={`p-3.5 rounded-xl border text-center transition-all ${
                isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200/80 shadow-xs'
              }`}
            >
              <div className={`font-outfit font-bold text-xs ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                {brand.name}
              </div>
              <div className={`text-[9px] uppercase mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                {brand.category}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

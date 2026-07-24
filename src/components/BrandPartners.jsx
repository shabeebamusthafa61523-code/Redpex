import React, { useState } from 'react';
import { BRAND_PARTNERS } from '../data/companyData';
import { Search, Award, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

export default function BrandPartners({ theme, onOpenQuoteModal }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const isDark = theme === 'dark';

  const brandCategories = [
    'All',
    'Fire Alarm Systems',
    'Suppression & Clean Agent',
    'Pumps & Valves',
    'Detection & Security'
  ];

  const filteredBrands = BRAND_PARTNERS.filter(b => {
    const matchesSearch = b.name.toLowerCase().includes(searchTerm.toLowerCase()) || b.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || 
      (selectedCategory === 'Fire Alarm Systems' && (b.category.includes('Alarm') || b.category.includes('Detection'))) ||
      (selectedCategory === 'Suppression & Clean Agent' && (b.category.includes('Suppression') || b.category.includes('Hazard'))) ||
      (selectedCategory === 'Pumps & Valves' && (b.category.includes('Pump') || b.category.includes('Valve') || b.category.includes('Control'))) ||
      (selectedCategory === 'Detection & Security' && (b.category.includes('CCTV') || b.category.includes('Security') || b.category.includes('Automation')));
    return matchesSearch && matchesCat;
  });

  return (
    <section id="partners" className={`py-20 border-t transition-colors duration-300 ${
      isDark ? 'bg-redpex-dark border-slate-800/60' : 'bg-redpex-cream border-slate-200/60'
    }`}>
      
      {/* Infinite Scrolling Logo Marquee */}
      <div className="mb-14 overflow-hidden py-3 border-y border-redpex-red/20 bg-redpex-red/5">
        <div className="flex space-x-8 animate-marquee whitespace-nowrap">
          {BRAND_PARTNERS.concat(BRAND_PARTNERS).map((brand, i) => (
            <div key={i} className="inline-flex items-center gap-2 text-xs font-outfit font-extrabold uppercase tracking-widest text-slate-700 dark:text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-redpex-red"></span>
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-redpex-red uppercase tracking-widest block mb-2">Reputation & Sourcing</span>
          <h2 className={`font-outfit font-black text-3xl sm:text-4xl uppercase tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Our Brands of <span className="text-redpex-red">Reputation</span>
          </h2>
          <p className={`text-xs sm:text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            We partner with and supply certified equipment from global industry leaders to match every property requirement and budget.
          </p>
        </div>

        {/* Central HOCHIKI Authorized Dealer Card (As in Brochure) */}
        <div className={`mb-10 p-6 sm:p-8 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-6 shadow-md transition-all ${
          isDark 
            ? 'bg-slate-900/80 border-redpex-red/40 text-white' 
            : 'bg-white border-redpex-red/30 text-slate-900'
        }`}>
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-24 h-24 rounded-xl bg-white p-3 flex items-center justify-center border border-slate-300 shadow-md shrink-0">
              <div className="text-center">
                <div className="font-outfit font-black text-xl text-black tracking-tighter">HOCHIKI</div>
                <div className="text-[8px] font-bold text-redpex-red uppercase tracking-widest">Authorized Dealer</div>
              </div>
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-redpex-red/10 text-redpex-red text-[10px] font-bold uppercase tracking-wider mb-2">
                Official Authorized Dealer
              </span>
              <h3 className={`font-outfit font-bold text-2xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
                HOCHIKI Fire Protection Systems
              </h3>
              <p className={`text-xs max-w-lg mt-1 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Authorized dealer providing addressable fire alarm panels, photoelectric smoke sensors, beam detectors, and graphic workstations.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="px-5 py-2.5 rounded-full bg-redpex-red hover:bg-redpex-red-dark text-white font-outfit font-bold text-xs uppercase tracking-wider shrink-0 shadow-sm flex items-center gap-2"
          >
            <span>Inquire Product Catalog</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Filters & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center flex-wrap gap-2">
            {brandCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat
                    ? 'bg-redpex-red text-white'
                    : isDark
                      ? 'bg-slate-900 text-slate-400 hover:text-white'
                      : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="w-full sm:w-64 relative">
            <Search className={`w-3.5 h-3.5 absolute left-3 top-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
            <input
              type="text"
              placeholder="Search brands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-9 pr-3 py-1.5 rounded-full border text-xs focus:outline-none focus:border-redpex-red ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
              }`}
            />
          </div>
        </div>

        {/* Complete Brands Grid (All Brands from Page 15) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredBrands.map((brand, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border text-center transition-all hover:scale-105 ${
                isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200/80 shadow-xs'
              }`}
            >
              <div className={`font-outfit font-black text-sm ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                {brand.name}
              </div>
              {brand.role && (
                <div className="text-[8px] font-bold text-redpex-red uppercase mt-0.5">
                  {brand.role}
                </div>
              )}
              <div className={`text-[9px] uppercase mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                {brand.category}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

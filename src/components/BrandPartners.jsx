import React, { useState } from 'react';
import { BRAND_PARTNERS } from '../data/companyData';
import { ShieldCheck, Maximize2, X } from 'lucide-react';

export default function BrandPartners({ theme }) {
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const isDark = theme === 'dark';

  return (
    <section id="partners" className={`py-20 border-t transition-colors duration-300 ${
      isDark ? 'bg-redpex-dark border-slate-800/60' : 'bg-redpex-cream border-slate-200/60'
    }`}>
      
      {/* Infinite Scrolling Logo Marquee Bar */}
      <div className="mb-12 overflow-hidden py-3 border-y border-redpex-red/20 bg-redpex-red/5">
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
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-redpex-red uppercase tracking-widest block mb-2">Sourcing & Partnerships</span>
          <h2 className={`font-outfit font-black text-3xl sm:text-4xl uppercase tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Our Brands of <span className="text-redpex-red">Reputation</span>
          </h2>
          <p className={`text-xs sm:text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            As an industry leader in fire safety protection, we source and service certified equipment from world-class global manufacturers.
          </p>
        </div>

        {/* Featured Official Brand Matrix Picture */}
        <div className={`p-4 sm:p-6 rounded-2xl border shadow-md relative overflow-hidden group ${
          isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-redpex-red" />
              <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                Hochiki Authorized Dealer & Certified Supply Partners
              </span>
            </div>

            <button
              onClick={() => setImageModalOpen(true)}
              className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors ${
                isDark ? 'bg-slate-950 border-slate-700 text-slate-300 hover:text-white' : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900'
              }`}
            >
              <Maximize2 className="w-3.5 h-3.5 text-redpex-red" />
              <span>Expand Image</span>
            </button>
          </div>

          {/* Official Brand Wall Graphic Image */}
          <div
            onClick={() => setImageModalOpen(true)}
            className="w-full bg-white p-3 sm:p-6 rounded-xl border border-slate-200 cursor-pointer overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.005]"
          >
            <img
              src="/brands-wall.png"
              alt="Our Brands of Reputation"
              className="w-full h-auto max-h-[520px] object-contain"
            />
          </div>
        </div>

      </div>

      {/* Fullscreen Expand Modal */}
      {imageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-5xl w-full p-4 sm:p-6 relative shadow-2xl overflow-hidden max-h-[95vh] flex flex-col items-center">
            <button
              onClick={() => setImageModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 text-white hover:bg-redpex-red transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src="/brands-wall.png"
              alt="Our Brands of Reputation - Full view"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}

    </section>
  );
}

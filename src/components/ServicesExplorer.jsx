import React, { useState } from 'react';
import { SERVICES } from '../data/companyData';
import { 
  Droplets, Wind, ShieldAlert, Flame, ShowerHead, 
  BellRing, Camera, Cpu, GraduationCap, Wrench, 
  CheckCircle2, ArrowRight, X 
} from 'lucide-react';

const iconMap = {
  Droplets, Wind, ShieldAlert, Flame, ShowerHead, 
  BellRing, Camera, Cpu, GraduationCap, Wrench
};

export default function ServicesExplorer({ theme, onOpenQuoteModal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);
  const isDark = theme === 'dark';

  const categories = ['All', 'Fire Fighting Systems', 'Fire Suppression', 'Detection & Alarm', 'Maintenance & Compliance', 'Training & Education'];

  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory || (activeCategory === 'Fire Fighting Systems' && (s.category === 'Fire Fighting Systems' || s.category === 'Building Safety' || s.category === 'Industrial Suppression')));

  return (
    <section id="services" className={`py-20 border-t transition-colors duration-300 ${
      isDark ? 'bg-redpex-dark border-slate-800/60' : 'bg-redpex-cream border-slate-200/60'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-redpex-red uppercase tracking-widest block mb-2">Capabilities</span>
          <h2 className={`font-outfit font-black text-3xl sm:text-4xl uppercase tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Engineering <span className="text-redpex-red">Services</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat
                  ? 'bg-redpex-red text-white'
                  : isDark
                    ? 'bg-slate-900 text-slate-400 hover:text-white'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Flame;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`p-6 rounded-2xl border flex flex-col justify-between cursor-pointer transition-all duration-200 hover:-translate-y-1 ${
                  isDark 
                    ? 'bg-slate-900/40 border-slate-800 hover:border-redpex-red/40' 
                    : 'bg-white border-slate-200/80 hover:border-redpex-red/40 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-redpex-red/10 flex items-center justify-center text-redpex-red">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {service.category}
                    </span>
                  </div>

                  <h3 className={`font-outfit font-bold text-lg mb-2 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {service.title}
                  </h3>

                  <p className={`text-xs leading-relaxed mb-4 line-clamp-2 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {service.description}
                  </p>
                </div>

                <div className={`pt-3 border-t flex items-center justify-between text-xs font-semibold text-redpex-red ${
                  isDark ? 'border-slate-800' : 'border-slate-100'
                }`}>
                  <span>System Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className={`border rounded-2xl max-w-lg w-full p-6 relative shadow-xl space-y-4 ${
            isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-1 rounded-full text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-outfit font-bold text-xl">{selectedService.title}</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{selectedService.description}</p>

            <div className="space-y-2 pt-2">
              {selectedService.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-redpex-red shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setSelectedService(null);
                onOpenQuoteModal();
              }}
              className="w-full py-2.5 rounded-xl bg-redpex-red text-white text-xs font-bold uppercase tracking-wider"
            >
              Request Proposal
            </button>
          </div>
        </div>
      )}

    </section>
  );
}

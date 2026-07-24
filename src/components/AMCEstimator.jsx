import React, { useState } from 'react';
import { Calculator, CheckCircle2, Award, ArrowRight } from 'lucide-react';

export default function AMCEstimator({ theme, onOpenQuoteModal }) {
  const [propertyType, setPropertyType] = useState('Industrial');
  const [area, setArea] = useState(25000);
  const [selectedSystems, setSelectedSystems] = useState(['extinguishers', 'hydrant', 'alarm']);
  const isDark = theme === 'dark';

  const propertyTypes = [
    { id: 'Industrial', label: 'Industrial & Mfg' },
    { id: 'Hospital', label: 'Hospital & Healthcare' },
    { id: 'Mall', label: 'Retail & Malls' },
    { id: 'Residential', label: 'Residential Towers' },
    { id: 'Educational', label: 'Schools & Campus' },
    { id: 'Hotel', label: 'Hotels & Resorts' },
  ];

  const availableSystems = [
    { id: 'extinguishers', label: 'Portable Extinguishers (IS:2190)' },
    { id: 'hydrant', label: 'Fire Hydrant & Hose Reels' },
    { id: 'alarm', label: 'Fire Alarm Panels' },
    { id: 'sprinkler', label: 'Automatic Sprinklers' },
    { id: 'gas', label: 'FM200 / NOVEC Clean Agent' },
  ];

  const toggleSystem = (id) => {
    if (selectedSystems.includes(id)) {
      if (selectedSystems.length > 1) {
        setSelectedSystems(selectedSystems.filter(s => s !== id));
      }
    } else {
      setSelectedSystems([...selectedSystems, id]);
    }
  };

  const estimatedInspectionsPerYear = propertyType === 'Hospital' || propertyType === 'Industrial' ? 12 : 4;

  return (
    <section id="estimator" className={`py-20 border-t transition-colors duration-300 ${
      isDark ? 'bg-redpex-dark border-slate-800/60' : 'bg-white border-slate-200/60'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-redpex-red uppercase tracking-widest block mb-2">Calculator</span>
          <h2 className={`font-outfit font-black text-3xl sm:text-4xl uppercase tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            AMC & NOC <span className="text-redpex-red">Estimator</span>
          </h2>
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Controls */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider mb-2.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Property Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {propertyTypes.map((prop) => (
                  <button
                    key={prop.id}
                    type="button"
                    onClick={() => setPropertyType(prop.id)}
                    className={`p-2.5 rounded-xl border text-xs font-semibold transition-all ${
                      propertyType === prop.id
                        ? 'bg-redpex-red border-redpex-red text-white'
                        : isDark
                          ? 'bg-slate-900 border-slate-800 text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    {prop.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2 text-xs">
                <span className={`font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Built-Up Area</span>
                <span className="font-bold text-redpex-red">{area.toLocaleString()} Sq. Ft.</span>
              </div>
              <input
                type="range"
                min="5000"
                max="250000"
                step="5000"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-redpex-red bg-slate-200 dark:bg-slate-800"
              />
            </div>

            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider mb-2.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Systems Installed
              </label>
              <div className="space-y-2">
                {availableSystems.map((sys) => {
                  const isChecked = selectedSystems.includes(sys.id);
                  return (
                    <div
                      key={sys.id}
                      onClick={() => toggleSystem(sys.id)}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer text-xs font-medium transition-all ${
                        isChecked
                          ? isDark ? 'bg-slate-900 border-redpex-red/60 text-white' : 'bg-redpex-red/5 border-redpex-red/40 text-slate-900'
                          : isDark ? 'bg-slate-950/40 border-slate-800/80 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
                      }`}
                    >
                      <span>{sys.label}</span>
                      {isChecked && <CheckCircle2 className="w-4 h-4 text-redpex-red" />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="md:col-span-5">
            <div className={`p-6 rounded-2xl border space-y-4 ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <h3 className={`font-outfit font-bold text-xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Package Summary
              </h3>

              <div className="space-y-2.5 text-xs">
                <div className={`p-3 rounded-xl border flex justify-between ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Visits</span>
                  <span className="font-bold">{estimatedInspectionsPerYear === 12 ? 'Monthly (12/Yr)' : 'Quarterly (4/Yr)'}</span>
                </div>
                <div className={`p-3 rounded-xl border flex justify-between ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Staff Training</span>
                  <span className="font-bold text-amber-500">2 Drills/Yr (FREE)</span>
                </div>
                <div className={`p-3 rounded-xl border flex justify-between ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Fire NOC</span>
                  <span className="font-bold text-emerald-600">Renewal Included</span>
                </div>
              </div>

              <button
                onClick={onOpenQuoteModal}
                className="w-full py-3 rounded-xl bg-redpex-red hover:bg-redpex-red-dark text-white font-outfit font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <span>Request AMC Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { PRESTIGIOUS_PROJECTS } from '../data/companyData';
import { MapPin, ArrowUpRight } from 'lucide-react';

export default function ProjectsPortfolio({ theme }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const isDark = theme === 'dark';

  const filters = ['All', 'Space & Defense', 'Infrastructure', 'Industrial & Manufacturing', 'Healthcare', 'Commercial & Malls', 'Residential Towers'];

  const filteredProjects = activeFilter === 'All'
    ? PRESTIGIOUS_PROJECTS
    : PRESTIGIOUS_PROJECTS.filter(p => p.industry.toLowerCase().includes(activeFilter.toLowerCase()) || (activeFilter === 'Space & Defense' && (p.industry.includes('Defense') || p.industry.includes('Space'))));

  return (
    <section id="projects" className={`py-20 border-t transition-colors duration-300 ${
      isDark ? 'bg-redpex-dark border-slate-800/60' : 'bg-white border-slate-200/60'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-redpex-red uppercase tracking-widest block mb-2">Portfolio</span>
          <h2 className={`font-outfit font-black text-3xl sm:text-4xl uppercase tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Prestigious <span className="text-redpex-red">Projects</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {filters.map((flt) => (
            <button
              key={flt}
              onClick={() => setActiveFilter(flt)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeFilter === flt
                  ? 'bg-redpex-red text-white'
                  : isDark
                    ? 'bg-slate-900 text-slate-400 hover:text-white'
                    : 'bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900'
              }`}
            >
              {flt}
            </button>
          ))}
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all hover:-translate-y-1 ${
                isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50/80 border-slate-200/80'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${
                    isDark ? 'text-amber-400' : 'text-amber-600'
                  }`}>
                    {proj.industry}
                  </span>
                  <span className="text-[10px] font-bold uppercase text-redpex-red">
                    {proj.tag}
                  </span>
                </div>

                <h3 className={`font-outfit font-bold text-lg mb-2 flex items-center justify-between gap-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  <span>{proj.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 shrink-0" />
                </h3>

                <div className={`flex items-center gap-1.5 text-xs font-medium mb-3 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <MapPin className="w-3.5 h-3.5 text-redpex-red shrink-0" />
                  <span>{proj.location}</span>
                </div>

                <p className={`text-xs leading-relaxed mb-4 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {proj.description}
                </p>
              </div>

              <div className={`pt-3 border-t text-xs truncate ${
                isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
              }`}>
                <span className="font-semibold">{proj.type}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

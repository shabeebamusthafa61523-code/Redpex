import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutCompany from './components/AboutCompany';
import ServicesExplorer from './components/ServicesExplorer';
import AMCEstimator from './components/AMCEstimator';
import BrandPartners from './components/BrandPartners';
import ProjectsPortfolio from './components/ProjectsPortfolio';
import ComplianceSection from './components/ComplianceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { X } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const root = document.documentElement;
    
    // Dynamic Favicon Update: logo-light in dark mode, logo-dark in light mode
    let faviconLink = document.querySelector("link[rel*='icon']");
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(faviconLink);
    }

    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      faviconLink.href = '/logo-dark.png';
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      faviconLink.href = '/logo-light.png';
    }
  }, [theme]);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-redpex-dark text-slate-100' 
        : 'bg-redpex-cream text-slate-900'
    }`}>
      
      {/* Navigation Header */}
      <Header 
        theme={theme} 
        onToggleTheme={toggleTheme} 
        onOpenQuoteModal={() => setQuoteModalOpen(true)} 
      />

      {/* Main Content Sections */}
      <main>
        <Hero theme={theme} onOpenQuoteModal={() => setQuoteModalOpen(true)} />
        <AboutCompany theme={theme} />
        <ServicesExplorer theme={theme} onOpenQuoteModal={() => setQuoteModalOpen(true)} />
        <AMCEstimator theme={theme} onOpenQuoteModal={() => setQuoteModalOpen(true)} />
        <BrandPartners theme={theme} />
        <ProjectsPortfolio theme={theme} />
        <ComplianceSection theme={theme} />
        <ContactSection theme={theme} />
      </main>

      {/* Footer */}
      <Footer theme={theme} />

      {/* Global AMC Quote Request Modal Dialog */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className={`border rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto ${
            theme === 'dark' 
              ? 'bg-slate-900 border-slate-700 text-white' 
              : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <button
              onClick={() => setQuoteModalOpen(false)}
              className={`absolute top-6 right-6 p-2 rounded-full border transition-colors ${
                theme === 'dark'
                  ? 'bg-slate-950 border-slate-700 text-slate-400 hover:text-white'
                  : 'bg-slate-100 border-slate-300 text-slate-600 hover:text-slate-900'
              }`}
            >
              <X className="w-5 h-5" />
            </button>

            <ContactSection theme={theme} isModal={true} onClose={() => setQuoteModalOpen(false)} />
          </div>
        </div>
      )}

    </div>
  );
}

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Shield, PhoneCall, Menu, X, ChevronRight, Moon, Sun } from 'lucide-react';

export default function Header({ theme, onToggleTheme, onOpenQuoteModal }) {
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (phoneDropdownOpen && !e.target.closest('.phone-dropdown-container')) {
        setPhoneDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [phoneDropdownOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 60) {
        setVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        if (currentScrollY < lastScrollY) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'About', href: '#story' },
    { name: 'Services', href: '#services' },
    { name: 'AMC Estimator', href: '#estimator' },
    { name: 'Partners', href: '#partners' },
    { name: 'Projects', href: '#projects' },
    { name: 'Compliance', href: '#compliance' },
    { name: 'Contact', href: '#contact' },
  ];

  const isDark = theme === 'dark';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled 
        ? isDark
          ? 'bg-redpex-dark/90 backdrop-blur-lg py-3 border-b border-slate-800/60 shadow-xl' 
          : 'bg-white/90 backdrop-blur-lg py-3 border-b border-slate-200/60 shadow-sm'
        : 'bg-transparent py-3 sm:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <Logo theme={theme} size="medium" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                  isDark 
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/60' 
                    : 'text-slate-700 hover:text-redpex-red hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Group */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Phone Icon Dropdown */}
            <div className="relative phone-dropdown-container">
              <button
                onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 ${
                  isDark 
                    ? 'bg-slate-900 border-slate-700 text-redpex-red hover:border-slate-500' 
                    : 'bg-white border-slate-200 text-redpex-red hover:border-slate-400 shadow-sm'
                }`}
                title="Call Us"
                aria-label="Call Us"
              >
                <PhoneCall className="w-4 h-4 text-redpex-red" />
              </button>

              {phoneDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-56 rounded-2xl border p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150 ${
                  isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
                }`}>
                  <div className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 border-b mb-1 ${
                    isDark ? 'text-slate-400 border-slate-800' : 'text-slate-500 border-slate-100'
                  }`}>
                    Call Our Team
                  </div>
                  <a
                    href="tel:+919847893706"
                    onClick={() => setPhoneDropdownOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                      isDark ? 'hover:bg-slate-800 text-slate-100' : 'hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-redpex-red" />
                    <span>+91 98478 93706</span>
                  </a>
                  <a
                    href="tel:+919633563340"
                    onClick={() => setPhoneDropdownOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                      isDark ? 'hover:bg-slate-800 text-slate-100' : 'hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-redpex-red" />
                    <span>+91 96335 63340</span>
                  </a>
                </div>
              )}
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="hidden sm:flex px-5 py-2.5 rounded-full bg-redpex-red hover:bg-redpex-red-dark text-white font-outfit font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 items-center gap-2"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Get Quote</span>
            </button>

            {/* Circular Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 ${
                isDark 
                  ? 'bg-slate-900 border-slate-700 text-amber-400 hover:border-slate-500' 
                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400 shadow-sm'
              }`}
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border lg:hidden ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-redpex-red" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-6 py-6 shadow-xl backdrop-blur-xl animate-in slide-in-from-top-4 duration-200 ${
          isDark ? 'bg-redpex-dark/95 border-slate-800 text-white' : 'bg-white/95 border-slate-200 text-slate-900'
        }`}>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between py-2.5 text-sm font-medium ${
                  isDark ? 'text-slate-200 hover:text-white' : 'text-slate-800 hover:text-redpex-red'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-redpex-red" />
              </a>
            ))}
            
            <div className="pt-4 border-t border-slate-800/60 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-full bg-redpex-red text-white font-outfit font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <Shield className="w-4 h-4" />
                <span>Request AMC Proposal</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

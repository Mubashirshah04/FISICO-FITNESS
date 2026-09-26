import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { VERIFIED_BUSINESS } from '../types';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Training', href: '#training' },
    { label: 'About', href: '#about' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0C0E]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark (Display face) */}
          <a
            href="#home"
            className="text-xl sm:text-2xl font-bold font-display tracking-tight text-[#F1F2EE] hover:text-[#CCFF00] transition-colors focus-visible:outline-none"
            aria-label="FISICO FITNESS GYM Home"
          >
            FISICO
          </a>

          {/* Zone 2: Clean text navigation links (4-5 items, single-line, subtle underlines) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-neutral-300"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 text-neutral-300 hover:text-white transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#CCFF00] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action (Single-line control) */}
          <div className="flex items-center space-x-3">
            <a
              href={`tel:${VERIFIED_BUSINESS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#CCFF00] hover:bg-[#b8e600] active:scale-[0.98] transition-all rounded-sm whitespace-nowrap shadow-[0_0_20px_rgba(204,255,0,0.25)] focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              <span>Call Now</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 text-neutral-300 hover:text-white hover:bg-white/5 rounded-sm transition-colors"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[61px] bg-[#0C0E11] border-b border-white/10 px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-neutral-200 hover:text-[#CCFF00] py-2 border-b border-white/5"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <a
                href={`tel:${VERIFIED_BUSINESS.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-bold uppercase tracking-wider text-black bg-[#CCFF00] rounded-sm text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call {VERIFIED_BUSINESS.phone}</span>
              </a>
              <a
                href={VERIFIED_BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-neutral-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm text-center"
              >
                <span>Get Directions (Google Maps)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { Phone, MapPin, ExternalLink } from 'lucide-react';
import { VERIFIED_BUSINESS } from '../types';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#06080A] text-neutral-400 py-16 border-t border-white/10 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-white/5">
          {/* Brand & Address */}
          <div className="md:col-span-6 space-y-4">
            <h3 className="text-2xl font-bold font-display tracking-tight text-white uppercase">
              FISICO FITNESS GYM
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#CCFF00] font-condensed font-semibold">
              GYM & FITNESS
            </p>
            <p className="text-neutral-400 max-w-sm leading-relaxed">
              Gulshan-e-Sufyan, Samungli Road, Arbab Town, Quetta, 83700, Pakistan
            </p>
            <div className="pt-2">
              <a
                href={`tel:${VERIFIED_BUSINESS.phoneRaw}`}
                className="text-base font-bold font-mono text-white hover:text-[#CCFF00] transition-colors"
              >
                {VERIFIED_BUSINESS.phone}
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white font-condensed">
              NAVIGATION
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-white transition-colors">
                  Training
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#hours" className="hover:text-white transition-colors">
                  Hours & Schedule
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Social & Directory Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white font-condensed">
              VERIFIED CHANNELS
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={VERIFIED_BUSINESS.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#CCFF00] transition-colors"
                >
                  <span>Facebook (@fiscofitnessgym)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={VERIFIED_BUSINESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#CCFF00] transition-colors"
                >
                  <span>Google Maps Listing (4.6★)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>
            © {new Date().getFullYear()} FISICO FITNESS GYM. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Verified local business information for Arbab Town, Samungli Road, Quetta.
          </p>
        </div>
      </div>
    </footer>
  );
};

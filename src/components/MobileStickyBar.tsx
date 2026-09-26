import React from 'react';
import { Phone, Navigation } from 'lucide-react';
import { VERIFIED_BUSINESS } from '../types';

export const MobileStickyBar: React.FC = () => {
  return (
    <aside
      aria-label="Quick Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0C0F12]/95 backdrop-blur-md border-t border-white/10 px-4 py-2.5 shadow-[0_-4px_25px_rgba(0,0,0,0.8)]"
    >
      <div className="flex items-center gap-3 max-w-md mx-auto">
        <a
          href={`tel:${VERIFIED_BUSINESS.phoneRaw}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-black bg-[#CCFF00] active:scale-[0.98] transition-all rounded-sm shadow-[0_0_15px_rgba(204,255,0,0.2)]"
        >
          <Phone className="w-4 h-4 stroke-[2.5]" />
          <span>Call Now</span>
        </a>

        <a
          href={VERIFIED_BUSINESS.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 active:scale-[0.98] border border-white/15 rounded-sm transition-all"
        >
          <Navigation className="w-4 h-4 text-[#CCFF00]" />
          <span>Directions</span>
        </a>
      </div>
    </aside>
  );
};

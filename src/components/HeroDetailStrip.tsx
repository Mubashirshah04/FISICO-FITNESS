import React, { useState, useEffect } from 'react';
import { Clock, MapPin, ExternalLink } from 'lucide-react';
import { getGymCurrentStatus, CurrentStatus } from '../utils/hours';

export const HeroDetailStrip: React.FC = () => {
  const [status, setStatus] = useState<CurrentStatus>(getGymCurrentStatus());

  useEffect(() => {
    // Refresh status every 60 seconds
    const interval = setInterval(() => {
      setStatus(getGymCurrentStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside
      aria-label="Location and Hours Summary"
      className="border-y border-white/10 bg-[#0E1114] text-neutral-300 relative z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 items-center">
          {/* Detail Item 1: Location */}
          <div className="flex items-start sm:items-center space-x-3.5">
            <div className="p-2 bg-white/5 border border-white/10 rounded-none shrink-0 text-[#CCFF00]">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest text-neutral-500 font-semibold font-condensed">
                LOCATION
              </p>
              <p className="text-sm sm:text-base font-bold text-white tracking-wide uppercase font-condensed">
                SAMUNGLI ROAD · ARBAB TOWN, QUETTA
              </p>
              <p className="text-xs text-neutral-400">
                Gulshan-e-Sufyan, Quetta 83700
              </p>
            </div>
          </div>

          {/* Detail Item 2: Opening Hours Overview */}
          <div className="flex items-start sm:items-center space-x-3.5 border-t md:border-t-0 md:border-l border-white/10 pt-3 md:pt-0 md:pl-6 lg:pl-8">
            <div className="p-2 bg-white/5 border border-white/10 rounded-none shrink-0 text-[#CCFF00]">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest text-neutral-500 font-semibold font-condensed">
                OPENING HOURS
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-sm sm:text-base font-bold text-white tracking-wide uppercase font-condensed">
                  8:00 AM — 11:30 PM*
                </p>
              </div>
              <p className="text-xs text-neutral-400">
                *Daily timings include split afternoon sessions & Friday schedule.
              </p>
            </div>
          </div>

          {/* Detail Item 3: Live Real-Time Quetta Status */}
          <div className="flex items-center justify-between sm:justify-start lg:justify-end space-x-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-3 lg:pt-0 lg:pl-8">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                {status.isOpen ? (
                  <>
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#CCFF00]"></span>
                  </>
                ) : (
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neutral-500"></span>
                )}
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">
                  {status.statusText}
                </p>
                <p className="text-[11px] text-neutral-400">
                  {status.nextEventText}
                </p>
              </div>
            </div>

            <a
              href="#hours"
              className="text-xs font-semibold text-[#CCFF00] hover:underline whitespace-nowrap ml-auto"
            >
              Full Schedule →
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

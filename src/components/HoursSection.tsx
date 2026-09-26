import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';
import { WEEKLY_SCHEDULE } from '../types';
import { getGymCurrentStatus, CurrentStatus } from '../utils/hours';

export const HoursSection: React.FC = () => {
  const [status, setStatus] = useState<CurrentStatus>(getGymCurrentStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getGymCurrentStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hours" className="py-20 sm:py-28 bg-[#0C0F12] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-[#CCFF00] uppercase mb-3">
            <span>04. OPERATING SCHEDULE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-none">
            SCHEDULE & HOURS
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            Daily split-shift operating schedule designed for flexible training times.
          </p>
        </div>

        {/* Live Status Overview Banner */}
        <div className="mb-10 p-5 sm:p-6 bg-[#13171B] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <span className="relative flex h-3 w-3">
              {status.isOpen ? (
                <>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#CCFF00]"></span>
                </>
              ) : (
                <span className="relative inline-flex rounded-full h-3 w-3 bg-neutral-500"></span>
              )}
            </span>
            <div>
              <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                Status: {status.statusText}
              </p>
              <p className="text-xs text-neutral-400">
                {status.nextEventText} (Current Local Time: {status.localTimeFormatted})
              </p>
            </div>
          </div>

          <span className="text-xs uppercase tracking-wider text-neutral-500 font-condensed">
            Quetta, Pakistan Time (PKT)
          </span>
        </div>

        {/* Elegant Timetable Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Monday – Thursday */}
          <div
            className={`p-6 sm:p-7 border transition-all ${
              status.currentDayIndex >= 1 && status.currentDayIndex <= 4
                ? 'bg-[#151A1F] border-[#CCFF00]/50 ring-1 ring-[#CCFF00]/20'
                : 'bg-[#12161A] border-white/10'
            }`}
          >
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
              <h3 className="text-lg font-bold font-display uppercase tracking-wide text-white">
                Mon — Thu
              </h3>
              {status.currentDayIndex >= 1 && status.currentDayIndex <= 4 && (
                <span className="text-[11px] font-bold text-[#CCFF00] tracking-wider uppercase">
                  TODAY
                </span>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400 font-condensed font-semibold">
                  MORNING SHIFT
                </p>
                <p className="text-lg font-bold text-white tabular-nums mt-0.5">
                  8:00 AM — 3:00 PM
                </p>
              </div>

              <div className="pt-2 border-t border-white/5">
                <p className="text-xs uppercase tracking-widest text-neutral-400 font-condensed font-semibold">
                  EVENING SHIFT
                </p>
                <p className="text-lg font-bold text-white tabular-nums mt-0.5">
                  4:00 PM — 11:30 PM
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Friday */}
          <div
            className={`p-6 sm:p-7 border transition-all ${
              status.currentDayIndex === 5
                ? 'bg-[#151A1F] border-[#CCFF00]/50 ring-1 ring-[#CCFF00]/20'
                : 'bg-[#12161A] border-white/10'
            }`}
          >
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
              <h3 className="text-lg font-bold font-display uppercase tracking-wide text-white">
                Friday
              </h3>
              {status.currentDayIndex === 5 && (
                <span className="text-[11px] font-bold text-[#CCFF00] tracking-wider uppercase">
                  TODAY
                </span>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400 font-condensed font-semibold">
                  MORNING SHIFT
                </p>
                <p className="text-lg font-bold text-white tabular-nums mt-0.5">
                  8:00 AM — 12:30 PM
                </p>
              </div>

              <div className="pt-2 border-t border-white/5">
                <p className="text-xs uppercase tracking-widest text-neutral-400 font-condensed font-semibold">
                  EVENING SHIFT
                </p>
                <p className="text-lg font-bold text-white tabular-nums mt-0.5">
                  4:00 PM — 11:30 PM
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Saturday */}
          <div
            className={`p-6 sm:p-7 border transition-all ${
              status.currentDayIndex === 6
                ? 'bg-[#151A1F] border-[#CCFF00]/50 ring-1 ring-[#CCFF00]/20'
                : 'bg-[#12161A] border-white/10'
            }`}
          >
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
              <h3 className="text-lg font-bold font-display uppercase tracking-wide text-white">
                Saturday
              </h3>
              {status.currentDayIndex === 6 && (
                <span className="text-[11px] font-bold text-[#CCFF00] tracking-wider uppercase">
                  TODAY
                </span>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400 font-condensed font-semibold">
                  MORNING SHIFT
                </p>
                <p className="text-lg font-bold text-white tabular-nums mt-0.5">
                  8:00 AM — 3:00 PM
                </p>
              </div>

              <div className="pt-2 border-t border-white/5">
                <p className="text-xs uppercase tracking-widest text-neutral-400 font-condensed font-semibold">
                  EVENING SHIFT
                </p>
                <p className="text-lg font-bold text-white tabular-nums mt-0.5">
                  4:00 PM — 11:30 PM
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Sunday */}
          <div
            className={`p-6 sm:p-7 border transition-all ${
              status.currentDayIndex === 0
                ? 'bg-[#151A1F] border-[#CCFF00]/50 ring-1 ring-[#CCFF00]/20'
                : 'bg-[#12161A] border-white/10'
            }`}
          >
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
              <h3 className="text-lg font-bold font-display uppercase tracking-wide text-white">
                Sunday
              </h3>
              {status.currentDayIndex === 0 && (
                <span className="text-[11px] font-bold text-[#CCFF00] tracking-wider uppercase">
                  TODAY
                </span>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400 font-condensed font-semibold">
                  SCHEDULE
                </p>
                <p className="text-xl font-bold text-neutral-400 uppercase tracking-wider mt-0.5">
                  Closed
                </p>
              </div>

              <div className="pt-2 border-t border-white/5">
                <p className="text-xs text-neutral-500">
                  Weekly rest day. The gym resumes regular schedule Monday at 8:00 AM.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Note on timings */}
        <div className="mt-8 text-xs text-neutral-500 flex items-center gap-2">
          <span>* Timings are based on verified gym business hours. Please call prior to holiday visits.</span>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { VERIFIED_BUSINESS } from '../types';

export const Introduction: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#090B0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Editorial Section Marker & Index */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-[#CCFF00] uppercase mb-4">
              <span>01. INTRODUCTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-white leading-tight">
              TRAIN WITH <br />
              INTENTION.
            </h2>
            <div className="w-12 h-[2px] bg-[#CCFF00] mt-6" />
          </div>

          {/* Right Column: Factual & Modest Statement */}
          <div className="lg:col-span-8 space-y-6">
            <p className="text-xl sm:text-2xl text-neutral-200 font-light leading-relaxed">
              FISICO FITNESS GYM is located in Arbab Town on Samungli Road, Quetta. The gym provides a dedicated environment for people focused on regular fitness and training.
            </p>

            <p className="text-base text-neutral-400 font-normal leading-relaxed">
              Situated within the Gulshan-e-Sufyan area on Samungli Road, the facility operates morning and evening workout sessions from Monday through Saturday, accommodating members balancing daily training with professional and personal commitments.
            </p>

            {/* Verified Trust Evidence: 4.6 Rating from 64 Reviews (Zero-Pill Discipline) */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                  4.6<span className="text-[#CCFF00] text-2xl ml-1">★</span>
                </p>
                <p className="text-xs uppercase tracking-wider text-neutral-400 mt-1">
                  Google Maps Rating
                </p>
              </div>

              <div>
                <p className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight tabular-nums">
                  64
                </p>
                <p className="text-xs uppercase tracking-wider text-neutral-400 mt-1">
                  Verified Local Reviews
                </p>
              </div>

              <div>
                <p className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                  6 <span className="text-base font-normal text-neutral-400 font-sans">Days/Wk</span>
                </p>
                <p className="text-xs uppercase tracking-wider text-neutral-400 mt-1">
                  Mon – Sat Training Hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

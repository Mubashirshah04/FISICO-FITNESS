import React from 'react';
import { Phone, MapPin, ArrowRight } from 'lucide-react';
import { VERIFIED_BUSINESS } from '../types';
import heroBg from '../assets/images/hero_gym_interior_1790447465076.jpg';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#090B0D]"
    >
      {/* Background Cinematic Image with Measured Dark Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Atmospheric conceptual interior of a modern strength training gym with calibrated weights and architectural lighting"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite] opacity-40 transition-transform duration-1000 ease-out hover:scale-100"
          onError={(e) => {
            // Elegant CSS fallback container
            (e.currentTarget as HTMLElement).style.display = 'none';
          }}
        />
        {/* Measured contrast scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090B0D] via-[#090B0D]/75 to-[#090B0D]/50" />
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#CCFF00]/10 blur-[130px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-4xl">
          {/* Subtle contextual metadata kicker - clean text without pill enclosure */}
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-widest text-[#CCFF00] uppercase mb-4 sm:mb-6">
            <span className="inline-block w-2 h-2 bg-[#CCFF00] rounded-none"></span>
            <span>FISICO FITNESS GYM</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-300">ARBAB TOWN, QUETTA</span>
          </div>

          {/* Large headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-[#F5F5F0] uppercase leading-[0.95] text-balance mb-6 sm:mb-8">
            BUILD YOUR <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E5E6DF] to-neutral-400">
              STRONGER SELF.
            </span>
          </h1>

          {/* Supporting verified copy */}
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10 text-balance">
            FISICO FITNESS GYM in Arbab Town, Quetta — a dedicated space for training, movement and fitness.
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <a
              href={`tel:${VERIFIED_BUSINESS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider text-black bg-[#CCFF00] hover:bg-[#b5e300] active:scale-[0.99] transition-all rounded-sm shadow-[0_0_30px_rgba(204,255,0,0.3)] group"
            >
              <Phone className="w-4 h-4 stroke-[2.5]" />
              <span>Call FISICO</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#location"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[#F1F2EE] bg-white/5 hover:bg-white/10 hover:border-white/30 border border-white/15 transition-all rounded-sm backdrop-blur-sm"
            >
              <MapPin className="w-4 h-4 text-[#CCFF00]" />
              <span>Find the Gym</span>
            </a>
          </div>

          {/* Verified Google Review Proof Marker (Anti-slop clean typography) */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-neutral-400">
            <div className="flex items-center gap-1.5 text-[#CCFF00] font-bold">
              <span>★</span>
              <span>4.6</span>
            </div>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>64 Google reviews</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-300">Gulshan-e-Sufyan, Samungli Road</span>
          </div>

          {/* Subtle conceptual image note */}
          <p className="mt-3 text-[11px] text-neutral-500 tracking-wide">
            * Conceptual architectural visualization of modern fitness interior.
          </p>
        </div>
      </div>
    </section>
  );
};

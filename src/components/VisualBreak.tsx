import React from 'react';

export const VisualBreak: React.FC = () => {
  return (
    <section
      aria-label="Discipline Philosophy"
      className="relative py-16 sm:py-20 md:py-28 bg-black overflow-hidden border-y border-white/10"
    >
      {/* Background Architectural Grid & Subtle Radial Glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#CCFF00]/5 blur-[120px] pointer-events-none" />

      {/* Fine technical hairline lines */}
      <div className="absolute left-6 sm:left-12 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden md:block" />
      <div className="absolute right-6 sm:right-12 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden md:block" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle technical top coordinate */}
        <p className="text-[11px] sm:text-xs font-mono tracking-widest text-[#CCFF00] uppercase mb-4 sm:mb-6 opacity-80">
          30°11'N · 66°59'E · SAMUNGLI ROAD
        </p>

        {/* Responsive, balanced typography */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display uppercase tracking-tight text-white leading-tight sm:leading-tight text-balance">
          DISCIPLINE <br className="hidden sm:inline" />
          <span className="text-neutral-500 hover:text-white transition-colors duration-300">
            IS A DAILY
          </span> <br className="hidden sm:inline" />
          CHOICE.
        </h2>

        {/* Subtle bottom note */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs tracking-widest uppercase text-neutral-400 font-condensed">
          <span>CONSISTENCY</span>
          <span className="text-[#CCFF00]">/</span>
          <span>EFFORT</span>
          <span className="text-[#CCFF00]">/</span>
          <span>HABIT</span>
        </div>
      </div>
    </section>
  );
};


import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { VERIFIED_BUSINESS } from '../types';
import spaceImg from '../assets/images/experience_gym_space_1790447519235.jpg';

export const GymExperience: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#090B0D] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Large Conceptual Gym Image */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden bg-black/50 border border-white/10 group">
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <img
                  src={spaceImg}
                  alt="Atmospheric architectural perspective of a contemporary gym training environment"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Bottom caption */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-neutral-400">
                <span className="font-condensed uppercase tracking-wider">
                  TRAINING ATMOSPHERE
                </span>
                <span className="text-neutral-500 italic">
                  *Conceptual gym visualization
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-[#CCFF00] uppercase mb-4">
              <span>03. GYM ENVIRONMENT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-white leading-tight mb-6">
              A SPACE TO <br />
              SHOW UP.
            </h2>

            <p className="text-lg text-neutral-300 font-normal leading-relaxed mb-8">
              Whether your goal is to maintain a regular fitness routine or make training part of your lifestyle, FISICO provides a dedicated gym environment in Arbab Town, Quetta.
            </p>

            <p className="text-sm text-neutral-400 font-normal leading-relaxed mb-8">
              Located conveniently along Samungli Road in Gulshan-e-Sufyan, FISICO is set up for focused workout sessions with split daily shifts suited to working professionals, students, and fitness enthusiasts.
            </p>

            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#CCFF00] hover:bg-[#b8e600] active:scale-[0.98] transition-all rounded-sm shadow-[0_0_25px_rgba(204,255,0,0.25)] group"
              >
                <span>Contact FISICO</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

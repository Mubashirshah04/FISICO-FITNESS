import React from 'react';
import strengthImg from '../assets/images/training_strength_1790447482644.jpg';
import conditioningImg from '../assets/images/training_conditioning_1790447504896.jpg';
import consistencyImg from '../assets/images/experience_gym_space_1790447519235.jpg';

export const TrainingCategories: React.FC = () => {
  const categories = [
    {
      index: '01',
      title: 'STRENGTH',
      description: 'Resistance training, barbell movements, and progressive overload fundamentals for building physical strength and structural resilience.',
      imgSrc: strengthImg,
      alt: 'Calibrated cast iron weight plates and barbell resting on gym rubber flooring',
    },
    {
      index: '02',
      title: 'CONDITIONING',
      description: 'Active movement, stamina work, and cardiovascular fitness aimed at athletic energy output and aerobic work capacity.',
      imgSrc: conditioningImg,
      alt: 'Athletic silhouette engaging in dynamic movement training in dramatic fitness facility lighting',
    },
    {
      index: '03',
      title: 'CONSISTENCY',
      description: 'Showing up repeatedly with structure and discipline. Establishing a daily routine that compounds into lasting physical conditioning.',
      imgSrc: consistencyImg,
      alt: 'Disciplined architectural gym floor at dusk with clean equipment lines and focused lighting',
    },
  ];

  return (
    <section id="training" className="py-20 sm:py-28 bg-[#0C0F12] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-[#CCFF00] uppercase mb-3">
            <span>02. TRAINING THEMES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-none">
            YOUR TRAINING. <br />
            YOUR ROUTINE.
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg max-w-xl">
            A broad exploration of the foundational pillars of physical training.
          </p>
        </div>

        {/* 3 Visual Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group relative bg-[#12161A] border border-white/10 hover:border-[#CCFF00]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Image Container with 4:3 Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                <img
                  src={cat.imgSrc}
                  alt={cat.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12161A] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-xs font-mono font-bold tracking-widest text-neutral-400 bg-black/60 px-2.5 py-1 border border-white/10">
                  {cat.index}
                </span>
              </div>

              {/* Text Container */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold font-display uppercase tracking-wide text-white group-hover:text-[#CCFF00] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-500 font-condensed tracking-wider uppercase">
                  <span>FOUNDATION</span>
                  <span className="text-neutral-400">DAILY DISCIPLINE</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Explicit Disclaimer */}
        <div className="mt-10 sm:mt-12 p-4 bg-white/[0.02] border border-white/10">
          <p className="text-xs sm:text-sm text-neutral-400 text-center font-normal leading-relaxed">
            <strong className="text-neutral-300">Notice:</strong> Training focus and available facilities should be confirmed directly with the gym. These categories represent general fitness themes rather than official programs.
          </p>
        </div>
      </div>
    </section>
  );
};

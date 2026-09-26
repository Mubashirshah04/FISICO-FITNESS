import React, { useState } from 'react';
import { MapPin, Phone, ExternalLink, Copy, Check, Navigation } from 'lucide-react';
import { VERIFIED_BUSINESS } from '../types';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(VERIFIED_BUSINESS.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#090B0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Location Details */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-[#CCFF00] uppercase mb-3">
                <span>05. LOCATION & ACCESS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-none mb-6">
                FIND FISICO.
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-8">
                Located on the prominent Samungli Road corridor in Arbab Town, Quetta. Easily accessible for local residents and commuters.
              </p>

              {/* Exact Address Box */}
              <div className="p-6 bg-[#12161A] border border-white/10 mb-6 relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start space-x-3.5">
                    <MapPin className="w-5 h-5 text-[#CCFF00] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-neutral-400 font-condensed font-semibold">
                        OFFICIAL ADDRESS
                      </p>
                      <p className="text-base sm:text-lg font-bold text-white mt-1 leading-snug">
                        {VERIFIED_BUSINESS.address.full}
                      </p>
                      <p className="text-xs text-neutral-400 mt-1">
                        Located in: Sadat Shopping Centre area / Gulshan-e-Sufyan
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    title="Copy full address"
                    className="p-2.5 text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm transition-colors shrink-0"
                    aria-label="Copy Address"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-[#CCFF00]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {copied && (
                  <p className="text-xs text-[#CCFF00] mt-3 font-mono">
                    ✓ Address copied to clipboard
                  </p>
                )}
              </div>

              {/* Verified Phone Contact Box */}
              <div className="p-6 bg-[#12161A] border border-white/10 mb-8">
                <div className="flex items-center space-x-3.5">
                  <Phone className="w-5 h-5 text-[#CCFF00] shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-neutral-400 font-condensed font-semibold">
                      DIRECT PHONE
                    </p>
                    <a
                      href={`tel:${VERIFIED_BUSINESS.phoneRaw}`}
                      className="text-lg sm:text-xl font-bold font-mono text-white hover:text-[#CCFF00] transition-colors mt-0.5 inline-block"
                    >
                      {VERIFIED_BUSINESS.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`tel:${VERIFIED_BUSINESS.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#CCFF00] hover:bg-[#b8e600] active:scale-[0.98] transition-all rounded-sm text-center shadow-[0_0_20px_rgba(204,255,0,0.2)]"
              >
                <Phone className="w-4 h-4 stroke-[2.5]" />
                <span>Call Now</span>
              </a>

              <a
                href={VERIFIED_BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-sm transition-all text-center"
              >
                <Navigation className="w-4 h-4 text-[#CCFF00]" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500 ml-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Map & Navigation Visual */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 min-h-[380px] bg-[#101418] border border-white/10 p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
              {/* Technical Grid background */}
              <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

              {/* Decorative Architectural Road Map Vector */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <svg
                  className="w-full h-full opacity-25"
                  viewBox="0 0 600 450"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Samungli Road Axis */}
                  <path
                    d="M 50 400 L 550 50"
                    stroke="#CCFF00"
                    strokeWidth="4"
                    strokeDasharray="6 6"
                  />
                  {/* Cross Streets */}
                  <path d="M 120 40 L 400 420" stroke="#FFFFFF" strokeWidth="1.5" />
                  <path d="M 280 40 L 500 360" stroke="#FFFFFF" strokeWidth="1" />
                  <path d="M 40 220 L 520 280" stroke="#FFFFFF" strokeWidth="1" />

                  {/* Arbab Town Area Marker */}
                  <circle cx="340" cy="200" r="48" stroke="#CCFF00" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="340" cy="200" r="6" fill="#CCFF00" />
                </svg>
              </div>

              {/* Map Card Header */}
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#CCFF00] tracking-widest uppercase">
                    LOCAL ROAD CORRIDOR
                  </span>
                  <h4 className="text-xl font-bold font-display uppercase tracking-wider text-white mt-0.5">
                    SAMUNGLI RD / ARBAB TOWN
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">
                    COORDINATES
                  </span>
                  <p className="text-xs font-mono text-neutral-300">
                    30.183° N, 66.983° E
                  </p>
                </div>
              </div>

              {/* Center Pin Highlight */}
              <div className="relative z-10 my-auto py-10 text-center">
                <div className="inline-flex flex-col items-center p-6 bg-[#090B0D]/90 border border-[#CCFF00]/40 shadow-2xl backdrop-blur-md max-w-sm">
                  <div className="p-3 bg-[#CCFF00] text-black mb-3">
                    <MapPin className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <h5 className="text-base font-bold uppercase tracking-wider text-white">
                    FISICO FITNESS GYM
                  </h5>
                  <p className="text-xs text-neutral-400 mt-1">
                    Gulshan-e-Sufyan, Samungli Road
                  </p>
                  <p className="text-[11px] text-neutral-500 font-mono mt-0.5">
                    Arbab Town, Quetta, 83700
                  </p>
                </div>
              </div>

              {/* Map Footer Link */}
              <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-neutral-400">
                  Google Maps Verified Listing
                </span>
                <a
                  href={VERIFIED_BUSINESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#CCFF00] hover:underline flex items-center gap-1.5"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

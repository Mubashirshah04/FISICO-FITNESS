import React, { useState } from 'react';
import { Phone, Navigation, ArrowRight, MessageSquare, Check, X } from 'lucide-react';
import { VERIFIED_BUSINESS } from '../types';

export const ContactCTA: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inquiryText, setInquiryText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryText.trim()) return;

    // Direct WhatsApp message URL using verified phone number
    const encoded = encodeURIComponent(`Hello FISICO Fitness Gym, I would like to inquire about training: ${inquiryText.trim()}`);
    const whatsappUrl = `https://wa.me/923412386871?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setInquiryText('');
      setModalOpen(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#080A0C] relative overflow-hidden border-t border-white/10">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#CCFF00]/5 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#CCFF00] uppercase mb-4">
          <span className="w-2 h-2 bg-[#CCFF00]"></span>
          <span>GET IN TOUCH</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display uppercase tracking-tight text-white leading-none mb-6">
          READY TO START?
        </h2>

        <p className="text-lg sm:text-2xl text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12">
          Visit FISICO FITNESS GYM on Samungli Road, Arbab Town, Quetta.
        </p>

        {/* Primary Call & Directions Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href={`tel:${VERIFIED_BUSINESS.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 text-sm font-bold uppercase tracking-wider text-black bg-[#CCFF00] hover:bg-[#b8e600] active:scale-[0.98] transition-all rounded-sm shadow-[0_0_35px_rgba(204,255,0,0.3)] group"
          >
            <Phone className="w-5 h-5 stroke-[2.5]" />
            <span>CALL {VERIFIED_BUSINESS.phone}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href={VERIFIED_BUSINESS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 sm:px-9 sm:py-5 text-sm font-semibold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 hover:border-white/30 border border-white/15 rounded-sm transition-all"
          >
            <Navigation className="w-4 h-4 text-[#CCFF00]" />
            <span>GET DIRECTIONS</span>
          </a>
        </div>

        {/* Quick Message Option */}
        <div className="mt-8">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-[#CCFF00] transition-colors py-2"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Prefer to send a direct message inquiry? Click here</span>
          </button>
        </div>
      </div>

      {/* Inquiry Dialog Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg bg-[#12161A] border border-white/20 p-6 sm:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-mono text-[#CCFF00] uppercase tracking-wider">
                DIRECT INQUIRY
              </span>
              <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-white mt-1">
                CONTACT FISICO
              </h3>
              <p className="text-xs text-neutral-400 mt-2">
                Send your inquiry directly to <strong className="text-white">{VERIFIED_BUSINESS.phone}</strong> via WhatsApp or phone.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-center">
                <Check className="w-8 h-8 text-[#CCFF00] mx-auto mb-2" />
                <p className="text-sm font-bold text-white uppercase tracking-wider">
                  Opening WhatsApp...
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label htmlFor="inquiry-message" className="block text-xs uppercase font-condensed tracking-wider text-neutral-400 mb-1.5">
                    Your Question or Visit Inquiry
                  </label>
                  <textarea
                    id="inquiry-message"
                    required
                    rows={3}
                    value={inquiryText}
                    onChange={(e) => setInquiryText(e.target.value)}
                    placeholder="E.g., I would like to visit the gym today during the evening shift..."
                    className="w-full px-3.5 py-2.5 bg-black/50 border border-white/15 text-white text-sm placeholder:text-neutral-600 focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00] focus:outline-none rounded-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 text-xs font-bold uppercase tracking-wider text-black bg-[#CCFF00] hover:bg-[#b8e600] rounded-sm transition-all"
                  >
                    <span>Send Message</span>
                  </button>

                  <a
                    href={`tel:${VERIFIED_BUSINESS.phoneRaw}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 rounded-sm transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Direct</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeroDetailStrip } from './components/HeroDetailStrip';
import { Introduction } from './components/Introduction';
import { TrainingCategories } from './components/TrainingCategories';
import { VisualBreak } from './components/VisualBreak';
import { GymExperience } from './components/GymExperience';
import { HoursSection } from './components/HoursSection';
import { LocationSection } from './components/LocationSection';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090B0D] text-[#F1F2EE] flex flex-col selection:bg-[#CCFF00] selection:text-black">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 pb-16 md:pb-0">
        <Hero />
        <HeroDetailStrip />
        <Introduction />
        <TrainingCategories />
        <VisualBreak />
        <GymExperience />
        <HoursSection />
        <LocationSection />
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar />
    </div>
  );
}


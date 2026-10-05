/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback } from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AiSection } from './components/AiSection';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';

export default function App() {
  const [downloadState, setDownloadState] = useState<'idle' | 'started'>('idle');

  const triggerApkDownload = useCallback(() => {
    setDownloadState('started');

    // Trigger download of the actual APK available in assets/
    const link = document.createElement('a');
    link.href = 'assets/ZeninOS_1.0.apk';
    link.setAttribute('download', 'ZeninOS_1.0.apk');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset button label after 3.5s
    setTimeout(() => {
      setDownloadState('idle');
    }, 3500);
  }, []);

  const handleHeroOrNavDownload = useCallback(() => {
    const downloadEl = document.getElementById('download');
    if (downloadEl) {
      downloadEl.scrollIntoView({ behavior: 'smooth' });
    }
    // Also initiate download smoothly
    setTimeout(() => {
      triggerApkDownload();
    }, 400);
  }, [triggerApkDownload]);

  return (
    <div className="relative min-h-screen bg-[#FFFDF8] text-slate-800 font-sans selection:bg-[#FF8A65]/20 selection:text-[#FF4D6D]">
      {/* Subtle fruit-inspired ambient gradient background */}
      <AmbientBackground />

      {/* Navigation Bar */}
      <Navbar onDownloadClick={handleHeroOrNavDownload} />

      {/* Main Content: 4 Core Sections */}
      <main className="relative z-10">
        {/* Section 1: Hero */}
        <HeroSection onDownloadClick={handleHeroOrNavDownload} />

        {/* Section 2: Features (6 compact cards) */}
        <FeaturesSection />

        {/* Section 3: AI (Large premium colorful section) */}
        <AiSection />

        {/* Section 4: Download */}
        <DownloadSection 
          downloadState={downloadState} 
          onDownload={triggerApkDownload} 
        />
      </main>

      {/* Section 5: Small Footer */}
      <Footer onDownloadClick={handleHeroOrNavDownload} />
    </div>
  );
}

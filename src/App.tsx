/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AnimatedMovingTicker } from './components/AnimatedMovingTicker.tsx';
import { FeaturesSection } from './components/FeaturesSection.tsx';
import { AISection } from './components/AiSection.tsx';
import { DownloadSection } from './components/DownloadSection.tsx';
import { Footer } from './components/Footer.tsx';
import { AmbientBackground } from './components/AmbientBackground.tsx';

export default function App() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = useCallback(() => {
    // Direct link to the real discovered APK
    const apkUrl = 'assets/ZeninOS_1.0.apk';
    const link = document.createElement('a');
    link.href = apkUrl;
    link.setAttribute('download', 'ZeninOS_1.0.apk');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Provide temporary visual confirmation
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
    }, 2800);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FFFDF8] text-[#1E293B] flex flex-col font-['Poppins',sans-serif]">
      {/* Background ambient lighting and subtle gradient depths */}
      <AmbientBackground />

      {/* Header and Navigation (No download CTA button in navbar) */}
      <Navbar />

      {/* Main Content: Exactly the 4 Content Sections */}
      <main className="flex-grow">
        {/* SECTION 1: HERO */}
        <Hero onDownloadClick={handleDownload} downloading={downloading} />

        {/* Dynamic Animated Styled Moving Lines & Words Stream */}
        <AnimatedMovingTicker />

        {/* SECTION 2: FEATURES (No card-stats) */}
        <FeaturesSection />

        {/* SECTION 3: AI DAY PLANNER (No card-stats) */}
        <AISection />

        {/* SECTION 4: DOWNLOAD */}
        <DownloadSection onDownloadClick={handleDownload} downloading={downloading} />
      </main>

      {/* SECTION 5: FOOTER */}
      <Footer />
    </div>
  );
}

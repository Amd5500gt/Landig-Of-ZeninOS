import React from 'react';
import { ArrowDownToLine, Compass, Sparkles } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

interface HeroSectionProps {
  onDownloadClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onDownloadClick }) => {
  return (
    <section 
      id="hero" 
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Hero Copy & Actions (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          
          {/* Subtle Category Kicker - Zero-Pill discipline: unboxed text */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-slate-500 mb-4 sm:mb-5">
            <span className="inline-flex items-center gap-1.5 text-[#FF4D6D]">
              <Sparkles className="w-4 h-4 text-[#FF4D6D]" />
              Zenin OS 2.0
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Intelligent Architecture</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>By N11HUB</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] [text-wrap:balance]">
            Build Better Days.{' '}
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8A65] via-[#FF4D6D] to-[#9B6DFF]"
            >
              One Plan at a Time.
            </span>
          </h1>

          {/* Short Description */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl [text-wrap:balance]">
            Zenin OS is an intelligent productivity system designed to help you plan, focus, execute and improve your day.
          </p>

          {/* Dual Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
            {/* Download Zenin OS */}
            <button
              onClick={onDownloadClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white shadow-lg shadow-[#FF4D6D]/25 hover:shadow-xl hover:shadow-[#FF8A65]/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all duration-200 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #FF8A65 0%, #FF4D6D 48%, #9B6DFF 100%)'
              }}
            >
              <ArrowDownToLine className="w-4 h-4" />
              <span>Download Zenin OS</span>
            </button>

            {/* Explore Features */}
            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-700 bg-white/80 hover:bg-white border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all duration-200 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-slate-500" />
              <span>Explore Features</span>
            </a>
          </div>

          {/* Fast Spec Micro-Indicators */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-5 sm:gap-7 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FFB347]" />
              <span>Android 9.0+</span>
            </div>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#9B6DFF]" />
              <span>Version 2.0</span>
            </div>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#A8E063]" />
              <span>Direct APK</span>
            </div>
          </div>
        </div>

        {/* Right Column: Abstract 3D Productivity Visual (5 cols) */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};

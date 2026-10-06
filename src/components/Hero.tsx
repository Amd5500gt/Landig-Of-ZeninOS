import React from 'react';
import { Download, ArrowRight, Smartphone, HardDrive, Check } from 'lucide-react';
import { HeroVisual3D } from './HeroVisual3D.tsx';

interface HeroProps {
  onDownloadClick: () => void;
  downloading: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadClick, downloading }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden"
      aria-label="Hero Introduction"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top Floating Specification Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#FFB347]/30 bg-white/80 px-4 py-1.5 text-xs font-semibold text-[#B45309] shadow-sm backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-[#FFB347] animate-pulse" />
            <span>ZeninOS 2.0</span>
            <span className="text-[#CBD5E1]">/</span>
            <span className="flex items-center gap-1 text-[#475569]">
              <Smartphone className="h-3.5 w-3.5 text-[#FF8A65]" /> Android
            </span>
            <span className="text-[#CBD5E1]">/</span>
            <span className="flex items-center gap-1 text-[#475569]">
              <HardDrive className="h-3.5 w-3.5 text-[#4D8DFF]" /> ~5 MB
            </span>
          </div>
        </div>

        {/* Dynamic Architectural Grid Layout */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Text & Interactive Flow Column */}
          <div className="text-center lg:col-span-7 lg:text-left">
            {/* Single Semantic H1 with Animated Flow Line */}
            <h1 className="relative text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl md:text-6xl leading-[1.1] inline-block">
              <span>Build Better Days.</span>
              <span className="block mt-2 bg-gradient-to-r from-[#FF8A65] via-[#FF4D6D] to-[#9B6DFF] bg-clip-text text-transparent">
                One Plan at a Time.
              </span>

              {/* Animated Styled Moving Underline Vector */}
              <svg
                className="mt-2 h-3 w-48 sm:w-64 max-w-full mx-auto lg:mx-0 overflow-visible"
                viewBox="0 0 240 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 0 6 Q 60 0, 120 6 T 240 6"
                  stroke="url(#underlineGrad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animate-flow-dash"
                />
                <defs>
                  <linearGradient id="underlineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFB347" />
                    <stop offset="50%" stopColor="#FF4D6D" />
                    <stop offset="100%" stopColor="#9B6DFF" />
                  </linearGradient>
                </defs>
              </svg>
            </h1>

            {/* Supporting Pitch */}
            <p className="mt-6 max-w-xl text-base sm:text-lg text-[#475569] leading-relaxed mx-auto lg:mx-0 font-normal">
              ZeninOS is an intelligent productivity system designed to help you plan, focus, execute and improve your day.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={onDownloadClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0F172A] px-7 py-3.5 text-sm font-semibold text-[#FFFDF8] shadow-md hover:bg-[#1E293B] hover:shadow-lg transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F172A] focus-visible:ring-offset-2"
              >
                {downloading ? (
                  <>
                    <Check className="h-4 w-4 text-[#A8E063] stroke-[3]" />
                    <span>Download Started ✓</span>
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4 text-[#FFB347]" />
                    <span>Download ZeninOS</span>
                  </>
                )}
              </button>

              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#CBD5E1] bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#334155] hover:bg-white hover:text-[#0F172A] hover:border-[#94A3B8] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB347]"
              >
                <span>Explore Features</span>
                <ArrowRight className="h-4 w-4 text-[#64748B]" />
              </a>
            </div>

            {/* Clean Spec Micro-indicators (No fake card-stats) */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-xs text-[#64748B]">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#A8E063]" />
                Direct APK
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#4D8DFF]" />
                Android Native
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#9B6DFF]" />
                Lightweight (~5 MB)
              </span>
            </div>
          </div>

          {/* Right 3D Visual Stage */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroVisual3D />
          </div>
        </div>
      </div>
    </section>
  );
};

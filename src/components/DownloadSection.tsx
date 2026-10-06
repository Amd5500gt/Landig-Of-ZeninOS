import React from 'react';
import { Download, Smartphone, HardDrive, ShieldCheck, Check } from 'lucide-react';

interface DownloadSectionProps {
  onDownloadClick: () => void;
  downloading: boolean;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({
  onDownloadClick,
  downloading,
}) => {
  return (
    <section
      id="download"
      className="relative py-20 md:py-28 overflow-hidden"
      aria-labelledby="download-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Full-width Panoramic Card with Moving Line Backdrops */}
        <div className="relative overflow-hidden rounded-[32px] border border-[#E2E8F0] bg-gradient-to-br from-white via-[#FFF8F0]/85 to-[#FFFDF8] p-8 sm:p-12 md:p-16 text-center shadow-[0_24px_64px_rgba(15,23,42,0.05)] backdrop-blur-md">
          {/* Ambient Lighting Field */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full ambient-glow-mango blur-[60px] opacity-70" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full ambient-glow-grape blur-[70px] opacity-60" />

          {/* Animated decorative flowing SVG paths inside card */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M -50 150 Q 250 50, 550 150 T 1150 150"
              stroke="#FFB347"
              strokeWidth="2"
              fill="none"
              className="animate-flow-dash"
            />
            <path
              d="M -50 250 Q 250 350, 550 250 T 1150 250"
              stroke="#9B6DFF"
              strokeWidth="1.5"
              fill="none"
              className="animate-flow-dash-fast"
            />
          </svg>

          {/* Platform Badge */}
          <div className="relative z-10 inline-flex items-center gap-2 rounded-full border border-[#FF8A65]/30 bg-white/90 px-4 py-1.5 text-xs font-semibold text-[#C2410C] shadow-sm mb-6">
            <Smartphone className="h-3.5 w-3.5 text-[#FF8A65]" />
            <span>Android Production Release</span>
            <span className="text-[#CBD5E1]">•</span>
            <span className="text-[#64748B]">v2.0</span>
          </div>

          {/* Heading */}
          <h2
            id="download-heading"
            className="relative z-10 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl"
          >
            Ready to build better days?
          </h2>

          {/* Subtitle */}
          <p className="relative z-10 mt-4 text-lg sm:text-xl font-medium text-[#475569] max-w-xl mx-auto">
            Download ZeninOS for Android.
          </p>

          {/* Clean Specification Tags (No cards-stats) */}
          <div className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#64748B]">
            <div className="flex items-center gap-1.5">
              <Smartphone className="h-4 w-4 text-[#FF4D6D]" />
              <span className="font-medium text-[#1E293B]">Android</span>
            </div>
            <span className="text-[#CBD5E1] hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <HardDrive className="h-4 w-4 text-[#FFB347]" />
              <span className="font-medium text-[#1E293B]">~5 MB</span>
            </div>
            <span className="text-[#CBD5E1] hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#A8E063]" />
              <span className="font-medium text-[#1E293B]">Verified Safe APK</span>
            </div>
          </div>

          {/* Download APK Button */}
          <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onDownloadClick}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-4 text-base font-semibold shadow-md transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                downloading
                  ? 'bg-[#15803D] text-white focus-visible:ring-[#15803D]'
                  : 'bg-[#0F172A] text-[#FFFDF8] hover:bg-[#1E293B] hover:shadow-lg focus-visible:ring-[#0F172A]'
              }`}
            >
              {downloading ? (
                <>
                  <Check className="h-5 w-5 text-[#A8E063] stroke-[3]" />
                  <span>Download Started ✓</span>
                </>
              ) : (
                <>
                  <Download className="h-5 w-5 text-[#FFB347]" />
                  <span>Download APK</span>
                </>
              )}
            </button>
          </div>

          {/* Discovered APK path info */}
          <div className="relative z-10 mt-6 text-xs text-[#94A3B8]">
            Direct download: (~5.0 MB)
          </div>
        </div>
      </div>
    </section>
  );
};

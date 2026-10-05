import React, { useState } from 'react';
import { ArrowDownToLine, Check, ShieldCheck, Sparkles, Smartphone, DownloadCloud, FileCode2 } from 'lucide-react';

interface DownloadSectionProps {
  downloadState: 'idle' | 'started';
  onDownload: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ downloadState, onDownload }) => {
  return (
    <section id="download" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Large Premium Download Card */}
        <div 
          className="relative rounded-[26px] p-8 sm:p-12 lg:p-16 text-center overflow-hidden border border-white/80 shadow-[0_24px_60px_rgba(255,138,101,0.12)] bg-gradient-to-b from-white/95 via-white/85 to-[#FFF8F0]/90 backdrop-blur-xl"
        >
          {/* Subtle Ambient Fruit Glow */}
          <div 
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[540px] h-[340px] rounded-full blur-[100px] opacity-30 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, #FFB347 0%, #FF4D6D 45%, #9B6DFF 75%, transparent 90%)'
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            
            {/* Small icon badge */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FF8A65] via-[#FF4D6D] to-[#9B6DFF] text-white flex items-center justify-center shadow-lg shadow-[#FF4D6D]/25 mb-6">
              <DownloadCloud className="w-7 h-7 stroke-[2.2]" />
            </div>

            {/* Exact user heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
              Ready to build better days?
            </h2>

            {/* Exact user subtitle */}
            <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium [text-wrap:balance]">
              Download Zenin OS 2.0 for Android.
            </p>

            {/* Download CTA Button */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <button
                onClick={onDownload}
                disabled={downloadState === 'started'}
                className="w-full sm:w-auto min-w-[240px] py-4 px-8 rounded-full text-base font-semibold text-white shadow-xl shadow-[#FF4D6D]/30 hover:shadow-2xl hover:shadow-[#FF8A65]/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-95"
                style={{
                  background: downloadState === 'started'
                    ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
                    : 'linear-gradient(135deg, #FF8A65 0%, #FF4D6D 48%, #9B6DFF 100%)'
                }}
              >
                {downloadState === 'started' ? (
                  <>
                    <Check className="w-5 h-5 stroke-[2.5] animate-scale-check" />
                    <span>Download Started ✓</span>
                  </>
                ) : (
                  <>
                    <ArrowDownToLine className="w-5 h-5 stroke-[2.5]" />
                    <span>Download APK</span>
                  </>
                )}
              </button>
            </div>

            {/* Download Feedback confirmation alert */}
            {downloadState === 'started' && (
              <div className="mt-4 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-medium flex items-center gap-2 animate-in fade-in slide-in-from-top-1 duration-200">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Downloading assets/ZeninOS_1.0.apk to your device. Open the package to install.</span>
              </div>
            )}

            {/* Spec breakdown items (unboxed, clean typography) */}
            <div className="mt-10 pt-8 border-t border-slate-200/70 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="p-3 rounded-2xl bg-white/70 border border-white/90">
                <span className="text-[11px] font-medium text-slate-400 block mb-1">Package Name</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 flex items-center gap-1.5 truncate">
                  <FileCode2 className="w-3.5 h-3.5 text-[#FF8A65] shrink-0" />
                  <span>ZeninOS_1.0.apk</span>
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-white/70 border border-white/90">
                <span className="text-[11px] font-medium text-slate-400 block mb-1">Architecture</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 flex items-center gap-1.5 truncate">
                  <Smartphone className="w-3.5 h-3.5 text-[#9B6DFF] shrink-0" />
                  <span>Android 9.0+</span>
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-white/70 border border-white/90">
                <span className="text-[11px] font-medium text-slate-400 block mb-1">Official Release</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 flex items-center gap-1.5 truncate">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF4D6D] shrink-0" />
                  <span>Version 2.0.0</span>
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-white/70 border border-white/90">
                <span className="text-[11px] font-medium text-slate-400 block mb-1">Security Audit</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 flex items-center gap-1.5 truncate">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>N11HUB Verified</span>
                </span>
              </div>
            </div>

            {/* Direct installation instructions hint */}
            <p className="mt-6 text-xs text-slate-400">
              Direct sideload APK · Built with love by <a href="https://n11hub.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-600">N11HUB</a> · Safe & lightweight
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

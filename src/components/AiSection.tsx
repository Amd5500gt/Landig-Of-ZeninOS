import React, { useState } from 'react';
import { Sparkles, Sliders, ShieldCheck, Activity } from 'lucide-react';

type SimulationMode = 'morning' | 'shift' | 'evening';

export const AiSection: React.FC = () => {
  const [activeMode, setActiveMode] = useState<SimulationMode>('shift');

  return (
    <section id="ai" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Large Premium Card Container with 26px rounded corners & illuminated border */}
        <div 
          className="relative rounded-[26px] p-6 sm:p-10 lg:p-14 overflow-hidden border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.04)] bg-gradient-to-br from-white/90 via-white/80 to-[#FFF8F0]/90 backdrop-blur-xl"
        >
          {/* Subtle Ambient Fruit Glow Blobs inside the card */}
          <div 
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-[90px] opacity-25 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #9B6DFF 0%, #4D8DFF 60%, transparent 80%)'
            }}
          />
          <div 
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-[90px] opacity-20 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #FF4D6D 0%, #FFB347 60%, transparent 80%)'
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3 sm:mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#9B6DFF]" />
                <span>Autonomous Adaptation Engine</span>
              </div>

              {/* Exact user headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] [text-wrap:balance]">
                Your day.{' '}
                <span 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#9B6DFF] via-[#FF4D6D] to-[#FF8A65]"
                >
                  Adapted intelligently.
                </span>
              </h2>

              {/* Exact user short copy */}
              <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
                Plan your priorities, adjust your schedule and stay focused as your day changes.
              </p>

              {/* Clean Capability Highlights */}
              <div className="mt-8 space-y-4 w-full">
                <div className="p-3.5 rounded-2xl bg-white/60 border border-white/80 shadow-xs flex items-start gap-3.5 transition-colors hover:bg-white/80">
                  <div className="p-2 rounded-xl bg-[#FF8A65]/15 text-[#FF8A65] shrink-0 mt-0.5">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-800">
                      Real-time Timeline Recalculation
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Unexpected delay? Zenin OS absorbs slippage and re-allocates rest buffers instantly.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/60 border border-white/80 shadow-xs flex items-start gap-3.5 transition-colors hover:bg-white/80">
                  <div className="p-2 rounded-xl bg-[#9B6DFF]/15 text-[#9B6DFF] shrink-0 mt-0.5">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-800">
                      Cognitive Energy Harmonic
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Pairs your most demanding intellectual blocks with your biological alertness peaks.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/60 border border-white/80 shadow-xs flex items-start gap-3.5 transition-colors hover:bg-white/80">
                  <div className="p-2 rounded-xl bg-[#4D8DFF]/15 text-[#4D8DFF] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-800">
                      Priority Shield Protection
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Protects non-negotiable milestones from low-impact reactive tasks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Simulation Mode Segmented Filter */}
              <div className="mt-7 w-full">
                <span className="text-[11px] font-medium text-slate-400 block mb-2">
                  Interactive Engine Simulation:
                </span>
                <div className="flex items-center gap-2 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/60 max-w-md w-full">
                  <button
                    onClick={() => setActiveMode('morning')}
                    className={`flex-1 py-1.5 px-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer truncate ${
                      activeMode === 'morning'
                        ? 'bg-white text-slate-900 shadow-sm font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Deep Sprint
                  </button>
                  <button
                    onClick={() => setActiveMode('shift')}
                    className={`flex-1 py-1.5 px-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer truncate ${
                      activeMode === 'shift'
                        ? 'bg-white text-slate-900 shadow-sm font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Timeline Rebalance
                  </button>
                  <button
                    onClick={() => setActiveMode('evening')}
                    className={`flex-1 py-1.5 px-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer truncate ${
                      activeMode === 'evening'
                        ? 'bg-white text-slate-900 shadow-sm font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Rest & Synthesis
                  </button>
                </div>
              </div>
            </div>

            {/* Right Abstract AI 3D/Gradient Visual (6 cols) */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative w-full max-w-[460px] aspect-square rounded-[24px] p-6 bg-gradient-to-br from-white/95 to-slate-50/70 border border-white shadow-[0_16px_36px_rgba(0,0,0,0.05)] flex items-center justify-center overflow-hidden">
                
                {/* Background Ambient Orb inside container */}
                <div 
                  className="absolute inset-0 opacity-40 transition-all duration-700"
                  style={{
                    background: activeMode === 'morning'
                      ? 'radial-gradient(circle at 50% 50%, #FFB347 0%, #FF8A65 40%, transparent 75%)'
                      : activeMode === 'shift'
                      ? 'radial-gradient(circle at 50% 50%, #FF4D6D 0%, #9B6DFF 50%, transparent 80%)'
                      : 'radial-gradient(circle at 50% 50%, #4D8DFF 0%, #A8E063 50%, transparent 80%)'
                  }}
                />

                {/* SVG Abstract Multi-frequency Orbital Matrix */}
                <svg className="w-full h-full max-w-[380px] max-h-[380px] animate-spin-slow opacity-85" viewBox="0 0 360 360">
                  <defs>
                    <linearGradient id="aiGradA" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFB347" />
                      <stop offset="50%" stopColor="#FF4D6D" />
                      <stop offset="100%" stopColor="#9B6DFF" />
                    </linearGradient>
                    <linearGradient id="aiGradB" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#4D8DFF" />
                      <stop offset="60%" stopColor="#9B6DFF" />
                      <stop offset="100%" stopColor="#A8E063" />
                    </linearGradient>
                  </defs>

                  {/* Concentric harmonic orbits */}
                  <circle cx="180" cy="180" r="160" fill="none" stroke="url(#aiGradA)" strokeWidth="1.5" strokeDasharray="4 8" opacity="0.4" />
                  <circle cx="180" cy="180" r="125" fill="none" stroke="url(#aiGradB)" strokeWidth="1.8" strokeDasharray="8 6" opacity="0.6" />
                  <circle cx="180" cy="180" r="90" fill="none" stroke="#FF8A65" strokeWidth="1.2" opacity="0.5" />
                  <circle cx="180" cy="180" r="55" fill="none" stroke="#9B6DFF" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />

                  {/* Satellite nodes */}
                  <circle cx="180" cy="20" r="6" fill="#FFB347" className="animate-pulse" />
                  <circle cx="305" cy="180" r="5" fill="#FF4D6D" />
                  <circle cx="180" cy="340" r="5.5" fill="#9B6DFF" />
                  <circle cx="55" cy="180" r="5" fill="#4D8DFF" />
                  <circle cx="270" cy="90" r="4" fill="#A8E063" />
                </svg>

                {/* Counter-rotating harmonic wave petals */}
                <svg className="absolute w-[80%] h-[80%] animate-spin-reverse opacity-45 pointer-events-none" viewBox="0 0 200 200">
                  <path 
                    d="M100 20 C140 20, 180 60, 180 100 C180 140, 140 180, 100 180 C60 180, 20 140, 20 100 C20 60, 60 20, 100 20 Z" 
                    fill="none" 
                    stroke="url(#aiGradA)" 
                    strokeWidth="1.5" 
                  />
                  <ellipse cx="100" cy="100" rx="75" ry="30" fill="none" stroke="#4D8DFF" strokeWidth="1" transform="rotate(45 100 100)" />
                  <ellipse cx="100" cy="100" rx="75" ry="30" fill="none" stroke="#FF4D6D" strokeWidth="1" transform="rotate(-45 100 100)" />
                </svg>

                {/* Central Luminous Cognitive Core */}
                <div 
                  className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full flex flex-col items-center justify-center p-3 text-center transition-transform duration-500 hover:scale-105 shadow-xl"
                  style={{
                    background: activeMode === 'morning'
                      ? 'radial-gradient(circle at 35% 30%, #FFFDF8, #FFB347 40%, #FF8A65 80%)'
                      : activeMode === 'shift'
                      ? 'radial-gradient(circle at 35% 30%, #FFFDF8, #FF4D6D 40%, #9B6DFF 85%)'
                      : 'radial-gradient(circle at 35% 30%, #FFFDF8, #4D8DFF 40%, #A8E063 85%)',
                    boxShadow: '0 12px 36px rgba(0,0,0,0.12), inset 0 2px 6px rgba(255,255,255,0.8)'
                  }}
                >
                  <Sparkles className="w-6 h-6 text-white drop-shadow-sm mb-1" />
                  <span className="text-[11px] font-bold text-white tracking-wide uppercase">
                    {activeMode === 'morning' ? 'Peak Flow' : activeMode === 'shift' ? 'Adapting' : 'Rest State'}
                  </span>
                  <span className="text-[9px] text-white/90 font-medium">
                    {activeMode === 'morning' ? '98% Focus' : activeMode === 'shift' ? 'Balanced' : 'Synthesized'}
                  </span>
                </div>

                {/* Dynamic Floating Abstract Indicators */}
                <div 
                  className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white shadow-sm text-[10px] font-semibold text-slate-700 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFB347]" />
                  <span>Cognitive Sync: 100%</span>
                </div>

                <div 
                  className="absolute bottom-5 right-5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white shadow-sm text-[10px] font-semibold text-slate-700 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4D8DFF]" />
                  <span>Adaptive Buffer: Ready</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import { Check, Sparkles, Zap, Flame, Clock } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Subtle interactive parallax tilt on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = ((e.clientX - centerX) / rect.width) * 12;
      const y = ((e.clientY - centerY) / rect.height) * -12;
      setTilt({ x: Math.max(-10, Math.min(10, x)), y: Math.max(-10, Math.min(10, y)) });
    };

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
    };

    const node = containerRef.current;
    if (node) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      node.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (node) node.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-square max-w-[540px] mx-auto select-none [perspective:1000px] flex items-center justify-center p-4 sm:p-8"
    >
      {/* 3D Canvas Rig */}
      <div 
        className="relative w-full h-full flex items-center justify-center transition-transform duration-700 ease-out"
        style={{
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Soft Ambient Glow Halo behind the central orb */}
        <div 
          className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-[80px] opacity-45 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #FFB347 0%, #FF4D6D 45%, #9B6DFF 75%, transparent 95%)'
          }}
        />

        {/* Concentric Focus Rings (Concentric SVG Geometry) */}
        <svg 
          className="absolute w-[92%] h-[92%] pointer-events-none animate-spin-slow opacity-60" 
          viewBox="0 0 400 400"
        >
          {/* Outer dashed focus ring */}
          <circle 
            cx="200" 
            cy="200" 
            r="185" 
            fill="none" 
            stroke="url(#ringGrad1)" 
            strokeWidth="1.5" 
            strokeDasharray="6 8"
          />
          {/* Middle track */}
          <circle 
            cx="200" 
            cy="200" 
            r="145" 
            fill="none" 
            stroke="#FF8A65" 
            strokeWidth="1" 
            strokeOpacity="0.3"
          />
          {/* Orbiting focus indicator dot */}
          <circle cx="200" cy="15" r="4.5" fill="#FF4D6D" />
          <circle cx="345" cy="200" r="3" fill="#9B6DFF" />
          <circle cx="200" cy="385" r="4" fill="#A8E063" />
          
          <defs>
            <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFB347" stopOpacity="0.8" />
              <stop offset="35%" stopColor="#FF4D6D" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#9B6DFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#4D8DFF" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Inner Counter-Rotating Focus Ring */}
        <svg 
          className="absolute w-[72%] h-[72%] pointer-events-none animate-spin-reverse opacity-50" 
          viewBox="0 0 300 300"
        >
          <circle 
            cx="150" 
            cy="150" 
            r="120" 
            fill="none" 
            stroke="url(#ringGrad2)" 
            strokeWidth="1.2" 
            strokeDasharray="3 14"
          />
          <circle cx="270" cy="150" r="3.5" fill="#4D8DFF" />
          <circle cx="150" cy="30" r="2.5" fill="#FFB347" />

          <defs>
            <linearGradient id="ringGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4D8DFF" />
              <stop offset="50%" stopColor="#9B6DFF" />
              <stop offset="100%" stopColor="#FF8A65" />
            </linearGradient>
          </defs>
        </svg>

        {/* 1. Floating AI Orb at Center */}
        <div 
          className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full flex items-center justify-center animate-pulse-subtle shadow-2xl z-10"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #FFF8F0 0%, #FFB347 25%, #FF4D6D 55%, #9B6DFF 85%, #4D8DFF 100%)',
            boxShadow: '0 20px 60px -10px rgba(255, 77, 109, 0.45), 0 0 40px rgba(155, 109, 255, 0.35), inset 0 2px 12px rgba(255, 255, 255, 0.8)',
          }}
        >
          {/* Inner Light refraction */}
          <div className="absolute inset-2 rounded-full border border-white/40 pointer-events-none" />
          <div className="absolute top-4 left-6 w-12 h-6 bg-white/40 rounded-full blur-[4px] -rotate-30 pointer-events-none" />
          
          {/* Core AI Symbol */}
          <div className="flex flex-col items-center justify-center text-white drop-shadow-md">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-pulse" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-white/95 mt-1 uppercase">
              Zenin Core
            </span>
          </div>
        </div>

        {/* 2. Floating Task Card (Top-Left) */}
        <div 
          className="absolute -top-3 sm:top-4 -left-3 sm:left-2 z-20 w-52 sm:w-60 rounded-[22px] p-3.5 sm:p-4 bg-white/85 backdrop-blur-xl border border-white/90 shadow-[0_16px_36px_rgba(255,138,101,0.12),0_4px_16px_rgba(0,0,0,0.04)] animate-float-slow transition-transform hover:scale-105 duration-300"
          style={{ transform: 'translateZ(40px)' }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-[#FF8A65]" />
              <span>Deep Focus</span>
            </span>
            <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-xs">
              <Check className="w-3 h-3 stroke-[2.5]" />
            </span>
          </div>
          <div className="text-xs sm:text-sm font-semibold text-slate-800 tracking-tight">
            Design Architecture Review
          </div>
          <div className="mt-2.5 flex items-center gap-2">
            <div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full w-[82%]"
                style={{
                  background: 'linear-gradient(90deg, #FFB347, #FF4D6D)'
                }}
              />
            </div>
            <span className="text-[11px] font-semibold text-slate-500 tabular-nums">90m</span>
          </div>
        </div>

        {/* 3. Floating Task Card (Bottom-Right) */}
        <div 
          className="absolute -bottom-3 sm:bottom-4 -right-2 sm:right-2 z-20 w-52 sm:w-64 rounded-[22px] p-3.5 sm:p-4 bg-white/85 backdrop-blur-xl border border-white/90 shadow-[0_16px_36px_rgba(155,109,255,0.14),0_4px_16px_rgba(0,0,0,0.04)] animate-float-reverse transition-transform hover:scale-105 duration-300"
          style={{ transform: 'translateZ(48px)' }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#9B6DFF] animate-ping" />
              <span className="text-[11px] font-semibold text-purple-700 tracking-wide">
                AI Adapt Live
              </span>
            </div>
            <span className="text-[10px] font-medium text-slate-400">Buffered</span>
          </div>
          <div className="text-xs sm:text-sm font-semibold text-slate-800">
            Schedule balanced dynamically
          </div>
          <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
            Priorities preserved across all blocks
          </p>
        </div>

        {/* 4. Mini Floating Streak Token (Top-Right) */}
        <div 
          className="absolute top-2 sm:top-6 right-2 sm:right-10 z-20 rounded-[20px] px-3.5 py-2 bg-white/90 backdrop-blur-md border border-white/95 shadow-[0_10px_25px_rgba(255,179,71,0.2)] flex items-center gap-2 animate-float-slow"
          style={{ 
            animationDelay: '1.2s',
            transform: 'translateZ(30px)'
          }}
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#FFB347] to-[#FF4D6D] flex items-center justify-center text-white shadow-xs">
            <Flame className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-medium text-slate-400 leading-none">Habit Streak</span>
            <span className="text-xs font-bold text-slate-800 leading-tight">14 Days</span>
          </div>
        </div>

        {/* 5. Mini Floating Energy Pill (Bottom-Left) */}
        <div 
          className="absolute bottom-6 sm:bottom-10 left-0 sm:left-6 z-20 rounded-[20px] px-3.5 py-2 bg-white/90 backdrop-blur-md border border-white/95 shadow-[0_10px_25px_rgba(77,141,255,0.18)] flex items-center gap-2 animate-float-reverse"
          style={{ 
            animationDelay: '0.6s',
            transform: 'translateZ(35px)'
          }}
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#4D8DFF] to-[#9B6DFF] flex items-center justify-center text-white shadow-xs">
            <Zap className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-medium text-slate-400 leading-none">Execution</span>
            <span className="text-xs font-bold text-slate-800 leading-tight">Flow State 98%</span>
          </div>
        </div>

        {/* 6. Geometric 3D Objects: Prisms, Cubes & Check Token */}
        {/* Floating Golden Check Token */}
        <div 
          className="absolute top-24 left-6 sm:left-12 w-8 h-8 rounded-full bg-gradient-to-br from-[#A8E063] to-[#FFB347] flex items-center justify-center text-white shadow-md shadow-[#A8E063]/30 animate-float-slow z-15"
          style={{ animationDelay: '2.5s', transform: 'translateZ(50px)' }}
        >
          <Check className="w-4 h-4 stroke-[3]" />
        </div>

        {/* Small 3D Frosted Isometric Cube */}
        <div 
          className="absolute bottom-24 right-6 sm:right-10 w-9 h-9 rounded-xl bg-gradient-to-tr from-white/90 to-white/40 backdrop-blur-md border border-white shadow-lg rotate-45 animate-float-reverse z-15 flex items-center justify-center"
          style={{ animationDelay: '1.8s', transform: 'translateZ(25px)' }}
        >
          <div className="w-4 h-4 rounded-md bg-gradient-to-br from-[#FF4D6D]/40 to-[#9B6DFF]/50" />
        </div>

        {/* Floating Mini Grape Orb */}
        <div 
          className="absolute -top-1 right-28 w-4 h-4 rounded-full bg-gradient-to-tr from-[#9B6DFF] to-[#4D8DFF] shadow-sm shadow-[#9B6DFF]/50 animate-pulse"
        />

        {/* Floating Kiwi Particle */}
        <div 
          className="absolute bottom-12 right-28 w-3 h-3 rounded-full bg-[#A8E063] shadow-sm shadow-[#A8E063]/50 animate-ping"
          style={{ animationDuration: '3s' }}
        />

        {/* Floating Mango Particle */}
        <div 
          className="absolute top-16 left-32 w-2.5 h-2.5 rounded-full bg-[#FFB347] opacity-80"
        />
      </div>
    </div>
  );
};

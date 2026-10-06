import React, { useState, useEffect, useRef } from 'react';
import { Target, Clock, RefreshCw, Check, Sparkles } from 'lucide-react';

export const HeroVisual3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const rotateY = isHovered && !prefersReducedMotion ? mousePos.x * 14 : 0;
  const rotateX = isHovered && !prefersReducedMotion ? -mousePos.y * 14 : 0;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      className="relative mx-auto flex h-[360px] w-full max-w-[500px] items-center justify-center sm:h-[420px] md:h-[460px] perspective-container select-none"
      aria-label="Abstract 3D Productivity Representation"
    >
      <div
        className="relative flex h-full w-full items-center justify-center transition-transform duration-500 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        {/* Soft Ambient Depth Glow behind orb */}
        <div
          className="absolute h-64 w-64 rounded-full bg-gradient-to-tr from-[#FFB347]/30 via-[#FF4D6D]/20 to-[#9B6DFF]/30 blur-[60px] animate-pulse-glow"
          style={{ transform: 'translateZ(-40px)' }}
        />

        {/* Outer Focus Orbital Ring with Moving Stroke Lines */}
        <svg
          className="absolute h-[320px] w-[320px] sm:h-[370px] sm:w-[370px] pointer-events-none"
          viewBox="0 0 400 400"
          style={{ transform: 'translateZ(-20px)' }}
        >
          <circle
            cx="200"
            cy="200"
            r="170"
            fill="none"
            stroke="#9B6DFF"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            className="animate-flow-dash"
          />
          <circle
            cx="200"
            cy="200"
            r="135"
            fill="none"
            stroke="#FFB347"
            strokeWidth="1.5"
            strokeOpacity="0.45"
            className="animate-flow-dash-fast"
          />
        </svg>

        {/* Central Intelligent AI Orb */}
        <div
          className="relative z-10 flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center rounded-full animate-float-slow"
          style={{ transform: 'translateZ(30px)' }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFB347] via-[#FF4D6D] to-[#9B6DFF] p-[2.5px] shadow-[0_16px_40px_rgba(255,138,101,0.35)]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-tr from-[#FFFDF8] via-[#FFF8F0] to-[#FFFFFF] backdrop-blur-md">
              <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full overflow-hidden p-2 shadow-inner">
                <img
                  src="/assets/zeninos-logo.svg"
                  alt="ZeninOS Emblem"
                  className="h-full w-full object-contain animate-pulse"
                  width="64"
                  height="64"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Concept Node 1: PLAN (Top-Left) */}
        <div
          className="absolute top-4 left-2 sm:left-4 z-20 animate-float-slow"
          style={{
            transform: `translateZ(45px) translateX(${mousePos.x * 12}px) translateY(${mousePos.y * 12}px)`,
          }}
        >
          <div className="flex items-center gap-2.5 rounded-2xl border border-white/90 bg-white/90 px-3.5 py-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-md">
            <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#FFB347]/20 text-[#B45309]">
              <Target className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#B45309]">
                Plan
              </div>
              <div className="text-xs font-semibold text-[#0F172A]">
                Intentional Days
              </div>
            </div>
          </div>
        </div>

        {/* Floating Concept Node 2: FOCUS (Top-Right) */}
        <div
          className="absolute top-6 right-2 sm:right-4 z-20 animate-float-delay"
          style={{
            transform: `translateZ(50px) translateX(${mousePos.x * -10}px) translateY(${mousePos.y * -10}px)`,
          }}
        >
          <div className="flex items-center gap-2.5 rounded-2xl border border-white/90 bg-white/90 px-3.5 py-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-md">
            <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#FF4D6D]/20 text-[#FF4D6D]">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#FF4D6D]">
                Focus
              </div>
              <div className="text-xs font-semibold text-[#0F172A]">
                Deep Work Flow
              </div>
            </div>
          </div>
        </div>

        {/* Floating Concept Node 3: ADAPT (Bottom-Left) */}
        <div
          className="absolute bottom-8 left-1 sm:left-6 z-20 animate-float-delay"
          style={{
            transform: `translateZ(40px) translateX(${mousePos.x * 8}px) translateY(${mousePos.y * 8}px)`,
          }}
        >
          <div className="flex items-center gap-2.5 rounded-2xl border border-white/90 bg-white/90 px-3.5 py-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-md">
            <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#9B6DFF]/20 text-[#7C3AED]">
              <RefreshCw className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#7C3AED]">
                Adapt
              </div>
              <div className="text-xs font-semibold text-[#0F172A]">
                Dynamic Schedule
              </div>
            </div>
          </div>
        </div>

        {/* Floating Concept Node 4: COMPLETE (Bottom-Right) */}
        <div
          className="absolute bottom-4 right-2 sm:right-6 z-20 animate-float-slow"
          style={{
            transform: `translateZ(55px) translateX(${mousePos.x * -12}px) translateY(${mousePos.y * -12}px)`,
          }}
        >
          <div className="flex items-center gap-2.5 rounded-2xl border border-white/90 bg-white/90 px-3.5 py-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-md">
            <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#A8E063]/25 text-[#4D7C0F]">
              <Check className="h-4 w-4 stroke-[3]" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#4D7C0F]">
                Complete
              </div>
              <div className="text-xs font-semibold text-[#0F172A]">
                Consistent Action
              </div>
            </div>
          </div>
        </div>

        {/* Floating Geometric 3D Objects */}
        <div
          className="absolute -top-4 right-1/4 h-5 w-5 rounded-md bg-gradient-to-tr from-[#4D8DFF] to-[#A8E063] opacity-70 rotate-45 animate-float-slow pointer-events-none"
          style={{ transform: 'translateZ(25px)' }}
        />
        <div
          className="absolute bottom-14 left-1/4 h-3.5 w-3.5 rounded-full border-2 border-[#FFB347] opacity-60 animate-float-delay pointer-events-none"
          style={{ transform: 'translateZ(15px)' }}
        />
      </div>
    </div>
  );
};

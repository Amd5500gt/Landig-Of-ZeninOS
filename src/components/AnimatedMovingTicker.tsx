import React from 'react';
import { Sparkles, Zap, Flame, Compass, CheckCircle2, Cpu } from 'lucide-react';

export const AnimatedMovingTicker: React.FC = () => {
  const line1Words = [
    { text: 'AI DAY PLANNER', color: '#FFB347', icon: Sparkles },
    { text: 'REAL-TIME ADAPTATION', color: '#9B6DFF', icon: Cpu },
    { text: 'DEEP WORK FOCUS', color: '#FF4D6D', icon: Zap },
    { text: 'HABIT CONTINUITY', color: '#FF8A65', icon: Flame },
    { text: 'DAILY EVENING REVIEW', color: '#A8E063', icon: CheckCircle2 },
    { text: '5 MB NATIVE SPEED', color: '#4D8DFF', icon: Compass },
  ];

  const line2Words = [
    { text: 'PLAN WITH INTENTION', color: '#9B6DFF' },
    { text: 'EXECUTE WITH CLARITY', color: '#FFB347' },
    { text: 'ZERO DISTRACTION', color: '#4D8DFF' },
    { text: 'INTUITIVE TIME BLOCKING', color: '#FF4D6D' },
    { text: 'MINDFUL PRODUCTIVITY', color: '#A8E063' },
    { text: 'LIGHTWEIGHT AND FAST', color: '#FF8A65' },
  ];

  return (
    <div className="relative py-8 overflow-hidden select-none" aria-hidden="true">
      {/* Animated Styled Flowing SVG Wave Lines */}
      <div className="relative h-16 w-full max-w-6xl mx-auto px-4 mb-2 pointer-events-none">
        <svg
          viewBox="0 0 1200 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="streamGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFB347" stopOpacity="0.2" />
              <stop offset="30%" stopColor="#FF4D6D" stopOpacity="0.75" />
              <stop offset="70%" stopColor="#9B6DFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#4D8DFF" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="streamGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4D8DFF" stopOpacity="0.1" />
              <stop offset="40%" stopColor="#A8E063" stopOpacity="0.65" />
              <stop offset="80%" stopColor="#FF8A65" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#FFB347" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Flowing animated wave line 1 */}
          <path
            d="M 0 32 C 150 10, 300 54, 450 32 C 600 10, 750 54, 900 32 C 1050 10, 1150 54, 1200 32"
            stroke="url(#streamGrad1)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-flow-dash"
          />

          {/* Flowing animated wave line 2 */}
          <path
            d="M 0 32 C 150 54, 300 10, 450 32 C 600 54, 750 10, 900 32 C 1050 54, 1150 10, 1200 32"
            stroke="url(#streamGrad2)"
            strokeWidth="1.75"
            strokeLinecap="round"
            className="animate-flow-dash-fast"
          />

          {/* Glowing pulse nodes on the flowing lines */}
          <circle cx="300" cy="32" r="4" fill="#FF4D6D" className="animate-pulse" />
          <circle cx="600" cy="32" r="5" fill="#9B6DFF" className="animate-ping" style={{ animationDuration: '3s' }} />
          <circle cx="900" cy="32" r="4" fill="#A8E063" className="animate-pulse" />
        </svg>
      </div>

      {/* Marquee Track 1 (Leftwards Moving Words) */}
      <div className="flex overflow-hidden py-1">
        <div className="animate-marquee-left flex items-center gap-6">
          {[...line1Words, ...line1Words, ...line1Words].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`track1-${idx}`}
                className="inline-flex items-center gap-2.5 rounded-full border border-[#E2E8F0]/80 bg-white/70 px-4 py-1.5 shadow-sm backdrop-blur-sm transition-transform hover:scale-105"
              >
                <div
                  className="flex h-5 w-5 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${item.color}20`, color: item.color }}
                >
                  <Icon className="h-3 w-3" />
                </div>
                <span className="text-xs font-bold tracking-wider text-[#0F172A]">
                  {item.text}
                </span>
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Marquee Track 2 (Rightwards Moving Stylized Words) */}
      <div className="flex overflow-hidden pt-2.5 pb-1">
        <div className="animate-marquee-right flex items-center gap-6">
          {[...line2Words, ...line2Words, ...line2Words].map((item, idx) => (
            <div
              key={`track2-${idx}`}
              className="inline-flex items-center gap-3 px-3 py-1"
            >
              <span className="text-[13px] font-semibold tracking-wider text-[#475569]/85">
                {item.text}
              </span>
              <span
                className="h-1 w-8 rounded-full opacity-60"
                style={{ backgroundColor: item.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

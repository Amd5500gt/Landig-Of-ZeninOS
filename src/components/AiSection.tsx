import React, { useState } from 'react';
import { Target, RotateCw, Timer, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface Stage {
  id: string;
  name: string;
  title: string;
  accent: string;
  badgeBg: string;
  summary: string;
  detail: string;
  icon: React.ElementType;
}

const stages: Stage[] = [
  {
    id: 'plan',
    name: 'Plan',
    title: 'Priority Time-Blocking',
    accent: '#FFB347', // Mango
    badgeBg: 'rgba(255, 179, 71, 0.16)',
    summary: 'Turn priorities into a practical daily agenda.',
    detail: 'Intelligently sorts important tasks, routines, and deep work intervals into realistic daylight windows.',
    icon: Target,
  },
  {
    id: 'adapt',
    name: 'Adapt',
    title: 'Real-Time Schedule Recalibration',
    accent: '#9B6DFF', // Grape
    badgeBg: 'rgba(155, 109, 255, 0.16)',
    summary: 'Adjust your schedule when plans inevitably shift.',
    detail: 'An impromptu meeting or unexpected delay occurs? ZeninOS recalibrates your day smoothly without anxiety.',
    icon: RotateCw,
  },
  {
    id: 'focus',
    name: 'Focus',
    title: 'Protected Deep Work Intervals',
    accent: '#FF4D6D', // Strawberry
    badgeBg: 'rgba(255, 77, 109, 0.16)',
    summary: 'Protect focus blocks with dedicated flow modes.',
    detail: 'Lock in uninterrupted single-task momentum with gentle time boundary cues.',
    icon: Timer,
  },
  {
    id: 'complete',
    name: 'Complete',
    title: 'Evening Review & Habit Streaks',
    accent: '#A8E063', // Kiwi
    badgeBg: 'rgba(168, 224, 99, 0.22)',
    summary: 'Close open loops and prepare tomorrow with calm.',
    detail: 'Consolidate daily habit completions, assess accomplishments, and set up a peaceful morning.',
    icon: CheckCircle2,
  },
];

export const AISection: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = stages[activeStageIndex];

  return (
    <section
      id="ai-planner"
      className="relative py-20 md:py-32 overflow-hidden"
      aria-labelledby="ai-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF8F0] border border-[#9B6DFF]/30 px-3.5 py-1 text-xs font-semibold text-[#6D28D9] mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#9B6DFF]" />
            <span>Intelligent Architecture</span>
          </div>

          <h2
            id="ai-heading"
            className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl"
          >
            Your day.{' '}
            <span className="bg-gradient-to-r from-[#FF8A65] via-[#9B6DFF] to-[#4D8DFF] bg-clip-text text-transparent">
              Adapted intelligently.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            Plan your priorities, adjust your schedule and stay focused as your day changes.
          </p>

          {/* Animated SVG Stream Lines */}
          <div className="flex justify-center mt-4">
            <svg
              className="h-2.5 w-40 overflow-visible"
              viewBox="0 0 160 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 0 5 Q 40 0, 80 5 T 160 5"
                stroke="#9B6DFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="animate-flow-dash"
              />
            </svg>
          </div>
        </div>

        {/* Expansive Architectural Centerpiece Layout */}
        <div className="relative rounded-[28px] border border-[#E2E8F0] bg-gradient-to-b from-white via-[#FFFDF8]/90 to-[#FFF8F0]/70 p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(15,23,42,0.04)] backdrop-blur-md">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full pointer-events-none opacity-25 blur-[90px]"
            style={{
              background: `radial-gradient(circle, ${activeStage.accent} 0%, rgba(255,255,255,0) 70%)`,
              transition: 'background 0.5s ease',
            }}
          />

          {/* Flow Pipeline Stages (No numbers, no fake stats) */}
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
            {stages.map((stage, idx) => {
              const isSelected = idx === activeStageIndex;
              const StageIcon = stage.icon;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={`flex flex-col items-start p-4 rounded-2xl border text-left transition-all duration-300 ${
                    isSelected
                      ? 'bg-white border-[#CBD5E1] shadow-md scale-[1.02]'
                      : 'bg-white/60 border-[#F1F5F9] hover:bg-white hover:border-[#E2E8F0]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: stage.badgeBg,
                        color: stage.accent,
                      }}
                    >
                      <StageIcon className="h-4 w-4" />
                    </div>
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: stage.accent }}
                    />
                  </div>

                  <div className="font-bold text-sm text-[#0F172A]">{stage.name}</div>
                  <div className="text-xs text-[#64748B] mt-0.5 line-clamp-1">{stage.title}</div>

                  {isSelected && (
                    <div
                      className="mt-3 h-1 w-full rounded-full"
                      style={{ backgroundColor: stage.accent }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Panoramic Visual Canvas + Conceptual Pipeline */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            {/* Left Abstract Visual Canvas */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative flex h-[310px] w-full max-w-[460px] sm:h-[350px] items-center justify-center rounded-2xl bg-white/70 border border-[#E2E8F0]/80 p-6 shadow-inner overflow-hidden">
                {/* SVG Animated Flow Lines Connecting the 4 Phases */}
                <svg
                  className="absolute inset-0 h-full w-full pointer-events-none"
                  viewBox="0 0 460 350"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer Orbit */}
                  <circle
                    cx="230"
                    cy="175"
                    r="120"
                    stroke="#CBD5E1"
                    strokeWidth="1.5"
                    strokeDasharray="8 6"
                    className="animate-flow-dash"
                  />
                  {/* Inner Orbit */}
                  <circle
                    cx="230"
                    cy="175"
                    r="75"
                    stroke="#E2E8F0"
                    strokeWidth="1"
                    strokeDasharray="6 4"
                    className="animate-flow-dash-fast"
                  />
                  {/* Radial Connector Rays */}
                  <line x1="110" y1="90" x2="190" y2="140" stroke="#FFB347" strokeWidth="1.5" strokeOpacity="0.5" />
                  <line x1="350" y1="90" x2="270" y2="140" stroke="#9B6DFF" strokeWidth="1.5" strokeOpacity="0.5" />
                  <line x1="110" y1="260" x2="190" y2="210" stroke="#FF4D6D" strokeWidth="1.5" strokeOpacity="0.5" />
                  <line x1="350" y1="260" x2="270" y2="210" stroke="#A8E063" strokeWidth="1.5" strokeOpacity="0.5" />
                </svg>

                {/* Central Glowing AI Intelligence Orb */}
                <div className="relative flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#E2E8F0]">
                  <div
                    className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full shadow-lg transition-all duration-500 animate-pulse-glow overflow-hidden p-2.5"
                    style={{
                      background: `radial-gradient(circle at 35% 35%, #FFFFFF 0%, ${activeStage.accent} 65%, #0F172A 140%)`,
                    }}
                  >
                    <img
                      src="/assets/zeninos-logo.svg"
                      alt="ZeninOS Intelligence"
                      className="h-full w-full object-contain"
                      width="48"
                      height="48"
                    />
                  </div>
                </div>

                {/* Satellite Concept Node 1: Plan */}
                <div
                  className={`absolute top-6 left-6 flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-semibold border bg-white/95 shadow-sm transition-all duration-300 ${
                    activeStageIndex === 0
                      ? 'border-[#FFB347] scale-105 shadow-[0_4px_16px_rgba(255,179,71,0.25)]'
                      : 'border-slate-200 opacity-60'
                  }`}
                >
                  <Target className="h-3.5 w-3.5 text-[#FFB347]" />
                  <span className="text-[#0F172A]">Day Outline</span>
                </div>

                {/* Satellite Concept Node 2: Adapt */}
                <div
                  className={`absolute top-6 right-6 flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-semibold border bg-white/95 shadow-sm transition-all duration-300 ${
                    activeStageIndex === 1
                      ? 'border-[#9B6DFF] scale-105 shadow-[0_4px_16px_rgba(155,109,255,0.25)]'
                      : 'border-slate-200 opacity-60'
                  }`}
                >
                  <RotateCw className="h-3.5 w-3.5 text-[#9B6DFF]" />
                  <span className="text-[#0F172A]">Dynamic Pivot</span>
                </div>

                {/* Satellite Concept Node 3: Focus */}
                <div
                  className={`absolute bottom-6 left-6 flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-semibold border bg-white/95 shadow-sm transition-all duration-300 ${
                    activeStageIndex === 2
                      ? 'border-[#FF4D6D] scale-105 shadow-[0_4px_16px_rgba(255,77,109,0.25)]'
                      : 'border-slate-200 opacity-60'
                  }`}
                >
                  <Timer className="h-3.5 w-3.5 text-[#FF4D6D]" />
                  <span className="text-[#0F172A]">Deep Focus</span>
                </div>

                {/* Satellite Concept Node 4: Complete */}
                <div
                  className={`absolute bottom-6 right-6 flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-semibold border bg-white/95 shadow-sm transition-all duration-300 ${
                    activeStageIndex === 3
                      ? 'border-[#A8E063] scale-105 shadow-[0_4px_16px_rgba(168,224,99,0.35)]'
                      : 'border-slate-200 opacity-60'
                  }`}
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#65A30D]" />
                  <span className="text-[#0F172A]">Habit Streak</span>
                </div>
              </div>
            </div>

            {/* Right Concept Exploration Column */}
            <div className="lg:col-span-5 text-left">
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full mb-3"
                style={{
                  backgroundColor: activeStage.badgeBg,
                  color: activeStage.accent,
                }}
              >
                <span>{activeStage.name} Module</span>
                <span>•</span>
                <span>Adaptive Flow</span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-[#0F172A]">
                {activeStage.title}
              </h3>

              <p className="mt-3 text-base font-medium text-[#334155] leading-relaxed">
                {activeStage.summary}
              </p>

              <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                {activeStage.detail}
              </p>

              {/* Bottom Flow Ribbon Navigation */}
              <div className="mt-6 pt-5 border-t border-[#E2E8F0] flex items-center justify-between">
                <div className="text-xs text-[#64748B]">
                  Concept: <span className="font-semibold text-[#0F172A]">Plan → Adapt → Focus → Complete</span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveStageIndex((prev) => (prev + 1) % stages.length)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F172A] hover:text-[#9B6DFF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B6DFF] rounded-lg px-2 py-1"
                >
                  <span>Next Phase</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

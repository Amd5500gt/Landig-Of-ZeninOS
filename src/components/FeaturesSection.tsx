import React from 'react';
import { Calendar, Cpu, CheckSquare, Zap, Flame, BarChart3 } from 'lucide-react';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  accentColor: string;
  badgeBg: string;
}

const features: FeatureItem[] = [
  {
    id: 'ai-planner',
    title: 'AI Day Planner',
    description: 'Turn priorities into a practical daily plan.',
    icon: Calendar,
    accentColor: '#FFB347', // Mango
    badgeBg: 'rgba(255, 179, 71, 0.14)',
  },
  {
    id: 'ai-adapt',
    title: 'AI Adapt',
    description: 'Adjust your plan when your day changes.',
    icon: Cpu,
    accentColor: '#9B6DFF', // Grape
    badgeBg: 'rgba(155, 109, 255, 0.14)',
  },
  {
    id: 'tasks',
    title: 'Tasks',
    description: 'Capture and organize the work that matters.',
    icon: CheckSquare,
    accentColor: '#4D8DFF', // Blueberry
    badgeBg: 'rgba(77, 141, 255, 0.14)',
  },
  {
    id: 'focus',
    title: 'Focus',
    description: 'Protect deep-work time and stay on track.',
    icon: Zap,
    accentColor: '#FF4D6D', // Strawberry
    badgeBg: 'rgba(255, 77, 109, 0.14)',
  },
  {
    id: 'habits',
    title: 'Habits',
    description: 'Build consistent routines through daily action.',
    icon: Flame,
    accentColor: '#FF8A65', // Peach
    badgeBg: 'rgba(255, 138, 101, 0.14)',
  },
  {
    id: 'daily-review',
    title: 'Daily Review',
    description: 'Reflect, learn and improve tomorrow.',
    icon: BarChart3,
    accentColor: '#A8E063', // Kiwi
    badgeBg: 'rgba(168, 224, 99, 0.20)',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section
      id="features"
      className="relative py-20 md:py-28 overflow-hidden"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF8F0] border border-[#FFB347]/30 px-3.5 py-1 text-xs font-semibold text-[#B45309] mb-3">
            <span>Core Capabilities</span>
          </div>
          <h2
            id="features-heading"
            className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl"
          >
            Everything you need to run your day.
          </h2>
          <p className="mt-3.5 text-base text-[#64748B]">
            Thoughtfully balanced tools built directly into one lightweight Android experience.
          </p>

          {/* Animated flowing line accent below section header */}
          <div className="flex justify-center mt-4">
            <svg
              className="h-2 w-32 overflow-visible"
              viewBox="0 0 120 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 0 4 Q 30 0, 60 4 T 120 4"
                stroke="#FFB347"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-flow-dash"
              />
            </svg>
          </div>
        </div>

        {/* Brand New Layout: Staggered Architecture with Illuminated Borders (No Card Stats) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative flex flex-col justify-between rounded-[22px] border border-[#E2E8F0]/90 bg-white/80 p-7 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.03)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-6px_rgba(15,23,42,0.08)] hover:border-[#CBD5E1]"
                style={{ borderRadius: '22px' }}
              >
                <div>
                  {/* Icon & Glow Node */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: feature.badgeBg,
                        color: feature.accentColor,
                      }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <div
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: feature.accentColor }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold tracking-tight text-[#0F172A] group-hover:text-[#0F172A]">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle illuminated accent line */}
                <div className="mt-6 pt-4 border-t border-[#F8FAFC] flex items-center justify-between">
                  <span className="text-[11px] font-medium tracking-wide uppercase text-[#94A3B8]">
                    ZeninOS System
                  </span>
                  <div
                    className="h-1.5 w-6 rounded-full transition-all duration-300 group-hover:w-12"
                    style={{ backgroundColor: feature.accentColor }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

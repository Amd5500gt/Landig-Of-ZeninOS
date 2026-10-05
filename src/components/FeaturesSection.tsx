import React from 'react';
import { 
  CalendarRange, 
  RotateCw, 
  ListCheck, 
  Target, 
  Flame, 
  BarChart3,
  ArrowRight
} from 'lucide-react';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  gradient: string;
  glowColor: string;
}

const features: FeatureItem[] = [
  {
    id: 'ai-day-planner',
    title: 'AI Day Planner',
    description: 'Schedules your high-impact priorities aligned with your daily cognitive rhythms.',
    icon: CalendarRange,
    accentColor: '#FFB347',
    gradient: 'from-[#FFB347] to-[#FF8A65]',
    glowColor: 'rgba(255, 179, 71, 0.25)'
  },
  {
    id: 'ai-adapt',
    title: 'AI Adapt',
    description: 'Dynamically rebalances your entire timeline when unexpected delays emerge.',
    icon: RotateCw,
    accentColor: '#FF4D6D',
    gradient: 'from-[#FF8A65] to-[#FF4D6D]',
    glowColor: 'rgba(255, 77, 109, 0.25)'
  },
  {
    id: 'tasks',
    title: 'Tasks',
    description: 'Frictionless capture with intelligent priority weighting and execution queues.',
    icon: ListCheck,
    accentColor: '#4D8DFF',
    gradient: 'from-[#4D8DFF] to-[#9B6DFF]',
    glowColor: 'rgba(77, 141, 255, 0.25)'
  },
  {
    id: 'focus',
    title: 'Focus',
    description: 'Deep work sessions with zero-distraction immersion and rhythmic interval rests.',
    icon: Target,
    accentColor: '#9B6DFF',
    gradient: 'from-[#9B6DFF] to-[#FF4D6D]',
    glowColor: 'rgba(155, 109, 255, 0.25)'
  },
  {
    id: 'habits',
    title: 'Habits',
    description: 'Build compounding discipline through streak reinforcement and ritual anchors.',
    icon: Flame,
    accentColor: '#A8E063',
    gradient: 'from-[#A8E063] to-[#FFB347]',
    glowColor: 'rgba(168, 224, 99, 0.25)'
  },
  {
    id: 'daily-review',
    title: 'Daily Review',
    description: 'Reflective metrics that synthesize daily accomplishments and prepare tomorrow.',
    icon: BarChart3,
    accentColor: '#4D8DFF',
    gradient: 'from-[#4D8DFF] to-[#A8E063]',
    glowColor: 'rgba(77, 141, 255, 0.25)'
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
            <span>Core Architecture</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#FF8A65]">Zenin OS 2.0</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Intelligent Tools for High-Velocity Days
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 [text-wrap:balance]">
            Six unified productivity engines engineered to harmonize your planning, execution, and rest.
          </p>
        </div>

        {/* 6 Compact Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((feat) => {
            const IconComponent = feat.icon;
            return (
              <div
                key={feat.id}
                className="group relative rounded-[24px] p-6 bg-white/75 backdrop-blur-md border border-white/80 hover:border-slate-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(0,0,0,0.06)] flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle illuminated corner ambient gradient glow on hover */}
                <div 
                  className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: feat.accentColor }}
                />

                <div>
                  {/* Icon with Fruit Gradient */}
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feat.gradient} flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2`}
                      style={{ boxShadow: `0 8px 20px ${feat.glowColor}` }}
                    >
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>

                    {/* Subtle micro index label */}
                    <span className="text-[11px] font-mono text-slate-400 font-medium">
                      0{features.indexOf(feat) + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2 group-hover:text-slate-950 transition-colors">
                    {feat.title}
                  </h3>

                  {/* 1-Line Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Subtle Accent Bottom Line */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <span 
                      className="w-1.5 h-1.5 rounded-full" 
                      style={{ backgroundColor: feat.accentColor }} 
                    />
                    <span>Active Engine</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

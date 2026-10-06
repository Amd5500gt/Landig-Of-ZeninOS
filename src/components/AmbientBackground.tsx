import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Subtle top-right warm Mango glow */}
      <div
        className="absolute -top-[15%] right-[-10%] h-[600px] w-[600px] rounded-full ambient-glow-mango blur-[90px] opacity-60 md:opacity-80"
      />

      {/* Subtle top-left soft Grape ambient light */}
      <div
        className="absolute top-[20%] -left-[10%] h-[650px] w-[650px] rounded-full ambient-glow-grape blur-[100px] opacity-40 md:opacity-60"
      />

      {/* Center-right Blueberry subtle focus glow */}
      <div
        className="absolute top-[55%] -right-[12%] h-[600px] w-[600px] rounded-full ambient-glow-blueberry blur-[110px] opacity-40 md:opacity-50"
      />

      {/* Bottom-left soft Peach / Strawberry ambient glow */}
      <div
        className="absolute -bottom-[10%] left-[10%] h-[550px] w-[550px] rounded-full ambient-glow-peach blur-[90px] opacity-50 md:opacity-70"
      />

      {/* Subtle ultra-fine warm background texture pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(#1E293B 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
};

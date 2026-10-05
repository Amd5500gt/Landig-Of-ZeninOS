import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#FFFDF8]">
      {/* Base warm tint layers */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-multiply"
        style={{
          background: 'radial-gradient(ellipse 90% 70% at 50% -10%, #FFF8F0 0%, #FFFDF8 60%, #F8FAFC 100%)'
        }}
      />

      {/* Blob 1: Mango & Peach - Top Right */}
      <div 
        className="absolute -top-[12%] -right-[8%] w-[580px] h-[580px] rounded-full blur-[110px] opacity-25 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, #FFB347 0%, #FF8A65 60%, transparent 80%)'
        }}
      />

      {/* Blob 2: Strawberry & Grape - Mid Left */}
      <div 
        className="absolute top-[32%] -left-[10%] w-[640px] h-[640px] rounded-full blur-[130px] opacity-20 animate-float-reverse"
        style={{
          background: 'radial-gradient(circle, #FF4D6D 0%, #9B6DFF 70%, transparent 85%)'
        }}
      />

      {/* Blob 3: Blueberry & Grape - Mid-Right */}
      <div 
        className="absolute top-[58%] -right-[12%] w-[620px] h-[620px] rounded-full blur-[125px] opacity-22 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, #4D8DFF 0%, #9B6DFF 65%, transparent 80%)'
        }}
      />

      {/* Blob 4: Kiwi & Mango - Bottom Center */}
      <div 
        className="absolute -bottom-[15%] left-[20%] w-[700px] h-[700px] rounded-full blur-[140px] opacity-18 animate-float-reverse"
        style={{
          background: 'radial-gradient(circle, #A8E063 0%, #FFB347 60%, transparent 80%)'
        }}
      />

      {/* Subtle light geometric accents integrated into canvas */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:32px_32px]" />
    </div>
  );
};

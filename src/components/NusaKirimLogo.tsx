import React from 'react';

interface NusaKirimLogoProps {
  layout?: 'horizontal' | 'vertical' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  inverse?: boolean; // If true, rendering suited for dark / charcoal background
}

export default function NusaKirimLogo({
  layout = 'horizontal',
  size = 'md',
  className = '',
  inverse = false
}: NusaKirimLogoProps) {
  
  // Decide responsive heights for the emblem
  const getEmblemSizeClass = () => {
    switch (size) {
      case 'sm': return 'w-10 h-10';
      case 'lg': return 'w-16 h-16';
      case 'xl': return 'w-24 h-24';
      case 'md':
      default: return 'w-12 h-12';
    }
  };

  // Decide text size classes
  const getTextSizeClass = () => {
    switch (size) {
      case 'sm': return 'text-lg';
      case 'lg': return 'text-2xl';
      case 'xl': return 'text-4xl';
      case 'md':
      default: return 'text-xl';
    }
  };

  // Crisp Vector Emblem SVG of NusaKirim
  const Emblem = (
    <svg 
      viewBox="0 0 100 100" 
      className={`${getEmblemSizeClass()} shrink-0 select-none overflow-visible`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      id="nusakirim-logo-emblem"
    >
      {/* 1. TOP HEMISPHERE (RED BRIDGE & ARCH ARCHIPELAGO CONNECTIVITY) */}
      <g id="top-bridge-group">
        {/* Outer Red crescent dome */}
        <path 
          d="M 12 48 A 38 38 0 0 1 88 48 C 76 34, 24 34, 12 48 Z" 
          fill="#D91E1E" 
        />
        
        {/* White gap under top arch */}
        <path 
          d="M 14 48 C 22 36, 78 36, 86 48 C 74 41, 26 41, 14 48 Z" 
          fill="white" 
        />
        
        {/* Slanted vertical bridge cables/hangers in Red */}
        <g stroke="#D91E1E" strokeWidth="2.5" strokeLinecap="round">
          {/* Bridge struts/suspender beams */}
          <line x1="28" y1="46" x2="28" y2="40.5" />
          <line x1="39" y1="47.5" x2="39" y2="38.5" />
          <line x1="50" y1="48" x2="50" y2="38" />
          <line x1="61" y1="47.5" x2="61" y2="38.5" />
          <line x1="72" y1="46" x2="72" y2="40.5" />
        </g>
        
        {/* Inner red suspension arch structure */}
        <path 
          d="M 21 47 C 32 37, 68 37, 79 47" 
          stroke="#D91E1E" 
          strokeWidth="3.5" 
          strokeLinecap="round"
          fill="none" 
        />
        
        {/* Thick bridge bottom deck base in red */}
        <path 
          d="M 12 48 C 30 46.5, 70 46.5, 88 48" 
          stroke="#D91E1E" 
          strokeWidth="3.5" 
          strokeLinecap="round"
          fill="none" 
        />
      </g>
      
      {/* 2. BOTTOM HEMISPHERE (BLACK MARINE TRANSPORT WAVES) */}
      <g id="bottom-wave-group">
        {/* Upper wave crest (Black/Charcoal) */}
        <path 
          d="M 10 52 C 24 58, 44 47, 90 52 C 76 58, 50 56, 10 52 Z" 
          fill={inverse ? '#FFFFFF' : '#1A1A1A'} 
        />
        
        {/* Bottom deep wave base (Black/Charcoal) */}
        <path 
          d="M 13 58 C 24 75, 76 75, 87 58 C 72 65, 28 65, 13 58 Z" 
          fill={inverse ? '#FFFFFF' : '#1A1A1A'} 
        />
      </g>
    </svg>
  );

  if (layout === 'icon') {
    return Emblem;
  }

  // Horizontal logo alignment (Default for headers and standard menus)
  if (layout === 'horizontal') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`} id="nusakirim-logo-horizontal">
        {Emblem}
        
        <div className="flex flex-col text-left justify-center select-none">
          {/* Brand Name with red-black split */}
          <div className="flex items-baseline">
            <span className={`${getTextSizeClass()} font-display font-extrabold tracking-tight text-[#D91E1E]`}>
              Nusa
            </span>
            <span className={`${getTextSizeClass()} font-display font-extrabold tracking-tight ${inverse ? 'text-white' : 'text-zinc-900'}`}>
              Kirim
            </span>
          </div>

          {/* —— EXPRESS —— Section */}
          <div className="flex items-center gap-1.5 w-full my-0.5">
            <div className={`h-[1px] flex-grow ${inverse ? 'bg-zinc-700' : 'bg-zinc-250'}`} />
            <span className={`text-[9px] font-sans font-extrabold tracking-[0.25em] ${inverse ? 'text-zinc-450' : 'text-zinc-650'}`}>
              EXPRESS
            </span>
            <div className={`h-[1px] flex-grow ${inverse ? 'bg-zinc-700' : 'bg-zinc-250'}`} />
          </div>

          {/* Chinese sublabel pill */}
          <div className="self-start mt-0.5">
            <div className="bg-[#D91E1E] text-white rounded-md text-[9px] font-bold px-2 py-0.5 font-sans tracking-wide skew-x-[-10deg] inline-block shadow-sm">
              群岛物流
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vertical centered logo configuration (suited for footers and landing cards)
  return (
    <div className={`flex flex-col items-center text-center ${className}`} id="nusakirim-logo-vertical">
      {Emblem}
      
      <div className="flex flex-col items-center mt-3 select-none">
        {/* Brand Name */}
        <div className="flex items-baseline justify-center">
          <span className={`${getTextSizeClass()} font-display font-black tracking-tight text-[#D91E1E]`}>
            Nusa
          </span>
          <span className={`${getTextSizeClass()} font-display font-black tracking-tight ${inverse ? 'text-white' : 'text-zinc-900'}`}>
            Kirim
          </span>
        </div>

        {/* EXPRESS */}
        <div className="flex items-center gap-2 w-32 my-1">
          <div className={`h-[1px] flex-grow ${inverse ? 'bg-zinc-700' : 'bg-zinc-250'}`} />
          <span className={`text-[9px] font-sans font-black tracking-[0.3em] ${inverse ? 'text-zinc-450' : 'text-zinc-600'}`}>
            EXPRESS
          </span>
          <div className={`h-[1px] flex-grow ${inverse ? 'bg-zinc-700' : 'bg-zinc-250'}`} />
        </div>

        {/* Red Pill */}
        <div className="bg-[#D91E1E] text-white rounded-md text-[9px] font-extrabold px-3 py-0.5 font-sans tracking-widest skew-x-[-10deg] inline-block mt-0.5 shadow-sm">
          群岛物流
        </div>
      </div>
    </div>
  );
}

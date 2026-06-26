import React from 'react';
// @ts-ignore
import logoImg from '../assets/images/nusakirim_logo_user.jpg';

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
  
  // Decides absolute widths/heights to guarantee a perfect square (prevent "gepeng" / squishing)
  const getPixelSize = () => {
    switch (size) {
      case 'sm': return 40;
      case 'lg': return 64;
      case 'xl': return 96;
      case 'md':
      default: return 48;
    }
  };

  const pixelSize = getPixelSize();

  // Crisp Vector Emblem SVG of NusaKirim
  // We explicitly define width, height, minWidth, minHeight, and aspect-ratio to prevent any browser flattening.
  const Emblem = (
    <svg 
      viewBox="0 0 100 100" 
      width={pixelSize}
      height={pixelSize}
      style={{ 
        minWidth: `${pixelSize}px`, 
        minHeight: `${pixelSize}px`, 
        aspectRatio: '1 / 1' 
      }}
      className="shrink-0 aspect-square object-contain select-none overflow-visible"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      id="nusakirim-logo-emblem"
    >
      {/* 1. TOP HEMISPHERE (RED BRIDGE & ARCH ARCHIPELAGO CONNECTIVITY) */}
      <g id="top-bridge-group">
        {/* Outer Red crescent dome */}
        <path 
          d="M 10 50 A 40 40 0 0 1 86 32.5 C 75 21, 44 23.5, 21.5 48.5 C 18 52.5, 14 52.5, 10 50 Z" 
          fill="#E30613" 
        />
        
        {/* Solid red bridge arch */}
        <path 
          d="M 26 53 C 41 38, 71 31, 92.5 55 C 89 45, 68 34.5, 43 43 C 33 47, 29 50.5, 26 53 Z" 
          fill="#E30613" 
        />
        
        {/* 4 Vertical bridge pillars / slits */}
        <g stroke="white" strokeWidth="2.5" strokeLinecap="round">
          <line x1="61" y1="36" x2="61" y2="45.5" />
          <line x1="70.5" y1="38.5" x2="70.5" y2="49" />
          <line x1="80" y1="42.5" x2="80" y2="53.5" />
          <line x1="88.5" y1="48" x2="88.5" y2="56.5" />
        </g>
      </g>
      
      {/* 2. BOTTOM HEMISPHERE (BLACK MARINE TRANSPORT WAVES) */}
      <g id="bottom-wave-group">
        {/* Upper wave crest (Black/Charcoal) */}
        <path 
          d="M 15 61.5 C 32 68, 55 56.5, 92 60.5 C 75 58.5, 45 71.5, 15 61.5 Z" 
          fill={inverse ? '#FFFFFF' : '#1E1E1C'} 
        />
        
        {/* Bottom deep wave base (Black/Charcoal) */}
        <path 
          d="M 21 70.5 C 31 80.5, 70 84.5, 90 64 C 72 72, 41 75.5, 21 70.5 Z" 
          fill={inverse ? '#FFFFFF' : '#1E1E1C'} 
        />
      </g>
    </svg>
  );

  if (layout === 'icon') {
    return Emblem;
  }

  // Determine height of the logo image to prevent distortion (scaling height, let width be automatic)
  const getLogoHeight = () => {
    switch (size) {
      case 'sm': return 36;
      case 'lg': return 68;
      case 'xl': return 110;
      case 'md':
      default: return 52;
    }
  };

  const logoHeight = getLogoHeight();

  // Return the perfect user-uploaded brand logo image to ensure 100% accurate visual representation
  return (
    <div className={`flex items-center justify-center ${className}`} id={`nusakirim-logo-${layout}`}>
      <img
        src={logoImg}
        alt="NusaKirim Express"
        referrerPolicy="no-referrer"
        className="object-contain h-auto shrink-0 select-none pointer-events-none"
        style={{
          height: `${logoHeight}px`,
          maxHeight: `${logoHeight}px`,
          width: 'auto',
          maxWidth: '100%',
        }}
      />
    </div>
  );
}

import React from 'react';

interface CrtOverlayProps {
  enabled: boolean;
}

export const CrtOverlay: React.FC<CrtOverlayProps> = ({ enabled }) => {
  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Scanline pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.5) 50%)',
          backgroundSize: '100% 4px',
          zIndex: 1
        }}
      />
      
      {/* Subtle CRT Flicker & Phosphor Bloom */}
      <div 
        className="absolute inset-0 bg-emerald-500/2 mix-blend-screen pointer-events-none animate-pulse"
        style={{ animationDuration: '4s' }}
      />

      {/* Vignette / Tube curvature shadow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.45)',
          zIndex: 2
        }}
      />
    </div>
  );
};

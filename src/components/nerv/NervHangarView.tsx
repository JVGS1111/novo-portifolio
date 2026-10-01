import React from 'react';
import nervHangarBg from '../../assets/nerv_hangar_bg.jpg';

export const NervHangarView: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* High-res Hangar Background Image */}
      <img
        src={nervHangarBg}
        alt="NERV EVA-01 Launch Cage Hangar"
        className="w-full h-full object-cover object-right md:object-center opacity-90 transition-opacity duration-1000"
      />

      {/* Subtle Vignette and dark overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E] via-transparent to-[#0A0C10]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C10] via-transparent to-[#0A0C10]/70" />

      {/* Blinking Red Warning Beacons on Scaffolding */}
      <div className="absolute top-[22%] right-[32%] w-2 h-2 rounded-full bg-red-500 shadow-[0_0_12px_#FF1801] animate-ping" />
      <div className="absolute top-[48%] right-[18%] w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_10px_#FF1801] animate-pulse" />
      <div className="absolute top-[35%] left-[55%] w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_10px_#FFAA00] animate-ping" />

      {/* EVA-01 Eye Glow Pulse */}
      <div className="absolute top-[25.5%] right-[23.5%] w-3 h-1.5 bg-[#FFF066] blur-[2px] rounded-full shadow-[0_0_15px_#FFE53B] animate-pulse opacity-90" />

      {/* Subtle atmospheric scanlines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 4px)'
        }}
      />
    </div>
  );
};

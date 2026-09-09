import React from 'react';

interface FlagIconProps {
  className?: string;
}

export const UsaFlagIcon: React.FC<FlagIconProps> = ({ className = 'w-5 h-3.5' }) => (
  <svg
    viewBox="0 0 640 480"
    className={`inline-block rounded-sm overflow-hidden shadow-xs border border-white/10 ${className}`}
    aria-label="United States flag"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fillRule="evenodd">
      <path fill="#bd3d44" d="M0 0h640v480H0z" />
      <path stroke="#fff" strokeWidth="37" d="M0 55.4h640M0 129.2h640M0 203h640M0 277h640M0 350.8h640M0 424.6h640" />
      <path fill="#192f5d" d="M0 0h285v258.5H0z" />
      <g fill="#fff">
        <circle cx="28" cy="23" r="8" />
        <circle cx="75" cy="23" r="8" />
        <circle cx="122" cy="23" r="8" />
        <circle cx="169" cy="23" r="8" />
        <circle cx="216" cy="23" r="8" />
        <circle cx="263" cy="23" r="8" />
        <circle cx="51" cy="46" r="8" />
        <circle cx="98" cy="46" r="8" />
        <circle cx="145" cy="46" r="8" />
        <circle cx="192" cy="46" r="8" />
        <circle cx="239" cy="46" r="8" />
        <circle cx="28" cy="69" r="8" />
        <circle cx="75" cy="69" r="8" />
        <circle cx="122" cy="69" r="8" />
        <circle cx="169" cy="69" r="8" />
        <circle cx="216" cy="69" r="8" />
        <circle cx="263" cy="69" r="8" />
        <circle cx="51" cy="92" r="8" />
        <circle cx="98" cy="92" r="8" />
        <circle cx="145" cy="92" r="8" />
        <circle cx="192" cy="92" r="8" />
        <circle cx="239" cy="92" r="8" />
        <circle cx="28" cy="115" r="8" />
        <circle cx="75" cy="115" r="8" />
        <circle cx="122" cy="115" r="8" />
        <circle cx="169" cy="115" r="8" />
        <circle cx="216" cy="115" r="8" />
        <circle cx="263" cy="115" r="8" />
        <circle cx="51" cy="138" r="8" />
        <circle cx="98" cy="138" r="8" />
        <circle cx="145" cy="138" r="8" />
        <circle cx="192" cy="138" r="8" />
        <circle cx="239" cy="138" r="8" />
        <circle cx="28" cy="161" r="8" />
        <circle cx="75" cy="161" r="8" />
        <circle cx="122" cy="161" r="8" />
        <circle cx="169" cy="161" r="8" />
        <circle cx="216" cy="161" r="8" />
        <circle cx="263" cy="161" r="8" />
        <circle cx="51" cy="184" r="8" />
        <circle cx="98" cy="184" r="8" />
        <circle cx="145" cy="184" r="8" />
        <circle cx="192" cy="184" r="8" />
        <circle cx="239" cy="184" r="8" />
        <circle cx="28" cy="207" r="8" />
        <circle cx="75" cy="207" r="8" />
        <circle cx="122" cy="207" r="8" />
        <circle cx="169" cy="207" r="8" />
        <circle cx="216" cy="207" r="8" />
        <circle cx="263" cy="207" r="8" />
      </g>
    </g>
  </svg>
);

export const BrazilFlagIcon: React.FC<FlagIconProps> = ({ className = 'w-5 h-3.5' }) => (
  <svg
    viewBox="0 0 640 480"
    className={`inline-block rounded-sm overflow-hidden shadow-xs border border-white/10 ${className}`}
    aria-label="Brazil flag"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fillRule="evenodd">
      <path fill="#009b3a" d="M0 0h640v480H0z" />
      <path fill="#fedf00" d="M320 40L590 240 320 440 50 240z" />
      <circle cx="320" cy="240" r="120" fill="#002776" />
      <path
        d="M200 240a120 120 0 0 0 240 0 115 115 0 0 1-240 0"
        fill="#fff"
      />
      <g fill="#fff">
        <circle cx="320" cy="225" r="4" />
        <circle cx="310" cy="255" r="3.5" />
        <circle cx="330" cy="260" r="3.5" />
        <circle cx="320" cy="280" r="4" />
        <circle cx="340" cy="245" r="3" />
      </g>
    </g>
  </svg>
);

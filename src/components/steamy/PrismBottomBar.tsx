import React from 'react';
import { Sparkles } from 'lucide-react';

export const PrismBottomBar: React.FC = () => {
  return (
    <footer className="w-full pt-4 pb-12">
      <div className="w-full max-w-6xl mx-auto px-6 py-4 rounded-3xl bg-white/75 backdrop-blur-md border border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.02),inset_0_1px_2px_rgba(255,255,255,0.9)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 transform-gpu">
        {/* Left: Design Tokens Spec */}
        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px]">
          <span className="flex items-center gap-1.5 text-slate-700 font-semibold font-sans">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Prism Glass Spec:</span>
          </span>
          <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200/60 text-slate-600">
            Transmission: 0.94
          </span>
          <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200/60 text-slate-600">
            IOR: 1.54 (Crown Glass)
          </span>
          <span className="hidden md:inline px-2 py-0.5 rounded-md bg-white border border-slate-200/60 text-slate-600">
            Abbe: 58.6
          </span>
        </div>

        {/* Right: Copyright */}
        <div className="flex items-center gap-2 text-slate-600 font-medium">
          <span>© {new Date().getFullYear()} João Vinícius Guerber</span>
          <span>·</span>
          <span>Senior Software Engineer</span>
        </div>
      </div>
    </footer>
  );
};

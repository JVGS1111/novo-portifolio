import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, Flame, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { ThreeHeroCanvas } from './ThreeHeroCanvas';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageContext';
import { TiltCard } from './motion/TiltCard';
import { AnimatedCounter } from './motion/AnimatedCounter';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const techStack = [
    'React Native',
    'Kotlin',
    'Swift',
    'TypeScript',
    'Next.js',
    'Fastlane',
    'AppDome (RASP)',
    'GitHub Copilot',
    'Redux Toolkit',
    'Tailwind CSS',
    'Three.js',
    'CI/CD Pipelines',
  ];

  return (
    <section className="relative min-h-[96vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden w-full max-w-full">
      {/* 3D Interactive Three.js Background Canvas */}
      <ThreeHeroCanvas />

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
        
        {/* Availability & Seniority Badge with Floating Motion */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02 }}
          className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md text-[11px] sm:text-xs font-mono text-cyan-300 mb-4 sm:mb-6 shadow-lg shadow-cyan-500/10 cursor-default max-w-full text-center"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          <span className="truncate">{t.hero.badgeRole}</span>
          <span className="text-slate-600 hidden xs:inline">•</span>
          <span className="text-slate-400 font-sans hidden xs:inline">{t.hero.badgeYears}</span>
        </motion.div>

        {/* Main Headline with Staggered Entrance */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.18] sm:leading-[1.1] max-w-4xl mb-4 sm:mb-6 px-1 sm:px-2 text-balance"
        >
          {t.hero.headlinePrefix}
          <span className="text-shimmer drop-shadow-[0_0_35px_rgba(56,189,248,0.35)]">
            {t.hero.headlineHighlight}
          </span>
          {t.hero.headlineSuffix}
        </motion.h1>

        {/* Subtitle / Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-3xl mb-6 sm:mb-8 leading-relaxed font-normal text-balance px-2"
          dangerouslySetInnerHTML={{ __html: t.hero.subtitleHtml }}
        />

        {/* Quick Highlights Strip with Responsive 3D Tilt Cards & Count-Up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3.5 w-full max-w-3xl mb-8 sm:mb-10 text-left"
        >
          <TiltCard
            maxTilt={6}
            spotlightColor="rgba(6, 182, 212, 0.16)"
            className="rounded-xl h-full"
          >
            <div className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-2.5 sm:p-3.5 backdrop-blur-md hover:border-cyan-500/40 transition-all h-full flex flex-col justify-between min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 text-cyan-400 mb-1 min-w-0">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="text-[9px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-400 truncate">
                  {t.hero.statStabilityLabel}
                </span>
              </div>
              <div className="text-sm sm:text-base md:text-lg font-extrabold text-white my-0.5 truncate">
                <AnimatedCounter value={t.hero.statStabilityValue} />
              </div>
              <div className="text-[9.5px] sm:text-[11px] text-slate-400 line-clamp-1 leading-tight">{t.hero.statStabilitySub}</div>
            </div>
          </TiltCard>

          <TiltCard
            maxTilt={6}
            spotlightColor="rgba(56, 189, 248, 0.16)"
            className="rounded-xl h-full"
          >
            <div className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-2.5 sm:p-3.5 backdrop-blur-md hover:border-sky-500/40 transition-all h-full flex flex-col justify-between min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 text-sky-400 mb-1 min-w-0">
                <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="text-[9px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-400 truncate">
                  {t.hero.statMemoryLabel}
                </span>
              </div>
              <div className="text-sm sm:text-base md:text-lg font-extrabold text-white my-0.5 truncate">
                <AnimatedCounter value={t.hero.statMemoryValue} />
              </div>
              <div className="text-[9.5px] sm:text-[11px] text-slate-400 line-clamp-1 leading-tight">{t.hero.statMemorySub}</div>
            </div>
          </TiltCard>

          <TiltCard
            maxTilt={6}
            spotlightColor="rgba(129, 140, 248, 0.16)"
            className="rounded-xl h-full"
          >
            <div className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-2.5 sm:p-3.5 backdrop-blur-md hover:border-indigo-500/40 transition-all h-full flex flex-col justify-between min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 text-indigo-400 mb-1 min-w-0">
                <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="text-[9px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-400 truncate">
                  {t.hero.statStartupLabel}
                </span>
              </div>
              <div className="text-sm sm:text-base md:text-lg font-extrabold text-white my-0.5 truncate">
                <AnimatedCounter value={t.hero.statStartupValue} />
              </div>
              <div className="text-[9.5px] sm:text-[11px] text-slate-400 line-clamp-1 leading-tight">{t.hero.statStartupSub}</div>
            </div>
          </TiltCard>

          <TiltCard
            maxTilt={6}
            spotlightColor="rgba(168, 85, 247, 0.16)"
            className="rounded-xl h-full"
          >
            <div className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-2.5 sm:p-3.5 backdrop-blur-md hover:border-purple-500/40 transition-all h-full flex flex-col justify-between min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 text-purple-400 mb-1 min-w-0">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="text-[9px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-400 truncate">
                  {t.hero.statInnovationLabel}
                </span>
              </div>
              <div className="text-sm sm:text-base md:text-lg font-extrabold text-white my-0.5 truncate">
                <AnimatedCounter value={t.hero.statInnovationValue} />
              </div>
              <div className="text-[9.5px] sm:text-[11px] text-slate-400 line-clamp-1 leading-tight">{t.hero.statInnovationSub}</div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Action Buttons with Spring Hover Effects & Touch Ergonomics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <motion.a
            href="#metricas"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-xl shadow-cyan-500/25 transition-all group cursor-pointer w-full sm:w-auto text-center"
          >
            <span>{t.hero.ctaMetrics}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform shrink-0" />
          </motion.a>

          <motion.a
            href="#projetos"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-slate-800/70 hover:bg-slate-700/80 border border-slate-700/80 backdrop-blur-md transition-all duration-200 hover:border-slate-500 cursor-pointer w-full sm:w-auto text-center"
          >
            {t.hero.ctaProjects}
          </motion.a>

          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-800/50 border border-slate-800 hover:border-cyan-500/30 transition-all duration-200 cursor-pointer w-full sm:w-auto text-center"
          >
            {t.hero.ctaLinkedin}
          </motion.a>
        </motion.div>

        {/* Tech Stack Infinite Horizontal Marquee Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 sm:mt-14 w-full max-w-4xl overflow-hidden relative px-1 sm:px-0"
        >
          {/* Edge fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#07090e] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#07090e] to-transparent z-10 pointer-events-none" />

          <div className="flex items-center gap-2 sm:gap-4 w-full min-w-0">
            <span className="text-[10px] sm:text-xs font-mono text-slate-500 whitespace-nowrap shrink-0 z-20 bg-[#07090e]/90 px-2 py-1 rounded border border-slate-800/60">
              {t.hero.techCoreLabel}
            </span>

            <div className="flex-1 min-w-0 overflow-hidden group">
              <div className="animate-marquee flex items-center gap-2 sm:gap-2.5">
                {[...techStack, ...techStack].map((tech, idx) => (
                  <span
                    key={`${tech}-${idx}`}
                    className="px-2.5 sm:px-3 py-1 rounded-md bg-slate-900/60 border border-slate-800/80 text-[11px] sm:text-xs font-mono text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors cursor-default whitespace-nowrap shrink-0"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

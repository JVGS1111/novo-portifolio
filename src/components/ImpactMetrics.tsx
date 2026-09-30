import React, { useState } from 'react';
import { TrendingDown, Zap, DollarSign, CheckCircle2, ChevronRight, Activity, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { TiltCard } from './motion/TiltCard';
import { AnimatedCounter } from './motion/AnimatedCounter';

export const ImpactMetrics: React.FC = () => {
  const { t } = useLanguage();
  const [selectedMetricId, setSelectedMetricId] = useState<string>(t.impact.metrics[0].id);

  const selectedMetric = t.impact.metrics.find((m) => m.id === selectedMetricId) || t.impact.metrics[0];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'stability':
        return <TrendingDown className="w-5 h-5 text-cyan-400" />;
      case 'performance':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'financial':
        return <DollarSign className="w-5 h-5 text-emerald-400" />;
      case 'quality':
        return <CheckCircle2 className="w-5 h-5 text-indigo-400" />;
      default:
        return <Activity className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="metricas" className="py-24 relative overflow-hidden bg-[#0a0d14]/70 border-t border-b border-slate-800/60">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-400 mb-3 shadow-sm shadow-cyan-500/10">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>{t.impact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.impact.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.impact.subtitle}
          </p>
        </motion.div>

        {/* Metrics Grid Cards with Tilt & Count-Up */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
          {t.impact.metrics.map((item, index) => {
            const isSelected = selectedMetric.id === item.id;
            const isLastOdd = index === 4;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={isLastOdd ? 'sm:col-span-2 md:col-span-1' : ''}
              >
                <TiltCard
                  maxTilt={10}
                  spotlightColor={isSelected ? 'rgba(6, 182, 212, 0.25)' : 'rgba(56, 189, 248, 0.12)'}
                  className="rounded-2xl h-full"
                >
                  <button
                    onClick={() => setSelectedMetricId(item.id)}
                    className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between w-full h-full cursor-pointer ${
                      isSelected
                        ? 'bg-slate-800/95 border-cyan-400 shadow-xl shadow-cyan-500/20'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-3">
                      <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform">
                        {getCategoryIcon(item.impactCategory)}
                      </div>
                      <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border transition-colors ${
                        isSelected ? 'bg-cyan-400/20 text-cyan-300 border-cyan-400/40 font-bold' : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}>
                        {item.impactCategory}
                      </span>
                    </div>

                    <div>
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        <AnimatedCounter value={item.metric} />
                      </div>
                      <div className="text-xs font-semibold text-slate-200 line-clamp-2 leading-tight mb-1.5 sm:mb-2">
                        {item.label}
                      </div>
                      <div className="text-[10.5px] sm:text-[11px] text-slate-400 line-clamp-2">
                        {item.sublabel}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-cyan-400 w-full">
                      <span className="group-hover:translate-x-1 transition-transform">{t.impact.viewDetails}</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </button>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Metric Deep Dive with Smooth AnimatePresence Transition */}
        <div className="bg-slate-900/80 border border-slate-700/70 rounded-2xl p-5 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden max-w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMetric.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              {/* Giant Numeric Watermark Background */}
              <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-5 pointer-events-none font-mono text-7xl sm:text-9xl font-black text-cyan-400 select-none overflow-hidden">
                {selectedMetric.metric}
              </div>

              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
                
                {/* Left Column: Big Highlight */}
                <div className="w-full lg:w-1/3 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-8">
                  <div>
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold mb-2">
                      <Terminal className="w-4 h-4" />
                      <span>{t.impact.detailedCaseBadge}</span>
                    </div>
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-sky-200">
                      {selectedMetric.metric}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-2">
                      {selectedMetric.label}
                    </h3>
                    <p className="text-xs font-mono text-cyan-300/80 mb-4">
                      {selectedMetric.sublabel}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {selectedMetric.description}
                    </p>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs text-slate-300">
                    <strong className="text-cyan-300 block mb-1 font-semibold">{t.impact.businessImpactTitle}</strong>
                    {t.impact.businessImpactText}
                  </div>
                </div>

                {/* Right Column: Technical How with Staggered Entrance */}
                <div className="w-full lg:w-2/3">
                  <h4 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-400 font-bold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    {t.impact.engineeringStrategyTitle}
                  </h4>

                  <div className="space-y-3">
                    {selectedMetric.technicalHow.map((how, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-950/90 transition-all duration-200 group"
                      >
                        <div className="w-6 h-6 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          0{index + 1}
                        </div>
                        <p className="text-sm text-slate-200 leading-relaxed">
                          {how}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Architecture Highlight Note */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-semibold">{t.impact.productionValidation}</span>
                      <span>•</span>
                      <span>{t.impact.productionScale}</span>
                    </div>
                    <div className="font-mono text-slate-500">
                      {t.impact.stackLabel}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

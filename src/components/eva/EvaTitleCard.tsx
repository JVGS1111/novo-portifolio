import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface EvaTitleCardProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'pt';
}

interface TitleCardItem {
  episode: string;
  kanji: string;
  english: string;
  portuguese: string;
  directiveEn: string;
  directivePt: string;
  stamp: string;
}

const TITLE_CARDS: TitleCardItem[] = [
  {
    episode: 'EPISODE:01 // 第壱話',
    kanji: '使徒、襲来',
    english: 'ANGEL ATTACK // -98% CRASH CRISIS',
    portuguese: 'ATAQUE DO ANJO // CRISE DE -98% CRASH',
    directiveEn: 'CRITICAL PRODUCTION HYPERSCALE WARFARE AT BANQI FINTECH',
    directivePt: 'GUERRA DE HIPERESCALA EM PRODUÇÃO NA FINTECH BANQI',
    stamp: '非常事態 · EMERGENCY'
  },
  {
    episode: 'EPISODE:02 // 第弐話',
    kanji: '見知らぬ、天井',
    english: 'A HUMAN WORK // RESILIENT CACHING',
    portuguese: 'OBRA HUMANA // CACHE DISTRIBUÍDO',
    directiveEn: 'ELIMINATION OF $10,000+ MONTHLY AWS CLOUD EGRESS DRAIN',
    directivePt: 'ELIMINAÇÃO DE MAIS DE US$ 10.000 MENSAIS DE EGRESS NA AWS',
    stamp: '作戦承認 · APPROVED'
  },
  {
    episode: 'EPISODE:03 // 第参話',
    kanji: '鳴らない、電話',
    english: 'SYNAPSE AUTONOMY // COPILOT CERTIFIED',
    portuguese: 'AUTONOMIA SINÁPTICA // COPILOT CERTIFICADO',
    directiveEn: '0% TO 40% AUTOMATED TEST CI/CD REGRESSION SHIELD DEPLOYED',
    directivePt: 'ESCUDO DE TESTES DE 0% A 40% DE REGRESSÃO CI/CD DESDOBRADO',
    stamp: '極秘 · CLASSIFIED'
  },
  {
    episode: 'EPISODE:04 // 第四話',
    kanji: '瞬間、心、重ねて',
    english: 'BOTH OF YOU, DANCE LIKE YOU WANT TO WIN!',
    portuguese: 'EM SINCRONIA TOTAL: DESIGN SYSTEM MULTI-OS',
    directiveEn: '100% MATHEMATICAL TOKEN HARMONY ACROSS SWIFT, KOTLIN & REACT',
    directivePt: 'HARMONIA MATEMÁTICA DE 100% ENTRE SWIFT, KOTLIN E REACT',
    stamp: '完全同調 · SYNC 100%'
  },
  {
    episode: 'FINAL EPISODE // 最終話',
    kanji: '世界の中心でアイを叫んだけもの',
    english: 'THE BEAST THAT SHOUTED "I" AT THE HEART OF THE WORLD',
    portuguese: 'A FERA QUE GRITOU "EU" NO CORAÇÃO DO MUNDO',
    directiveEn: 'PILOT JOÃO VINÍCIUS GUERBER // READY TO DEPLOY FOR IMPACT',
    directivePt: 'PILOTO JOÃO VINÍCIUS GUERBER // PRONTO PARA ENTRAR EM COMBATE',
    stamp: '任務完了 · DEPLOYED'
  }
];

export const EvaTitleCard: React.FC<EvaTitleCardProps> = ({ isOpen, onClose, lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const current = TITLE_CARDS[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? TITLE_CARDS.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === TITLE_CARDS.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4 md:p-12 overflow-hidden cursor-pointer select-none"
      >
        {/* Subtle Scanlines & Grain */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,transparent_100%)] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-1 eva-hazard-stripes pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-1 eva-hazard-stripes pointer-events-none" />

        {/* Top Control Bar */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-4 left-4 right-4 md:top-6 md:left-8 md:right-8 flex items-center justify-between text-xs font-eva-mono text-zinc-400 z-20"
        >
          <div className="flex items-center gap-3">
            <span className="bg-[#ff5500] text-black font-bold px-2 py-0.5 tracking-wider">
              EYECATCH // アイキャッチ
            </span>
            <span className="hidden sm:inline tracking-widest text-zinc-400">
              CARD {currentIndex + 1} / {TITLE_CARDS.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-1.5 border border-zinc-700 hover:border-[#ff5500] hover:text-[#ff5500] transition-colors"
              title="Previous Episode"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 border border-zinc-700 hover:border-[#ff5500] hover:text-[#ff5500] transition-colors"
              title="Next Episode"
            >
              <ChevronRight size={16} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 border border-zinc-700 hover:border-red-500 hover:text-red-500 transition-colors ml-2"
              title="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Center Title Card Content with Matisse-style typography */}
        <motion.div
          key={current.episode}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative max-w-4xl w-full flex flex-col items-center justify-center text-center py-12 px-4"
        >
          {/* Episode Stamp */}
          <div className="border-2 border-red-600 text-red-500 font-eva-title font-bold px-3 py-1 text-sm tracking-widest mb-6 rotate-[-2deg] shadow-[0_0_15px_rgba(230,0,18,0.3)]">
            {current.stamp}
          </div>

          {/* Episode Number */}
          <p className="font-eva-latin text-xs md:text-sm tracking-[0.35em] text-[#ff5500] uppercase mb-4 font-bold">
            {current.episode}
          </p>

          {/* Massive Authentic Kanji Title */}
          <h1 className="font-eva-title text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-6 leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            {current.kanji}
          </h1>

          {/* Western Subtitle */}
          <h2 className="font-eva-latin text-lg sm:text-2xl md:text-3xl text-zinc-200 tracking-wider font-semibold max-w-2xl mb-4 leading-snug">
            {lang === 'pt' ? current.portuguese : current.english}
          </h2>

          {/* Technical Directive */}
          <p className="font-eva-mono text-xs sm:text-sm tracking-[0.2em] text-zinc-400 max-w-xl uppercase border-t border-zinc-800 pt-4 mt-2">
            {lang === 'pt' ? current.directivePt : current.directiveEn}
          </p>

          {/* Pilot Identification */}
          <div className="mt-8 flex items-center gap-4 text-[10px] sm:text-xs font-eva-mono text-zinc-500 tracking-widest uppercase">
            <span>NERV TOKYO-3</span>
            <span>·</span>
            <span>PILOT: JOÃO VINÍCIUS</span>
            <span>·</span>
            <span className="text-[#ff5500]">SYNCHRONIZED</span>
          </div>
        </motion.div>

        {/* Footer Prompt */}
        <div className="absolute bottom-4 left-0 right-0 text-center text-[10px] font-eva-mono text-zinc-600 tracking-widest uppercase pointer-events-none">
          {lang === 'pt' ? 'CLIQUE EM QUALQUER LUGAR PARA FECHAR' : 'CLICK ANYWHERE TO DISMISS EYECATCH'}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

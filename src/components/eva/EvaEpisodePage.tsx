import React, { useState } from 'react';
import { evaTranslations } from './evaTranslations';
import { EvaTitleCard } from './EvaTitleCard';
import { EvaAtFieldCanvas } from './EvaAtFieldCanvas';
import { EvaSyncHarmonics } from './EvaSyncHarmonics';
import { MagiConsensusTerminal } from './MagiConsensusTerminal';
import { EvaEpisodeActs } from './EvaEpisodeActs';
import { EvaMagiBank } from './EvaMagiBank';
import { EvaCommsTerminal } from './EvaCommsTerminal';
import { EvaHoneycombBackground } from './EvaHoneycombBackground';
import { EvaWorldSelector } from './EvaWorldSelector';
import { Globe, Sparkles, ArrowLeft } from 'lucide-react';

interface EvaEpisodePageProps {
  onNavigateModern?: () => void;
}

export const EvaEpisodePage: React.FC<EvaEpisodePageProps> = ({ onNavigateModern }) => {
  // English default as mandated by AGENTS.md
  const [lang, setLang] = useState<'en' | 'pt'>('en');
  const [isEyecatchOpen, setIsEyecatchOpen] = useState(false);
  const [bgMode, setBgMode] = useState<'honeycomb' | 'pentagon'>('honeycomb');

  const t = evaTranslations[lang];

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'pt' : 'en'));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#020204] text-zinc-100 font-eva-mono selection:bg-[#ff5500] selection:text-black relative overflow-x-hidden">
      {/* Top Hazard Warning Shutter */}
      <div className="h-2 w-full eva-hazard-stripes" />

      {/* Animated Honeycomb / Pentagon Background */}
      <EvaHoneycombBackground mode={bgMode} />

      {/* Fullscreen Episode Title Card Eyecatch Modal */}
      <EvaTitleCard
        isOpen={isEyecatchOpen}
        onClose={() => setIsEyecatchOpen(false)}
        lang={lang}
      />

      {/* Top Masthead & Navigation Bar */}
      <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-[#ff5500]/40 px-4 md:px-8 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Left: NERV Identification */}
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateModern}
              className="flex items-center gap-1.5 px-2.5 py-1 border border-zinc-700 bg-zinc-950 text-zinc-300 hover:border-[#ff5500] hover:text-[#ff5500] transition-colors"
              title="Return to Modern Portfolio"
            >
              <ArrowLeft size={13} />
              <span className="hidden sm:inline">RETURN</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
              <span className="text-[#ff5500] font-bold tracking-wider hidden sm:inline">
                NERV // DOGMA CENTRAL
              </span>
              <span className="text-zinc-600 hidden sm:inline">|</span>
              <span className="text-red-500 font-bold tracking-widest text-[11px]">
                {t.header.emergencyCode}
              </span>
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mesh Geometry Toggle (Honeycomb / Pentagon) */}
            <button
              onClick={() => setBgMode((prev) => (prev === 'honeycomb' ? 'pentagon' : 'honeycomb'))}
              className="px-2.5 py-1 border border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-[#ff9900] hover:text-[#ff9900] transition-colors tracking-wider text-[11px] flex items-center gap-1.5"
              title={lang === 'pt' ? 'Alternar Malha de Fundo (Colmeia / Pentágono)' : 'Toggle Background Mesh (Honeycomb / Pentagon)'}
            >
              <span className="text-[#ff5500] font-bold">{bgMode === 'honeycomb' ? '⬡' : '⬠'}</span>
              <span className="hidden sm:inline">
                {bgMode === 'honeycomb'
                  ? (lang === 'pt' ? 'COLMEIA' : 'HONEYCOMB')
                  : (lang === 'pt' ? 'PENTÁGONO' : 'PENTAGON')}
              </span>
            </button>

            {/* Title Card Eyecatch Trigger */}
            <button
              onClick={() => setIsEyecatchOpen(true)}
              className="px-2.5 py-1 border border-[#ff5500] bg-[#ff5500]/15 text-[#ff5500] hover:bg-[#ff5500] hover:text-black transition-all font-bold tracking-wider text-[11px] flex items-center gap-1.5"
            >
              <Sparkles size={12} />
              <span>{t.header.eyecatchBtn}</span>
            </button>

            {/* Language Switcher Toggle (EN default) */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 border border-zinc-700 bg-zinc-950 text-zinc-300 hover:border-[#ff9900] hover:text-[#ff9900] transition-colors tracking-wider text-[11px] flex items-center gap-1.5"
            >
              <Globe size={12} />
              <span>{t.header.toggleLang}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Tactical Layout Container */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 space-y-12 md:space-y-16">
        {/* ========================================================
            HERO SECTION: THE EVANGELION EPISODE 01 TITLE SEQUENCE
            ======================================================== */}
        <section className="relative border-2 border-[#ff5500]/60 bg-black/90 p-6 md:p-12 overflow-hidden">
          {/* Subtle Grid Lines & Crosshairs */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ff5500]" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#ff5500]" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#ff5500]" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ff5500]" />

          {/* Background Kanji Watermark */}
          <div className="absolute -bottom-8 -left-8 text-8xl md:text-[14rem] font-eva-title font-extrabold text-zinc-900/40 pointer-events-none select-none">
            使徒
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left 7 Columns: Episode Title Card & Bio Directive */}
            <div className="lg:col-span-7 space-y-6">
              {/* Emergency Classification Stamp */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-red-600 text-white font-eva-title font-bold text-xs px-2.5 py-0.5 tracking-widest uppercase rotate-[-1deg] shadow-[0_0_12px_rgba(230,0,18,0.4)]">
                  極秘 · TOP SECRET
                </span>
                <span className="text-[11px] text-[#ff9900] tracking-widest">
                  {t.hero.pilotClassification}
                </span>
              </div>

              {/* Episode Header */}
              <div>
                <p className="text-xs md:text-sm text-[#ff5500] font-bold tracking-[0.3em] uppercase mb-2">
                  {t.hero.episodeNumber}
                </p>

                {/* Monumental Matisse-Style Kanji Typography */}
                <h1 className="font-eva-title text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter leading-none mb-3">
                  {t.hero.japaneseTitle}
                </h1>

                {/* Western Subtitle */}
                <h2 className="font-eva-latin text-xl sm:text-2xl md:text-3xl text-zinc-200 font-bold tracking-wide">
                  {t.hero.englishTitle}
                </h2>
              </div>

              {/* Pilot Identity & Operational Briefing */}
              <div className="border-l-2 border-[#ff5500] pl-4 space-y-2 py-1 bg-gradient-to-r from-[#ff5500]/5 to-transparent">
                <div className="font-eva-latin text-lg sm:text-xl text-white font-extrabold tracking-wider">
                  {t.hero.pilotName}
                </div>
                <div className="text-xs font-bold text-[#ff9900] tracking-wide">
                  {t.hero.pilotTitle}
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-eva-mono pt-1">
                  {t.hero.bioBrief}
                </p>
              </div>

              {/* Action Triggers */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => scrollToSection('episodes-section')}
                  className="px-4 py-2.5 bg-[#ff5500] hover:bg-[#ff6600] text-black text-xs font-eva-mono font-extrabold tracking-wider transition-all"
                >
                  {t.hero.btnExamineDossier}
                </button>

                <button
                  onClick={() => scrollToSection('magi-section')}
                  className="px-4 py-2.5 border border-[#ff9900] bg-[#ff9900]/10 hover:bg-[#ff9900]/25 text-[#ff9900] text-xs font-eva-mono font-bold tracking-wider transition-all"
                >
                  {t.hero.btnMagiConsensus}
                </button>

                <button
                  onClick={() => scrollToSection('comms-section')}
                  className="px-4 py-2.5 border border-zinc-700 bg-zinc-950 hover:border-white text-zinc-200 text-xs font-eva-mono font-semibold tracking-wider transition-all"
                >
                  {t.hero.btnDirectComms}
                </button>
              </div>
            </div>

            {/* Right 5 Columns: Interactive A.T. Field Harmonics */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <EvaAtFieldCanvas lang={lang} />
            </div>
          </div>
        </section>

        {/* ========================================================
            INTERNAL BATTERY COUNTDOWN & A10 SYNAPSE WAVEFORM
            ======================================================== */}
        <section>
          <EvaSyncHarmonics lang={lang} />
        </section>

        {/* ========================================================
            TACTICAL RESOLUTION: 5 AUDITED METRICS (TELEMETRY)
            ======================================================== */}
        <section className="border border-[#ff5500]/40 bg-black/90 p-6 md:p-8">
          <div className="border-b border-[#ff5500]/30 pb-4 mb-6">
            <div className="flex items-center gap-2 text-xs font-eva-mono text-[#ff5500] tracking-widest uppercase">
              <span className="w-2.5 h-2.5 bg-[#ff5500] inline-block animate-pulse" />
              <span>{t.metrics.sectionTag}</span>
            </div>
            <h3 className="font-eva-title text-2xl md:text-3xl text-white font-bold tracking-tight mt-1">
              {t.metrics.sectionTitle}
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm font-eva-mono mt-1">
              {t.metrics.sectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {t.metrics.items.map((m, idx) => (
              <div
                key={m.label}
                className="border border-zinc-800 bg-zinc-950/80 p-4 flex flex-col justify-between relative group hover:border-[#ff5500] transition-colors"
              >
                <div className="flex items-center justify-between border-b border-zinc-900 pb-2 mb-3">
                  <span className="text-[10px] font-eva-mono text-[#ff9900] font-bold">
                    TEL [0{idx + 1}]
                  </span>
                  <span className="font-eva-title text-xs text-zinc-500">{m.kanji}</span>
                </div>

                <div>
                  <div className="font-eva-title text-3xl sm:text-4xl font-black text-white group-hover:text-[#ff5500] transition-colors tracking-tight">
                    {m.value}
                  </div>
                  <div className="font-eva-mono text-xs font-bold text-zinc-200 mt-1 uppercase tracking-wider">
                    {m.label}
                  </div>
                  <div className="text-[10px] font-eva-mono text-[#ff9900] mt-0.5">
                    {m.sublabel}
                  </div>
                  <p className="text-[11px] font-eva-mono text-zinc-400 mt-2 leading-relaxed">
                    {m.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-zinc-900 text-[9px] font-eva-mono text-zinc-600 uppercase">
                  STATUS: AUDITED &amp; NOMINAL
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            CLASSIFIED COMBAT DOSSIERS: 4 ENGINEERING EPISODES
            ======================================================== */}
        <section id="episodes-section">
          <EvaEpisodeActs content={t.episodes} lang={lang} />
        </section>

        {/* ========================================================
            MAGI SUPERCOMPUTER DELIBERATION CHAMBER
            ======================================================== */}
        <section id="magi-section">
          <MagiConsensusTerminal content={t.magi} lang={lang} />
        </section>

        {/* ========================================================
            MAGI SYNAPTIC BANK (32 SKILLS) & DEPLOYMENT CHRONICLE
            ======================================================== */}
        <section>
          <EvaMagiBank
            synapticBank={t.synapticBank}
            career={t.career}
            lang={lang}
          />
        </section>

        {/* ========================================================
            DIRECT ENCRYPTED COMMS TERMINAL (CONTACT)
            ======================================================== */}
        <section id="comms-section">
          <EvaCommsTerminal content={t.comms} lang={lang} />
        </section>
      </main>

      {/* Floating Tactical World Selector */}
      <EvaWorldSelector />

      {/* Bottom Emergency Hazard Strip */}
      <footer className="mt-12">
        <div className="h-2 w-full eva-hazard-stripes" />
        <div className="bg-black py-4 px-4 text-center text-xs font-eva-mono text-zinc-600">
          <p>
            NERV // CENTRAL DOGMA // TACTICAL COMMAND POST // PILOT: JOÃO VINÍCIUS GUERBER DE SOUZA (JVGS-01)
          </p>
          <p className="text-[10px] text-zinc-700 mt-1">
            EST. 2026 // ALL SYSTEM PARAMETERS NOMINAL // PATTERN: BLUE
          </p>
        </div>
      </footer>
    </div>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Smartphone, X, Check, ExternalLink, ShieldCheck, Zap, Layers, Bot } from 'lucide-react';
import { useLanguage } from '../../i18n';

interface ProjectModalData {
  title: string;
  subtitle: string;
  tag: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  demoUrl?: string;
}

export const PrismFeaturedProjects: React.FC = () => {
  const { language } = useLanguage();
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const projectsDataEn: Record<string, ProjectModalData> = {
    banqi: {
      title: 'banQi / Casas Bahia Pay',
      subtitle: 'Mobile fintech app with 300k+ weekly active users.',
      tag: 'FINTECH & MOBILE ARCHITECTURE',
      challenge:
        'Severe instability with 120k weekly crashes in production, 900MB RAM consumption causing OOM on budget devices, and 60s startup time (Splash to Home) degrading the banQi app.',
      solution:
        'Deep modular refactoring in React Native + native Kotlin & Swift TurboModules, decoupling asynchronous bridge listeners, AppDome RASP hardening, and CI/CD automation with Fastlane and Azure DevOps.',
      results: [
        '-98% weekly crashes (120k → 2k)',
        '-55% RAM memory consumption (900MB → 400MB)',
        '-75% startup time Splash to Home (60s → 15s)',
        '+$10k annual cloud savings on AWS infrastructure',
      ],
      techStack: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Fastlane', 'AppDome (RASP)', 'Azure DevOps', 'Jest'],
    },
    aiWorkflow: {
      title: 'Strategic AI Innovation & Engineering Workflows',
      subtitle: 'Custom AI agents, automated PR reviews & test synthesis.',
      tag: 'AI DEV TOOLS & AUTOMATION WORKFLOWS',
      challenge:
        'Heavy time bottlenecks in repetitive manual PR reviews, time-consuming business and engineering documentation drafting (KRs, User Stories, Blueprints), and low automated test coverage across agile squads.',
      solution:
        'Engineered technical prompts and automated pipelines with GitHub Copilot and custom AI agents for preliminary code reviews, regression identification, Jest/Vitest unit test synthesis, and architecture blueprint generation.',
      results: [
        'Substantial reduction in technical and business documentation overhead',
        'Accelerated pull request approval cycles across multidisciplinary teams',
        'Drastic increase in automated unit test suite generation rate (Jest/Vitest)',
        'Standardized prompt engineering frameworks adopted across squads',
      ],
      techStack: ['GitHub Copilot', 'Generative AI', 'Custom Agents', 'CI/CD Automation', 'TypeScript', 'Prompt Eng', 'Jest', 'Vitest'],
    },
    designSystem: {
      title: 'Corporate Design System & Multiplatform Modules',
      subtitle: 'Unified multi-OS token architecture and native modules for banQi & WiiD.',
      tag: 'DESIGN SYSTEM & CROSS-PLATFORM ARCHITECTURE',
      challenge:
        'Inconsistencies across Android, iOS and Web interfaces, severe component duplication, UI glitches across differing screen densities, and sluggish design-to-code velocity.',
      solution:
        'Built and maintained an enterprise-grade decoupled component library distributed via GitHub Packages (npm), documented in Storybook, with multi-OS design tokens and native Kotlin/Swift bridges.',
      results: [
        'Standardization of hundreds of reusable components across platforms',
        '2x acceleration in design-to-code prototyping and feature delivery',
        '100% test reliability guaranteed with Jest & Vitest suites',
        'Rigorous visual and behavioral parity across iOS, Android, and Web',
      ],
      techStack: ['React Native', 'React', 'Next.js', 'Expo', 'TypeScript', 'Storybook', 'GitHub Packages', 'Kotlin', 'Swift', 'Jest', 'Vitest'],
      demoUrl: 'https://github.com/Guerber',
    },
  };

  const projectsDataPt: Record<string, ProjectModalData> = {
    banqi: {
      title: 'banQi / Casas Bahia Pay',
      subtitle: 'App fintech mobile com mais de 300k usuários ativos semanais.',
      tag: 'FINTECH & ARQUITETURA MOBILE',
      challenge:
        'Severa instabilidade com 120k crashes semanais em produção, 900MB de consumo de memória RAM provocando OOM em aparelhos modestos e 60s de inicialização (Splash to Home) degradando o app banQi.',
      solution:
        'Refatoração modular profunda em React Native + TurboModules Kotlin e Swift nativos, desacoplamento de listeners assíncronos da bridge, blindagem RASP AppDome e automação CI/CD com Fastlane e Azure DevOps.',
      results: [
        '-98% de crashes semanais (120k → 2k)',
        '-55% de consumo de memória RAM (900MB → 400MB)',
        '-75% no tempo de inicialização Splash to Home (60s → 15s)',
        '+$10.000 de economia anual direta em infraestrutura de nuvem AWS',
      ],
      techStack: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Fastlane', 'AppDome (RASP)', 'Azure DevOps', 'Jest'],
    },
    aiWorkflow: {
      title: 'Inovação Estratégica com IA',
      subtitle: 'Automação de engenharia, agentes customizados e workflows de produtividade.',
      tag: 'IA DEV TOOLS & AUTOMAÇÃO DE WORKFLOWS',
      challenge:
        'Altos gargalos de tempo em revisões manuais de PRs repetitivos, elaboração demorada de documentação técnica/negócios (KRs, User Stories e Blueprints) e lacunas em testes unitários entre squads.',
      solution:
        'Criação de prompts técnicos e pipelines automatizados com IA e GitHub Copilot para análise preliminar de código, identificação de regressões, geração autônoma de testes unitários (Jest/Vitest) e especificações técnicas.',
      results: [
        'Redução substancial do overhead em documentações técnicas e KRs',
        'Aceleração na homologação de pull requests entre times multidisciplinares',
        'Aumento expressivo na taxa de geração de cenários de teste Jest e Vitest',
        'Padronização de frameworks de prompts de IA para engenharia de software',
      ],
      techStack: ['GitHub Copilot', 'Generative AI', 'Custom Agents', 'CI/CD Automation', 'TypeScript', 'Prompt Eng', 'Jest', 'Vitest'],
    },
    designSystem: {
      title: 'Design System Corporativo & Módulos Multiplataforma',
      subtitle: 'Arquitetura unificada de tokens multi-SO e pontes nativas para banQi & WiiD.',
      tag: 'DESIGN SYSTEM & ARQUITETURA MULTIPLATAFORMA',
      challenge:
        'Inconsistência crônica entre interfaces Android, iOS e Web, duplicação de componentes, bugs visuais em diferentes densidades de tela e lentidão extrema na transição design-to-code.',
      solution:
        'Construção e sustentação de biblioteca corporativa desacoplada distribuída via GitHub Packages (npm), documentada no Storybook, com suporte a tokens multi-SO e módulos nativos Kotlin/Swift.',
      results: [
        'Padronização de centenas de componentes reutilizáveis entre plataformas',
        'Velocidade 2x maior na prototipação e entrega de novas features',
        'Testabilidade garantida com 100% de confiabilidade em Jest e Vitest',
        'Paridade visual e comportamental rigorosa entre iOS, Android e Web',
      ],
      techStack: ['React Native', 'React', 'Next.js', 'Expo', 'TypeScript', 'Storybook', 'GitHub Packages', 'Kotlin', 'Swift', 'Jest', 'Vitest'],
      demoUrl: 'https://github.com/Guerber',
    },
  };

  const projectsData = language === 'pt' ? projectsDataPt : projectsDataEn;
  const selectedProject = selectedKey ? projectsData[selectedKey] : null;

  const handleOpenModal = (key: string) => {
    setSelectedKey(key);
  };

  const handleCloseModal = () => {
    setSelectedKey(null);
  };

  return (
    <section id="projects" className="w-full pt-6 pb-20 glass-section-contain">
      {/* Section Header (Exact from image: FEATURED PROJECTS ────) */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xs sm:text-[13px] font-bold text-slate-400 uppercase tracking-widest shrink-0">
          {language === 'pt' ? 'Projetos em Destaque' : 'Featured Projects'}
        </h2>
        <div className="h-px bg-gradient-to-r from-slate-200 via-slate-200 to-transparent flex-1" />
      </div>

      {/* 3 Featured Projects Cards Grid (Exact from image) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {/* CARD 1: BanQi App */}
        <motion.div
          whileHover={{ y: -6 }}
          onClick={() => handleOpenModal('banqi')}
          className="group relative rounded-[32px] apple-liquid-card-light transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer min-h-[380px] transform-gpu"
        >
          {/* Top Info Area */}
          <div className="p-6 sm:p-7 relative z-10">
            {/* Header: Icon + Arrow */}
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md shadow-blue-500/20 flex items-center justify-center text-white">
                <Smartphone className="w-5 h-5" />
              </div>

              <div className="w-9 h-9 rounded-full apple-liquid-chip group-hover:bg-white flex items-center justify-center text-slate-600 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shadow-xs">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-1.5 group-hover:text-indigo-600 transition-colors">
              banQi / Casas Bahia Pay
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              {language === 'pt' ? 'App fintech mobile com 300k+ usuários ativos semanais.' : 'Mobile fintech app with 300k+ weekly active users.'}
            </p>
          </div>

          {/* Bottom Angled Phone Mockup (Exact layout from image) */}
          <div className="relative w-full h-[200px] mt-auto overflow-hidden">
            {/* Dark Smartphone Mockup Angled from bottom */}
            <div className="absolute -bottom-10 right-4 w-[240px] sm:w-[260px] rounded-t-[36px] bg-[#0c1017] border-[4px] border-[#222834] shadow-2xl p-3.5 pb-12 rotate-[6deg] group-hover:rotate-[3deg] group-hover:translate-y-[-10px] transition-all duration-500">
              {/* Phone Dynamic Island / Speaker */}
              <div className="w-20 h-4 bg-black rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
              </div>

              {/* BanQi App UI */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white font-extrabold text-lg tracking-tight">BanQi</span>
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                </div>

                {/* Financial Balance Card */}
                <div className="p-3 rounded-2xl bg-[#161d2b] border border-blue-500/20">
                  <span className="text-[10px] text-slate-400 block mb-0.5">
                    {language === 'pt' ? 'Saldo Disponível' : 'Available Balance'}
                  </span>
                  <span className="text-sm font-bold text-white tracking-wide">
                    {language === 'pt' ? 'R$ 12.840,50' : '$ 12,840.50'}
                  </span>
                </div>

                {/* Wave Curve Graph */}
                <div className="h-10 w-full overflow-hidden">
                  <svg viewBox="0 0 100 35" className="w-full h-full">
                    <defs>
                      <linearGradient id="banqiWave" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,25 Q25,5 50,20 T100,8 L100,35 L0,35 Z" fill="url(#banqiWave)" />
                    <path d="M0,25 Q25,5 50,20 T100,8" fill="none" stroke="#60a5fa" strokeWidth="2.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CARD 2: AI Engineering & Automation */}
        <motion.div
          whileHover={{ y: -6 }}
          onClick={() => handleOpenModal('aiWorkflow')}
          className="group relative rounded-[32px] apple-liquid-card-light transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer min-h-[380px] transform-gpu"
        >
          {/* Top Info Area */}
          <div className="p-6 sm:p-7 relative z-10">
            {/* Header: Icon + Arrow */}
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md shadow-indigo-500/20 flex items-center justify-center text-white">
                <Bot className="w-5 h-5" />
              </div>

              <div className="w-9 h-9 rounded-full apple-liquid-chip group-hover:bg-white flex items-center justify-center text-slate-600 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shadow-xs">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-1.5 group-hover:text-indigo-600 transition-colors">
              {language === 'pt' ? 'Inovação com IA' : 'AI Engineering'}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              {language === 'pt' ? 'Agentes customizados & workflows de engenharia.' : 'Custom AI agents & automated engineering workflows.'}
            </p>
          </div>

          {/* Bottom Angled AI Inspector Mockup */}
          <div className="relative w-full h-[200px] mt-auto overflow-hidden">
            {/* Angled Glass Window */}
            <div className="absolute -bottom-8 left-6 right-[-20px] rounded-tl-[24px] bg-[#0c1017] border border-indigo-500/30 shadow-2xl p-4 rotate-[-2deg] group-hover:rotate-0 group-hover:translate-y-[-8px] transition-all duration-500 flex flex-col font-mono text-[11px] leading-relaxed text-slate-300">
              {/* Window Header */}
              <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[10px] text-indigo-400 ml-2 font-sans font-semibold">copilot · ai-agent.ts</span>
                </div>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  LIVE AGENT
                </span>
              </div>

              {/* Agent Activities */}
              <div className="space-y-1.5 text-[10px]">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Synthesizing Vitest unit tests...</span>
                </div>
                <div className="text-slate-400 pl-3">
                  &gt; PR #142: Architecture review complete
                </div>
                <div className="text-sky-300 pl-3">
                  &gt; Generated: User Stories & Blueprints
                </div>
                <div className="mt-1 p-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 flex items-center justify-between">
                  <span>Quality Gates: 100% Passed</span>
                  <span className="text-[9px] font-sans font-bold">Jest & Vitest</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CARD 3: Corporate Design System */}
        <motion.div
          whileHover={{ y: -6 }}
          onClick={() => handleOpenModal('designSystem')}
          className="group relative rounded-[32px] apple-liquid-card-light transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer min-h-[380px] transform-gpu"
        >
          {/* Top Info Area */}
          <div className="p-6 sm:p-7 relative z-10">
            {/* Header: Icon + Arrow */}
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-md shadow-sky-500/20 flex items-center justify-center text-white">
                <Layers className="w-5 h-5" />
              </div>

              <div className="w-9 h-9 rounded-full apple-liquid-chip group-hover:bg-white flex items-center justify-center text-slate-600 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shadow-xs">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-1.5 group-hover:text-indigo-600 transition-colors">
              Design System
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              {language === 'pt' ? 'Tokens multi-SO, Storybook & pontes nativas.' : 'Multi-OS tokens, Storybook & native bridge modules.'}
            </p>
          </div>

          {/* Bottom Angled Design System Palette Mockup */}
          <div className="relative w-full h-[200px] mt-auto overflow-hidden">
            {/* Angled Clean Component Showcase Window */}
            <div className="absolute -bottom-8 left-6 right-[-20px] rounded-tl-[24px] bg-white border border-slate-200/90 shadow-2xl p-4 rotate-[2deg] group-hover:rotate-0 group-hover:translate-y-[-8px] transition-all duration-500 flex flex-col">
              {/* Window Header */}
              <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="text-[10px] text-slate-600 ml-2 font-mono font-semibold">storybook · tokens</span>
                </div>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 font-semibold border border-sky-100">
                  npm / GitHub Packages
                </span>
              </div>

              {/* UI Component Showcase */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white text-[10px] font-bold shadow-xs">
                    Button Primary
                  </div>
                  <div className="px-2 py-1 rounded-lg bg-slate-100 text-slate-700 text-[10px] font-semibold border border-slate-200">
                    Outline
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 ml-auto" />
                </div>

                {/* Token Chips */}
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-[9px] font-mono text-slate-500">
                  <span>--radius-lg: 24px</span>
                  <span className="text-indigo-600 font-semibold">iOS · Android · Web</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Technical Dossier Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl rounded-[36px] apple-liquid-card-light p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto transform-gpu"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseModal}
                className="absolute top-6 right-6 p-2 rounded-full apple-liquid-pill-light hover:bg-white text-slate-600 transition-all cursor-pointer shadow-xs"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Tag */}
              <span className="inline-block px-3.5 py-1 rounded-full apple-liquid-pill-light text-indigo-700 text-[11px] font-bold uppercase tracking-wider mb-3 shadow-xs">
                {selectedProject.tag}
              </span>

              {/* Title & Subtitle */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                {selectedProject.subtitle}
              </p>

              {/* Challenge & Solution */}
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-2xl bg-amber-50/75 border border-amber-200/60 shadow-xs">
                  <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <span>⚠️</span> {language === 'pt' ? 'Desafio Arquitetural' : 'Architectural Challenge'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-sky-50/75 border border-sky-200/60 shadow-xs">
                  <h4 className="text-xs font-bold text-sky-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-sky-600" /> {language === 'pt' ? 'Solução & Engenharia Aplicada' : 'Engineered Solution & Applied Architecture'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Quantified Results */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> {language === 'pt' ? 'Resultados Quantificados' : 'Quantified Results'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.results.map((res, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl apple-liquid-chip flex items-start gap-2.5 shadow-xs"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-700">{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                  {language === 'pt' ? 'Tecnologias Utilizadas' : 'Technologies Used'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full apple-liquid-chip text-slate-700 text-xs font-mono font-medium shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* External Link if exists */}
              {selectedProject.demoUrl && (
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm transition-all"
                  >
                    <span>{language === 'pt' ? 'Ver no GitHub' : 'View on GitHub'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

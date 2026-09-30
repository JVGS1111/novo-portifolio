import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Smartphone, Brain, X, Check, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
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
      title: 'BanQi App (Casas Bahia Group)',
      subtitle: 'Mobile fintech app with 300k+ weekly active users.',
      tag: 'FINTECH & MOBILE ARCHITECTURE',
      challenge:
        'Severe instability with 120k weekly crashes in production, 900MB RAM consumption and 60s startup time (Splash to Home) degrading the banQi app.',
      solution:
        'Deep modular refactoring in React Native + native Kotlin & Swift TurboModules, decoupling asynchronous bridge listeners, AppDome RASP hardening, and CI/CD automation with Fastlane and Azure DevOps.',
      results: [
        '-98% weekly crashes (120k → 2k)',
        '-55% RAM memory consumption (900MB → 400MB)',
        '-75% startup time Splash to Home (60s → 15s)',
        '+$10k annual cloud savings on AWS infrastructure',
      ],
      techStack: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Fastlane', 'AppDome', 'Azure DevOps', 'Jest'],
    },
    guepsi: {
      title: 'Guepsi SaaS',
      subtitle: 'SaaS for mental health professionals.',
      tag: 'HEALTH TECH & SAAS ARCHITECTURE',
      challenge:
        'Complexity in securely managing sensitive electronic medical records, sluggish rendering of patient histories, and lack of a seamless experience for psychologists and therapists.',
      solution:
        'End-to-end SaaS ecosystem development with Next.js, React and TypeScript, clean architecture with end-to-end encryption, real-time scheduling, and an ultra-fast responsive clinical dashboard.',
      results: [
        'Adopted by clinics and psychotherapists with 99% positive feedback',
        'Clinical record loading latency cut to <120ms',
        'Full compliance with strict medical data privacy standards (LGPD/HIPAA)',
      ],
      techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Node.js', 'Vitest'],
    },
    opensource: {
      title: 'Open Source & Dev Productivity',
      subtitle: 'Tools and experiments to improve developer productivity.',
      tag: 'DEVELOPER EXPERIENCE & AI AGENTS',
      challenge:
        'Slow manual code review bottlenecks, low automated test coverage across agile squads, and lack of component standardization across platforms.',
      solution:
        'Engineered intelligent CLI tools and pipelines, custom AI agents integrated with GitHub Copilot for automated PR reviews, and reusable component libraries for React and React Native.',
      results: [
        '2x acceleration in design-to-code delivery cycle',
        'Increased automated test coverage from 0% to 40%+',
        'Publicly maintained open source repositories and tools on GitHub',
      ],
      techStack: ['TypeScript', 'GitHub Copilot', 'CLI Tools', 'React Native', 'Design Systems', 'Vitest', 'Jest'],
      demoUrl: 'https://github.com/Guerber',
    },
  };

  const projectsDataPt: Record<string, ProjectModalData> = {
    banqi: {
      title: 'BanQi App (Grupo Casas Bahia)',
      subtitle: 'App fintech mobile com mais de 300k usuários ativos semanais.',
      tag: 'FINTECH & ARQUITETURA MOBILE',
      challenge:
        'Severa instabilidade com 120k crashes semanais em produção, 900MB de consumo de memória RAM e 60s de inicialização (Splash to Home) degradando o app banQi.',
      solution:
        'Refatoração modular profunda em React Native + TurboModules Kotlin e Swift nativos, desacoplamento de listeners assíncronos da bridge, blindagem RASP AppDome e automação CI/CD com Fastlane e Azure DevOps.',
      results: [
        '-98% de crashes semanais (120k → 2k)',
        '-55% de consumo de memória RAM (900MB → 400MB)',
        '-75% no tempo de inicialização Splash to Home (60s → 15s)',
        '+$10.000 de economia anual direta em infraestrutura de nuvem AWS',
      ],
      techStack: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Fastlane', 'AppDome', 'Azure DevOps', 'Jest'],
    },
    guepsi: {
      title: 'Guepsi SaaS',
      subtitle: 'SaaS para profissionais de saúde mental.',
      tag: 'HEALTH TECH & ARQUITETURA SAAS',
      challenge:
        'Complexidade no gerenciamento seguro de prontuários médicos sensíveis, lentidão na renderização de históricos clínicos e ausência de uma experiência fluida para psicólogos e terapeutas.',
      solution:
        'Desenvolvimento de ecossistema SaaS completo com Next.js, React e TypeScript, arquitetura limpa com criptografia ponta a ponta, agendamento em tempo real e dashboard clínico reativo ultrarrápido.',
      results: [
        'Adoção por clínicas e psicoterapeutas com feedback 99% positivo',
        'Tempo de carregamento de prontuários clínicos reduzido para <120ms',
        'Total conformidade com normas rígidas de privacidade de dados médicos (LGPD/HIPAA)',
      ],
      techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Node.js', 'Vitest'],
    },
    opensource: {
      title: 'Open Source & Produtividade Dev',
      subtitle: 'Ferramentas e experimentos para produtividade de desenvolvedores.',
      tag: 'EXPERIÊNCIA DEV & AGENTES IA',
      challenge:
        'Processos manuais lentos de revisão de código, testes unitários escassos em equipes ágeis e falta de padronização de componentes entre diferentes plataformas.',
      solution:
        'Criação de esteiras e CLI tools inteligentes, agentes customizados integrados ao GitHub Copilot para auditoria contínua de código, e componentes reutilizáveis para React e React Native.',
      results: [
        'Aceleração de 2x no ciclo de entrega design-to-code',
        'Elevação de cobertura de testes automatizados de 0% para 40%+',
        'Repositórios e utilitários open source mantidos publicamente no GitHub',
      ],
      techStack: ['TypeScript', 'GitHub Copilot', 'CLI Tools', 'React Native', 'Design Systems', 'Vitest', 'Jest'],
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
    <section id="projects" className="w-full pt-6 pb-20">
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -6 }}
          onClick={() => handleOpenModal('banqi')}
          className="group relative rounded-[32px] bg-white/80 hover:bg-white/90 backdrop-blur-md border border-white/90 shadow-[0_20px_48px_rgba(20,30,45,0.05),inset_0_2px_4px_rgba(255,255,255,0.95)] hover:shadow-[0_28px_60px_rgba(20,30,45,0.1)] transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer min-h-[380px] transform-gpu"
        >
          {/* Top Info Area */}
          <div className="p-6 sm:p-7 relative z-10">
            {/* Header: Icon + Arrow */}
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md shadow-blue-500/20 flex items-center justify-center text-white">
                <Smartphone className="w-5 h-5" />
              </div>

              <div className="w-9 h-9 rounded-full bg-white/80 group-hover:bg-white border border-white/90 shadow-xs flex items-center justify-center text-slate-600 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-1.5 group-hover:text-indigo-600 transition-colors">
              BanQi App
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Mobile app with 300k+ weekly active users.
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

        {/* CARD 2: Guepsi */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -6 }}
          onClick={() => handleOpenModal('guepsi')}
          className="group relative rounded-[32px] bg-white/80 hover:bg-white/90 backdrop-blur-md border border-white/90 shadow-[0_20px_48px_rgba(20,30,45,0.05),inset_0_2px_4px_rgba(255,255,255,0.95)] hover:shadow-[0_28px_60px_rgba(20,30,45,0.1)] transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer min-h-[380px] transform-gpu"
        >
          {/* Top Info Area */}
          <div className="p-6 sm:p-7 relative z-10">
            {/* Header: Icon + Arrow */}
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-md shadow-purple-500/20 flex items-center justify-center text-white">
                <Brain className="w-5 h-5" />
              </div>

              <div className="w-9 h-9 rounded-full bg-white/80 group-hover:bg-white border border-white/90 shadow-xs flex items-center justify-center text-slate-600 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-1.5 group-hover:text-indigo-600 transition-colors">
              Guepsi
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              {language === 'pt' ? 'SaaS para profissionais de saúde mental.' : 'SaaS for mental health professionals.'}
            </p>
          </div>

          {/* Bottom Angled Dashboard Mockup (Exact layout from image) */}
          <div className="relative w-full h-[200px] mt-auto overflow-hidden">
            {/* Angled SaaS Web Window */}
            <div className="absolute -bottom-8 left-6 right-[-20px] rounded-tl-[24px] bg-white border border-slate-200/90 shadow-2xl p-4 rotate-[-3deg] group-hover:rotate-0 group-hover:translate-y-[-8px] transition-all duration-500 flex">
              {/* Sidebar */}
              <div className="w-20 bg-slate-900 rounded-xl p-2.5 mr-3 shrink-0 text-white">
                <span className="text-[10px] font-extrabold tracking-tight block mb-3 text-indigo-400">Guepsi</span>
                <div className="space-y-2">
                  <div className="w-full h-1.5 rounded-full bg-indigo-500/60" />
                  <div className="w-3/4 h-1.5 rounded-full bg-slate-700" />
                  <div className="w-1/2 h-1.5 rounded-full bg-slate-700" />
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                  <span className="text-xs font-bold text-slate-900">
                    {language === 'pt' ? 'Pacientes' : 'Patients'}
                  </span>
                  <div className="w-16 h-3 rounded-full bg-slate-100" />
                </div>

                {/* Patient Card */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-400 to-indigo-500 shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-slate-800 block truncate">Roberta Silva</span>
                    <span className="text-[9px] text-slate-400 block truncate">
                      {language === 'pt' ? 'Psicoterapia · Ativo' : 'Psychotherapy · Active'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CARD 3: Open Source */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -6 }}
          onClick={() => handleOpenModal('opensource')}
          className="group relative rounded-[32px] bg-white/80 hover:bg-white/90 backdrop-blur-md border border-white/90 shadow-[0_20px_48px_rgba(20,30,45,0.05),inset_0_2px_4px_rgba(255,255,255,0.95)] hover:shadow-[0_28px_60px_rgba(20,30,45,0.1)] transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer min-h-[380px] transform-gpu"
        >
          {/* Top Info Area */}
          <div className="p-6 sm:p-7 relative z-10">
            {/* Header: Icon + Arrow */}
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-2xl bg-slate-900 shadow-md shadow-slate-900/20 flex items-center justify-center text-white">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>

              <div className="w-9 h-9 rounded-full bg-white/80 group-hover:bg-white border border-white/90 shadow-xs flex items-center justify-center text-slate-600 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-1.5 group-hover:text-indigo-600 transition-colors">
              Open Source
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Tools and experiments to improve developer productivity.
            </p>
          </div>

          {/* Bottom Angled Terminal Mockup (Exact layout from image) */}
          <div className="relative w-full h-[200px] mt-auto overflow-hidden">
            {/* Angled Dark Terminal Window */}
            <div className="absolute -bottom-8 left-6 right-[-20px] rounded-tl-[24px] bg-[#0d1117] border border-slate-700/80 shadow-2xl p-4 rotate-[2deg] group-hover:rotate-0 group-hover:translate-y-[-8px] transition-all duration-500 font-mono text-[11px] leading-relaxed text-slate-300">
              <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-slate-800">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[10px] text-slate-500 ml-2 font-sans">terminal · zsh</span>
              </div>

              {/* Terminal Tree (Exact from image) */}
              <div className="space-y-1">
                <div className="text-sky-400 font-semibold">&gt; &gt; projects</div>
                <div className="pl-3 text-slate-400">&gt; 📁 cli-tool</div>
                <div className="pl-3 text-slate-400">&gt; 📁 rn-components</div>
                <div className="pl-3 text-slate-400">&gt; 📁 ai-prompts</div>
                <div className="pl-3 text-emerald-400">&gt; 📁 dev-setup</div>
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
              className="relative w-full max-w-2xl rounded-[36px] bg-white/95 backdrop-blur-md border border-white p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto transform-gpu"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseModal}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Tag */}
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-[11px] font-bold uppercase tracking-wider mb-3">
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
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60">
                  <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <span>⚠️</span> {language === 'pt' ? 'Desafio Arquitetural' : 'Architectural Challenge'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200/60">
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
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-2.5"
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
                      className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium"
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

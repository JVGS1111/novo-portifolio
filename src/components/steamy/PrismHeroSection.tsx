import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import { PrismHeroVisual } from './PrismHeroVisual';
import { useLanguage } from '../../i18n/LanguageContext';

export const PrismHeroSection: React.FC = () => {
  const { language } = useLanguage();
  const isPt = language === 'pt';

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleDownloadCV = () => {
    alert(
      isPt
        ? 'Currículo Executivo de João Vinícius Guerber pronto para envio! Você também pode entrar em contato direto por e-mail ou LinkedIn.'
        : "João Vinícius Guerber's Executive Resume is ready to download! You can also connect directly via Email or LinkedIn."
    );
  };

  // Tech stack items from inspiration image
  const techStack = [
    {
      name: 'React Native',
      desc: 'Mobile Core & TurboModules',
      color: '#00d8ff',
      icon: (
        <svg viewBox="0 0 115.3 100" className="w-5 h-5">
          <ellipse cx="57.65" cy="50" rx="16.7" ry="44.5" fill="none" stroke="#0284c7" strokeWidth="6" transform="rotate(30 57.65 50)" />
          <ellipse cx="57.65" cy="50" rx="16.7" ry="44.5" fill="none" stroke="#0284c7" strokeWidth="6" transform="rotate(90 57.65 50)" />
          <ellipse cx="57.65" cy="50" rx="16.7" ry="44.5" fill="none" stroke="#0284c7" strokeWidth="6" transform="rotate(150 57.65 50)" />
          <circle cx="57.65" cy="50" r="8" fill="#0284c7" />
        </svg>
      ),
    },
    {
      name: 'React',
      desc: 'Modern Frontend & Hooks',
      color: '#61dafb',
      icon: (
        <svg viewBox="0 0 115.3 100" className="w-5 h-5">
          <ellipse cx="57.65" cy="50" rx="16.7" ry="44.5" fill="none" stroke="#38bdf8" strokeWidth="5" transform="rotate(30 57.65 50)" />
          <ellipse cx="57.65" cy="50" rx="16.7" ry="44.5" fill="none" stroke="#38bdf8" strokeWidth="5" transform="rotate(90 57.65 50)" />
          <ellipse cx="57.65" cy="50" rx="16.7" ry="44.5" fill="none" stroke="#38bdf8" strokeWidth="5" transform="rotate(150 57.65 50)" />
          <circle cx="57.65" cy="50" r="7" fill="#38bdf8" />
        </svg>
      ),
    },
    {
      name: 'Next.js',
      desc: 'SSR, App Router & Edge',
      color: '#000000',
      icon: (
        <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center text-white font-extrabold text-[10px]">
          N
        </div>
      ),
    },
    {
      name: 'Vite',
      desc: 'Ultra-fast Tooling',
      color: '#646cff',
      icon: (
        <svg viewBox="0 0 32 32" className="w-5 h-5">
          <path d="M29.5 5.5L16.8 28.2a1 1 0 01-1.6 0L2.5 5.5a1 1 0 01.9-1.5h25.2a1 1 0 01.9 1.5z" fill="url(#viteGradient)" />
          <path d="M19 3l-8 15h6l-3 10 10-15h-6l5-10z" fill="#facc15" />
          <defs>
            <linearGradient id="viteGradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#41d1ff" />
              <stop offset="1" stopColor="#bd34fe" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      desc: 'Type Safety & Architecture',
      color: '#3178c6',
      icon: (
        <div className="w-5 h-5 rounded-md bg-[#3178c6] flex items-center justify-center text-white font-bold text-[9px] tracking-tight">
          TS
        </div>
      ),
    },
    {
      name: 'Firebase',
      desc: 'Cloud, Auth & Realtime',
      color: '#ffca28',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M4 17.5L8.5 2.5l3.5 6.5-6.5 8.5z" fill="#ffa000" />
          <path d="M12 9l3.5-6.5L20 17.5l-8-8.5z" fill="#f57c00" />
          <path d="M4 17.5l8 4.5 8-4.5-8-8.5-8 8.5z" fill="#ffca28" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      desc: 'CI/CD Actions & Copilot',
      color: '#24292e',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-slate-800">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="relative w-full pt-2 pb-16 lg:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        {/* Left Column: Eyebrow, Headline, Description, Buttons, Tech Stack */}
        <div className="lg:col-span-5 flex flex-col items-start z-10">
          {/* Eyebrow Badge (Apple Liquid Glass Pill) */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-liquid-pill-light mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest text-slate-600 uppercase">
              {isPt ? 'Desenvolvedor Fullstack & Mobile' : 'Fullstack & Mobile Developer'}
            </span>
          </div>

          {/* Main Headline (Exact from image: Turning ideas into real products) */}
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6">
            {isPt ? (
              <>
                Transformando{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block">
                  ideias
                </span>
                <br />
                em produtos reais.
              </>
            ) : (
              <>
                Turning{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block">
                  ideas
                </span>
                <br />
                into real products.
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-normal">
            {isPt
              ? 'Construo aplicações web e mobile escaláveis com foco em alta performance, experiência de usuário impecável e arquitetura limpa.'
              : 'I build scalable web and mobile applications with a focus on performance, great user experience and clean architecture.'}
          </p>

          {/* Action Buttons (Exact style from image) */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            {/* Primary Dark Pill Button */}
            <button
              type="button"
              onClick={scrollToProjects}
              className="px-6 sm:px-7 py-3.5 rounded-full bg-[#181a20] hover:bg-black text-white font-semibold text-sm shadow-[0_12px_24px_rgba(24,26,32,0.18)] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 cursor-pointer group"
            >
              <span>{isPt ? 'Ver meus projetos' : 'View my work'}</span>
              <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Secondary Frosted Glass Pill Button — Apple Liquid Glass */}
            <button
              type="button"
              onClick={handleDownloadCV}
              className="px-6 sm:px-7 py-3.5 rounded-full apple-liquid-pill-light hover:bg-white text-slate-800 font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 cursor-pointer group shadow-xs hover:shadow-md"
            >
              <span>{isPt ? 'Baixar CV' : 'Download CV'}</span>
              <Download className="w-4 h-4 text-slate-500 group-hover:text-slate-900 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Tech Stack Strip (Exact style from image) */}
          <div className="w-full">
            <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3.5">
              {isPt ? 'Tecnologias que domino' : 'Tech I work with'}
            </span>
            <div className="flex flex-wrap items-center gap-2.5">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  title={`${tech.name} — ${tech.desc}`}
                  className="w-11 h-11 rounded-2xl apple-liquid-chip hover:bg-white flex items-center justify-center cursor-pointer group transform-gpu shadow-xs hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all"
                >
                  <div className="transition-transform group-hover:scale-110">
                    {tech.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: 3D Glass Composition with 3D Physics Tilt Code Card */}
        <div className="lg:col-span-7 relative flex items-center justify-center">
          <PrismHeroVisual onScrollToProjects={scrollToProjects} />
        </div>
      </div>
    </section>
  );
};

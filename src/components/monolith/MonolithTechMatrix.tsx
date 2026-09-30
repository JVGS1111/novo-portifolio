import React from 'react';
import { MonolithPanel } from './MonolithPanel';
import { Award, GraduationCap, Globe, Cpu } from 'lucide-react';

interface TechDomain {
  id: string;
  name: string;
  skills: string[];
}

const techDomains: TechDomain[] = [
  {
    id: '01',
    name: 'MOBILE & NATIVO',
    skills: [
      'React Native',
      'Kotlin (Android)',
      'Swift (iOS)',
      'Expo & Bare Workflow',
      'Native Modules (Bridge)',
      'Android Studio / Profiler',
      'Xcode / Instruments',
      'Hermes Engine Opt'
    ]
  },
  {
    id: '02',
    name: 'FRONT-END & WEB',
    skills: [
      'React.js Moderno',
      'Next.js (App Router)',
      'TypeScript Estrito',
      'JavaScript (ESNext)',
      'Tailwind CSS',
      'Three.js / WebGL',
      'HTML5 / CSS3 Semântico',
      'Zustand / Redux State'
    ]
  },
  {
    id: '03',
    name: 'DEVOPS & CLOUD',
    skills: [
      'Fastlane CI/CD',
      'Azure DevOps Pipelines',
      'GitHub Actions',
      'AWS (S3, CloudFront)',
      'AppDome RASP Security',
      'Docker Containers',
      'Databricks Analytics',
      'Dynatrace APM'
    ]
  },
  {
    id: '04',
    name: 'QUALIDADE & IA DEV',
    skills: [
      'Jest & Vitest Suítes',
      'Clean Architecture & SOLID',
      'TDD & BDD Práticas',
      'Design Systems & Tokens',
      'GitHub Copilot Certified',
      'AI Custom Dev Agents',
      'Prompt Engineering',
      'Performance Profiling'
    ]
  }
];

export const MonolithTechMatrix: React.FC = () => {
  return (
    <section id="monolith-tech" className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-12 scroll-mt-24">
      {/* Cinematic Section Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pb-6 border-b border-white/10 mb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-widest uppercase text-white/50">
            <span className="text-[#ffaa00]">// 05</span>
            <span>TECHNICAL MATRIX & CREDENTIALS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-['Space_Grotesk'] text-white tracking-tight uppercase">
            MATRIZ TECNOLÓGICA & CREDENCIAIS
          </h2>
          <p className="font-mono text-xs text-white/60 tracking-wider uppercase max-w-2xl leading-relaxed">
            32 COMPETÊNCIAS MAPEADAS, CERTIFICAÇÃO OFICIAL MICROSOFT/GITHUB, GRADUAÇÃO E IDIOMAS.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 font-mono text-[10px] text-white/70 tracking-widest uppercase">
          <Cpu size={14} className="text-[#ffaa00]" />
          <span>32 CORE SKILLS</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Container: 32 Tech Matrix Skills (lg:col-span-8) */}
        <MonolithPanel className="lg:col-span-8 p-6" withCorners>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techDomains.map((domain) => (
              <div key={domain.id} className="space-y-3">
                {/* Domain Header */}
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <div className="text-[11px] font-mono font-bold text-white tracking-wider uppercase">
                    {domain.name}
                  </div>
                  <span className="text-[10px] font-mono text-[#ffaa00] font-semibold">
                    0{domain.id}
                  </span>
                </div>

                {/* 8 Skills list */}
                <div className="space-y-1.5">
                  {domain.skills.map((skill, sIdx) => {
                    const num = String(sIdx + 1).padStart(2, '0');
                    return (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2 px-2.5 py-1.5 bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#ffaa00]/40 text-xs font-mono transition-colors group cursor-default"
                      >
                        <span className="text-white/30 text-[10px] font-mono group-hover:text-[#ffaa00] transition-colors">
                          {num}
                        </span>
                        <span className="text-white/80 group-hover:text-white font-medium truncate">
                          {skill}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </MonolithPanel>

        {/* Right Container: Certifications, Education & Languages (lg:col-span-4) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Card 1: Official Certification */}
          <MonolithPanel interactive withCorners className="p-5 flex-1 group hover:border-[#ffaa00]/70 transition-all">
            <div className="space-y-2">
              <div className="text-[10px] font-mono font-bold text-[#ffaa00] tracking-widest uppercase flex items-center gap-2">
                <Award size={14} className="text-[#ffaa00]" />
                <span>CERTIFICAÇÃO OFICIAL // IA</span>
              </div>
              <h4 className="text-base font-black font-['Space_Grotesk'] text-white group-hover:text-[#ffaa00] transition-colors">
                GitHub Copilot Certified
              </h4>
              <div className="text-[10px] font-mono text-white/50 uppercase">
                EMISSOR: MICROSOFT / GITHUB · 2025 – 2028
              </div>
              <p className="text-xs font-sans text-white/70 leading-relaxed pt-1">
                Especialização em engenharia orientada a inteligência artificial, automação avançada de código e agentes para aceleração de entrega.
              </p>
            </div>
          </MonolithPanel>

          {/* Card 2: Higher Education */}
          <MonolithPanel interactive withCorners className="p-5 flex-1 group hover:border-[#ffaa00]/70 transition-all">
            <div className="space-y-2">
              <div className="text-[10px] font-mono font-bold text-[#ffaa00] tracking-widest uppercase flex items-center gap-2">
                <GraduationCap size={14} className="text-[#ffaa00]" />
                <span>GRADUAÇÃO SUPERIOR</span>
              </div>
              <h4 className="text-base font-black font-['Space_Grotesk'] text-white group-hover:text-[#ffaa00] transition-colors">
                Análise e Desenvolvimento de Sistemas
              </h4>
              <div className="text-[10px] font-mono text-white/50 uppercase">
                INSTITUIÇÃO: UNINTER · 2019 – 2021
              </div>
              <p className="text-xs font-sans text-white/70 leading-relaxed pt-1">
                Formação com sólida base em arquitetura de software, orientação a objetos, algoritmos, modelagem de banco de dados e sistemas distribuídos.
              </p>
            </div>
          </MonolithPanel>

          {/* Card 3: Languages & Global Communication */}
          <MonolithPanel interactive withCorners className="p-5 flex-1 group hover:border-[#ffaa00]/70 transition-all">
            <div className="space-y-2">
              <div className="text-[10px] font-mono font-bold text-[#ffaa00] tracking-widest uppercase flex items-center gap-2">
                <Globe size={14} className="text-[#ffaa00]" />
                <span>IDIOMAS & COMUNICAÇÃO GLOBAL</span>
              </div>
              <div className="space-y-2 pt-1 text-xs">
                <div>
                  <div className="font-mono font-bold text-white flex items-center justify-between">
                    <span>Português: Nativo</span>
                    <span className="text-[#ffaa00] text-[10px] font-mono">[FLUÊNCIA]</span>
                  </div>
                  <p className="text-[11px] font-sans text-white/50">
                    Comunicação executiva, liderança técnica e alinhamento com stakeholders.
                  </p>
                </div>
                <div>
                  <div className="font-mono font-bold text-white flex items-center justify-between">
                    <span>Inglês: B2 Intermediário Superior</span>
                    <span className="text-[#ffaa00] text-[10px] font-mono">[PROFICIENTE]</span>
                  </div>
                  <p className="text-[11px] font-sans text-white/50">
                    Fluência para reuniões técnicas internacionais, documentação e times globais.
                  </p>
                </div>
              </div>
            </div>
          </MonolithPanel>
        </div>
      </div>
    </section>
  );
};

export default MonolithTechMatrix;

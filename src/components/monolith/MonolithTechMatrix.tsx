import React from 'react';
import { MonolithPanel } from './MonolithPanel';
import { Award, GraduationCap, Globe } from 'lucide-react';

interface TechDomain {
  name: string;
  accentColor: string;
  skills: string[];
}

const techDomains: TechDomain[] = [
  {
    name: 'MOBILE & NATIVOS',
    accentColor: '#ff9900',
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
    name: 'FRONT-END & WEB',
    accentColor: '#00f0ff',
    skills: [
      'React.js Moderno',
      'Next.js (App Router)',
      'TypeScript Estrito',
      'JavaScript (ESNext)',
      'Tailwind CSS',
      'Three.js / WebGL 3D',
      'HTML5 / CSS3 Semântico',
      'Redux / Zustand State'
    ]
  },
  {
    name: 'DEVOPS, CLOUD & RASP',
    accentColor: '#22c55e',
    skills: [
      'Fastlane CI/CD',
      'Azure DevOps Pipelines',
      'GitHub Actions CI/CD',
      'AWS (S3, CloudFront)',
      'AppDome RASP Security',
      'Docker Containers',
      'Databricks Analytics',
      'Dynatrace APM Metrics'
    ]
  },
  {
    name: 'QUALIDADE & IA DEV',
    accentColor: '#a855f7',
    skills: [
      'Jest & Vitest Suítes',
      'Clean Architecture & SOLID',
      'TDD & BDD Práticas',
      'Design Systems & Tokens',
      'GitHub Copilot (Certified)',
      'AI Custom Dev Agents',
      'Prompt Engineering',
      'Profiling de Performance'
    ]
  }
];

export const MonolithTechMatrix: React.FC = () => {
  return (
    <section id="monolith-tech" className="w-full max-w-7xl mx-auto px-4 py-6 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-l-4 border-[#ff9900] bg-[#14161a] p-3 mb-4 font-mono text-[11px] text-slate-300 border border-[#383b44]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-bold text-[#ff9900]">/// 04 // MATRIZ TÉCNICA & CREDENCIAIS</span>
          <span className="text-[#8e95a5]">::</span>
          <span className="text-slate-200 tracking-wider">
            32 HABILIDADES MAPEADAS · CERTIFICAÇÕES OFICIAIS · GRADUAÇÃO & IDIOMAS
          </span>
        </div>
        <span className="text-[#8e95a5] font-semibold text-[10px] shrink-0">
          [ AUDITADO ]
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Container: 32 Tech Matrix Skills (lg:col-span-8) */}
        <MonolithPanel className="lg:col-span-8 p-5" withRivets>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techDomains.map((domain, dIdx) => (
              <div key={dIdx} className="space-y-2">
                {/* Domain Header */}
                <div className="flex items-center gap-2 pb-1.5 border-b border-[#383b44]">
                  <div
                    className="w-1.5 h-3 shrink-0"
                    style={{ backgroundColor: domain.accentColor }}
                  />
                  <div className="text-[11px] font-mono font-bold text-white tracking-wider">
                    {domain.name}
                  </div>
                </div>

                {/* 8 Skills list */}
                <div className="space-y-1">
                  {domain.skills.map((skill, sIdx) => {
                    const num = String(sIdx + 1).padStart(2, '0');
                    return (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2 p-1.5 bg-[#121418] hover:bg-[#1a1d22] border border-[#262930] hover:border-[#484b54] text-[11px] font-mono transition-colors group cursor-default"
                      >
                        <span className="text-[#8e95a5] text-[10px] font-semibold group-hover:text-white">
                          [{num}]
                        </span>
                        <span className="text-slate-300 group-hover:text-white font-medium truncate">
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
          <MonolithPanel interactive withRivets className="p-4 flex-1">
            <div className="flex items-start gap-3">
              <div className="w-1 h-full min-h-[50px] bg-[#00f0ff] shrink-0" />
              <div className="space-y-1.5">
                <div className="text-[9px] font-mono font-bold text-[#00f0ff] tracking-widest flex items-center gap-1.5">
                  <Award size={12} />
                  <span>CERTIFICAÇÃO OFICIAL // IA GENERATIVA</span>
                </div>
                <h4 className="text-sm font-bold font-['Space_Grotesk',sans-serif] text-white">
                  GitHub Copilot Certified
                </h4>
                <div className="text-[10px] font-mono text-[#8e95a5]">
                  EMISSOR: GitHub / Microsoft · VIGÊNCIA: 2025 – 2028
                </div>
                <p className="text-[11px] font-sans text-slate-300 leading-relaxed pt-1">
                  Especialização em engenharia orientada a inteligência artificial, automação avançada de código e agentes para aceleração de entrega.
                </p>
              </div>
            </div>
          </MonolithPanel>

          {/* Card 2: Higher Education */}
          <MonolithPanel interactive withRivets className="p-4 flex-1">
            <div className="flex items-start gap-3">
              <div className="w-1 h-full min-h-[50px] bg-[#ff9900] shrink-0" />
              <div className="space-y-1.5">
                <div className="text-[9px] font-mono font-bold text-[#ff9900] tracking-widest flex items-center gap-1.5">
                  <GraduationCap size={12} />
                  <span>GRADUAÇÃO SUPERIOR // ENGENHARIA DE SOFTWARE</span>
                </div>
                <h4 className="text-sm font-bold font-['Space_Grotesk',sans-serif] text-white">
                  Análise e Desenvolvimento de Sistemas
                </h4>
                <div className="text-[10px] font-mono text-[#8e95a5]">
                  INSTITUIÇÃO: Uninter · PERÍODO: 2019 – 2021
                </div>
                <p className="text-[11px] font-sans text-slate-300 leading-relaxed pt-1">
                  Formação com sólida base em arquitetura de software, orientação a objetos, algoritmos, modelagem de banco de dados e sistemas distribuídos.
                </p>
              </div>
            </div>
          </MonolithPanel>

          {/* Card 3: Languages & Global Communication */}
          <MonolithPanel interactive withRivets className="p-4 flex-1">
            <div className="flex items-start gap-3">
              <div className="w-1 h-full min-h-[50px] bg-[#22c55e] shrink-0" />
              <div className="space-y-1.5">
                <div className="text-[9px] font-mono font-bold text-[#22c55e] tracking-widest flex items-center gap-1.5">
                  <Globe size={12} />
                  <span>IDIOMAS & COMUNICAÇÃO GLOBAL</span>
                </div>
                <div className="space-y-2 pt-1 text-[11px]">
                  <div>
                    <div className="font-mono font-bold text-white flex items-center justify-between">
                      <span>Português: Nativo</span>
                      <span className="text-[#22c55e] text-[9px] font-mono">[FLUÊNCIA TOTAL]</span>
                    </div>
                    <p className="text-[10px] font-sans text-slate-400">
                      Comunicação executiva, liderança técnica e alinhamento com stakeholders.
                    </p>
                  </div>
                  <div>
                    <div className="font-mono font-bold text-white flex items-center justify-between">
                      <span>Inglês: B2 Intermediário Superior</span>
                      <span className="text-[#00f0ff] text-[9px] font-mono">[PROFICIENTE]</span>
                    </div>
                    <p className="text-[10px] font-sans text-slate-400">
                      Fluência para reuniões técnicas internacionais, documentação em inglês e times globais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </MonolithPanel>
        </div>
      </div>
    </section>
  );
};

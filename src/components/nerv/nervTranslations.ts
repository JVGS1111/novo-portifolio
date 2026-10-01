export interface NervProjectItem {
  id: string;
  number: string;
  title: string;
  organization: string;
  tagline: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  threatLevel?: string;
  operationalStatus?: string;
  fullDetails: {
    challenge: string;
    solution: string;
    impact: string;
    architecture: string[];
  };
}

export interface NervExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  clearance: string;
  description: string;
  highlights: string[];
}

export interface NervCertificationItem {
  title: string;
  issuer: string;
  period: string;
  badge: string;
  description: string;
}

export interface NervLanguageItem {
  name: string;
  level: string;
  desc: string;
}

export interface NervSkillCategory {
  category: string;
  kanji: string;
  skills: { name: string; level: number; tag: string }[];
}

export interface NervContent {
  header: {
    engineerName: string;
    japaneseRole: string;
    nav: {
      home: string;
      projects: string;
      experience: string;
      skills: string;
      about: string;
      contact: string;
    };
    tokyoTimeLabel: string;
    switchTheme: string;
    toggleLang: string;
  };
  terminal: {
    personalTerminal: string;
    userTag: string;
    softwareKatakana: string;
    engineerKatakana: string;
    fullName: string;
    japaneseMotto: string;
    englishMotto: string;
    bioParagraph: string;
    btnViewProjects: string;
    btnDownloadCv: string;
    coreSkillsTitle: string;
    coreSkillsKanji: string;
    coreSkills: string[];
  };
  rightHud: {
    evaUnit: string;
    evaKanji: string;
    standbyStatus: string;
    activeStatus: string;
    testType: string;
    pilotLabel: string;
    pilotValue: string;
    syncLabel: string;
    syncValue: string;
    statusLabel: string;
    monitoringSystem: string;
    magiMelchior: string;
    magiBalthasar: string;
    magiCasper: string;
    locationName: string;
    coordinatesLat: string;
    coordinatesLong: string;
  };
  selectedProjects: {
    sectionTitle: string;
    sectionKanji: string;
    viewCaseAction: string;
    catalogTitle: string;
    catalogSubtitle: string;
    items: NervProjectItem[];
  };
  experience: {
    sectionTitle: string;
    sectionKanji: string;
    records: NervExperienceItem[];
  };
  skills: {
    sectionTitle: string;
    sectionKanji: string;
    certificationsTitle: string;
    certificationsKanji: string;
    categories: NervSkillCategory[];
    certifications: NervCertificationItem[];
  };
  about: {
    sectionTitle: string;
    sectionKanji: string;
    pilotClassification: string;
    pilotId: string;
    fullName: string;
    yearsOfExperience: string;
    dossierText: string[];
    specializations: string[];
    languagesTitle: string;
    languages: NervLanguageItem[];
  };
  contact: {
    sectionTitle: string;
    sectionKanji: string;
    channelStatus: string;
    emailLabel: string;
    emailValue: string;
    copiedToast: string;
    btnCopyEmail: string;
    btnLinkedin: string;
    btnGithub: string;
    locationLabel: string;
    locationValue: string;
    directiveNote: string;
  };
}

export const nervTranslations: { en: NervContent; pt: NervContent } = {
  en: {
    header: {
      engineerName: 'JOÃO VINÍCIUS GUERBER DE SOUZA',
      japaneseRole: 'ソフトウェアエンジニア',
      nav: {
        home: '01_HOME',
        projects: '02_PROJECTS',
        experience: '03_EXPERIENCE',
        skills: '04_SKILLS',
        about: '05_ABOUT',
        contact: '06_CONTACT'
      },
      tokyoTimeLabel: 'TOKYO-3 LOCAL TIME (JST / BRT)',
      switchTheme: 'SELECT WORLD',
      toggleLang: '🇧🇷 PT'
    },
    terminal: {
      personalTerminal: 'PERSONAL TERMINAL ——>',
      userTag: 'USER: JVGS',
      softwareKatakana: 'ソフトウェア',
      engineerKatakana: 'エンジニア',
      fullName: 'JOÃO VINÍCIUS GUERBER DE SOUZA',
      japaneseMotto: 'スケールするプロダクトと体験を構築する',
      englishMotto: 'BUILDING SCALABLE PRODUCTS AND EXPERIENCES',
      bioParagraph:
        'Senior Software Engineer with 6 years of experience specializing in high-impact mobile and web modernizations. Relentless focus on clean architecture, native Kotlin/Swift bridges, extreme system stability, technical debt eradication, and intelligent AI automation.',
      btnViewProjects: 'VIEW PROJECTS',
      btnDownloadCv: 'CONTACT / CV',
      coreSkillsTitle: 'CORE SKILLS',
      coreSkillsKanji: '主要スキル',
      coreSkills: [
        'React Native (Core)',
        'Kotlin / Swift Bridges',
        'TypeScript / React',
        'Next.js / Architecture',
        'AWS Cloud / CI/CD',
        'AI Engineering / Automation'
      ]
    },
    rightHud: {
      evaUnit: 'EVA 01',
      evaKanji: '初号機',
      standbyStatus: 'STANDBY',
      activeStatus: 'COMBAT ACTIVE',
      testType: 'TEST TYPE: EVA-01',
      pilotLabel: 'PILOT: 01 (J.V.G. DE SOUZA)',
      pilotValue: '01 (J.V.G.S.)',
      syncLabel: 'SYNC:',
      syncValue: '99.42%',
      statusLabel: 'STATUS: STANDBY',
      monitoringSystem: 'NERV MAIN MONITORING SYSTEM',
      magiMelchior: 'MAGI-1: MELCHIOR [ONLINE]',
      magiBalthasar: 'MAGI-2: BALTHASAR [ONLINE]',
      magiCasper: 'MAGI-3: CASPER [ONLINE]',
      locationName: 'TOKYO-3',
      coordinatesLat: '35.0116° N',
      coordinatesLong: '138.6569° E'
    },
    selectedProjects: {
      sectionTitle: 'SELECTED PROJECTS',
      sectionKanji: '選択されたプロジェクト',
      viewCaseAction: 'OPEN TACTICAL DOSSIER',
      catalogTitle: 'TACTICAL PROJECTS & COMBAT OPERATIONS CATALOG',
      catalogSubtitle: 'CLASSIFIED SECTOR 02 ARCHIVES // DEPLOYED SYSTEMS AUDIT',
      items: [
        {
          id: 'banqi-app',
          number: '01',
          title: 'Operation BanQi: Hyperscale Modernization',
          organization: 'banQi — Grupo Casas Bahia',
          tagline: 'Financial super app with +300k weekly active users and millions of transactions.',
          description:
            'Deep systemic re-engineering of one of Brazil’s largest retail financial apps. Stabilized mission-critical payment workflows, eliminated crash spikes, and reduced memory footprints.',
          tags: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Fastlane', 'AppDome (RASP)', 'Azure DevOps', 'Jest'],
          threatLevel: 'CLASS-A CRITICAL FINANCIAL INFRASTRUCTURE',
          operationalStatus: 'DEPLOYED & OPERATIONAL IN PRODUCTION',
          metrics: [
            { label: 'Weekly Crashes', value: '-98% (120k → 2k)' },
            { label: 'RAM Footprint', value: '-55% (900MB → 400MB)' },
            { label: 'Splash to Home', value: '-75% (60s → 15s)' },
            { label: 'AWS Cloud Cost', value: '+$10,000/yr Saved' },
            { label: 'Test Coverage', value: '0% → 40% Audited' }
          ],
          fullDetails: {
            challenge:
              'Massive financial app suffering from 120,000 weekly crashes, prohibitive memory consumption (900MB) triggering OOM exceptions on entry-level Android devices, and cold startup latency of up to 60 seconds.',
            solution:
              'Led technical re-engineering of legacy bridges, introduced native Kotlin/Swift modules, implemented proactive RASP mobile defense via AppDome, eliminated memory leaks through list virtualization, and streamlined CI/CD pipelines via Fastlane.',
            impact:
              'Reduced weekly crashes by 98% (120,000 down to 2,000), compressed RAM footprint by 55% (900MB to 400MB), accelerated splash-to-home boot time by 75% (60s to 15s), and generated US$ 10,000 in direct annual cloud infrastructure savings.',
            architecture: [
              'React Native with Optimized Hermes Engine & Native Bridge Isolation',
              'Native Kotlin (Android) & Swift (iOS) Low-Level Modules',
              'AppDome RASP Security & Defense Integration',
              'Fastlane & Azure DevOps Continuous Deployment Automation',
              'Dynatrace APM & Databricks Real-Time Telemetry Pipelines',
              'Jest & Vitest Unit Test Suites with 40% Critical Path Coverage'
            ]
          }
        },
        {
          id: 'ai-dev-workflows',
          number: '02',
          title: 'Operation Synapse: AI Dev Workflows & Automation',
          organization: 'Strategic Innovation & Engineering Productivity',
          tagline: 'Custom AI dev tooling, synthetic test generators, and autonomous PR review pipelines.',
          description:
            'Architecture of customized AI agents, specialized prompt protocols, and automated CI/CD workflows accelerating software development life-cycles and engineering quality.',
          tags: ['GitHub Copilot', 'Generative AI', 'Custom Agents', 'CI/CD Automation', 'TypeScript', 'Prompt Engineering', 'Jest'],
          threatLevel: 'TACTICAL INTELLIGENCE PROTOCOL // 極秘',
          operationalStatus: 'ACTIVE IN PRODUCTION WORKFLOWS',
          metrics: [
            { label: 'PR Review Speed', value: '2x Acceleration' },
            { label: 'Spec Overhead', value: '-60% Documentation Lag' },
            { label: 'Test Synthesis', value: '+80% Jest/Vitest Scenarios' }
          ],
          fullDetails: {
            challenge:
              'Engineering squads faced substantial delivery bottlenecks due to repetitive manual pull request triage, slow drafting of technical specifications (KRs, User Stories, Architecture Blueprints), and unit test coverage gaps.',
            solution:
              'Engineered context-aware AI agents, structured prompt pipelines, and CI/CD automated review bots that conduct preliminary code analysis, flag potential regressions, and generate test boilerplate and technical specs.',
            impact:
              'Cut technical documentation latency by 60%, halved PR approval turnaround times across cross-functional squads, and accelerated test case generation for complex edge conditions.',
            architecture: [
              'GitHub Copilot Certified Context Engineering & Agent Protocols',
              'Custom Autonomous AI Agents for Code Review & Regression Scanning',
              'Automated Jest & Vitest Test Harness Synthesis',
              'GitHub Actions Continuous Integration & Verification Webhooks',
              'TypeScript Domain AST Parsing & Token Synchronization'
            ]
          }
        },
        {
          id: 'multi-os-design-system',
          number: '03',
          title: 'Operation Harmony: Multi-OS Design System',
          organization: 'banQi & WiiD',
          tagline: 'Unified cross-platform component library & design token architecture across Web and Mobile.',
          description:
            'Construction and stewardship of decoupled, high-performance Design Systems spanning Android, iOS, and Web, accelerating feature releases with uncompromising visual consistency.',
          tags: ['React Native', 'React', 'Next.js', 'Expo', 'TypeScript', 'Design Systems', 'Storybook', 'Jest', 'Vitest'],
          threatLevel: 'MULTI-PLATFORM CORE STANDARD',
          operationalStatus: 'DEPLOYED ACROSS MULTIPLE PRODUCTION SQUADS',
          metrics: [
            { label: 'Component Library', value: '100+ Shared Nodes' },
            { label: 'Delivery Velocity', value: '2x Prototyping Speed' },
            { label: 'Visual Parity', value: '100% Multi-OS Alignment' }
          ],
          fullDetails: {
            challenge:
              'High visual drift and component duplication across Android, iOS, and Web teams, leading to styling bugs on varied screen pixel densities and extended design-to-code iteration cycles.',
            solution:
              'Architected a strongly-typed, modular component system powered by TypeScript and design tokens, backed by Storybook documentation, and bridged to native OS capabilities for fluid animations.',
            impact:
              'Standardized hundreds of reusable multi-platform UI components, doubled rapid prototyping speed for product teams, and achieved comprehensive testability with Jest and Vitest.',
            architecture: [
              'Cross-Platform Token Engine (Spacing, Typography, Elevation, Colors)',
              'React Native & React Web Shared Component Primitives',
              'Storybook Interactive Component Catalog & Visual Regression Testing',
              'Strict TypeScript Type Definitions & Interface Contracts',
              'Distribution via Private GitHub Packages NPM Registry'
            ]
          }
        }
      ]
    },
    experience: {
      sectionTitle: 'MILITARY & INDUSTRY COMBAT RECORD',
      sectionKanji: '作戦履歴と実務経歴',
      records: [
        {
          period: 'SEP 2025 — PRESENT',
          role: 'SENIOR SOFTWARE ENGINEER (FRONT-END & MOBILE)',
          company: 'INVILLIA · BANQI (GRUPO CASAS BAHIA)',
          location: 'REMOTE · SÃO PAULO, BR',
          clearance: 'CLEARANCE: 01-ALPHA // TACTICAL LEAD',
          description:
            'Acting as senior technical reference in mobile and front-end engineering for banQi, spearheading mission-critical performance, architecture, and stability initiatives.',
          highlights: [
            'Systemic stabilization at scale: reduced weekly crashes by 98% and cut RAM footprint by 55%.',
            'Accelerated Splash-to-Home boot time by 75% via Hermes optimization and native bridge isolation.',
            'Quality engineering culture: elevated automated test coverage from 0% to 40% with 100% CI/CD build reliability.',
            'Strategic AI innovation: developed custom agents and automated workflows for PR reviews, test suite generation, and specification drafting (KRs, User Stories, Blueprints).',
            'Legacy modernization and cloud egress optimization generating US$ 10,000/year in direct AWS cloud savings.',
            'Strategic partner to PMs and Staff Engineers in product discovery, pipeline governance (Fastlane, GitHub Actions, Azure DevOps), and mobile defense (RASP via AppDome).'
          ]
        },
        {
          period: 'SEP 2024 — SEP 2025',
          role: 'MID-LEVEL SOFTWARE ENGINEER (FRONT-END & MOBILE)',
          company: 'INVILLIA · BANQI - CASAS BAHIA PAY (GRUPO CASAS BAHIA)',
          location: 'REMOTE · SÃO PAULO, BR',
          clearance: 'CLEARANCE: LEVEL-A // CORE INFRASTRUCTURE',
          description:
            'Continuous development of robust mobile financial applications, deep native platform integration, and multi-platform Design System evolution.',
          highlights: [
            'Contributed to core system design and authored shared Design System components across mobile and web platforms.',
            'Engineered and maintained native bridge modules for React Native in Kotlin (Android) and Swift (iOS).',
            'Enforced engineering excellence through Clean Code, SOLID architecture, and rigorous automated unit and integration test suites.'
          ]
        },
        {
          period: 'JAN 2024 — SEP 2024',
          role: 'MID-LEVEL MOBILE & FRONT-END DEVELOPER',
          company: 'WIID – WORK IN IDEAS',
          location: 'REMOTE · CURITIBA, BR',
          clearance: 'CLEARANCE: LEVEL-B // DEPLOYMENT ARCHITECT',
          description:
            'Development of multi-platform digital products emphasizing superior user experience, fluid rendering performance, and comprehensive test coverage.',
          highlights: [
            'Engineered and sustained cross-platform web and mobile applications with React, Next.js, and React Native (Expo).',
            'Full end-to-end feature ownership from Figma design translation to production deployment.',
            'Authored unit test suites using Jest and Vitest, and provided technical mentorship to junior developers and engineering interns.'
          ]
        },
        {
          period: 'DEC 2021 — JAN 2024',
          role: 'JUNIOR FRONT-END DEVELOPER',
          company: 'WIID – WORK IN IDEAS',
          location: 'CURITIBA, BR',
          clearance: 'CLEARANCE: LEVEL-C // INTERFACE SPECIALIST',
          description:
            'Initial career track constructing scalable web and mobile interfaces within the TypeScript and React modern ecosystem.',
          highlights: [
            'Built and maintained responsive web and mobile digital products using React, React Native, and TypeScript.',
            'Wrote comprehensive unit test suites with Jest to guarantee continuous release stability and maintain code quality standards.'
          ]
        },
        {
          period: 'DEC 2020 — DEC 2021',
          role: 'WEB DEVELOPER',
          company: 'FREELANCE – AUTÔNOMO',
          location: 'BRAZIL · REMOTE',
          clearance: 'CLEARANCE: LEVEL-D // INDEPENDENT OPERATOR',
          description:
            'Development and maintenance of fullstack web applications, high-converting landing pages, and customized digital platforms.',
          highlights: [
            'Engineered web applications utilizing PHP, JavaScript, CSS3, and HTML5.',
            'Designed high-converting responsive landing pages and custom WordPress platforms optimized for performance.',
            'Direct stakeholder management across multiple parallel client projects with strict deadlines and quality delivery.'
          ]
        }
      ]
    },
    skills: {
      sectionTitle: 'SYNAPTIC SKILL MATRIX & AUDIT',
      sectionKanji: '技術シナプス行列',
      certificationsTitle: 'OFFICIAL CLEARANCES & CERTIFICATIONS',
      certificationsKanji: '公認資格と学歴',
      categories: [
        {
          category: 'MOBILE & NATIVE MODULES',
          kanji: '主軸技術 // モバイル',
          skills: [
            { name: 'React Native', level: 98, tag: 'Core / Hermes / Architecture' },
            { name: 'Kotlin (Android)', level: 86, tag: 'Native Modules / JNI' },
            { name: 'Swift (iOS)', level: 84, tag: 'UIKit / Native Bridges' },
            { name: 'Expo', level: 92, tag: 'Ecosystem & EAS' },
            { name: 'AppDome (RASP)', level: 90, tag: 'Mobile Defense / Security' }
          ]
        },
        {
          category: 'FRONT-END & MODERN WEB',
          kanji: 'ウェブ基盤',
          skills: [
            { name: 'React', level: 98, tag: 'Hooks / Concurrent / State' },
            { name: 'Next.js', level: 94, tag: 'App Router / SSR / RSC' },
            { name: 'TypeScript', level: 96, tag: 'Strict Typing / Generics' },
            { name: 'Design Systems', level: 95, tag: 'Tokens / Multi-Platform' },
            { name: 'Tailwind CSS', level: 96, tag: 'Utility-First / Responsive' },
            { name: 'Three.js / WebGL', level: 82, tag: '3D Shaders & Canvas' }
          ]
        },
        {
          category: 'DEVOPS, CLOUD & AUTOMATION',
          kanji: '基盤インフラ // クラウド',
          skills: [
            { name: 'Fastlane', level: 94, tag: 'Mobile CI / Automation' },
            { name: 'GitHub Actions', level: 92, tag: 'CI/CD Pipelines' },
            { name: 'Azure DevOps', level: 90, tag: 'Enterprise Pipelines' },
            { name: 'AWS Cloud', level: 88, tag: 'Solutions / S3 / Lambda' },
            { name: 'AI Workflow Dev', level: 95, tag: 'Agents / LLM Ops' },
            { name: 'Dynatrace & Databricks', level: 86, tag: 'APM & Telemetry' }
          ]
        },
        {
          category: 'QUALITY, ARCHITECTURE & METHODS',
          kanji: '設計と品質保証',
          skills: [
            { name: 'Jest / Vitest', level: 94, tag: 'Unit & Integration' },
            { name: 'Clean Code & SOLID', level: 96, tag: 'Architecture Principles' },
            { name: 'System Design', level: 94, tag: 'Distributed & Resilient' },
            { name: 'Scrum & Kanban', level: 92, tag: 'Agile Delivery' },
            { name: 'Code Review & Mentorship', level: 95, tag: 'Technical Leadership' }
          ]
        }
      ],
      certifications: [
        {
          title: 'AWS Certified Solutions Architect – Associate',
          issuer: 'Amazon Web Services (AWS)',
          period: 'In Progress (Target: Q4 2026)',
          badge: 'OFFICIAL CERTIFICATION',
          description:
            'Architecting resilient cloud solutions, high availability, distributed computing, serverless architectures, and AWS infrastructure cost optimization.'
        },
        {
          title: 'GitHub Copilot Certified',
          issuer: 'GitHub',
          period: '2025 — 2028',
          badge: 'OFFICIAL CERTIFICATION',
          description:
            'Technical validation of mastery in AI-assisted software development, context engineering, automated code review workflows, and developer productivity tooling.'
        },
        {
          title: 'Analysis and Systems Development (ADS)',
          issuer: 'Uninter',
          period: '2019 — 2021',
          badge: 'HIGHER EDUCATION DEGREE',
          description:
            'Solid computer science foundation, database modeling, software engineering principles, algorithm design, and data structures.'
        }
      ]
    },
    about: {
      sectionTitle: 'PERSONNEL DOSSIER: J.V.G. DE SOUZA',
      sectionKanji: '特務機関員個人記録',
      pilotClassification: 'CHIEF SOFTWARE ENGINEER // DESIGNATION: PILOT 01-ALPHA',
      pilotId: 'JVGS-1996-DEV',
      fullName: 'JOÃO VINÍCIUS GUERBER DE SOUZA',
      yearsOfExperience: '6 Years of Professional Experience',
      dossierText: [
        'João Vinícius Guerber de Souza is a Senior Software Engineer specializing in resilient mobile architectures, scalable web ecosystems, and autonomous AI-assisted workflows.',
        'With 6 years of battle-tested engineering experience in high-volume retail fintech (banQi / Grupo Casas Bahia) and cross-platform software agencies, he operates at the boundary of low-level performance (Hermes bytecodes, native Kotlin/Swift bridges, memory compaction) and polished, empathetic user experience.',
        'Official GitHub Copilot Certified Engineer and actively preparing for AWS Solutions Architect certification (Q4 2026). Committed to clean code, deterministic state machines, and building software systems engineered to endure extreme traffic and scale.'
      ],
      specializations: [
        'High-Scale Fintech & Mobile Super Apps',
        'Native Kotlin & Swift Modules for React Native',
        'Cross-Platform Design System Token Architecture',
        'Hermes Runtime Profiling & Memory Diagnostics',
        'Generative AI Agent Integration & Workflows',
        'Continuous Mobile CI/CD (Fastlane & GitHub Actions)'
      ],
      languagesTitle: 'COMMUNICATION PROTOCOLS // 言語',
      languages: [
        {
          name: 'Português',
          level: 'Native',
          desc: 'Fluid communication for technical leadership, architecture alignment, and stakeholder discovery.'
        },
        {
          name: 'English',
          level: 'B2 – Upper Intermediate',
          desc: 'Proven capability for global engineering squads, advanced technical documentation, and architectural specifications.'
        }
      ]
    },
    contact: {
      sectionTitle: 'DIRECT SECURE TRANSMISSION CHANNEL',
      sectionKanji: '暗号化通信回線',
      channelStatus: 'CHANNEL 01: OPEN // ENCRYPTED',
      emailLabel: 'SECURE COMM EMAIL:',
      emailValue: 'joaoviniciusgs@gmail.com',
      copiedToast: 'TRANSMISSION ADDRESS COPIED TO CLIPBOARD',
      btnCopyEmail: 'COPY COMM PROTOCOL ADDRESS',
      btnLinkedin: 'LINKEDIN PERSONNEL FILE ↗',
      btnGithub: 'GITHUB CODE REPOSITORY ↗',
      locationLabel: 'OPERATING BASE:',
      locationValue: 'BRAZIL / REMOTE GLOBAL ACCESS',
      directiveNote:
        'All transmissions are logged under NERV Tactical Communications protocols. Inquiries regarding senior engineering, architectural consulting, and fullstack initiatives are welcomed.'
    }
  },
  pt: {
    header: {
      engineerName: 'JOÃO VINÍCIUS GUERBER DE SOUZA',
      japaneseRole: 'ソフトウェアエンジニア',
      nav: {
        home: '01_HOME',
        projects: '02_PROJECTS',
        experience: '03_EXPERIENCE',
        skills: '04_SKILLS',
        about: '05_ABOUT',
        contact: '06_CONTACT'
      },
      tokyoTimeLabel: 'HORÁRIO TOKYO-3 / BRASÍLIA (JST / BRT)',
      switchTheme: 'SELECIONAR MUNDO',
      toggleLang: '🇺🇸 EN'
    },
    terminal: {
      personalTerminal: 'PERSONAL TERMINAL ——>',
      userTag: 'USER: JVGS',
      softwareKatakana: 'ソフトウェア',
      engineerKatakana: 'エンジニア',
      fullName: 'JOÃO VINÍCIUS GUERBER DE SOUZA',
      japaneseMotto: 'スケールするプロダクトと体験を構築する',
      englishMotto: 'BUILDING SCALABLE PRODUCTS AND EXPERIENCES',
      bioParagraph:
        'Engenheiro de Software Sênior com 6 anos de experiência especializado em modernização de aplicações móveis e web de alto impacto e hiperescala. Foco rigoroso em arquitetura limpa, módulos nativos (Kotlin/Swift), estabilidade extrema de sistemas, eliminação de débito técnico e automação inteligente com IA.',
      btnViewProjects: 'VER PROJETOS',
      btnDownloadCv: 'CONTATO / CV',
      coreSkillsTitle: 'CORE SKILLS',
      coreSkillsKanji: '主要スキル',
      coreSkills: [
        'React Native (Core)',
        'Pontes Kotlin / Swift',
        'TypeScript / React',
        'Next.js / Arquitetura',
        'AWS Cloud / CI/CD',
        'Engenharia de IA / Automação'
      ]
    },
    rightHud: {
      evaUnit: 'EVA 01',
      evaKanji: '初号機',
      standbyStatus: 'STANDBY',
      activeStatus: 'COMBATE ATIVO',
      testType: 'TEST TYPE: EVA-01',
      pilotLabel: 'PILOT: 01 (J.V.G. DE SOUZA)',
      pilotValue: '01 (J.V.G.S.)',
      syncLabel: 'SYNC:',
      syncValue: '99.42%',
      statusLabel: 'STATUS: STANDBY',
      monitoringSystem: 'NERV MAIN MONITORING SYSTEM',
      magiMelchior: 'MAGI-1: MELCHIOR [ONLINE]',
      magiBalthasar: 'MAGI-2: BALTHASAR [ONLINE]',
      magiCasper: 'MAGI-3: CASPER [ONLINE]',
      locationName: 'TOKYO-3',
      coordinatesLat: '35.0116° N',
      coordinatesLong: '138.6569° E'
    },
    selectedProjects: {
      sectionTitle: 'SELECTED PROJECTS',
      sectionKanji: '選択されたプロジェクト',
      viewCaseAction: 'ABRIR DOSSIÊ TÁTICO',
      catalogTitle: 'CATÁLOGO DE PROJETOS TÁTICOS E OPERAÇÕES DE COMBATE',
      catalogSubtitle: 'ARQUIVOS CLASSIFICADOS DO SETOR 02 // AUDITORIA DE SISTEMAS',
      items: [
        {
          id: 'banqi-app',
          number: '01',
          title: 'Operação BanQi: Modernização em Hiperescala',
          organization: 'banQi — Grupo Casas Bahia',
          tagline: 'Super app financeiro com +300k usuários ativos semanais e milhões de transações.',
          description:
            'Reengenharia sistêmica de um dos maiores apps de serviços financeiros do varejo brasileiro. Estabilização de fluxos críticos de pagamento, contenção de vazamentos de memória e mitigação massiva de falhas.',
          tags: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Fastlane', 'AppDome (RASP)', 'Azure DevOps', 'Jest'],
          threatLevel: 'INFRAESTRUTURA FINANCEIRA CRÍTICA CLASSE-A',
          operationalStatus: 'EM PRODUÇÃO & OPERACIONAL',
          metrics: [
            { label: 'Crashes Semanais', value: '-98% (120k → 2k)' },
            { label: 'Consumo de RAM', value: '-55% (900MB → 400MB)' },
            { label: 'Splash to Home', value: '-75% (60s → 15s)' },
            { label: 'Economia Nuvem', value: '+$10.000/ano em AWS' },
            { label: 'Cobertura Testes', value: '0% → 40% Auditada' }
          ],
          fullDetails: {
            challenge:
              'Aplicativo sofria com volume massivo de crashes semanais (120k/semana), consumo proibitivo de memória RAM (900MB) que derrubava aparelhos modestos e lentidão de até 60s no carregamento inicial.',
            solution:
              'Liderança técnica na refatoração de fluxos legados, reengenharia de módulos nativos (Kotlin/Swift), introdução de segurança móvel avançada (RASP com AppDome) e esteiras automatizadas de CI/CD com Fastlane.',
            impact:
              'Redução de 98% nos crashes semanais (120k para 2k), queda de 55% no consumo de RAM (900MB para 400MB), inicialização Splash-to-Home reduzida de 60s para 15s (-75%) e economia de US$ 10.000 anuais em infraestrutura AWS.',
            architecture: [
              'React Native com Hermes Engine Otimizado e Isolamento de Pontes',
              'Módulos Nativos de Baixo Nível em Kotlin (Android) e Swift (iOS)',
              'Defesa Móvel Avançada RASP Integrada via AppDome',
              'Automação de Esteiras Contínuas com Fastlane e Azure DevOps',
              'Telemetria e Monitoramento em Tempo Real com Dynatrace e Databricks',
              'Suíte de Testes Unitários Jest e Vitest cobrindo 40% dos Fluxos Críticos'
            ]
          }
        },
        {
          id: 'ai-dev-workflows',
          number: '02',
          title: 'Operação Synapse: Workflows de IA & Automação',
          organization: 'Inovação Estratégica & Produtividade de Engenharia',
          tagline: 'Ferramentas de IA customizadas, geradores sintéticos de testes e automação de PR reviews.',
          description:
            'Desenvolvimento de agentes de IA customizados, protocolos de prompts técnicos e pipelines automatizados para aceleração do ciclo de desenvolvimento de software e qualidade de código.',
          tags: ['GitHub Copilot', 'Generative AI', 'Custom Agents', 'CI/CD Automation', 'TypeScript', 'Prompt Engineering', 'Jest'],
          threatLevel: 'PROTOCOLO DE INTELIGÊNCIA TÁTICA // 極秘',
          operationalStatus: 'ATIVO EM FLUXOS DE PRODUÇÃO',
          metrics: [
            { label: 'Velocidade Review', value: '2x Mais Rápido' },
            { label: 'Overhead de Specs', value: '-60% Tempo em Documentação' },
            { label: 'Síntese de Testes', value: '+80% Cenários Jest/Vitest' }
          ],
          fullDetails: {
            challenge:
              'Altos gargalos de tempo em revisões manuais de PRs repetitivos, elaboração demorada de documentação de negócios (KRs, User Stories e Blueprints) e lacunas em testes unitários.',
            solution:
              'Criação de prompts técnicos e pipelines automatizados com IA que realizam análise preliminar de código, identificam potenciais regressões e geram rascunhos de testes e especificações técnicas.',
            impact:
              'Redução substancial do overhead de documentação técnica e de negócio, aceleração na homologação de pull requests entre times multidisciplinares e aumento na geração de cenários de teste Jest e Vitest.',
            architecture: [
              'Engenharia de Contexto e Agentes Certificados GitHub Copilot',
              'Agentes Autônomos Customizados para Análise de Regressões e Code Review',
              'Síntese Automatizada de Baterias de Testes Jest e Vitest',
              'Webhooks de Verificação Contínua Integrados ao GitHub Actions',
              'Transformação e Análise de AST em TypeScript'
            ]
          }
        },
        {
          id: 'multi-os-design-system',
          number: '03',
          title: 'Operação Harmony: Design System Multiplataforma',
          organization: 'banQi & WiiD',
          tagline: 'Design System unificado e arquitetura de tokens multiplataforma para Web e Mobile.',
          description:
            'Construção e sustentação de sistemas de design unificados entre Mobile e Web, acelerando o lançamento de novas features com consistência visual rigorosa e alta testabilidade.',
          tags: ['React Native', 'React', 'Next.js', 'Expo', 'TypeScript', 'Design Systems', 'Storybook', 'Jest', 'Vitest'],
          threatLevel: 'PADRÃO CORE MULTIPLATAFORMA',
          operationalStatus: 'EM PRODUÇÃO EM MÚLTIPLOS SQUADS',
          metrics: [
            { label: 'Componentes', value: '100+ Componentes Compartilhados' },
            { label: 'Velocidade', value: '2x Mais Rápido na Prototipação' },
            { label: 'Alinhamento', value: '100% Paridade Mobile & Web' }
          ],
          fullDetails: {
            challenge:
              'Inconsistência entre interfaces Android, iOS e Web, com duplicação de componentes, bugs visuais em diferentes densidades de tela e lentidão no design-to-code.',
            solution:
              'Desenvolvimento de uma biblioteca de componentes altamente desacoplada, tipada com TypeScript, com suporte a tokens de design, documentada com Storybook e pontes nativas.',
            impact:
              'Padronização de centenas de componentes reutilizáveis entre plataformas, velocidade 2x maior na prototipação e entrega de novas features e testabilidade garantida com Jest e Vitest.',
            architecture: [
              'Motor de Tokens Multiplataforma (Espaçamento, Tipografia, Elevação, Cores)',
              'Primitivas Compartilhadas para React Native e React Web',
              'Catálogo Interativo Storybook com Testes de Regressão Visual',
              'Contratos de Interface Rígidos e Tipagem Estrita em TypeScript',
              'Distribuição via Registro NPM Privado no GitHub Packages'
            ]
          }
        }
      ]
    },
    experience: {
      sectionTitle: 'HISTÓRICO OPERACIONAL E COMBATE',
      sectionKanji: '作戦履歴と実務経歴',
      records: [
        {
          period: 'SET 2025 — PRESENTE',
          role: 'SENIOR SOFTWARE ENGINEER (FRONT-END & MOBILE)',
          company: 'INVILLIA · BANQI (GRUPO CASAS BAHIA)',
          location: 'REMOTO · SÃO PAULO, BR',
          clearance: 'CREDENCIAL: 01-ALPHA // LIDERANÇA TÁTICA',
          description:
            'Atuação como referência técnica em engenharia mobile e front-end para o cliente banQi, liderando iniciativas críticas de performance, estabilidade e arquitetura.',
          highlights: [
            'Estabilização de sistemas em escala: redução de crashes em 98% e corte de 55% de memória RAM.',
            'Aceleração do tempo de carregamento de splash para home em 75% via reengenharia em React Native e módulos nativos.',
            'Cultura de qualidade: transição de 0% para 40% de cobertura de testes com 100% de confiabilidade em builds de CI/CD.',
            'Inovação estratégica com IA: desenvolvimento de ferramentas customizadas para automação de PR reviews, criação de testes e documentações (KRs, User Stories, Blueprints).',
            'Modernização de sistemas legados com otimização de recursos AWS gerando US$ 10.000/ano em economia.',
            'Parceiro estratégico de PMs e Staff Engineers em discovery de produto, gerenciamento de pipelines (Fastlane, GitHub Actions, Azure DevOps) e segurança móvel (RASP via AppDome).'
          ]
        },
        {
          period: 'SET 2024 — SET 2025',
          role: 'MID-LEVEL SOFTWARE ENGINEER (FRONT-END & MOBILE)',
          company: 'INVILLIA · BANQI - CASAS BAHIA PAY (GRUPO CASAS BAHIA)',
          location: 'REMOTO · SÃO PAULO, BR',
          clearance: 'CREDENCIAL: NÍVEL-A // INFRAESTRUTURA CORE',
          description:
            'Desenvolvimento contínuo de aplicações móveis robustas, integração nativa profunda e evolução do Design System compartilhado.',
          highlights: [
            'Contribuição no system design e construção de Design System reutilizável entre plataformas mobile e web.',
            'Criação e manutenção de módulos nativos para React Native em Kotlin (Android) e Swift (iOS).',
            'Garantia de entregas de excelência técnica seguindo princípios de Clean Code, SOLID e testes abrangentes unitários e de integração.'
          ]
        },
        {
          period: 'JAN 2024 — SET 2024',
          role: 'MID-LEVEL MOBILE & FRONT-END DEVELOPER',
          company: 'WIID – WORK IN IDEAS',
          location: 'REMOTO · CURITIBA, BR',
          clearance: 'CREDENCIAL: NÍVEL-B // ARQUITETO DE DEPLOY',
          description:
            'Desenvolvimento de produtos digitais multiplataforma com foco em alta experiência de usuário, performance e cobertura de testes.',
          highlights: [
            'Desenvolvimento e sustentação de aplicações cross-platform com React, Next.js e React Native (Expo), garantindo alta fidelidade UI/UX.',
            'Ownership completo de features, desde a tradução do design no Figma até o deploy final em produção.',
            'Criação de suítes de testes unitários com Jest e Vitest, além de mentoria técnica para desenvolvedores juniores e estagiários.'
          ]
        },
        {
          period: 'DEZ 2021 — JAN 2024',
          role: 'JUNIOR FRONT-END DEVELOPER',
          company: 'WIID – WORK IN IDEAS',
          location: 'CURITIBA, BR',
          clearance: 'CREDENCIAL: NÍVEL-C // ESPECIALISTA DE INTERFACE',
          description:
            'Início da trajetória profissional na construção de interfaces web e mobile escaláveis em ecossistema TypeScript e React.',
          highlights: [
            'Desenvolvimento e manutenção de produtos web e mobile utilizando React, React Native e TypeScript.',
            'Escrita de testes unitários com Jest para assegurar estabilidade contínua e padrões de qualidade de código.'
          ]
        },
        {
          period: 'DEZ 2020 — DEZ 2021',
          role: 'DESENVOLVEDOR WEB',
          company: 'FREELANCE – AUTÔNOMO',
          location: 'BRASIL · REMOTO',
          clearance: 'CREDENCIAL: NÍVEL-D // OPERADOR AUTÔNOMO',
          description:
            'Desenvolvimento e manutenção de aplicações web, landing pages de alta conversão e websites customizados.',
          highlights: [
            'Desenvolvimento e manutenção de aplicações web utilizando PHP, JavaScript, CSS e HTML.',
            'Criação de landing pages responsivas e websites customizados em WordPress otimizados para conversão.',
            'Gestão direta de múltiplos clientes com forte foco em prazos e qualidade de entrega.'
          ]
        }
      ]
    },
    skills: {
      sectionTitle: 'MATRIZ DE COMPETÊNCIAS SINÁPTICAS',
      sectionKanji: '技術シナプス行列',
      certificationsTitle: 'CERTIFICAÇÕES OFICIAIS & FORMAÇÃO',
      certificationsKanji: '公認資格と学歴',
      categories: [
        {
          category: 'MOBILE & MÓDULOS NATIVOS',
          kanji: '主軸技術 // モバイル',
          skills: [
            { name: 'React Native', level: 98, tag: 'Core / Hermes / Arquitetura' },
            { name: 'Kotlin (Android)', level: 86, tag: 'Módulos Nativos / JNI' },
            { name: 'Swift (iOS)', level: 84, tag: 'UIKit / Pontes Nativas' },
            { name: 'Expo', level: 92, tag: 'Ecosystem & EAS' },
            { name: 'AppDome (RASP)', level: 90, tag: 'Segurança Móvel / RASP' }
          ]
        },
        {
          category: 'FRONT-END & WEB MODERNO',
          kanji: 'ウェブ基盤',
          skills: [
            { name: 'React', level: 98, tag: 'Hooks / Concorrência / Estado' },
            { name: 'Next.js', level: 94, tag: 'App Router / SSR / RSC' },
            { name: 'TypeScript', level: 96, tag: 'Tipagem Estrita / Generics' },
            { name: 'Design Systems', level: 95, tag: 'Tokens Multiplataforma' },
            { name: 'Tailwind CSS', level: 96, tag: 'Utility-First / Responsivo' },
            { name: 'Three.js / WebGL', level: 82, tag: 'Shaders 3D & Canvas' }
          ]
        },
        {
          category: 'DEVOPS, NUVEM & AUTOMAÇÃO',
          kanji: '基盤インフラ // クラウド',
          skills: [
            { name: 'Fastlane', level: 94, tag: 'Mobile CI / Automação' },
            { name: 'GitHub Actions', level: 92, tag: 'Pipelines CI/CD' },
            { name: 'Azure DevOps', level: 90, tag: 'Pipelines Corporativos' },
            { name: 'AWS Cloud', level: 88, tag: 'Soluções / S3 / Lambda' },
            { name: 'AI Workflow Dev', level: 95, tag: 'Agentes / Ops com IA' },
            { name: 'Dynatrace & Databricks', level: 86, tag: 'APM & Telemetria' }
          ]
        },
        {
          category: 'QUALIDADE, ARQUITETURA & MÉTODOS',
          kanji: '設計と品質保証',
          skills: [
            { name: 'Jest / Vitest', level: 94, tag: 'Testes Unitários e Integração' },
            { name: 'Clean Code & SOLID', level: 96, tag: 'Princípios de Arquitetura' },
            { name: 'System Design', level: 94, tag: 'Resiliência Distribuída' },
            { name: 'Scrum & Kanban', level: 92, tag: 'Entregas Ágeis' },
            { name: 'Code Review & Mentoria', level: 95, tag: 'Liderança Técnica' }
          ]
        }
      ],
      certifications: [
        {
          title: 'AWS Certified Solutions Architect – Associate',
          issuer: 'Amazon Web Services (AWS)',
          period: 'Em andamento (Previsão Q4 2026)',
          badge: 'CERTIFICAÇÃO OFICIAL',
          description:
            'Arquitetura de soluções resilientes em nuvem, alta disponibilidade, computação distribuída, arquitetura serverless e otimização de custos de infraestrutura AWS.'
        },
        {
          title: 'GitHub Copilot Certified',
          issuer: 'GitHub',
          period: '2025 — 2028',
          badge: 'CERTIFICAÇÃO OFICIAL',
          description:
            'Validação de maestria técnica em desenvolvimento assistido por inteligência artificial, engenharia de contexto e automações em engenharia de software.'
        },
        {
          title: 'Análise e Desenvolvimento de Sistemas (ADS)',
          issuer: 'Uninter',
          period: '2019 — 2021',
          badge: 'GRADUAÇÃO TECNOLÓGICA',
          description:
            'Fundamentos sólidos de computação, engenharia de software, modelagem de banco de dados e estruturas algorítmicas.'
        }
      ]
    },
    about: {
      sectionTitle: 'DOSSIÊ DE PESSOAL: J.V.G. DE SOUZA',
      sectionKanji: '特務機関員個人記録',
      pilotClassification: 'ENGENHEIRO DE SOFTWARE SÊNIOR // DESIGNATIVO: PILOT 01-ALPHA',
      pilotId: 'JVGS-1996-DEV',
      fullName: 'JOÃO VINÍCIUS GUERBER DE SOUZA',
      yearsOfExperience: '6 Anos de Experiência Profissional',
      dossierText: [
        'João Vinícius Guerber de Souza é Engenheiro de Software Sênior especializado em arquiteturas mobile resilientes, ecossistemas web escaláveis e fluxos de trabalho assistidos por inteligência artificial.',
        'Com 6 anos de experiência consolidada em fintechs de grande porte (banQi / Grupo Casas Bahia) e produtos digitais multiplataforma, atua na convergência entre performance extrema de baixo nível (Hermes bytecodes, pontes nativas Kotlin/Swift, contenção de memória) e refinamento na experiência do usuário.',
        'Certificado oficialmente como GitHub Copilot Certified e em preparação ativa para certificação AWS Solutions Architect (Q4 2026). Comprometido com código limpo, máquinas de estado determinísticas e engenharia de software preparada para tráfego em hiperescala.'
      ],
      specializations: [
        'Fintechs de Alta Escala & Super Apps Mobile',
        'Módulos Nativos Kotlin e Swift para React Native',
        'Design Systems Multiplataforma Orientados a Tokens',
        'Diagnósticos de Memória e Profiling Hermes',
        'Integração e Automação com Agentes de IA',
        'Pipelines de CI/CD Mobile (Fastlane & GitHub Actions)'
      ],
      languagesTitle: 'PROTOCOLOS DE COMUNICAÇÃO // 言語',
      languages: [
        {
          name: 'Português',
          level: 'Nativo',
          desc: 'Comunicação fluida para liderança técnica, alinhamento arquitetural e discovery com stakeholders.'
        },
        {
          name: 'Inglês',
          level: 'B2 – Intermediário Superior',
          desc: 'Capacidade comprovada para atuar em times globais, leitura técnica avançada e escrita arquitetural.'
        }
      ]
    },
    contact: {
      sectionTitle: 'CANAL DE TRANSMISSÃO SEGURA DIRETA',
      sectionKanji: '暗号化通信回線',
      channelStatus: 'CANAL 01: ABERTO // CRIPTOGRAFADO',
      emailLabel: 'E-MAIL DE COMUNICAÇÃO:',
      emailValue: 'joaoviniciusgs@gmail.com',
      copiedToast: 'ENDEREÇO DE TRANSMISSÃO COPIADO!',
      btnCopyEmail: 'COPIAR ENDEREÇO DE TRANSMISSÃO',
      btnLinkedin: 'ARQUIVO PROFISSIONAL NO LINKEDIN ↗',
      btnGithub: 'REPOSITÓRIO DE CÓDIGO NO GITHUB ↗',
      locationLabel: 'BASE OPERACIONAL:',
      locationValue: 'BRASIL / ATUAÇÃO REMOTA GLOBAL',
      directiveNote:
        'Todas as transmissões são registradas sob os protocolos táticos da NERV. Contatos para posições seniores, consultoria de arquitetura e projetos fullstack são bem-vindos.'
    }
  }
};

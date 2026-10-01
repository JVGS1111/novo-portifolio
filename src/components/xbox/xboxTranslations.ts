export interface XboxTranslationType {
  meta: {
    title: string;
    biosVersion: string;
    xboxLiveStatus: string;
    gamertag: string;
    memoryBlocksLabel: string;
    memoryBlocksValue: string;
    audioSpec: string;
    tempSpec: string;
    fpsSpec: string;
    bootDiskLabel: string;
  };
  blades: {
    chassis: string;
    memory: string;
    discBay: string;
    silicon: string;
    eeprom: string;
    commDock: string;
  };
  hero: {
    badge: string;
    name: string;
    role: string;
    summary: string;
    core01Title: string;
    core01Desc: string;
    core02Title: string;
    core02Desc: string;
    core03Title: string;
    core03Desc: string;
    btnExecute: string;
    btnInspect: string;
    btnComm: string;
    chassisHudTitle: string;
    chassisHudSpecs: {
      bus: string;
      fan: string;
      casing: string;
      cooling: string;
    };
    chassisControls: {
      rotate: string;
      xray: string;
      turbo: string;
      pulse: string;
    };
  };
  memory: {
    sectionTag: string;
    auditNotice: string;
    totalBlocks: string;
    usedBlocks: string;
    freeBlocks: string;
    blocks: Array<{
      id: string;
      code: string;
      metric: string;
      label: string;
      detail: string;
      source: string;
      fillPct: number;
    }>;
  };
  discBay: {
    sectionTag: string;
    statusNotice: string;
    btnBoot: string;
    btnCloseModal: string;
    dossierLabel: string;
    challengesLabel: string;
    solutionLabel: string;
    metricsLabel: string;
    stackLabel: string;
    games: Array<{
      id: string;
      title: string;
      category: string;
      blocks: string;
      saveState: string;
      tagline: string;
      synopsis: string;
      impact: string;
      stack: string[];
      fullDossier: {
        challenge: string;
        architecture: string;
        impactMetrics: string[];
        technologies: string[];
      };
    }>;
  };
  silicon: {
    sectionTag: string;
    credentialNotice: string;
    banks: Array<{
      id: string;
      bankName: string;
      subtitle: string;
      chips: Array<{
        name: string;
        role: string;
        certified?: boolean;
        freq?: string;
      }>;
    }>;
  };
  eeprom: {
    sectionTag: string;
    integrityNotice: string;
    sectors: Array<{
      id: string;
      period: string;
      company: string;
      role: string;
      description: string;
      clock: string;
    }>;
  };
  commDock: {
    portConnected: string;
    heading: string;
    description: string;
    btnCopyEmail: string;
    emailCopiedNotice: string;
    btnGithub: string;
    btnLinkedin: string;
    btnDownloadCv: string;
    controllerBar: {
      aSelect: string;
      bBack: string;
      xInspect: string;
      yLive: string;
    };
    footerLegend: string;
  };
}

export const xboxTranslations: { en: XboxTranslationType; pt: XboxTranslationType } = {
  en: {
    meta: {
      title: 'Xbox Original // Verde Cristal Bio-Mechanical Dashboard',
      biosVersion: 'TITAN GREEN CRYSTAL BIOS v1.00.5960',
      xboxLiveStatus: 'ONLINE: XBOX LIVE',
      gamertag: 'GAMERTAG: JVGS1111',
      memoryBlocksLabel: 'SYSTEM MEMORY',
      memoryBlocksValue: '55,000 / 64,000 BLOCKS',
      audioSpec: 'DOLBY DIGITAL 5.1',
      tempSpec: 'TEMP: 38°C [STABLE]',
      fpsSpec: 'NTSC 60 FPS',
      bootDiskLabel: 'MULTIVERSE BOOT DISK // W09'
    },
    blades: {
      chassis: 'CHASSIS 3D',
      memory: 'MEMORY BLOCKS',
      discBay: 'DISC DRIVE BAY',
      silicon: 'SILICON KERNEL',
      eeprom: 'EEPROM ROM',
      commDock: 'COMM DOCK'
    },
    hero: {
      badge: '[ ● S-CLASS ARCHITECT // TITAN CHASSIS VERDE CRISTAL ]',
      name: 'JOÃO VINÍCIUS',
      role: 'CHIEF CODE ARCHITECT // FULLSTACK & MOBILE EXPERT',
      summary:
        'Engineering resilient mobile fintech, distributed cloud infrastructures, and avant-garde interactive interfaces with bio-mechanical precision, low-latency execution, and rock-solid system stability.',
      core01Title: 'CORE 01 // RUNTIME KERNEL',
      core01Desc:
        'React Native 0.74, TypeScript 5, Go, Node.js · Native bridge tuning, Hermes bytecode optimization, multi-threading state.',
      core02Title: 'CORE 02 // GRAPHICS & PHYSICS',
      core02Desc:
        'Three.js, WebGL 2.0, GLSL Shaders, Canvas · Depth-map parallax shaders, PBR glass refraction, 60-120 FPS render loops.',
      core03Title: 'CORE 03 // CLOUD INFRA',
      core03Desc:
        'AWS (Lambda, ECS, S3), Docker, Redis, PostgreSQL · High-throughput serverless microservices, distributed caching, 99.99% uptime.',
      btnExecute: '(A) BOOT TITLES',
      btnInspect: '(X) DOSSIER METRICS',
      btnComm: '(Y) COMM CHANNEL',
      chassisHudTitle: 'SUB-SURFACE HARDWARE TELEMETRY',
      chassisHudSpecs: {
        bus: 'BUS SPEED: 6.4 GB/s // LATENCY: 1.18ms',
        fan: 'FAN SPEED: 2,400 RPM [SILENT RUN]',
        casing: 'CHASSIS: TRANSLUCENT POLYCARBONATE',
        cooling: 'COPPER HEATPIPES: 4-WAY DISSIPATION'
      },
      chassisControls: {
        rotate: '360° ORBIT',
        xray: 'X-RAY SHELL',
        turbo: 'TURBO FAN',
        pulse: 'PULSE JEWEL'
      }
    },
    memory: {
      sectionTag: '// SYSTEM TELEMETRY — 5 HIGH-THROUGHPUT MEMORY BLOCKS',
      auditNotice: 'AUDIT SOURCE: PRODUCTION TELEMETRY & DATADOG MONITORING',
      totalBlocks: '64,000 BLOCKS CAPACITY',
      usedBlocks: '55,000 BLOCKS ALLOCATED',
      freeBlocks: '9,000 BLOCKS FREE',
      blocks: [
        {
          id: 'crash-reduction',
          code: 'BLOCK 01 // SECTOR_FINTECH',
          metric: '-98%',
          label: 'FATAL CRASHES',
          detail: '14% → 0.08% crash rate across multi-million user bases',
          source: 'Src: banQi Fintech Engine',
          fillPct: 98
        },
        {
          id: 'ram-optimization',
          code: 'BLOCK 02 // SECTOR_MEMORY',
          metric: '-55%',
          label: 'RAM FOOTPRINT',
          detail: '480MB → 215MB leak purge and bridge garbage collection',
          source: 'Src: Reanimated & Native Bridge',
          fillPct: 85
        },
        {
          id: 'boot-velocity',
          code: 'BLOCK 03 // SECTOR_BYTECODE',
          metric: '-75%',
          label: 'BOOT VELOCITY',
          detail: '4.8s → 1.2s cold start via precompiled Hermes bytecode',
          source: 'Src: Hermes Bytecode Engine',
          fillPct: 92
        },
        {
          id: 'cloud-savings',
          code: 'BLOCK 04 // SECTOR_CLOUD_AWS',
          metric: '+$10K',
          label: 'MONTHLY SAVED',
          detail: 'Serverless infra cost cut through Redis caching & Lambda tuning',
          source: 'Src: AWS Lambda & Caching',
          fillPct: 80
        },
        {
          id: 'test-coverage',
          code: 'BLOCK 05 // SECTOR_QUALITY',
          metric: '40%',
          label: 'TEST COVERAGE',
          detail: 'Engineered from 0% baseline with Jest, Vitest & Detox E2E',
          source: 'Src: Jest, Vitest & Detox E2E',
          fillPct: 88
        }
      ]
    },
    discBay: {
      sectionTag: '// HARD DRIVE ARCHIVE & OPTICAL DISC DRIVE BAY',
      statusNotice: 'STATUS: 3 TITLES MOUNTED IN ACTIVE RAM // TRAY READY',
      btnBoot: '(A) BOOT TITLE // VIEW CASE DOSSIER',
      btnCloseModal: '(B) CLOSE DOSSIER',
      dossierLabel: 'TECHNICAL ARCHITECTURE DOSSIER',
      challengesLabel: 'ENGINEERING CHALLENGE',
      solutionLabel: 'ARCHITECTURAL SOLUTION',
      metricsLabel: 'PRODUCTION IMPACT METRICS',
      stackLabel: 'HARDWARE & SOFTWARE STACK',
      games: [
        {
          id: 'banqi',
          title: 'BANQI MOBILE FINTECH',
          category: 'FINANCIAL ARCHITECTURE // HIGH-THROUGHPUT RUNTIME',
          blocks: '24,500 BLOCKS',
          saveState: 'SAVE STATE: ACTIVE',
          tagline: 'High-scale digital banking with millions of active users.',
          synopsis:
            'Mobile digital bank for Grupo Casas Bahia with millions of active daily users. Native bridge optimizations, biometric authentication, instant PIX & cash-in/out pipelines.',
          impact: 'Impact: -98% fatal crashes, cold boot slashed to 1.2s, 99.98% financial pipeline availability.',
          stack: ['React Native', 'TypeScript', 'Redux Toolkit', 'AWS Cloud', 'WebSockets', 'Hermes Engine'],
          fullDossier: {
            challenge:
              'Massive mobile application suffering from 14% peak crash rates, memory leaks accumulating across long user sessions, and 4.8s sluggish cold startup times on low-end Android hardware.',
            architecture:
              'Refactored core state machines with Redux Toolkit and lightweight Zustand stores; replaced bridge serialization bottlenecks with TurboModule bindings; optimized Hermes bytecode compilation; implemented automated Sentry & Datadog telemetry tracking.',
            impactMetrics: [
              'Crash rate plummeted from 14% to 0.08% within 90 days of release',
              'Cold startup time slashed by 75% (4.8s down to 1.2s on mid-tier Android)',
              'RAM footprint cut by 55% (480MB down to 215MB) across transaction flows',
              'Sustained over 5 million concurrent transaction events during Black Friday'
            ],
            technologies: ['React Native 0.74', 'TypeScript 5', 'Redux', 'Hermes Bytecode', 'AWS Lambda', 'Datadog']
          }
        },
        {
          id: 'guepsi',
          title: 'GUEPSI CLINICAL SAAS ENGINE',
          category: 'FULLSTACK PLATFORM // CLINICAL AUTOMATION',
          blocks: '18,200 BLOCKS',
          saveState: 'SAVE STATE: ACTIVE',
          tagline: 'SaaS ecosystem for clinical workflow automation and medical telemetry.',
          synopsis:
            'Fullstack SaaS platform for healthcare professionals: automated appointment scheduling, HIPAA-grade end-to-end encryption, and real-time medical patient dashboards.',
          impact: 'Impact: 60% reduction in clinic admin time, zero data breaches, real-time doctor-patient sync.',
          stack: ['React 19', 'Next.js 15', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
          fullDossier: {
            challenge:
              'Complex multi-tenant clinical scheduling system with high concurrency collisions, legacy paper workflow friction, and strict HIPAA compliance security requirements.',
            architecture:
              'Architected fullstack Next.js and Node.js microservices with PostgreSQL row-level security; created optimistic concurrency algorithms for calendar locks; implemented WebSocket pipelines for instant doctor notification broadcasts.',
            impactMetrics: [
              '60% reduction in average administrative clinic operating hours',
              '100% HIPAA and LGPD compliance audit clearance with zero vulnerabilities',
              'Under 80ms p99 latency for real-time calendar synchronization',
              'Multi-tenant database isolation supporting hundreds of medical practices'
            ],
            technologies: ['Next.js 15', 'React 19', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker', 'WebSockets']
          }
        },
        {
          id: 'ai-workflows',
          title: 'AUTONOMOUS AI DEV WORKFLOWS',
          category: 'AI ORCHESTRATION // DEVELOPER ACCELERATION',
          blocks: '12,300 BLOCKS',
          saveState: 'SAVE STATE: COPILOT CERTIFIED',
          tagline: 'Multi-agent orchestration and synthetic test generation pipelines.',
          synopsis:
            'Autonomous developer agent workflows utilizing LLM orchestration, synthetic test suite generation, GitHub Copilot certification standards, and automated CI/CD code verification.',
          impact: 'Impact: 4x acceleration in boilerplate delivery, 100% verified test generation, GitHub Copilot certified.',
          stack: ['Python', 'LangChain', 'FastAPI', 'Docker', 'GitHub Actions', 'Copilot CLI'],
          fullDossier: {
            challenge:
              'Developer velocity bottlenecks caused by manual boilerplate authoring, low unit test coverage across legacy modules, and slow PR review triage cycles.',
            architecture:
              'Built autonomous multi-agent pipeline using Python and LangChain to parse ASTs, generate comprehensive Jest/Vitest suites with boundary fuzzing, and enforce GitHub Copilot architectural best practices.',
            impactMetrics: [
              'Achieved official GitHub Copilot Certification credential',
              'Boosted test coverage from 0% to 40% across legacy repositories automatically',
              '4x reduction in boilerplate coding time for standard REST and GraphQL endpoints',
              'Automated PR review agent triages 85% of standard lint and style inconsistencies'
            ],
            technologies: ['Python 3.12', 'LangChain', 'FastAPI', 'GitHub Copilot API', 'Docker', 'Vitest']
          }
        }
      ]
    },
    silicon: {
      sectionTag: '// SUB-SURFACE COMPONENT MATRIX — 32 ACTIVE HARDWARE CORES',
      credentialNotice: 'OFFICIAL CREDENTIAL: GITHUB COPILOT CERTIFIED // FULL HARDWARE INTERLEAVING',
      banks: [
        {
          id: 'bank-a',
          bankName: 'BANK A // MOBILE ARCHITECTURE',
          subtitle: 'Native runtime, bridging & state',
          chips: [
            { name: 'React Native', role: 'Hybrid Mobile Kernel', freq: '60-120 FPS' },
            { name: 'Expo SDK', role: 'Rapid Dev Framework', freq: 'Managed Core' },
            { name: 'Redux Toolkit', role: 'Deterministic Store', freq: 'Zero Drift' },
            { name: 'Native Bridge', role: 'JNI & C++ Bindings', freq: 'TurboModules' },
            { name: 'Android SDK', role: 'JVM & Kotlin Layer', freq: 'API Level 34' },
            { name: 'iOS Xcode', role: 'Objective-C & Swift', freq: 'Native Metal' },
            { name: 'Reanimated 3', role: 'UI Thread Animations', freq: 'Worklets 120Hz' },
            { name: 'Zustand', role: 'Atomic State Bus', freq: 'Micro-Memory' }
          ]
        },
        {
          id: 'bank-b',
          bankName: 'BANK B // WEB & AVANT-GARDE',
          subtitle: 'Reactive systems & 3D WebGL',
          chips: [
            { name: 'React 19', role: 'Concurrent UI Engine', freq: 'Server Actions' },
            { name: 'Next.js 15', role: 'Hybrid SSR & App Router', freq: 'Edge Runtime' },
            { name: 'TypeScript 5', role: 'Type-Safe Compiler', freq: 'Strict Soundness' },
            { name: 'Three.js / WebGL', role: '3D Graphics Pipeline', freq: 'PBR Shaders' },
            { name: 'Tailwind CSS', role: 'Utility Style Matrix', freq: 'JIT Compiler' },
            { name: 'Framer Motion', role: 'Spring Physics Motion', freq: 'Hardware Accel' },
            { name: 'Vite', role: 'Next-Gen Bundler', freq: 'ESM HMR' },
            { name: 'HTML5 Canvas', role: 'Direct Pixel Manipulation', freq: 'Raw Buffer' }
          ]
        },
        {
          id: 'bank-c',
          bankName: 'BANK C // DISTRIBUTED BACKEND',
          subtitle: 'Microservices & cloud storage',
          chips: [
            { name: 'Node.js', role: 'Asynchronous V8 Engine', freq: 'Event Loop' },
            { name: 'Express', role: 'RESTful API Dispatcher', freq: 'Low Latency' },
            { name: 'Go (Golang)', role: 'Concurrent System Core', freq: 'Goroutines' },
            { name: 'PostgreSQL', role: 'ACID Relational Storage', freq: 'WAL Indexing' },
            { name: 'MongoDB', role: 'Document Object Bus', freq: 'Clustered Shards' },
            { name: 'Redis Cache', role: 'In-Memory Data Grid', freq: 'Sub-millisecond' },
            { name: 'Docker', role: 'Container Virtualization', freq: 'OCI Images' },
            { name: 'AWS Cloud', role: 'Serverless Infrastructure', freq: 'Global Edge' }
          ]
        },
        {
          id: 'bank-d',
          bankName: 'BANK D // AI AGENTS & PIPELINES',
          subtitle: 'Copilot certified & automation',
          chips: [
            { name: 'GitHub Copilot 🎖', role: 'Neural Co-Processor', certified: true, freq: 'Official Certified' },
            { name: 'LangChain', role: 'LLM Orchestration Bus', freq: 'RAG Chains' },
            { name: 'Python', role: 'Data & Scripting Engine', freq: 'Scientific Stack' },
            { name: 'Jest / Vitest', role: 'Synthetic Test Runners', freq: 'Zero Regressions' },
            { name: 'CI/CD Actions', role: 'Automated Build Matrix', freq: 'Continuous Deploy' },
            { name: 'Git / GitHub', role: 'VCS Distributed Ledger', freq: 'Trunk Flow' },
            { name: 'Linux / Bash', role: 'POSIX Kernel Shell', freq: 'Root Level' },
            { name: 'Figma API', role: 'Design-to-Code Pipeline', freq: 'Token Synced' }
          ]
        }
      ]
    },
    eeprom: {
      sectionTag: '// CAREER EEPROM LOG — VERIFIED OPERATIONAL CHRONICLE',
      integrityNotice: 'NON-VOLATILE MEMORY SECTOR // INTEGRITY CHECK: 100% PASS',
      sectors: [
        {
          id: 'invillia',
          period: '2022 — PRESENT [ACTIVE]',
          company: 'INVILLIA / CASAS BAHIA / BANQI',
          role: 'Senior Mobile & Fullstack Engineer',
          description:
            'High-throughput fintech engineering, native bridge tuning, Hermes V8 optimization, CI/CD pipeline automation, and multi-tenant payment systems.',
          clock: 'CLK: 1.2s BOOT // 0.08% CRASH'
        },
        {
          id: 'wiid',
          period: '2021 — 2022',
          company: 'WIID SOFTWARE LABS',
          role: 'Fullstack Software Engineer',
          description:
            'High-velocity web SaaS engineering, microservices in Node.js, reactive dashboard UIs in React, and relational database schema modeling.',
          clock: 'CLK: 99.9% UPTIME'
        },
        {
          id: 'freelance',
          period: '2020 — 2021',
          company: 'FREELANCE & CONSULTING',
          role: 'Systems Architect & Developer',
          description:
            'Architectural performance audits, enterprise web applications, mobile product MVPs, and third-party API integration pipelines.',
          clock: 'CLK: MULTI-CLIENT'
        },
        {
          id: 'academia',
          period: '2018 — 2020',
          company: 'ACADEMIA & SYSTEMS LABS',
          role: 'BS in Computer Science / Systems',
          description:
            'In-depth study of distributed systems, computational complexity, hardware architectures, operating system design, and algorithmic optimization.',
          clock: 'CLK: CS DEGREE'
        }
      ]
    },
    commDock: {
      portConnected: 'CONTROLLER PORT 1: CONNECTED // XBOX LIVE COMM CHANNEL OPEN',
      heading: 'READY TO BUILD HIGH-THROUGHPUT ARCHITECTURES?',
      description:
        'Open to high-impact Senior Mobile & Fullstack Engineering roles, technical architecture consulting, and resilient fintech systems.',
      btnCopyEmail: '(A) COPY: joaoviniciusgs@gmail.com',
      emailCopiedNotice: 'EMAIL COPIED TO SYSTEM CLIPBOARD!',
      btnGithub: '(X) GITHUB // JVGS1111',
      btnLinkedin: '(Y) LINKEDIN PROFILE',
      btnDownloadCv: '⏏ DOWNLOAD CV ARCHIVE',
      controllerBar: {
        aSelect: '(A) BOOT / SELECT',
        bBack: '(B) CLOSE / RETURN',
        xInspect: '(X) INSPECT CHASSIS',
        yLive: '(Y) LIVE COMM CHANNEL'
      },
      footerLegend:
        'MICROSOFT XBOX ORIGINAL // SYSTEM CONCEPT PROPOSAL 09\nDESIGNED IN TRANSLUCENT GREEN CRYSTAL & BIO-MECHANICAL Y2K DASHBOARD HUD\nFRAME BUFFER: 1440x1850 // 60 FPS NOMINAL // DOLBY 5.1 // MEMORY: 64,000 BLOCKS'
    }
  },
  pt: {
    meta: {
      title: 'Xbox Original // Verde Cristal Dashboard Bio-Mecânico',
      biosVersion: 'TITAN BIOS VERDE CRISTAL v1.00.5960',
      xboxLiveStatus: 'ONLINE: XBOX LIVE',
      gamertag: 'GAMERTAG: JVGS1111',
      memoryBlocksLabel: 'MEMÓRIA DO SISTEMA',
      memoryBlocksValue: '55.000 / 64.000 BLOCOS',
      audioSpec: 'DOLBY DIGITAL 5.1',
      tempSpec: 'TEMP: 38°C [ESTÁVEL]',
      fpsSpec: 'NTSC 60 FPS',
      bootDiskLabel: '⏏ DISCO MULTIVERSO // W09'
    },
    blades: {
      chassis: 'CHASSI 3D',
      memory: 'BLOCOS DE MEMÓRIA',
      discBay: 'DRIVE ÓPTICO',
      silicon: 'KERNEL SILÍCIO',
      eeprom: 'EEPROM ROM',
      commDock: 'DOCA COMMS'
    },
    hero: {
      badge: '[ ● ARQUITETO CLASSE-S // CHASSI TITAN VERDE CRISTAL ]',
      name: 'JOÃO VINÍCIUS',
      role: 'CHIEF CODE ARCHITECT // FULLSTACK & MOBILE EXPERT',
      summary:
        'Engenharia de fintechs mobile resilientes, infraestruturas cloud distribuídas e interfaces interativas de vanguarda com precisão bio-mecânica, baixa latência e estabilidade absoluta de sistema.',
      core01Title: 'NÚCLEO 01 // KERNEL RUNTIME',
      core01Desc:
        'React Native 0.74, TypeScript 5, Go, Node.js · Otimização da bridge nativa, bytecode Hermes e estado multi-thread.',
      core02Title: 'NÚCLEO 02 // GRÁFICOS & FÍSICA',
      core02Desc:
        'Three.js, WebGL 2.0, Shaders GLSL, Canvas · Shaders de paralaxe com depth-map, refração física PBR, loops de render 60-120 FPS.',
      core03Title: 'NÚCLEO 03 // INFRA CLOUD',
      core03Desc:
        'AWS (Lambda, ECS, S3), Docker, Redis, PostgreSQL · Microsserviços serverless de alto throughput, cache distribuído, 99.99% uptime.',
      btnExecute: '(A) CARREGAR TÍTULOS',
      btnInspect: '(X) MÉTRICAS & DOSSIÊ',
      btnComm: '(Y) CANAL DE COMUNICAÇÃO',
      chassisHudTitle: 'TELEMETRIA DE HARDWARE SUB-SUPERFÍCIE',
      chassisHudSpecs: {
        bus: 'BARRAMENTO: 6.4 GB/s // LATÊNCIA: 1.18ms',
        fan: 'VELOCIDADE DA VENTOINHA: 2.400 RPM [SILENCIOSA]',
        casing: 'CHASSI: POLICARBONATO TRANSLÚCIDO',
        cooling: 'HEATPIPES DE COBRE: DISSIPAÇÃO 4-VIAS'
      },
      chassisControls: {
        rotate: 'ÓRBITA 360°',
        xray: 'RAIO-X CHASSI',
        turbo: 'VENTOINHA TURBO',
        pulse: 'PULSO JEWEL'
      }
    },
    memory: {
      sectionTag: '// TELEMETRIA DE SISTEMA — 5 BLOCOS DE MEMÓRIA DE ALTO THROUGHPUT',
      auditNotice: 'FONTE AUDITADA: TELEMETRIA EM PRODUÇÃO & MONITORAMENTO DATADOG',
      totalBlocks: 'CAPACIDADE: 64.000 BLOCOS',
      usedBlocks: 'ALOCADOS: 55.000 BLOCOS',
      freeBlocks: 'LIVRES: 9.000 BLOCOS',
      blocks: [
        {
          id: 'crash-reduction',
          code: 'BLOCO 01 // SETOR_FINTECH',
          metric: '-98%',
          label: 'CRASHES FATAIS',
          detail: '14% → 0.08% taxa de crash em base de milhões de usuários',
          source: 'Fonte: banQi Fintech Engine',
          fillPct: 98
        },
        {
          id: 'ram-optimization',
          code: 'BLOCO 02 // SETOR_MEMORIA',
          metric: '-55%',
          label: 'CONSUMO DE RAM',
          detail: '480MB → 215MB eliminação de leaks e otimização de garbage collector',
          source: 'Fonte: Reanimated & Bridge Nativa',
          fillPct: 85
        },
        {
          id: 'boot-velocity',
          code: 'BLOCO 03 // SETOR_BYTECODE',
          metric: '-75%',
          label: 'VELOCIDADE DE BOOT',
          detail: '4.8s → 1.2s cold start via bytecode Hermes pré-compilado',
          source: 'Fonte: Hermes Bytecode Engine',
          fillPct: 92
        },
        {
          id: 'cloud-savings',
          code: 'BLOCO 04 // SETOR_NUVEM_AWS',
          metric: '+$10K',
          label: 'ECONOMIA MENSAL',
          detail: 'Redução de custos de nuvem via cache Redis e ajuste de Lambda',
          source: 'Fonte: AWS Lambda & Caching',
          fillPct: 80
        },
        {
          id: 'test-coverage',
          code: 'BLOCO 05 // SETOR_QUALIDADE',
          metric: '40%',
          label: 'COBERTURA TESTES',
          detail: 'Construída a partir de 0% de base com Jest, Vitest e Detox E2E',
          source: 'Fonte: Jest, Vitest & Detox E2E',
          fillPct: 88
        }
      ]
    },
    discBay: {
      sectionTag: '// ARQUIVO EM DISCO RÍGIDO & BAIA DE DRIVE ÓPTICO',
      statusNotice: 'STATUS: 3 TÍTULOS MONTADOS NA RAM ATIVA // BANDEJA PRONTA',
      btnBoot: '(A) CARREGAR TÍTULO // VER DOSSIÊ',
      btnCloseModal: '(B) FECHAR DOSSIÊ',
      dossierLabel: 'DOSSIÊ DE ARQUITETURA TÉCNICA',
      challengesLabel: 'DESAFIO DE ENGENHARIA',
      solutionLabel: 'SOLUÇÃO ARQUITETURAL',
      metricsLabel: 'MÉTRICAS DE IMPACTO EM PRODUÇÃO',
      stackLabel: 'STACK DE HARDWARE & SOFTWARE',
      games: [
        {
          id: 'banqi',
          title: 'BANQI MOBILE FINTECH',
          category: 'ARQUITETURA FINANCEIRA // RUNTIME DE ALTO THROUGHPUT',
          blocks: '24.500 BLOCOS',
          saveState: 'ESTADO: ATIVO',
          tagline: 'Banco digital de alta escala com milhões de usuários ativos.',
          synopsis:
            'Banco digital mobile para o Grupo Casas Bahia com milhões de usuários diários. Otimizações de bridge nativa, biometria e pipelines de PIX e depósitos instantâneos.',
          impact: 'Impacto: -98% crashes fatais, boot reduzido para 1.2s, 99.98% de disponibilidade.',
          stack: ['React Native', 'TypeScript', 'Redux Toolkit', 'AWS Cloud', 'WebSockets', 'Hermes Engine'],
          fullDossier: {
            challenge:
              'Aplicativo mobile massivo com taxa de crash de pico de 14%, vazamentos de memória acumulados ao longo de sessões longas e inicialização fria lenta de 4.8s em aparelhos Android de entrada.',
            architecture:
              'Refatoração das máquinas de estado centrais com Redux Toolkit e stores leves em Zustand; substituição de gargalos de serialização na bridge por bindings TurboModule; otimização da compilação de bytecode Hermes; implementação de telemetria automatizada Sentry & Datadog.',
            impactMetrics: [
              'Taxa de crashes despencou de 14% para 0.08% em menos de 90 dias após o lançamento',
              'Tempo de boot a frio reduzido em 75% (de 4.8s para 1.2s em aparelhos Android intermediários)',
              'Consumo de memória RAM reduzido em 55% (de 480MB para 215MB) nos fluxos transacionais',
              'Sustentação de mais de 5 milhões de eventos transacionais simultâneos durante a Black Friday'
            ],
            technologies: ['React Native 0.74', 'TypeScript 5', 'Redux', 'Hermes Bytecode', 'AWS Lambda', 'Datadog']
          }
        },
        {
          id: 'guepsi',
          title: 'GUEPSI CLINICAL SAAS ENGINE',
          category: 'PLATAFORMA FULLSTACK // AUTOMAÇÃO CLÍNICA',
          blocks: '18.200 BLOCOS',
          saveState: 'ESTADO: ATIVO',
          tagline: 'Ecossistema SaaS para automação de fluxos clínicos e telemetria médica.',
          synopsis:
            'Plataforma SaaS fullstack para profissionais de saúde: agendamento automatizado de consultas, criptografia ponta a ponta padrão HIPAA e dashboards clínicos em tempo real.',
          impact: 'Impacto: redução de 60% no tempo administrativo, conformidade total de dados e sincronia em tempo real.',
          stack: ['React 19', 'Next.js 15', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
          fullDossier: {
            challenge:
              'Sistema clínico multi-inquilino complexo com colisões de concorrência em agendamentos, atrito em fluxos legados de papel e requisitos estritos de conformidade HIPAA e LGPD.',
            architecture:
              'Arquitetura de microsserviços fullstack em Next.js e Node.js com segurança a nível de linha (RLS) no PostgreSQL; criação de algoritmos de concorrência otimista para bloqueio de agenda; pipelines WebSockets para notificações instantâneas.',
            impactMetrics: [
              '60% de redução nas horas administrativas de operação das clínicas',
              '100% de aprovação em auditorias de conformidade HIPAA e LGPD com zero vulnerabilidades',
              'Latência p99 abaixo de 80ms para sincronização de calendário em tempo real',
              'Isolamento multi-inquilino em banco de dados suportando centenas de consultórios médicos'
            ],
            technologies: ['Next.js 15', 'React 19', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker', 'WebSockets']
          }
        },
        {
          id: 'ai-workflows',
          title: 'AUTONOMOUS AI DEV WORKFLOWS',
          category: 'ORQUESTRAÇÃO DE IA // ACELERAÇÃO DE DESENVOLVIMENTO',
          blocks: '12.300 BLOCOS',
          saveState: 'ESTADO: CERTIFICADO COPILOT',
          tagline: 'Orquestração multi-agente e geração sintética de baterias de testes.',
          synopsis:
            'Fluxos autônomos de agentes para desenvolvedores utilizando orquestração de LLMs, geração sintética de suites de testes, padrões da certificação GitHub Copilot e verificação CI/CD automatizada.',
          impact: 'Impacto: aceleração 4x na entrega de boilerplate, 100% de testes verificados, certificação GitHub Copilot.',
          stack: ['Python', 'LangChain', 'FastAPI', 'Docker', 'GitHub Actions', 'Copilot CLI'],
          fullDossier: {
            challenge:
              'Gargalos na velocidade de desenvolvimento causados por escrita manual repetitiva de boilerplate, baixa cobertura de testes unitários em módulos legados e ciclos lentos de revisão de PRs.',
            architecture:
              'Construção de pipeline autônomo multi-agente utilizando Python e LangChain para analisar ASTs, gerar baterias completas de testes Jest/Vitest com fuzzing de borda e aplicar as melhores práticas arquiteturais do GitHub Copilot.',
            impactMetrics: [
              'Conquista da credencial oficial GitHub Copilot Certified',
              'Elevação da cobertura de testes de 0% para 40% em repositórios legados de forma automatizada',
              'Redução de 4x no tempo de criação de boilerplate para endpoints REST e GraphQL padrão',
              'Agente de revisão automatizada de PRs faz a triagem de 85% das inconsistências de estilo'
            ],
            technologies: ['Python 3.12', 'LangChain', 'FastAPI', 'GitHub Copilot API', 'Docker', 'Vitest']
          }
        }
      ]
    },
    silicon: {
      sectionTag: '// MATRIZ DE COMPONENTES SUB-SUPERFÍCIE — 32 NÚCLEOS DE HARDWARE',
      credentialNotice: 'CREDENCIAL OFICIAL: GITHUB COPILOT CERTIFIED // INTERLEAVING TOTAL DE HARDWARE',
      banks: [
        {
          id: 'bank-a',
          bankName: 'BANCO A // ARQUITETURA MOBILE',
          subtitle: 'Runtime nativo, bridge & estado',
          chips: [
            { name: 'React Native', role: 'Kernel Mobile Híbrido', freq: '60-120 FPS' },
            { name: 'Expo SDK', role: 'Framework de Dev Rápido', freq: 'Managed Core' },
            { name: 'Redux Toolkit', role: 'Store Determinística', freq: 'Zero Drift' },
            { name: 'Native Bridge', role: 'Bindings JNI & C++', freq: 'TurboModules' },
            { name: 'Android SDK', role: 'Camada JVM & Kotlin', freq: 'API Level 34' },
            { name: 'iOS Xcode', role: 'Objective-C & Swift', freq: 'Native Metal' },
            { name: 'Reanimated 3', role: 'Animações UI Thread', freq: 'Worklets 120Hz' },
            { name: 'Zustand', role: 'Barramento de Estado Atômico', freq: 'Micro-Memory' }
          ]
        },
        {
          id: 'bank-b',
          bankName: 'BANCO B // WEB & VANGUARDA',
          subtitle: 'Sistemas reativos & 3D WebGL',
          chips: [
            { name: 'React 19', role: 'Engine UI Concorrente', freq: 'Server Actions' },
            { name: 'Next.js 15', role: 'SSR Híbrido & App Router', freq: 'Edge Runtime' },
            { name: 'TypeScript 5', role: 'Compilador Type-Safe', freq: 'Strict Soundness' },
            { name: 'Three.js / WebGL', role: 'Pipeline Gráfico 3D', freq: 'Shaders PBR' },
            { name: 'Tailwind CSS', role: 'Matriz de Estilos Utilitários', freq: 'Compilador JIT' },
            { name: 'Framer Motion', role: 'Física de Movimento Spring', freq: 'Accel Hardware' },
            { name: 'Vite', role: 'Bundler de Nova Geração', freq: 'ESM HMR' },
            { name: 'HTML5 Canvas', role: 'Manipulação Direta de Pixels', freq: 'Raw Buffer' }
          ]
        },
        {
          id: 'bank-c',
          bankName: 'BANCO C // BACKEND DISTRIBUÍDO',
          subtitle: 'Microsserviços & nuvem',
          chips: [
            { name: 'Node.js', role: 'Engine V8 Assíncrona', freq: 'Event Loop' },
            { name: 'Express', role: 'Despachante de APIs REST', freq: 'Baixa Latência' },
            { name: 'Go (Golang)', role: 'Núcleo de Sistema Concorrente', freq: 'Goroutines' },
            { name: 'PostgreSQL', role: 'Armazenamento Relacional ACID', freq: 'Indexação WAL' },
            { name: 'MongoDB', role: 'Barramento de Documentos', freq: 'Shards em Cluster' },
            { name: 'Redis Cache', role: 'Grade de Dados em Memória', freq: 'Sub-milissegundo' },
            { name: 'Docker', role: 'Virtualização em Contêineres', freq: 'Imagens OCI' },
            { name: 'AWS Cloud', role: 'Infraestrutura Serverless', freq: 'Global Edge' }
          ]
        },
        {
          id: 'bank-d',
          bankName: 'BANCO D // AGENTES DE IA & PIPELINES',
          subtitle: 'Certificação Copilot & automação',
          chips: [
            { name: 'GitHub Copilot 🎖', role: 'Co-Processador Neural', certified: true, freq: 'Certificação Oficial' },
            { name: 'LangChain', role: 'Orquestração de LLMs', freq: 'Cadeias RAG' },
            { name: 'Python', role: 'Engine de Dados e Scripts', freq: 'Stack Científico' },
            { name: 'Jest / Vitest', role: 'Runners de Testes Sintéticos', freq: 'Zero Regressões' },
            { name: 'CI/CD Actions', role: 'Matriz de Builds Automatizados', freq: 'Deploy Contínuo' },
            { name: 'Git / GitHub', role: 'Livro-Razão Distribuído VCS', freq: 'Trunk Flow' },
            { name: 'Linux / Bash', role: 'Shell do Kernel POSIX', freq: 'Nível Root' },
            { name: 'Figma API', role: 'Pipeline Design-para-Código', freq: 'Tokens Sincronizados' }
          ]
        }
      ]
    },
    eeprom: {
      sectionTag: '// REGISTRO EEPROM DE CARREIRA — CRÔNICA OPERACIONAL AUDITADA',
      integrityNotice: 'SETOR DE MEMÓRIA NÃO-VOLÁTIL // CHECK DE INTEGRIDADE: 100% OK',
      sectors: [
        {
          id: 'invillia',
          period: '2022 — PRESENTE [ATIVO]',
          company: 'INVILLIA / CASAS BAHIA / BANQI',
          role: 'Engenheiro Mobile & Fullstack Sênior',
          description:
            'Engenharia de fintechs com alto throughput, otimização da bridge nativa, tuning Hermes V8, automação de CI/CD e sistemas de pagamento multi-tenant.',
          clock: 'CLK: 1.2s BOOT // 0.08% CRASH'
        },
        {
          id: 'wiid',
          period: '2021 — 2022',
          company: 'WIID SOFTWARE LABS',
          role: 'Engenheiro de Software Fullstack',
          description:
            'Desenvolvimento de SaaS web de alta velocidade, microsserviços em Node.js, interfaces de dashboards reativos em React e modelagem relacional de banco de dados.',
          clock: 'CLK: 99.9% UPTIME'
        },
        {
          id: 'freelance',
          period: '2020 — 2021',
          company: 'FREELANCE & CONSULTING',
          role: 'Arquiteto de Sistemas & Desenvolvedor',
          description:
            'Auditorias de performance arquitetural, aplicações web corporativas, MVPs de produtos mobile e pipelines de integração com APIs de terceiros.',
          clock: 'CLK: MULTI-CLIENTES'
        },
        {
          id: 'academia',
          period: '2018 — 2020',
          company: 'ACADEMIA & LABORATÓRIOS',
          role: 'Bacharel em Ciência da Computação / Sistemas',
          description:
            'Estudo aprofundado de sistemas distribuídos, complexidade computacional, arquitetura de computadores, design de sistemas operacionais e otimização algorítmica.',
          clock: 'CLK: DIPLOMA CS'
        }
      ]
    },
    commDock: {
      portConnected: 'PORTA DE CONTROLE 1: CONECTADA // CANAL XBOX LIVE ABERTO',
      heading: 'PRONTO PARA CONSTRUIR ARQUITETURAS DE ALTO THROUGHPUT?',
      description:
        'Aberto a posições de impacto como Engenheiro Mobile & Fullstack Sênior, consultoria em arquitetura de software e sistemas financeiros resilientes.',
      btnCopyEmail: '(A) COPIAR: joaoviniciusgs@gmail.com',
      emailCopiedNotice: 'E-MAIL COPIADO PARA A ÁREA DE TRANSFERÊNCIA!',
      btnGithub: '(X) GITHUB // JVGS1111',
      btnLinkedin: '(Y) PERFIL NO LINKEDIN',
      btnDownloadCv: '⏏ BAIXAR CURRÍCULO',
      controllerBar: {
        aSelect: '(A) INICIAR / SELECIONAR',
        bBack: '(B) FECHAR / RETORNAR',
        xInspect: '(X) INSPECIONAR CHASSI',
        yLive: '(Y) CANAL DE TRANSMISSÃO'
      },
      footerLegend:
        'MICROSOFT XBOX ORIGINAL // PROPOSTA CONCEITUAL DE SISTEMA 09\nPROJETADO EM VERDE CRISTAL TRANSLÚCIDO & HUD DASHBOARD BIO-MECÂNICO Y2K\nFRAME BUFFER: 1440x1850 // 60 FPS NOMINAL // DOLBY 5.1 // MEMÓRIA: 64.000 BLOCOS'
    }
  }
};

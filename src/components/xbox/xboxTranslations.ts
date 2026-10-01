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
      name: 'JOÃO VINÍCIUS GUERBER DE SOUZA',
      role: 'CHIEF CODE ARCHITECT // SENIOR SOFTWARE ENGINEER (FRONT-END & MOBILE SPECIALIST)',
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
          detail: '120,000 → 2,000 weekly crashes (-98%) across banQi fintech engine',
          source: 'Src: banQi Fintech Engine',
          fillPct: 98
        },
        {
          id: 'ram-optimization',
          code: 'BLOCK 02 // SECTOR_MEMORY',
          metric: '-55%',
          label: 'RAM FOOTPRINT',
          detail: '900MB → 400MB memory footprint (-55%) & leak eradication',
          source: 'Src: Reanimated & Native Bridge',
          fillPct: 85
        },
        {
          id: 'boot-velocity',
          code: 'BLOCK 03 // SECTOR_BYTECODE',
          metric: '-75%',
          label: 'BOOT VELOCITY',
          detail: '60s → 15s (-75%) splash-to-home cold start acceleration via Hermes',
          source: 'Src: Hermes Bytecode Engine',
          fillPct: 92
        },
        {
          id: 'cloud-savings',
          code: 'BLOCK 04 // SECTOR_CLOUD_AWS',
          metric: '+$10K',
          label: 'ANNUAL SAVED',
          detail: '+$10,000/yr AWS infrastructure cost savings via network & lambda refactoring',
          source: 'Src: AWS Cloud Optimization',
          fillPct: 80
        },
        {
          id: 'test-coverage',
          code: 'BLOCK 05 // SECTOR_QUALITY',
          metric: '0% → 40%',
          label: 'TEST COVERAGE',
          detail: '0% → 40% automated test coverage with 100% CI/CD build reliability',
          source: 'Src: Jest, Vitest & CI/CD Pipelines',
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
          tagline: 'Hyperscale digital banking with millions of active users (Grupo Casas Bahia).',
          synopsis:
            "Systemic re-engineering of one of Brazil's largest retail banking apps. Native bridge optimizations (Kotlin/Swift), RASP security (AppDome), and automated Fastlane CI/CD delivery pipelines.",
          impact: 'Impact: -98% weekly crashes (120k → 2k), RAM cut by -55% (900MB → 400MB), splash-to-home down to 15s (-75%).',
          stack: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Fastlane', 'AppDome (RASP)', 'Azure DevOps', 'Jest'],
          fullDossier: {
            challenge:
              'Massive mobile application suffering from 120,000 weekly crashes, memory leaks peaking at 900MB crashing entry-level Android devices, and sluggish 60-second splash-to-home boot times.',
            architecture:
              'Technical leadership in refactoring legacy flows, re-engineering native bridge modules in Kotlin and Swift, introducing mobile application security (RASP via AppDome), and orchestrating automated CI/CD pipelines with Fastlane and Azure DevOps.',
            impactMetrics: [
              'Weekly crashes plunged 98% (from 120,000 to 2,000)',
              'RAM footprint slashed by 55% (from 900MB down to 400MB)',
              'Splash-to-home load time reduced by 75% (from 60s down to 15s)',
              '$10,000 annual cloud savings in AWS infrastructure optimization'
            ],
            technologies: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Fastlane', 'AppDome (RASP)', 'Azure DevOps', 'Jest', 'AWS']
          }
        },
        {
          id: 'design-system',
          title: 'CROSS-PLATFORM DESIGN SYSTEM & NATIVE MODULES',
          category: 'SYSTEM DESIGN // MULTI-PLATFORM TOKENS & BRIDGES',
          blocks: '18,200 BLOCKS',
          saveState: 'SAVE STATE: ACTIVE',
          tagline: 'Unified multi-platform component ecosystem and native bridge architecture.',
          synopsis:
            'Enterprise Design System engineered for banQi and WiiD using Storybook, distributed via private GitHub Packages npm registry, synchronized design tokens, and Kotlin/Swift native modules.',
          impact: 'Impact: 2x faster feature delivery velocity, 100% unified token consistency across Mobile and Web, zero cross-platform drift.',
          stack: ['React Native', 'React', 'Next.js', 'Expo', 'TypeScript', 'Storybook', 'Kotlin', 'Swift', 'Jest', 'Vitest'],
          fullDossier: {
            challenge:
              'Discrepant interfaces across Android, iOS, and Web platforms, duplicating component implementations, visual bugs on varied screen pixel densities, and sluggish design-to-code turnaround.',
            architecture:
              'Architected a highly modular, decoupled component library typed strictly in TypeScript with Storybook documentation; integrated design tokens synchronized from Figma via CI/CD, published via GitHub Packages npm registry; built low-level Kotlin and Swift native bridges for proprietary OS capabilities.',
            impactMetrics: [
              'Standardized hundreds of battle-tested reusable components across Mobile and Web',
              '2x acceleration in UI prototyping, engineering velocity, and production feature delivery',
              'Deterministic test coverage and visual regression validation with Jest, Vitest and Storybook',
              'Zero UI drift between Android and iOS production releases'
            ],
            technologies: ['React Native', 'React', 'Next.js', 'Expo', 'TypeScript', 'Storybook', 'Kotlin', 'Swift', 'GitHub Packages', 'Jest', 'Vitest']
          }
        },
        {
          id: 'ai-workflows',
          title: 'AUTONOMOUS AI DEV WORKFLOWS',
          category: 'AI ORCHESTRATION // DEVELOPER ACCELERATION',
          blocks: '12,300 BLOCKS',
          saveState: 'SAVE STATE: COPILOT CERTIFIED',
          tagline: 'AI tools, automated PR reviews, test suite generation, and technical blueprints.',
          synopsis:
            'Engineering custom developer tools and autonomous AI agents to accelerate the software development lifecycle, automate code reviews, generate synthetic test suites, and author technical specifications.',
          impact: 'Impact: 4x acceleration in boilerplate & documentation, automated PR review triage, 0% → 40% test coverage boost, official GitHub Copilot Certified.',
          stack: ['GitHub Copilot', 'Generative AI', 'Custom Agents', 'CI/CD Automation', 'TypeScript', 'Prompt Engineering', 'Jest', 'Vitest'],
          fullDossier: {
            challenge:
              'Heavy time overhead spent on manual repetitive PR reviews, slow drafting of business documentation (KRs, User Stories, and Blueprints), and critical coverage gaps in legacy unit test suites.',
            architecture:
              'Crafted specialized technical prompt pipelines and automated AI agents integrated with GitHub Actions and Azure DevOps to perform preliminary code reviews, identify potential regression hazards, generate Jest/Vitest unit test scaffolding, and synthesize technical documentation.',
            impactMetrics: [
              'Substantial reduction in technical and business documentation overhead (KRs, Stories, Blueprints)',
              'Accelerated pull request approval cycles across cross-functional engineering teams',
              'Elevated automated unit test coverage from 0% to 40% across legacy repositories',
              'Official GitHub Copilot Certified validation (2025–2028)'
            ],
            technologies: ['GitHub Copilot', 'Generative AI', 'Custom Agents', 'CI/CD Automation', 'TypeScript', 'Prompt Engineering', 'Jest', 'Vitest']
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
          period: 'SEP 2024 — PRESENT [ACTIVE]',
          company: 'INVILLIA (AN AI/R COMPANY)',
          role: 'Senior & Mid-Level Software Engineer (Front-end & Mobile)',
          description:
            'Senior (Sep 2025 – Present) & Mid-Level (Sep 2024 – Sep 2025). Technical reference for banQi (Grupo Casas Bahia): -98% crashes, -55% RAM, -75% splash boot, 0%→40% test coverage, and AI dev workflows.',
          clock: 'CLK: 15s BOOT // -98% CRASH'
        },
        {
          id: 'wiid',
          period: 'DEC 2021 — SEP 2024',
          company: 'WIID – WORK IN IDEAS',
          role: 'Mid-Level & Junior Mobile & Front-end Developer',
          description:
            'Mid-Level (Jan 2024 – Sep 2024) & Junior (Dec 2021 – Jan 2024). Cross-platform web and mobile products with React, Next.js, and React Native (Expo). End-to-end feature ownership, Jest/Vitest suites, and mentoring.',
          clock: 'CLK: CROSS-PLATFORM'
        },
        {
          id: 'freelance',
          period: 'DEC 2020 — DEC 2021',
          company: 'FREELANCE – AUTÔNOMO',
          role: 'Web Developer',
          description:
            'Fullstack web engineering and maintenance using PHP, JavaScript, CSS, HTML, and WordPress. High-conversion responsive landing pages and direct client delivery management.',
          clock: 'CLK: WEB DEV STACK'
        },
        {
          id: 'education-certs',
          period: '2019 — 2028',
          company: 'UNINTER & OFFICIAL CERTS',
          role: 'ADS Degree // AWS & GitHub Copilot Certified',
          description:
            'Higher Education in Systems Analysis and Development (Uninter 2019–2021). Official GitHub Copilot Certified (2025–2028) & AWS Certified Solutions Architect Associate (In progress, forecast Q4 2026).',
          clock: 'CLK: COPILOT 🎖 + AWS'
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
      name: 'JOÃO VINÍCIUS GUERBER DE SOUZA',
      role: 'CHIEF CODE ARCHITECT // SENIOR SOFTWARE ENGINEER (FRONT-END & MOBILE SPECIALIST)',
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
          label: 'CRASHES SEMANAIS',
          detail: '120.000 → 2.000 crashes semanais (-98%) no app banQi',
          source: 'Fonte: banQi Fintech Engine',
          fillPct: 98
        },
        {
          id: 'ram-optimization',
          code: 'BLOCO 02 // SETOR_MEMORIA',
          metric: '-55%',
          label: 'CONSUMO DE RAM',
          detail: '900MB → 400MB de footprint de memória (-55%) e erradicação de leaks',
          source: 'Fonte: Reanimated & Bridge Nativa',
          fillPct: 85
        },
        {
          id: 'boot-velocity',
          code: 'BLOCO 03 // SETOR_BYTECODE',
          metric: '-75%',
          label: 'VELOCIDADE DE BOOT',
          detail: '60s → 15s (-75%) na inicialização splash-to-home via Hermes',
          source: 'Fonte: Hermes Bytecode Engine',
          fillPct: 92
        },
        {
          id: 'cloud-savings',
          code: 'BLOCO 04 // SETOR_NUVEM_AWS',
          metric: '+$10K',
          label: 'ECONOMIA ANUAL',
          detail: '+$10.000/ano em economia direta na infraestrutura AWS',
          source: 'Fonte: Otimização AWS Cloud',
          fillPct: 80
        },
        {
          id: 'test-coverage',
          code: 'BLOCO 05 // SETOR_QUALIDADE',
          metric: '0% → 40%',
          label: 'COBERTURA TESTES',
          detail: '0% → 40% de cobertura com 100% de confiabilidade em builds CI/CD',
          source: 'Fonte: Jest, Vitest & Pipelines CI/CD',
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
          tagline: 'Modernização e estabilização em hiperescala para milhões de usuários (Grupo Casas Bahia).',
          synopsis:
            'Reengenharia sistêmica de um dos maiores apps bancários do varejo brasileiro. Otimizações de bridge nativa (Kotlin/Swift), segurança RASP (AppDome) e esteiras automatizadas de CI/CD com Fastlane.',
          impact: 'Impacto: -98% crashes semanais (120k → 2k), RAM reduzida em -55% (900MB → 400MB), splash-to-home de 60s para 15s (-75%).',
          stack: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Fastlane', 'AppDome (RASP)', 'Azure DevOps', 'Jest'],
          fullDossier: {
            challenge:
              'Aplicativo mobile massivo com volume de 120.000 crashes semanais, consumo proibitivo de 900MB de RAM derrubando aparelhos de entrada e lentidão de até 60 segundos na inicialização splash-to-home.',
            architecture:
              'Liderança técnica na refatoração de fluxos legados, reengenharia de módulos nativos em Kotlin (Android) e Swift (iOS), introdução de segurança móvel avançada (RASP via AppDome) e esteiras automatizadas de CI/CD com Fastlane e Azure DevOps.',
            impactMetrics: [
              'Redução de 98% nos crashes semanais (120k → 2k)',
              'Queda de 55% no consumo de RAM (de 900MB para 400MB)',
              'Tempo de splash-to-home reduzido de 60s para 15s (-75%)',
              'Economia de $10.000 anuais em infraestrutura de nuvem AWS'
            ],
            technologies: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Fastlane', 'AppDome (RASP)', 'Azure DevOps', 'Jest', 'AWS']
          }
        },
        {
          id: 'design-system',
          title: 'CROSS-PLATFORM DESIGN SYSTEM & NATIVE MODULES',
          category: 'SYSTEM DESIGN // DESIGN TOKENS MULTIPLATAFORMA & BRIDGES',
          blocks: '18.200 BLOCOS',
          saveState: 'ESTADO: ATIVO',
          tagline: 'Ecossistema unificado de componentes e arquitetura de módulos nativos multiplataforma.',
          synopsis:
            'Design System corporativo desenvolvido para banQi e WiiD com Storybook, distribuído via registro npm privado no GitHub Packages, tokens de design sincronizados e bridges nativas em Kotlin e Swift.',
          impact: 'Impacto: velocidade de entrega 2x maior, padronização visual rigorosa entre Mobile e Web, testabilidade total.',
          stack: ['React Native', 'React', 'Next.js', 'Expo', 'TypeScript', 'Storybook', 'Kotlin', 'Swift', 'Jest', 'Vitest'],
          fullDossier: {
            challenge:
              'Inconsistências visuais entre Android, iOS e Web, duplicação contínua de código de componentes, quebras de layout em diferentes densidades de tela e lentidão no ciclo de design-to-code.',
            architecture:
              'Desenvolvimento de biblioteca de componentes altamente desacoplada e tipada com TypeScript, documentada no Storybook e distribuída via GitHub Packages; sincronização automatizada de tokens de design e criação de bridges nativas proprietárias em Kotlin e Swift.',
            impactMetrics: [
              'Padronização de centenas de componentes reutilizáveis entre Mobile e Web',
              'Velocidade 2x maior na prototipação e entrega de novas features',
              'Garantia de estabilidade visual com suites de testes unitários Jest, Vitest e Storybook',
              'Eliminação completa de discrepâncias visuais entre Android e iOS'
            ],
            technologies: ['React Native', 'React', 'Next.js', 'Expo', 'TypeScript', 'Storybook', 'Kotlin', 'Swift', 'GitHub Packages', 'Jest', 'Vitest']
          }
        },
        {
          id: 'ai-workflows',
          title: 'AUTONOMOUS AI DEV WORKFLOWS',
          category: 'ORQUESTRAÇÃO DE IA // ACELERAÇÃO DE DESENVOLVIMENTO',
          blocks: '12.300 BLOCOS',
          saveState: 'ESTADO: CERTIFICADO COPILOT',
          tagline: 'Ferramentas de IA, automação de PR reviews, geração de testes e blueprints técnicos.',
          synopsis:
            'Desenvolvimento de ferramentas customizadas e agentes de IA para aceleração do ciclo de desenvolvimento de software, automação de revisões de código, geração de testes unitários e documentações técnicas.',
          impact: 'Impacto: aceleração substancial no ciclo de entrega, triagem de PRs com IA, elevação de 0% para 40% em cobertura de testes, certificação GitHub Copilot.',
          stack: ['GitHub Copilot', 'Generative AI', 'Custom Agents', 'CI/CD Automation', 'TypeScript', 'Prompt Engineering', 'Jest', 'Vitest'],
          fullDossier: {
            challenge:
              'Altos gargalos de tempo em revisões manuais de PRs repetitivos, elaboração demorada de documentação técnica e de negócios (KRs, User Stories e Blueprints) e lacunas em testes unitários legados.',
            architecture:
              'Criação de prompts técnicos e pipelines automatizados com IA integrados a GitHub Actions e Azure DevOps para realizar análise preliminar de código, identificar regressões e gerar suítes de testes Jest/Vitest e especificações técnicas.',
            impactMetrics: [
              'Redução substancial do overhead de documentação técnica e de negócio',
              'Aceleração expressiva na homologação de pull requests entre times multidisciplinares',
              'Elevação na cobertura de testes unitários de 0% para 40% com Jest e Vitest',
              'Validação oficial com credencial GitHub Copilot Certified (2025–2028)'
            ],
            technologies: ['GitHub Copilot', 'Generative AI', 'Custom Agents', 'CI/CD Automation', 'TypeScript', 'Prompt Engineering', 'Jest', 'Vitest']
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
          period: 'SET 2024 — PRESENTE [ATIVO]',
          company: 'INVILLIA (AN AI/R COMPANY)',
          role: 'Engenheiro de Software Sênior & Pleno (Front-end & Mobile)',
          description:
            'Sênior (Set 2025 – Presente) & Pleno (Set 2024 – Set 2025). Referência técnica para banQi (Grupo Casas Bahia): redução de 98% nos crashes, -55% de RAM, boot de 15s (-75%), 0%→40% em testes e automação com IA.',
          clock: 'CLK: 15s BOOT // -98% CRASH'
        },
        {
          id: 'wiid',
          period: 'DEZ 2021 — SET 2024',
          company: 'WIID – WORK IN IDEAS',
          role: 'Desenvolvedor Mobile & Front-end Pleno & Júnior',
          description:
            'Pleno (Jan 2024 – Set 2024) & Júnior (Dez 2021 – Jan 2024). Construção de produtos digitais multiplataforma com React, Next.js e React Native (Expo). Ownership de ponta a ponta, testes unitários com Jest e mentoria técnica.',
          clock: 'CLK: MULTIPLATAFORMA'
        },
        {
          id: 'freelance',
          period: 'DEZ 2020 — DEZ 2021',
          company: 'FREELANCE – AUTÔNOMO',
          role: 'Desenvolvedor Web',
          description:
            'Desenvolvimento e manutenção de aplicações web utilizando PHP, JavaScript, CSS, HTML e WordPress. Criação de landing pages responsivas de alta conversão e gestão direta de entregas com clientes.',
          clock: 'CLK: STACK WEB'
        },
        {
          id: 'education-certs',
          period: '2019 — 2028',
          company: 'UNINTER & CERTIFICAÇÕES OFICIAIS',
          role: 'Graduação Tecnológica ADS // Certificado AWS & GitHub Copilot',
          description:
            'Graduação Tecnológica em Análise e Desenvolvimento de Sistemas (Uninter 2019–2021). Credencial oficial GitHub Copilot Certified (2025–2028) e AWS Certified Solutions Architect Associate (Em andamento, previsão Q4 2026).',
          clock: 'CLK: COPILOT 🎖 + AWS'
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

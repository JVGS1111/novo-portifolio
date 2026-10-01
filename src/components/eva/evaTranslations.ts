export interface EvaEpisodeContent {
  header: {
    tacticalCommand: string;
    emergencyCode: string;
    internalBattery: string;
    umbilicalStatus: string;
    syncRate: string;
    toggleLang: string;
    eyecatchBtn: string;
    switchThemesBtn: string;
    rechargeBattery: string;
  };
  hero: {
    episodeNumber: string;
    japaneseTitle: string;
    englishTitle: string;
    pilotClassification: string;
    pilotName: string;
    pilotTitle: string;
    bioBrief: string;
    btnExamineDossier: string;
    btnMagiConsensus: string;
    btnDirectComms: string;
    syncTelemetryLabel: string;
    atFieldStatus: string;
    patternStatus: string;
  };
  metrics: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    items: {
      value: string;
      label: string;
      sublabel: string;
      desc: string;
      kanji: string;
    }[];
  };
  magi: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    triadLabel: string;
    melchiorName: string;
    melchiorPersona: string;
    balthasarName: string;
    balthasarPersona: string;
    casperName: string;
    casperPersona: string;
    statusDeliberating: string;
    statusAgree: string;
    unanimousResolution: string;
    selectQueryPrompt: string;
    queries: {
      id: string;
      title: string;
      melchiorVerdict: string;
      balthasarVerdict: string;
      casperVerdict: string;
    }[];
  };
  episodes: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    dossierBtn: string;
    modalCloseBtn: string;
    modalClearance: string;
    modalTabPrefix: string;
    list: {
      number: string;
      kanjiTitle: string;
      westernTitle: string;
      subtitle: string;
      role: string;
      company: string;
      threatTitle: string;
      threatDesc: string;
      threatPoints?: string[];
      countermeasureTitle: string;
      countermeasureDesc: string;
      countermeasurePoints?: string[];
      outcomeTitle: string;
      outcomeDesc: string;
      outcomePoints?: string[];
      stack: string[];
    }[];
  };
  career: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    timeline: {
      period: string;
      role: string;
      unit: string;
      status: string;
      missions: string[];
    }[];
  };
  synapticBank: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    certTitle: string;
    certIssuer: string;
    certStatus: string;
    awsTitle: string;
    awsIssuer: string;
    awsStatus: string;
    degreeTitle: string;
    degreeInstitution: string;
    degreeStatus: string;
    categories: {
      name: string;
      kanji: string;
      skills: string[];
    }[];
  };
  comms: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    channelStatus: string;
    directMailLabel: string;
    copySuccessToast: string;
    clickToCopy: string;
    btnLinkedin: string;
    btnGithub: string;
    btnDownloadCv: string;
    operationalDirective: string;
  };
}

export const evaTranslations: { en: EvaEpisodeContent; pt: EvaEpisodeContent } = {
  en: {
    header: {
      tacticalCommand: 'NERV // TACTICAL COMMAND POST // CENTRAL DOGMA TOKYO-3',
      emergencyCode: 'EMERGENCY: CODE RED // 非常事態',
      internalBattery: 'INTERNAL BATTERY',
      umbilicalStatus: 'UMBILICAL CABLE: DETACHED [DISCHARGING]',
      syncRate: 'SYNC HARMONICS: 99.42% (A10 NERVE SYNAPSED)',
      toggleLang: '🇧🇷 PORTUGUÊS',
      eyecatchBtn: 'EPISODE TITLE CARD // アイキャッチ',
      switchThemesBtn: 'PORTFOLIO REGISTRY',
      rechargeBattery: 'RESTORE UMBILICAL POWER'
    },
    hero: {
      episodeNumber: 'EPISODE:01 // 第壱話',
      japaneseTitle: '使徒、襲来',
      englishTitle: 'ANGEL ATTACK // HYPERSCALE SURVIVAL',
      pilotClassification: 'PILOT CLASSIFICATION: JVGS-01 // S-CLASS CODE ARCHITECT // 特務機関員',
      pilotName: 'JOÃO VINÍCIUS GUERBER DE SOUZA',
      pilotTitle: 'SENIOR SOFTWARE ENGINEER · FRONT-END & MOBILE SPECIALIST',
      bioBrief:
        'Senior Software Engineer with 6 years of experience specialized in modernizing high-impact, hyperscale mobile and web applications. Focus on clean architecture, native Kotlin/Swift modules, extreme stability, technical debt elimination, and intelligent AI automation.',
      btnExamineDossier: 'EXAMINE COMBAT RECORDS (CASES) ↓',
      btnMagiConsensus: 'INTERROGATE MAGI CONSENSUS ⚙',
      btnDirectComms: 'INITIATE DIRECT TRANSMISSION ✉',
      syncTelemetryLabel: 'A10 SYNAPTIC RESONANCE WAVEFORM',
      atFieldStatus: 'A.T. FIELD: EXPANDED [OCTAGONAL BARRIER ACTIVE]',
      patternStatus: 'ANALYSIS: PATTERN BLUE // ARCHITECTURAL MASTERY CONFIRMED'
    },
    metrics: {
      sectionTag: 'TACTICAL RESOLUTION // 決議事項',
      sectionTitle: '5 AUDITED TACTICAL METRICS',
      sectionSubtitle: 'Empirical telemetry recorded under catastrophic production loads at multi-million scale.',
      items: [
        {
          value: '-98%',
          label: 'CRASH MITIGATION',
          sublabel: 'From 120,000 to 2,000 weekly',
          desc: 'Deep architecture stabilization across banQi fintech (Casas Bahia Group), eradicating unhandled bridge exceptions and critical failure vectors.',
          kanji: '使徒迎撃率'
        },
        {
          value: '-55%',
          label: 'RAM OPTIMIZATION',
          sublabel: '900MB to 400MB memory footprint',
          desc: 'Systematic eradication of memory leaks, cyclic closures, unmounted navigation trees, and unreleased native bitmap listeners.',
          kanji: '記憶領域再生'
        },
        {
          value: '-75%',
          label: 'STARTUP VELOCITY',
          sublabel: 'Splash to Home: 60s → 15s',
          desc: 'Radical acceleration of app cold and hot boot via Hermes bytecode precompilation, bundle splitting, and deferred SDK initialization.',
          kanji: '初動加速'
        },
        {
          value: '+k',
          label: 'ANNUAL CLOUD SAVINGS',
          sublabel: ',000/yr in AWS Infrastructure',
          desc: 'Refactored legacy app-backend network communication, aggregated requests, and purged redundant egress data transfers.',
          kanji: '雲網防衛'
        },
        {
          value: '0% → 40%',
          label: 'TEST SHIELD',
          sublabel: '100% CI/CD Build Reliability',
          desc: 'Transformed zero-test codebase into a robust 40% automated unit and regression defense powered by Jest, Vitest, and CI/CD quality gates.',
          kanji: '防壁展開'
        }
      ]
    },
    magi: {
      sectionTag: 'TACTICAL DECISION CLUSTER // 三者合議制',
      sectionTitle: 'MAGI SUPERCOMPUTER DELIBERATION CHAMBER',
      sectionSubtitle:
        'The tripartite consensus system created by Dr. Naoko Akagi. Three distinct organic logic cores deliberate on mission-critical architecture.',
      triadLabel: 'UNANIMOUS MAGI VERDICT [3/3 AGREE]',
      melchiorName: 'MAGI-1 // MELCHIOR',
      melchiorPersona: 'DR. NAOKO AKAGI AS SCIENTIST',
      balthasarName: 'MAGI-2 // BALTHASAR',
      balthasarPersona: 'DR. NAOKO AKAGI AS MOTHER',
      casperName: 'MAGI-3 // CASPER',
      casperPersona: 'DR. NAOKO AKAGI AS WOMAN',
      statusDeliberating: 'DELIBERATING...',
      statusAgree: 'AGREE // 承認',
      unanimousResolution: 'UNANIMOUS CONSENSUS RATIFIED // 全会一致承認',
      selectQueryPrompt: 'SELECT ARCHITECTURAL INQUIRY FOR MAGI RESOLUTION:',
      queries: [
        {
          id: 'q1',
          title: '01 // MIGRATE BANQI FINTECH TO REACT NATIVE TURBOMODULES + FABRIC',
          melchiorVerdict:
            'SCIENTIST VERDICT: Pure C++ JSI direct calls eliminate serialized JSON bridge latency completely. Memory allocation drops by 32%. Execution speed satisfies theoretical peak.',
          balthasarVerdict:
            'MOTHER VERDICT: Protects user touch feedback from thread stutter. Seamless 120Hz gesture response safeguards millions of vulnerable banking clients.',
          casperVerdict:
            'WOMAN VERDICT: Drastically reduces engineering firefighting overhead, cutting device-specific bug tickets by 60% and unlocking rapid market experimentation.'
        },
        {
          id: 'q2',
          title: '02 // DEPLOY AUTONOMOUS AI AGENTS & GITHUB COPILOT IN CI/CD',
          melchiorVerdict:
            'SCIENTIST VERDICT: Semantic AST parsing and regression generation detects boundary conditions human engineers miss under sprint fatigue. Flawless syntax validation.',
          balthasarVerdict:
            'MOTHER VERDICT: Relieves human developers from repetitive boilerplate exhaustion, fostering psychological safety and reducing late-night outage stress.',
          casperVerdict:
            'WOMAN VERDICT: Accelerates release velocity by 3.4x without inflating payroll headcount. A pragmatic competitive advantage in hyperscale shipping.'
        },
        {
          id: 'q3',
          title: '03 // CONSTRUCT MULTI-OS DESIGN SYSTEM WITH FIGMA TOKENS AUTOMATION',
          melchiorVerdict:
            'SCIENTIST VERDICT: Single mathematical source of truth. Token JSON compiler guarantees 100% strict type parity across Swift, Kotlin, and React TypeScript AST.',
          balthasarVerdict:
            'MOTHER VERDICT: Eliminates visual friction and accessibility compliance gaps across high-contrast and screen-reader modes for all demographic cohorts.',
          casperVerdict:
            'WOMAN VERDICT: Removes costly designer-developer alignment meetings by 80%. Design changes reflect in production binaries within minutes.'
        },
        {
          id: 'q4',
          title: '04 // ARCHITECT AGGRESSIVE EDGE-CACHING & PURGE AWS INFRASTRUCTURE OVERFLOW',
          melchiorVerdict:
            'SCIENTIST VERDICT: Stale-While-Revalidate TTL algorithms paired with local SQLite replicas absorb 92% of read spikes before hitting origin servers.',
          balthasarVerdict:
            'MOTHER VERDICT: App remains responsive during underground subway cellular dead-zones, preventing user panic during financial transfers.',
          casperVerdict:
            'WOMAN VERDICT: Instantaneous recovery of ,000+ annual cloud expenditure, redirecting capital directly into strategic feature innovation.'
        }
      ]
    },
    episodes: {
      sectionTag: 'CLASSIFIED COMBAT DOSSIERS // 機密作戦報告',
      sectionTitle: 'FOUR CRUCIAL ENGINEERING EPISODES',
      sectionSubtitle:
        'Archived combat records demonstrating catastrophic crisis containment and architectural mastery.',
      dossierBtn: 'OPEN CLASSIFIED DOSSIER // 極秘作戦詳細 ↗',
      modalCloseBtn: 'CLOSE DOSSIER [ESC] // 作戦書を閉じる',
      modalClearance: 'CLEARANCE: S-CLASS CODE ARCHITECT // TOP SECRET',
      modalTabPrefix: 'ACT',
      list: [
        {
          number: 'EPISODE:01 // 第壱話',
          kanjiTitle: '使徒、襲来',
          westernTitle: 'OPERATION BANQI: HYPERSCALE DEFENSE',
          subtitle: 'The 120k Weekly Crash Crisis & 900MB Memory Leak Catastrophe',
          role: 'Senior Software Engineer · Front-end & Mobile Specialist',
          company: 'Invillia / Casas Bahia Pay (antigo banQi)',
          threatTitle: 'THREAT ASSESSMENT (使徒の猛威):',
          threatDesc:
            'Massive scale retail banking app serving millions under critical load. Facing 120,000 crashes weekly (4.8% crash rate), prohibitive 900MB RAM consumption crashing entry-level devices, and sluggish 60-second splash-to-home load times.',
          threatPoints: [
            '120,000 crashes weekly across low-end and flagship Android/iOS devices (4.8% error rate)',
            'Memory leaks inflating RAM usage up to 900MB, triggering aggressive OS process kills',
            'Splash-to-home cold boot taking up to 60 seconds, leading to catastrophic app abandonment'
          ],
          countermeasureTitle: 'COUNTERMEASURE (防衛作戦):',
          countermeasureDesc:
            'Technical leadership in refactoring legacy bridge communication, re-architecting native modules in Kotlin (Android) and Swift (iOS), Hermes bytecode compilation, list virtualization, advanced profiling via Android Studio / Xcode Instruments, and mobile security (RASP via AppDome).',
          countermeasurePoints: [
            'Native bridge audit eradicating asynchronous race conditions and memory leaks',
            'Migration to Hermes engine bytecode pre-compilation and aggressive code-splitting',
            'Implementation of AppDome RASP mobile security and Fastlane CI/CD automation'
          ],
          outcomeTitle: 'AUDITED OUTCOME (作戦戦果):',
          outcomeDesc:
            'Weekly crashes plummeted by 98% (from 120k down to 2k). RAM consumption dropped by 55% to 400MB. Splash-to-home load time accelerated by 75% (from 60s down to 15s). Millions of active clients safeguarded.',
          outcomePoints: [
            'Weekly crash rate reduced by 98% (120,000 → 2,000 crashes/week)',
            'RAM consumption curtailed by 55% (900MB → 400MB)',
            'Startup latency slashed by 75% (60s → 15s)'
          ],
          stack: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Fastlane', 'AppDome (RASP)', 'Azure DevOps', 'Jest']
        },
        {
          number: 'EPISODE:02 // 第弐話',
          kanjiTitle: '見知らぬ、天井',
          westernTitle: 'OPERATION CLOUD TITAN: AWS COST & EGRESS OPTIMIZATION',
          subtitle: 'Annual Infrastructure Savings & Network Streamlining',
          role: 'Senior Software Engineer · Architecture & Performance',
          company: 'Invillia / Casas Bahia Pay (banQi)',
          threatTitle: 'THREAT ASSESSMENT (使徒の猛威):',
          threatDesc:
            'Runaway cloud infrastructure expenditures driven by uncoordinated client-side polling, redundant API roundtrips, uncompressed egress data payloads, and inefficient lambda invocation patterns.',
          threatPoints: [
            'Excessive AWS egress fees triggered by repetitive client polling',
            'Redundant GraphQL roundtrips overloading database connection pools',
            'Suboptimal instance provisioning and continuous idle resource consumption'
          ],
          countermeasureTitle: 'COUNTERMEASURE (防衛作戦):',
          countermeasureDesc:
            'Refactored client-backend communication topologies, engineered intelligent request debouncing and aggregation, fine-tuned cloud resource allocation, and integrated real-time APM telemetry with Dynatrace and Databricks.',
          countermeasurePoints: [
            'Engineered client-side request aggregation and intelligent debouncing pipelines',
            'Fine-tuned AWS instance provisioning, caching layers, and continuous delivery pipelines',
            'Implemented real-time APM telemetry with Dynatrace and Databricks for anomaly detection'
          ],
          outcomeTitle: 'AUDITED OUTCOME (作戦戦果):',
          outcomeDesc:
            'Achieved +,000/year direct annual savings in AWS cloud infrastructure while eliminating latency bottlenecks and enhancing API reliability.',
          outcomePoints: [
            '+,000/year direct reduction in AWS cloud infrastructure costs',
            'Drastic reduction in data egress volume and redundant network roundtrips',
            'Maximized API uptime and resilient offline client behavior'
          ],
          stack: ['AWS Cloud', 'GraphQL', 'Node.js', 'Docker', 'Redis', 'Databricks', 'Dynatrace', 'TypeScript']
        },
        {
          number: 'EPISODE:03 // 第参話',
          kanjiTitle: '鳴らない、電話',
          westernTitle: 'OPERATION SYNAPSE: AUTONOMOUS AI & TEST SHIELD',
          subtitle: 'Zero-Test Codebase Fortified to 40% CI/CD Quality Gates',
          role: 'Lead Automation & AI Workflow Engineer',
          company: 'Invillia / AI Engineering Innovation',
          threatTitle: 'THREAT ASSESSMENT (使徒の猛威):',
          threatDesc:
            'Mission-critical transaction and core flow modules operating with 0% automated test coverage. High regression anxiety, slow 3-week release cadences, and significant overhead in manual PR reviews and business documentation.',
          threatPoints: [
            'Core transactional flows running in production with 0% test coverage',
            'Severe engineering friction and fear of regression during bi-weekly releases',
            'Time-consuming manual PR reviews and tedious business documentation (KRs, Stories, Blueprints)'
          ],
          countermeasureTitle: 'COUNTERMEASURE (防衛作戦):',
          countermeasureDesc:
            'Constructed comprehensive automated testing suites with Jest and Vitest. Deployed automated CI/CD quality gates on GitHub Actions and Azure DevOps. Developed custom AI prompt pipelines and agents leveraging GitHub Copilot Certified practices for automated PR reviews, test scaffolding, and business documentation.',
          countermeasurePoints: [
            'Built resilient unit and integration test suites using Jest and Vitest',
            'Automated CI/CD quality gates in GitHub Actions and Azure DevOps',
            'Engineered custom AI prompts and autonomous workflows for PR reviews and specification drafting'
          ],
          outcomeTitle: 'AUDITED OUTCOME (作戦戦果):',
          outcomeDesc:
            'Propelled test coverage from 0% to 40% with 100% build reliability in production CI/CD. Substantially accelerated pull request approvals and eliminated engineering documentation bottlenecks.',
          outcomePoints: [
            'Test coverage propelled from 0% to 40% with 100% production build reliability',
            'Significant reduction in technical and business documentation overhead',
            'Accelerated multi-disciplinary PR reviews and faster time-to-market'
          ],
          stack: ['GitHub Copilot Certified', 'Jest', 'Vitest', 'GitHub Actions', 'Azure DevOps', 'AI Prompt Engineering', 'TypeScript']
        },
        {
          number: 'EPISODE:04 // 第四話',
          kanjiTitle: '瞬間、心、重ねて',
          westernTitle: 'OPERATION HARMONY: UNIFIED MULTI-OS DESIGN SYSTEM',
          subtitle: 'Cross-Platform Component Architecture (Mobile & Web)',
          role: 'Design System & Front-end Specialist',
          company: 'banQi (Casas Bahia) & WiiD',
          threatTitle: 'THREAT ASSESSMENT (使徒の猛威):',
          threatDesc:
            'Visual and behavioral inconsistencies between Android, iOS, and Web platforms. Component duplication, visual bugs across disparate screen densities, and slow, friction-heavy design-to-code translation.',
          threatPoints: [
            'Inconsistent visual patterns across Android, iOS, and Web apps',
            'Redundant component codebases maintained by disparate squads',
            'Slow design handoff and frequent UI regression bugs on production'
          ],
          countermeasureTitle: 'COUNTERMEASURE (防衛作戦):',
          countermeasureDesc:
            'Engineered an ultra-modular, decoupled component library typed with TypeScript. Implemented cross-platform design tokens and native bridges for proprietary OS capabilities, verified via Jest and Vitest.',
          countermeasurePoints: [
            'Constructed modular design system library shared between React, Next.js, and React Native',
            'Automated design token compilation for strict multi-OS parity',
            'Integrated native bridge components and verified testability with Jest/Vitest'
          ],
          outcomeTitle: 'AUDITED OUTCOME (作戦戦果):',
          outcomeDesc:
            'Standardized hundreds of reusable components across platforms. Slashed prototyping and feature delivery time by 2x while guaranteeing mathematical design consistency.',
          outcomePoints: [
            'Standardized hundreds of cross-platform reusable components',
            '2x acceleration in feature prototyping and production shipping speed',
            'Zero visual regressions across differing device screen densities'
          ],
          stack: ['React Native', 'React', 'Next.js', 'Expo', 'TypeScript', 'Design Systems', 'Jest', 'Vitest']
        }
      ]
    },
    career: {
      sectionTag: 'SERVICE RECORD & LOG // 経歴記録',
      sectionTitle: 'DEPLOYMENT CHRONICLE (6 YEARS OF EXPERIENCE)',
      sectionSubtitle: 'Continuous active service across high-stakes software engineering operations.',
      timeline: [
        {
          period: 'SEP 2025 – PRESENT // ACTIVE DUTY',
          role: 'SENIOR SOFTWARE ENGINEER (FRONT-END & MOBILE)',
          unit: 'INVILLIA (AI/R) · BANQI / CASAS BAHIA PAY',
          status: 'CODE: ACTIVE // DEPLOYED',
          missions: [
            'Technical reference in mobile & front-end engineering for Casas Bahia Pay (banQi), driving critical stability, performance, and architecture initiatives.',
            'Hyperscale system stabilization: reduced weekly crashes by 98% (from 120,000 to 2,000) and slashed RAM memory consumption by 55% (from 900MB to 400MB).',
            'Accelerated splash-to-home load time by 75% (from 60s to 15s) via React Native re-architecture and native Kotlin/Swift modules.',
            'Automated test coverage elevated from 0% to 40% with 100% CI/CD production build reliability.',
            'Strategic AI innovation: authored custom AI agents for PR review automation, automated test generation, and business specs (KRs, Stories, Blueprints).',
            'Optimized AWS cloud infrastructure achieving ,000/year in direct savings, partnered with PMs/Staff Engineers on mobile security (RASP via AppDome) and CI/CD pipelines.'
          ]
        },
        {
          period: 'SEP 2024 – SEP 2025 // MISSION COMPLETE',
          role: 'MID-LEVEL SOFTWARE ENGINEER (FRONT-END & MOBILE)',
          unit: 'INVILLIA · BANQI / CASAS BAHIA PAY',
          status: 'CODE: VERIFIED // ARCHIVED',
          missions: [
            'Engineered resilient mobile solutions and integrated native modules in Kotlin (Android) and Swift (iOS) for React Native.',
            'Contributed to system design and construction of reusable cross-platform Design System shared across mobile and web.',
            'Maintained technical excellence through Clean Code, SOLID principles, and comprehensive unit and integration testing suites.'
          ]
        },
        {
          period: 'JAN 2024 – SEP 2024 // MISSION COMPLETE',
          role: 'MID-LEVEL MOBILE & FRONT-END DEVELOPER',
          unit: 'WIID – WORK IN IDEAS',
          status: 'CODE: VERIFIED // ARCHIVED',
          missions: [
            'Developed and maintained cross-platform digital products using React, Next.js, and React Native (Expo) with meticulous UI/UX fidelity.',
            'Full end-to-end feature ownership from Figma design translation to production deployment.',
            'Authored Jest and Vitest automated test suites and mentored junior developers and interns.'
          ]
        },
        {
          period: 'DEC 2021 – JAN 2024 // PROMOTED',
          role: 'JUNIOR FRONT-END DEVELOPER',
          unit: 'WIID – WORK IN IDEAS',
          status: 'CODE: GRADUATED // ADVANCED',
          missions: [
            'Developed and maintained scalable web and mobile applications within the TypeScript and React ecosystem.',
            'Wrote Jest unit tests to ensure continuous stability and high code quality standards.'
          ]
        },
        {
          period: 'DEC 2020 – DEC 2021 // RECON OPS',
          role: 'WEB DEVELOPER (AUTONOMOUS / FREELANCE)',
          unit: 'FREELANCE DIGITAL CONSULTING',
          status: 'CODE: COMPLETED // ARCHIVED',
          missions: [
            'Developed and maintained web applications, responsive landing pages, and custom WordPress websites optimized for high conversion.',
            'Built full interfaces with PHP, JavaScript, CSS, and HTML with direct client lifecycle management and strict deadline delivery.'
          ]
        }
      ]
    },
    synapticBank: {
      sectionTag: 'SYNAPTIC CAPABILITY MATRIX // 神経接続技能',
      sectionTitle: 'THE 32-SKILL MAGI SYNAPTIC BANK',
      sectionSubtitle: 'Direct neural interface with modern engineering stacks, rigorously tested in combat.',
      certTitle: 'GITHUB COPILOT CERTIFIED',
      certIssuer: 'OFFICIAL GITHUB / MICROSOFT CREDENTIAL',
      certStatus: 'ACTIVE (2025 – 2028) · HARMONIC RESONANCE 100%',
      awsTitle: 'AWS CERTIFIED SOLUTIONS ARCHITECT – ASSOCIATE',
      awsIssuer: 'AMAZON WEB SERVICES (AWS)',
      awsStatus: 'IN PROGRESS · TARGET Q4 2026',
      degreeTitle: 'ANÁLISE E DESENVOLVIMENTO DE SISTEMAS',
      degreeInstitution: 'UNINTER · HIGHER EDUCATION DEGREE (TECNÓLOGO)',
      degreeStatus: 'OFFICIALLY CONFERRED (2019 – 2021) · EXCELLENCE',
      categories: [
        {
          name: 'MOBILE & NATIVE MODULES',
          kanji: '機体操縦系',
          skills: [
            'React Native',
            'Kotlin (Android)',
            'Swift (iOS)',
            'Expo SDK',
            'Native Modules (Bridge)',
            'Hermes V8 Engine',
            'AppDome (RASP)',
            'Flipper Profiler'
          ]
        },
        {
          name: 'FRONT-END & MODERN WEB',
          kanji: '視覚同調系',
          skills: [
            'React 19',
            'Next.js (App Router)',
            'TypeScript',
            'Design Systems',
            'Tailwind CSS v4',
            'Three.js / 3D Web',
            'Framer Motion',
            'Web Performance'
          ]
        },
        {
          name: 'DEVOPS, CLOUD & AUTOMATION',
          kanji: '動力管制系',
          skills: [
            'Fastlane Mobile CI',
            'GitHub Actions',
            'Azure DevOps',
            'AWS Cloud Infrastructure',
            'Docker Containers',
            'Databricks APM',
            'Dynatrace APM',
            'AI Ops & Workflows'
          ]
        },
        {
          name: 'QUALITY, ARCHITECTURE & METHODS',
          kanji: '自律思考系',
          skills: [
            'Jest & Vitest Unit Tests',
            'Clean Architecture',
            'SOLID Principles',
            'Design Patterns',
            'System Design',
            'Code Review & Mentorship',
            'Scrum & Kanban',
            'Bilingual Comms (EN/PT)'
          ]
        }
      ]
    },
    comms: {
      sectionTag: 'COMMUNICATION FREQUENCY // 通信回線',
      sectionTitle: 'INITIATE ENCRYPTED DIRECT TRANSMISSION',
      sectionSubtitle:
        'Secure comlink open for senior engineering roles, architectural consultations, and mission briefings.',
      channelStatus: 'CHANNEL: SECURE // FREQUENCY: 2026.10 TOKYO-3 / BRAZIL REMOTE',
      directMailLabel: 'DIRECT PILOT COMLINK (1-CLICK COPY):',
      copySuccessToast: 'COMLINK ADDRESS COPIED TO CLIPBOARD // 通信先複製完了',
      clickToCopy: 'CLICK TO COPY EMAIL',
      btnLinkedin: 'LINKEDIN FREQUENCY ↗',
      btnGithub: 'GITHUB REPOSITORY ↗',
      btnDownloadCv: 'DOWNLOAD SERVICE RECORD (CV) ↓',
      operationalDirective:
        'NERV SPECIAL DIRECTIVE: Available for high-impact Senior Software Engineer engagements across Mobile, Front-end, and AI Systems.'
    }
  },
  pt: {
    header: {
      tacticalCommand: 'NERV // POSTO DE COMANDO TÁTICO // DOGMA CENTRAL TÓQUIO-3',
      emergencyCode: 'EMERGÊNCIA: CÓDIGO VERMELHO // 非常事態',
      internalBattery: 'BATERIA INTERNA',
      umbilicalStatus: 'CABO UMBILICAL: DESCONECTADO [DESCARREGANDO]',
      syncRate: 'HARMÔNICOS DE SINCRONIA: 99.42% (NERVO A10 CONECTADO)',
      toggleLang: '🇺🇸 ENGLISH',
      eyecatchBtn: 'CARTÃO DE TÍTULO // アイキャッチ',
      switchThemesBtn: 'CATÁLOGO DE TEMAS',
      rechargeBattery: 'RESTAURAR CABO UMBILICAL'
    },
    hero: {
      episodeNumber: 'EPISÓDIO:01 // 第壱話',
      japaneseTitle: '使徒、襲来',
      englishTitle: 'ATAQUE DO ANJO // SOBREVIVÊNCIA EM HIPERESCALA',
      pilotClassification: 'CLASSIFICAÇÃO DO PILOTO: JVGS-01 // ARQUITETO DE CÓDIGO CLASSE-S // 特務機関員',
      pilotName: 'JOÃO VINÍCIUS GUERBER DE SOUZA',
      pilotTitle: 'ENGENHEIRO DE SOFTWARE SÊNIOR (ESPECIALISTA EM FRONT-END & MOBILE)',
      bioBrief:
        'Engenheiro de Software Sênior com 6 anos de experiência especializado em modernização de aplicações móveis e web de alto impacto e escala. Foco em arquitetura limpa, módulos nativos (Kotlin/Swift), estabilidade extrema de sistemas, eliminação de débito técnico e automação inteligente com IA.',
      btnExamineDossier: 'EXAMINAR REGISTROS DE COMBATE (CASES) ↓',
      btnMagiConsensus: 'INTERROGAR CONSENSO MAGI ⚙',
      btnDirectComms: 'INICIAR TRANSMISSÃO DIRETA ✉',
      syncTelemetryLabel: 'ONDA DE RESSONÂNCIA SINÁPTICA A10',
      atFieldStatus: 'A.T. FIELD: EXPANDIDO [BARREIRA OCTOGONAL ATIVA]',
      patternStatus: 'ANÁLISE: PADRÃO AZUL // MAESTRIA ARQUITETURAL CONFIRMADA'
    },
    metrics: {
      sectionTag: 'RESOLUÇÃO TÁTICA // 決議事項',
      sectionTitle: '5 MÉTRICAS TÁTICAS AUDITADAS',
      sectionSubtitle: 'Telemetria empírica registrada sob cargas catastróficas em produção na escala de milhões.',
      items: [
        {
          value: '-98%',
          label: 'REDUÇÃO DE CRASHES',
          sublabel: 'De 120.000 para 2.000 semanais',
          desc: 'Estabilização profunda de arquitetura no app banQi (Grupo Casas Bahia), eliminando exceções não tratadas e pontos críticos de falha.',
          kanji: '使徒迎撃率'
        },
        {
          value: '-55%',
          label: 'OTIMIZAÇÃO DE RAM',
          sublabel: 'De 900MB para 400MB de footprint',
          desc: 'Erradicação sistemática de memory leaks, closures cíclicas e desalocação de listeners nativos e bitmaps no Android e iOS.',
          kanji: '記憶領域再生'
        },
        {
          value: '-75%',
          label: 'TEMPO DE INICIALIZAÇÃO',
          sublabel: 'Splash to Home: de 60s para 15s',
          desc: 'Aceleração brutal do Cold Start e Hot Start via code-splitting, otimização do bundle Hermes e inicialização diferida de SDKs.',
          kanji: '初動加速'
        },
        {
          value: '+k',
          label: 'ECONOMIA ANUAL EM CLOUD',
          sublabel: '+.000/ano em infraestrutura AWS',
          desc: 'Refatoração de fluxos legados de comunicação app-backend, agregação de chamadas e redução drástica de egress de dados.',
          kanji: '雲網防衛'
        },
        {
          value: '0% → 40%',
          label: 'BLINDAGEM DE TESTES',
          sublabel: '100% de confiabilidade em CI/CD',
          desc: 'Transição cultural e técnica estabelecendo esteiras CI/CD rígidas, testes unitários com Jest e Vitest e proteção contra regressões.',
          kanji: '防壁展開'
        }
      ]
    },
    magi: {
      sectionTag: 'CLUSTER DE DECISÃO TÁTICA // 三者合議制',
      sectionTitle: 'CÂMARA DE DELIBERAÇÃO DO SUPERCOMPUTADOR MAGI',
      sectionSubtitle:
        'O sistema de consenso tripartite criado pela Dra. Naoko Akagi. Três núcleos lógicos orgânicos distintos deliberam sobre arquitetura de missão crítica.',
      triadLabel: 'VEREDITO UNÂNIME MAGI [3/3 APROVAM]',
      melchiorName: 'MAGI-1 // MELCHIOR',
      melchiorPersona: 'DRA. NAOKO AKAGI COMO CIENTISTA',
      balthasarName: 'MAGI-2 // BALTHASAR',
      balthasarPersona: 'DRA. NAOKO AKAGI COMO MÃE',
      casperName: 'MAGI-3 // CASPER',
      casperPersona: 'DRA. NAOKO AKAGI COMO MULHER',
      statusDeliberating: 'DELIBERANDO...',
      statusAgree: 'APROVADO // 承認',
      unanimousResolution: 'CONSENSO UNÂNIME RATIFICADO // 全会一致承認',
      selectQueryPrompt: 'SELECIONE UMA CONSULTA ARQUITETURAL PARA RESOLUÇÃO MAGI:',
      queries: [
        {
          id: 'q1',
          title: '01 // MIGRAR FINTECH BANQI PARA TURBOMODULES + FABRIC DO REACT NATIVE',
          melchiorVerdict:
            'VEREDITO CIENTISTA: Chamadas diretas C++ JSI eliminam latência de serialização JSON da bridge por completo. Alocação de memória cai 32%. Velocidade de execução atinge o pico teórico.',
          balthasarVerdict:
            'VEREDITO MÃE: Protege o feedback tátil do usuário contra engasgos de thread. Resposta de gestos a 120Hz preserva a tranquilidade de milhões de clientes bancários vulneráveis.',
          casperVerdict:
            'VEREDITO MULHER: Reduz drasticamente o tempo gasto em apagar incêndios, cortando chamados de bugs por aparelho em 60% e liberando tempo para experimentações de mercado.'
        },
        {
          id: 'q2',
          title: '02 // IMPLANTAR AGENTES AUTÔNOMOS DE IA E GITHUB COPILOT EM CI/CD',
          melchiorVerdict:
            'VEREDITO CIENTISTA: O parsing semântico da AST e geração de regressão detectam condições de borda que engenheiros cansados ignoram. Validação sintática impecável.',
          balthasarVerdict:
            'VEREDITO MÃE: Alivia desenvolvedores humanos da exaustão do boilerplate repetitivo, promovendo segurança psicológica e reduzindo o estresse de quedas noturnas.',
          casperVerdict:
            'VEREDITO MULHER: Acelera a cadência de lançamentos em 3.4x sem inflar a folha de pagamento. Uma vantagem competitiva pragmática para entregas em escala.'
        },
        {
          id: 'q3',
          title: '03 // CONSTRUIR DESIGN SYSTEM MULTI-OS COM AUTOMAÇÃO DE TOKENS FIGMA',
          melchiorVerdict:
            'VEREDITO CIENTISTA: Fonte única e matemática da verdade. Compilador de tokens JSON garante 100% de conformidade de tipos em Swift, Kotlin e AST TypeScript React.',
          balthasarVerdict:
            'VEREDITO MÃE: Elimina atrito visual e falhas de acessibilidade em modos de alto contraste e leitores de tela para todas as faixas demográficas de usuários.',
          casperVerdict:
            'VEREDITO MULHER: Remove 80% das reuniões de alinhamento custosas entre designers e devs. Alterações visuais chegam aos binários de produção em minutos.'
        },
        {
          id: 'q4',
          title: '04 // ARQUITETAR EDGE-CACHING AGRESSIVO E PURGAR GASTOS NA INFRAESTRUTURA AWS',
          melchiorVerdict:
            'VEREDITO CIENTISTA: Algoritmos Stale-While-Revalidate pareados com réplicas SQLite locais absorvem 92% dos picos de leitura antes de atingir os servidores de origem.',
          balthasarVerdict:
            'VEREDITO MÃE: O aplicativo continua funcional durante zonas de sombra em metrôs, prevenindo pânico do usuário durante transferências financeiras.',
          casperVerdict:
            'VEREDITO MULHER: Recuperação imediata de mais de US$ 10.000 anuais em gastos de infraestrutura cloud, redirecionando capital diretamente para inovação de produto.'
        }
      ]
    },
    episodes: {
      sectionTag: 'DOSSIÊS DE COMBATE CONFIDENCIAIS // 機密作戦報告',
      sectionTitle: 'QUATRO EPISÓDIOS CRUCIAIS DE ENGENHARIA',
      sectionSubtitle:
        'Registros arquivados de combate demonstrando contenção de crises catastróficas e maestria arquitetural.',
      dossierBtn: 'ABRIR DOSSIÊ CONFIDENCIAL // 極秘作戦詳細 ↗',
      modalCloseBtn: 'FECHAR DOSSIÊ [ESC] // 作戦書を閉じる',
      modalClearance: 'AUTORIZAÇÃO: ARQUITETO DE CÓDIGO CLASSE-S //极秘',
      modalTabPrefix: 'ATO',
      list: [
        {
          number: 'EPISÓDIO:01 // 第壱話',
          kanjiTitle: '使徒、襲来',
          westernTitle: 'OPERAÇÃO BANQI: DEFESA EM HIPERESCALA',
          subtitle: 'A Crise de 120k Crashes Semanais e Catástrofe de Vazamento de Memória',
          role: 'Engenheiro de Software Sênior · Especialista em Front-end & Mobile',
          company: 'Invillia / Casas Bahia Pay (antigo banQi)',
          threatTitle: 'AVALIAÇÃO DA AMEAÇA (使徒の猛威):',
          threatDesc:
            'Aplicativo financeiro de massa atendendo a milhões sob carga crítica. Enfrentando 120.000 crashes semanais (taxa de 4.8%), consumo proibitivo de 900MB de RAM que travava aparelhos de entrada e lentidão de 60 segundos no splash-to-home.',
          threatPoints: [
            '120.000 crashes semanais em aparelhos Android e iOS modestos e topo de linha (4.8% de erro)',
            'Vazamentos de memória inflando o consumo até 900MB e provocando encerramentos abruptos pelo SO',
            'Tempo de carregamento splash-to-home atingindo até 60 segundos, gerando desinstalações em massa'
          ],
          countermeasureTitle: 'CONTRAMEDIDA (防衛作戦):',
          countermeasureDesc:
            'Liderança técnica na refatoração de fluxos legados, reengenharia de módulos nativos em Kotlin (Android) e Swift (iOS), compilação Hermes, virtualização de listas, profiling avançado com Android Studio Profiler / Xcode Instruments e segurança móvel (RASP com AppDome).',
          countermeasurePoints: [
            'Auditoria profunda da bridge nativa erradicando exceções assíncronas e vazamentos de memória',
            'Migração para pré-compilação de bytecode no motor Hermes e code-splitting agressivo',
            'Implementação de segurança móvel avançada (RASP via AppDome) e esteiras Fastlane'
          ],
          outcomeTitle: 'DESFECHO AUDITADO (作戦戦果):',
          outcomeDesc:
            'Crashes semanais desmoronaram em 98% (de 120k para 2k). Consumo de memória RAM caiu 55% para 400MB. Tempo de carregamento splash-to-home acelerou 75% (de 60s para 15s). Milhões de usuários ativos protegidos.',
          outcomePoints: [
            'Queda de 98% no volume de crashes semanais (120.000 → 2.000)',
            'Redução de 55% no consumo de memória RAM (900MB → 400MB)',
            'Tempo de carregamento reduzido em 75% (60s → 15s)'
          ],
          stack: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Fastlane', 'AppDome (RASP)', 'Azure DevOps', 'Jest']
        },
        {
          number: 'EPISÓDIO:02 // 第弐話',
          kanjiTitle: '見知らぬ、天井',
          westernTitle: 'OPERAÇÃO TITÃ CLOUD: OTIMIZAÇÃO DE CUSTOS E EGRESS AWS',
          subtitle: 'Economia Anual de Infraestrutura e Agregação de Rede',
          role: 'Engenheiro de Software Sênior · Arquitetura & Performance',
          company: 'Invillia / Casas Bahia Pay (banQi)',
          threatTitle: 'AVALIAÇÃO DA AMEAÇA (使徒の猛威):',
          threatDesc:
            'Custos elevados de infraestrutura em nuvem causados por polling desordenado no client-side, requisições redundantes de rede, payloads pesados sem compressão e invocações ineficientes de lambdas.',
          threatPoints: [
            'Faturas elevadas de transferência de dados (egress) causadas por polling desordenado',
            'Múltiplas chamadas GraphQL redundantes sobrecarregando conexões de banco de dados',
            'Alocação ineficiente de instâncias em nuvem gerando gastos sem ganho de throughput'
          ],
          countermeasureTitle: 'CONTRAMEDIDA (防衛作戦):',
          countermeasureDesc:
            'Refatoração de fluxos de comunicação app-backend, agregação e debouncing de requisições de rede no client-side, ajuste fino de instâncias e esteiras, e monitoramento em tempo real com Dynatrace e Databricks.',
          countermeasurePoints: [
            'Agregação de requisições de rede e debouncing inteligente no client-side',
            'Ajuste fino de instâncias AWS, camadas de cache e pipelines de entrega contínua',
            'Implementação de telemetria APM em tempo real com Dynatrace e Databricks'
          ],
          outcomeTitle: 'DESFECHO AUDITADO (作戦戦果):',
          outcomeDesc:
            'Conquistou mais de US$ 10.000/ano em economia direta na infraestrutura de nuvem AWS, eliminando gargalos de latência e fortalecendo a resiliência das APIs.',
          outcomePoints: [
            'Mais de US$ 10.000 anuais economizados diretamente em infraestrutura AWS',
            'Queda drástica no volume de egress e requisições redundantes',
            'Alta disponibilidade e estabilidade garantida em horários de pico comercial'
          ],
          stack: ['AWS Cloud', 'GraphQL', 'Node.js', 'Docker', 'Redis', 'Databricks', 'Dynatrace', 'TypeScript']
        },
        {
          number: 'EPISÓDIO:03 // 第参話',
          kanjiTitle: '鳴らない、電話',
          westernTitle: 'OPERAÇÃO SINAPSE: IA AUTÔNOMA E BLINDAGEM DE TESTES',
          subtitle: 'Base com Zero Testes Elevada para 40% com CI/CD Resiliente',
          role: 'Engenheiro Líder de Automação & Workflows de IA',
          company: 'Invillia / Inovação em Engenharia com IA',
          threatTitle: 'AVALIAÇÃO DA AMEAÇA (使徒の猛威):',
          threatDesc:
            'Módulos críticos de transações e fluxos operando com 0% de testes automatizados. Ansiedade crônica de regressão, ciclos lentos de liberação e alto overhead em revisões manuais de PRs e confecção de documentação técnica e de negócio.',
          threatPoints: [
            'Módulos transacionais essenciais operando em produção sem cobertura de testes (0%)',
            'Ciclos de homologação lentos com medo de regressões a cada nova versão',
            'Gargalos crônicos na revisão manual de PRs repetitivos e documentação técnica'
          ],
          countermeasureTitle: 'CONTRAMEDIDA (防衛作戦):',
          countermeasureDesc:
            'Construiu suítes de testes automatizados com Jest e Vitest. Estabeleceu quality gates automáticos de CI/CD no GitHub Actions e Azure DevOps. Desenvolveu ferramentas customizadas e pipelines de IA baseados em GitHub Copilot Certified para automação de PR reviews, geração de testes e elaboração de KRs, Stories e Blueprints.',
          countermeasurePoints: [
            'Criação de suítes de testes unitários e de integração com Jest e Vitest',
            'Quality gates automatizados em pull requests no GitHub Actions e Azure DevOps',
            'Workflows com agentes e prompts customizados com validação Copilot Certified'
          ],
          outcomeTitle: 'DESFECHO AUDITADO (作戦戦果):',
          outcomeDesc:
            'Elevou a cobertura de testes de 0% para 40% com 100% de confiabilidade em builds de produção de CI/CD. Aceleração substancial na homologação de pull requests e erradicação de gargalos de documentação.',
          outcomePoints: [
            'Cobertura de testes propulsada de 0% para 40% com 100% de confiabilidade nas builds',
            'Redução substancial do overhead em redação de documentações e especificações',
            'Aprovação acelerada de pull requests entre times multidisciplinares'
          ],
          stack: ['GitHub Copilot Certified', 'Jest', 'Vitest', 'GitHub Actions', 'Azure DevOps', 'Engenharia de Prompts', 'TypeScript']
        },
        {
          number: 'EPISÓDIO:04 // 第四話',
          kanjiTitle: '瞬間、心、重ねて',
          westernTitle: 'OPERAÇÃO HARMONIA: DESIGN SYSTEM MULTI-OS UNIFICADO',
          subtitle: 'Arquitetura de Componentes Multiplataforma (Mobile e Web)',
          role: 'Especialista em Design System & Front-end',
          company: 'banQi (Casas Bahia) & WiiD',
          threatTitle: 'AVALIAÇÃO DA AMEAÇA (使徒の猛威):',
          threatDesc:
            'Inconsistência visual e de comportamento entre Android, iOS e Web. Duplicação de código, bugs visuais em diferentes densidades de tela e lentidão no ciclo de design-to-code.',
          threatPoints: [
            'Interfaces despadronizadas entre Android, iOS e Web gerando retrabalho',
            'Equipes duplicando componentes básicos em diferentes repositórios',
            'Lentidão no ciclo de entrega de features a partir dos protótipos do Figma'
          ],
          countermeasureTitle: 'CONTRAMEDIDA (防衛作戦):',
          countermeasureDesc:
            'Desenvolveu biblioteca de componentes altamente desacoplada e fortemente tipada em TypeScript, com suporte a design tokens multiplataforma e pontes nativas para recursos proprietários de cada SO.',
          countermeasurePoints: [
            'Arquitetura desacoplada compartilhada entre React, Next.js e React Native',
            'Suporte a tokens de design garantindo paridade visual matemática',
            'Cobertura de testes automatizados com Jest e Vitest para componentes de UI'
          ],
          outcomeTitle: 'DESFECHO AUDITADO (作戦戦果):',
          outcomeDesc:
            'Padronização de centenas de componentes reutilizáveis entre plataformas, aceleração de 2x na prototipação e entrega de novas features, com fidelidade visual impecável.',
          outcomePoints: [
            'Centenas de componentes unificados e reutilizáveis entre plataformas',
            'Velocidade 2x maior na prototipação e entrega de novas features',
            'Eliminação de bugs visuais em diferentes densidades e formatos de tela'
          ],
          stack: ['React Native', 'React', 'Next.js', 'Expo', 'TypeScript', 'Design Systems', 'Jest', 'Vitest']
        }
      ]
    },
    career: {
      sectionTag: 'REGISTRO DE SERVIÇO // 経歴記録',
      sectionTitle: 'CRÔNICA DE DESLOCAMENTOS (6 ANOS DE EXPERIÊNCIA)',
      sectionSubtitle: 'Serviço ativo contínuo em operações de engenharia de software de alta responsabilidade.',
      timeline: [
        {
          period: 'SET 2025 – PRESENTE // SERVIÇO ATIVO',
          role: 'SENIOR SOFTWARE ENGINEER (FRONT-END & MOBILE)',
          unit: 'INVILLIA (AI/R) · BANQI / CASAS BAHIA PAY',
          status: 'CÓDIGO: ATIVO // EM COMBATE',
          missions: [
            'Atuação como referência técnica em engenharia mobile e front-end para o banQi (Grupo Casas Bahia), liderando iniciativas críticas de performance, estabilidade e arquitetura.',
            'Estabilização de sistemas em hiperescala: redução de 98% nos crashes semanais (de 120.000 para 2.000) e corte de 55% no consumo de memória RAM (de 900MB para 400MB).',
            'Aceleração do tempo de carregamento de splash para home em 75% (de 60s para 15s) via reengenharia em React Native e módulos nativos Kotlin/Swift.',
            'Cultura de qualidade: transição de 0% para 40% de cobertura de testes com 100% de confiabilidade em builds de CI/CD.',
            'Inovação estratégica com IA: desenvolvimento de ferramentas customizadas para automação de PR reviews, criação de testes e documentações (KRs, User Stories, Blueprints).',
            'Modernização de sistemas legados com otimização de recursos AWS gerando US$ 10.000/ano em economia, além de segurança móvel avançada (RASP via AppDome).'
          ]
        },
        {
          period: 'SET 2024 – SET 2025 // MISSÃO CONCLUÍDA',
          role: 'MID-LEVEL SOFTWARE ENGINEER (FRONT-END & MOBILE)',
          unit: 'INVILLIA · BANQI / CASAS BAHIA PAY',
          status: 'CÓDIGO: VERIFICADO // ARQUIVADO',
          missions: [
            'Desenvolvimento contínuo de aplicações móveis robustas, integração nativa profunda em Kotlin (Android) e Swift (iOS) e evolução de Design System compartilhado.',
            'Contribuição ativa no system design e construção de componentes reutilizáveis entre plataformas mobile e web.',
            'Garantia de entregas de excelência técnica seguindo princípios de Clean Code, SOLID e testes abrangentes unitários e de integração.'
          ]
        },
        {
          period: 'JAN 2024 – SET 2024 // MISSÃO CONCLUÍDA',
          role: 'MID-LEVEL MOBILE & FRONT-END DEVELOPER',
          unit: 'WIID – WORK IN IDEAS',
          status: 'CÓDIGO: VERIFICADO // ARQUIVADO',
          missions: [
            'Desenvolvimento e sustentação de produtos digitais multiplataforma com React, Next.js e React Native (Expo), garantindo alta fidelidade UI/UX.',
            'Ownership completo de features, desde a tradução do design no Figma até o deploy final em produção.',
            'Criação de suítes de testes automatizados com Jest e Vitest, além de mentoria técnica para desenvolvedores juniores e estagiários.'
          ]
        },
        {
          period: 'DEZ 2021 – JAN 2024 // PROTOCOLO DE FORMAÇÃO',
          role: 'JUNIOR FRONT-END DEVELOPER',
          unit: 'WIID – WORK IN IDEAS',
          status: 'CÓDIGO: PROMOVIDO // GRADUADO',
          missions: [
            'Desenvolvimento e manutenção de produtos web e mobile utilizando React, React Native e ecossistema TypeScript.',
            'Escrita de testes unitários com Jest para assegurar estabilidade contínua e padrões rigorosos de qualidade de código.'
          ]
        },
        {
          period: 'DEZ 2020 – DEZ 2021 // OPERAÇÕES INICIAIS',
          role: 'DESENVOLVEDOR WEB (AUTÔNOMO / FREELANCE)',
          unit: 'CONSULTORIA DIGITAL FREELANCE',
          status: 'CÓDIGO: CONCLUÍDO // ARQUIVADO',
          missions: [
            'Desenvolvimento e manutenção de aplicações web, landing pages de alta conversão e websites customizados em WordPress.',
            'Utilização de PHP, JavaScript, CSS e HTML com gestão direta de múltiplos clientes, prazos e entregas.'
          ]
        }
      ]
    },
    synapticBank: {
      sectionTag: 'MATRIZ DE CAPACIDADE SINÁPTICA // 神経接続技能',
      sectionTitle: 'BANCO SINÁPTICO MAGI DE 32 COMPETÊNCIAS',
      sectionSubtitle: 'Interface neural direta com stacks de engenharia modernas, testadas rigorosamente em produção.',
      certTitle: 'GITHUB COPILOT CERTIFIED',
      certIssuer: 'CREDENCIAL OFICIAL GITHUB / MICROSOFT',
      certStatus: 'ATIVO (2025 – 2028) · RESSONÂNCIA HARMÔNICA 100%',
      awsTitle: 'AWS CERTIFIED SOLUTIONS ARCHITECT – ASSOCIATE',
      awsIssuer: 'AMAZON WEB SERVICES (AWS)',
      awsStatus: 'EM ANDAMENTO · PREVISÃO Q4 2026',
      degreeTitle: 'ANÁLISE E DESENVOLVIMENTO DE SISTEMAS',
      degreeInstitution: 'UNINTER · GRADUAÇÃO TECNOLÓGICA',
      degreeStatus: 'DIPLOMA CONFERIDO (2019 – 2021) · EXCELÊNCIA',
      categories: [
        {
          name: 'MOBILE & MÓDULOS NATIVOS',
          kanji: '機体操縦系',
          skills: [
            'React Native',
            'Kotlin (Android)',
            'Swift (iOS)',
            'Expo SDK',
            'Native Modules (Bridge)',
            'Hermes V8 Engine',
            'AppDome (RASP)',
            'Flipper Profiler'
          ]
        },
        {
          name: 'FRONT-END & WEB MODERNO',
          kanji: '視覚同調系',
          skills: [
            'React 19',
            'Next.js (App Router)',
            'TypeScript',
            'Design Systems',
            'Tailwind CSS v4',
            'Three.js / 3D Web',
            'Framer Motion',
            'Performance Web'
          ]
        },
        {
          name: 'DEVOPS, CLOUD & AUTOMAÇÃO',
          kanji: '動力管制系',
          skills: [
            'Fastlane Mobile CI',
            'GitHub Actions',
            'Azure DevOps',
            'Infraestrutura AWS Cloud',
            'Docker Contêineres',
            'Databricks APM',
            'Dynatrace APM',
            'AI Ops & Workflows'
          ]
        },
        {
          name: 'QUALIDADE, ARQUITETURA & MÉTODOS',
          kanji: '自律思考系',
          skills: [
            'Testes com Jest & Vitest',
            'Clean Architecture',
            'Princípios SOLID',
            'Design Patterns',
            'System Design',
            'Code Review & Mentoria',
            'Scrum & Kanban',
            'Comunicação Bilíngue (EN/PT)'
          ]
        }
      ]
    },
    comms: {
      sectionTag: 'FREQUÊNCIA DE COMUNICAÇÃO // 通信回線',
      sectionTitle: 'INICIAR TRANSMISSÃO DIRETA CRIPTOGRAFADA',
      sectionSubtitle:
        'Linha de comunicação segura aberta para posições de engenharia sênior, consultorias arquiteturais e briefings de missão.',
      channelStatus: 'CANAL: SEGURO // FREQUÊNCIA: 2026.10 TÓQUIO-3 / BRASIL REMOTO',
      directMailLabel: 'CANAL DIRETO COM O PILOTO (COPIAR COM 1 CLIQUE):',
      copySuccessToast: 'ENDEREÇO DE TRANSMISSÃO COPIADO // 通信先複製完了',
      clickToCopy: 'CLIQUE PARA COPIAR E-MAIL',
      btnLinkedin: 'FREQUÊNCIA LINKEDIN ↗',
      btnGithub: 'REPOSITÓRIO GITHUB ↗',
      btnDownloadCv: 'BAIXAR REGISTRO DE SERVIÇO (CV) ↓',
      operationalDirective:
        'DIRETIVA ESPECIAL NERV: Disponível para atuações de alto impacto como Engenheiro de Software Sênior em Mobile, Front-end e Sistemas com IA.'
    }
  }
};

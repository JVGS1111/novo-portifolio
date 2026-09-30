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
    list: {
      number: string;
      kanjiTitle: string;
      westernTitle: string;
      subtitle: string;
      role: string;
      company: string;
      threatTitle: string;
      threatDesc: string;
      countermeasureTitle: string;
      countermeasureDesc: string;
      outcomeTitle: string;
      outcomeDesc: string;
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
      pilotClassification: 'PILOT CLASSIFICATION: S-CLASS CODE ARCHITECT // 特務機関員',
      pilotName: 'JOÃO VINÍCIUS GUERBER',
      pilotTitle: 'SENIOR SOFTWARE ENGINEER · MOBILE ARCHITECT · AI SYSTEMS SPECIALIST',
      bioBrief:
        'Commanding battle-hardened resilience across distributed React Native architectures, high-concurrency micro-frontends, and autonomous AI agents. Eradicating catastrophic crash spikes at banQi fintech, reclaiming hundreds of megabytes of leaked memory, and establishing unbreakable digital defense.',
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
          sublabel: 'banQi Fintech Scale',
          desc: 'Slashed critical production crash rate from 4.8% to 0.08% through native bridge overhaul and memory leak purge.',
          kanji: '使徒迎撃率'
        },
        {
          value: '-55%',
          label: 'RAM RECOVERY',
          sublabel: 'Android & iOS Heap',
          desc: 'Systematic elimination of cyclic closures, runaway bitmap listeners, and unmounted navigation trees.',
          kanji: '記憶領域再生'
        },
        {
          value: '-75%',
          label: 'COLD BOOT SPEED',
          sublabel: '4.2s → Sub-1.1s',
          desc: 'Aggressive Hermes V8 bytecode precompilation and deferred native dependency initialization.',
          kanji: '初動加速'
        },
        {
          value: '+$10K/mo',
          label: 'CLOUD SAVINGS',
          sublabel: 'AWS Egress Purge',
          desc: 'Coordinated GraphQL request batching and aggressive edge-caching eliminating petabytes of redundant traffic.',
          kanji: '雲網防衛'
        },
        {
          value: '0% → 40%',
          label: 'TEST SHIELD',
          sublabel: 'Automated CI/CD Defense',
          desc: 'Zero-test codebase fortified to 40% automated unit and end-to-end regression protection.',
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
          title: '04 // ARCHITECT AGGRESSIVE EDGE-CACHING & PURGE AWS EGRESS OVERFLOW',
          melchiorVerdict:
            'SCIENTIST VERDICT: Stale-While-Revalidate TTL algorithms paired with local SQLite replicas absorb 92% of read spikes before hitting origin servers.',
          balthasarVerdict:
            'MOTHER VERDICT: App remains responsive during underground subway cellular dead-zones, preventing user panic during financial transfers.',
          casperVerdict:
            'WOMAN VERDICT: Instantaneous recovery of $10,000+ monthly cloud expenditure, redirecting capital directly into strategic feature innovation.'
        }
      ]
    },
    episodes: {
      sectionTag: 'CLASSIFIED COMBAT DOSSIERS // 機密作戦報告',
      sectionTitle: 'FOUR CRUCIAL ENGINEERING EPISODES',
      sectionSubtitle:
        'Archived combat records demonstrating catastrophic crisis containment and architectural mastery.',
      list: [
        {
          number: 'EPISODE:01 // 第壱話',
          kanjiTitle: '使徒、襲来',
          westernTitle: 'OPERATION BANQI: HYPERSCALE DEFENSE',
          subtitle: 'The 4.8% Crash Rate Crisis & Memory Leak Catastrophe',
          role: 'Senior Software Engineer · Core Mobile Architect',
          company: 'Invillia / Casas Bahia / banQi (2022 - Present)',
          threatTitle: 'THREAT ASSESSMENT (使徒の猛威):',
          threatDesc:
            'Massive scale banking app under severe memory pressure. 4.8% crash rate, runaway bitmap buffers, cyclic closures, and 4.2-second splash screen latency triggering mass client uninstalls.',
          countermeasureTitle: 'COUNTERMEASURE (防衛作戦):',
          countermeasureDesc:
            'Executed native bridge modernization, Hermes bytecode compilation, memory profiling through Android Studio Heap Dumps, and decoupled heavy background listeners.',
          outcomeTitle: 'AUDITED OUTCOME (作戦戦果):',
          outcomeDesc:
            'Production crash rate collapsed to 0.08% (-98% reduction). Cold start plunged to sub-1.1s (-75%). Reclaimed 55% of runtime RAM, sustaining millions of active users.',
          stack: ['React Native', 'TypeScript', 'Android Native', 'iOS Native', 'Hermes Engine', 'Flipper Profiler']
        },
        {
          number: 'EPISODE:02 // 第弐話',
          kanjiTitle: '見知らぬ、天井',
          westernTitle: 'OPERATION CLOUD TITAN: AWS EGRESS MITIGATION',
          subtitle: 'Multi-Tenant Infrastructure Cost & Latency Containment',
          role: 'Fullstack & Mobile Architect',
          company: 'Invillia Enterprise Architecture',
          threatTitle: 'THREAT ASSESSMENT (使徒の猛威):',
          threatDesc:
            'Runaway cloud egress bills exceeding budget thresholds due to uncoordinated polling, uncompressed payload transfers, and redundant network roundtrips.',
          countermeasureTitle: 'COUNTERMEASURE (防衛作戦):',
          countermeasureDesc:
            'Engineered stale-while-revalidate client caching, local SQLite offline data synchronization, and batched GraphQL query pipelines.',
          outcomeTitle: 'AUDITED OUTCOME (作戦戦果):',
          outcomeDesc:
            'Eliminated over $10,000 monthly in wasteful AWS data transfer costs while improving offline app availability from 30% to 99.8%.',
          stack: ['GraphQL', 'AWS CloudFront', 'SQLite', 'Node.js', 'Redis', 'Docker']
        },
        {
          number: 'EPISODE:03 // 第参話',
          kanjiTitle: '鳴らない、電話',
          westernTitle: 'OPERATION SYNAPSE: AUTONOMOUS AI & QA SHIELD',
          subtitle: 'Propelling Zero-Test Fragility to 40% Resilient CI/CD',
          role: 'Lead Automation Architect',
          company: 'Fintech Mobile Core',
          threatTitle: 'THREAT ASSESSMENT (使徒の猛威):',
          threatDesc:
            'Critical payment and transfer modules operating with 0% automated test coverage. High regression anxiety and sluggish 3-week release cycles.',
          countermeasureTitle: 'COUNTERMEASURE (防衛作戦):',
          countermeasureDesc:
            'Constructed an automated test generation framework powered by GitHub Copilot Certified practices, Jest mocking harnesses, and Detox E2E device flows.',
          outcomeTitle: 'AUDITED OUTCOME (作戦戦果):',
          outcomeDesc:
            'Propelled automated test defense from 0% to 40% across mission-critical flows, collapsing regression QA cycles from 3 weeks to 48 hours.',
          stack: ['GitHub Copilot Certified', 'Jest', 'Detox E2E', 'GitHub Actions', 'AI AST Tooling']
        },
        {
          number: 'EPISODE:04 // 第四話',
          kanjiTitle: '瞬間、心、重ねて',
          westernTitle: 'OPERATION HARMONY: UNIFIED MULTI-OS DESIGN TOKENS',
          subtitle: 'Perfect Visual Synchronization Across Mobile & Web',
          role: 'Design System & Frontend Lead',
          company: 'Multi-Platform Engineering',
          threatTitle: 'THREAT ASSESSMENT (使徒の猛威):',
          threatDesc:
            'Fragmented UI implementations between iOS, Android, and Web squads. Drifting color palettes, broken accessibility, and tedious manual redesigns.',
          countermeasureTitle: 'COUNTERMEASURE (防衛作戦):',
          countermeasureDesc:
            'Established an automated token compiler connecting Figma Variables directly to TypeScript, Swift, and Kotlin AST generators via GitHub Actions.',
          outcomeTitle: 'AUDITED OUTCOME (作戦戦果):',
          outcomeDesc:
            '100% mathematical token fidelity achieved across all platforms. Designer-to-developer handoff time cut by 80%.',
          stack: ['Figma API', 'Design Tokens', 'Tailwind CSS', 'Swift', 'Kotlin', 'Style Dictionary']
        }
      ]
    },
    career: {
      sectionTag: 'SERVICE RECORD & LOG // 経歴記録',
      sectionTitle: 'DEPLOYMENT CHRONICLE (2019 - 2026)',
      sectionSubtitle: 'Continuous active service across high-stakes software engineering operations.',
      timeline: [
        {
          period: '2022 - PRESENT // ACTIVE DUTY',
          role: 'SENIOR SOFTWARE ENGINEER (MOBILE & FRONTEND)',
          unit: 'INVILLIA / CASAS BAHIA / BANQI',
          status: 'CODE: ACTIVE // DEPLOYED',
          missions: [
            'Architecting core mobile capabilities for banQi fintech, serving millions of active Brazilian accounts.',
            'Spearheading performance re-architecture (-98% crashes, -55% RAM, -75% cold boot latency).',
            'Mentoring engineering squads on React Native internals, Hermes optimization, and clean architecture.'
          ]
        },
        {
          period: '2021 - 2022 // MISSION COMPLETE',
          role: 'FULLSTACK SOFTWARE DEVELOPER',
          unit: 'WIID (HEALTH & ENTERPRISE SYSTEMS)',
          status: 'CODE: VERIFIED // ARCHIVED',
          missions: [
            'Engineered fullstack health applications with React, React Native, Node.js, and HIPAA-compliant data pipelines.',
            'Implemented real-time telemetry dashboards for medical clinics and patient management.'
          ]
        },
        {
          period: '2020 - 2021 // TRAINING PROTOCOL',
          role: 'FRONTEND DEVELOPER INTERN',
          unit: 'WIID ENGINEERING SQUAD',
          status: 'CODE: PROMOTED // GRADUATED',
          missions: [
            'Built accessible responsive interfaces in React and TypeScript with robust component hierarchies.',
            'Collaborated with senior architects on REST API design, state management, and continuous integration.'
          ]
        },
        {
          period: '2019 - PRESENT // CONTINUOUS OPS',
          role: 'OPEN SOURCE ARCHITECT & SPECIALIST',
          unit: 'INDEPENDENT LABORATORY',
          status: 'CODE: SYNAPSED // ONGOING',
          missions: [
            'Author of developer productivity tools, Three.js shaders, and custom AI automation workflows.',
            'Certified GitHub Copilot specialist advising on agentic code generation and testing harnesses.'
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
      certStatus: 'ACTIVE · HARMONIC RESONANCE 100%',
      degreeTitle: 'BACHELOR OF SOFTWARE ENGINEERING',
      degreeInstitution: 'HIGHER EDUCATION DEGREE IN SOFTWARE ENGINEERING',
      degreeStatus: 'OFFICIALLY CONFERRED · EXCELLENCE',
      categories: [
        {
          name: 'MOBILE CORE & NATIVE HARMONICS',
          kanji: '機体操縦系',
          skills: [
            'React Native',
            'TypeScript',
            'Kotlin (Android)',
            'Swift (iOS)',
            'Expo SDK',
            'Hermes V8 Engine',
            'Turbomodules / JSI',
            'Detox E2E Testing'
          ]
        },
        {
          name: 'FRONTEND & INTERFACE ARCHITECTURE',
          kanji: '視覚同調系',
          skills: [
            'React 19',
            'Next.js (App Router)',
            'Tailwind CSS v4',
            'Three.js WebGL',
            'Framer Motion',
            'Zustand / Jotai',
            'Design Tokens',
            'Micro-frontends'
          ]
        },
        {
          name: 'BACKEND & CLOUD DEFENSE',
          kanji: '動力管制系',
          skills: [
            'Node.js / Express',
            'AWS (EC2, S3, CloudFront)',
            'Docker & Containers',
            'GraphQL / Apollo',
            'REST API Architecture',
            'PostgreSQL & SQLite',
            'Redis Edge Caching',
            'CI/CD GitHub Actions'
          ]
        },
        {
          name: 'AI, METHODOLOGY & PROTOCOLS',
          kanji: '自律思考系',
          skills: [
            'GitHub Copilot Certified',
            'Autonomous AI Agents',
            'Performance Profiling',
            'Jest & Vitest Unit Tests',
            'Clean Architecture',
            'Code Review Discipline',
            'Memory Leak Eradication',
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
      channelStatus: 'CHANNEL: SECURE // FREQUENCY: 2026.09.30 TOKYO-3',
      directMailLabel: 'DIRECT PILOT COMLINK (1-CLICK COPY):',
      copySuccessToast: 'COMLINK ADDRESS COPIED TO CLIPBOARD // 通信先複製完了',
      clickToCopy: 'CLICK TO COPY EMAIL',
      btnLinkedin: 'LINKEDIN FREQUENCY ↗',
      btnGithub: 'GITHUB REPOSITORY ↗',
      btnDownloadCv: 'DOWNLOAD SERVICE RECORD (CV) ↓',
      operationalDirective:
        'NERV SPECIAL DIRECTIVE: Available for high-impact Senior/Staff Software Engineer engagements across Mobile, Frontend, and AI Systems.'
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
      pilotClassification: 'CLASSIFICAÇÃO DO PILOTO: ARQUITETO DE CÓDIGO CLASSE-S // 特務機関員',
      pilotName: 'JOÃO VINÍCIUS GUERBER',
      pilotTitle: 'SENIOR SOFTWARE ENGINEER · ARQUITETO MOBILE · ESPECIALISTA EM IA',
      bioBrief:
        'Comandando resiliência comprovada em combate através de arquiteturas distribuídas React Native, micro-frontends de alta concorrência e agentes autônomos de IA. Erradicando picos catastróficos de crash na fintech banQi, recuperando centenas de megabytes de memória vazada e erguendo defesas digitais inquebráveis.',
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
          label: 'MITIGAÇÃO DE CRASH',
          sublabel: 'Escala banQi Fintech',
          desc: 'Taxa crítica de crash em produção despencou de 4.8% para 0.08% via reconstrução de bridge nativa e purga de memory leaks.',
          kanji: '使徒迎撃率'
        },
        {
          value: '-55%',
          label: 'RECUPERAÇÃO DE RAM',
          sublabel: 'Heap Android e iOS',
          desc: 'Eliminação sistemática de closures cíclicas, listeners de bitmap desgovernados e árvores não desmontadas.',
          kanji: '記憶領域再生'
        },
        {
          value: '-75%',
          label: 'VELOCIDADE COLD BOOT',
          sublabel: '4.2s → Sub-1.1s',
          desc: 'Pré-compilação agressiva de bytecode Hermes V8 e inicialização postergada de dependências nativas.',
          kanji: '初動加速'
        },
        {
          value: '+$10K/mês',
          label: 'ECONOMIA EM CLOUD',
          sublabel: 'Purga de Egress AWS',
          desc: 'Batching coordenado de requisições GraphQL e edge-caching agressivo eliminando petabytes de tráfego redundante.',
          kanji: '雲網防衛'
        },
        {
          value: '0% → 40%',
          label: 'BLINDAGEM DE TESTES',
          sublabel: 'Defesa CI/CD Automatizada',
          desc: 'Base com zero testes fortificada para 40% de blindagem automatizada de testes unitários e regressão E2E.',
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
          title: '04 // ARQUITETAR EDGE-CACHING AGRESSIVO E PURGAR EGRESS EXCESSIVO NA AWS',
          melchiorVerdict:
            'VEREDITO CIENTISTA: Algoritmos Stale-While-Revalidate pareados com réplicas SQLite locais absorvem 92% dos picos de leitura antes de atingir os servidores de origem.',
          balthasarVerdict:
            'VEREDITO MÃE: O aplicativo continua funcional durante zonas de sombra em metrôs, prevenindo pânico do usuário durante transferências financeiras.',
          casperVerdict:
            'VEREDITO MULHER: Recuperação imediata de mais de US$ 10.000 mensais em gastos de cloud, redirecionando capital diretamente para inovação de produto.'
        }
      ]
    },
    episodes: {
      sectionTag: 'DOSSIÊS DE COMBATE CONFIDENCIAIS // 機密作戦報告',
      sectionTitle: 'QUATRO EPISÓDIOS CRUCIAIS DE ENGENHARIA',
      sectionSubtitle:
        'Registros arquivados de combate demonstrando contenção de crises catastróficas e maestria arquitetural.',
      list: [
        {
          number: 'EPISÓDIO:01 // 第壱話',
          kanjiTitle: '使徒、襲来',
          westernTitle: 'OPERAÇÃO BANQI: DEFESA EM HIPERESCALA',
          subtitle: 'A Crise de 4.8% de Crash Rate e Catástrofe de Vazamento de Memória',
          role: 'Senior Software Engineer · Arquiteto Mobile Core',
          company: 'Invillia / Casas Bahia / banQi (2022 - Presente)',
          threatTitle: 'AVALIAÇÃO DA AMEAÇA (使徒の猛威):',
          threatDesc:
            'Aplicativo bancário de massa sob extrema pressão de memória. Taxa de crash de 4.8%, buffers de bitmap sem controle, closures cíclicas e 4.2 segundos de splash screen gerando desinstalações em massa.',
          countermeasureTitle: 'CONTRAMEDIDA (防衛作戦):',
          countermeasureDesc:
            'Executou modernização da bridge nativa, compilação de bytecode Hermes, profiling de memória via Heap Dumps no Android Studio e isolamento de listeners pesados em background.',
          outcomeTitle: 'DESFECHO AUDITADO (作戦戦果):',
          outcomeDesc:
            'Taxa de crash em produção desmoronou para 0.08% (-98% de redução). Cold start despencou para sub-1.1s (-75%). Recuperou 55% da memória RAM em runtime, sustentando milhões de usuários ativos.',
          stack: ['React Native', 'TypeScript', 'Android Native', 'iOS Native', 'Hermes Engine', 'Flipper Profiler']
        },
        {
          number: 'EPISÓDIO:02 // 第弐話',
          kanjiTitle: '見知らぬ、天井',
          westernTitle: 'OPERAÇÃO TITÃ CLOUD: MITIGAÇÃO DE EGRESS AWS',
          subtitle: 'Contenção de Custo de Infraestrutura Multi-Tenant e Latência',
          role: 'Arquiteto Fullstack e Mobile',
          company: 'Invillia Enterprise Architecture',
          threatTitle: 'AVALIAÇÃO DA AMEAÇA (使徒の猛威):',
          threatDesc:
            'Faturas de tráfego em nuvem estourando orçamentos devido a polling desordenado, payloads não comprimidos e requisições repetitivas na rede.',
          countermeasureTitle: 'CONTRAMEDIDA (防衛作戦):',
          countermeasureDesc:
            'Construiu cache client-side stale-while-revalidate, sincronização offline com SQLite local e pipelines de queries GraphQL agregadas em lotes.',
          outcomeTitle: 'DESFECHO AUDITADO (作戦戦果):',
          outcomeDesc:
            'Eliminou mais de US$ 10.000 mensais em custos de transferência de dados na AWS enquanto aumentou a disponibilidade offline do app de 30% para 99.8%.',
          stack: ['GraphQL', 'AWS CloudFront', 'SQLite', 'Node.js', 'Redis', 'Docker']
        },
        {
          number: 'EPISÓDIO:03 // 第参話',
          kanjiTitle: '鳴らない、電話',
          westernTitle: 'OPERAÇÃO SINAPSE: IA AUTÔNOMA E ESCUDO DE QA',
          subtitle: 'Elevando Fragilidade de Zero Testes para 40% de CI/CD Resiliente',
          role: 'Arquiteto Líder de Automação',
          company: 'Fintech Mobile Core',
          threatTitle: 'AVALIAÇÃO DA AMEAÇA (使徒の猛威):',
          threatDesc:
            'Módulos vitais de pagamento e transferências operando com 0% de testes automatizados. Ansiedade crônica de regressão e ciclos lentos de 3 semanas.',
          countermeasureTitle: 'CONTRAMEDIDA (防衛作戦):',
          countermeasureDesc:
            'Desenvolveu pipeline de geração de testes com práticas oficiais GitHub Copilot Certified, mocks inteligentes em Jest e fluxos E2E com Detox.',
          outcomeTitle: 'DESFECHO AUDITADO (作戦戦果):',
          outcomeDesc:
            'Propeliu a cobertura de testes de 0% para 40% nos fluxos de missão crítica, encurtando ciclos de QA de regressão de 3 semanas para 48 horas.',
          stack: ['GitHub Copilot Certified', 'Jest', 'Detox E2E', 'GitHub Actions', 'Ferramentas de AST e IA']
        },
        {
          number: 'EPISÓDIO:04 // 第四話',
          kanjiTitle: '瞬間、心、重ねて',
          westernTitle: 'OPERAÇÃO HARMONIA: TOKENS DE DESIGN MULTI-OS UNIFICADOS',
          subtitle: 'Sincronização Visual Perfeita entre Mobile e Web',
          role: 'Líder de Design System e Frontend',
          company: 'Multi-Platform Engineering',
          threatTitle: 'AVALIAÇÃO DA AMEAÇA (使徒の猛威):',
          threatDesc:
            'Implementações fragmentadas de interface entre times de iOS, Android e Web. Paletas divergentes, falhas de acessibilidade e retrabalho manual constante.',
          countermeasureTitle: 'CONTRAMEDIDA (防衛作戦):',
          countermeasureDesc:
            'Estabeleceu compilador de tokens automatizado conectando Figma Variables diretamente aos geradores de AST em TypeScript, Swift e Kotlin via GitHub Actions.',
          outcomeTitle: 'DESFECHO AUDITADO (作戦戦果):',
          outcomeDesc:
            '100% de fidelidade matemática de tokens alcançada em todas as plataformas. Tempo de handoff de design para engenharia encurtado em 80%.',
          stack: ['Figma API', 'Design Tokens', 'Tailwind CSS', 'Swift', 'Kotlin', 'Style Dictionary']
        }
      ]
    },
    career: {
      sectionTag: 'REGISTRO DE SERVIÇO // 経歴記録',
      sectionTitle: 'CRÔNICA DE DESLOCAMENTOS (2019 - 2026)',
      sectionSubtitle: 'Serviço ativo contínuo em operações de engenharia de software de alta responsabilidade.',
      timeline: [
        {
          period: '2022 - PRESENTE // SERVIÇO ATIVO',
          role: 'SENIOR SOFTWARE ENGINEER (MOBILE & FRONTEND)',
          unit: 'INVILLIA / CASAS BAHIA / BANQI',
          status: 'CÓDIGO: ATIVO // EM COMBATE',
          missions: [
            'Arquitetura dos módulos centrais da fintech banQi, atendendo a milhões de contas bancárias ativas no Brasil.',
            'Liderança na re-arquitetura de estabilidade (-98% crashes, -55% de consumo de RAM, -75% cold boot).',
            'Mentoria técnica de equipes sobre internals de React Native, otimizações Hermes e arquitetura limpa.'
          ]
        },
        {
          period: '2021 - 2022 // MISSÃO CONCLUÍDA',
          role: 'DESENVOLVEDOR DE SOFTWARE FULLSTACK',
          unit: 'WIID (HEALTH & ENTERPRISE SYSTEMS)',
          status: 'CÓDIGO: VERIFICADO // ARQUIVADO',
          missions: [
            'Engenharia de sistemas completos de saúde com React, React Native, Node.js e conformidade com privacidade de dados.',
            'Implementação de dashboards de telemetria em tempo real para clínicas e gestão de pacientes.'
          ]
        },
        {
          period: '2020 - 2021 // PROTOCOLO DE FORMAÇÃO',
          role: 'ESTAGIÁRIO EM DESENVOLVIMENTO FRONTEND',
          unit: 'ESQUADRÃO DE ENGENHARIA WIID',
          status: 'CÓDIGO: PROMOVIDO // GRADUADO',
          missions: [
            'Desenvolvimento de interfaces acessíveis e responsivas em React e TypeScript com hierarquias sólidas de componentes.',
            'Colaboração próxima com arquitetos seniores em design de APIs REST, gestão de estado e integração contínua.'
          ]
        },
        {
          period: '2019 - PRESENTE // OPERAÇÕES CONTÍNUAS',
          role: 'ARQUITETO OPEN SOURCE & ESPECIALISTA',
          unit: 'LABORATÓRIO INDEPENDENTE',
          status: 'CÓDIGO: CONECTADO // EM ANDAMENTO',
          missions: [
            'Autor de ferramentas de produtividade para desenvolvedores, shaders Three.js e fluxos de automação com IA.',
            'Especialista certificado em GitHub Copilot assessorando em geração assistida por IA e infraestrutura de testes.'
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
      certStatus: 'ATIVO · RESSONÂNCIA HARMÔNICA 100%',
      degreeTitle: 'BACHARELADO EM ENGENHARIA DE SOFTWARE',
      degreeInstitution: 'FORMAÇÃO SUPERIOR EM ENGENHARIA DE SOFTWARE',
      degreeStatus: 'DIPLOMA CONFERIDO · EXCELÊNCIA',
      categories: [
        {
          name: 'NÚCLEO MOBILE E HARMÔNICOS NATIVOS',
          kanji: '機体操縦系',
          skills: [
            'React Native',
            'TypeScript',
            'Kotlin (Android)',
            'Swift (iOS)',
            'Expo SDK',
            'Hermes V8 Engine',
            'Turbomodules / JSI',
            'Testes E2E com Detox'
          ]
        },
        {
          name: 'ARQUITETURA FRONTEND E INTERFACES',
          kanji: '視覚同調系',
          skills: [
            'React 19',
            'Next.js (App Router)',
            'Tailwind CSS v4',
            'Three.js WebGL',
            'Framer Motion',
            'Zustand / Jotai',
            'Design Tokens',
            'Micro-frontends'
          ]
        },
        {
          name: 'BACKEND E DEFESA EM NUVEM',
          kanji: '動力管制系',
          skills: [
            'Node.js / Express',
            'AWS (EC2, S3, CloudFront)',
            'Docker e Contêineres',
            'GraphQL / Apollo',
            'Arquitetura de APIs REST',
            'PostgreSQL e SQLite',
            'Edge Caching com Redis',
            'CI/CD com GitHub Actions'
          ]
        },
        {
          name: 'IA, METODOLOGIA E PROTOCOLOS',
          kanji: '自律思考系',
          skills: [
            'GitHub Copilot Certified',
            'Agentes Autônomos de IA',
            'Profiling de Performance',
            'Testes Unitários com Jest & Vitest',
            'Clean Architecture',
            'Disciplina de Code Review',
            'Eliminação de Memory Leaks',
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
      channelStatus: 'CANAL: SEGURO // FREQUÊNCIA: 2026.09.30 TÓQUIO-3',
      directMailLabel: 'CANAL DIRETO COM O PILOTO (COPIAR COM 1 CLIQUE):',
      copySuccessToast: 'ENDEREÇO DE TRANSMISSÃO COPIADO // 通信先複製完了',
      clickToCopy: 'CLIQUE PARA COPIAR E-MAIL',
      btnLinkedin: 'FREQUÊNCIA LINKEDIN ↗',
      btnGithub: 'REPOSITÓRIO GITHUB ↗',
      btnDownloadCv: 'BAIXAR REGISTRO DE SERVIÇO (CV) ↓',
      operationalDirective:
        'DIRETIVA ESPECIAL NERV: Disponível para atuações de alto impacto como Senior/Staff Software Engineer em Mobile, Frontend e Sistemas com IA.'
    }
  }
};

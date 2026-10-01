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
    categories: NervSkillCategory[];
  };
  about: {
    sectionTitle: string;
    sectionKanji: string;
    pilotClassification: string;
    pilotId: string;
    dossierText: string[];
    specializations: string[];
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
      engineerName: 'JOÃO VINÍCIUS GUERBER',
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
      userTag: 'USER: JVG',
      softwareKatakana: 'ソフトウェア',
      engineerKatakana: 'エンジニア',
      fullName: 'JOÃO VINÍCIUS GUERBER',
      japaneseMotto: 'スケールするプロダクトと体験を構築する',
      englishMotto: 'BUILDING SCALABLE PRODUCTS AND EXPERIENCES',
      bioParagraph:
        'I build large-scale applications with a relentless focus on high performance, robust architecture, and refined user experience. Currently specializing in React Native, React, TypeScript, and cloud-native solutions.',
      btnViewProjects: 'VIEW PROJECTS',
      btnDownloadCv: 'DOWNLOAD CV',
      coreSkillsTitle: 'CORE SKILLS',
      coreSkillsKanji: '主要スキル',
      coreSkills: [
        'React / React Native',
        'TypeScript',
        'Kotlin / Swift',
        'Node.js',
        'AWS',
        'System Design'
      ]
    },
    rightHud: {
      evaUnit: 'EVA 01',
      evaKanji: '初号機',
      standbyStatus: 'STANDBY',
      activeStatus: 'COMBAT ACTIVE',
      testType: 'TEST TYPE: EVA-01',
      pilotLabel: 'PILOT: 03 (J.V. GUERBER)',
      pilotValue: 'SYNC: 99.4%',
      syncLabel: 'SYNC:',
      syncValue: '99.4%',
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
      items: [
        {
          id: 'banqi-app',
          number: '01',
          title: 'BanQi App',
          organization: 'Grupo Casas Bahia',
          tagline: 'Super app financeiro com +300k usuários ativos semanais.',
          description:
            'Financial super app with +300k weekly active users. Led architecture overhaul, cold-start acceleration, and native memory leak isolation.',
          tags: ['React Native', 'TypeScript', 'GraphQL'],
          threatLevel: 'CLASS-A CRITICAL INFRASTRUCTURE',
          operationalStatus: 'DEPLOYED & OPERATIONAL',
          metrics: [
            { label: 'Crash Rate', value: '4.8% → 0.05%' },
            { label: 'Cold Boot', value: '6.2s → 1.5s' },
            { label: 'Cloud Savings', value: '+$10k / month' }
          ],
          fullDetails: {
            challenge:
              'Massive mobile fintech app suffering from severe Android low-end device crashes, high cold start latency (6.2s), and memory leaks under peak traffic.',
            solution:
              'Architected modular micro-frontends with Hermes bytecode engine, implemented Hermes profiler traces, optimized GraphQL caching, and designed resilient offline-first state synchronization.',
            impact:
              'Crash rate dropped by 98.9% (from 4.8% to <0.05%). Cold start dropped from 6.2s to 1.5s. App Store and Google Play rating surged from 3.2 to 4.7 stars.',
            architecture: [
              'React Native 0.72+ with Hermes Engine',
              'GraphQL Federation & Offline Apollo Client',
              'Native Kotlin / Swift bridges for biometric encryption',
              'Datadog Real User Monitoring (RUM) & Sentry telemetry'
            ]
          }
        },
        {
          id: 'guepsi-saas',
          number: '02',
          title: 'Guepsi',
          organization: 'SaaS para psicólogos',
          tagline: 'Plataforma de gestão de pacientes com foco em privacidade (LGPD).',
          description:
            'Clinical patient management platform with end-to-end HIPAA and LGPD cryptographic compliance, intelligent scheduling, and medical records.',
          tags: ['Next.js', 'PostgreSQL', 'AWS'],
          threatLevel: 'MAX SECRECY PROTOCOL // 極秘',
          operationalStatus: 'ACTIVE IN PRODUCTION',
          metrics: [
            { label: 'Compliance', value: '100% LGPD/HIPAA' },
            { label: 'Latency', value: '<85ms Global' },
            { label: 'Uptime', value: '99.98%' }
          ],
          fullDetails: {
            challenge:
              'Psychology clinics required an ultra-secure, zero-knowledge clinical records system adhering strictly to Brazilian LGPD and global medical privacy standards without compromising UX speed.',
            solution:
              'Engineered serverless Next.js App Router on AWS with row-level encryption in PostgreSQL, AES-256 encrypted session vaults, and automated calendar/financial telematics.',
            impact:
              'Zero data exposure incidents, full cryptographic audit approval, and adoption by hundreds of licensed psychology professionals across Latin America.',
            architecture: [
              'Next.js 14 App Router with React Server Components',
              'PostgreSQL with Row Level Security (RLS) & AES-256 Vault',
              'AWS Lambda, S3 Encrypted Buckets & CloudFront CDN',
              'Stripe & PIX automated financial settlement engine'
            ]
          }
        },
        {
          id: 'tools-library',
          number: '03',
          title: 'Biblioteca de Tools',
          organization: 'Projetos e ferramentas',
          tagline: 'Projetos pessoais para desenvolvimento e produtividade.',
          description:
            'Suite of open-source CLI tools, workflow automations, and developer utilities designed to streamline fullstack development cycles and testing.',
          tags: ['TypeScript', 'Node.js', 'DevTools'],
          threatLevel: 'RESEARCH DIVISION ARTIFACT',
          operationalStatus: 'OPEN REPOSITORY',
          metrics: [
            { label: 'Dev Efficiency', value: '+45% Velocity' },
            { label: 'Test Coverage', value: '95%+ Audited' },
            { label: 'Dependencies', value: 'Zero Bloat' }
          ],
          fullDetails: {
            challenge:
              'Repetitive boilerplate, manual token synchronization between Figma and codebases, and inconsistent mock generation slowed down engineering iteration cycles.',
            solution:
              'Authored specialized TypeScript CLI utilities, automated AST parsers, design-token synchronizers, and synthetic test data generators for rapid local prototyping.',
            impact:
              'Accelerated feature inception by 45%, eliminated design-to-code drift, and published reusable open-source modules across the developer ecosystem.',
            architecture: [
              'TypeScript with Node.js & ESBuild runtime',
              'Babel/SWC AST analysis for automated codemods',
              'GitHub Actions CI/CD with automated NPM release pipelines',
              'Jest & Vitest unit verification suites'
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
          period: '2022 — PRESENT',
          role: 'SENIOR SOFTWARE ENGINEER · MOBILE & FULLSTACK',
          company: 'INVILLIA / CASAS BAHIA / BANQI',
          location: 'REMOTE · SÃO PAULO, BR',
          clearance: 'LEVEL-A SENIOR CLEARANCE',
          description:
            'Leading core mobile and frontend engineering initiatives for banQi digital bank within Grupo Casas Bahia. Spearheading architecture governance, performance auditing, and mission-critical payment workflows.',
          highlights: [
            'Eradicated 98.9% of memory leaks and native crashes on heterogeneous Android fleets.',
            'Spearheaded transition to modular micro-frontends serving 300k+ weekly active transacting users.',
            'Saved $10,000+ monthly in AWS cloud egress and lambda execution costs through aggressive caching.'
          ]
        },
        {
          period: '2021 — 2022',
          role: 'SOFTWARE ENGINEER · FULLSTACK',
          company: 'WIID SOFTWARE',
          location: 'CURITIBA, BR',
          clearance: 'LEVEL-B SYSTEM ARCHITECT',
          description:
            'Engineered resilient web and mobile applications for international logistics and healthcare clients using React, React Native, Node.js, and serverless AWS microservices.',
          highlights: [
            'Built real-time telemetry dashboards processing telemetry for 50,000+ IoT tracking nodes.',
            'Implemented strict LGPD compliant authentication pipelines and automated CI/CD releases.',
            'Mentored junior engineers and instituted rigorous code review standards across the squad.'
          ]
        }
      ]
    },
    skills: {
      sectionTitle: 'SYNAPTIC SKILL MATRIX',
      sectionKanji: '技術シナプス行列',
      categories: [
        {
          category: 'CORE & MOBILE RUNTIMES',
          kanji: '主軸技術',
          skills: [
            { name: 'React Native', level: 98, tag: 'Native Bridges / Hermes' },
            { name: 'TypeScript', level: 96, tag: 'Strict Typing / Generics' },
            { name: 'React / Next.js', level: 95, tag: 'App Router / RSC' },
            { name: 'Kotlin (Android)', level: 85, tag: 'JNI / Native Modules' },
            { name: 'Swift (iOS)', level: 82, tag: 'UIKit / Objective-C Bridge' }
          ]
        },
        {
          category: 'BACKEND & CLOUD INFRASTRUCTURE',
          kanji: '基盤インフラ',
          skills: [
            { name: 'Node.js / Express', level: 92, tag: 'Async I/O / REST' },
            { name: 'GraphQL Federation', level: 90, tag: 'Schema Stitching' },
            { name: 'PostgreSQL / SQL', level: 88, tag: 'Indexing / RLS' },
            { name: 'AWS Cloud Services', level: 88, tag: 'S3 / Lambda / CloudFront' },
            { name: 'Docker / CI/CD', level: 86, tag: 'GitHub Actions / Pipelines' }
          ]
        },
        {
          category: 'ARCHITECTURE & QUALITY',
          kanji: '設計と品質',
          skills: [
            { name: 'System Design', level: 94, tag: 'Distributed Resilience' },
            { name: 'Design Systems', level: 95, tag: 'Token Architecture' },
            { name: 'Unit / E2E Testing', level: 90, tag: 'Jest / Maestro / Detox' },
            { name: 'Performance Profiling', level: 96, tag: 'Hermes / Memory Dumps' }
          ]
        }
      ]
    },
    about: {
      sectionTitle: 'PERSONNEL DOSSIER: J.V. GUERBER',
      sectionKanji: '特務機関員個人記録',
      pilotClassification: 'CHIEF CODE ARCHITECT // CODE DESIGNATION: 03-ALPHA',
      pilotId: 'JVG-1996-DEV',
      dossierText: [
        'João Vinícius Guerber is a Senior Software Engineer specializing in resilient mobile architectures, scalable web ecosystems, and autonomous AI-assisted workflows.',
        'With battle-tested experience in high-volume fintech and digital healthcare, he operates at the boundary of raw low-level performance (Hermes bytecodes, native bridges, memory compaction) and polished, empathetic user experience.',
        'Official GitHub Copilot Certified Architect, committed to clean code, deterministic state machines, and building software systems engineered to endure extreme traffic and scale.'
      ],
      specializations: [
        'High-Scale Fintech & Mobile Super Apps',
        'Offline-First Cryptographic State Engines',
        'Cross-Platform Design System Tokens',
        'Hermes Runtime Profiling & Memory Diagnostics',
        'Generative AI Agent Integration & Workflows'
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
      engineerName: 'JOÃO VINÍCIUS GUERBER',
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
      userTag: 'USER: JVG',
      softwareKatakana: 'ソフトウェア',
      engineerKatakana: 'エンジニア',
      fullName: 'JOÃO VINÍCIUS GUERBER',
      japaneseMotto: 'スケールするプロダクトと体験を構築する',
      englishMotto: 'BUILDING SCALABLE PRODUCTS AND EXPERIENCES',
      bioParagraph:
        'Desenvolvo aplicações de grande escala com foco em performance, arquitetura sólida e experiência do usuário. Atualmente trabalho com React Native, React, TypeScript e soluções na nuvem.',
      btnViewProjects: 'VER PROJETOS',
      btnDownloadCv: 'BAIXAR CV',
      coreSkillsTitle: 'CORE SKILLS',
      coreSkillsKanji: '主要スキル',
      coreSkills: [
        'React / React Native',
        'TypeScript',
        'Kotlin / Swift',
        'Node.js',
        'AWS',
        'System Design'
      ]
    },
    rightHud: {
      evaUnit: 'EVA 01',
      evaKanji: '初号機',
      standbyStatus: 'STANDBY',
      activeStatus: 'COMBATE ATIVO',
      testType: 'TEST TYPE: EVA-01',
      pilotLabel: 'PILOT: 03 (J.V. GUERBER)',
      pilotValue: 'SYNC: 99.4%',
      syncLabel: 'SYNC:',
      syncValue: '99.4%',
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
      items: [
        {
          id: 'banqi-app',
          number: '01',
          title: 'BanQi App',
          organization: 'Grupo Casas Bahia',
          tagline: 'Super app financeiro com +300k usuários ativos semanais.',
          description:
            'Super app financeiro com +300k usuários ativos semanais. Liderança em engenharia mobile, aceleração de inicialização e contenção de vazamentos de memória nativa.',
          tags: ['React Native', 'TypeScript', 'GraphQL'],
          threatLevel: 'INFRAESTRUTURA CRÍTICA CLASSE-A',
          operationalStatus: 'EM PRODUÇÃO & OPERACIONAL',
          metrics: [
            { label: 'Crash Rate', value: '4.8% → 0.05%' },
            { label: 'Cold Boot', value: '6.2s → 1.5s' },
            { label: 'Economia Nuvem', value: '+$10k / mês' }
          ],
          fullDetails: {
            challenge:
              'Super app financeiro de grande escala sofrendo com fechamentos repentinos em dispositivos Android básicos, tempo de inicialização excessivo (6.2s) e gargalos de memória sob picos de transações.',
            solution:
              'Estruturação de micro-frontends modulares com motor Hermes pré-compilado, rastreamento contínuo de heap, cache granular em GraphQL e sincronização offline resiliente.',
            impact:
              'Queda de 98.9% no crash rate (de 4.8% para <0.05%). Inicialização a frio reduzida de 6.2s para 1.5s. Nota do app nas lojas saltou de 3.2 para 4.7 estrelas.',
            architecture: [
              'React Native 0.72+ com Hermes Engine otimizado',
              'GraphQL Federation & Apollo Client com cache offline',
              'Pontes nativas Kotlin / Swift para criptografia biométrica',
              'Telemetria em tempo real com Datadog RUM e Sentry'
            ]
          }
        },
        {
          id: 'guepsi-saas',
          number: '02',
          title: 'Guepsi',
          organization: 'SaaS para psicólogos',
          tagline: 'Plataforma de gestão de pacientes com foco em privacidade (LGPD).',
          description:
            'Plataforma de prontuários clínicos e gestão para psicólogos com conformidade criptográfica integral à LGPD/HIPAA, telemetria financeira e agenda inteligente.',
          tags: ['Next.js', 'PostgreSQL', 'AWS'],
          threatLevel: 'PROTOCOLO DE SIGILO ABSOLUTO // 極秘',
          operationalStatus: 'ATIVO EM PRODUÇÃO',
          metrics: [
            { label: 'Conformidade', value: '100% LGPD/HIPAA' },
            { label: 'Latência', value: '<85ms Global' },
            { label: 'Disponibilidade', value: '99.98%' }
          ],
          fullDetails: {
            challenge:
              'Clínicas e psicólogos necessitavam de uma ferramenta confiável de anotações clínicas com isolamento total de dados de saúde mental conforme exigências legais da LGPD.',
            solution:
              'Desenvolvimento de arquitetura serverless em Next.js App Router na AWS com criptografia em nível de linha (RLS) no PostgreSQL e cofre criptográfico AES-256.',
            impact:
              'Zero incidentes de vazamento, total aderência aos órgãos regulatórios e adoção contínua por centenas de psicólogos em todo o Brasil.',
            architecture: [
              'Next.js 14 App Router com React Server Components',
              'PostgreSQL com Row Level Security (RLS) e AES-256',
              'Infraestrutura AWS (Lambda, S3 Encrypted, CloudFront)',
              'Conciliação automatizada de pagamentos PIX e cartões'
            ]
          }
        },
        {
          id: 'tools-library',
          number: '03',
          title: 'Biblioteca de Tools',
          organization: 'Projetos e ferramentas',
          tagline: 'Projetos pessoais para desenvolvimento e produtividade.',
          description:
            'Conjunto de ferramentas CLI, utilitários open-source e automações criadas para acelerar o fluxo diário de desenvolvimento e testes.',
          tags: ['TypeScript', 'Node.js', 'DevTools'],
          threatLevel: 'ARTEFATO DA DIVISÃO DE PESQUISA',
          operationalStatus: 'REPOSITÓRIO PÚBLICO',
          metrics: [
            { label: 'Velocidade Dev', value: '+45% Ganho' },
            { label: 'Cobertura Testes', value: '95%+ Auditada' },
            { label: 'Dependências', value: 'Zero Bloat' }
          ],
          fullDetails: {
            challenge:
              'Tarefas repetitivas de configuração de boilerplate, sincronização manual de tokens entre Figma e código, e geração lenta de mocks atrasavam a entrega de features.',
            solution:
              'Criação de CLIs modulares em TypeScript, analisadores automáticos de AST, exportadores de design tokens e geradores sintéticos de dados locais.',
            impact:
              'Ganho de 45% de agilidade em kick-off de novas funcionalidades, eliminação de discrepâncias de design e código, e publicação em repositórios abertos.',
            architecture: [
              'TypeScript com Node.js e runtime ESBuild',
              'Análise e transformação de código via AST Babel/SWC',
              'Pipelines automatizados de CI/CD com GitHub Actions',
              'Baterias de validação com Jest e Vitest'
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
          period: '2022 — PRESENTE',
          role: 'SENIOR SOFTWARE ENGINEER · MOBILE & FULLSTACK',
          company: 'INVILLIA / CASAS BAHIA / BANQI',
          location: 'REMOTO · SÃO PAULO, BR',
          clearance: 'CREDENCIAL NÍVEL-A',
          description:
            'Liderança técnica em engenharia mobile e frontend do banco digital banQi no Grupo Casas Bahia. Governança arquitetural, otimização de performance e fluxos críticos de pagamento.',
          highlights: [
            'Erradicação de 98.9% de crashes e memory leaks em dispositivos móveis Android heterogêneos.',
            'Condução da migração para micro-frontends atendendo mais de 300 mil usuários ativos semanais.',
            'Economia superior a $10.000 mensais em custos de infraestrutura AWS através de caching avançado.'
          ]
        },
        {
          period: '2021 — 2022',
          role: 'SOFTWARE ENGINEER · FULLSTACK',
          company: 'WIID SOFTWARE',
          location: 'CURITIBA, BR',
          clearance: 'CREDENCIAL NÍVEL-B',
          description:
            'Desenvolvimento de aplicações web e mobile de alta disponibilidade para logística e telemedicina, utilizando React, React Native, Node.js e microsserviços na nuvem AWS.',
          highlights: [
            'Painéis de telemetria em tempo real consumindo eventos de mais de 50.000 nós de rastreamento IoT.',
            'Implementação de fluxos de autenticação seguros em conformidade com a LGPD e deploys contínuos.',
            'Mentoria técnica de engenheiros juniores e instituição de práticas consistentes de code review.'
          ]
        }
      ]
    },
    skills: {
      sectionTitle: 'MATRIZ DE COMPETÊNCIAS SINÁPTICAS',
      sectionKanji: '技術シナプス行列',
      categories: [
        {
          category: 'CORE & MOBILE RUNTIMES',
          kanji: '主軸技術',
          skills: [
            { name: 'React Native', level: 98, tag: 'Native Bridges / Hermes' },
            { name: 'TypeScript', level: 96, tag: 'Tipagem Estrita / Generics' },
            { name: 'React / Next.js', level: 95, tag: 'App Router / RSC' },
            { name: 'Kotlin (Android)', level: 85, tag: 'JNI / Módulos Nativos' },
            { name: 'Swift (iOS)', level: 82, tag: 'UIKit / Objective-C Bridge' }
          ]
        },
        {
          category: 'BACKEND & INFRAESTRUTURA CLOUD',
          kanji: '基盤インフラ',
          skills: [
            { name: 'Node.js / Express', level: 92, tag: 'I/O Assíncrono / REST' },
            { name: 'GraphQL Federation', level: 90, tag: 'Schema Stitching' },
            { name: 'PostgreSQL / SQL', level: 88, tag: 'Indexação / RLS' },
            { name: 'Serviços de Nuvem AWS', level: 88, tag: 'S3 / Lambda / CloudFront' },
            { name: 'Docker / CI/CD', level: 86, tag: 'GitHub Actions / Pipelines' }
          ]
        },
        {
          category: 'ARQUITETURA & QUALIDADE',
          kanji: '設計と品質',
          skills: [
            { name: 'System Design', level: 94, tag: 'Resiliência Distribuída' },
            { name: 'Design Systems', level: 95, tag: 'Tokens e Consistência' },
            { name: 'Testes Unitários & E2E', level: 90, tag: 'Jest / Maestro / Detox' },
            { name: 'Otimização de Performance', level: 96, tag: 'Hermes / Heap Profiling' }
          ]
        }
      ]
    },
    about: {
      sectionTitle: 'DOSSIÊ DE PESSOAL: J.V. GUERBER',
      sectionKanji: '特務機関員個人記録',
      pilotClassification: 'ARQUITETO DE SOFTWARE SÊNIOR // DESIGNATIVO: 03-ALPHA',
      pilotId: 'JVG-1996-DEV',
      dossierText: [
        'João Vinícius Guerber é Engenheiro de Software Sênior especializado em arquiteturas mobile resilientes, ecossistemas web escaláveis e fluxos de trabalho assistidos por inteligência artificial.',
        'Com atuação em fintechs de grande porte e saúde digital, atua na convergência entre performance extrema de baixo nível (Hermes bytecodes, pontes nativas, compactação de memória) e refinamento na experiência do usuário.',
        'Certificado oficialmente como GitHub Copilot Certified, comprometido com código limpo, máquinas de estado determinísticas e engenharia de software preparada para tráfego em hiperescala.'
      ],
      specializations: [
        'Fintechs de Alta Escala & Super Apps Mobile',
        'Motores de Estado Offline-First Criptografados',
        'Design Systems Multiplataforma Orientados a Tokens',
        'Diagnósticos de Memória e Profiling Hermes',
        'Integração e Automação com Agentes de IA'
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

import type { Translations } from './types';
import mobileArchImg from '../assets/mobile_architecture.jpg';
import aiWorkflowImg from '../assets/ai_workflow.jpg';
import designSystemImg from '../assets/design_system.jpg';

export const translations: Record<'en' | 'pt', Translations> = {
  en: {
    nav: {
      metrics: 'Metrics',
      cases: 'Case Studies',
      trajectory: 'Experience',
      skills: 'Tech Stack',
      contact: 'Contact',
      connectBtn: 'Connect',
      roleBadge: 'Senior Mobile & Web'
    },
    hero: {
      badgeRole: 'Senior Software Engineer • Front-end & Mobile Specialist',
      badgeYears: '5 Years of Experience',
      headlinePrefix: 'Mobile engineering built for ',
      headlineHighlight: 'rock-solid stability',
      headlineSuffix: ' and extreme performance.',
      subtitleHtml: 'Specialist in modernizing large-scale <strong>React Native</strong> applications, integrating native modules in <strong class="text-cyan-300 font-medium">Kotlin</strong> and <strong class="text-purple-300 font-medium">Swift</strong>, eradicating critical technical debt, and accelerating cycles with <strong class="text-indigo-300 font-medium">intelligent AI workflows</strong>.',
      statStabilityLabel: 'Stability',
      statStabilityValue: '-98% Crashes',
      statStabilitySub: 'From 120k to 2k/week',
      statMemoryLabel: 'Memory',
      statMemoryValue: '-55% RAM',
      statMemorySub: '900MB down to 400MB',
      statStartupLabel: 'Startup',
      statStartupValue: '-75% Time',
      statStartupSub: '60s to 15s cold start',
      statInnovationLabel: 'Innovation',
      statInnovationValue: 'AI Dev Tools',
      statInnovationSub: 'PR & Test Automation',
      ctaMetrics: 'Explore Real Metrics',
      ctaProjects: 'Case Studies',
      ctaLinkedin: 'View LinkedIn',
      techCoreLabel: 'Tech Core:'
    },
    impact: {
      badge: 'RESULTS-DRIVEN ENGINEERING',
      title: 'Metrics that prove technical impact.',
      subtitle: 'Audited numbers on performance, scale stability, and financial efficiency achieved through technical leadership and modernization of major digital products.',
      viewDetails: 'View details',
      detailedCaseBadge: 'DETAILED TECHNICAL CASE',
      businessImpactTitle: 'Business Impact:',
      businessImpactText: 'Guarantees active user retention, flawless transaction execution in banking workflows, and a dramatic drop in customer support tickets.',
      engineeringStrategyTitle: 'Engineering Strategy & Applied Solutions:',
      productionValidation: '✔ Production Validated',
      productionScale: 'High-volume enterprise scale (millions of downloads)',
      stackLabel: 'Stack: React Native + Kotlin/Swift',
      metrics: [
        {
          id: 'crashes',
          metric: '-98%',
          label: 'Weekly Crash Reduction',
          sublabel: 'From 120,000 down to 2,000 crashes per week',
          description: 'Deep architectural stabilization of the banQi app (Casas Bahia Group), eradicating unhandled native exceptions and critical runtime bottlenecks.',
          technicalHow: [
            'Rigorous audit of asynchronous native bridge invocations across React Native modules',
            'Implementation of resilient Error Boundaries and defensive payload handling',
            'Real-time telemetry monitoring with Dynatrace and Databricks for rapid edge-case isolation'
          ],
          impactCategory: 'stability'
        },
        {
          id: 'ram',
          metric: '-55%',
          label: 'RAM Footprint Optimization',
          sublabel: 'From 900MB down to 400MB memory usage',
          description: 'Systematic elimination of memory leaks and complete re-engineering of heavy visual components.',
          technicalHow: [
            'Replaced unconstrained list re-renders with optimized virtualized lists',
            'Proper deallocation of unreleased native listeners and bitmaps across Android/iOS lifecycles',
            'Deep profiling sessions using Android Studio Profiler and Xcode Instruments'
          ],
          impactCategory: 'performance'
        },
        {
          id: 'startup',
          metric: '-75%',
          label: 'Startup Latency (Splash to Home)',
          sublabel: 'From 60 seconds down to 15 seconds',
          description: 'Drastic acceleration of Cold Start and Hot Start performance across entry-level to flagship smartphones.',
          technicalHow: [
            'Aggressive code-splitting and lazy-loading of heavy modules blocking the main JS thread',
            'Optimization of the Hermes JavaScript bundle and pre-warming of critical API connections',
            'Deferred non-critical third-party SDK initializations to background threads'
          ],
          impactCategory: 'performance'
        },
        {
          id: 'cost',
          metric: '+$10k',
          label: 'Annual Cloud Savings',
          sublabel: 'Direct infrastructure cost reduction on AWS',
          description: 'Refactoring of legacy app-to-cloud communication flows and mobile network payload optimization.',
          technicalHow: [
            'Consolidation and debouncing of redundant client-side network calls',
            'Fine-tuning container allocation and CI/CD automated build runtimes',
            'Significant reduction of data egress and unnecessary serverless invocation bursts'
          ],
          impactCategory: 'financial'
        },
        {
          id: 'tests',
          metric: '0% → 40%',
          label: 'Automated Test Coverage',
          sublabel: '100% build reliability in production releases',
          description: 'Led technical and cultural transformation by embedding strict CI/CD pipelines and engineering excellence practices.',
          technicalHow: [
            'Engineered unit and integration test suites using Jest and Vitest covering critical money-movement flows',
            'Established automated quality gates blocking regressions in GitHub Actions and Azure DevOps',
            'Mentored developers in clean code practices, SOLID design principles, and pragmatic TDD'
          ],
          impactCategory: 'quality'
        }
      ]
    },
    cases: {
      badge: 'APPLIED ARCHITECTURE & REAL-WORLD IMPACT',
      title: 'Featured Case Studies',
      subtitle: 'Deep-dives into mission-critical challenges solved with high engineering standards, native bridging, and automated delivery.',
      problemLabel: 'Technical & Business Challenge:',
      solutionLabel: 'Engineered Solution:',
      keyResultsLabel: 'Quantifiable Results:',
      technologiesLabel: 'Core Technologies:',
      studies: [
        {
          id: 'banqi-modernization',
          title: 'Hyper-scale Modernization & Stabilization',
          clientOrProject: 'banQi — Casas Bahia Group',
          badge: 'Mobile Engineering Lead',
          image: mobileArchImg,
          summary: 'Systemic re-engineering of one of Brazil’s largest retail financial services apps, delivering critical stability to millions of active users.',
          problem: 'The app suffered from massive crash spikes (120,000/week), prohibitive memory consumption (900MB) causing out-of-memory terminations on entry-level devices, and startup latencies exceeding 60 seconds.',
          solution: 'Led architectural refactoring of legacy mobile flows, native bridging in Kotlin/Swift, enterprise mobile security integration (RASP via AppDome), and automated continuous delivery with Fastlane.',
          results: [
            '98% reduction in weekly crash occurrences (120k → 2k)',
            '55% drop in memory footprint (900MB → 400MB)',
            'Splash-to-home startup cut from 60s to 15s (-75%)',
            '$10,000 annual cloud infrastructure savings on AWS'
          ],
          technologies: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Fastlane', 'AppDome (RASP)', 'Azure DevOps', 'Jest']
        },
        {
          id: 'ai-engineering-workflow',
          title: 'AI-Driven Engineering Automation',
          clientOrProject: 'Strategic Innovation & Developer Velocity',
          badge: 'AI Dev Tools & Workflow',
          image: aiWorkflowImg,
          summary: 'Engineered custom developer tooling and AI agents to accelerate software delivery cycles, automated code reviews, and test generation.',
          problem: 'Severe bottlenecks in manual review of repetitive PRs, time-intensive authoring of business and technical artifacts (KRs, User Stories, Technical Blueprints), and gaps in automated test coverage.',
          solution: 'Constructed technical prompts and automated AI pipelines performing preliminary diff reviews, flagging potential regressions, and generating scaffolded Jest/Vitest test suites alongside technical specs.',
          results: [
            'Drastic reduction in technical documentation and blueprint overhead',
            'Accelerated PR turnaround and faster sign-offs across cross-functional teams',
            'Substantial increase in test scenario coverage with Jest and Vitest'
          ],
          technologies: ['GitHub Copilot', 'Generative AI', 'Custom Agents', 'CI/CD Automation', 'TypeScript', 'Prompt Engineering']
        },
        {
          id: 'design-system-crossplatform',
          title: 'Cross-Platform Design System & Native Bridges',
          clientOrProject: 'banQi & WiiD',
          badge: 'Design System & Architecture',
          image: designSystemImg,
          summary: 'Created and scaled a unified multiplatform design system across Mobile and Web, speeding up feature delivery with pixel-perfect visual consistency.',
          problem: 'Visual and behavioral divergence between Android, iOS, and Web apps, accompanied by duplicate codebases, responsive rendering anomalies, and slow design-to-code translation.',
          solution: 'Developed a decoupled, strongly typed TypeScript component library powered by centralized design tokens and native bridges for platform-specific OS interactions.',
          results: [
            'Standardized hundreds of reusable components across mobile and web platforms',
            '2x acceleration in feature prototyping and release velocity',
            'Robust visual and unit testability guaranteed with Jest and Vitest'
          ],
          technologies: ['React Native', 'React', 'Next.js', 'Expo', 'TypeScript', 'Design Systems', 'Jest', 'Vitest']
        }
      ]
    },
    experience: {
      badge: 'CAREER TRAJECTORY',
      title: 'Experience & Technical Evolution',
      subtitle: '5 years of consistent delivery, expanding technical leadership, and execution across high-paced enterprise environments.',
      currentPositionBadge: 'CURRENT POSITION',
      clientPrefix: 'Client:',
      expandDetailsAria: 'Expand details',
      responsibilitiesTitle: 'Key Responsibilities & Deliverables:',
      items: [
        {
          id: 'invillia-senior',
          company: 'Invillia',
          role: 'Senior Software Engineer (Front-end & Mobile)',
          period: 'Sep 2025 – Present',
          client: 'banQi (Casas Bahia Group)',
          current: true,
          summary: 'Serving as the technical reference for mobile and front-end engineering on the banQi product, driving critical performance, architecture, and resilience initiatives.',
          responsibilities: [
            'Hyper-scale system stabilization: reduced weekly crash volume by 98% and slashed RAM consumption by 55%.',
            'Accelerated application cold-start startup from splash to interactive home by 75% via React Native and native module re-engineering.',
            'Quality engineering transformation: elevated test coverage from 0% to 40% with 100% CI/CD build reliability.',
            'Strategic AI innovation: developed custom tooling for automated pull request reviews, unit test synthesis, and engineering documentation (KRs, User Stories, Blueprints).',
            'Modernized legacy mobile-to-cloud architectures, yielding $10,000/year in cloud infrastructure savings.',
            'Acted as a strategic partner to Product Managers and Staff Engineers on product discovery, CI/CD pipeline governance (Fastlane, GitHub Actions, Azure DevOps), and mobile RASP security (AppDome).'
          ],
          technologies: ['React Native', 'React', 'TypeScript', 'Kotlin', 'Swift', 'Fastlane', 'GitHub Actions', 'Azure DevOps', 'Jest', 'AppDome', 'AWS']
        },
        {
          id: 'invillia-mid',
          company: 'Invillia',
          role: 'Mid-Level Software Engineer (Front-end & Mobile)',
          period: 'Sep 2024 – Sep 2025',
          client: 'banQi - Casas Bahia Pay (Casas Bahia Group)',
          current: false,
          summary: 'Delivered resilient mobile applications, low-level native module integrations, and continuous evolution of the shared multiplatform Design System.',
          responsibilities: [
            'Contributed to system design and construction of reusable cross-platform design systems across mobile and web.',
            'Engineered and maintained custom native modules for React Native in Kotlin (Android) and Swift (iOS).',
            'Ensured technical excellence following Clean Code, SOLID principles, and comprehensive unit and integration testing.'
          ],
          technologies: ['React Native', 'React', 'TypeScript', 'Kotlin', 'Swift', 'Fastlane', 'GitHub Actions', 'Azure DevOps', 'Jest', 'AppDome']
        },
        {
          id: 'wiid-mid',
          company: 'WiiD – Work in Ideas',
          role: 'Mid-Level Mobile & Front-end Developer',
          period: 'Jan 2024 – Sep 2024',
          current: false,
          summary: 'Developed multiplatform digital products with emphasis on high-tier user experience, performance optimization, and extensive test coverage.',
          responsibilities: [
            'Engineered and maintained cross-platform applications with React, Next.js, and React Native (Expo), delivering high visual fidelity and smooth interactions.',
            'Held end-to-end feature ownership from Figma designs to production deployment.',
            'Constructed automated unit testing suites with Jest and Vitest, while mentoring junior developers and interns.'
          ],
          technologies: ['React', 'React Native', 'Next.js', 'Expo', 'TypeScript', 'Jest', 'Vitest', 'Kanban']
        },
        {
          id: 'wiid-junior',
          company: 'WiiD – Work in Ideas',
          role: 'Junior Front-end Developer',
          period: 'Dec 2021 – Jan 2024',
          current: false,
          summary: 'Launched professional career building scalable web and mobile user interfaces across the TypeScript and React ecosystems.',
          responsibilities: [
            'Developed and maintained interactive web and mobile features using React, React Native, and TypeScript.',
            'Authored unit tests using Jest to maintain software stability and clean coding standards.'
          ],
          technologies: ['React', 'React Native', 'TypeScript', 'Jest', 'JavaScript', 'HTML5/CSS3']
        }
      ]
    },
    tech: {
      badge: 'TECHNICAL MASTERY & ARCHITECTURE',
      title: 'Tech Stack & Core Specialties',
      subtitle: 'Ecosystem of production-proven technologies focused on system depth, security, automation, and high throughput.',
      allAreas: 'All Areas',
      searchPlaceholder: 'Filter technology...',
      toolsCountSuffix: 'tools & frameworks',
      enterpriseBadge: 'Enterprise production',
      activeStatus: 'Active',
      categories: [
        {
          id: 'mobile',
          name: 'Mobile & Native Modules',
          description: 'Primary specialty developing large-scale apps, high-performance UI, and low-level native bridges.',
          skills: [
            { name: 'React Native', tag: 'Core' },
            { name: 'Kotlin (Android)', tag: 'Native' },
            { name: 'Swift (iOS)', tag: 'Native' },
            { name: 'Expo', tag: 'Mobile' },
            { name: 'Native Modules', tag: 'Bridge' },
            { name: 'Java', tag: 'Android' },
            { name: 'Objective-C', tag: 'iOS' },
            { name: 'AppDome (RASP)', tag: 'Security' }
          ]
        },
        {
          id: 'frontend',
          name: 'Front-end & Modern Web',
          description: 'Building blazing-fast, reactive web applications with scalable modular component architectures.',
          skills: [
            { name: 'React', tag: 'Core' },
            { name: 'Next.js', tag: 'SSR/SSG' },
            { name: 'TypeScript', tag: 'Language' },
            { name: 'Design Systems', tag: 'UI/UX' },
            { name: 'Tailwind CSS', tag: 'Styling' },
            { name: 'Three.js / 3D Web', tag: 'Visuals' },
            { name: 'JavaScript (ES6+)', tag: 'Language' },
            { name: 'Web Performance', tag: 'Vitals' }
          ]
        },
        {
          id: 'devops',
          name: 'DevOps, Cloud & Automation',
          description: 'Continuous pipelines, mobile release automation, and cloud infrastructure cost optimization.',
          skills: [
            { name: 'Fastlane', tag: 'Mobile CI' },
            { name: 'GitHub Actions', tag: 'CI/CD' },
            { name: 'Azure DevOps', tag: 'Pipelines' },
            { name: 'AWS Cloud', tag: 'Cloud' },
            { name: 'Docker', tag: 'Containers' },
            { name: 'Databricks', tag: 'Data' },
            { name: 'Dynatrace', tag: 'APM' },
            { name: 'AI Workflow Dev', tag: 'AI Ops' }
          ]
        },
        {
          id: 'quality',
          name: 'Quality, Architecture & Methods',
          description: 'Software engineering best practices ensuring resilient, maintainable, and reliable systems.',
          skills: [
            { name: 'Jest', tag: 'Testing' },
            { name: 'Vitest', tag: 'Testing' },
            { name: 'Clean Code', tag: 'Best Practices' },
            { name: 'SOLID Principles', tag: 'Architecture' },
            { name: 'Design Patterns', tag: 'Architecture' },
            { name: 'System Design', tag: 'Architecture' },
            { name: 'Scrum & Kanban', tag: 'Agile' },
            { name: 'Code Review & Mentoring', tag: 'Leadership' }
          ]
        }
      ]
    },
    educationSection: {
      badge: 'CERTIFICATIONS & EDUCATION',
      title: 'Solid Foundations & Verified Credentials',
      subtitle: 'Cutting-edge certifications, higher education in information technology, and bilingual communication.',
      officialCertsTitle: 'Education & Official Certifications',
      mentorshipTitle: 'Technical Leadership & Mentorship',
      mentorshipText: 'Active hands-on involvement in rigorous code reviews, championing Clean Code standards, bridging product engineering with business stakeholders, and accelerating junior engineers.',
      languagesTitle: 'Languages & Global Reach',
      mobileSecurityTitle: 'Mobile Application Security',
      mobileSecurityText: 'Practical experience with RASP (Runtime Application Self-Protection) using AppDome in highly regulated banking environments.',
      educationItems: [
        {
          institution: 'GitHub',
          title: 'GitHub Copilot Certified',
          period: '2025 – 2028',
          badge: 'Official Certification',
          description: 'Validation of technical mastery in AI-assisted development, prompt/context engineering, and software automation workflows.'
        },
        {
          institution: 'Uninter',
          title: 'Systems Analysis and Development',
          period: '2019 – 2021',
          badge: 'Higher Education Degree',
          description: 'Rigorous foundation in computer science, database modeling, software engineering methodologies, and algorithmic structures.'
        }
      ],
      languagesList: [
        { name: 'Portuguese', level: 'Native', desc: 'Fluent communication for technical leadership, high-stakes presentations, and stakeholder alignment.' },
        { name: 'English', level: 'B2 – Upper Intermediate', desc: 'Proven ability to thrive in international teams, write comprehensive architectural specs, and lead technical discussions.' }
      ]
    },
    contact: {
      badge: "LET'S TALK",
      title: 'Ready to elevate the stability and performance of your product?',
      subtitle: 'Open to senior engineering roles, mobile tech lead positions, high-scale digital challenges, and consulting in React Native and AI workflows.',
      directEmailLabel: 'Direct Email',
      copyBtn: 'Copy',
      copiedBtn: 'Copied!',
      formTitle: 'Send a Quick Message',
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g. Sarah Connor',
      emailLabel: 'Your Contact Email',
      emailPlaceholder: 'sarah@company.com',
      messageLabel: 'Message / Opportunity',
      messagePlaceholder: 'I would like to discuss a Senior Software Engineer opportunity...',
      sendBtn: 'Send Message via Email',
      copyrightRights: 'All rights reserved.',
      builtWith: 'Crafted with React, Vite, Three.js & Tailwind',
      scrollTopAria: 'Back to top',
      emailSubject: 'Portfolio Inquiry'
    }
  },
  pt: {
    nav: {
      metrics: 'Métricas',
      cases: 'Casos Reais',
      trajectory: 'Trajetória',
      skills: 'Tech Stack',
      contact: 'Contato',
      connectBtn: 'Conectar',
      roleBadge: 'Senior Mobile & Web'
    },
    hero: {
      badgeRole: 'Senior Software Engineer • Front-end & Mobile Specialist',
      badgeYears: '5 Anos de Experiência',
      headlinePrefix: 'Engenharia mobile de ',
      headlineHighlight: 'alta estabilidade',
      headlineSuffix: ' e performance extrema.',
      subtitleHtml: 'Especialista em modernizar aplicações <strong class="text-white font-semibold">React Native</strong> em larga escala, integrando módulos nativos em <strong class="text-cyan-300 font-medium">Kotlin</strong> e <strong class="text-purple-300 font-medium">Swift</strong>, erradicando débitos técnicos críticos e acelerando ciclos com <strong class="text-indigo-300 font-medium">automação inteligente com IA</strong>.',
      statStabilityLabel: 'Estabilidade',
      statStabilityValue: '-98% Crashes',
      statStabilitySub: 'De 120k para 2k/sem',
      statMemoryLabel: 'Memória',
      statMemoryValue: '-55% RAM',
      statMemorySub: '900MB para 400MB',
      statStartupLabel: 'Startup',
      statStartupValue: '-75% Tempo',
      statStartupSub: '60s para 15s cold start',
      statInnovationLabel: 'Inovação',
      statInnovationValue: 'AI Dev Tools',
      statInnovationSub: 'Automação de PRs & Testes',
      ctaMetrics: 'Explorar Métricas Reais',
      ctaProjects: 'Casos de Sucesso',
      ctaLinkedin: 'Ver LinkedIn',
      techCoreLabel: 'Tech Core:'
    },
    impact: {
      badge: 'ENGENHARIA ORIENTADA A RESULTADOS',
      title: 'Métricas que comprovam o impacto técnico.',
      subtitle: 'Números auditados de performance, estabilidade de escala e eficiência financeira conquistados na liderança e modernização de grandes produtos.',
      viewDetails: 'Ver detalhes',
      detailedCaseBadge: 'CASO TÉCNICO DETALHADO',
      businessImpactTitle: 'Impacto no Negócio:',
      businessImpactText: 'Garante retenção de usuários ativos, estabilidade nas transações bancárias e redução drástica de chamados de suporte técnico.',
      engineeringStrategyTitle: 'Estratégia de Engenharia e Soluções Aplicadas:',
      productionValidation: '✔ Validação em Produção',
      productionScale: 'Ambiente de alta volumetria (milhões de downloads)',
      stackLabel: 'Stack: React Native + Kotlin/Swift',
      metrics: [
        {
          id: 'crashes',
          metric: '-98%',
          label: 'Redução de Crashes Semanais',
          sublabel: 'De 120.000 para 2.000 crashes semanais',
          description: 'Estabilização profunda de arquitetura no app banQi (Grupo Casas Bahia), eliminando exceções não tratadas e pontos críticos de falha.',
          technicalHow: [
            'Auditoria minuciosa de chamadas nativas assíncronas no React Native bridge',
            'Implementação de Error Boundaries resilientes e tratamento defensivo de payloads',
            'Monitoramento em tempo real com Dynatrace e Databricks para isolamento de edge-cases'
          ],
          impactCategory: 'stability'
        },
        {
          id: 'ram',
          metric: '-55%',
          label: 'Otimização de Consumo de RAM',
          sublabel: 'De 900MB para 400MB de footprint de memória',
          description: 'Erradicação sistemática de memory leaks e reengenharia de componentes visuais pesados.',
          technicalHow: [
            'Substituição de renderizações infinitas por virtualização eficiente de listas',
            'Desalocação de listeners nativos e bitmaps não liberados no ciclo de vida Android/iOS',
            'Profiling avançado com Android Studio Profiler e Xcode Instruments'
          ],
          impactCategory: 'performance'
        },
        {
          id: 'startup',
          metric: '-75%',
          label: 'Tempo de Inicialização (Splash to Home)',
          sublabel: 'De 60 segundos para 15 segundos',
          description: 'Aceleração brutal do Cold Start e Hot Start do aplicativo em aparelhos de entrada e topo de linha.',
          technicalHow: [
            'Code-splitting e lazy loading de módulos pesados que bloqueavam a thread principal',
            'Otimização do bundle JavaScript Hermes e pré-aquecimento de conexões de API',
            'Migração de inicializações pesadas de SDKs terceiros para execução em background'
          ],
          impactCategory: 'performance'
        },
        {
          id: 'cost',
          metric: '+$10k',
          label: 'Economia Anual de Nuvem',
          sublabel: 'Redução direta em infraestrutura AWS',
          description: 'Refatoração de fluxos legados de comunicação app-backend e otimização do tráfego de rede.',
          technicalHow: [
            'Otimização e agregação de chamadas de rede redundantes no client-side',
            'Ajuste fino de alocação de instâncias e pipelines de entrega contínua',
            'Redução drástica de egress de dados e processamento desnecessário de lambdas'
          ],
          impactCategory: 'financial'
        },
        {
          id: 'tests',
          metric: '0% → 40%',
          label: 'Cobertura de Testes Automatizados',
          sublabel: '100% de confiabilidade em builds de produção',
          description: 'Transição cultural e técnica estabelecendo esteiras CI/CD rígidas e cultura de qualidade de engenharia.',
          technicalHow: [
            'Implementação de suítes de testes unitários com Jest e Vitest para fluxos críticos',
            'Quality gates automáticos em pull requests no GitHub Actions e Azure DevOps',
            'Mentoria técnica de desenvolvedores com padrões de código limpo e TDD prático'
          ],
          impactCategory: 'quality'
        }
      ]
    },
    cases: {
      badge: 'ARQUITETURA APLICADA & CASOS REAIS',
      title: 'Projetos em Destaque',
      subtitle: 'Estudos aprofundados sobre desafios complexos resolvidos com rigor técnico, pontes nativas e automações de ponta.',
      problemLabel: 'Desafio Técnico & de Negócio:',
      solutionLabel: 'Solução de Engenharia:',
      keyResultsLabel: 'Resultados Quantificáveis:',
      technologiesLabel: 'Tecnologias-Chave:',
      studies: [
        {
          id: 'banqi-modernization',
          title: 'Modernização & Estabilização em Hiperescala',
          clientOrProject: 'banQi — Casas Bahia Group',
          badge: 'Mobile Engineering Lead',
          image: mobileArchImg,
          summary: 'Reengenharia sistêmica de um dos maiores apps de serviços financeiros do varejo brasileiro, impactando milhões de usuários com estabilidade crítica.',
          problem: 'O aplicativo sofria com volume massivo de crashes semanais (120k/semana), consumo proibitivo de memória RAM (900MB) que derrubava aparelhos modestos e lentidão de até 60s no carregamento.',
          solution: 'Liderança técnica na refatoração de fluxos legados, reengenharia de módulos nativos (Kotlin/Swift), introdução de segurança móvel avançada (RASP com AppDome) e esteiras automatizadas de CI/CD com Fastlane.',
          results: [
            'Redução de 98% nos crashes semanais (120k → 2k)',
            'Queda de 55% no consumo de RAM (400MB)',
            'Splash-to-home reduzido de 60s para 15s (-75%)',
            'Economia de $10.000 anuais em infraestrutura de nuvem AWS'
          ],
          technologies: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Fastlane', 'AppDome (RASP)', 'Azure DevOps', 'Jest']
        },
        {
          id: 'ai-engineering-workflow',
          title: 'Automação de Engenharia Orientada a IA',
          clientOrProject: 'Inovação Estratégica & Produtividade',
          badge: 'AI Dev Tools & Workflow',
          image: aiWorkflowImg,
          summary: 'Desenvolvimento de ferramentas customizadas e agentes de IA para aceleração do ciclo de desenvolvimento de software e qualidade de código.',
          problem: 'Altos gargalos de tempo em revisões manuais de PRs repetitivos, elaboração demorada de documentação de negócios (KRs, User Stories e Blueprints) e lacunas em testes unitários.',
          solution: 'Criação de prompts técnicos e pipelines automatizados com IA que realizam análise preliminar de código, identificam potenciais regressões e geram rascunhos de testes e especificações técnicas.',
          results: [
            'Redução substancial do overhead de documentação técnica e de negócio',
            'Aceleração na homologação de pull requests entre times multidisciplinares',
            'Aumento na taxa de geração de cenários de teste Jest e Vitest'
          ],
          technologies: ['GitHub Copilot', 'Generative AI', 'Custom Agents', 'CI/CD Automation', 'TypeScript', 'Prompt Engineering']
        },
        {
          id: 'design-system-crossplatform',
          title: 'Design System & Módulos Multiplataforma',
          clientOrProject: 'banQi & WiiD',
          badge: 'Design System & Architecture',
          image: designSystemImg,
          summary: 'Construção e sustentação de sistemas de design unificados entre Mobile e Web, acelerando o lançamento de novas features com consistência visual rigorosa.',
          problem: 'Inconsistência entre interfaces Android, iOS e Web, com duplicação de componentes, bugs visuais em diferentes densidades de tela e lentidão no design-to-code.',
          solution: 'Desenvolvimento de uma biblioteca de componentes altamente desacoplada, tipada com TypeScript, com suporte a tokens de design e pontes nativas para funcionalidades proprietárias dos sistemas operacionais.',
          results: [
            'Padronização de centenas de componentes reutilizáveis entre plataformas',
            'Velocidade 2x maior na prototipação e entrega de novas features',
            'Testabilidade garantida com Jest e Vitest'
          ],
          technologies: ['React Native', 'React', 'Next.js', 'Expo', 'TypeScript', 'Design Systems', 'Jest', 'Vitest']
        }
      ]
    },
    experience: {
      badge: 'TRAJETÓRIA PROFISSIONAL',
      title: 'Experiência & Evolução Técnica',
      subtitle: '5 anos de consistência, evolução contínua de liderança técnica e entrega em ambientes corporativos de alto ritmo.',
      currentPositionBadge: 'POSIÇÃO ATUAL',
      clientPrefix: 'Cliente:',
      expandDetailsAria: 'Expandir detalhes',
      responsibilitiesTitle: 'Principais Atividades & Entregas:',
      items: [
        {
          id: 'invillia-senior',
          company: 'Invillia',
          role: 'Senior Software Engineer (Front-end & Mobile)',
          period: 'Set 2025 – Presente',
          client: 'banQi (Grupo Casas Bahia)',
          current: true,
          summary: 'Atuação como referência técnica em engenharia mobile e front-end para o cliente banQi, liderando iniciativas críticas de performance, estabilidade e arquitetura.',
          responsibilities: [
            'Estabilização de sistemas em escala: redução de crashes em 98% e corte de 55% de memória RAM.',
            'Aceleração do tempo de carregamento de splash para home em 75% via reengenharia em React Native e módulos nativos.',
            'Cultura de qualidade: transição de 0% para 40% de cobertura de testes com 100% de confiabilidade em builds de CI/CD.',
            'Inovação estratégica com IA: desenvolvimento de ferramentas customizadas para automação de PR reviews, criação de testes e documentações (KRs, User Stories, Blueprints).',
            'Modernização de sistemas legados com otimização de recursos AWS gerando $10.000/ano em economia.',
            'Parceiro estratégico de PMs e Staff Engineers em discovery de produto, gerenciamento de pipelines (Fastlane, GitHub Actions, Azure DevOps) e segurança móvel (RASP via AppDome).'
          ],
          technologies: ['React Native', 'React', 'TypeScript', 'Kotlin', 'Swift', 'Fastlane', 'GitHub Actions', 'Azure DevOps', 'Jest', 'AppDome', 'AWS']
        },
        {
          id: 'invillia-mid',
          company: 'Invillia',
          role: 'Mid-Level Software Engineer (Front-end & Mobile)',
          period: 'Set 2024 – Set 2025',
          client: 'banQi - Casas Bahia Pay (Grupo Casas Bahia)',
          current: false,
          summary: 'Desenvolvimento contínuo de aplicações móveis robustas, integração nativa profunda e evolução do Design System compartilhado.',
          responsibilities: [
            'Contribuição no system design e construção de Design System reutilizável entre plataformas mobile e web.',
            'Criação e manutenção de módulos nativos para React Native em Kotlin (Android) e Swift (iOS).',
            'Garantia de entregas de excelência técnica seguindo princípios de Clean Code, SOLID e testes abrangentes unitários e de integração.'
          ],
          technologies: ['React Native', 'React', 'TypeScript', 'Kotlin', 'Swift', 'Fastlane', 'GitHub Actions', 'Azure DevOps', 'Jest', 'AppDome']
        },
        {
          id: 'wiid-mid',
          company: 'WiiD – Work in Ideas',
          role: 'Mid-Level Mobile & Front-end Developer',
          period: 'Jan 2024 – Set 2024',
          current: false,
          summary: 'Desenvolvimento de produtos digitais multiplataforma com foco em alta experiência de usuário, performance e cobertura de testes.',
          responsibilities: [
            'Desenvolvimento e sustentação de aplicações cross-platform com React, Next.js e React Native (Expo), garantindo alta fidelidade UI/UX.',
            'Ownership completo de features, desde a tradução do design no Figma até o deploy final em produção.',
            'Criação de suítes de testes unitários com Jest e Vitest, além de mentoria técnica para desenvolvedores juniores e estagiários.'
          ],
          technologies: ['React', 'React Native', 'Next.js', 'Expo', 'TypeScript', 'Jest', 'Vitest', 'Kanban']
        },
        {
          id: 'wiid-junior',
          company: 'WiiD – Work in Ideas',
          role: 'Junior Front-end Developer',
          period: 'Dez 2021 – Jan 2024',
          current: false,
          summary: 'Início da trajetória profissional na construção de interfaces web e mobile escaláveis em ecossistema TypeScript e React.',
          responsibilities: [
            'Desenvolvimento e manutenção de produtos web e mobile utilizando React, React Native e TypeScript.',
            'Escrita de testes unitários com Jest para assegurar estabilidade contínua e padrões de qualidade de código.'
          ],
          technologies: ['React', 'React Native', 'TypeScript', 'Jest', 'JavaScript', 'HTML5/CSS3']
        }
      ]
    },
    tech: {
      badge: 'DOMÍNIO TÉCNICO & ARQUITETURA',
      title: 'Tech Stack & Especialidades',
      subtitle: 'Ecossistema de tecnologias dominadas em produção com foco em profundidade, segurança, automação e alto rendimento.',
      allAreas: 'Todas as Áreas',
      searchPlaceholder: 'Filtrar tecnologia...',
      toolsCountSuffix: 'ferramentas',
      enterpriseBadge: 'Produção corporativa',
      activeStatus: 'Ativo',
      categories: [
        {
          id: 'mobile',
          name: 'Mobile & Módulos Nativos',
          description: 'Especialidade central no desenvolvimento de apps de alta escala e módulos nativos de baixo nível.',
          skills: [
            { name: 'React Native', tag: 'Core' },
            { name: 'Kotlin (Android)', tag: 'Native' },
            { name: 'Swift (iOS)', tag: 'Native' },
            { name: 'Expo', tag: 'Mobile' },
            { name: 'Native Modules', tag: 'Bridge' },
            { name: 'Java', tag: 'Android' },
            { name: 'Objective-C', tag: 'iOS' },
            { name: 'AppDome (RASP)', tag: 'Security' }
          ]
        },
        {
          id: 'frontend',
          name: 'Front-end & Web Moderno',
          description: 'Construção de aplicações web velozes, reativas e com arquitetura de componentes escalável.',
          skills: [
            { name: 'React', tag: 'Core' },
            { name: 'Next.js', tag: 'SSR/SSG' },
            { name: 'TypeScript', tag: 'Language' },
            { name: 'Design Systems', tag: 'UI/UX' },
            { name: 'Tailwind CSS', tag: 'Styling' },
            { name: 'Three.js / 3D Web', tag: 'Visuals' },
            { name: 'JavaScript (ES6+)', tag: 'Language' },
            { name: 'Performance Web', tag: 'Vitals' }
          ]
        },
        {
          id: 'devops',
          name: 'DevOps, Cloud & Automação',
          description: 'Pipelines contínuos, automação de esteiras móveis e otimização de infraestrutura em nuvem.',
          skills: [
            { name: 'Fastlane', tag: 'Mobile CI' },
            { name: 'GitHub Actions', tag: 'CI/CD' },
            { name: 'Azure DevOps', tag: 'Pipelines' },
            { name: 'AWS Cloud', tag: 'Cloud' },
            { name: 'Docker', tag: 'Containers' },
            { name: 'Databricks', tag: 'Data' },
            { name: 'Dynatrace', tag: 'APM' },
            { name: 'AI Workflow Dev', tag: 'AI Ops' }
          ]
        },
        {
          id: 'quality',
          name: 'Qualidade, Arquitetura & Métodos',
          description: 'Boas práticas de engenharia de software para sistemas duradouros e confiáveis.',
          skills: [
            { name: 'Jest', tag: 'Testing' },
            { name: 'Vitest', tag: 'Testing' },
            { name: 'Clean Code', tag: 'Best Practices' },
            { name: 'SOLID Principles', tag: 'Architecture' },
            { name: 'Design Patterns', tag: 'Architecture' },
            { name: 'System Design', tag: 'Architecture' },
            { name: 'Scrum & Kanban', tag: 'Agile' },
            { name: 'Code Review & Mentoria', tag: 'Leadership' }
          ]
        }
      ]
    },
    educationSection: {
      badge: 'CERTIFICAÇÕES & FORMAÇÃO',
      title: 'Fundamentos Sólidos & Credenciais',
      subtitle: 'Certificações de fronteira tecnológica, formação acadêmica em tecnologia da informação e comunicação bilíngue.',
      officialCertsTitle: 'Formação & Certificados Oficiais',
      mentorshipTitle: 'Liderança Técnica & Mentoria',
      mentorshipText: 'Experiência ativa em code reviews minuciosos, difusão de Clean Code, facilitação de alinhamento com Product Managers e aceleração técnica de desenvolvedores juniores e estagiários.',
      languagesTitle: 'Idiomas & Atuação',
      mobileSecurityTitle: 'Segurança Móvel',
      mobileSecurityText: 'Experiência prática em proteção RASP (Runtime Application Self-Protection) via AppDome em apps bancários regulados.',
      educationItems: [
        {
          institution: 'GitHub',
          title: 'GitHub Copilot Certified',
          period: '2025 – 2028',
          badge: 'Certificação Oficial',
          description: 'Validação de maestria técnica em desenvolvimento assistido por inteligência artificial, engenharia de contexto e automações em engenharia de software.'
        },
        {
          institution: 'Uninter',
          title: 'Análise e Desenvolvimento de Sistemas',
          period: '2019 – 2021',
          badge: 'Graduação Tecnológica',
          description: 'Fundamentos sólidos de computação, modelagem de banco de dados, engenharia de software e estruturas algorítmicas.'
        }
      ],
      languagesList: [
        { name: 'Português', level: 'Nativo', desc: 'Comunicação fluida para liderança técnica e alinhamento com stakeholders.' },
        { name: 'Inglês', level: 'B2 – Intermediário Superior', desc: 'Capacidade comprovada para atuar em times globais, leitura técnica avançada e escrita arquitetural.' }
      ]
    },
    contact: {
      badge: 'VAMOS CONVERSAR',
      title: 'Pronto para elevar a estabilidade e performance do seu produto?',
      subtitle: 'Aberto a posições seniores, liderança técnica de produtos móveis, projetos de alta escala e consultoria em engenharia de software com React Native e IA.',
      directEmailLabel: 'Email Direto',
      copyBtn: 'Copiar',
      copiedBtn: 'Copiado!',
      formTitle: 'Envie uma Mensagem Rápida',
      nameLabel: 'Seu Nome',
      namePlaceholder: 'Ex: Maria Silva',
      emailLabel: 'Seu Email de Contato',
      emailPlaceholder: 'maria@empresa.com',
      messageLabel: 'Mensagem / Oportunidade',
      messagePlaceholder: 'Gostaria de falar sobre uma oportunidade de Engenheiro Sênior...',
      sendBtn: 'Enviar Mensagem via Email',
      copyrightRights: 'Todos os direitos reservados.',
      builtWith: 'Feito com React, Vite, Three.js & Tailwind',
      scrollTopAria: 'Voltar ao topo',
      emailSubject: 'Contato através do Portfolio -'
    }
  }
};

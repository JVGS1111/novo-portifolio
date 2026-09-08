import type { MetricItem, ExperienceItem, CaseStudyItem, SkillCategory, EducationItem } from '../types';

export const personalInfo = {
  name: 'João Vinícius Guerber',
  fullName: 'João Vinícius Guerber de Souza',
  title: 'Senior Software Engineer',
  subtitle: 'Front-end & Mobile Specialist',
  yearsOfExperience: '5 anos',
  bio: 'Engenheiro de Software Sênior especializado em modernização de aplicações móveis e web de alto impacto e escala. Foco em arquitetura limpa, módulos nativos (Kotlin/Swift), estabilidade extrema de sistemas, eliminação de débito técnico e automação inteligente com IA.',
  location: 'Brasil',
  email: 'joaoviniciusgs@gmail.com',
  linkedin: 'https://www.linkedin.com/in/joaoguebrer/',
  github: 'https://github.com/Guerber',
  status: 'Disponível para projetos e posições de alto impacto'
};

export const impactMetrics: MetricItem[] = [
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
];

export const caseStudies: CaseStudyItem[] = [
  {
    id: 'banqi-modernization',
    title: 'Modernização & Estabilização em Hiperescala',
    clientOrProject: 'banQi — Casas Bahia Group',
    badge: 'Mobile Engineering Lead',
    image: '/assets/mobile_architecture.jpg',
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
    image: '/assets/ai_workflow.jpg',
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
    image: '/assets/design_system.jpg',
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
];

export const experiences: ExperienceItem[] = [
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
];

export const skillCategories: SkillCategory[] = [
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
];

export const education: EducationItem[] = [
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
];

export const languages = [
  { name: 'Português', level: 'Nativo', desc: 'Comunicação fluida para liderança técnica e alinhamento com stakeholders.' },
  { name: 'Inglês', level: 'B2 – Intermediário Superior', desc: 'Capacidade comprovada para atuar em times globais, leitura técnica avançada e escrita arquitetural.' }
];

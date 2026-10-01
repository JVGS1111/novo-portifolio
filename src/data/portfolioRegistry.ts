export interface PortfolioItem {
  id: string;
  name: string;
  shortName: string;
  hash: string;
  icon: string;
  tag: string;
  tagEn?: string;
  description: string;
  descriptionEn?: string;
  status: 'active' | 'coming_soon';
  yearVibe: string;
}

export const portfolioRegistry: PortfolioItem[] = [
  {
    id: 'modern',
    name: 'Modern Executive & High-Tech',
    shortName: 'Modern 3D',
    hash: '#/',
    icon: '✨',
    tag: 'Mundo 1',
    tagEn: 'World 1',
    description: 'Portfólio corporativo, Three.js 3D interativo, dark mode e alta conversão.',
    descriptionEn: 'Executive corporate portfolio, interactive Three.js 3D, dark mode, and high conversion.',
    status: 'active',
    yearVibe: '2026'
  },
  {
    id: 'win98',
    name: 'Retro Windows 98 SE Workstation',
    shortName: 'Windows 98',
    hash: '#/win98',
    icon: '🕹️',
    tag: 'Mundo 2',
    tagEn: 'World 2',
    description: 'Sistema operacional retrô completo, janelas arrastáveis, áudio sintetizado e CRT.',
    descriptionEn: 'Complete retro operating system, draggable windows, synthesized Web Audio, and CRT filter.',
    status: 'active',
    yearVibe: '1998'
  },
  {
    id: 'monolith',
    name: 'Monolithic Concrete Sci-Fi Brutalism',
    shortName: 'Monolith 3D',
    hash: '#/monolith',
    icon: '🗿',
    tag: 'Mundo 4',
    tagEn: 'World 4',
    description: 'Monolito colossal em Three.js PBR, telemetria HUD sci-fi, corte laser e motion industrial.',
    descriptionEn: 'Colossal monolith in Three.js PBR, sci-fi HUD telemetry, laser cut, and industrial motion.',
    status: 'active',
    yearVibe: '2026'
  },
  {
    id: 'frutiger-aero',
    name: 'Frutiger Aero & Aqua Ecotopia',
    shortName: 'Frutiger Aero',
    hash: '#/proposta5',
    icon: '🫧',
    tag: 'Mundo 5',
    tagEn: 'World 5',
    description: 'Estética 2000s Frutiger Aero, MSN 8.5 com Wizz real, Three.js esferas aquáticas e botões skeuomórficos.',
    descriptionEn: '2000s Frutiger Aero aesthetic, MSN 8.5 with real Wizz/nudge, Three.js aquatic spheres, and skeuomorphic gel buttons.',
    status: 'active',
    yearVibe: '2007'
  },
  {
    id: 'steamy',
    name: 'Luminous Prism Glassmorphism',
    shortName: 'Prism Glass',
    hash: '#/steamy-glass',
    icon: '💎',
    tag: 'Mundo 6',
    tagEn: 'World 6',
    description: 'Vidro prismático luminoso, refração cáustica 3D, Three.js crystal lens, IDE interativo e cards translúcidos.',
    descriptionEn: 'Luminous prism glass, 3D caustic refraction, Three.js crystal lens, interactive IDE, and frosted cards.',
    status: 'active',
    yearVibe: '2026'
  },
  {
    id: 'win2000',
    name: 'Windows 2000 Pro Enterprise MMC',
    shortName: 'Windows 2000',
    hash: '#/win2000',
    icon: '💼',
    tag: 'Em Breve',
    tagEn: 'Coming Soon',
    description: 'Console administrativo corporativo NT 5.0, visualizador de eventos e diagnóstico.',
    descriptionEn: 'NT 5.0 corporate administrative console, event viewer, and diagnostics.',
    status: 'coming_soon',
    yearVibe: '2000'
  },
  {
    id: 'winxp',
    name: 'Windows XP Luna & Bliss Golden Era',
    shortName: 'Windows XP',
    hash: '#/winxp',
    icon: '🌟',
    tag: 'Em Breve',
    tagEn: 'Coming Soon',
    description: 'A era dourada dos anos 2000 com wallpaper Bliss, MSN Messenger 6.2 e barras Luna.',
    descriptionEn: 'The golden era of the 2000s with Bliss wallpaper, MSN Messenger 6.2, and Luna theme bars.',
    status: 'coming_soon',
    yearVibe: '2001'
  },
  {
    id: 'nerv-eva',
    name: 'Evangelion Tactical NERV HUD (Mundo 7)',
    shortName: 'NERV HUD',
    hash: '#/nerv',
    icon: '⚡',
    tag: 'Mundo 7',
    tagEn: 'World 7',
    description: 'Interface tática militar inspirada em Neon Genesis Evangelion, supercomputador MAGI, terminal do hangar EVA-01 e telemetria de combate.',
    descriptionEn: 'Military tactical interface inspired by Neon Genesis Evangelion, MAGI supercomputer, EVA-01 hangar terminal, and combat telemetry.',
    status: 'active',
    yearVibe: '2015'
  },
  {
    id: 'nerv-central-dogma',
    name: 'Neon Genesis Evangelion Episode UI & MAGI (Mundo 8)',
    shortName: 'Evangelion Episode UI',
    hash: '#/proposta-8',
    icon: '⚡',
    tag: 'Mundo 8',
    tagEn: 'World 8',
    description: 'Interface autêntica inspirada na tipografia e nos episódios de Evangelion: cartões de título Matisse, A.T. Field interativo, deliberação MAGI e dossiês de combate.',
    descriptionEn: 'Authentic interface inspired by the typography and UI of Evangelion episodes: Matisse-style title cards, interactive A.T. Field, MAGI deliberation, and combat dossiers.',
    status: 'active',
    yearVibe: '1995'
  },
  {
    id: 'xbox-original',
    name: 'Xbox Original Verde Cristal & Bio-Mechanical Dashboard (Mundo 9)',
    shortName: 'Xbox Original',
    hash: '#/xbox',
    icon: '🎮',
    tag: 'Mundo 9',
    tagEn: 'World 9',
    description: 'Estética futurista Y2K, plástico verde cristal translúcido com mecânica exposta, dashboard bio-mecânico estilo Horace Luke e jewel 3D.',
    descriptionEn: 'Futuristic Y2K aesthetic, translucent green crystal chassis with visible mechanics, Horace Luke bio-mechanical dashboard HUD, and 3D jewel.',
    status: 'active',
    yearVibe: '2001'
  }
];

export const getCurrentPortfolio = (hash: string): PortfolioItem => {
  const cleanHash = hash.toLowerCase();
  if (
    cleanHash.includes('frutiger') ||
    cleanHash.includes('aero') ||
    cleanHash.includes('proposta5') ||
    cleanHash.includes('proposta-5') ||
    cleanHash.includes('proposal-5') ||
    cleanHash.includes('mundo5') ||
    cleanHash.includes('mundo-5') ||
    cleanHash.includes('world-5') ||
    cleanHash.includes('world5') ||
    cleanHash.includes('msn')
  ) {
    return portfolioRegistry.find((p) => p.id === 'frutiger-aero') || portfolioRegistry[0];
  }
  if (
    cleanHash.includes('steamy') ||
    cleanHash.includes('proposta-6') ||
    cleanHash.includes('proposal-6') ||
    cleanHash.includes('mundo-6') ||
    cleanHash.includes('mundo6') ||
    cleanHash.includes('world-6') ||
    cleanHash.includes('world6') ||
    cleanHash.includes('glass') ||
    cleanHash.includes('fog') ||
    cleanHash.includes('frosted')
  ) {
    return portfolioRegistry.find((p) => p.id === 'steamy') || portfolioRegistry[0];
  }
  if (
    cleanHash.includes('monolith') ||
    cleanHash.includes('brutalism') ||
    cleanHash.includes('proposta-4') ||
    cleanHash.includes('proposal-4') ||
    cleanHash.includes('mundo-4') ||
    cleanHash.includes('mundo4') ||
    cleanHash.includes('world-4') ||
    cleanHash.includes('world4')
  ) {
    return portfolioRegistry.find((p) => p.id === 'monolith') || portfolioRegistry[0];
  }
  if (cleanHash.includes('win98') || cleanHash.includes('mundo2') || cleanHash.includes('mundo-2') || cleanHash.includes('world-2') || cleanHash.includes('world2')) {
    return portfolioRegistry.find((p) => p.id === 'win98') || portfolioRegistry[0];
  }
  if (cleanHash.includes('win2000')) {
    return portfolioRegistry.find((p) => p.id === 'win2000') || portfolioRegistry[0];
  }
  if (cleanHash.includes('winxp')) {
    return portfolioRegistry.find((p) => p.id === 'winxp') || portfolioRegistry[0];
  }
  if (
    cleanHash.includes('central-dogma') ||
    cleanHash.includes('dogma') ||
    cleanHash.includes('proposta-8') ||
    cleanHash.includes('proposta8') ||
    cleanHash.includes('proposal-8') ||
    cleanHash.includes('mundo-8') ||
    cleanHash.includes('mundo8') ||
    cleanHash.includes('world-8') ||
    cleanHash.includes('world8') ||
    cleanHash.includes('episode')
  ) {
    return portfolioRegistry.find((p) => p.id === 'nerv-central-dogma') || portfolioRegistry[0];
  }
  if (
    cleanHash.includes('nerv') ||
    cleanHash.includes('hangar') ||
    cleanHash.includes('tactical') ||
    cleanHash.includes('proposta-7') ||
    cleanHash.includes('proposta7') ||
    cleanHash.includes('mundo-7') ||
    cleanHash.includes('mundo7') ||
    cleanHash.includes('world-7') ||
    cleanHash.includes('world7') ||
    cleanHash.includes('eva') ||
    cleanHash.includes('evangelion')
  ) {
    return portfolioRegistry.find((p) => p.id === 'nerv-eva') || portfolioRegistry[0];
  }
  if (
    cleanHash.includes('xbox') ||
    cleanHash.includes('verde-cristal') ||
    cleanHash.includes('cristal') ||
    cleanHash.includes('proposta-9') ||
    cleanHash.includes('proposta9') ||
    cleanHash.includes('proposal-9') ||
    cleanHash.includes('mundo-9') ||
    cleanHash.includes('mundo9') ||
    cleanHash.includes('world-9') ||
    cleanHash.includes('world9')
  ) {
    return portfolioRegistry.find((p) => p.id === 'xbox-original') || portfolioRegistry[0];
  }
  return portfolioRegistry[0]; // Default to modern
};

export const navigateToPortfolio = (portfolio: PortfolioItem, lang: 'en' | 'pt' = 'en') => {
  if (portfolio.status === 'coming_soon') {
    if (lang === 'pt') {
      alert(`O tema "${portfolio.name}" está catalogado e em breve será implementado! Você pode conferir os protótipos de alta fidelidade criados no Figma.`);
    } else {
      alert(`The theme "${portfolio.name}" is catalogued and will be implemented soon! High-fidelity Figma prototypes are available.`);
    }
    return;
  }
  window.location.hash = portfolio.hash;
};

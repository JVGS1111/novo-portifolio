export interface PortfolioItem {
  id: string;
  name: string;
  shortName: string;
  hash: string;
  icon: string;
  tag: string;
  description: string;
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
    tag: 'Next-Gen',
    description: 'Portfólio corporativo, Three.js 3D interativo, dark mode e alta conversão.',
    status: 'active',
    yearVibe: '2026'
  },
  {
    id: 'win98',
    name: 'Retro Windows 98 SE Workstation',
    shortName: 'Windows 98',
    hash: '#/win98',
    icon: '🕹️',
    tag: 'Retro OS',
    description: 'Sistema operacional retrô completo, janelas arrastáveis, áudio sintetizado e CRT.',
    status: 'active',
    yearVibe: '1998'
  },
  {
    id: 'monolith',
    name: 'Monolithic Concrete Sci-Fi Brutalism',
    shortName: 'Monolith 3D',
    hash: '#/monolith',
    icon: '🗿',
    tag: 'Sci-Fi Brutalism',
    description: 'Monolito colossal em Three.js PBR, telemetria HUD sci-fi, corte laser e motion industrial.',
    status: 'active',
    yearVibe: '2026'
  },
  {
    id: 'frutiger-aero',
    name: 'Frutiger Aero & Aqua Ecotopia',
    shortName: 'Frutiger Aero',
    hash: '#/proposta5',
    icon: '🫧',
    tag: 'Proposta 5',
    description: 'Estética 2000s Frutiger Aero, MSN 8.5 com Wizz real, Three.js esferas aquáticas e botões skeuomórficos.',
    status: 'active',
    yearVibe: '2007'
  },
  {
    id: 'steamy',
    name: 'Steamy Frosted Glass & Bath Fog',
    shortName: 'Steamy Glass',
    hash: '#/steamy-glass',
    icon: '💧',
    tag: 'Proposta 6',
    description: 'Vidro embaçado tátil, condensação dinâmica, limpeza interativa por toque e névoa matinal.',
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
    description: 'Console administrativo corporativo NT 5.0, visualizador de eventos e diagnóstico.',
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
    description: 'A era dourada dos anos 2000 com wallpaper Bliss, MSN Messenger 6.2 e barras Luna.',
    status: 'coming_soon',
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
    cleanHash.includes('msn')
  ) {
    return portfolioRegistry.find((p) => p.id === 'frutiger-aero') || portfolioRegistry[0];
  }
  if (
    cleanHash.includes('steamy') ||
    cleanHash.includes('proposta-6') ||
    cleanHash.includes('proposal-6') ||
    cleanHash.includes('fog') ||
    cleanHash.includes('frosted')
  ) {
    return portfolioRegistry.find((p) => p.id === 'steamy') || portfolioRegistry[0];
  }
  if (cleanHash.includes('monolith') || cleanHash.includes('brutalism') || cleanHash.includes('proposta-4') || cleanHash.includes('proposal-4')) {
    return portfolioRegistry.find((p) => p.id === 'monolith') || portfolioRegistry[0];
  }
  if (cleanHash.includes('win98')) {
    return portfolioRegistry.find((p) => p.id === 'win98') || portfolioRegistry[0];
  }
  if (cleanHash.includes('win2000')) {
    return portfolioRegistry.find((p) => p.id === 'win2000') || portfolioRegistry[0];
  }
  if (cleanHash.includes('winxp')) {
    return portfolioRegistry.find((p) => p.id === 'winxp') || portfolioRegistry[0];
  }
  return portfolioRegistry[0]; // Default to modern
};

export const navigateToPortfolio = (portfolio: PortfolioItem) => {
  if (portfolio.status === 'coming_soon') {
    alert(`O tema "${portfolio.name}" está catalogado e em breve será implementado! Você pode conferir os protótipos de alta fidelidade criados no Figma.`);
    return;
  }
  window.location.hash = portfolio.hash;
};

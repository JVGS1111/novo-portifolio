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

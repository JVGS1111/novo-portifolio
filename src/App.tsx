import React, { useState, useEffect, Suspense, lazy } from 'react';
import { LanguageProvider } from './i18n';

// Code-split Worlds using React.lazy for instant initial loads & zero memory leaks across worlds
const ModernExecutivePage = lazy(() =>
  import('./components/modern/ModernExecutivePage').then(m => ({ default: m.ModernExecutivePage }))
);
const Windows98Page = lazy(() =>
  import('./components/win98/Windows98Page').then(m => ({ default: m.Windows98Page }))
);
const SteamyGlassPage = lazy(() =>
  import('./components/steamy/SteamyGlassPage').then(m => ({ default: m.SteamyGlassPage }))
);
const FrutigerAeroPage = lazy(() =>
  import('./components/frutiger/FrutigerAeroPage').then(m => ({ default: m.FrutigerAeroPage }))
);
const MonolithicBrutalismPage = lazy(() =>
  import('./components/monolith/MonolithicBrutalismPage').then(m => ({ default: m.MonolithicBrutalismPage }))
);
const EvaEpisodePage = lazy(() =>
  import('./components/eva/EvaEpisodePage').then(m => ({ default: m.EvaEpisodePage }))
);
const NervTacticalHangarPage = lazy(() =>
  import('./components/nerv/NervTacticalHangarPage').then(m => ({ default: m.NervTacticalHangarPage }))
);
const XboxOriginalPage = lazy(() =>
  import('./components/xbox/XboxOriginalPage').then(m => ({ default: m.XboxOriginalPage }))
);

const WorldLoadingFallback: React.FC = () => (
  <div className="min-h-screen w-full bg-[#07090e] flex flex-col items-center justify-center text-slate-400 gap-3 select-none">
    <div className="w-8 h-8 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin" />
    <span className="text-xs uppercase tracking-widest font-mono text-slate-400">Loading World...</span>
  </div>
);

const AppContent: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash.toLowerCase();
    }
    return '';
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash.toLowerCase());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToModern = () => {
    window.location.hash = '';
  };

  const isMonolith =
    currentHash.includes('monolith') ||
    currentHash.includes('brutalism') ||
    currentHash.includes('proposta-4') ||
    currentHash.includes('proposal-4') ||
    currentHash.includes('proposta4') ||
    currentHash.includes('mundo-4') ||
    currentHash.includes('mundo4') ||
    currentHash.includes('world-4') ||
    currentHash.includes('world4');

  if (isMonolith) {
    return (
      <Suspense fallback={<WorldLoadingFallback />}>
        <MonolithicBrutalismPage onNavigateModern={navigateToModern} />
      </Suspense>
    );
  }

  const isSteamy =
    currentHash.includes('steamy') ||
    currentHash.includes('proposta-6') ||
    currentHash.includes('proposal-6') ||
    currentHash.includes('mundo-6') ||
    currentHash.includes('mundo6') ||
    currentHash.includes('world-6') ||
    currentHash.includes('world6') ||
    currentHash.includes('glass') ||
    currentHash.includes('glassmorphism') ||
    currentHash.includes('fog') ||
    currentHash.includes('frosted');

  if (isSteamy) {
    return (
      <Suspense fallback={<WorldLoadingFallback />}>
        <SteamyGlassPage onNavigateModern={navigateToModern} />
      </Suspense>
    );
  }

  const isAero =
    currentHash.includes('frutiger') ||
    currentHash.includes('aero') ||
    currentHash.includes('proposta5') ||
    currentHash.includes('proposta-5') ||
    currentHash.includes('proposal-5') ||
    currentHash.includes('mundo5') ||
    currentHash.includes('mundo-5') ||
    currentHash.includes('world-5') ||
    currentHash.includes('world5') ||
    currentHash.includes('msn');

  if (isAero) {
    return (
      <Suspense fallback={<WorldLoadingFallback />}>
        <FrutigerAeroPage onNavigateModern={navigateToModern} />
      </Suspense>
    );
  }

  const isWin98 =
    currentHash.includes('win98') ||
    currentHash.includes('mundo-2') ||
    currentHash.includes('mundo2') ||
    currentHash.includes('world-2') ||
    currentHash.includes('world2');

  if (isWin98) {
    return (
      <Suspense fallback={<WorldLoadingFallback />}>
        <Windows98Page onNavigateModern={navigateToModern} />
      </Suspense>
    );
  }

  const isEvaCentralDogma =
    currentHash.includes('central-dogma') ||
    currentHash.includes('dogma') ||
    currentHash.includes('proposta-8') ||
    currentHash.includes('proposta8') ||
    currentHash.includes('proposal-8') ||
    currentHash.includes('mundo-8') ||
    currentHash.includes('mundo8') ||
    currentHash.includes('world-8') ||
    currentHash.includes('world8') ||
    currentHash.includes('episode');

  if (isEvaCentralDogma) {
    return (
      <Suspense fallback={<WorldLoadingFallback />}>
        <EvaEpisodePage onNavigateModern={navigateToModern} />
      </Suspense>
    );
  }

  const isNervTactical =
    currentHash.includes('nerv') ||
    currentHash.includes('hangar') ||
    currentHash.includes('tactical') ||
    currentHash.includes('proposta-7') ||
    currentHash.includes('proposta7') ||
    currentHash.includes('mundo-7') ||
    currentHash.includes('mundo7') ||
    currentHash.includes('world-7') ||
    currentHash.includes('world7') ||
    currentHash.includes('eva') ||
    currentHash.includes('evangelion');

  if (isNervTactical) {
    return (
      <Suspense fallback={<WorldLoadingFallback />}>
        <NervTacticalHangarPage onNavigateModern={navigateToModern} />
      </Suspense>
    );
  }

  const isXbox =
    currentHash.includes('xbox') ||
    currentHash.includes('verde-cristal') ||
    currentHash.includes('cristal') ||
    currentHash.includes('proposta-9') ||
    currentHash.includes('proposta9') ||
    currentHash.includes('proposal-9') ||
    currentHash.includes('mundo-9') ||
    currentHash.includes('mundo9') ||
    currentHash.includes('world-9') ||
    currentHash.includes('world9');

  if (isXbox) {
    return (
      <Suspense fallback={<WorldLoadingFallback />}>
        <XboxOriginalPage onNavigateModern={navigateToModern} />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<WorldLoadingFallback />}>
      <ModernExecutivePage />
    </Suspense>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;

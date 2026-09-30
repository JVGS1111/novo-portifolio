# João Vinícius Guerber — Portfolio Hub & Creative Lab

> Hub interativo e laboratório contínuo de múltiplos portfólios, conceitos de UI/UX, temas visuais e experimentos interativos convivendo sob a mesma base de código.

🚀 **Deploy**: [https://jvgs1111.github.io/novo-portifolio/](https://jvgs1111.github.io/novo-portifolio/)

---

## 🎨 Galeria de Portfólios Disponíveis

| # | Nome do Portfólio / Ideia | Rota / Hash | Status | Destaques |
|---|---------------------------|-------------|--------|-----------|
| 1 | **Modern Executive & High-Tech** | `#/` | Ativo | Three.js 3D interativo, estética dark mode/cyberpunk, i18n (5 idiomas), métricas de impacto e animações Framer Motion. |
| 2 | **Retro Desktop Windows 98** | `#/win98` | Ativo | Simulação completa do Windows 98 SE com janelas arrastáveis, efeitos sonoros sintetizados via Web Audio API, CRT overlay e aplicativos clássicos. |
| 3 | **Steamy Frosted Glass & Bath Fog (Proposta 06)** | `#/steamy-glass` | Ativo | Vidro embaçado tátil, névoa térmica matinal, silhuetas botânicas, espelho interativo para limpar vapor com dedo/cursor (Web Audio API), 5 Dew Pods de métricas e refração física. |
| 4 | **Monolithic Concrete Sci-Fi Brutalism (Proposta 04)** | `#/monolith` | Ativo | Cidadela monumental 3D em Three.js PBR realista ("BUILDING SOFTWARE FOR A BIGGER TOMORROW"), fendas verticais de luz âmbar, água reflexiva, névoa volumétrica, silhueta do explorador e modo de inspeção 3D livre. |
| 5 | **Frutiger Aero & Aqua Ecotopia (Proposta 05)** | `#/proposta5` | Ativo | Estética 2000s Frutiger Aero, MSN 8.5 com Wizz/shake real, Three.js esferas aquáticas com cáusticas, botões de gelatina skeuomórficos e barra Vista. |
| 6 | **Windows 2000 Pro Enterprise MMC** | `#/win2000` | Em Breve | Console administrativo corporativo NT 5.0, visualizador de eventos e diagnóstico (protótipo de alta fidelidade no Figma). |
| 7 | **Windows XP Luna Golden Era** | `#/winxp` | Em Breve | Wallpaper Bliss, MSN Messenger 6.2 e barras temáticas Luna azul/verde (protótipo de alta fidelidade no Figma). |

---

## 🧩 Central de Registro de Portfólios (`src/data/portfolioRegistry.ts`)

O projeto utiliza um registro centralizado para gerenciar todos os portfólios existentes e novos:

```typescript
// Adicione novos portfólios em src/data/portfolioRegistry.ts
export const portfolioRegistry: PortfolioItem[] = [
  // ...
  {
    id: 'novo-tema',
    name: 'Nome do Conceito',
    shortName: 'Tema Curto',
    hash: '#/novo-tema',
    icon: '✨',
    tag: 'Next-Gen',
    description: 'Descrição do novo design...',
    status: 'active', // ou 'coming_soon'
    yearVibe: '2026'
  }
];
```

Todos os seletores (`PortfolioSwitcher` moderno e `Win98PortfolioSelector` retrô) consomem automaticamente essa lista.

---

## 🛠️ Stack Tecnológica

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite 8 (com `@tailwindcss/vite` e `@vitejs/plugin-react`)
- **Estilização**: Tailwind CSS v4
- **Animações**: Framer Motion
- **3D**: Three.js
- **Ícones**: Lucide React
- **Linter**: Oxlint
- **Deploy**: GitHub Pages via `gh-pages`

### Scripts

```bash
npm run dev      # Inicia servidor local de desenvolvimento
npm run build    # Compila TypeScript e gera bundle de produção
npm run lint     # Executa verificação rápida com Oxlint
npm run preview  # Visualiza build localmente
npm run deploy   # Publica no GitHub Pages
```

Consulte [AGENTS.md](./AGENTS.md) para diretrizes de desenvolvimento e governança para agentes de IA.

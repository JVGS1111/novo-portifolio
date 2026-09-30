# AGENTS.md — Diretrizes para Agentes de IA

Este documento define o contexto, a arquitetura e as regras obrigatórias para qualquer agente de IA que atue neste repositório.

---

## 1. Visão Geral do Projeto

Este repositório (**`novo-portifolio`**) **não é um portfólio estático ou isolado**. Ele é um **hub criativo e laboratório contínuo de múltiplos portfólios, conceitos de UI/UX, temas visuais e experimentos interativos** convivendo sob a mesma base de código.

Aqui coexistem diferentes propostas visuais (ex.: portfólio moderno/executivo de alta tecnologia, sistema operacional retrô Windows 98, além de futuras ideias e protótipos de apresentação profissional).

- **Hospedagem / Deploy**: GitHub Pages (`https://jvgs1111.github.io/novo-portifolio/`).
- **Base Path do Vite**: `/novo-portifolio/` (definido em `vite.config.ts`).
- **Estratégia de Navegação**: Hash-based routing (`window.location.hash`), garantindo compatibilidade nativa com o GitHub Pages sem necessidade de redirecionamento 404 de SPA.

---

## 2. REGRA DE OURO: Documentação Obrigatória de Novas Páginas e Ideias

> [!IMPORTANT]
> **Toda vez que uma nova página, portfólio temático, ideia visual ou protótipo for adicionado, o agente DEVE documentar e atualizar a lista de páginas existentes neste arquivo (`AGENTS.md`) e, se relevante, no `README.md`.**

### Obrigações do Agente ao criar ou alterar páginas:
1. **Nunca sobrescrever ou remover do catálogo** as páginas e experimentos existentes, a menos que solicitado expressamente pelo usuário.
2. **Registrar a nova página** na seção [3. Catálogo de Páginas e Portfólios](#3-catálogo-de-páginas-e-portfólios) abaixo, preenchendo todos os campos da tabela e o detalhamento técnico.
3. **Garantir navegabilidade**: Adicionar um meio de acesso (hash, botão de alternância flutuante ou menu seletor) para que o usuário final consiga transitar entre as ideias.
4. **Isolamento de estilo e estado**: Garantir que estilos específicos (ex.: fontes retrô, classes de scrollbar, temas claros/escuros, cursores customizados) não vazem de uma página para outra.

---

## 3. Catálogo de Páginas e Portfólios

Mantenha esta seção sempre atualizada com todos os portfólios e páginas disponíveis no repositório:

| # | Nome do Portfólio / Ideia | Rota / Hash | Componente Raiz | Status | Descrição e Conceito |
|---|---------------------------|-------------|-----------------|--------|----------------------|
| 1 | **Modern Executive & High-Tech** | `#/` ou vazio | `src/App.tsx` (Default) | Ativo | Portfólio corporativo de alta conversão, estética dark mode/cyberpunk futurista, 3D interativo com Three.js, internacionalização (i18n com 5 idiomas), cursor com efeitos de física e métricas de impacto. |
| 2 | **Retro Desktop Windows 98** | `#/win98` ou `#win98` | `src/components/win98/Windows98Page.tsx` | Ativo | Simulação completa de sistema operacional retrô Win98, janelas arrastáveis, barra de tarefas, menu Iniciar, sons sintetizados (Web Audio API), apps funcionais (DOS Prompt, IE, Explorer de Projetos, Monitor de CPU/RAM, Lixeira) e tela CRT. |
| 3 | **Steamy Frosted Glass & Bath Fog (Proposta 06)** | `#/steamy-glass` ou `#/proposta-6` | `src/components/steamy/SteamyGlassPage.tsx` | Ativo | Vidro embaçado tátil, condensação física, névoa térmica matinal, silhuetas botânicas com paralaxe, espelho interativo para limpar vapor com dedo/cursor (Web Audio API), 5 Dew Pods de métricas e design tokens de refração. |
| 4 | **Monolithic Concrete Sci-Fi Brutalism (Proposta 04)** | `#/monolith` ou `#/proposta-4` | `src/components/monolith/MonolithicBrutalismPage.tsx` | Ativo | Brutalismo colossal sci-fi de concreto monolítico, Three.js PBR interativo com rotação orbital pesada (damping: 0.05), plano de corte a laser (`CUT_PLANE: Z+42.0`), telemetria HUD ao vivo, snap industrial rígido (`-2px, -2px`), áudio procedural Web Audio API, 5 métricas auditadas, 3 cases de hiperescala e 32 habilidades. |
| 5 | **Frutiger Aero & Aqua Ecotopia (Proposta 05)** | `#/proposta5` ou `#/frutiger-aero` | `src/components/frutiger/FrutigerAeroPage.tsx` | Ativo | Estética anos 2000 Frutiger Aero / Aqua Ecotopia, Windows Live Messenger 8.5 funcional com Wizz/shake e sons procedurais (Web Audio API), Three.js WebGL 2.0 Bio-Spheres com transmissão física e cáusticas, 5 cartões Aero Glass, 3 cases de arquitetura, matriz aquática de 32 skills e barra de tarefas Vista. |
| 6 | **Windows 2000 Pro Enterprise MMC** | `#/win2000` | Protótipo Figma / Em breve | Catalogado | Console administrativo corporativo NT 5.0, visualizador de eventos, gerenciador de serviços e diagnóstico. |
| 7 | **Windows XP Luna Golden Era** | `#/winxp` | Protótipo Figma / Em breve | Catalogado | Era dourada dos anos 2000 com wallpaper Bliss, MSN Messenger 6.2 e barras temáticas Luna azul/verde. |

---

### Detalhamento das Páginas e Hub de Navegação

#### Central de Registro de Portfólios (`src/data/portfolioRegistry.ts`)
- **Fonte da Verdade**: Todos os portfólios existentes e planejados estão centralizados em `src/data/portfolioRegistry.ts`.
- Qualquer nova página ou ideia deve ser registrada nessa lista para alimentar automaticamente os componentes de alternância.

#### Componentes de Alternância (Switchers)
- `PortfolioSwitcher.tsx`: Seletor moderno em formato de galeria flutuante ou navbar, com animações em Framer Motion e tags de status.
- `Win98PortfolioSelector.tsx`: Combobox retrô estilizado fiel aos diálogos clássicos do Windows 98.

#### 1. Modern Executive & High-Tech Portfolio
- **Acesso**: Raiz (`/` ou `#/`)
- **Estilo Visual**: Dark Theme (`#07090e`), neon cyan/emerald, tipografia moderna, blur e glassmorphism.
- **Destaques**:
  - `ThreeHeroCanvas.tsx`: Shaders e malha geométrica 3D interativa com Three.js.
  - `LanguageProvider.tsx`: Suporte a múltiplos idiomas (PT-BR, EN, ES, DE, JA).
  - `MotionCursor.tsx` & `ScrollProgress.tsx`: Feedback háptico visual com Framer Motion.
  - Seções: `Hero`, `ImpactMetrics`, `CaseStudies`, `ExperienceTimeline`, `TechMatrix`, `CertificationsEducation`, `ContactFooter`.
  - `PortfolioSwitcher.tsx`: Menu interativo para transição entre temas.

#### 2. Retro Desktop Windows 98 Portfolio
- **Acesso**: Hash `#win98`
- **Estilo Visual**: Cinza clássico `#c0c0c0`, bordas 3D chanfradas, fontes pixeladas MS Sans Serif, efeito scanline CRT opcional (`CrtOverlay.tsx`).
- **Destaques**:
  - Gerenciamento de janelas arrastáveis com z-index dinâmico e foco (`Win98Window.tsx`).
  - Efeitos sonoros autênticos gerados proceduralmente via Web Audio API (`soundEffects.ts`) — sem dependência de MP3 externos.
  - Aplicativos incluídos:
    - `ProfileApp.tsx`: Currículo completo, bio, habilidades e história profissional.
    - `CaseStudiesApp.tsx`: Projetos e cases de estudo com preview.
    - `DosPromptApp.tsx`: Terminal interativo com comandos executáveis (`help`, `dir`, `cat`, `skills`, `clear`, `exit`, etc.).
    - `PerformanceMonitorApp.tsx`: Gráficos de performance do sistema simulados.
    - `InternetExplorerApp.tsx`: Navegador retrô com links e páginas simuladas.
    - `RecycleBinApp.tsx`: Lixeira com itens descartados e easter eggs.
  - Menu Iniciar funcional com opção de Desligamento do sistema (`ShutdownScreen.tsx`) e seletor `Win98PortfolioSelector.tsx`.

#### 3. Steamy Frosted Glass & Bath Fog Portfolio (Proposta 06)
- **Acesso**: Hash `#/steamy-glass` ou `#/proposta-6`
- **Estilo Visual**: Light Theme tátil (`#F0F4F8`), curvatura pillow squircle (`rounded-[32px] - rounded-[44px]`), glassmorphism translúcido (`backdrop-filter: blur(20px) saturate(140%)`), sombras suaves multicamadas e destaques internos especulares (`inset 0 2px 4px rgba(255,255,255,0.9)`).
- **Destaques de Motion Design e Interatividade**:
  - `SteamyBackground.tsx`: Silhuetas botânicas profundas (`blur: 52px`) com paralaxe ao mover o mouse, nebulosas de vapor térmico flutuantes (`blur: 100px-120px`), gotículas de condensação com relevo 3D e rastros verticais animados de gotas escorrendo (`Moisture_Wipe_Trail`).
  - `SteamWipeCanvas.tsx`: Espelho e vidro embaçado interativo com efeito de limpeza com dedo (`finger wipe`) e rodo (`squeegee`). Utiliza `destination-out` e gradiente radial suave para revelar a superfície cristalina por baixo, acompanhado de feedback sonoro procedural.
  - `steamyAudio.ts`: Efeitos sonoros procedurais gerados via Web Audio API (som suave de gota de água `playDropletSound()`, vapor térmico `playSteamSound()` e fricção no vidro `playWipeSound()`), sem arquivos de áudio externos.
  - Seções fiéis ao Figma:
    - `SteamyTopBar.tsx`: Barra de status com sensor de umidade (98%), névoa matinal e alternador de temas.
    - `SteamyHeroCard.tsx`: Cartão executivo com badges, biografia e ações de contato de João Vinícius Guerber.
    - `SteamyImpactMetrics.tsx`: 5 Dew Pods com métricas de hiperescala (-98% crashes, -55% RAM, -75% splash, +$10k AWS, 0%→40% testes).
    - `SteamyCaseStudies.tsx`: 3 casos de engenharia com desafios, soluções e resultados quantificados.
    - `SteamyExperiences.tsx`: Linha do tempo de carreira na Invillia e WiiD.
    - `SteamyTechMatrix.tsx`: Matriz com 32 skills em 4 categorias técnicas, certificações e idiomas.
    - `SteamyBottomBar.tsx`: Barra de especificações com tokens de transmissão (0.92) e refração IOR (1.52).

#### 4. Frutiger Aero & Aqua Ecotopia (Proposta 05)
- **Acesso**: Hash `#/proposta5` ou `#/frutiger-aero`
- **Estilo Visual**: Céu azul cerúleo vibrante (`#0D8BF2`), colinas verdes orgânicas (`#2ED18C`), reflexos aquáticos calmos, botões gelatinosos convexos (skeuomorphic gel buttons com sweep de luz), bolhas d'água 3D translúcidas e vidro Aero Vista (`backdrop-filter: blur(20px)`).
- **Destaques**:
  - `ThreeAquaSpheres.tsx`: Experimento interativo Three.js WebGL 2.0 com 3 esferas aquáticas de material físico (`MeshPhysicalMaterial`, transmissão 0.88, IOR 1.333, reflexos cáusticos, partículas micro-bolhas flutuantes e órbita suave por cursor/toque).
  - `MsnMessengerWindow.tsx`: Interface completa e interativa do Windows Live Messenger 8.5:
    - **Wizz (Chamar Atenção)** funcional com física de vibração da janela (`animate-wizz`) e áudio procedimental via Web Audio API.
    - Chat interativo onde o visitante pode enviar mensagens com resposta inteligente simulada do João Vinícius e feedback sonoro autêntico.
  - `FrutigerBackground.tsx`: Cenário atmosférico com sunburst radial, colinas em camadas e 8 bolhas d'água interativas que estouram com som procedural (`playBubblePop()`) e reaparecem.
  - `AeroMetricsSection.tsx`: 5 cards de vidro Aero com números monumentais (-98% crashes, -55% RAM, -75% boot, +$10k AWS, 0%→40% testes) e efeito de reflexo de luz no hover.
  - `AeroCaseStudies.tsx`: 3 janelas com cases arquiteturais de hiperescala (banQi, IA/Automação e Design System).
  - `AeroExperienceAndTech.tsx`: Trajetória executiva (4 posições) e matriz tecnológica aquática com 32 competências.
  - `AeroActionDock.tsx`: Docas de chamada para ação com botões de gelatina translúcidos (MSN Live, Currículo, E-mail).
  - `AeroTaskbarVista.tsx`: Barra de tarefas Vista Aero translúcida com relógio digital ao vivo, botão do menu Iniciar, controle de áudio e seletor rápido de portfólios.
#### 5. Monolithic Concrete Sci-Fi Brutalism (Proposta 04)
- **Acesso**: Hash `#/monolith` ou `#/proposta-4`
- **Estilo Visual**: Brutalismo monumental cinematográfico sci-fi ("BUILDING SOFTWARE FOR A BIGGER TOMORROW"), superfícies de concreto escuro texturizado (`#16181c` / `#0a0d12`), reflexos aquáticos molhados, fendas verticais iluminadas em ouro/âmbar (`#ffaa33`), névoa volumétrica e silhueta humana de escala épica, tipografia Space Grotesk com tracking largo e telemetria mono.
- **Destaques**:
  - `MonolithCinematicCanvas.tsx`: Experiência Three.js 3D realista:
    - Cidadela monolítica colossal gerada proceduralmente com blocos de concreto escalonados, torres e passadiços.
    - Textura procedural de concreto de alta resolução (1024x1024) com agregados minerais, juntas de fôrma arquitetônica e estrias verticais de escorrimento de chuva.
    - Fendas de energia vertical com materiais emissivos âmbar/dourados pulsantes e PointLights que iluminam as paredes adjacentes e refletem na água.
    - Superfície de água reflexiva líquida com perturbação de vértices em tempo real refletindo o céu e as luzes.
    - Silhueta 3D do viajante/desenvolvedor sobre o penhasco rochoso em primeiro plano, conferindo escala monumental ao cenário.
    - 55 puffs de névoa volumétrica procedural em órbita suave gerando atmosfera densa de tempestade.
    - Modo de Exploração 3D Livre (`// EXPLORE 3D`): órbita interativa com amortecimento inercial, zoom por scroll, HUD de telemetria em tempo real (posição da câmera, altitude, densidade de névoa, altura da cidadela e FPS).
    - Efeito de paralaxe de câmera no mouse durante a visualização normal.
  - `MonolithCinematicHero.tsx`: Recriação 1:1 da interface conceitual:
    - Cabeçalho minimalista `JV — JOÃO VINÍCIUS SOFTWARE DEVELOPER`, links `HOME`, `PROJECTS`, `EXPERIENCE`, `ABOUT` e botão bracketed `[ /// CONTACT /// ]`.
    - Tipografia display monumental `BUILDING SOFTWARE FOR A BIGGER TOMORROW`.
    - Botões de ação rápida: `VIEW PROJECTS ↗` e `// EXPLORE 3D`.
    - Trilha horizontal de projetos destacados (`// FEATURED PROJECTS`): cards interativos para `BANQI (MOBILE APP)`, `GUEPSI (SAAS PLATFORM)` e `OPEN SOURCE (TOOLS & LIBS)` com modal de dossiê técnico.
    - Paginação vertical `01` a `05` sincronizada com a rolagem suave das seções.
    - Slogan minimalista `IDEAS / SYSTEMS / PEOPLE` com régua vertical no canto inferior direito.
  - `MonolithImpactMetrics.tsx`: 5 métricas de impacto auditadas (-98% crashes, -55% RAM, -75% splash, +$10k AWS, 0%→40% testes).
  - `MonolithCaseStudies.tsx`: 3 cases de engenharia de hiperescala detalhando Desafio, Solução e Impacto/Resultados com tags de stack.
  - `MonolithExperience.tsx`: 4 posições de carreira na Invillia e WiiD formatadas como registros de operações.
  - `MonolithTechMatrix.tsx`: Matriz completa de 32 competências, certificação GitHub Copilot, graduação superior e idiomas.
  - `MonolithContact.tsx`: Terminal de transmissão criptografado direto com cópia de email com 1 clique e formulário.
  - `monolithAudio.ts`: Áudio tátil procedural via Web Audio API (drone atmosférico sub-grave `54Hz`, cliques metálicos e hum de laser).


---

## 4. Como Adicionar uma Nova Página / Ideia (Passo a Passo)

Para manter a consistência e a organização do ecossistema de múltiplos portfólios, siga estas etapas:

### Passo 1: Criar a Estrutura de Componentes
Crie uma pasta dedicada para o novo conceito dentro de `src/components/`:
```bash
src/components/<nome-da-ideia>/
├── <NomeDaIdeia>Page.tsx   # Componente raiz da página
└── ...                      # Subcomponentes e estilos específicos
```

### Passo 2: Registrar a Rota no `src/App.tsx`
No [src/App.tsx](file:///Users/guerber/Documents/GitHub/novo-portifolio/src/App.tsx), adicione a checagem do hash correspondente:
```tsx
// Exemplo:
const isMinhaIdeia = window.location.hash.toLowerCase().includes('minha-ideia');

if (isMinhaIdeia) {
  return <MinhaIdeiaPage onNavigateModern={navigateToModern} />;
}
```

### Passo 3: Adicionar Ponto de Entrada / Switcher
Permita que o visitante descubra a nova página:
- Adicione um atalho no menu ou botão flutuante no portfólio Moderno.
- Adicione um atalho no Windows 98 (ex.: ícone no Desktop ou item no menu Iniciar).
- Certifique-se de que a nova página também possua uma forma de retornar ao portfólio principal.

### Passo 4: Atualizar a Documentação (OBRIGATÓRIO)
- Atualize a tabela e o detalhamento técnico em [3. Catálogo de Páginas e Portfólios](#3-catálogo-de-páginas-e-portfólios) neste arquivo (`AGENTS.md`).
- Se houver novas dependências ou particularidades de build, mencione-as aqui.

### Passo 5: Verificação de Qualidade
Execute os scripts de validação antes de concluir:
```bash
npm run lint    # Oxlint (deve passar com 0 erros)
npm run build   # tsc + vite build (deve gerar o bundle sem falhas de tipo)
```

---

## 5. Stack Tecnológica e Ferramental

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite 8 (com `@tailwindcss/vite` e `@vitejs/plugin-react`)
- **Estilização**: Tailwind CSS v4 + classes customizadas de utilitários
- **Animação**: Framer Motion (`^13.4.4`)
- **3D / Gráficos**: Three.js (`^0.185.1`)
- **Ícones**: Lucide React (`^1.43.0`)
- **Linter**: Oxlint (ultrarrápido, configurado em `.oxlintrc.json`)
- **Deploy**: GitHub Pages via `gh-pages`

### Scripts Disponíveis
- `npm run dev`: Inicia o servidor local de desenvolvimento.
- `npm run build`: Compila o TypeScript (`tsc -b`) e gera o bundle de produção via Vite.
- `npm run lint`: Executa a verificação estática do código via Oxlint.
- `npm run preview`: Testa o bundle de produção localmente.
- `npm run deploy`: Realiza o build e publica no branch `gh-pages`.

---

## 6. Boas Práticas e Restrições para Agentes

1. **GitHub Pages Awareness**: Não utilize roteamento de histórico HTML5 (`pushState`) que exija fallback no servidor Nginx/Apache, a menos que configure o script de redirecionamento 404. O roteamento por hash é o padrão adotado para garantir confiabilidade.
2. **Preservação de Assets**: Imagens e recursos estáticos devem residir em `public/` ou `src/assets/` com caminhos relativos ou importações explícitas que respeitem a `base` do Vite.
3. **Consistência de Tipos**: TypeScript está configurado em modo estrito. Não adicione `any` arbitrário ou ignore erros com `@ts-ignore` sem justificativa sólida.
4. **Desempenho**: Trate shaders Three.js e animações do Framer Motion com desmontagem limpa (`useEffect cleanup`) para evitar memory leaks ao transitar entre páginas e portfólios.

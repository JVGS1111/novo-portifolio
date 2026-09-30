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
5. **Internacionalização Obrigatória (Inglês e Português - Inglês como Principal)**: Toda nova página, portfólio temático ou experimento DEVE obrigatoriamente suportar **Inglês (`en`)** e **Português (`pt`)**, sendo o **Inglês o idioma principal/padrão (default)** do portfólio. Não crie páginas monolíngues nem inicie páginas tendo o português como idioma padrão. Textos de interface, cases, habilidades e modais devem fornecer ambas as traduções e permitir alternância de idioma.

---

## 3. Catálogo de Páginas e Portfólios

Mantenha esta seção sempre atualizada com todos os portfólios e páginas disponíveis no repositório:

| # | Nome do Portfólio / Ideia | Rota / Hash | Componente Raiz | Status | Descrição e Conceito |
|---|---------------------------|-------------|-----------------|--------|----------------------|
| 1 | **Modern Executive & High-Tech** | `#/` ou vazio | `src/App.tsx` (Default) | Ativo | Portfólio corporativo de alta conversão, estética dark mode/cyberpunk futurista, 3D interativo com Three.js, internacionalização com EN padrão e seletor multilíngue (EN, PT, ES, DE, JA), cursor com física e métricas. |
| 2 | **Retro Desktop Windows 98** | `#/win98` ou `#win98` | `src/components/win98/Windows98Page.tsx` | Ativo | Simulação de SO retrô Win98, janelas arrastáveis, barra de tarefas com toggle bilíngue `[🇺🇸 EN / 🇧🇷 PT]` (EN padrão), áudio sintetizado, apps funcionais (DOS Prompt, IE, Cases, CPU/RAM, Lixeira) e CRT. |
| 3 | **Luminous Prism Glassmorphism (Proposta 06)** | `#/steamy-glass`, `#/glass` ou `#/proposta-6` | `src/components/steamy/SteamyGlassPage.tsx` | Ativo | Vidro prismático luminoso, física 3D interativa de tilt e brilho especular dinâmico no IDE code card (`export function buildProduct()`), pill de idioma `EN | PT` (EN padrão), 3 cases com mockups e 5 métricas de hiperescala. |
| 4 | **Monolithic Concrete Sci-Fi Brutalism (Proposta 04)** | `#/monolith` ou `#/proposta-4` | `src/components/monolith/MonolithicBrutalismPage.tsx` | Ativo | Brutalismo colossal sci-fi de concreto monolítico, Three.js PBR interativo com rotação orbital pesada, botão industrial `[EN / PT]` (EN padrão), telemetria HUD ao vivo, áudio procedural Web Audio API, 5 métricas auditadas, 3 cases e 32 habilidades. |
| 5 | **Frutiger Aero & Aqua Ecotopia (Proposta 05)** | `#/proposta5` ou `#/frutiger-aero` | `src/components/frutiger/FrutigerAeroPage.tsx` | Ativo | Estética anos 2000 Frutiger Aero / Aqua Ecotopia, seletor de idioma `[🇺🇸 EN | 🇧🇷 PT]` (EN padrão), MSN Live Messenger 8.5 funcional com Wizz/shake, Three.js WebGL 2.0 Bio-Spheres, 5 cartões Aero Glass, 3 cases e barra Vista. |
| 6 | **Windows 2000 Pro Enterprise MMC** | `#/win2000` | Protótipo Figma / Em breve | Catalogado | Console administrativo corporativo NT 5.0, visualizador de eventos, gerenciador de serviços e diagnóstico. |
| 7 | **Windows XP Luna & Bliss Golden Era** | `#/winxp` | Protótipo Figma / Em breve | Catalogado | A era dourada dos anos 2000 com wallpaper Bliss, MSN Messenger 6.2 e barras temáticas Luna azul/verde. |
| 8 | **Evangelion Tactical NERV HUD (Proposta 07)** | `#/nerv`, `#/evangelion` ou `#/proposta-7` | Protótipo Figma (`22:2461`) | Catalogado / Protótipo | Interface tática militar inspirada em Neon Genesis Evangelion e NERV Central Dogma. Inclui supercomputador MAGI (Melchior, Balthasar, Casper), harmônicos de A.T. Field (octógonos concêntricos), telemetria com internal battery e sync ratio de 99.4%, faixas de perigo zebradas (hazard stripes), selos de emergência (`非常事態` / `極秘`) e dossiê militar de engenharia. |
| 9 | **Neon Genesis Evangelion Episode UI & MAGI (Proposta 08)** | `#/proposta-8`, `#/central-dogma`, `#/dogma`, `#/eva` ou `#/nerv` | `src/components/eva/EvaEpisodePage.tsx` | Ativo | Página inspirada na UI cinematográfica e tipografia icônica dos episódios de Neon Genesis Evangelion. Inclui cartões de título de episódios no estilo Matisse (kanji monumental e subtítulos ocidentais com modal eyecatch), A.T. Field interativo com harmônicos octogonais, câmara de deliberação tripartite do supercomputador MAGI (Melchior, Balthasar, Casper) com consultas arquiteturais em tempo real, contagem regressiva de bateria interna (com restauração de cabo umbilical), osciloscópio de sincronia do nervo A10 (99.42%), 5 métricas auditadas, 4 dossiês de combate estruturados como episódios, banco sináptico MAGI de 32 competências, credencial GitHub Copilot Certified e terminal de transmissão com cópia de email em 1 clique. Zero áudio/som ("sem som só coda"). |

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

#### 3. Luminous Prism Glassmorphism Portfolio (Proposta 06)
- **Acesso**: Hash `#/steamy-glass`, `#/glass` ou `#/proposta-6`
- **Estilo Visual**: Luminous Studio White & Platinum (`#F4F6F9`), vidro prismático cristalino com refração física (`backdrop-filter: blur(24px)`), realce interno especular (`inset 0 2px 4px rgba(255,255,255,0.95)`), reflexos cáusticos arco-íris (dispersão cromática espectral) e sombras multicamadas suaves.
- **Destaques de Motion Design e Interatividade**:
  - `PrismBackground.tsx`: Iluminação de estúdio suave com gradientes radiais acelerados por GPU sem sobrecarga de filtros de blur, feixes de luz cáusticos e dispersão cromática com interpolação contínua (lerp) via `requestAnimationFrame` sem re-renderizações React.
  - `PrismHeroVisual.tsx`: Card de código monumental em vidro prismático com física 3D interativa (Framer Motion tilt multi-eixo com amortecimento inercial, brilho especular dinâmico seguindo o cursor, valores interativos clicáveis, semáforo macOS e botão circular de ação). O stepper vertical redundante ("Design, Develop, etc.") foi removido conforme solicitação de design limpo.
  - `PrismHeroSection.tsx`: Recriação fiel da referência conceitual:
    - Badge `● FULLSTACK & MOBILE DEVELOPER` com pulso.
    - Título monumental `Turning ideas into real products.` com gradiente iridescente azul-púrpura na palavra "ideas".
    - Botões de ação rápida `View my work ↗` (dark pill) e `Download CV ↓` (frosted pill).
    - Faixa de ícones `TECH I WORK WITH`: chiclets de vidro translúcido para React Native, React, Next.js, Vite, TypeScript, Firebase e GitHub com tilt e feedback visual acelerado por GPU.
    - Card de código flutuante em vidro: semáforo macOS, botão de cópia de código, código interativo com valores clicáveis (`"great"`, `"fast"`, `"scalable"`, `"real"`), status `● Ready to build` e `Last commit 2h ago`.
    - Botão circular de vidro com seta para scroll suave aos projetos.
  - `PrismFeaturedProjects.tsx`: Trilha horizontal `FEATURED PROJECTS ────` com 3 cartões de destaque e mockups de produto:
    - **BanQi App**: Mockup de smartphone dark titanium em ângulo com UI do BanQi, gráficos financeiros e modal de dossiê técnico.
    - **Guepsi**: Mockup de dashboard web SaaS com lista clínica de pacientes e modal de arquitetura.
    - **Open Source**: Mockup de terminal macOS dark glass com árvore de arquivos interativa e dossiê de ferramentas.
  - `PrismImpactMetrics.tsx`: 5 pods de vidro com métricas auditadas (-98% crashes, -55% RAM, -75% splash, +$10k AWS, 0%→40% testes).
  - `PrismExperience.tsx`: Trajetória profissional na Invillia/Casas Bahia/banQi e WiiD em cards translúcidos.
  - `PrismTechMatrix.tsx`: Matriz completa de 32 competências em 4 categorias, certificação oficial GitHub Copilot, graduação superior e idiomas.
  - `PrismContact.tsx`: Card de chamada "Let's talk" com cópia de e-mail com 1 clique, links sociais e download de currículo.
  - Otimizações de Performance & Silêncio: Áudio completamente desativado/silencioso por preferência de usuário ("sem som só foco"), raio de desfoque otimizado com `backdrop-blur-md` e aceleração por GPU (`transform-gpu`, `translateZ(0)`), garantindo rolagem a 60-120 FPS sem lag.

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
  - `AeroCaseStudies.tsx`: 3 janelas com cases arquiteturais de hiperescala (banQi, IA/Automação e Design System) com badges de seção e titlebars Vista Aero autênticas.
  - `AeroExperienceAndTech.tsx`: Trajetória executiva (4 posições) e matriz tecnológica aquática com 32 competências.
  - `AeroActionDock.tsx`: Docas de chamada para ação com botões de gelatina translúcidos (MSN Live, Currículo, E-mail).
  - `AeroTaskbarVista.tsx`: Barra de tarefas Vista Aero translúcida com relógio digital ao vivo, botão do menu Iniciar, controle de áudio e seletor rápido de portfólios.
  - **Headers & Titlebars Vista Aero Glass**: Gradientes de vidro ciano-azul contínuos com reflexo especular vítreo (`::before`), brilho de texto característico do Windows Vista (`aero-titlebar-text` com glow aura) e botões de controle gel esféricos 3D (`aero-ctrl-btn`) eliminando qualquer corte horizontal no texto.
#### 5. Monolithic Concrete Sci-Fi Brutalism (Proposta 04)
- **Acesso**: Hash `#/monolith` ou `#/proposta-4`
- **Estilo Visual**: Brutalismo monumental cinematográfico sci-fi ("BUILDING SOFTWARE FOR A BIGGER TOMORROW"), superfícies de concreto escuro texturizado (`#16181c` / `#0a0d12`), reflexos aquáticos molhados, fendas verticais iluminadas em ouro/âmbar (`#ffaa33`), névoa volumétrica e silhueta humana de escala épica, tipografia Space Grotesk com tracking largo e telemetria mono.
- **Destaques**:
  - `MonolithCinematicCanvas.tsx`: Experiência WebGL 2.5D Depth-Map Parallax Shader + Volumetric Mist:
    - Arte conceitual em resolução 2K nítida (`2048x1374`) combinada a mapa de profundidade Z-Depth com filtragem suave de 5 taps.
    - Shader GLSL refinado com paralaxe tridimensional suave guiado pelo cursor ou giroscópio mobile, sem estourar as cores naturais da pintura original.
    - Cores escuras e reflexos naturais preservados nas poças d'água e rochas molhadas.
    - 32 puffs de névoa volumétrica procedural (sprites com gradiente suave) flutuando e deslizando com física de vento em diferentes profundidades Z.
  - `MonolithCinematicHero.tsx`: Recriação 1:1 da interface conceitual:
    - Cabeçalho minimalista `JV — JOÃO VINÍCIUS SOFTWARE DEVELOPER`, links `HOME`, `PROJECTS`, `EXPERIENCE`, `ABOUT` e botão bracketed `[ /// CONTACT /// ]`.
    - Tipografia display monumental `BUILDING SOFTWARE FOR A BIGGER TOMORROW`.
    - Botões de ação rápida: `VIEW PROJECTS ↗` e `// EXPLORE` (navegação suave para a seção de projetos).
    - Trilha horizontal de projetos destacados (`// FEATURED PROJECTS`): cards interativos para `BANQI (MOBILE FINTECH)`, `AI AGENTS (DEV WORKFLOW & IA)` e `DESIGN SYSTEM (MULTI-OS TOKENS)` com miniaturas brutais cinematográficas estilizadas e modal de dossiê técnico.
    - Paginação vertical `01` a `05` sincronizada com a rolagem suave das seções.
    - Slogan minimalista `IDEAS / SYSTEMS / PEOPLE` com régua vertical no canto inferior direito.
  - `MonolithImpactMetrics.tsx`: 5 métricas de impacto auditadas (-98% crashes, -55% RAM, -75% splash, +$10k AWS, 0%→40% testes).
  - `MonolithCaseStudies.tsx`: 3 cases de engenharia de hiperescala detalhando Desafio, Solução e Impacto/Resultados com tags de stack.
  - `MonolithExperience.tsx`: 4 posições de carreira na Invillia e WiiD formatadas como registros de operações.
  - `MonolithTechMatrix.tsx`: Matriz completa de 32 competências, certificação GitHub Copilot, graduação superior e idiomas.
  - `MonolithContact.tsx`: Terminal de transmissão criptografado direto com cópia de email com 1 clique e formulário.
  - `monolithAudio.ts`: Áudio tátil procedural via Web Audio API (drone atmosférico sub-grave `54Hz`, cliques metálicos e hum de laser).

#### 6. Evangelion Tactical NERV HUD / MAGI System (Proposta 07)
- **Acesso**: Hash `#/nerv`, `#/evangelion` ou `#/proposta-7` | Protótipo Figma (Node `22:2461`)
- **Estilo Visual**: Preto tático absoluto (`#060709`), Laranja de Emergência NERV (`#FF5500`), Âmbar de Advertência (`#FFAA00`), Vermelho Alerta (`#FF1E28`), Verde Neon de Sincronia (`#00FF66`), tipografia militar com dados monospaçados, faixas diagonais de perigo (hazard stripes), selos de segurança japoneses (`非常事態`, `極秘`, `承認`) e estética clínica de sala de operações de Neon Genesis Evangelion.
- **Destaques de Design e Elementos de Interface**:
  - `MASTHEAD`: Faixa superior zebrada de advertência, identificação `NERV // CENTRAL DOGMA // TACTICAL HUD v3.33`, telemetria de inicialização e alerta `● ACTIVE: EMERGENCY STANDBY // PILOT SYNC NOMINAL`.
  - `PILOT DOSSIER`: Classificação `/// NERV COMMAND // PILOT CLASSIFICATION: S-CLASS CODE ARCHITECT`, selo de emergência com carimbo `EMERGENCY / 非常事態 · 極秘`, bio com diretriz tática e indicador de telemetria `INTERNAL BATTERY: 04:59:58 · SYNC HARMONICS: 99.42% · MAGI CONSENSUS: 3/3 [AGREE]`.
  - `MAGI SUPERCOMPUTER VIEWPORT`: Octógonos concêntricos de A.T. Field (`ABSOLUTE TERROR FIELD`), plano de corte `A.T. FIELD // CUT: Z+42.0`, cluster de votação de consenso dos 3 supercomputadores MAGI (`MAGI-1 MELCHIOR: AGREE · 承認`, `MAGI-2 BALTHASAR: AGREE · 承認`, `MAGI-3 CASPER: AGREE · 承認`), stream de telemetria de combate e botões de controle tático.
  - `RESOLUÇÃO TÁTICA (MÉTRICAS AUDITADAS)`: Faixa de perigo zebrada, tag `[ 5 AUDITED // 決議 ]`, métricas em laranja/verde (-98% crashes, -55% RAM, -75% cold boot, +$10k cloud, 0%→40% testes).
  - `OPERAÇÕES DE COMBATE (CASES)`: Cases estruturados com `▲ THREAT / ANOMALY:`, `■ COUNTERMEASURE:` e `◆ AUDITED OUTCOME:`.
  - `REGISTRO DE SERVIÇO & MATRIZ SINÁPTICA`: 4 posições de carreira e 32 competências distribuídas nos 4 domínios táticos do banco sináptico MAGI.

#### 7. Neon Genesis Evangelion Episode UI & MAGI (Proposta 08)
- **Acesso**: Hash `#/proposta-8`, `#/central-dogma`, `#/dogma`, `#/eva` ou `#/nerv`
- **Componente Raiz**: `src/components/eva/EvaEpisodePage.tsx`
- **Status**: Ativo
- **Estilo Visual e Conceito**: Experiência imersiva inspirada na estética cinematográfica, tipografia visceral de episódios e interface tática da Gainax / Hideaki Anno em *Neon Genesis Evangelion*. Sem elementos genéricos: layout escuro de alto contraste (`#020204`), tipografia Matisse (Shippori Mincho com kanjis monumentais e subtítulos em Cinzel/Space Grotesk), faixas zebradas de perigo (hazard stripes), selos militares de carimbo (`極秘 · TOP SECRET`, `非常事態 · EMERGENCY`, `任務完了 · VERIFIED`), telemetria monospaçada e sem áudio ("sem som só coda").
  - `EvaHoneycombBackground.tsx`: Malha de fundo animada em Canvas 2D de alta performance com tesselação de colmeia hexagonal e pentagonal intercalada, onda de radar contínua, ativações sinápticas aleatórias de células MAGI e iluminação interativa sob o cursor do mouse. Inclui botão de alternância `[ ⬡ COLMEIA / ⬠ PENTÁGONO ]` no cabeçalho.
  - `EvaTitleCard.tsx`: Modal cinematográfico de cartões de título de episódios (EYECATCH) navegável com controles de navegação, kanjis colossais (`使徒、襲来`, `見知らぬ、天井`, `鳴らない、電話`, `瞬間、心、重ねて`, `世界の中心でアイを叫んだけもの`), diretivas táticas e identificação do piloto João Vinícius Guerber.
  - `EvaAtFieldCanvas.tsx`: Campo de Força de Terror Absoluto (A.T. Field) interativo em Canvas com octógonos concêntricos luminosos em laranja/âmbar, mira em retícula e distorções harmônicas reagindo à posição do cursor em tempo real (`PATTERN: BLUE / パターン青`).
  - `EvaSyncHarmonics.tsx`: Painel duplo tático contendo:
    - Contagem regressiva digital ao vivo da **Bateria Interna** (`04:59:xx`) com barra de 12 segmentos de energia e botão interativo para reconectar o **Cabo Umbilical** e restaurar energia 100%.
    - Osciloscópio SVG com onda senoidal em tempo real monitorando a **Ressonância Sináptica do Nervo A10** (Taxa de Sincronia de 99.42%).
  - `MagiConsensusTerminal.tsx`: Câmara de deliberação tripartite do supercomputador MAGI:
    - Núcleos orgânicos lógicos: `MAGI-1 MELCHIOR` (Cientista), `MAGI-2 BALTHASAR` (Mãe) e `MAGI-3 CASPER` (Mulher).
    - Módulo de teste interativo com 4 consultas arquiteturais de alta complexidade (migração Turbomodules/Fabric, agentes autônomos de IA em CI/CD, Design System multi-OS e mitigação de egress AWS), demonstrando o processo de votação até o consenso unânime (`UNANIMOUS MAGI VERDICT [3/3 AGREE]`).
  - `EvaEpisodeActs.tsx`: 4 dossiês de combate confidenciais estruturados como episódios do anime:
    - *EPISODE:01 // 使徒、襲来*: Operação banQi Hyperscale Defense (crise de 4.8% crash, vazamento de memória e redução de 75% em cold boot).
    - *EPISODE:02 // 見知らぬ、天井*: Operação Titã Cloud (mitigação de egress AWS e economia de US$ 10.000/mês).
    - *EPISODE:03 // 鳴らない、電話*: Operação Sinapse (agentes autônomos de IA, credencial GitHub Copilot Certified e blindagem de 0% para 40% de testes).
    - *EPISODE:04 // 瞬間、心、重ねて*: Operação Harmonia (Design Tokens multi-OS unificados entre Swift, Kotlin e React).
    - Cada dossiê possui análise em 3 blocos: Avaliação da Ameaça, Contramedida e Desfecho Auditado com selo carmesim `VERIFIED / 任務完了`.
  - `EvaMagiBank.tsx`: Matriz sináptica com 32 competências de engenharia categorizadas em 4 bancos neurais, credencial oficial GitHub Copilot Certified, diploma de Bacharelado em Engenharia de Software e a Crônica de Deslocamento de Carreira (2019-2026) formatada como registro de voo de piloto.
  - `EvaCommsTerminal.tsx`: Terminal de transmissão direta criptografada com cópia de e-mail com 1 clique e feedback instantâneo, comlinks do LinkedIn e GitHub e download do currículo executivo.
  - **Internacionalização**: Suporte bilíngue nativo e completo com seletor `EN | PT` (Inglês como padrão / default), conforme as regras de ouro.

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

### Passo 3: Implementar Internacionalização (Inglês e Português - Inglês como Principal)
Toda nova página deve obrigatoriamente suportar **Inglês e Português**, adotando o **Inglês como padrão**:
- Estruturar textos e conteúdos em dicionários de tradução (integrando com `src/i18n/` ou com suporte equivalente).
- Definir `'en'` (Inglês) como idioma primário de inicialização/fallback.
- Disponibilizar mecanismo acessível de troca de idioma (seletor/toggle `EN | PT`) na interface do portfólio.

### Passo 4: Adicionar Ponto de Entrada / Switcher
Permita que o visitante descubra a nova página:
- Adicione um atalho no menu ou botão flutuante no portfólio Moderno.
- Adicione um atalho no Windows 98 (ex.: ícone no Desktop ou item no menu Iniciar).
- Certifique-se de que a nova página também possua uma forma de retornar ao portfólio principal.

### Passo 5: Atualizar a Documentação (OBRIGATÓRIO)
- Atualize a tabela e o detalhamento técnico em [3. Catálogo de Páginas e Portfólios](#3-catálogo-de-páginas-e-portfólios) neste arquivo (`AGENTS.md`).
- Se houver novas dependências ou particularidades de build, mencione-as aqui.

### Passo 6: Verificação de Qualidade
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
5. **Internacionalização Obrigatória (EN / PT com EN como Principal)**: O portfólio visa oportunidades globais e nacionais. É mandatório que toda nova página, componente, case ou modal ofereça suporte completo a **Inglês (`en`)** e **Português (`pt`)**, mantendo impreterivelmente o **Inglês como o idioma primário / default**. Não adicione novos textos estáticos apenas em português.

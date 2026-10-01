# AGENTS.md — Diretrizes para Agentes de IA

Este documento define o contexto, a arquitetura e as regras obrigatórias para qualquer agente de IA que atue neste repositório.

---

## 1. Visão Geral do Projeto: Um Multiverso de "Mundos" (Worlds)

Este repositório (**`novo-portifolio`**) **não é um portfólio estático ou isolado**. Ele é um **hub criativo e laboratório contínuo de múltiplos portfólios, conceitos de UI/UX, temas visuais e experimentos interativos** convivendo sob a mesma base de código.

> [!IMPORTANT]
> **CONCEITO CENTRAL: CADA PÁGINA É UM "MUNDO" (WORLD)**
> No projeto, toda e qualquer landing page independente, conceito visual ou tema de portfólio é tratado formalmente como um **"Mundo" (World)** (antigo termo *proposta*). Cada mundo possui sua própria identidade estética, física de animação, design tokens, áudio procedimental (ou ausência dele), regras visuais e atmosfera própria.

- **Hospedagem / Deploy**: GitHub Pages (`https://jvgs1111.github.io/novo-portifolio/`).
- **Base Path do Vite**: `/novo-portifolio/` (definido em `vite.config.ts`).
- **Estratégia de Navegação**: Hash-based routing (`window.location.hash`), garantindo compatibilidade nativa com o GitHub Pages sem necessidade de redirecionamento 404 de SPA.

---

## 2. REGRAS DE OURO PARA AGENTES DE IA

### 1. "Criar Nova Página" = Literalmente Criar um Novo "Mundo" Independente
- **Nunca mexer nem sobrescrever os mundos existentes**: Quando o usuário disser "criar uma nova página" (ou "criar uma nova proposta/ideia"), ele está instruindo expressamente a criar um **novo Mundo independente** (uma nova landing page com sua própria pasta isolada em `src/components/<novo-mundo>`, rota hash exclusiva em `src/App.tsx`, componentes dedicados e seletor com identidade visual própria).
- **Preservação Absoluta**: É terminantemente proibido sobrescrever, alterar, descaracterizar ou remover as páginas/mundos já existentes ao criar uma nova página.

### 2. Modificações em Páginas Existentes
- Se o usuário pedir para mexer, ajustar, corrigir ou adicionar algo em alguma página e **ficar claro de qual página/mundo ele está falando**, siga em frente aplicando as alterações **única e exclusivamente nessa página/mundo**, sem afetar os outros.

### 3. Regra de Desambiguação Obrigatória (Sempre Questionar em Caso de Dúvida)
- **Sempre que houver qualquer dúvida, incerteza ou ambiguidade** sobre qual página ou mundo o usuário deseja alterar, qual conceito deve ser adotado ou qual escopo deve ser tocado, o agente **DEVE obrigatoriamente questionar o usuário** antes de tomar qualquer decisão ou modificar arquivos. Nunca adivinhe ou presuma intenções quando houver mais de uma interpretação possível.

### 4. Identidade Visual Própria para Seletores de Mundo (World Selectors)
- **Cada select de selecionar mundo (mudar para outra landing page) TEM QUE TER SUA PRÓPRIA IDENTIDADE VISUAL**.
- É proibido forçar ou usar indiscriminadamente o layout/estilo do mundo moderno (dark slate / ciano cyberpunk) em outros mundos.
- Cada mundo deve possuir seu seletor estilizado de acordo com o seu próprio universo (ex.: Apple Liquid Glass translúcido para Steamy Glass; concreto brutalista com stencil e âmbar para Monolith; botões de gelatina convexos e vidro Vista Aero para Frutiger Aero; terminal NERV/MAGI com faixas de perigo para Evangelion; combobox clássico cinza 3D para Windows 98).
- A lista de opções em si (`portfolioRegistry.ts`) alimenta todos os seletores e não precisa sofrer alterações estruturais. Se algum mundo já possui identidade própria, ela deve ser mantida.

### 5. Documentação Obrigatória de Novos Mundos
- Toda vez que uma nova página/mundo temático for adicionado, o agente **DEVE documentar e registrar** o novo mundo na tabela da seção [3. Catálogo de Mundos e Portfólios](#3-catálogo-de-mundos-e-portfólios) deste arquivo (`AGENTS.md`) e, se relevante, no `README.md`.

### 6. Isolamento de Estilo e Estado
- Garantir que estilos específicos (ex.: fontes retrô, classes de scrollbar, temas claros/escuros, cursores customizados) não vazem de uma página para outra.

### 7. Internacionalização Obrigatória (Inglês e Português - Inglês como Principal)
- Todo novo mundo, portfólio temático ou experimento **DEVE obrigatoriamente suportar Inglês (`en`) e Português (`pt`)**, sendo o **Inglês o idioma principal/padrão (default)**. Textos de interface, cases, habilidades e modais devem fornecer ambas as traduções e permitir alternância de idioma.

---

## 3. Catálogo de Mundos e Portfólios

Mantenha esta seção sempre atualizada com todos os mundos disponíveis no repositório:

| # | Nome do Mundo / Ideia | Rota / Hash | Componente Raiz | Status | Descrição e Conceito |
|---|-----------------------|-------------|-----------------|--------|----------------------|
| 1 | **Modern Executive & High-Tech (Mundo 1)** | `#/` ou vazio | `src/App.tsx` (Default) | Ativo | Portfólio corporativo de alta conversão, estética dark mode/cyberpunk futurista, 3D interativo com Three.js, internacionalização com EN padrão e seletor multilíngue (EN, PT, ES, DE, JA), cursor com física e métricas. |
| 2 | **Retro Desktop Windows 98 (Mundo 2)** | `#/win98` ou `#win98` | `src/components/win98/Windows98Page.tsx` | Ativo | Simulação de SO retrô Win98, janelas arrastáveis, barra de tarefas com toggle bilíngue `[🇺🇸 EN / 🇧🇷 PT]` (EN padrão), áudio sintetizado, apps funcionais (DOS Prompt, IE, Cases, CPU/RAM, Lixeira) e CRT. |
| 3 | **Luminous Prism Glassmorphism (Mundo 6)** | `#/steamy-glass`, `#/glass` ou `#/mundo-6` | `src/components/steamy/SteamyGlassPage.tsx` | Ativo | Vidro prismático luminoso, física 3D interativa de tilt e brilho especular dinâmico no IDE code card (`export function buildProduct()`), pill de idioma `EN | PT` (EN padrão), 3 cases com mockups e 5 métricas de hiperescala. |
| 4 | **Monolithic Concrete Sci-Fi Brutalism (Mundo 4)** | `#/monolith` ou `#/mundo-4` | `src/components/monolith/MonolithicBrutalismPage.tsx` | Ativo | Brutalismo colossal sci-fi de concreto monolítico, Three.js PBR interativo com rotação orbital pesada, botão industrial `[EN / PT]` (EN padrão), telemetria HUD ao vivo, áudio procedural Web Audio API, 5 métricas auditadas, 3 cases e 32 habilidades. |
| 5 | **Frutiger Aero & Aqua Ecotopia (Mundo 5)** | `#/proposta5`, `#/mundo5` ou `#/frutiger-aero` | `src/components/frutiger/FrutigerAeroPage.tsx` | Ativo | Estética anos 2000 Frutiger Aero / Aqua Ecotopia, seletor de idioma `[🇺🇸 EN | 🇧🇷 PT]` (EN padrão), MSN Live Messenger 8.5 funcional com Wizz/shake, Three.js WebGL 2.0 Bio-Spheres, 5 cartões Aero Glass, 3 cases e barra Vista. |
| 6 | **Windows 2000 Pro Enterprise MMC** | `#/win2000` | Protótipo Figma / Em breve | Catalogado | Console administrativo corporativo NT 5.0, visualizador de eventos, gerenciador de serviços e diagnóstico. |
| 7 | **Windows XP Luna & Bliss Golden Era** | `#/winxp` | Protótipo Figma / Em breve | Catalogado | A era dourada dos anos 2000 com wallpaper Bliss, MSN Messenger 6.2 e barras temáticas Luna azul/verde. |
| 8 | **Evangelion Tactical NERV HUD & Hangar (Mundo 7)** | `#/nerv`, `#/hangar`, `#/tactical` ou `#/mundo-7` | `src/components/nerv/NervTacticalHangarPage.tsx` | Ativo | Interface militar e cockpit de lançamento NERV Cage / Geofront. Arte visual monumental do hangar com EVA-01 e silhueta do engenheiro na passarela, terminal pessoal técnico em pergaminho off-white com kanji/katakana `ソフトウェアエンジニア`, abas numéricas 01 a 06, HUD lateral com wireframe do EVA-01, monitor MAGI, radar topográfico de Hakone/Tokyo-3, rail inferior de projetos com dossiê tático e seletor NERV exclusivo. |
| 9 | **Neon Genesis Evangelion Episode UI & MAGI (Mundo 8)** | `#/proposta-8`, `#/mundo-8`, `#/central-dogma`, `#/dogma` | `src/components/eva/EvaEpisodePage.tsx` | Ativo | Página inspirada na UI cinematográfica e tipografia icônica dos episódios de Neon Genesis Evangelion. Inclui cartões de título de episódios no estilo Matisse (kanji monumental e subtítulos ocidentais com modal eyecatch), A.T. Field interativo com harmônicos octogonais, câmara de deliberação tripartite do supercomputador MAGI (Melchior, Balthasar, Casper) com consultas arquiteturais em tempo real, contagem regressiva de bateria interna (com restauração de cabo umbilical), osciloscópio de sincronia do nervo A10 (99.42%), 5 métricas auditadas, 4 dossiês de combate estruturados como episódios, banco sináptico MAGI de 32 competências, credencial GitHub Copilot Certified e terminal de transmissão com cópia de email em 1 clique. Zero áudio/som ("sem som só coda"). |
| 10 | **Xbox Original Verde Cristal & Bio-Mechanical Dashboard (Mundo 9)** | `#/xbox`, `#/verde-cristal` ou `#/mundo-9` | `src/components/xbox/XboxOriginalPage.tsx` | Ativo | Estética bio-mecânica Y2K e hardware industrial inspirada no Xbox Original edição especial Verde Cristal e no dashboard conceitual de Horace Luke. Inclui chassi 3D interativo procedural ("caixa" translúcida com textura física de plástico moldado, heatpipes de cobre, dissipador de alumínio, ventoinha giratória e orbe do Jewel Medallion com refração), cockpit com canais em lâminas curvas (Blades), telemetria com 64.000 blocos de memória, 3 cases/estojos de jogos translúcidos em 3D com DVD holográfico deslizante e dossiê técnico, PCB dev kernel com 32 microchips interligados por barramentos e dock com atalhos de controle `(A)`, `(B)`, `(X)`, `(Y)`. |

---

### Detalhamento das Páginas e Hub de Navegação

#### Central de Registro de Portfólios (`src/data/portfolioRegistry.ts`)
- **Fonte da Verdade**: Todos os portfólios existentes e planejados estão centralizados em `src/data/portfolioRegistry.ts`.
- Qualquer nova página ou ideia deve ser registrada nessa lista para alimentar automaticamente os componentes de alternância.

#### Componentes de Alternância e Seletores de Mundos (World Selectors)
Cada mundo possui seu próprio seletor com identidade visual exclusiva:
- `PortfolioSwitcher.tsx`: Seletor do Mundo Moderno (Cyberpunk Dark / Neon Cyan) em galeria flutuante ou navbar.
- `Win98PortfolioSelector.tsx`: Combobox retrô cinza 3D chanfrado (#C0C0C0) com áudio Web Audio fiel aos diálogos clássicos do Windows 98 (Mundo 2).
- `PrismWorldSelector.tsx`: Pílula e dropdown em Apple Liquid Glass translúcido com dispersão prismática e reflexo especular para o Mundo 06 (Steamy Glass).
- `MonolithWorldSelector.tsx`: Seletor brutalista em concreto monolítico escuro com tipografia mono, brackets `[ // WORLDS ]`, áudio de corte laser e cliques industriais para o Mundo 04 (Monolith).
- `AeroWorldSelector.tsx`: Botão de gelatina aquática azul convexa com bolhas e janela autêntica Windows Vista Aero Glass com som procedural de bolha d'água para o Mundo 05 (Frutiger Aero).
- `NervWorldSelector.tsx`: Seletor tático de coordenadas NERV militar com faixas de perigo zebradas vermelhas/pretas, badges `[LEVEL-A]` e dropdown tático para o Mundo 07 (NERV Tactical Hangar).
- `EvaWorldSelector.tsx`: Terminal tático militar NERV / MAGI com faixas zebradas de perigo, laranja de emergência, carimbos kanji e telemetria para o Mundo 08 (Evangelion Episode UI).
- `XboxWorldSelector.tsx`: Pílula de policarbonato verde cristal com domo de jewel esmeralda 3D e prompt tátil `(A) BOOT DISK` para o Mundo 09 (Xbox Original).

#### 1. Modern Executive & High-Tech Portfolio (Mundo 1)
- **Acesso**: Raiz (`/` ou `#/`)
- **Estilo Visual**: Dark Theme (`#07090e`), neon cyan/emerald, tipografia moderna, blur e glassmorphism.
- **Destaques**:
  - `ThreeHeroCanvas.tsx`: Shaders e malha geométrica 3D interativa com Three.js.
  - `LanguageProvider.tsx`: Suporte a múltiplos idiomas (PT-BR, EN, ES, DE, JA).
  - `MotionCursor.tsx` & `ScrollProgress.tsx`: Feedback háptico visual com Framer Motion.
  - Seções: `Hero`, `ImpactMetrics`, `CaseStudies`, `ExperienceTimeline`, `TechMatrix`, `CertificationsEducation`, `ContactFooter`.
  - `PortfolioSwitcher.tsx`: Menu interativo para transição entre mundos.

#### 2. Retro Desktop Windows 98 Portfolio (Mundo 2)
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

#### 3. Luminous Prism & Apple Liquid Glass Portfolio (Mundo 06)
- **Acesso**: Hash `#/steamy-glass`, `#/glass`, `#/mundo-6` ou `#/proposta-6`
- **Estilo Visual**: Luminous Studio White & Apple Liquid Glass (`#F4F6F9`), vidro líquido com refração física óptica profunda (`backdrop-filter: blur(28px) saturate(190%) contrast(104%)`), realce interno especular multicamadas (`inset 0 2px 3px rgba(255,255,255,1)` e `inset 0 0 24px rgba(255,255,255,0.4)`), friso superior com dispersão cromática iridescente, reflexos cáusticos arco-íris e sombras ambientais fluidas.
- **Destaques de Motion Design e Interatividade**:
  - `PrismBackground.tsx`: Sistema de Aurora Líquida com orbes fluidos em deriva contínua (`liquid-drift-1`, `2`, `3` em ciano, violeta, rosa e pêssego), feixes de luz cáusticos cintilantes e **lente óptica de refração dinâmica seguindo o cursor do mouse** com amortecimento inercial contínuo (lerp via `requestAnimationFrame`) e dispersão prismática.
  - `PrismHeroVisual.tsx`: Card de código monumental em Apple Liquid Glass (`apple-liquid-card-light`) com física 3D interativa (Framer Motion tilt multi-eixo com amortecimento inercial, brilho especular dinâmico seguindo o cursor, valores interativos clicáveis, semáforo macOS e botão circular de ação em pílula líquida). O stepper vertical redundante ("Design, Develop, etc.") foi removido conforme solicitação de design limpo.
  - `PrismNavbar.tsx`: Cápsula de navegação e controles no padrão visionOS / Dynamic Island com pílulas líquidas (`apple-liquid-pill-light`), seletor bilíngue translúcido e dropdown líquido.
  - `PrismWorldSelector.tsx`: Seletor de mundos exclusivo em Apple Liquid Glass com reflexo especular vítreo e menus translúcidos.
  - `PrismHeroSection.tsx`: Recriação fiel da referência conceitual:
    - Badge `● FULLSTACK & MOBILE DEVELOPER` em pílula de vidro líquido com pulso.
    - Título monumental `Turning ideas into real products.` com gradiente iridescente azul-púrpura na palavra "ideas".
    - Botões de ação rápida `View my work ↗` (dark pill) e `Download CV ↓` (frosted liquid pill).
    - Faixa de ícones `TECH I WORK WITH`: chiclets de vidro líquido translúcido (`apple-liquid-pill-light`) para React Native, React, Next.js, Vite, TypeScript, Firebase e GitHub com tilt e feedback visual acelerado por GPU.
    - Card de código flutuante em vidro: semáforo macOS, botão de cópia de código, código interativo com valores clicáveis (`"great"`, `"fast"`, `"scalable"`, `"real"`), status `● Ready to build` e `Last commit 2h ago`.
    - Botão circular de vidro líquido com seta para scroll suave aos projetos.
  - `PrismFeaturedProjects.tsx`: Trilha horizontal `FEATURED PROJECTS ────` com 3 cartões de destaque e mockups de produto encapsulados em Apple Liquid Cards (`apple-liquid-card-light`) com modal de dossiê técnico com refração translúcida:
    - **BanQi App**: Mockup de smartphone dark titanium em ângulo com UI do BanQi, gráficos financeiros e modal de dossiê técnico.
    - **Guepsi**: Mockup de dashboard web SaaS com lista clínica de pacientes e modal de arquitetura.
    - **Open Source**: Mockup de terminal macOS dark glass com árvore de arquivos interativa e dossiê de ferramentas.
  - `PrismImpactMetrics.tsx`: 5 pods de engenharia em Apple Liquid Glass com métricas auditadas (-98% crashes, -55% RAM, -75% splash, +$10k AWS, 0%→40% testes).
  - `PrismExperience.tsx`: Trajetória profissional na Invillia/Casas Bahia/banQi e WiiD em cards translúcidos líquidos com pílulas de metadados e caixas de destaque em vidro.
  - `PrismTechMatrix.tsx`: Matriz completa de 32 competências em 4 categorias de cartões líquidos, chiclets em pílula translúcida, certificação oficial GitHub Copilot, graduação superior e idiomas.
  - `PrismContact.tsx`: Card de chamada "Let's talk" em Apple Liquid Card com cópia de e-mail com 1 clique, botões sociais em pílulas líquidas e download de currículo.
  - `PrismBottomBar.tsx`: Especificação óptica de design tokens de vidro líquido (transmissão 0.94, IOR 1.54, Abbe 58.6) em pílulas translúcidas.
  - Otimizações de Performance & Estabilidade: Áudio desativado por preferência de usuário ("sem som só foco"), eliminação total de 'pop de componente' (cards e seções renderizados sólidos e estáveis imediatamente sem estados de tela em branco durante o scroll), header responsivo blindado contra quebras de layout ao abrir o select de portfólios (com fechamento por clique externo/Escape, limites de largura `calc(100vw-2.5rem)` e scroll vertical para até 9 temas), redução de raio de blur para 8px com aceleração por GPU (`transform-gpu`, `translateZ(0)`), eliminação de mais de 90 filtros de blur aninhados via `.apple-liquid-chip` e suspensão de loops RAF de fundo durante o scroll (`glass-section-contain`), garantindo rolagem a 60-120 FPS ultra-fluida.

#### 4. Frutiger Aero & Aqua Ecotopia (Mundo 05)
- **Acesso**: Hash `#/proposta5`, `#/mundo5` ou `#/frutiger-aero`
- **Estilo Visual**: Céu azul cerúleo vibrante (`#0D8BF2`), colinas verdes orgânicas (`#2ED18C`), reflexos aquáticos calmos, botões gelatinosos convexos (skeuomorphic gel buttons com sweep de luz), bolhas d'água 3D translúcidas e vidro Aero Vista (`backdrop-filter: blur(20px)`).
- **Destaques**:
  - `ThreeAquaSpheres.tsx`: Experimento interativo Three.js WebGL 2.0 com 3 esferas aquáticas de material físico (`MeshPhysicalMaterial`, transmissão 0.88, IOR 1.333, reflexos cáusticos, partículas micro-bolhas flutuantes e órbita suave por cursor/toque).
  - `MsnMessengerWindow.tsx`: Interface completa e interativa do Windows Live Messenger 8.5:
    - **Wizz (Chamar Atenção)** funcional com física de vibração da janela (`animate-wizz`) e áudio procedimental via Web Audio API.
    - Chat interativo onde o visitante pode enviar mensagens com resposta inteligente simulada do João Vinícius e feedback sonoro autêntico.
  - `FrutigerBackground.tsx`: Cenário atmosférico com sunburst radial, colinas em camadas e 8 bolhas d'água interativas que estouram com som procedural (`playBubblePop()`) e reaparecem.
  - `AeroWorldSelector.tsx`: Botão flutuante aqua gel convexo com pop procedural de bolhas e janela popup autêntica Windows Vista Aero Glass.
  - `AeroMetricsSection.tsx`: 5 cards de vidro Aero com números monumentais (-98% crashes, -55% RAM, -75% boot, +$10k AWS, 0%→40% testes) e efeito de reflexo de luz no hover.
  - `AeroCaseStudies.tsx`: 3 janelas com cases arquiteturais de hiperescala (banQi, IA/Automação e Design System) com badges de seção e titlebars Vista Aero autênticas.
  - `AeroExperienceAndTech.tsx`: Trajetória executiva (4 posições) e matriz tecnológica aquática com 32 competências.
  - `AeroActionDock.tsx`: Docas de chamada para ação com botões de gelatina translúcidos (MSN Live, Currículo, E-mail).
  - `AeroTaskbarVista.tsx`: Barra de tarefas Vista Aero translúcida com relógio digital ao vivo, botão do menu Iniciar, controle de áudio e seletor rápido de mundos.
  - **Headers & Titlebars Vista Aero Glass**: Gradientes de vidro ciano-azul contínuos com reflexo especular vítreo (`::before`), brilho de texto característico do Windows Vista (`aero-titlebar-text` com glow aura) e botões de controle gel esféricos 3D (`aero-ctrl-btn`) eliminando qualquer corte horizontal no texto.

#### 5. Monolithic Concrete Sci-Fi Brutalism (Mundo 04)
- **Acesso**: Hash `#/monolith`, `#/mundo-4` ou `#/proposta-4`
- **Estilo Visual**: Brutalismo monumental cinematográfico sci-fi ("BUILDING SOFTWARE FOR A BIGGER TOMORROW"), superfícies de concreto escuro texturizado (`#16181c` / `#0a0d12`), reflexos aquáticos molhados, fendas verticais iluminadas em ouro/âmbar (`#ffaa33`), névoa volumétrica e silhueta humana de escala épica, tipografia Space Grotesk com tracking largo e telemetria mono.
- **Destaques**:
  - `MonolithCinematicCanvas.tsx`: Experiência WebGL 2.5D Depth-Map Parallax Shader + Volumetric Mist:
    - Arte conceitual em resolução 2K nítida (`2048x1374`) combinada a mapa de profundidade Z-Depth com filtragem suave de 5 taps.
    - Shader GLSL refinado com paralaxe tridimensional suave guiado pelo cursor ou giroscópio mobile, sem estourar as cores naturais da pintura original.
    - Cores escuras e reflexos naturais preservados nas poças d'água e rochas molhadas.
    - 32 puffs de névoa volumétrica procedural (sprites com gradiente suave) flutuando e deslizando com física de vento em diferentes profundidades Z.
  - `MonolithWorldSelector.tsx`: Seletor de mundos brutalista com blocos de concreto, stencil industrial `[ // WORLDS_SECTOR ]`, linhas douradas e áudio tátil de cliques e laser.
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

#### 6. Evangelion Tactical NERV HUD / MAGI System (Mundo 07)
- **Acesso**: Hash `#/nerv`, `#/evangelion`, `#/mundo-7` ou `#/proposta-7` | Protótipo Figma (Node `22:2461`)
- **Estilo Visual**: Preto tático absoluto (`#060709`), Laranja de Emergência NERV (`#FF5500`), Âmbar de Advertência (`#FFAA00`), Vermelho Alerta (`#FF1E28`), Verde Neon de Sincronia (`#00FF66`), tipografia militar com dados monospaçados, faixas diagonais de perigo (hazard stripes), selos de segurança japoneses (`非常事態`, `極秘`, `承認`) e estética clínica de sala de operações de Neon Genesis Evangelion.
- **Destaques de Design e Elementos de Interface**:
  - `MASTHEAD`: Faixa superior zebrada de advertência, identificação `NERV // CENTRAL DOGMA // TACTICAL HUD v3.33`, telemetria de inicialização e alerta `● ACTIVE: EMERGENCY STANDBY // PILOT SYNC NOMINAL`.
  - `PILOT DOSSIER`: Classificação `/// NERV COMMAND // PILOT CLASSIFICATION: S-CLASS CODE ARCHITECT`, selo de emergência com carimbo `EMERGENCY / 非常事態 · 極秘`, bio com diretriz tática e indicador de telemetria `INTERNAL BATTERY: 04:59:58 · SYNC HARMONICS: 99.42% · MAGI CONSENSUS: 3/3 [AGREE]`.
  - `MAGI SUPERCOMPUTER VIEWPORT`: Octógonos concêntricos de A.T. Field (`ABSOLUTE TERROR FIELD`), plano de corte `A.T. FIELD // CUT: Z+42.0`, cluster de votação de consenso dos 3 supercomputadores MAGI (`MAGI-1 MELCHIOR: AGREE · 承認`, `MAGI-2 BALTHASAR: AGREE · 承認`, `MAGI-3 CASPER: AGREE · 承認`), stream de telemetria de combate e botões de controle tático.
  - `RESOLUÇÃO TÁTICA (MÉTRICAS AUDITADAS)`: Faixa de perigo zebrada, tag `[ 5 AUDITED // 決議 ]`, métricas em laranja/verde (-98% crashes, -55% RAM, -75% cold boot, +$10k cloud, 0%→40% testes).
  - `OPERAÇÕES DE COMBATE (CASES)`: Cases estruturados com `▲ THREAT / ANOMALY:`, `■ COUNTERMEASURE:` e `◆ AUDITED OUTCOME:`.
  - `REGISTRO DE SERVIÇO & MATRIZ SINÁPTICA`: 4 posições de carreira e 32 competências distribuídas nos 4 domínios táticos do banco sináptico MAGI.

#### 7. Neon Genesis Evangelion Episode UI & MAGI (Mundo 08)
- **Acesso**: Hash `#/proposta-8`, `#/mundo-8`, `#/central-dogma`, `#/dogma`, `#/eva` ou `#/nerv`
- **Componente Raiz**: `src/components/eva/EvaEpisodePage.tsx`
- **Status**: Ativo
- **Estilo Visual e Conceito**: Experiência imersiva inspirada na estética cinematográfica, tipografia visceral de episódios e interface tática da Gainax / Hideaki Anno em *Neon Genesis Evangelion*. Sem elementos genéricos: layout escuro de alto contraste (`#020204`), tipografia Matisse (Shippori Mincho com kanjis monumentais e subtítulos em Cinzel/Space Grotesk), faixas zebradas de perigo (hazard stripes), selos militares de carimbo (`極秘 · TOP SECRET`, `非常事態 · EMERGENCY`, `任務完了 · VERIFIED`), telemetria monospaçada e sem áudio ("sem som só coda").
  - `EvaWorldSelector.tsx`: Terminal de coordenadas MAGI com selos militares, faixas de perigo zebradas e indicador [承認].
  - `EvaHoneycombBackground.tsx`: Malha de fundo animada em Canvas 2D de alta performance com tesselação de colmeia hexagonal e pentagonal intercalada, onda de radar contínua, ativações sinápticas aleatórias de células MAGI e iluminação interativa sob o cursor do mouse. Inclui botão de alternância `[ ⬡ COLMEIA / ⬠ PENTÁGONO ]` no cabeçalho.
  - `EvaTitleCard.tsx`: Modal cinematográfico de cartões de título de episódios (EYECATCH) navegável com controles de navegação, kanjis colossais (`使徒、襲来`, `見知らぬ、天井`, `鳴らない、電話`, `瞬間、心、重ねて`, `世界の中心でアイを叫んだけもの`), diretivas táticas e identificação do piloto João Vinícius Guerber de Souza (JVGS-01).
  - `EvaAtFieldCanvas.tsx`: Campo de Força de Terror Absoluto (A.T. Field) interativo em Canvas com octógonos concêntricos luminosos em laranja/âmbar, mira em retícula e distorções harmônicas reagindo à posição do cursor em tempo real (`PATTERN: BLUE / パターン青`).
  - `EvaSyncHarmonics.tsx`: Painel duplo tático contendo:
    - Contagem regressiva digital ao vivo da **Bateria Interna** (`04:59:xx`) com barra de 12 segmentos de energia e botão interativo para reconectar o **Cabo Umbilical** e restaurar energia 100%.
    - Osciloscópio SVG com onda senoidal em tempo real monitorando a **Ressonância Sináptica do Nervo A10** (Taxa de Sincronia de 99.42%).
  - `MagiConsensusTerminal.tsx`: Câmara de deliberação tripartite do supercomputador MAGI:
    - Núcleos orgânicos lógicos: `MAGI-1 MELCHIOR` (Cientista), `MAGI-2 BALTHASAR` (Mãe) e `MAGI-3 CASPER` (Mulher).
    - Módulo de teste interativo com 4 consultas arquiteturais de alta complexidade (migração Turbomodules/Fabric, agentes autônomos de IA em CI/CD, Design System multi-OS e mitigação de custos de infraestrutura AWS com economia de US$ 10.000/ano), demonstrando o processo de votação até o consenso unânime (`UNANIMOUS MAGI VERDICT [3/3 AGREE]`).
  - `EvaEpisodeActs.tsx`: 4 dossiês de combate confidenciais estruturados como episódios do anime, com modal expansível tático em tela cheia (Classified Tactical Dossier Modal):
    - *EPISODE:01 // 使徒、襲来*: Operação banQi Hyperscale Defense (crise de 120k crashes semanais reduzida em 98%, corte de 55% de RAM e aceleração de 75% no splash-to-home).
    - *EPISODE:02 // 見知らぬ、天井*: Operação Titã Cloud (otimização de custos e egress AWS com economia de US$ 10.000/ano).
    - *EPISODE:03 // 鳴らない、電話*: Operação Sinapse (agentes autônomos de IA, credencial GitHub Copilot Certified e blindagem de 0% para 40% de testes).
    - *EPISODE:04 // 瞬間、心、重ねて*: Operação Harmonia (Design System e Tokens multi-OS unificados entre Swift, Kotlin e React).
    - Cada dossiê possui análise em 3 blocos: Avaliação da Ameaça, Contramedida e Desfecho Auditado com selo carmesim `VERIFIED / 任務完了`, além do botão para abrir o dossiê detalhado em modal.
  - `EvaMagiBank.tsx`: Matriz sináptica com 32 competências de engenharia categorizadas em 4 bancos neurais, credencial oficial GitHub Copilot Certified (2025–2028), certificação AWS Certified Solutions Architect Associate (em andamento), diploma de Tecnólogo em Análise e Desenvolvimento de Sistemas (Uninter) e a Crônica de Deslocamento de Carreira real de 6 anos (Invillia / Casas Bahia Pay / banQi, WiiD, Freelance) formatada como registro tático de voo.
  - `EvaCommsTerminal.tsx`: Terminal de transmissão direta criptografada com cópia de e-mail com 1 clique e feedback instantâneo, comlinks oficiais do LinkedIn (`joaoguebrer`) e GitHub (`JVGS1111`) e download do currículo executivo.
  - **Internacionalização**: Suporte bilíngue nativo e completo com seletor `EN | PT` (Inglês como padrão / default), conforme as regras de ouro.

#### 6. Evangelion Tactical NERV HUD & Hangar Terminal (Mundo 7)
- **Acesso**: Hash `#/nerv`, `#/hangar`, `#/tactical`, `#/proposta-7` ou `#/mundo-7`
- **Componente Raiz**: `src/components/nerv/NervTacticalHangarPage.tsx`
- **Status**: Ativo
- **Estilo Visual e Conceito**: Cockpit operacional e terminal técnico militar NERV Cage / Geofront diretamente inspirado no design de interface de Neon Genesis Evangelion.
  - `NervTopNav.tsx`: Barra superior com emblema NERV com frase clássica (*GOD'S IN HIS HEAVEN. ALL'S RIGHT WITH THE WORLD*), identificação de engenheiro e título japonês `ソフトウェアエンジニア`, abas de navegação 01 a 06 com sublinhado vermelho, relógio digital ao vivo comutável entre Tóquio-3 (JST) e Brasília (BRT), pílula bilíngue `[🇺🇸 EN / 🇧🇷 PT]` (EN padrão) e seletor NERV exclusivo.
  - `NervLeftTabBar.tsx`: Barra vertical numérica lateral (01 HOME, 02 PROJECTS, 03 EXPERIENCE, 04 SKILLS, 05 ABOUT, 06 CONTACT), bloco de faixas de perigo diagonais zebradas em vermelho e preto `///` e selo de carimbo `NERV TECHNOLOGICAL RESEARCH DIVISION`.
  - `NervPersonalTerminal.tsx`: Card monumental em pergaminho off-white técnico com marcadores de registro em cruz `+`, `PERSONAL TERMINAL ——> USER: JVG`, tipografia display monumental em katakana `ソフトウェアエンジニア`, subtítulo em vermelho `JOÃO VINÍCIUS GUERBER`, slogan bilíngue `スケールするプロダクトと体験を構築する / BUILDING SCALABLE PRODUCTS AND EXPERIENCES`, botões operacionais `VER PROJETOS ↗` e `BAIXAR CV ——`, e chiclet `CORE SKILLS 主要スキル` com as competências de sustentação técnica.
  - `NervHangarView.tsx`: Ilustração monumental em alta resolução da jaula do EVA-01 no hangar industrial, gantry cranes, cabos de alta tensão, pilar de concreto marcado `01 EVA`, silhueta do engenheiro na passarela observando a máquina, balizas vermelhas piscantes e brilho bio-luminescente nos olhos do EVA-01.
  - `NervRightSidebarHud.tsx`: HUD tático militar com telemetria do EVA-01 (`STANDBY / COMBAT ACTIVE`), taxa de sincronia do piloto (99.4%) com osciloscópio de barras ao vivo, desenho esquemático em wireframe da cabeça do EVA-01 com linhas laser vermelhas, telemetria MAGI e radar topográfico vetorial da caldeira de Tóquio-3 com coordenadas geográficas.
  - `NervSelectedProjects.tsx`: Trilha horizontal inferior com 3 cartões translúcidos com bordas vermelhas e números monumentais (01 BanQi App, 02 Guepsi, 03 Biblioteca de Tools), tags de stack e métricas imediatas.
  - `NervDossierModal.tsx`: Modal expansível de dossiê militar tático contendo avaliação de ameaça, desafio, solução de engenharia, arquitetura e resultados de cada projeto, além de dossiês completos de carreira militar/indústria, matriz de habilidades de 32 competências com barras de proficiência, perfil do arquiteto e canal direto de transmissão criptografada com cópia de e-mail em 1 clique.
  - `NervWorldSelector.tsx`: Seletor de coordenadas dimensionais exclusivo com moldura vermelha NERV, faixas de perigo zebradas e telemetria de mundos.

#### 7. Xbox Original Verde Cristal & Bio-Mechanical Dashboard (Mundo 9)
- **Acesso**: Hash `#/xbox`, `#/verde-cristal`, `#/mundo-9` ou `#/proposta-9`
- **Estilo Visual**: Estética bio-mecânica Y2K e hardware industrial inspirada na lendária edição especial Translucent Green Crystal do Xbox Original e no dashboard futurista de Horace Luke (Creative Director na Microsoft). Tons de verde esmeralda profundo (`#000502`, `#011408`), verde neon radioativo / fósforo 520nm (`#00ff55`), linhas de cobre e dissipadores de alumínio expostos, e scanlines CRT autênticas.
- **Destaques de Engenharia e Design Alternativo**:
  - `XboxChassisCanvas.tsx`: "Caixa" translúcida 3D interativa em Three.js substituindo a foto estática. Modelada proceduralmente com material físico de policarbonato translúcido (`transmission: 0.82`, `thickness: 2.2`, `ior: 1.54`, `clearcoat: 0.4`), textura estocástica de injeção plástica (orange-peel bump map gerado em canvas), costelas em "X" em relevo no topo, blindagem metálica RF perfurada, placa-mãe PCB com LEDs de telemetria piscantes, bloco dissipador de alumínio, heatpipes de cobre, ventoinha de resfriamento giratória interna com modo Turbo (2.400 -> 4.800 RPM), orbe Jewel central em 3D com refração e pulso de energia, órbita 360° interativa por arrasto de mouse/touch e modo Raio-X.
  - `XboxDashboardMasthead.tsx`: Barra superior estilo BIOS do console com Jewel mini, versão do firmware (`TITAN GREEN CRYSTAL BIOS v1.00.5960`), status Xbox Live online (`GAMERTAG: JVGS1111`), medidor de blocos de memória e telemetria de áudio Dolby 5.1 e temperatura.
  - `XboxBladeNavigator.tsx`: Navegador alternativo por canais curvos estilo "Blades" do dashboard do Xbox (`[ 00 // CHASSIS ]`, `[ 01 // MEMORY ]`, `[ 02 // DISC BAY ]`, `[ 03 // SILICON ]`, `[ 04 // EEPROM ]`, `[ 05 // COMM DOCK ]`).
  - `XboxChassisHero.tsx`: Cockpit bio-mecânico assimétrico com perfil do arquiteto, 3 núcleos de execução (Runtime Kernel, Graphics & Physics, Cloud Infra), botões de controle tátil e o canvas 3D do chassi.
  - `XboxMemoryManager.tsx`: Console de gerenciamento de 64.000 blocos de memória com grade animada de 64 clusters de LED verde fósforo e 5 blocos de auditoria (-98% crashes, -55% RAM, -75% boot velocity, +$10k economia mensal, 40% cobertura de testes).
  - `XboxDiscDriveCases.tsx`: Baia de drive óptico apresentando 3 estojos (keep cases) translúcidos de DVD do Xbox em perspectiva 3D com DVD holográfico laser que desliza para fora no hover e modal de dossiê técnico de arquitetura ao pressionar `(A) BOOT TITLE`.
  - `XboxDevKernelPcb.tsx`: Placa de circuito impresso (PCB) com barramentos de cobre e 32 microchips montados em 4 bancos de hardware, com destaque para a credencial oficial GitHub Copilot Certified.
  - `XboxCareerEeprom.tsx`: Crônica operacional gravada em setores de memória flash EEPROM não-volátil (Invillia/Casas Bahia/banQi, WiiD, Freelance, Academia).
  - `XboxCommDock.tsx`: Doca de comunicação com barramento para 4 portas de controle, cópia de e-mail com 1 clique e atalhos de controle globais (`A`, `B`, `X`, `Y` ou teclas numéricas `0` a `5`).
  - `XboxWorldSelector.tsx`: Seletor de mundos exclusivo em formato de medalhão Jewel do Xbox em policarbonato verde cristal com domo 3D e menu estilo BIOS Boot Disk.
  - **Internacionalização**: Suporte nativo completo a Inglês (`en` - padrão) e Português (`pt`).

---

## 4. Como Adicionar uma Nova Página / Novo Mundo (Passo a Passo)

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

### Passo 4: Criar Seletor de Mundo com Identidade Própria e Adicionar ao Registro
- **Identidade Própria Obrigatória**: Toda nova página/mundo deve possuir seu próprio **World Selector** desenhado e estilizado de acordo com a sua temática visual exclusiva (sem reutilizar layouts de outros mundos).
- **Registro Central**: Adicione o novo mundo no catálogo central `src/data/portfolioRegistry.ts` com id, nomes, hash (`#/mundo-x`), tags bilíngues (`tag: 'Mundo X'`, `tagEn: 'World X'`), vibração de época e ícone característico.
- **Atalhos nos demais mundos**: Adicione atalho nos menus e desktops dos mundos existentes (ex.: desktop icon no Windows 98, menus de navegação).

### Passo 5: Atualizar a Documentação (OBRIGATÓRIO)
- Atualize a tabela e o detalhamento técnico em [3. Catálogo de Mundos e Portfólios](#3-catálogo-de-mundos-e-portfólios) neste arquivo (`AGENTS.md`).
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

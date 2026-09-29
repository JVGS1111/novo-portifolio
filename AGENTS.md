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

| # | Nome do Portfólio / Ideia | Rota / Hash | Componente Raiz | Descrição e Conceito |
|---|---------------------------|-------------|-----------------|----------------------|
| 1 | **Modern Executive & High-Tech** | `#/` ou vazio | `src/App.tsx` (Default) | Portfólio corporativo de alta conversão, estética dark mode/cyberpunk futurista, 3D interativo com Three.js, internacionalização (i18n com 5 idiomas), cursor com efeitos de física e métricas de impacto. |
| 2 | **Retro Desktop Windows 98** | `#/win98` ou `#win98` | `src/components/win98/Windows98Page.tsx` | Simulação completa de sistema operacional retrô Win98, janelas arrastáveis, barra de tarefas, menu Iniciar, sons sintetizados (Web Audio API), apps funcionais (DOS Prompt, IE, Explorer de Projetos, Monitor de CPU/RAM, Lixeira) e tela CRT. |

---

### Detalhamento das Páginas Existentes

#### 1. Modern Executive & High-Tech Portfolio
- **Acesso**: Raiz (`/` ou `#/`)
- **Estilo Visual**: Dark Theme (`#07090e`), neon cyan/emerald, tipografia moderna, blur e glassmorphism.
- **Destaques**:
  - `ThreeHeroCanvas.tsx`: Shaders e malha geométrica 3D interativa com Three.js.
  - `LanguageProvider.tsx`: Suporte a múltiplos idiomas (PT-BR, EN, ES, DE, JA).
  - `MotionCursor.tsx` & `ScrollProgress.tsx`: Feedback háptico visual com Framer Motion.
  - Seções: `Hero`, `ImpactMetrics`, `CaseStudies`, `ExperienceTimeline`, `TechMatrix`, `CertificationsEducation`, `ContactFooter`.
  - `FloatingRetroButton.tsx`: Botão flutuante estilizado para alternar rapidamente para o modo Windows 98.

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
  - Menu Iniciar funcional com opção de Desligamento do sistema (`ShutdownScreen.tsx`) e atalho de retorno ao portfólio moderno.

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

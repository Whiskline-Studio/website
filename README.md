# 🛸 Whiskline Studio

> **Onde o Design encontra o Código.**

## 🛠️ Stack

Para sustentar uma interface com alta carga visual e interatividade em tempo real, utilizamos o que há de mais moderno no ecossistema Web:

* **Vue.js 3 (Composition API):** A base do projeto, escolhida pela sua reatividade eficiente e arquitetura modular que permite a sincronização de múltiplos estados visuais simultaneamente.
* **TypeScript:** Garantindo a integridade dos dados e uma manutenção escalável através de tipagem estrita em todo o fluxo de desenvolvimento.
* **Tailwind CSS:** Implementação de um sistema de design *utility-first*, permitindo efeitos de *Glassmorphism*, filtros de camada e layouts responsivos complexos com baixo peso de CSS.
* **Canvas & JavaScript Avançado:** Utilizados para processar efeitos visuais de fundo e animações de partículas sem comprometer a thread principal de renderização do navegador.

---

## ✨ Destaques do Projeto

### 🎨 Design System

O site utiliza uma paleta de cores baseada em tons de "Carbono" e "Neo-Mint", focada em legibilidade e contraste sob condições de baixa luminosidade, remetendo a interfaces de alto nível tecnológico.

### ⚡ Performance & Reatividade

Apesar dos efeitos visuais avançados, o site mantém uma pontuação alta de performance através de:

* Carregamento assíncrono de componentes.
* Manipulação direta do DOM apenas quando estritamente necessário (via refs do Vue).
* Otimização de rotas para garantir transições instantâneas entre as seções.

### 🕵️ Interatividade Oculta

Além da navegação visual, o site conta com uma camada de interação por comandos, permitindo que usuários avançados explorem os "Labs" do estúdio de uma forma alternativa e técnica.

---

## 📂 Organização do Repositório

```text
├── src/
│   ├── components/    # Componentes modulares e reutilizáveis
│   ├── views/         # Páginas principais (Home, Projetos, Sobre)
│   ├── styles/        # Configurações de tema e animações globais
│   ├── router/        # Gestão de navegação inteligente
│   └── services/      # Lógica de integração com APIs externas

```
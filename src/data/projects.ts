export type Platform = "Play Store" | "Steam" | "Github" | "Behance";

export interface Project {
  id: string;
  image?: string;
  link?: string;
  platform?: Platform;
  icon?: string;
  bannerImage: string;
  tags: string[];
  gallery: string[];
  testimonial?: {
    text: string;
    author: string;
  };
  accentColor: string;
  pt: {
    title: string;
    shortDescription: string;
    client: string;
    fullDescription: string;
  };
  en: {
    title: string;
    shortDescription: string;
    client: string;
    fullDescription: string;
  };
}

export const projects: Project[] = [
  {
    id: "tales-of-bloomrise",
    image: "https://play-lh.googleusercontent.com/IDYMLLDzAcH5FuHO2Bv9rMCm8cyfRcunTgiZbWVCSxgPwiFJiWaM_BgIIBcLXUfBiRg=w1052-h592-rw",
    link: "https://play.google.com/store/apps/details?id=com.minelli.talesofbloomrise",
    platform: "Play Store",
    icon: 'https://i.imgur.com/0ap1q2X.png',
    bannerImage: "https://i.imgur.com/K1tp6Ft.png",
    tags: ["Unity", "C#", "Mobile Game"],
    gallery: ["https://play-lh.googleusercontent.com/IDYMLLDzAcH5FuHO2Bv9rMCm8cyfRcunTgiZbWVCSxgPwiFJiWaM_BgIIBcLXUfBiRg=w1052-h592-rw", "https://play-lh.googleusercontent.com/OXBks7J3VzwTUc1irD8fcRj9hQVBu_wawc94lgxAvNgX-cdJHgLZnXo6S7q1BioLYi4=w1052-h592-rw", "https://play-lh.googleusercontent.com/ANir8GDqs5CjjYSaMTG0Ol2ID-EpeJKuZKIP_meU5UEfL3IIcHAflX6ckwAGTX8OuQ=w1052-h592-rw", "https://play-lh.googleusercontent.com/MR_bCIz3duBINuswabNTbNxDmFkalEFsSADkheRr_6xFCEoMsNV-8-pSH0cQ7Uojj0U=w1052-h592-rw", "https://play-lh.googleusercontent.com/AmvxLZhhcJhAkS3BxSwMwpfC95xgLz8xJ_CEAKiinOinchFizJ5AwbYuG4mlA58g8MI=w1052-h592-rw", "https://play-lh.googleusercontent.com/EcpFEbzwkUJz8WOHgF38ywar9AZkd1JJVzTulIulGwcO1TS2XpO5H5LJHK33FGDZHQ=w1052-h592-rw"],
    accentColor: '#16cc1cff',
    pt: {
      title: "Tales of Bloomrise",
      shortDescription: "Explore dungeons e desvende os mistérios de Bloomrise.",
      client: "Whiskline Studio",
      fullDescription: "Tales of Bloomrise é um charmoso jogo de RPG para dispositivos móveis onde os jogadores mergulham em masmorras geradas proceduralmente. O projeto envolveu a criação de um sistema de combate por turnos, uma narrativa envolvente e arte pixelada feita à mão para evocar uma sensação nostálgica.",
    },
    en: {
      title: "Tales of Bloomrise",
      shortDescription: "Explore dungeons and unravel the mysteries of Bloomrise.",
      client: "Whiskline Studio",
      fullDescription: "Tales of Bloomrise is a charming mobile RPG where players delve into procedurally generated dungeons. The project involved creating a turn-based combat system, an engaging narrative, and hand-crafted pixel art to evoke a nostalgic feeling.",
    },
  },
  {
    id: "showbook",
    image: "https://github.com/joseminelli/joseminelli/raw/main/img/showbook.png",
    link: "https://www.behance.net/gallery/217410565/ShowBook",
    platform: "Behance",
    icon: '',
    bannerImage: "https://github.com/joseminelli/joseminelli/raw/main/img/showbook.png",
    tags: ["Figma", "UI/UX Design", "Prototyping"],
    accentColor: '#3b82f6',
    pt: {
      title: "ShowBook",
      shortDescription: "Um diário de shows para registrar e guardar memórias de cada show assistido.",
      client: "Projeto Conceitual",
      fullDescription: "ShowBook é um conceito de aplicativo mobile focado em amantes de música ao vivo. O desafio foi criar uma interface intuitiva e visualmente atraente que permitisse aos usuários catalogar shows, adicionar fotos, notas e criar uma linha do tempo musical de suas vidas. Todo o design foi desenvolvido no Figma, desde o wireframe até o protótipo de alta fidelidade.",
    },
    en: {
      title: "ShowBook",
      shortDescription: "A concert diary to record and save memories from each attended show.",
      client: "Conceptual Project",
      fullDescription: "ShowBook is a mobile app concept focused on live music lovers. The challenge was to create an intuitive and visually appealing interface that allows users to catalog concerts, add photos, notes, and create a musical timeline of their lives. The entire design was developed in Figma, from wireframes to high-fidelity prototypes.",
    },
    gallery: [],
  },
  {
    id: "quantum-drive",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2707960/header.jpg?t=1727981943",
    link: "https://store.steampowered.com/app/2707960/Quantum_Drive/",
    platform: "Steam",
    icon: '', 
    bannerImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2707960/header.jpg?t=1727981943",
    tags: ["Unreal Engine", "C++", "PC Game"],
    accentColor: '#f63b3bff',
    pt: {
      title: "Quantum Drive",
      shortDescription: "Intensidade e velocidade, onde as ruas são seu playground.",
      client: "Whiskline Studio",
      fullDescription: "Quantum Drive é um jogo de corrida arcade de alta velocidade para PC. Desenvolvido na Unreal Engine, o foco foi criar uma sensação de velocidade extrema e uma jogabilidade responsiva. O projeto incluiu modelagem 3D de veículos, design de pistas urbanas e implementação de uma física de condução arcade.",
    },
    en: {
      title: "Quantum Drive",
      shortDescription: "Intensity and speed, where the streets are your playground.",
      client: "Whiskline Studio",
      fullDescription: "Quantum Drive is a high-speed arcade racing game for PC. Developed in Unreal Engine, the focus was to create a sense of extreme speed and responsive gameplay. The project included 3D vehicle modeling, urban track design, and the implementation of an arcade driving physics.",
    },
    gallery: [],
  },
  {
    id: "purr-cafe",
    image: "https://play-lh.googleusercontent.com/iaLcLqeX15ULkqhU8y2-o5N_S5fRfVkoDY0qz7NnLgHba75asYSqfYwmtWrGRDqaTs0=w5120-h2880-rw",
    link: "https://play.google.com/store/apps/details?id=com.minelli.com.unityPurrCafe",
    platform: "Play Store",
    icon: 'https://i.imgur.com/KC72PUv.png',
    bannerImage: "https://play-lh.googleusercontent.com/iaLcLqeX15ULkqhU8y2-o5N_S5fRfVkoDY0qz7NnLgHba75asYSqfYwmtWrGRDqaTs0=w5120-h2880-rw",
    tags: ["Unity", "C#", "Mobile Game", "Simulation"],
    accentColor: '#f6893bff',
    pt: {
      title: "Purr Café",
      shortDescription: "Purr Cafe: Gerencie seu café de gatos, cozinhe e personalize!",
      client: "Whiskline Studio",
      fullDescription: "Purr Café é um acolhedor jogo de simulação onde os jogadores gerenciam seu próprio café com gatos. O desafio foi balancear a jogabilidade between cozinhar, decorar o café e cuidar dos gatos, criando um loop de gameplay relaxante e viciante. A arte 2D foi criada para ser fofa e convidativa.",
    },
    en: {
      title: "Purr Café",
      shortDescription: "Purr Cafe: Manage your cat cafe, cook, and customize!",
      client: "Whiskline Studio",
      fullDescription: "Purr Café is a cozy simulation game where players manage their own cat cafe. The challenge was to balance gameplay between cooking, decorating the cafe, and taking care of the cats, creating a relaxing and addictive gameplay loop. The 2D art was designed to be cute and inviting.",
    },
    gallery: [],
  },
  {
    id: "comunicativa",
    image: "https://raw.githubusercontent.com/joseminelli/joseminelli/refs/heads/main/img/comunicativa.png",
    link: "https://www.behance.net/gallery/205064669/ComunicATIVA-app-design",
    platform: "Behance",
    icon: '',
    bannerImage: "https://raw.githubusercontent.com/joseminelli/joseminelli/refs/heads/main/img/comunicativa.png",
    tags: ["Figma", "UI/UX Design", "Accessibility"],
    accentColor: '#b23bf6ff',
    pt: {
      title: "ComunicATIVA",
      shortDescription: "Uma solução digital e personalizável para comunicação alternativa.",
      client: "Projeto Acadêmico",
      fullDescription: "Este projeto de UI/UX visa criar uma ferramenta de comunicação alternativa e aumentativa (CAA) digital. Focado em acessibilidade, o design do ComunicATIVA foi pensado para ser altamente personalizável e fácil de usar por pessoas com dificuldades de fala, transformando um tablet ou smartphone em uma poderosa prancha de comunicação.",
    },
    en: {
      title: "ComunicATIVA",
      shortDescription: "A digital and customizable solution for alternative communication.",
      client: "Academic Project",
      fullDescription: "This UI/UX project aims to create a digital augmentative and alternative communication (AAC) tool. Focused on accessibility, the design of ComunicATIVA was conceived to be highly customizable and easy to use for people with speech difficulties, turning a tablet or smartphone into a powerful communication board.",
    },
    gallery: [],
  },
  {
    id: "adote-sua-patinha",
    image: "https://github.com/joseminelli/joseminelli/raw/main/img/pets.png",
    link: "https://github.com/joseminelli/adote-sua-patinha",
    platform: "Github",
    icon: '',
    bannerImage: "https://github.com/joseminelli/joseminelli/raw/main/img/pets.png",
    tags: ["Vue.js", "TypeScript", "Node.js"],
    accentColor: '#f3f63bff',
    pt: {
      title: "Adote sua Patinha",
      shortDescription: "Plataforma web para facilitar a doação e adoção de animais de estimação.",
      client: "Projeto Pessoal",
      fullDescription: "'Adote sua patinha' é uma aplicação web full-stack construída para conectar ONGs e protetores de animais a pessoas que desejam adotar um pet. A plataforma inclui perfis para os animais, filtros de busca e um sistema de contato direto, tudo construído com tecnologias web modernas.",
    },
    en: {
      title: "Adote sua Patinha",
      shortDescription: "A web platform to facilitate the donation and adoption of pets.",
      client: "Personal Project",
      fullDescription: "'Adopt Your Little Paw' is a full-stack web application built to connect NGOs and animal protectors with people who want to adopt a pet. The platform includes profiles for the animals, search filters, and a direct contact system, all built with modern web technologies.",
    },
    gallery: [],
  },
];
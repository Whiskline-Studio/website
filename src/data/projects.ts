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
    image: "https://i.imgur.com/vbRLIUU.png",
    link: "https://store.steampowered.com/app/4383630/Tales_of_Bloomrise/",
    platform: "Steam",
    icon: 'https://i.imgur.com/awGFzhq.png',
    bannerImage: "https://i.imgur.com/8g4KYgQ.png",
    tags: ["Unity", "C#", "Pc Game",  "Mobile Game"],
    gallery: [
      "https://i.imgur.com/o8SSWZT.png", 
      "https://i.imgur.com/l9buaoy.png", 
      "https://i.imgur.com/ASb9sSq.png", 
      "https://i.imgur.com/DbxU9M5.png", 
      "https://i.imgur.com/UjQvCi9.png", 
      "https://i.imgur.com/LJea8Xf.png"
    ],
    accentColor: '#16cc1cff',
    pt: {
      title: "Tales of Bloomrise",
      shortDescription: "Explore dungeons e desvende os mistérios de Bloomrise.",
      client: "Whiskline Studio",
      fullDescription: "Você é Rayy, uma jovem aventureira acolhida pela vila, que agora deve retribuir essa proteção. Sua jornada é um equilíbrio entre a luz do sol e a escuridão dos dungeons. Explore os dungeons, derrote monstros e descubra os mistérios de Bloomrise. O jogo apresenta uma mistura única de ação e exploração, com foco em criar um mundo imersivo cheio de segredos e desafios. Desenvolvido em Unity, Tales of Bloomrise oferece uma rica experiência narrativa combinada com mecânicas de jogo envolventes.",
    },
    en: {
      title: "Tales of Bloomrise",
      shortDescription: "Explore dungeons and unravel the mysteries of Bloomrise.",
      client: "Whiskline Studio",
      fullDescription: "You are Rayy, a young adventurer welcomed by the village, who must now return that protection. Your journey is a balance between the sunlight and the darkness of the dungeons. Explore the dungeons, defeat monsters, and uncover the mysteries of Bloomrise. The game features a unique blend of action and exploration, with a focus on creating an immersive world filled with secrets and challenges. Developed in Unity, Tales of Bloomrise offers a rich narrative experience combined with engaging gameplay mechanics.",
    },
  },
  {
    id: "showbook",
    image: "https://github.com/joseminelli/joseminelli/raw/main/img/showbook.png",
    link: "https://www.behance.net/gallery/217410565/ShowBook",
    platform: "Behance",
    icon: 'https://i.imgur.com/y2csmZ8.png',
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
    icon: 'https://i.imgur.com/jU5sKtb.png',
    bannerImage: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2707960/ss_ca49bcece1144cfbdd77c5924342d8bc24cdc14f.jpg",
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
    gallery: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2707960/ss_c843d13a21eae787909928f46f60c3c7ff33913d.jpg?t=1755542125",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2707960/ss_ab48390d130ecd60eff20014a6be21a115845a96.jpg?t=1755542125",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2707960/ss_59ad1937684c5fbf51df50f0f90ab1cb65c8697c.jpg?t=1755542125",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2707960/ss_a13a82716c455867ea90b47c2d5ab2f14a0c6d46.jpg?t=1755542125",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2707960/ss_2cfd58b7bcb60bedb75684e7ef7d8ea077d8b18b.jpg?t=1755542125",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2707960/ss_1d47b53fe25d8c7f2b9acdc32658d1de20e1b94a.jpg?t=1755542125",
    ],
  },
  {
    id: "purr-cafe",
    image: "https://i.imgur.com/U6tJ87Z.png",
    link: "https://play.google.com/store/apps/details?id=com.minelli.com.unityPurrCafe",
    platform: "Play Store",
    icon: 'https://i.imgur.com/KC72PUv.png',
    bannerImage: "https://i.imgur.com/U6tJ87Z.png",
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
    gallery: [
      "https://play-lh.googleusercontent.com/HbQ36ZKeD0DoB4eOGNs6N1WlavAkn4rM_hBTkQb8NvyDDCb8GHIkUnma5xYNiMs4HA=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/bQvh2xArthcuXu41NOfnJ87e7YRoTA05h0nKge5gonNzmjhwjIP6AZCbYjYeGSjg=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/RRSJIakL0-c3vd9ovqx_lW_LoNdLjFvXwsK7cqUiFeq4g__3_mOqv9HzGIL9_I3tTg=w2560-h1440-rw",
    ],
  },
  {
    id: "comunicativa",
    image: "https://i.imgur.com/WZXvJsk.png",
    link: "https://www.behance.net/gallery/205064669/ComunicATIVA-app-design",
    platform: "Behance",
    icon: 'https://i.imgur.com/Ral8gZ6.png',
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
    gallery: [
      "https://lh3.googleusercontent.com/VMgCVxUnc3onUe7aBqkzd2pjKj8Ovad4oxgLyNlj1rXyg80xN4dyxOu4DxENbu8s16OttBO8wtROXenyRdgbOQ=s2340",
      "https://lh3.googleusercontent.com/DDpm9zVjOSSzc5tvplh6eMmzgPvy5INjKls5YnHp9WS_oIk3qGePkxeNoJ2Joq2VYrWIxqXWgn_qTG40FaIf8A=s2340",
      "https://lh3.googleusercontent.com/x7ibX8-VqIYc4FagU94igAtwGuHMdX90qtylh9ilyKEPzRhlVSSVwoz1waoh9CULb65qQWyN6P6qHLo_UDlM",
    ],
  },
  {
    id: "adote-sua-patinha",
    image: "https://github.com/joseminelli/joseminelli/raw/main/img/pets.png",
    link: "https://github.com/joseminelli/adote-sua-patinha",
    platform: "Github",
    icon: 'https://i.imgur.com/pAX1mEF.png',
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
    gallery: [
      "https://github.com/joseminelli/adote-sua-patinha/blob/master/img/preview.png?raw=true",
      "https://github.com/joseminelli/adote-sua-patinha/blob/master/img/preview2.png?raw=true",
    ],
  },
];
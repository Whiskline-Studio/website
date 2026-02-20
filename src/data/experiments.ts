export interface Experiment {
    id: string;
    media?: string;
    pt: {
        title: string;
        description: string;
        button?: string;
    };
    en: {
        title: string;
        description: string;
        button?: string;
    };
    es: {
        title: string;
        description: string;
        button?: string;
    };
    tags: string[];
    link?: string;
}

export const experiments: Experiment[] = [
    {
        id: "rayy-adventures",
        media: "https://i.imgur.com/4wpZniV.jpeg",
        pt: {
            title: "Rayy Adventures",
            description: "A primeira versão espiritual do Tales of Bloomrise! Existe uma demo jogável feita na Unity.",
            button: "Baixar demo no Drive"
        },
        en: {
            title: "Rayy Adventures",
            description: "The first spiritual version of Tales of Bloomrise! A playable demo was made in Unity.",
            button: "Download demo on Drive"
        },
        es: {
            title: "Rayy Adventures",
            description: "¡La primera versión espiritual de Tales of Bloomrise! Una demo jugable fue creada en Unity.",
            button: "Descargar demo en Drive"
        },
        tags: ["Unity", "Prototype", "Game"],
        link: "https://drive.google.com/file/d/1J6Uag9X3Ni4eKERESZu5d8RlgphS5IWa/view?usp=sharing",
    },
    {
        id: "freseologista",
        media: "https://i.imgur.com/2fJweji.png",
        pt: {
            title: "Freseologista",
            description: "Um teste de jogo feito em Flutter onde você deve adivinhar de qual mídia vem uma frase.",
            button: "Baixar na Play Store"
        },
        en: {
            title: "Freseologist",
            description: "A test game built with Flutter where you guess which type of media a phrase comes from.",
            button: "Download on Play Store"
        },
        es: {
            title: "Freseologista",
            description: "Un juego de prueba hecho en Flutter donde debes adivinar de qué medio proviene una frase.",
            button: "Descargar en Play Store"
        },
        tags: ["Flutter", "Prototype", "Mobile"],
        link: "https://play.google.com/store/apps/details?id=app.fraseologista",
    },
    {
        id: "veterinario-ia",
        media: "https://i.imgur.com/2ZgoCIw.png",
        pt: {
            title: "Veterinário IA (Assistente)",
            description: "Uma IA experimental com Gemini para fornecer informações veterinárias. Este projeto é uma ferramenta de auxílio e não substitui uma consulta profissional.",
            button: "Ver no GitHub"
        },
        en: {
            title: "AI Veterinarian (Assistant)",
            description: "An experimental AI using Gemini to provide veterinary information. This project is an aid tool and does not replace a professional consultation.",
            button: "View on GitHub"
        },
        es: {
            title: "Veterinario IA (Asistente)",
            description: "Una IA experimental con Gemini para proporcionar información veterinaria. Este proyecto es una herramienta de apoyo y no sustituye una consulta profesional.",
            button: "Ver en GitHub"
        },
        tags: ["JavaScript", "Gemini", "IA"],
        link: "https://github.com/joseminelli/Veterinario-IA",
    },
    {
        id: "lyrix",
        media: "https://www.shutterstock.com/image-vector/image-photo-placeholder-no-thumbnail-260nw-2502908919.jpg",
        pt: {
            title: "Lyrix",
            description: "Uma aplicação mobile para pesquisar e exibir letras de músicas, construída com Flutter e a API da Audd.",
            button: "Ver no GitHub"
        },
        en: {
            title: "Lyrix",
            description: "A mobile application to search and display song lyrics, built with Flutter and the Audd API.",
            button: "View on GitHub"
        },
        es: {
            title: "Lyrix",
            description: "Una aplicación móvil para buscar y mostrar letras de canciones, construida con Flutter y la API de Audd.",
            button: "Ver en GitHub"
        },
        tags: ["Flutter", "Mobile App", "API"],
    },
    {
        id: "notify-extension",
        media: "https://i.imgur.com/Fsxjp4P.png",
        pt: {
            title: "Notify Extension",
            description: "Uma extensão para Chrome que permite criar e gerir notas e lembretes diretamente no navegador.",
            button: "Ver no Google Web Store"
        },
        en: {
            title: "Notify Extension",
            description: "A Chrome extension that allows creating and managing notes and reminders directly in the browser.",
            button: "View on Google Web Store"
        },
        es: {
            title: "Notify Extension",
            description: "Una extensión de Chrome que permite crear y gestionar notas y recordatorios directamente en el navegador.",
            button: "Ver en Google Web Store"
        },
        tags: ["JavaScript", "Chrome Extension", "HTML/CSS"],
        link: "https://chromewebstore.google.com/detail/page-notify/jplpilahckigpcdeibdoppgghfemidaf",
    },
    {
        id: "ollie-bot",
        media: "https://i.imgur.com/moqNdV6.png", 
        pt: {
            title: "O.L.L.I.E BOT",
            description: "Um bot multifuncional para Discord construído com Node.js, focado em moderação e entretenimento.",
            button: "Ver no GitHub"
        },
        en: {
            title: "O.L.L.I.E BOT",
            description: "A multifunctional Discord bot built with Node.js, focused on moderation and entertainment.",
            button: "View on GitHub"
        },
        es: {
            title: "O.L.L.I.E BOT",
            description: "Un bot multifuncional para Discord construido con Node.js, enfocado en moderación y entretenimiento.",
            button: "Ver en GitHub"
        },
        tags: ["Node.js", "Discord.js", "Bot"],
        link: "https://github.com/joseminelli/O.L.L.I.E-BOT"
    },
];
export interface Experiment {
    id: string;
    media: string;
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
            description: "The first spiritual version of Tales of Bloomrise! A demo version was made in Unity.",
            button: "Download demo on Drive"
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
        tags: ["Flutter", "Prototype", "Mobile"],
        link: "https://play.google.com/store/apps/details?id=app.fraseologista",
    },
];

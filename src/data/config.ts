export type NavLink = {
    href: string;
    labelKey: string;
};

export const navLinks: NavLink[] = [
    { href: "home", labelKey: "nav.home" },
    { href: "sobre", labelKey: "nav.about" },
    { href: "portfolio", labelKey: "nav.portfolio" },
    { href: "labs", labelKey: "nav.labs" },
    { href: "contato", labelKey: "nav.contact" },
];
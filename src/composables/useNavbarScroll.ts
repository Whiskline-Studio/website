// Use "import type" para importar apenas a definição do tipo
import type { NavLink } from '../data/config';
import { ref, onMounted, onUnmounted } from 'vue';

export function useNavbarScroll(routeList: NavLink[]) { // Agora 'NavLink' é um tipo válido
    const isScrolled = ref(false);
    const activeSection = ref(routeList.length > 0 ? routeList[0].href : '');

    const handleScrollStyle = () => {
        isScrolled.value = window.scrollY > 50;
    };

    let observer: IntersectionObserver;

    onMounted(() => {
        window.addEventListener('scroll', handleScrollStyle);

        const sections = routeList.map(link => document.getElementById(link.href)).filter(Boolean) as HTMLElement[];
        if (sections.length === 0) return;

        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    activeSection.value = entry.target.id;
                }
            });
        }, {
            rootMargin: '-50% 0px -50% 0px'
        });

        sections.forEach(section => observer.observe(section));
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScrollStyle);
        if (observer) {
            observer.disconnect();
        }
    });

    return { isScrolled, activeSection };
}
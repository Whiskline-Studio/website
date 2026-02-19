import { computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { useScroll } from './useScroll';
import { navLinks } from '../data/config';
import { projects } from '../data/projects';
import { useNavbarScroll } from './useNavbarScroll';
import { useTranslations } from "./useTranslations";
import { ref } from 'vue';

export const isMobileMenuOpen = ref(false);

export function useNavbar() {
    const { t, currentLocale } = useTranslations();
    const route = useRoute();
    const routeList = navLinks;
    const { scrollToSection } = useScroll();

    const { isScrolled, activeSection } = useNavbarScroll(routeList);

    const handleKeydown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            isMobileMenuOpen.value = false;
        }
    };
    onMounted(() => document.addEventListener('keydown', handleKeydown));
    onUnmounted(() => document.removeEventListener('keydown', handleKeydown));

    const handleLinkClick = (id: string) => {
        scrollToSection(id, () => {
            isMobileMenuOpen.value = false;
        });
    };

    const currentProject = computed(() => {
        if (route.name === 'projectDetail') {
            const projectId = String(route.params.id);
            return projects.find(p => p.id === projectId);
        }
        return null;
    });

    const accentColor = computed(() => {
        if (route.name === 'about') return '#aaaaaa';
        if (route.name === 'labs') return '#d946ef';
        return currentProject.value ? currentProject.value.accentColor : '#43cb9c';
    });

    return {
        t,
        route,
        routeList,
        isOpen: isMobileMenuOpen,
        isScrolled,
        activeSection,
        currentProject,
        accentColor,
        handleLinkClick,
        currentLocale,
    };
}
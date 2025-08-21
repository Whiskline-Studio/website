import { useRouter } from 'vue-router';

export function useScroll() {
    const router = useRouter();

    const scrollToSection = async (id: string, callback?: () => void) => {
        // Se não estivermos na página inicial, navegue para ela primeiro
        if (router.currentRoute.value.name !== 'home') {
            await router.push({ name: 'home' });
        }

        // Aguarde o próximo ciclo de renderização para garantir que a seção exista no DOM
        await new Promise(resolve => setTimeout(resolve, 0));

        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            if (callback) {
                callback();
            }
        }
    };

    return { scrollToSection };
}
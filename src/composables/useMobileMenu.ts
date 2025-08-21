import { ref, onMounted, onUnmounted } from 'vue';

export function useMobileMenu() {
    const isOpen = ref(false);

    const handleKeydown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            isOpen.value = false;
        }
    };

    onMounted(() => {
        document.addEventListener('keydown', handleKeydown);
    });

    onUnmounted(() => {
        document.removeEventListener('keydown', handleKeydown);
    });

    return { isOpen };
}
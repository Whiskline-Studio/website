
import { ref, onMounted, onUnmounted, type Ref } from 'vue';

export function useAnimateOnScroll(elementRef: Ref<HTMLElement | null>) {
    const isVisible = ref(false);

    let observer: IntersectionObserver;

    onMounted(() => {
        if (!elementRef.value) return;

        observer = new IntersectionObserver(([entry]) => {
        
            if (entry.isIntersecting) {
                isVisible.value = true;
                observer.unobserve(entry.target);
            }
        }, {
            threshold: 0.1,
        });

        observer.observe(elementRef.value);
    });

    onUnmounted(() => {
        if (observer) {
            observer.disconnect();
        }
    });

    return { isVisible };
}
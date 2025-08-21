<script setup lang="ts">
import { ref } from 'vue';
import type { Project } from '../data/projects';


import { useTranslations } from "../composables/useTranslations";

const { t, currentLocale } = useTranslations();

const props = defineProps<{
    project: Project;
}>();

// --- Lógica para o efeito 3D  ---
const cardRef = ref<HTMLElement | null>(null);

const handleMouseMove = (event: MouseEvent) => {
    if (!cardRef.value) return;
    const rect = cardRef.value.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (mouseY - centerY) / centerY * -8;
    const rotateY = (mouseX - centerX) / centerX * 8;
    cardRef.value.style.transition = 'transform 0.1s ease-out';
    cardRef.value.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
};

const handleMouseLeave = () => {
    if (!cardRef.value) return;
    cardRef.value.style.transition = 'transform 0.4s ease-out';
    cardRef.value.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
};
</script>

<template>
    <router-link :to="{ name: 'projectDetail', params: { id: project.id } }" class="card-container h-full block"
        @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
        <div ref="cardRef" class="card-content bg-black/70 border border-[#43cb9c]/30">

            <div
                class="absolute -top-2 left-2 w-12 h-1 bg-gradient-to-r from-[#43cb9c] via-[#36a880] to-[#43cb9c] rounded-full animate-pulse">
            </div>

            <img v-if="project.image" :src="project.image"
                class="w-full h-48 object-cover rounded-md mb-4 border border-[#43cb9c]/20" />

            <div class="flex flex-col flex-grow pt-2">
                <h3 class="text-xl font-bold mb-2 text-white">{{ currentLocale ? project[currentLocale].title: '' }}</h3>
                <p class="text-gray-400 text-sm mb-6 flex-grow">{{ currentLocale ? project[currentLocale].shortDescription: '' }}</p>

                <div class="w-full h-px bg-white/10 mt-auto"></div>

                <div class="flex items-center justify-center gap-2 pt-4 text-[#43cb9c] font-semibold">
                    <span>{{ t('portfolio.seeDetails') }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 transition-transform duration-300 transform group-hover:translate-x-1"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    </router-link>
</template>

<style scoped>
.card-container {
    position: relative;
    perspective: 1000px;
    --glow-opacity: 0;
}

.card-container:hover {
    --glow-opacity: 0.2;
}

.card-container::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, #43cb9c, transparent 60%);
    filter: blur(30px);
    opacity: var(--glow-opacity);
    transition: opacity 0.4s ease-out, transform 0.4s ease-out;
    transform: scale(0.9);
    z-index: -1;
}

.card-container:hover::before {
    transform: scale(1);
}

.card-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    border-radius: 0.75rem;
    transform-style: preserve-3d;
    will-change: transform;
    transition: transform 0.4s ease-out;
}

.card-container {
    text-decoration: none;
}
</style>
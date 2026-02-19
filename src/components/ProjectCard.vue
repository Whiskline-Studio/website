<script setup lang="ts">
import { ref } from 'vue';
import type { Project } from '../data/projects';
import { useTranslations } from "../composables/useTranslations";

const { t, currentLocale } = useTranslations();
const props = defineProps<{ project: Project; }>();

const cardRef = ref<HTMLElement | null>(null);
const spotlightStyle = ref({ opacity: 0, left: '0px', top: '0px' });

const handleMouseMove = (event: MouseEvent) => {
    if (!cardRef.value) return;
    const rect = cardRef.value.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    spotlightStyle.value = {
        opacity: 1,
        left: `${x}px`,
        top: `${y}px`
    };

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -10;
    const rotateY = (x - centerX) / centerX * 10;
    
    cardRef.value.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
};

const handleMouseLeave = () => {
    if (!cardRef.value) return;
    spotlightStyle.value.opacity = 0;
    cardRef.value.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
};
</script>

<template>
    <router-link 
        :to="{ name: 'projectDetail', params: { id: project.id } }" 
        class="card-container group h-full block relative"
        @mousemove="handleMouseMove" 
        @mouseleave="handleMouseLeave"
    >
        <div ref="cardRef" class="card-content bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-2xl transition-transform duration-200 ease-out">
            
            <div 
                class="pointer-events-none absolute -inset-px z-30 transition-opacity duration-300"
                :style="{
                    background: `radial-gradient(600px circle at ${spotlightStyle.left} ${spotlightStyle.top}, rgba(67, 203, 156, 0.15), transparent 80%)`,
                    opacity: spotlightStyle.opacity
                }"
            ></div>

            <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#43cb9c]/50 to-transparent"></div>

            <div class="relative z-10 overflow-hidden rounded-lg mb-6 border border-white/5 bg-black" style="transform: translateZ(30px)">
                <img 
                    v-if="project.image" :src="project.image" loading="lazy"
                    class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
            </div>

            <div class="relative z-20 flex flex-col flex-grow" style="transform: translateZ(50px)">
                <h3 class="text-xl font-bold mb-2 text-white group-hover:text-[#43cb9c] transition-colors">
                    {{ currentLocale ? project[currentLocale].title : '' }}
                </h3>
                <p class="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                    {{ currentLocale ? project[currentLocale].shortDescription : '' }}
                </p>

                <div class="flex items-center justify-between pt-4 border-t border-white/5">
                    <div class="flex items-center gap-2 text-[#43cb9c] text-sm font-bold">
                        <span>{{ t('portfolio.seeDetails') }}</span>
                        <svg class="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<style scoped>
.card-content {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 1.25rem;
    transform-style: preserve-3d;
    height: 100%;
}

.card-container::after {
    content: "";
    position: absolute;
    inset: 0;
    background: #43cb9c;
    filter: blur(60px);
    opacity: 0;
    transition: opacity 0.5s;
    z-index: -1;
    border-radius: 1.25rem;
}

.card-container:hover::after {
    opacity: 0.05;
}
</style>
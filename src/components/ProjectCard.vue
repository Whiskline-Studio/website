<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Project } from '../data/projects';
import { useTranslations } from "../composables/useTranslations";

const { t, currentLocale } = useTranslations();
const props = defineProps<{ project: Project; index: number }>();

const cardRef = ref<HTMLElement | null>(null);
const spotlightStyle = ref({ opacity: 0, left: '0px', top: '0px' });

const handleMouseMove = (event: MouseEvent) => {
    if (!cardRef.value) return;
    const rect = cardRef.value.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    spotlightStyle.value = { opacity: 1, left: `${x}px`, top: `${y}px` };

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -8;
    const rotateY = (x - centerX) / centerX * 8;

    cardRef.value.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
};

const handleMouseLeave = () => {
    if (!cardRef.value) return;
    spotlightStyle.value.opacity = 0;
    cardRef.value.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
};
</script>

<template>
    <router-link :to="{ name: 'projectDetail', params: { id: project.id } }"
        class="card-container group h-full block relative" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
        <div ref="cardRef"
            class="card-content bg-[#0a0a0a]/90 backdrop-blur-md border border-white/5 overflow-hidden shadow-2xl transition-all duration-300 ease-out group-hover:border-[#43cb9c]/40">

            <div
                class="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#43cb9c]/20 group-hover:border-[#43cb9c]/50 transition-colors">
            </div>

            <span
                class="absolute top-4 right-4 font-mono text-[9px] text-[#43cb9c]/30 group-hover:text-[#43cb9c]/70 transition-colors select-none">
                PRJ_{{ String(index + 1).padStart(2, '0') }}
            </span>

            <div class="pointer-events-none absolute -inset-px z-30 transition-opacity duration-300" :style="{
                background: `radial-gradient(400px circle at ${spotlightStyle.left} ${spotlightStyle.top}, rgba(67, 203, 156, 0.1), transparent 80%)`,
                opacity: spotlightStyle.opacity
            }"></div>

            <div class="relative z-10 overflow-hidden rounded-xl mb-6 border border-white/5 bg-black shadow-2xl"
                style="transform: translateZ(40px)">
                <img v-if="project.image" :src="project.image" loading="lazy"
                    class="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            <div class="relative z-20 flex flex-col flex-grow" style="transform: translateZ(60px)">
                <h3
                    class="text-2xl font-black uppercase italic tracking-tighter text-white mb-2 group-hover:text-[#43cb9c] transition-colors leading-none">
                    {{ currentLocale ? project[currentLocale].title : '' }}
                </h3>

                <p class="text-gray-400 text-sm mb-6 flex-grow leading-relaxed font-light line-clamp-3">
                    {{ currentLocale ? project[currentLocale].shortDescription : '' }}
                </p>

                <div class="mt-auto pt-6 border-t border-white/5 flex items-center justify-between"
                    style="transform: translateZ(70px)">
                    <div class="flex flex-col">
                        <span class="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">Access_Level</span>
                        <span class="text-[10px] font-mono text-[#43cb9c] uppercase tracking-widest">Public_View</span>
                    </div>

                    <div class="relative group/btn">
                        <div
                            class="absolute -inset-2 bg-[#43cb9c]/20 blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
                        </div>
                        <div
                            class="relative flex items-center gap-3 px-6 py-2 bg-white text-black font-black uppercase italic text-[10px] tracking-[0.2em] rounded-lg transition-all duration-300 group-hover/btn:bg-[#43cb9c] group-hover/btn:text-white group-hover/btn:skew-x-[-10deg]">
                            <span>{{ t('portfolio.seeDetails') }}</span>
                            <svg class="h-3 w-3 transition-transform group-hover/btn:translate-x-1" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="absolute bottom-0 left-0 h-[1px] bg-[#43cb9c] transition-all duration-700 w-0 group-hover:w-full opacity-50 shadow-[0_0_15px_#43cb9c]">
            </div>
        </div>
    </router-link>
</template>

<style scoped>
.card-content {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 1.5rem;
    transform-style: preserve-3d;
    height: 100%;
    will-change: transform;
}

.card-container::after {
    content: "";
    position: absolute;
    inset: 0;
    background: #43cb9c;
    filter: blur(80px);
    opacity: 0;
    transition: opacity 0.5s;
    z-index: -2;
    border-radius: 1.5rem;
}

.card-container:hover::after {
    opacity: 0.08;
}
</style>
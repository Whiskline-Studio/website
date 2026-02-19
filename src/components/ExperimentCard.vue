<script setup lang="ts">
import { ref } from 'vue';
import { useTranslations } from "../composables/useTranslations";

const { t, currentLocale } = useTranslations();
import type { Experiment } from '../data/experiments';

const props = defineProps<{
    experiment: Experiment;
}>();

const cardRef = ref<HTMLElement | null>(null);

const handleMouseMove = (event: MouseEvent) => {
    if (!cardRef.value) return;
    const rect = cardRef.value.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    cardRef.value.style.setProperty('--x', `${mouseX}px`);
    cardRef.value.style.setProperty('--y', `${mouseY}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (mouseY - centerY) / centerY * -8;
    const rotateY = (mouseX - centerX) / centerX * 8;

    cardRef.value.style.transition = 'transform 0.1s ease-out';
    cardRef.value.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

const handleMouseLeave = () => {
    if (!cardRef.value) return;
    cardRef.value.style.transition = 'transform 0.4s ease-out';
    cardRef.value.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
};
</script>

<template>
    <div class="card-container h-full group" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
        <div ref="cardRef" class="card-content relative overflow-hidden bg-black/40 backdrop-blur-md">
            <div
                class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(67,203,156,0.15),transparent_80%)]">
            </div>
            <div
                class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#43cb9c]/50 to-transparent">
            </div>

            <div class="absolute top-4 right-4 font-mono text-[10px] text-[#43cb9c]/40 tracking-tighter select-none">
                EXP_ID: {{ experiment.id.toString().padStart(3, '0') }}
            </div>

            <div class="relative rounded-lg mb-6 overflow-hidden border border-white/5 shadow-2xl"
                style="transform: translateZ(40px)">
                <img v-if="experiment.media" :src="experiment.media"
                    class="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
            </div>

            <div class="flex flex-col flex-grow text-left" style="transform: translateZ(60px)">
                <h3
                    class="text-xl font-black text-white mb-2 group-hover:text-[#43cb9c] transition-colors duration-300">
                    {{ currentLocale ? experiment[currentLocale].title : "" }}
                </h3>

                <p class="text-gray-400 text-sm mb-6 flex-grow leading-relaxed font-light">
                    {{ currentLocale ? experiment[currentLocale].description : "" }}
                </p>

                <div class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                    <span v-for="tag in experiment.tags" :key="tag"
                        class="text-[10px] text-[#43cb9c] border border-[#43cb9c]/30 px-2 py-0.5 rounded uppercase font-mono tracking-tighter bg-[#43cb9c]/5">
                        {{ tag }}
                    </span>
                </div>

                <div v-if="experiment.link" class="mt-6" style="transform: translateZ(80px)">
                    <a :href="experiment.link" target="_blank" rel="noopener"
                        class="w-full text-center block px-6 py-3 rounded-xl bg-white text-black font-bold uppercase text-[10px] tracking-[0.2em] transition-all duration-300 hover:bg-[#43cb9c] hover:text-white hover:shadow-[0_0_20px_rgba(67,203,156,0.4)]">
                        {{ currentLocale ? experiment[currentLocale].button : "" }}
                    </a>
                </div>
            </div>

            <div
                class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(67,203,156,0.1),transparent_80%)]">
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-container {
    perspective: 1200px;
}

.card-content {
    --x: 50%;
    --y: 50%;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 1.25rem;
    padding: 1.75rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    transform-style: preserve-3d;
    will-change: transform, border-color;
}

.card-container:hover .card-content {
    border-color: rgba(67, 203, 156, 0.4);
    box-shadow:
        0 20px 40px rgba(0, 0, 0, 0.4),
        inset 0 0 20px rgba(67, 203, 156, 0.05);
}
</style>
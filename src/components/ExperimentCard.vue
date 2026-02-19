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
    <div class="card-container h-full" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
        <div ref="cardRef" class="card-content">
            <img v-if="experiment.media" :src="experiment.media"
                class="w-full h-48 object-cover rounded-md mb-4" loading="lazy" />
            <div class="flex flex-col flex-grow text-left">
                <h3 class="text-xl font-bold text-white mb-2">{{ currentLocale ? experiment[currentLocale].title : "" }}</h3>
                <p class="text-gray-400 text-sm mb-4 flex-grow">{{ currentLocale ? experiment[currentLocale].description: "" }}</p>
                <div class="flex flex-wrap gap-2 mt-auto pt-4">
                    <span v-for="tag in experiment.tags" :key="tag"
                        class="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {{ tag }}
                    </span>
                </div>
                <div v-if="experiment.link" class="mt-4">
                    <a :href="experiment.link" target="_blank" rel="noopener"
                        class="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#43cb9c] via-[#36a880] to-[#43cb9c] text-black font-bold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                        {{ currentLocale ? experiment[currentLocale].button: ""  }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-container {
    perspective: 1000px;
}

.card-content {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.75rem;
    padding: 1.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: transform 0.4s ease-out, box-shadow 0.4s ease-out;
    will-change: transform;
}

.card-container:hover .card-content {
    box-shadow: 0 0 30px rgba(67, 203, 156, 0.3);
    border-color: rgba(67, 203, 156, 0.5);
}
</style>
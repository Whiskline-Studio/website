<script setup lang="ts">
import { ref } from 'vue';
import { useTranslations } from '../composables/useTranslations';
import { experiments } from '../data/experiments';
import PlexusBackground from '../components/anims/PlexusBackground.vue';
import ExperimentCard from '../components/ExperimentCard.vue';

const { t, currentLocale } = useTranslations();
const experimentList = ref(experiments);
</script>

<template>
    <div class="page-enter relative">
        <PlexusBackground />
        <div class="relative py-24 px-6 text-white overflow-hidden pt-32">

            <section class="mb-24 relative max-w-6xl mx-auto">

                <div
                    class="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#43cb9c]/10 border border-[#43cb9c]/20 mb-8 font-mono text-[10px] tracking-widest text-[#43cb9c]">
                    <span class="relative flex h-2 w-2">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#43cb9c] opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-[#43cb9c]"></span>
                    </span>
                    {{ experimentList.length }} {{ t('labsPage.activeExperiments') }}
                </div>

                <div class="mb-12 text-left">
                    <div class="flex items-center gap-3 mb-2">
                        <span class="font-mono text-xs text-[#43cb9c] opacity-50 tracking-tighter">SEC_LAB</span>
                        <div class="h-[1px] w-12 bg-[#43cb9c]/30"></div>
                    </div>
                    <h2
                        class="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-white leading-none mb-4">
                        {{ t('labsPage.title') }}<span class="text-[#43cb9c]">_</span>
                    </h2>
                    <p class="text-gray-400 text-lg max-w-2xl leading-relaxed font-light">
                        <span class="text-[#43cb9c] font-mono mr-2">></span>
                        {{ t('labsPage.subtitle') }}
                    </p>
                </div>

                <div class="flex items-center gap-4 opacity-20">
                    <div class="h-[1px] w-full bg-gradient-to-r from-[#43cb9c] to-transparent"></div>
                </div>
            </section>

            <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <ExperimentCard v-for="(exp, index) in experimentList" :key="exp.id" class="experiment-list-item"
                    :style="{ '--delay': `${index * 0.1}s` }" :experiment="exp" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.page-enter {
    animation: fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(40px) skewY(2deg);
    }

    to {
        opacity: 1;
        transform: translateY(0) skewY(0);
    }
}

.experiment-list-item {
    opacity: 0;
    animation: card-in 0.8s var(--delay) cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes card-in {
    from {
        opacity: 0;
        transform: translateY(30px) scale(0.95);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}
</style>
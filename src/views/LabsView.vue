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
            <section class="text-center mb-16">
                <h1 class="text-5xl md:text-7xl font-extrabold mb-4">{{ t('labsPage.title') }}</h1>
                <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                    {{ t('labsPage.subtitle') }}
                </p>
            </section>

            <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ExperimentCard v-for="exp in experimentList" :key="exp.id" :experiment="exp" />
            </div>
        </div>
    </div>
</template>
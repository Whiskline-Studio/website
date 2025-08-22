<script setup lang="ts">

import { useTranslations } from "../../composables/useTranslations";
const { t, currentLocale } = useTranslations();
</script>
<template>
    <div class="w-full h-full flex items-center justify-center relative">

        <router-link to="/"
            class="absolute left-4 top-1/2 -translate-y-1/2 flex-shrink-0 flex items-center gap-2 text-white font-semibold px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clip-rule="evenodd" />
            </svg>
            <span class="hidden sm:inline">{{ t('nav.back') }}</span>
        </router-link>
        <div class="w-full h-full flex items-center justify-center">
            <router-link to="/" class="flex items-center" aria-label="Voltar para a página inicial">
                <img src="@/assets/WHISKLINE_icon.png" alt="Logo Icon" class="w-9 h-9 mr-3 object-contain" />
                <img src="@/assets/whiskline.png" alt="Whiskline" class="h-10 md:h-12 object-contain" />
            </router-link>
        </div>
    </div>
</template>
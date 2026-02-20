<script setup lang="ts">

import { useTranslations } from "../../composables/useTranslations";
const { t, currentLocale } = useTranslations();
</script>
<template>
    <div class="w-full h-full flex items-center justify-between gap-4">
        <router-link to="/"
            class="group flex-shrink-0 flex items-center gap-2 text-white font-black uppercase italic text-[10px] tracking-widest px-5 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-[#43cb9c] hover:text-black hover:skew-x-[-6deg] transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            <span class="hidden sm:inline">{{ t('nav.back') }}</span>
        </router-link>

        <div class="absolute left-1/2 -translate-x-1/2">
            <span class="text-white font-black italic uppercase tracking-[0.4em] text-xs">
                About<span class="text-[#43cb9c]">_</span>
            </span>
        </div>

        <router-link :to="{ name: 'home' }"
            class="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
            <img src="@/assets/whiskline.webp" alt="Whiskline" class="h-8 object-contain" />
        </router-link>
    </div>
</template>
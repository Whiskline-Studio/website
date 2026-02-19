<script setup lang="ts">
import { useNavbar } from '../../composables/useNavbar';
const { t } = useNavbar();
</script>

<template>
    <div class="w-full h-full flex items-center justify-between gap-4">
        <router-link to="/"
            class="group flex-shrink-0 flex items-center gap-2 text-white font-black uppercase italic text-[10px] tracking-widest px-5 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md hover:bg-[#43cb9c] hover:text-black hover:skew-x-[-6deg] transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover:-translate-x-1"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            <span class="hidden sm:inline">{{ t('nav.back') }}</span>
        </router-link>

        <div class="absolute left-1/2 -translate-x-1/2">
            <div class="labs-tag font-mono">
                <div class="relative flex h-2 w-2">
                    <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#43cb9c] opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-[#43cb9c]"></span>
                </div>
                <span class="font-bold tracking-[0.3em] text-[11px] uppercase">{{ t('nav.labs') }}</span>
            </div>
        </div>

        <router-link :to="{ name: 'home' }" class="flex items-center opacity-50 hover:opacity-100 transition-opacity">
            <img src="@/assets/WhisklineLabs.png" loading="lazy" alt="Whiskline" class="h-8 md:h-10 object-contain" />
        </router-link>
    </div>
</template>

<style scoped>
.labs-tag {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.4rem 1rem;
    border-radius: 4px;
    color: #43cb9c;
    background-color: rgba(67, 203, 156, 0.05);
    border: 1px solid rgba(67, 203, 156, 0.3);
    box-shadow: 0 0 15px rgba(67, 203, 156, 0.1);
    animation: labs-pulse 3s infinite ease-in-out;
}

@keyframes labs-pulse {

    0%,
    100% {
        box-shadow: 0 0 10px rgba(67, 203, 156, 0.1);
        transform: scale(1);
    }

    50% {
        box-shadow: 0 0 20px rgba(67, 203, 156, 0.3);
        transform: scale(1.02);
    }
}
</style>
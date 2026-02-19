<script setup lang="ts">
import { useNavbar } from '../../composables/useNavbar';
const { currentProject, t, currentLocale } = useNavbar();
</script>

<template>
    <div class="w-full h-full flex items-center justify-between gap-4 px-2">
        <router-link to="/"
            class="group flex-shrink-0 flex items-center gap-2 text-white font-black uppercase italic text-[10px] tracking-widest px-5 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-[#43cb9c] hover:text-black hover:skew-x-[-6deg] transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            <span class="hidden sm:inline">{{ t('nav.back') }}</span>
        </router-link>

        <div class="flex-grow flex items-center justify-center h-full">
            <div class="relative flex items-center gap-4 group/project">

                <span
                    class="absolute -left-8 font-mono text-[8px] text-white/10 uppercase tracking-tighter hidden md:block">
                    Project_ID: {{ currentProject?.id }}
                </span>

                <div
                    class="relative h-12 md:h-14 flex items-center transition-transform duration-500 group-hover/project:scale-110">
                    <img v-if="currentProject?.icon" :src="currentProject.icon"
                        :alt="currentProject[currentLocale || 'pt'].title"
                        class="h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />

                    <span v-else class="text-xl font-black italic uppercase text-white tracking-tighter">
                        {{ currentProject ? currentProject[currentLocale || 'pt'].title : '' }}
                    </span>
                </div>

                <span
                    class="absolute -right-8 font-mono text-[8px] text-[#43cb9c]/20 uppercase tracking-tighter hidden md:block">
                    Status: Active
                </span>
            </div>
        </div>

        <router-link :to="{ name: 'home' }" class="flex-shrink-0 group relative">
            <div class="absolute inset-0 bg-[#43cb9c]/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity">
            </div>
            <img src="@/assets/WHISKLINE_icon.png" alt="Whiskline"
                class="relative z-10 w-8 h-8 object-contain opacity-40 group-hover:opacity-100 transition-all" />
        </router-link>
    </div>
</template>

<style scoped>
img {
    filter: drop-shadow(0 0 10px rgba(67, 203, 156, 0.1));
}

.group\/project:hover img {
    filter: drop-shadow(0 0 20px rgba(67, 203, 156, 0.3));
}
</style>
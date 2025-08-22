<script setup lang="ts">
import { useNavbar } from '../../composables/useNavbar';
const { currentProject, t, currentLocale } = useNavbar();
</script>

<template>
    <div class="w-full h-full flex items-center justify-between gap-4">
        <router-link to="/"
            class="flex-shrink-0 flex items-center gap-2 text-white font-semibold px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clip-rule="evenodd" />
            </svg>
            <span class="hidden sm:inline">{{ t('nav.back') }}</span>
        </router-link>
        <div class="flex-grow flex items-center justify-center overflow-hidden h-full">
            <img v-if="currentProject?.icon" :src="currentProject.icon"
                :alt="currentLocale ? currentProject[currentLocale].title : ''" class="h-10 w-auto object-contain" />
            <span v-else class="font-semibold text-white truncate">{{ currentLocale && currentProject ?
                currentProject[currentLocale].title : ''}}</span>
        </div>
        <a href="/"
            class="flex-shrink-0 flex items-center ml-auto pl-4 opacity-50 hover:opacity-100 transition-opacity">
            <img src="@/assets/WHISKLINE_icon.png" alt="Logo Icon" class="w-8 h-8 object-contain" />
        </a>
    </div>
</template>
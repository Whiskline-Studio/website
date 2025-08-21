<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { onClickOutside } from '@vueuse/core';

const { locale } = useI18n();
const isOpen = ref(false);
const switcherRef = ref(null);

const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
];

const currentLanguage = computed(() => {
    return languages.find(lang => lang.code === locale.value) || languages[0];
});

const setLanguage = (langCode: string) => {
    locale.value = langCode;
    isOpen.value = false;
};

watch(locale, (newLocale) => {
    localStorage.setItem('user-language', newLocale);
});

onClickOutside(switcherRef, () => {
    isOpen.value = false;
});
</script>

<template>
    <div ref="switcherRef" class="relative w-40 text-sm">
        <button @click="isOpen = !isOpen"
            class="w-full flex items-center justify-between px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/20">
            <span class="flex items-center gap-2">
                <span class="text-lg">{{ currentLanguage.flag }}</span>
                <span>{{ currentLanguage.name }}</span>
            </span>
            <svg xmlns="http://www.w.org/2000/svg" class="h-5 w-5 text-gray-400 transition-transform duration-300"
                :class="{ 'rotate-180': isOpen }" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
            </svg>
        </button>

        <transition name="dropdown-fade">
            <ul v-if="isOpen"
                class="absolute bottom-full mb-2 w-full bg-black/80 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
                <li v-for="lang in languages" :key="lang.code">
                    <button @click="setLanguage(lang.code)"
                        class="w-full flex items-center gap-2 px-4 py-3 text-white text-left transition-colors duration-200 hover:bg-[#43cb9c] hover:text-black">
                        <span class="text-lg">{{ lang.flag }}</span>
                        <span>{{ lang.name }}</span>
                    </button>
                </li>
            </ul>
        </transition>
    </div>
</template>

<style scoped>

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
    transition: all 0.2s ease-out;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>
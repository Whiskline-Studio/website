<script setup lang="ts">
const emit = defineEmits(['selectLanguage']);

const selectLang = (lang: string) => {
    emit('selectLanguage', lang);
};
</script>

<template>
    <div class="fixed inset-0 bg-black/90 backdrop-blur-lg z-[9999] flex items-center justify-center">
        <div class="text-center">
            <h2 class="text-3xl font-bold text-white mb-2">Selecione seu idioma</h2>
            <p class="text-xl text-gray-400 mb-8">Choose your language</p>
            <div class="flex gap-4">
                <button @click="selectLang('pt')"
                    class="px-8 py-3 rounded-full bg-[#43cb9c] text-black font-bold text-lg hover:scale-105 transition-transform">
                    Português
                </button>
                <button @click="selectLang('en')"
                    class="px-8 py-3 rounded-full border border-white/50 text-white font-bold text-lg hover:scale-105 hover:bg-white/10 transition-all">
                    English
                </button>
            </div>
        </div>
    </div>
</template>
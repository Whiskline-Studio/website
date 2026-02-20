<script setup lang="ts">
import { ref, computed } from 'vue';
import { useTranslations } from "../composables/useTranslations";
import { onClickOutside } from '@vueuse/core';

// 1. Importe o tipo Locale do seu composable se ele existir, 
// ou use o casting para garantir compatibilidade.
const { t, currentLocale } = useTranslations();
const isOpen = ref(false);
const switcherRef = ref<HTMLElement | null>(null);

// Definição estrita para o componente
type SupportedLocale = "pt" | "en" | "es";

const languages: { code: SupportedLocale; name: string; flag: string; label: string }[] = [
  { code: "pt", name: "Português", flag: "🇧🇷", label: "LANG_PT_BR" },
  { code: "en", name: "English", flag: "🇺🇸", label: "LANG_EN_US" },
  { code: "es", name: "Español", flag: "🇪🇸", label: "LANG_ES_ES" },
];

const currentLanguage = computed(() => {
  // O "as string" ajuda a comparar se o tipo externo for genérico
  return languages.find(lang => lang.code === (currentLocale.value as string)) || languages[0];
});

const setLanguage = (langCode: SupportedLocale) => {
  // Forçamos a tipagem para satisfazer o Locale | null do composable
  (currentLocale.value as any) = langCode; 
  localStorage.setItem("user-language", langCode);
  isOpen.value = false;
};

onClickOutside(switcherRef, () => {
  isOpen.value = false;
});
</script>

<template>
  <div ref="switcherRef" class="relative w-44 z-[100]">
    <button
      type="button"
      @click.stop="isOpen = !isOpen"
      class="w-full flex items-center justify-between px-4 py-2 bg-white/5 border border-white/10 text-white transition-all duration-300 hover:bg-[#43cb9c] hover:text-black group select-none"
      :class="{ 'bg-[#43cb9c] text-black skew-x-[-6deg]': isOpen }"
    >
      <div class="flex flex-col items-start leading-none pointer-events-none">
        <span class="font-mono text-[8px] uppercase tracking-widest opacity-50">System_Lang</span>
        <div class="flex items-center gap-2 mt-1">
          <span class="text-sm font-black uppercase italic tracking-tighter">{{ currentLanguage.name }}</span>
        </div>
      </div>
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 transition-transform duration-500 pointer-events-none"
        :class="{ 'rotate-180': isOpen }"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>

    <transition name="dropdown-glitch">
      <div v-if="isOpen" class="rounded-xl absolute bottom-full mb-2 w-full z-[110]">
        <ul class="bg-[#0a0a0a] border border-[#43cb9c]/30 shadow-[0_0_20px_rgba(67,203,156,0.15)] overflow-hidden">
          <li v-for="lang in languages" :key="lang.code" class="list-none">
            <button
              type="button"
              @click="setLanguage(lang.code)"
              class="w-full flex flex-col items-start px-4 py-3 text-white transition-all duration-200 hover:bg-[#43cb9c]/10 group/item relative overflow-hidden text-left"
              :class="{ 'border-l-4 border-[#43cb9c] bg-[#43cb9c]/5': currentLocale === lang.code }"
            >
              <span class="font-mono text-[7px] text-[#43cb9c] tracking-[0.3em] mb-1">{{ lang.label }}</span>
              <div class="flex items-center justify-between w-full">
                  <span class="font-black uppercase italic tracking-tighter text-sm group-hover/item:translate-x-1 transition-transform">
                    {{ lang.name }}
                  </span>
                  <span class="text-xs opacity-0 group-hover/item:opacity-100 transition-opacity font-mono">_ACCESS</span>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<style scoped>
/* Efeito de entrada estilo carregamento de terminal */
.dropdown-glitch-enter-active {
  animation: glitch-in 0.3s ease-out;
}
.dropdown-glitch-leave-active {
  transition: all 0.2s ease-in;
  opacity: 0;
  transform: translateY(10px);
}

@keyframes glitch-in {
  0% { opacity: 0; transform: translateY(10px) skewX(5deg); }
  50% { opacity: 0.5; transform: translateY(-2px) skewX(-2deg); }
  100% { opacity: 1; transform: translateY(0) skewX(0); }
}

/* Mantendo o visual reto e agressivo */
ul {
    border-radius: 0px; 
}
button {
    border-radius: 0px;
}
</style>
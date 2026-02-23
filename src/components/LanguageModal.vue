<script setup lang="ts">
const emit = defineEmits<{
  (e: 'selectLanguage', lang: 'pt' | 'en' | 'es'): void
}>();

const selectLang = (lang: 'pt' | 'en' | 'es') => {
  emit('selectLanguage', lang);
};
</script>

<template>
  <div class="fixed inset-0 bg-[#050505] z-[9999] flex items-center justify-center p-6">
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none"
      style="background-image: radial-gradient(#43cb9c 1px, transparent 1px); background-size: 30px 30px;">
    </div>

    <div class="relative z-10 w-full max-w-2xl">
      <div class="flex items-center gap-3 mb-8 justify-center">
        <div class="h-[1px] w-12 bg-[#43cb9c]/30"></div>
        <span class="font-mono text-[10px] text-[#43cb9c] uppercase tracking-[0.5em]">System_Init //
          Lang_Selection</span>
        <div class="h-[1px] w-12 bg-[#43cb9c]/30"></div>
      </div>

      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white leading-none mb-4">
          Selecione seu idioma<span class="text-[#43cb9c]">_</span>
        </h2>
        <div
          class="flex flex-wrap justify-center gap-x-4 gap-y-2 font-mono text-xs text-gray-500 uppercase tracking-widest">
          <span class="text-[#43cb9c]/80">Choose your language</span>
          <span class="text-[#43cb9c]/60">/</span>
          <span class="text-[#43cb9c]/80">Selecciona tu idioma</span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button @click="selectLang('pt')"
          class="group relative px-8 py-6 bg-white text-black font-black uppercase italic text-sm tracking-widest transition-all duration-300 hover:bg-[#43cb9c] hover:text-white hover:skew-x-[-6deg]"
          style="border-radius: 10px;">
          Português
        </button>

        <button @click="selectLang('en')"
          class="group relative px-8 py-6 bg-white/5 border border-white/10 text-white font-black uppercase italic text-sm tracking-widest transition-all duration-300 hover:border-[#43cb9c] hover:text-[#43cb9c] hover:skew-x-[-6deg]"
          style="border-radius: 10px;">
          English
        </button>

        <button @click="selectLang('es')"
          class="group relative px-8 py-6 bg-white/5 border border-white/10 text-white font-black uppercase italic text-sm tracking-widest transition-all duration-300 hover:border-[#43cb9c] hover:text-[#43cb9c] hover:skew-x-[-6deg]"
          style="border-radius: 10px;">
        Español
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  border-radius: 0px;
}
</style>
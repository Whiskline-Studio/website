<template>
  <section id="home" class="relative w-full h-screen flex flex-col justify-center items-center text-center p-6">

    <div class="inline-block mb-6 px-3 py-1 border border-[#43cb9c] text-[#43cb9c] font-semibold rounded-full text-sm">
      {{ t('hero.badge') }}
    </div>

    <h1 class="text-5xl md:text-6xl font-extrabold text-white mb-6">
      {{ t('hero.title', { 0: '' }) }} <span class="...">{{ t('hero.titleHighlight') }}</span> {{
        t('hero.title').split('{0}')[1] }}
    </h1>

    <p class="max-w-screen-sm mx-auto text-xl text-gray-300 mb-12">
      {{ t('hero.description') }}
    </p>

    <div class="flex flex-col md:flex-row justify-center gap-4 mb-20">
      <a href="#portfolio" @click.prevent="scrollToSection('portfolio')"
        class="px-8 py-3 rounded-full bg-[#43cb9c] text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300">
        {{ t('hero.buttonStart') }}
      </a>
      <a href="#contato" @click.prevent="scrollToSection('contato')"
        class="px-8 py-3 rounded-full border border-[#43cb9c] text-[#43cb9c] font-bold hover:bg-[#36a880] hover:text-white transition-all duration-300">
        {{ t('hero.buttonContact') }}
      </a>
    </div>



    <div
      class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg h-96 rounded-full pointer-events-none">
      <div
        class="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#43cb9c]/60 via-[#36a880]/40 to-transparent rounded-full blur-3xl animate-pulse-halo">
      </div>
    </div>

  </section>
  <LedBar></LedBar>
</template>

<script setup lang="ts">
import { useTranslations } from "../composables/useTranslations";

const { t } = useTranslations();

import LedBar from '../components/LedBar.vue';
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>


<style scoped>
.hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

@media (max-width: 768px) {
  .hero-section {
    justify-content: flex-start;
    padding-top: 10rem;
  }
}

@keyframes pulse-halo {

  0%,
  100% {
    opacity: 0.3;
    transform: scaleX(1) scaleY(0.9);
  }

  50% {
    opacity: 0.7;
    transform: scaleX(1) scaleY(1.1);
  }
}

.animate-pulse-halo {
  animation: pulse-halo 2s infinite;
}
</style>

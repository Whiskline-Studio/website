<script setup lang="ts">
import { useTranslations } from "../composables/useTranslations";
import { ref } from 'vue';
import { useAnimateOnScroll } from '../composables/useAnimateOnScroll';
import AbstractBackground from '../components/anims/AbstractBackground.vue';
const sectionRef = ref(null);
const { isVisible } = useAnimateOnScroll(sectionRef);

const { t } = useTranslations();

import LedBar from '../components/LedBar.vue';
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>
<template>
  <section id="home"
    class="relative w-full h-screen snap-start flex flex-col justify-center items-center text-center p-6 overflow-hidden">

    <AbstractBackground />
    <div class="absolute inset-0 z-0 opacity-50">
      <div v-for="n in 30" :key="n" class="particle" :style="{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${Math.random() * 10 + 10}s`
      }">
      </div>
    </div>

    <div data-animate="badge"
      class="relative group mb-8 px-6 py-2 rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-white/5 transition-all duration-300 hover:border-[#43cb9c]/50">

      <div
        class="absolute inset-0 z-0 backdrop-blur-xl bg-gradient-to-r from-[#43cb9c]/10 via-transparent to-[#43cb9c]/5">
      </div>

      <div
        class="absolute inset-0 z-10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none">
      </div>

      <div class="relative z-20 flex items-center gap-3">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#43cb9c] opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-[#43cb9c] shadow-[0_0_10px_#43cb9c]"></span>
        </span>

        <span class="text-white font-medium tracking-wider uppercase text-xs md:text-sm">
          <span class="text-[#43cb9c] font-black mr-1">//</span> {{ t('hero.badge') }}
        </span>
      </div>
    </div>

    <h1 data-animate="title" class="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
      {{ t('hero.title', { 0: '' }) }}
      <span
        class="bg-clip-text text-transparent bg-gradient-to-r from-[#43cb9c] to-[#36a880] drop-shadow-[0_0_15px_rgba(67,203,156,0.3)]">
        {{ t('hero.titleHighlight') }}
      </span>
      {{ t('hero.title').split('{0}')[1] }}
    </h1>

    <p data-animate="description" class="max-w-screen-sm mx-auto text-xl text-gray-300 mb-12">
      {{ t('hero.description') }}
    </p>

    <div data-animate="buttons" class="flex flex-col sm:flex-row justify-center gap-5 mb-20">
      <a href="#portfolio" @click.prevent="scrollToSection('portfolio')"
        class="relative overflow-hidden px-10 py-4 rounded-full bg-[#43cb9c] text-white font-bold shadow-[0_0_20px_rgba(67,203,156,0.4)] hover:shadow-[0_0_35px_rgba(67,203,156,0.6)] hover:-translate-y-1 transition-all duration-300">
        {{ t('hero.buttonStart') }}
      </a>

      <a href="#contato" @click.prevent="scrollToSection('contato')"
        class="px-10 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white font-bold hover:bg-white/10 hover:border-[#43cb9c]/50 transition-all duration-300">
        {{ t('hero.buttonContact') }}
      </a>
    </div>

    <div
      class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg h-96 rounded-full pointer-events-none">
      <div
        class="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#43cb9c]/60 via-[#36a880]/40 to-transparent rounded-full blur-3xl animate-pulse-halo">
      </div>
    </div>
    <div
      class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
      <span class="text-[10px] uppercase tracking-[0.2em] text-white">Scroll</span>
      <div class="w-[1px] h-12 bg-gradient-to-b from-[#43cb9c] to-transparent"></div>
    </div>
  </section>
  <LedBar></LedBar>
</template>



<style scoped>
@keyframes enter-animation {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

[data-animate="badge"] {
  animation: enter-animation 0.7s 0.2s ease-out forwards;
  opacity: 0;
}

[data-animate="title"] {
  animation: enter-animation 0.7s 0.4s ease-out forwards;
  opacity: 0;
}

[data-animate="description"] {
  animation: enter-animation 0.7s 0.6s ease-out forwards;
  opacity: 0;
}

[data-animate="buttons"] {
  animation: enter-animation 0.7s 0.8s ease-out forwards;
  opacity: 0;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background-color: rgba(67, 203, 156, 0.5);
  border-radius: 50%;
  animation-name: float;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes float {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.5;
  }

  50% {
    transform: translateY(-25px) scale(1.3);
    opacity: 1;
  }

  100% {
    transform: translateY(0) scale(1);
    opacity: 0.5;
  }
}

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

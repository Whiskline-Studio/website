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
      class="relative group mb-10 px-4 py-2 rounded-lg border border-white/10 overflow-hidden bg-black/40 backdrop-blur-md transition-all duration-500 hover:border-[#43cb9c]/50">

      <div class="relative z-20 flex items-center gap-4 font-mono text-[10px] tracking-[0.2em]">
        <span class="text-[#43cb9c] animate-pulse">● READY</span>
        <div class="w-[1px] h-3 bg-white/20"></div>
        <span class="text-white/70 uppercase">{{ t('hero.badge') }}</span>
        <span class="hidden md:inline text-white/20">ID_001.SYS</span>
      </div>
    </div>

    <h1 data-animate="title"
      class="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white mb-8 leading-[0.9]">
      {{ t('hero.title').split('{0}')[0] }}
      <span
        class="text-transparent bg-clip-text bg-gradient-to-br from-[#43cb9c] via-[#36a880] to-[#1a4d3b] drop-shadow-[0_0_30px_rgba(67,203,156,0.2)]">
        {{ t('hero.titleHighlight') }}
      </span>
      {{ t('hero.title').split('{0}')[1] }}
    </h1>

    <p data-animate="description"
      class="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 font-light leading-relaxed">
      <span class="text-[#43cb9c] font-mono mr-2">></span>
      {{ t('hero.description') }}
    </p>

    <div data-animate="buttons" class="flex flex-col sm:flex-row justify-center gap-6 mb-20">
      <a href="#portfolio" @click.prevent="scrollToSection('portfolio')"
        class="group relative overflow-hidden px-12 py-4 rounded-xl bg-white text-black font-black uppercase italic tracking-widest text-xs transition-all duration-300 hover:bg-[#43cb9c] hover:text-white hover:skew-x-[-6deg]">
        <span class="relative z-10">{{ t('hero.buttonStart') }}</span>
      </a>

      <a href="#contato" @click.prevent="scrollToSection('contato')"
        class="group px-12 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-white font-black uppercase italic tracking-widest text-xs transition-all duration-300 hover:border-[#43cb9c] hover:bg-[#43cb9c]/10 hover:skew-x-[-6deg]">
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
section#home::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%,
      rgba(0, 0, 0, 0.05) 50%);
  background-size: 100% 4px;
  z-index: 10;
  pointer-events: none;
}
[data-animate="title"] {
  text-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
}

@keyframes enter-animation {
  from {
    opacity: 0;
    transform: translateY(40px) skewY(2deg);
  }

  to {
    opacity: 1;
    transform: translateY(0) skewY(0);
  }
}

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

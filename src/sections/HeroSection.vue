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
<section id="home" class="relative w-full h-screen snap-start flex flex-col justify-center items-center text-center p-6 overflow-hidden">

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

    <div data-animate="badge" class="inline-block mb-6 px-3 py-1 border border-[#43cb9c] text-[#43cb9c] font-semibold rounded-full text-sm">
      {{ t('hero.badge') }}
    </div>

    <h1 data-animate="title" class="text-5xl md:text-6xl font-extrabold text-white mb-6">
      {{ t('hero.title', { 0: '' }) }} <span class="...">{{ t('hero.titleHighlight') }}</span> {{
        t('hero.title').split('{0}')[1] }}
    </h1>

    <p data-animate="description" class="max-w-screen-sm mx-auto text-xl text-gray-300 mb-12">
      {{ t('hero.description') }}
    </p>

    <div data-animate="buttons" class="flex flex-col md:flex-row justify-center gap-4 mb-20">
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



<style scoped>
@keyframes enter-animation {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Aplica a animação com um 'delay' diferente para cada elemento */
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

/* --- ANIMAÇÃO DAS PARTÍCULAS DE FUNDO --- */
.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background-color: rgba(67, 203, 156, 0.5);
  /* Cor #43cb9c com opacidade */
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

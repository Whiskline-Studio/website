<script setup lang="ts">
import { useTranslations } from "../composables/useTranslations";
import { ref } from 'vue';
import { useAnimateOnScroll } from '../composables/useAnimateOnScroll';
import AuroraBackground from '../components/AuroraBackground.vue';

const { t } = useTranslations();

// Refs para as animações de entrada
const missionRef = ref(null);
const pillarsRef = ref(null);
const ctaRef = ref(null);

const { isVisible: isMissionVisible } = useAnimateOnScroll(missionRef);
const { isVisible: arePillarsVisible } = useAnimateOnScroll(pillarsRef);
const { isVisible: isCtaVisible } = useAnimateOnScroll(ctaRef);
</script>

<template>
    <AuroraBackground/>
    <div class="page-enter py-24 px-6 text-white overflow-hidden pt-32">
        <div class="max-w-4xl mx-auto">

            <section class="text-center mb-24 md:mb-32">
                <h1 class="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
                    v-html="t('aboutPage.title').replace('Ideias', '<span class=\'text-transparent bg-gradient-to-r from-[#43cb9c] via-[#36a880] to-[#43cb9c] bg-clip-text\'>Ideias</span>').replace('Experiences', '<span class=\'text-transparent bg-gradient-to-r from-[#43cb9c] via-[#36a880] to-[#43cb9c] bg-clip-text\'>Experiences</span>')">
                </h1>
                <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                    {{ t('aboutPage.subtitle') }}
                </p>
            </section>

            <section ref="missionRef"
                class="flex flex-col md:flex-row items-center gap-12 mb-24 md:mb-32 transition-all duration-700 ease-out"
                :class="isMissionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
                <img src="@/assets/WHISKLINE_icon_main.png" alt="Whiskline Icon" class="w-48 h-48 animate-float" />
                <div>
                    <h2 class="text-4xl font-bold mb-4 text-left">{{ t('aboutPage.missionTitle') }}</h2>
                    <p class="text-gray-300 text-lg text-left">
                        {{ t('aboutPage.missionText') }}
                    </p>
                </div>
            </section>

            <section ref="pillarsRef">
                <h2 class="text-4xl font-bold text-center mb-16">{{ t('aboutPage.pillarsTitle') }}</h2>
                <div class="relative timeline-container">

                    <div class="timeline-line-bg"></div>
                    <div class="timeline-line-animated" :class="arePillarsVisible ? 'is-visible' : ''"></div>

                    <div class="timeline-item left" :class="arePillarsVisible ? 'is-visible' : ''">
                        <div class="timeline-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <div class="timeline-content">
                            <h3 class="text-xl font-semibold mb-2 text-[#43cb9c]">{{ t('aboutPage.pillar1Title') }}</h3>
                            <p class="text-gray-300">{{ t('aboutPage.pillar1Text') }}</p>
                        </div>
                    </div>

                    <div class="timeline-item right" :class="arePillarsVisible ? 'is-visible' : ''">
                        <div class="timeline-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div class="timeline-content">
                            <h3 class="text-xl font-semibold mb-2 text-[#43cb9c]">{{ t('aboutPage.pillar2Title') }}</h3>
                            <p class="text-gray-300">{{ t('aboutPage.pillar2Text') }}</p>
                        </div>
                    </div>

                    <div class="timeline-item left" :class="arePillarsVisible ? 'is-visible' : ''">
                        <div class="timeline-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3.002 3.002 0 013.445-2.328A3.002 3.002 0 0113 16v-2m-6 0V6a3 3 0 016 0v8m-6 0a3 3 0 00-3 3v2m6-11V6a3 3 0 016 0v8" />
                            </svg>
                        </div>
                        <div class="timeline-content">
                            <h3 class="text-xl font-semibold mb-2 text-[#43cb9c]">{{ t('aboutPage.pillar3Title') }}</h3>
                            <p class="text-gray-300">{{ t('aboutPage.pillar3Text') }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section ref="ctaRef" class="text-center mt-24 md:mt-32 transition-all duration-700 ease-out"
                :class="isCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
                <h2 class="text-4xl font-bold mb-4">{{ t('aboutPage.ctaTitle') }}</h2>
                <p class="text-gray-400 text-lg mb-8">{{ t('aboutPage.ctaSubtitle') }}</p>
                <router-link to="/projeto/tales-of-bloomrise"
                    class="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#43cb9c] via-[#36a880] to-[#43cb9c] text-black font-bold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                    {{ t('aboutPage.ctaButton') }}
                </router-link>
            </section>
        </div>
    </div>
</template>

<style scoped>
/* Animações de entrada e flutuação (existentes) */
.page-enter {
    animation: page-enter-animation 0.7s ease-out forwards;
}

@keyframes page-enter-animation {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

@keyframes float {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-15px);
    }

    100% {
        transform: translateY(0px);
    }
}

/* --- ESTILOS DA TIMELINE MELHORADA --- */
.timeline-container {
    margin: 0 auto;
}

/* Linha de fundo estática */
.timeline-line-bg {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateX(-50%);
    border-radius: 2px;
}

/* Linha animada que cresce com o scroll */
.timeline-line-animated {
    position: absolute;
    left: 50%;
    top: 0;
    width: 4px;
    background-color: #43cb9c;
    transform: translateX(-50%);
    border-radius: 2px;
    height: 0;
    /* Começa com altura 0 */
    transition: height 1.2s cubic-bezier(0.7, 0, 0.3, 1);
}

.timeline-line-animated.is-visible {
    height: 100%;
    /* Cresce para 100% quando visível */
}

.timeline-item {
    position: relative;
    width: 50%;
    margin-bottom: 50px;
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.6s ease-out;
}

.timeline-item.is-visible {
    opacity: 1;
    transform: translateY(0);
}

.timeline-item:nth-child(3) {
    transition-delay: 0.2s;
}

/* Ajustado para pular a linha */
.timeline-item:nth-child(4) {
    transition-delay: 0.4s;
}

.timeline-item:nth-child(5) {
    transition-delay: 0.6s;
}

.timeline-item.left {
    left: 0;
    padding-right: 50px;
    text-align: right;
}

.timeline-item.right {
    left: 50%;
    padding-left: 50px;
    text-align: left;
}

.timeline-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #0a0a0a;
    border: 3px solid #43cb9c;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    /* Efeito de glow para o ícone */
    color: #43cb9c;
    box-shadow: 0 0 15px rgba(67, 203, 156, 0.5);
    transition: transform 0.3s ease;
}

.timeline-item.is-visible .timeline-icon {
    animation: icon-pop-in 0.6s 0.5s ease-out forwards;
    opacity: 0;
    /* Começa invisível para a animação */
}

@keyframes icon-pop-in {
    from {
        transform: translateY(-50%) scale(0.5);
        opacity: 0;
    }

    to {
        transform: translateY(-50%) scale(1);
        opacity: 1;
    }
}

.timeline-item.left .timeline-icon {
    right: -25px;
}

.timeline-item.right .timeline-icon {
    left: -25px;
}

.timeline-content {
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 0.5rem;
    border: 1px solid transparent;
    transition: border-color 0.3s ease, transform 0.3s ease;
}

.timeline-item:hover .timeline-content {
    border-color: rgba(67, 203, 156, 0.5);
    transform: scale(1.02);
}

/* Ajustes para Mobile */
@media (max-width: 768px) {

    .timeline-line-bg,
    .timeline-line-animated {
        left: 25px;
    }

    .timeline-item {
        width: 100%;
        padding-left: 70px;
        padding-right: 0;
        text-align: left;
    }

    .timeline-item.right {
        left: 0;
    }

    .timeline-icon {
        left: 0;
    }
}
</style>
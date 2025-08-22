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
    <AuroraBackground />
    <div class="page-enter py-24 px-6 text-white overflow-hidden">
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
                    <div class="timeline-line"></div>

                    <div class="timeline-item left" :class="arePillarsVisible ? 'is-visible' : ''">
                        <div class="timeline-icon">🎨</div>
                        <div class="timeline-content">
                            <h3 class="text-xl font-semibold mb-2 text-[#43cb9c]">{{ t('aboutPage.pillar1Title') }}</h3>
                            <p class="text-gray-300">{{ t('aboutPage.pillar1Text') }}</p>
                        </div>
                    </div>

                    <div class="timeline-item right" :class="arePillarsVisible ? 'is-visible' : ''">
                        <div class="timeline-icon">🏆</div>
                        <div class="timeline-content">
                            <h3 class="text-xl font-semibold mb-2 text-[#43cb9c]">{{ t('aboutPage.pillar2Title') }}</h3>
                            <p class="text-gray-300">{{ t('aboutPage.pillar2Text') }}</p>
                        </div>
                    </div>

                    <div class="timeline-item left" :class="arePillarsVisible ? 'is-visible' : ''">
                        <div class="timeline-icon">🤝</div>
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
/* O seu CSS existente pode permanecer o mesmo */
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

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.timeline-container {
    margin: 0 auto;
}

.timeline-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateX(-50%);
    border-radius: 2px;
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

.timeline-item:nth-child(2) {
    transition-delay: 0.2s;
}

.timeline-item:nth-child(3) {
    transition-delay: 0.4s;
}

.timeline-item:nth-child(4) {
    transition-delay: 0.6s;
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
    font-size: 1.5rem;
    z-index: 10;
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
}

@media (max-width: 768px) {
    .timeline-line {
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
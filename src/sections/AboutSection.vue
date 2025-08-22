<script setup lang="ts">
import { useTranslations } from "../composables/useTranslations";
import BaseCard from '../components/BaseCard.vue';
import LedBar from '../components/LedBar.vue';
import { ref } from 'vue';
import { useAnimateOnScroll } from '../composables/useAnimateOnScroll';

const sectionRef = ref(null);
const { isVisible } = useAnimateOnScroll(sectionRef);
const { t } = useTranslations();
</script>

<template>
    <section ref="sectionRef" id="sobre"
        class="sobre-section relative w-full text-center transition-all duration-700 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
        <div class="absolute inset-0 bg-black/30"></div>

        <div class="relative z-10 max-w-5xl mx-auto px-6">
            <h2 class="text-4xl md:text-5xl font-extrabold mb-12 text-white">
                {{ t('about.title') }}
            </h2>

            <p class="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
                {{ t('about.description').split('{studioName}')[0] }}
                <span
                    class="text-transparent bg-gradient-to-r from-[#43cb9c] via-[#36a880] to-[#43cb9c] bg-clip-text font-semibold">
                    {{ t('about.studioName') }}
                </span>
                {{ t('about.description').split('{studioName}')[1] }}
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full">
                <BaseCard>
                    <h3 class="text-xl font-semibold mb-2 text-white">{{ t('about.card1Title') }}</h3>
                    <p class="text-gray-300">{{ t('about.card1Text') }}</p>
                </BaseCard>
                <BaseCard>
                    <h3 class="text-xl font-semibold mb-2 text-white">{{ t('about.card2Title') }}</h3>
                    <p class="text-gray-300">{{ t('about.card2Text') }}</p>
                </BaseCard>
                <BaseCard>
                    <h3 class="text-xl font-semibold mb-2 text-white">{{ t('about.card3Title') }}</h3>
                    <p class="text-gray-300">{{ t('about.card3Text') }}</p>
                </BaseCard>
            </div>

            <div class="mt-16">
                <router-link to="/sobre"
                    class="inline-block px-8 py-3 rounded-full border border-[#43cb9c] text-[#43cb9c] font-bold hover:bg-[#43cb9c]/20 transition-all duration-300">
                    {{ t('about.seeMore') }}
                </router-link>
            </div>

        </div>
    </section>
    <LedBar />
</template>

<style scoped>
.sobre-section {
    background-image: url('@/assets/whisklinebannertop.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: relative;
    overflow: hidden;
    padding: 8rem 1rem;
}

.sobre-section::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url('@/assets/whisklinebannertop.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    filter: blur(4px);
    transform: scale(1.05);
    pointer-events: none;
    z-index: 0;
    -webkit-mask-image: radial-gradient(circle at center, white 5%, transparent 30%);
    mask-image: radial-gradient(circle at center, white 5%, transparent 30%);
}

.sobre-section::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(circle at center, rgba(0, 0, 0, 0.55) 35%, rgba(0, 0, 0, 0.3) 95%);
    z-index: 0;
}

.sobre-section>div {
    position: relative;
    z-index: 1;
}

/* --- ESTILOS PARA MOBILE --- */
@media (max-width: 768px) {
    .sobre-section {
        background-image: none;
        background-color: #000;
        background-attachment: scroll;
        padding: 5rem 1rem;
    }

    .sobre-section::before {
        background-image: url('@/assets/whisklinebannertop.png');
        background-attachment: scroll;
        background-size: cover;
        animation: pan-background 40s linear infinite;
        filter: blur(3px) brightness(0.7);
        -webkit-mask-image: none;
        mask-image: none;
    }

    .sobre-section::after {
        background: rgba(0, 0, 0, 0.6);
    }

}

@keyframes pan-background {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>
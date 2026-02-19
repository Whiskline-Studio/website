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
            <div class="mb-12">
                <h2 class="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
                    {{ t('about.title') }}
                </h2>
                <div class="w-20 h-1 bg-[#43cb9c] mx-auto mt-6 rounded-full opacity-50"></div>
            </div>

            <p class="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
                {{ t('about.description').split('{studioName}')[0] }}
                <span
                    class="text-transparent bg-gradient-to-r from-[#43cb9c] via-[#36a880] to-[#43cb9c] bg-clip-text font-semibold">
                    {{ t('about.studioName') }}
                </span>
                {{ t('about.description').split('{studioName}')[1] }}
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full">
                <BaseCard
                    class="group hover:-translate-y-2 transition-all duration-500 border border-white/5 hover:border-[#43cb9c]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                    <div
                        class="mb-4 inline-block p-3 rounded-lg bg-white/5 text-[#43cb9c] group-hover:bg-[#43cb9c] group-hover:text-white transition-colors duration-500">
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-white group-hover:text-[#43cb9c] transition-colors">
                        {{ t('about.card1Title') }}
                    </h3>
                    <p class="text-gray-400 leading-relaxed text-sm">
                        {{ t('about.card1Text') }}
                    </p>
                </BaseCard>
                <BaseCard
                    class="group hover:-translate-y-2 transition-all duration-500 border border-white/5 hover:border-[#43cb9c]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                    <div
                        class="mb-4 inline-block p-3 rounded-lg bg-white/5 text-[#43cb9c] group-hover:bg-[#43cb9c] group-hover:text-white transition-colors duration-500">
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-white group-hover:text-[#43cb9c] transition-colors">
                        {{ t('about.card2Title') }}
                    </h3>
                    <p class="text-gray-400 leading-relaxed text-sm">
                        {{ t('about.card2Text') }}
                    </p>
                </BaseCard>
                <BaseCard
                    class="group hover:-translate-y-2 transition-all duration-500 border border-white/5 hover:border-[#43cb9c]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                    <div
                        class="mb-4 inline-block p-3 rounded-lg bg-white/5 text-[#43cb9c] group-hover:bg-[#43cb9c] group-hover:text-white transition-colors duration-500">
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-white group-hover:text-[#43cb9c] transition-colors">
                        {{ t('about.card3Title') }}
                    </h3>
                    <p class="text-gray-400 leading-relaxed text-sm">
                        {{ t('about.card3Text') }}
                    </p>
                </BaseCard>
            </div>

            <div class="mt-16">
                <router-link to="/sobre"
                    class="relative inline-flex items-center gap-2 px-10 py-4 rounded-full overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm text-white font-bold transition-all duration-300 hover:border-[#43cb9c] hover:bg-[#43cb9c]/10 group">
                    <span>{{ t('about.seeMore') }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
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
    height: 100vh;
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
    background-attachment: fixed;
    z-index: 0;
}

.sobre-section::after {
    content: "";
    position: absolute;
    inset: 0;
    background: 
        linear-gradient(to bottom, #000 0%, transparent 20%, transparent 80%, #000 100%),
        radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, #000 100%),
        url("https://grainy-gradients.vercel.app/noise.svg");
    opacity: 0.9;
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
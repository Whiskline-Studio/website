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
        class="sobre-section relative w-full overflow-hidden transition-all duration-1000 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'">
        
        <div class="relative z-10 max-w-6xl mx-auto px-6">
            <header class="mb-24 text-left">
                <div class="flex items-center gap-3 mb-6">
                    <span class="font-mono text-[10px] text-[#43cb9c] uppercase tracking-[0.5em] opacity-60">
                        System_Docs // SEC_02
                    </span>
                    <div class="h-[1px] w-24 bg-gradient-to-r from-[#43cb9c]/40 to-transparent"></div>
                </div>
                
                <h2 class="text-6xl md:text-7xl font-black uppercase italic tracking-tighter text-white leading-[0.8] mb-10">
                    {{ t('about.title') }}<span class="text-[#43cb9c]">_</span>
                </h2>

                <p class="text-gray-400 text-lg md:text-2xl leading-relaxed max-w-3xl font-light">
                    <span class="text-[#43cb9c] font-mono mr-2">></span>
                    {{ t('about.description').split('{studioName}')[0] }}
                    <span class="text-white font-black uppercase italic tracking-tighter bg-white/5 px-2 py-0.5 rounded shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                        {{ t('about.studioName') }}
                    </span>
                    {{ t('about.description').split('{studioName}')[1] }}
                </p>
            </header>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-left w-full mb-20">
                <BaseCard moduleId="01">
                    <h3 class="text-2xl font-black uppercase italic tracking-tighter text-white mb-4 group-hover:text-[#43cb9c] transition-colors leading-none">
                        {{ t('about.card1Title') }}
                    </h3>
                    <p class="text-gray-400 group-hover:text-gray-200 leading-relaxed text-sm md:text-base transition-colors font-light">
                        {{ t('about.card1Text') }}
                    </p>
                </BaseCard>

                <BaseCard moduleId="02">
                    <h3 class="text-2xl font-black uppercase italic tracking-tighter text-white mb-4 group-hover:text-[#43cb9c] transition-colors leading-none">
                        {{ t('about.card2Title') }}
                    </h3>
                    <p class="text-gray-400 group-hover:text-gray-200 leading-relaxed text-sm md:text-base transition-colors font-light">
                        {{ t('about.card2Text') }}
                    </p>
                </BaseCard>

                <BaseCard moduleId="03">
                    <h3 class="text-2xl font-black uppercase italic tracking-tighter text-white mb-4 group-hover:text-[#43cb9c] transition-colors leading-none">
                        {{ t('about.card3Title') }}
                    </h3>
                    <p class="text-gray-400 group-hover:text-gray-200 leading-relaxed text-sm md:text-base transition-colors font-light">
                        {{ t('about.card3Text') }}
                    </p>
                </BaseCard>
            </div>

            <div class="text-left">
                <router-link to="/sobre"
                    class="group relative inline-flex items-center gap-4 px-12 py-5 bg-white text-black font-black uppercase italic tracking-widest text-xs transition-all duration-300 hover:bg-[#43cb9c] hover:text-white hover:skew-x-[-6deg] rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <span>{{ t('about.seeMore') }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </router-link>
            </div>
        </div>
    </section>
    <LedBar />
</template>

<style scoped>
.sobre-section {
    min-height: 100vh;
    padding: 10rem 0;
    background-color: #050505;
    position: relative;
}

.sobre-section::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url('https://i.imgur.com/cvlWzDm.jpeg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    filter: brightness(0.25) saturate(0.2);
    z-index: 0;
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.sobre-section:hover::before {
    transform: scale(1.03);
}

.sobre-section::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at 20% 50%, transparent 0%, #050505 100%),
        url("https://grainy-gradients.vercel.app/noise.svg");
    opacity: 0.4;
    z-index: 1;
    mix-blend-mode: multiply;
}

@media (max-width: 768px) {
    .sobre-section {
        padding: 6rem 0;
    }

    .sobre-section::before {
        background-attachment: scroll;
        filter: brightness(0.3) blur(2px);
    }

    .sobre-section::after {
        background: linear-gradient(to bottom, #050505, rgba(5, 5, 5, 0.8), #050505);
    }
}
</style>
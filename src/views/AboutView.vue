<script setup lang="ts">
import { ref, computed } from 'vue';
import { useHead } from '@vueuse/head';
import { useTranslations } from "../composables/useTranslations";
import { useAnimateOnScroll } from '../composables/useAnimateOnScroll';
import AuroraBackground from '../components/anims/AuroraBackground.vue';

const { t } = useTranslations();

const missionRef = ref(null);
const originRef = ref(null);
const pillarsRef = ref(null);
const ctaRef = ref(null);

const { isVisible: isMissionVisible } = useAnimateOnScroll(missionRef);
const { isVisible: isOriginVisible } = useAnimateOnScroll(originRef);
const { isVisible: arePillarsVisible } = useAnimateOnScroll(pillarsRef);

useHead({
    title: computed(() => `Whiskline Studio | ${t('about.title')} `),
    meta: [
        {
            name: 'description',
            content: computed(() => t('aboutPage.metaDescription')),
        },
    ],
})
</script>

<template>
    <div class="relative min-h-screen bg-[#050505]">
        <AuroraBackground />

        <div class="page-enter py-24 px-6 text-white overflow-hidden pt-32 relative z-10">
            <div class="max-w-6xl mx-auto">

                <section class="mb-32 text-left max-w-4xl">
                    <div class="flex items-center gap-3 mb-4">
                        <span class="font-mono text-xs text-[#43cb9c] opacity-50 tracking-tighter">SEC_ABOUT_STU</span>
                        <div class="h-[1px] w-12 bg-[#43cb9c]/30"></div>
                    </div>
                    <h1 class="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-[0.85]"
                        v-html="t('aboutPage.title').replace('Ideias', '<span class=\'text-transparent bg-clip-text bg-gradient-to-r from-[#43cb9c] to-[#36a880] drop-shadow-[0_0_25px_rgba(67,203,156,0.3)]\'>Ideias</span>')">
                    </h1>
                    <p class="text-gray-400 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
                        <span class="text-[#43cb9c] font-mono mr-2">></span>
                        {{ t('aboutPage.subtitle') }}
                    </p>
                </section>

                <section ref="missionRef"
                    class="flex flex-col md:flex-row items-center gap-16 mb-40 transition-all duration-1000 ease-out"
                    :class="isMissionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'">

                    <div class="relative group flex-shrink-0">
                        <div
                            class="absolute inset-0 bg-[#43cb9c]/20 blur-[60px] rounded-full group-hover:bg-[#43cb9c]/40 transition-colors duration-700">
                        </div>
                        <img src="@/assets/WHISKLINE_icon_main.png" alt="Whiskline Icon"
                            class="relative z-10 w-56 h-56 animate-float" />
                    </div>

                    <div class="text-left">
                        <div class="flex items-center gap-3 mb-2">
                            <span
                                class="font-mono text-xs text-[#43cb9c] opacity-50 tracking-tighter">CORE_MISSION</span>
                            <div class="h-[1px] w-12 bg-[#43cb9c]/30"></div>
                        </div>
                        <h2
                            class="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white mb-6 leading-none">
                            {{ t('aboutPage.missionTitle') }}
                        </h2>
                        <p class="text-gray-400 text-lg font-light leading-relaxed max-w-xl">
                            {{ t('aboutPage.missionText') }}
                        </p>
                    </div>
                </section>

                <section ref="originRef" class="mb-40 transition-all duration-1000 ease-out"
                    :class="isOriginVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'">

                    <div class="mb-12 text-left">
                        <div class="flex items-center gap-3 mb-2">
                            <span
                                class="font-mono text-xs text-[#43cb9c] opacity-50 tracking-tighter">ORIGIN_STORY</span>
                            <div class="h-[1px] w-12 bg-[#43cb9c]/30"></div>
                        </div>
                        <h2
                            class="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white leading-none">
                            Behind the Whiskers<span class="text-[#43cb9c]">_</span>
                        </h2>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div class="space-y-6">
                            <p class="text-gray-300 text-lg leading-relaxed font-light">
                                <span class="text-[#43cb9c] font-mono mr-2">></span>
                                {{ t('aboutPage.originText') }}
                            </p>

                            <div
                                class="p-6 bg-white/5 border-l-2 border-[#43cb9c] font-mono text-[10px] uppercase tracking-[0.3em] text-[#43cb9c]/60 backdrop-blur-sm">
                                Data_Reference: Felis catus // Whiskers_Tactile_Module
                            </div>
                        </div>

                        <div class="flex gap-6">
                            <div class="relative group flex-1">
                                <div
                                    class="absolute -inset-2 bg-[#43cb9c]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity">
                                </div>
                                <div
                                    class="relative overflow-hidden rounded-xl border border-white/10 bg-black aspect-[3/4] shadow-2xl">
                                    <img src="@/assets/cat1.jpg" alt="Cat Unit 01"
                                        class="w-full h-full object-cover grayscale-2 group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                                    <div
                                        class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                                        <span class="font-mono text-[10px] text-white/50 uppercase">Ollie //
                                            Chief_Purr_Officer</span>
                                    </div>
                                </div>
                            </div>
                            <div class="relative group flex-1 mt-12">
                                <div
                                    class="absolute -inset-2 bg-[#43cb9c]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity">
                                </div>
                                <div
                                    class="relative overflow-hidden rounded-xl border border-white/10 bg-black aspect-[3/4] shadow-2xl">
                                    <img src="@/assets/cat2.jpg" alt="Cat Unit 02"
                                        class="w-full h-full object-cover grayscale-2 group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                                    <div
                                        class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                                        <span class="font-mono text-[10px] text-white/50 uppercase">Smoke //
                                            Creative_Lead</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section ref="pillarsRef" class="mb-40">
                    <div class="mb-20 text-center">
                        <h2 class="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-white">{{
                            t('aboutPage.pillarsTitle') }}</h2>
                    </div>

                    <div class="relative timeline-container max-w-3xl mx-auto">
                        <div class="timeline-line-bg"></div>
                        <div class="timeline-line-animated" :class="arePillarsVisible ? 'is-visible' : ''"></div>

                        <div class="timeline-item left" :class="arePillarsVisible ? 'is-visible' : ''">
                            <div class="timeline-icon">01</div>
                            <div class="timeline-content">
                                <h3 class="text-xl font-black uppercase italic text-[#43cb9c] mb-2">{{
                                    t('aboutPage.pillar1Title') }}</h3>
                                <p class="text-gray-400 font-light text-sm">{{ t('aboutPage.pillar1Text') }}</p>
                            </div>
                        </div>

                        <div class="timeline-item right" :class="arePillarsVisible ? 'is-visible' : ''">
                            <div class="timeline-icon">02</div>
                            <div class="timeline-content text-left">
                                <h3 class="text-xl font-black uppercase italic text-[#43cb9c] mb-2">{{
                                    t('aboutPage.pillar2Title') }}</h3>
                                <p class="text-gray-400 font-light text-sm">{{ t('aboutPage.pillar2Text') }}</p>
                            </div>
                        </div>

                        <div class="timeline-item left" :class="arePillarsVisible ? 'is-visible' : ''">
                            <div class="timeline-icon">03</div>
                            <div class="timeline-content">
                                <h3 class="text-xl font-black uppercase italic text-[#43cb9c] mb-2">{{
                                    t('aboutPage.pillar3Title') }}</h3>
                                <p class="text-gray-400 font-light text-sm">{{ t('aboutPage.pillar3Text') }}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="text-center py-20 border-t border-white/5">
                    <h2 class="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white mb-6">{{
                        t('aboutPage.ctaTitle') }}</h2>
                    <p class="text-gray-500 text-lg mb-12 font-light max-w-xl mx-auto">{{ t('aboutPage.ctaSubtitle') }}
                    </p>

                    <router-link to="/projeto/tales-of-bloomrise"
                        class="group relative rounded-lg  inline-flex items-center gap-4 px-12 py-5 bg-white text-black font-black uppercase italic tracking-widest text-xs transition-all duration-300 hover:bg-[#43cb9c] hover:text-white hover:skew-x-[-6deg] hover:shadow-[0_0_30px_rgba(67,203,156,0.4)]">
                        <span class="relative z-10">{{ t('aboutPage.ctaButton') }}</span>
                        <svg class="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                                d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </router-link>
                </section>
            </div>
        </div>
    </div>
</template>

<style scoped>
.page-enter {
    animation: page-enter-animation 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes page-enter-animation {
    from {
        opacity: 0;
        transform: translateY(40px) skewY(2deg);
    }

    to {
        opacity: 1;
        transform: translateY(0) skewY(0);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    50% {
        transform: translateY(-20px) rotate(5deg);
    }
}

.grayscale-2 {
    --tw-grayscale: grayscale(60%);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.timeline-container {
    position: relative;
    padding: 40px 0;
}

.timeline-line-bg {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(-50%);
}

.timeline-line-animated {
    position: absolute;
    left: 50%;
    top: 0;
    width: 2px;
    background: #43cb9c;
    transform: translateX(-50%);
    height: 0;
    transition: height 1.5s cubic-bezier(0.7, 0, 0.3, 1);
}

.timeline-line-animated.is-visible {
    height: 100%;
}

.timeline-item {
    position: relative;
    width: 50%;
    margin-bottom: 80px;
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease-out;
}

.timeline-item.is-visible {
    opacity: 1;
    transform: translateY(0);
}

.timeline-item.left {
    left: 0;
    padding-right: 60px;
    text-align: right;
}

.timeline-item.right {
    left: 50%;
    padding-left: 60px;
    text-align: left;
}

.timeline-icon {
    position: absolute;
    top: 0;
    width: 40px;
    height: 40px;
    background: #050505;
    border: 2px solid #43cb9c;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    font-family: monospace;
    font-weight: bold;
    color: #43cb9c;
    box-shadow: 0 0 15px rgba(67, 203, 156, 0.3);
}

.timeline-item.left .timeline-icon {
    right: -20px;
}

.timeline-item.right .timeline-icon {
    left: -20px;
}

.timeline-content {
    padding: 30px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 1rem;
    transition: all 0.4s;
}

.timeline-item:hover .timeline-content {
    border-color: #43cb9c;
    background: rgba(67, 203, 156, 0.03);
    transform: scale(1.02);
}

@media (max-width: 768px) {

    .timeline-line-bg,
    .timeline-line-animated {
        left: 20px;
    }

    .timeline-item {
        width: 100%;
        padding-left: 50px;
        padding-right: 0;
        text-align: left;
    }

    .timeline-item.right {
        left: 0;
    }

    .timeline-icon {
        left: 0;
    }

    .timeline-item.left .timeline-icon {
        left: 0;
    }
}
</style>
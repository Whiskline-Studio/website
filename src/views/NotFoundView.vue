<script setup lang="ts">
import { useTranslations } from "../composables/useTranslations";
const { t } = useTranslations();
import AuroraBackground from '../components/anims/AuroraBackground.vue';
</script>

<template>
    <div class="not-found-container">
        <AuroraBackground/>

        <div class="content-container">
            <div class="flex items-center gap-3 mb-4 opacity-50 font-mono text-[10px] tracking-[0.5em] text-[#43cb9c]">
                <span>ERROR_CODE // 404</span>
                <div class="h-[1px] w-12 bg-[#43cb9c]/30"></div>
            </div>

            <div class="glitch-container">
                <div class="glitch font-black italic tracking-tighter" data-text="404">404</div>
            </div>

            <h1 class="text-4xl md:text-6xl font-black uppercase italic text-white mt-8 mb-4 leading-none tracking-tighter">
                {{ t('notFound.title') }}<span class="text-[#43cb9c]">_</span>
            </h1>
            
            <p class="text-gray-400 max-w-md mb-12 font-light text-lg leading-relaxed">
                <span class="text-[#43cb9c] font-mono mr-2">></span>
                {{ t('notFound.description') }}
            </p>

            <router-link to="/"
                class="group relative rounded-xl inline-flex items-center gap-4 px-12 py-5 bg-white text-black font-black uppercase italic tracking-widest text-xs transition-all duration-300 hover:bg-[#43cb9c] hover:text-white hover:skew-x-[-10deg] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <span class="relative z-10">{{ t('notFound.buttonBack') }}</span>
                <svg class="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </router-link>

            <div class="mt-20 font-mono text-[8px] text-white/10 uppercase tracking-[0.3em] hidden md:block">
                System_Recovery_Protocol: INITIATED // Location_Unknown
            </div>
        </div>
    </div>
</template>

<style scoped>
.not-found-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
    padding: 2rem;
    background-color: #050505;
    color: #fff;
    overflow: hidden;
}

.content-container {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.glitch-container {
    position: relative;
    font-size: clamp(8rem, 20vw, 15rem);
    line-height: 0.8;
}

.glitch {
    position: relative;
    color: #fff;
    animation: glitch-animation 3s infinite linear alternate-reverse;
}

/* Customização do Glitch para as cores da marca */
.glitch::before,
.glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    overflow: hidden;
}

.glitch::before {
    left: 4px;
    text-shadow: -3px 0 #43cb9c;
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    animation: glitch-anim-1 2s infinite linear alternate-reverse;
    opacity: 0.8;
}

.glitch::after {
    left: -4px;
    text-shadow: 3px 0 #2d8a6a;
    clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
    animation: glitch-anim-2 3s infinite linear alternate-reverse;
    opacity: 0.8;
}

@keyframes glitch-animation {
    0%, 100% { transform: translate(0); }
    10% { transform: translate(-2px, 2px); }
    20% { transform: translate(2px, -2px); }
    30% { transform: translate(-1px, 0); }
}

@keyframes glitch-anim-1 {
    0%, 100% { clip-path: inset(10% 0 80% 0); }
    20% { clip-path: inset(40% 0 30% 0); }
    40% { clip-path: inset(70% 0 10% 0); }
    60% { clip-path: inset(20% 0 60% 0); }
    80% { clip-path: inset(50% 0 40% 0); }
}

@keyframes glitch-anim-2 {
    0%, 100% { clip-path: inset(80% 0 5% 0); }
    25% { clip-path: inset(10% 0 70% 0); }
    50% { clip-path: inset(60% 0 20% 0); }
    75% { clip-path: inset(30% 0 40% 0); }
}
</style>
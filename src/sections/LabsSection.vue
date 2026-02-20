<script setup lang="ts">
import { ref } from 'vue';
import { useTranslations } from "../composables/useTranslations";
import { useAnimateOnScroll } from '../composables/useAnimateOnScroll';

const { t } = useTranslations();
const sectionRef = ref(null);
const { isVisible } = useAnimateOnScroll(sectionRef);
</script>

<template>
    <section id="labs" ref="sectionRef"
        class="relative w-full h-screen snap-start flex flex-col justify-center items-center text-center p-6 overflow-hidden">
        <div class="absolute inset-0 z-0 shapes-container">
            <div v-for="n in 8" :key="n" class="shape" :class="`shape-${n}`"></div>
        </div>

        <div class="relative z-10 max-w-6xl mx-auto transition-all duration-700 ease-out"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <div class="text-center lg:text-left">
                    <div
                        class="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#43cb9c]/10 border border-[#43cb9c]/20 mb-8 font-mono text-[10px] tracking-widest text-[#43cb9c]">
                        <span class="relative flex h-2 w-2">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#43cb9c] opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#43cb9c]"></span>
                        </span>
                        {{ t('labs.experimental') }}
                    </div>

                    <div class="mb-10">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="font-mono text-[10px] text-[#43cb9c] uppercase tracking-[0.5em] opacity-60">
                                System_Experimental // SEC_04
                            </span>
                            <div class="h-[1px] w-24 bg-gradient-to-r from-[#43cb9c]/40 to-transparent"></div>
                        </div>
                        <h2
                            class="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white leading-none">
                            {{ t('labs.title') }}<span class="text-[#43cb9c]">_</span>
                        </h2>
                    </div>

                    <p class="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed max-w-md font-light">
                        <span class="text-[#43cb9c] font-mono mr-2">></span>
                        {{ t('labs.subtitle') }}
                    </p>

                    <router-link to="/labs"
                        class="group relative rounded-xl inline-flex items-center gap-4 px-12 py-4 bg-white text-black font-black uppercase italic tracking-widest text-xs transition-all duration-300 hover:bg-[#43cb9c] hover:text-white hover:skew-x-[-6deg] hover:shadow-[0_0_30px_rgba(67,203,156,0.3)]">
                        <span>{{ t('labs.button') }}</span>
                        <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                                d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </router-link>
                </div>

                <div class="preview-card group/card relative">
                    <div class="absolute -top-4  w-12 h-12 border-t-2 border-l-2 border-[#43cb9c]/30 z-20"
                        style="left: -1rem;"></div>
                    <div class="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#43cb9c]/30 z-20">
                    </div>

                    <div
                        class="preview-content bg-[#0a0a0a] border border-white/5 p-4 rounded-xl overflow-hidden backdrop-blur-xl shadow-2xl transition-all duration-500 group-hover/card:border-[#43cb9c]/40 group-hover/card:-translate-y-2">
                        <div class="relative rounded-lg overflow-hidden">
                            <img src="https://i.imgur.com/NeZYLBI.png" alt="Whiskline Labs"
                                class="w-full h-full object-cover grayscale-[0.5] group-hover/card:grayscale-0 transition-all duration-700" />

                            <div
                                class="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none">
                            </div>
                        </div>

                        <div
                            class="mt-4 flex justify-between items-center font-mono text-[8px] uppercase tracking-widest text-white/20">
                            <span>Core.v2.6_Stable</span>
                            <span class="text-[#43cb9c]/50">Process.Active</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
.shapes-container {
    perspective: 1000px;
}

.shape {
    position: absolute;
    background-color: rgba(67, 203, 156, 0.03);
    border: 1px solid rgba(67, 203, 156, 0.2);
    box-shadow: 0 0 20px rgba(67, 203, 156, 0.05);
    backdrop-filter: blur(10px);
    will-change: transform;
    clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%);
    animation-name: float-3d;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
}

@keyframes float-3d {
    from {
        transform: translateY(-15px) rotateX(30deg) rotateY(15deg) rotateZ(0deg);
    }

    to {
        transform: translateY(15px) rotateX(-30deg) rotateY(-15deg) rotateZ(45deg);
    }
}

.shape-1 {
    width: 150px;
    height: 150px;
    top: 10%;
    left: 5%;
    border-radius: 30%;
    animation-duration: 18s;
}

.shape-1,
.shape-3,
.shape-6 {
    backdrop-filter: blur(4px);
}

.shape-2 {
    width: 80px;
    height: 80px;
    top: 75%;
    left: 15%;
    border-radius: 40%;
    animation-duration: 12s;
}

.shape-3 {
    width: 200px;
    height: 200px;
    top: 5%;
    right: 5%;
    border-radius: 35%;
    animation-duration: 22s;
}

.shape-4 {
    width: 120px;
    height: 120px;
    bottom: 10%;
    right: 15%;
    border-radius: 50%;
    animation-duration: 16s;
}

.shape-5 {
    width: 60px;
    height: 60px;
    top: 50%;
    left: 30%;
    border-radius: 25%;
    animation-duration: 14s;
}

.shape-6 {
    width: 180px;
    height: 180px;
    top: 40%;
    right: 35%;
    border-radius: 30%;
    animation-duration: 20s;
}

.shape-7 {
    width: 90px;
    height: 90px;
    bottom: 15%;
    left: 45%;
    border-radius: 45%;
    animation-duration: 13s;
}

.shape-8 {
    width: 160px;
    height: 160px;
    top: 15%;
    left: 60%;
    border-radius: 30%;
    animation-duration: 19s;
}

.preview-card {
    position: relative;
    aspect-ratio: 16 / 7;
    transform-style: preserve-3d;
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.preview-card:hover {
    transform: scale(1.05);
}

.preview-content {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 0.75rem;
    overflow: hidden;
    border: 1px solid transparent;
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}


.preview-card:hover::after {
    content: "ANALYZING...";
    position: absolute;
    top: -25px;
    right: 0;
    font-family: monospace;
    font-size: 10px;
    color: #43cb9c;
    letter-spacing: 2px;
    animation: blink 1s infinite;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}

.preview-card:hover .preview-content {
    transform: translateZ(30px);
}

.preview-content img {
    transition: filter 0.4s ease-in-out;
}

.preview-overlay,
.preview-glow {
    display: none;
}
</style>
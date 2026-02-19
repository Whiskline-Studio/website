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
                    <span
                        class="inline-block px-3 py-1 rounded-full bg-[#43cb9c]/10 text-[#43cb9c] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-[#43cb9c]/20">
                        {{ t('labs.experimental') }}
                    </span>
                    <h2 class="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
                        {{ t('labs.title') }}
                    </h2>
                    <p class="text-gray-400 text-lg mb-10 leading-relaxed max-w-md">
                        {{ t('labs.subtitle') }}
                    </p>
                    <router-link to="/labs"
                        class="relative overflow-hidden px-10 py-4 rounded-full bg-[#43cb9c] text-white font-bold shadow-[0_0_20px_rgba(67,203,156,0.4)] hover:shadow-[0_0_35px_rgba(67,203,156,0.6)] hover:-translate-y-1 transition-all duration-300">
                        <span class="relative z-10">{{ t('labs.button') }}</span>
                        <svg class="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none"
                            style="display: inline;" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 7l5 5m0 0l-5 5m5-5H6" />

                        </svg>
                    </router-link>
                </div>

                <div class="preview-card">
                    <div class="preview-content">
                        <img src="https://i.imgur.com/NeZYLBI.png" alt="Pré-visualização de um experimento do Labs"
                            class="w-full h-full object-cover rounded-lg" />
                        <div class="preview-overlay"></div>
                        <div class="preview-glow"></div>
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

/* --- CARD DE PRÉ-VISUALIZAÇÃO COM "DROP SHADOW" PARA A LOGO --- */
.preview-card {
    position: relative;
    aspect-ratio: 16 / 7;
    transform-style: preserve-3d;
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.preview-card:hover {
    /* Mantém o zoom subtil no hover */
    transform: scale(1.05);
}

.preview-content {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 0.75rem;
    overflow: hidden;
    /* A borda agora é transparente para não interferir */
    border: 1px solid transparent;
    /* A transição agora é para o conteúdo, não para o card */
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.preview-card:hover .preview-content {
    /* Efeito de flutuação para a frente, sem inclinar */
    transform: translateZ(30px);
}

/* A IMAGEM EM SI GANHA O GLOW */
.preview-content img {
    transition: filter 0.4s ease-in-out;
}

.preview-card:hover .preview-content img {
    /* O "glow" agora segue perfeitamente os contornos da logo */
    filter: drop-shadow(0 0 15px rgba(67, 203, 156, 0.7));
}

.preview-overlay,
.preview-glow {
    /* O overlay e o glow interno já não são necessários */
    display: none;
}
</style>
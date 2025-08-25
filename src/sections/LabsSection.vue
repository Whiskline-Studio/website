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
                    <h2 class="text-4xl md:text-5xl font-extrabold mb-4">{{ t('labs.title') }}</h2>
                    <p class="text-gray-400 text-lg mb-8">
                        {{ t('labs.subtitle') }}
                    </p>
                    <router-link to="/labs"
                        class="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#43cb9c] via-[#36a880] to-[#43cb9c] text-black font-bold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                        {{ t('labs.button') }}
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
    border: 1px solid rgba(67, 203, 156, 0.25);
    background-color: rgba(67, 203, 156, 0.15);
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
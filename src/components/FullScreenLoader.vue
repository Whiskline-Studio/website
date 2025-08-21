<script setup lang="ts">

import { useTranslations } from "../composables/useTranslations";
const { t, currentLocale } = useTranslations();
defineProps<{
    show: boolean;
}>();
</script>

<template>
    <transition name="fade">
        <div v-if="show" class="fullscreen-loader">
            <div class="holo-effect"></div>
            <div class="loader-content">
                <img src="@/assets/WHISKLINE_icon_main.png" alt="Carregando..." class="animate-spin-slow w-32 h-32" />
                <p class="text-white/80 mt-6 text-lg">{{ currentLocale? t('loader.loading') : 'Loading...'}}</p>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.fullscreen-loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(10px);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.holo-effect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
        radial-gradient(circle at 15% 25%, hsla(158, 64%, 52%, 0.5), transparent 50%),
        radial-gradient(circle at 85% 75%, hsla(260, 64%, 62%, 0.4), transparent 50%);
    filter: blur(70px);
    animation: aurora-animation 12s linear infinite;
}

.loader-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.animate-spin-slow {
    animation: spin-slow 2s linear infinite;
}

@keyframes aurora-animation {
    0% {
        transform: rotate(0deg) scale(1.1);
    }

    50% {
        transform: rotate(180deg) scale(1.2);
    }

    100% {
        transform: rotate(360deg) scale(1.1);
    }
}

@keyframes spin-slow {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
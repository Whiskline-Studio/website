<script setup lang="ts">
import { useTranslations } from "../composables/useTranslations";
const { t } = useTranslations();
import AuroraBackground from '../components/AuroraBackground.vue';
</script>
<template>
    <div class="not-found-container">
        <AuroraBackground/>

        <div class="content-container">
            <div class="glitch-container">
                <div class="glitch" data-text="404">404</div>
            </div>

            <h1 class="text-3xl md:text-4xl font-extrabold text-white mt-8 mb-4">{{ t('notFound.title') }}</h1>
            <p class="text-gray-400 max-w-md mb-8">
                {{ t('notFound.description') }}
            </p>

            <router-link to="/"
                class="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-[#43cb9c] via-[#36a880] to-[#43cb9c] text-white font-bold shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#43cb9c]/30">
                {{ t('notFound.buttonBack') }}
            </router-link>
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
    padding: 1.5rem;
    background-color: #000;
    color: #fff;
    overflow: hidden;
}

.content-container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.glitch-container {
    position: relative;
    font-size: 10rem;
    font-weight: 900;
    line-height: 1;
    color: #fff;
    letter-spacing: 0.1em;
}

.glitch {
    position: relative;
    animation: glitch-animation 2.5s infinite linear alternate-reverse;
}

.glitch::before,
.glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    overflow: hidden;
}

.glitch::before {
    left: 2px;
    text-shadow: -2px 0 #ff00c1;
    animation: glitch-anim-1 2s infinite linear alternate-reverse;
}

.glitch::after {
    left: -2px;
    text-shadow: -2px 0 #43cb9c;
    animation: glitch-anim-2 3s infinite linear alternate-reverse;
}

@keyframes glitch-animation {
    0% {
        transform: translate(0);
    }

    20% {
        transform: translate(-3px, 3px);
    }

    40% {
        transform: translate(-3px, -3px);
    }

    60% {
        transform: translate(3px, 3px);
    }

    80% {
        transform: translate(3px, -3px);
    }

    100% {
        transform: translate(0);
    }
}

@keyframes glitch-anim-1 {
    0% {
        clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
    }

    10% {
        clip-path: polygon(0 40%, 100% 40%, 100% 45%, 0 45%);
    }

    20% {
        clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
    }

    30% {
        clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    }

    40% {
        clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
    }

    50% {
        clip-path: polygon(0 80%, 100% 80%, 100% 85%, 0 85%);
    }

    60% {
        clip-path: polygon(0 60%, 100% 60%, 100% 65%, 0 65%);
    }

    70% {
        clip-path: polygon(0 15%, 100% 15%, 100% 20%, 0 20%);
    }

    80% {
        clip-path: polygon(0 90%, 100% 90%, 100% 95%, 0 95%);
    }

    90% {
        clip-path: polygon(0 30%, 100% 30%, 100% 35%, 0 35%);
    }

    100% {
        clip-path: polygon(0 5%, 100% 5%, 100% 10%, 0 10%);
    }
}

@keyframes glitch-anim-2 {
    0% {
        clip-path: polygon(0 5%, 100% 5%, 100% 10%, 0 10%);
    }

    10% {
        clip-path: polygon(0 20%, 100% 20%, 100% 25%, 0 25%);
    }

    20% {
        clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
    }

    30% {
        clip-path: polygon(0 85%, 100% 85%, 100% 90%, 0 90%);
    }

    40% {
        clip-path: polygon(0 65%, 100% 65%, 100% 70%, 0 70%);
    }

    50% {
        clip-path: polygon(0 40%, 100% 40%, 100% 45%, 0 45%);
    }

    60% {
        clip-path: polygon(0 70%, 100% 70%, 100% 75%, 0 75%);
    }

    70% {
        clip-path: polygon(0 10%, 100% 10%, 100% 15%, 0 15%);
    }

    80% {
        clip-path: polygon(0 55%, 100% 55%, 100% 60%, 0 60%);
    }

    90% {
        clip-path: polygon(0 5%, 100% 5%, 100% 10%, 0 10%);
    }

    100% {
        clip-path: polygon(0 80%, 100% 80%, 100% 85%, 0 85%);
    }
}
</style>
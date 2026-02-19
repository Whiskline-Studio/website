<template>
    <div class="grid-scan-container">
        <div class="grid-mesh"></div>

        <div class="scan-bar"></div>

        <div class="radar-pulse"></div>

        <div v-for="n in 15" :key="n" class="data-pixel" :style="generatePixelStyle()"></div>
    </div>
</template>

<script setup lang="ts">
const generatePixelStyle = () => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = 2 + Math.random() * 3;
    return {
        top: `${top}%`,
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
    };
};
</script>

<style scoped>
.grid-scan-container {
    height: 100vh;
    position: absolute;
    inset: 0;
    background: #050505;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
}

.grid-mesh {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(67, 203, 156, 0.07) 1px, transparent 1px),
        linear-gradient(90deg, rgba(67, 203, 156, 0.07) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(circle at center, black, transparent 80%);
}

.scan-bar {
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #43cb9c, transparent);
    box-shadow: 0 0 15px #43cb9c;
    opacity: 0.3;
    top: 0;
    animation: scan-move 8s linear infinite;
}

.radar-pulse {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border: 1px solid #43cb9c;
    border-radius: 50%;
    opacity: 0;
    animation: radar-expand 4s ease-out infinite;
}

.data-pixel {
    position: absolute;
    width: 2px;
    height: 2px;
    background: #43cb9c;
    box-shadow: 0 0 5px #43cb9c;
    opacity: 0;
    animation: pixel-blink infinite;
}

@keyframes scan-move {
    0% {
        top: -10%;
    }

    100% {
        top: 110%;
    }
}

@keyframes radar-expand {
    0% {
        width: 0;
        height: 0;
        opacity: 0.5;
    }

    100% {
        width: 800px;
        height: 800px;
        opacity: 0;
    }
}

@keyframes pixel-blink {

    0%,
    100% {
        opacity: 0;
        transform: scale(0);
    }

    50% {
        opacity: 0.6;
        transform: scale(1.5);
    }
}
</style>
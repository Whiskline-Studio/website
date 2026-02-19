<template>
    <div class="matrix-container">
        <div class="perspective-grid"></div>

        <div class="data-streams">
            <div v-for="n in 8" :key="n" class="stream-line" :style="generateStreamStyle(n)"></div>
        </div>

        <div class="vignette"></div>
    </div>
</template>

<script setup lang="ts">
const generateStreamStyle = (index: number) => {
    const left = (index - 1) * 14 + Math.random() * 5;
    const duration = 3 + Math.random() * 5;
    const delay = Math.random() * 2;
    return {
        left: `${left}%`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`
    };
};
</script>

<style scoped>
.matrix-container {
    height: 100vh;
    position: absolute;
    inset: 0;
    background: #050505;
    overflow: hidden;
    z-index: 0;
    perspective: 1000px;
    pointer-events: none;
}

.perspective-grid {
    position: absolute;
    inset: -50% 0;
    background-image:
        linear-gradient(rgba(67, 203, 156, 0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(67, 203, 156, 0.2) 1px, transparent 1px);
    background-size: 100px 100px;
    transform: rotateX(60deg);
    mask-image: linear-gradient(to bottom, transparent, black 40%, black 60%, transparent);
}

.stream-line {
    position: absolute;
    top: -100px;
    width: 1px;
    height: 200px;
    background: linear-gradient(to bottom, transparent, #43cb9c, transparent);
    box-shadow: 0 0 10px #43cb9c;
    opacity: 0.4;
    animation: stream-flow infinite linear;
}

.vignette {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent 20%, #050505 90%);
}

@keyframes stream-flow {
    0% {
        transform: translateY(-10vh);
        opacity: 0;
    }

    20% {
        opacity: 0.4;
    }

    80% {
        opacity: 0.4;
    }

    100% {
        transform: translateY(110vh);
        opacity: 0;
    }
}
</style>
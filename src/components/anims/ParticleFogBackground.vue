<template>
    <div class="particle-fog-background">
        <div class="background-gradient"></div>
        <div class="particles">
            <div v-for="n in 50" :key="n" class="particle" :style="{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 5 + 3}s`
            }"></div>
        </div>
    </div>
</template>

<style scoped>
.particle-fog-background {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
}

.background-gradient {
    position: absolute;
    inset: 0;
}

.particles {
    position: relative;
    width: 100%;
    height: 100%;
}

.particle {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: rgba(67, 203, 156, 0.5);
    /* Cor #43cb9c */
    box-shadow: 0 0 8px rgba(67, 203, 156, 0.5);
    animation-name: flicker;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    /* Faz a animação ir e voltar suavemente */
}

@keyframes flicker {
    from {
        opacity: 0.1;
        transform: scale(0.8);
    }

    to {
        opacity: 0.8;
        transform: scale(1.2);
    }
}
</style>
<template>
    <div class="grid-scan-background">
        <div class="grid-pattern"></div>
        <div class="scanline"></div>
    </div>
</template>

<style scoped>
.grid-scan-background {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
}

/* A grelha é criada com gradientes lineares */
.grid-pattern {
    width: 100%;
    height: 100%;
    background-image:
        linear-gradient(rgba(67, 203, 156, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(67, 203, 156, 0.1) 1px, transparent 1px);
    background-size: 40px 40px;
    /* Tamanho das células da grelha */
}

/* A linha de scan que se move verticalmente */
.scanline {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to bottom,
            rgba(67, 203, 156, 0),
            rgba(67, 203, 156, 0.2),
            rgba(67, 203, 156, 0));
    filter: blur(5px);
    animation: scanline-animation 8s linear infinite;
}

@keyframes scanline-animation {
    0% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(100vh);
    }
}
</style>
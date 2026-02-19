<template>
    <div class="abstract-background">
        <div class="grid-overlay"></div>

        <div class="shapes-container">
            <div class="scanlines"></div>

            <div v-for="n in 6" :key="n" class="shape" :class="`shape-${n}`">
                <div class="inner-line"></div>
                <div class="corner-glitch"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.abstract-background {
    position: absolute;
    inset: 0;
    overflow: hidden;
    z-index: 0;
    background: #050505;
}

.grid-overlay {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(67, 203, 156, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(67, 203, 156, 0.05) 1px, transparent 1px);
    background-size: 50px 50px;
    z-index: 1;
}

.scanlines {
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%,
            rgba(67, 203, 156, 0.02) 50%);
    background-size: 100% 4px;
    z-index: 2;
    pointer-events: none;
}

.shapes-container {
    position: relative;
    width: 100%;
    height: 100%;
}

.shape {
    position: absolute;
    background: rgba(67, 203, 156, 0.02);
    border: 2px solid rgba(67, 203, 156, 0);
    box-shadow: 0 0 40px rgba(67, 203, 156, 0.6), inset 0 0 20px rgba(67, 203, 156, 0.05);
    clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
    animation: float-brutal 25s infinite ease-in-out;
    will-change: transform;
}

.inner-line {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgba(67, 203, 156, 0.1);
    box-shadow: 0 0 10px rgba(67, 203, 156, 0.2);
    transform: translateY(-50%);
}

@keyframes float-brutal {

    0%,
    100% {
        transform: translate(0, 0) rotate(-10deg);
    }

    50% {
        transform: translate(30px, -20px) rotate(-8deg) scale(1.05);
    }
}

.shape-1 {
    width: 600px;
    height: 180px;
    top: 5%;
    left: -150px;
    animation-duration: 30s;
}

.shape-2 {
    width: 400px;
    height: 120px;
    top: 65%;
    left: 70%;
    animation-duration: 25s;
    opacity: 0.8;
}

.shape-3 {
    width: 800px;
    height: 250px;
    top: 35%;
    left: 10%;
    animation-duration: 45s;
    border-width: 1px;
}

.shape-4 {
    width: 300px;
    height: 100px;
    top: 80%;
    left: 20%;
    animation-duration: 20s;
}

.shape-5 {
    width: 500px;
    height: 140px;
    top: -10%;
    left: 55%;
    animation-duration: 35s;
}

.shape-6 {
    width: 300px;
    height: 300px;
    top: 25%;
    left: -80px;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    background: rgba(67, 203, 156, 0.03);
}
</style>
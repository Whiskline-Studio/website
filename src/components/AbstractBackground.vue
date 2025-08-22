<template>
    <div class="abstract-background">
        <div class="shapes-container">
            <div v-for="n in 4" :key="n" class="shape" :class="`shape-${n}`"></div>
        </div>
    </div>
</template>

<style scoped>
.abstract-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
}

.shapes-container {
    position: relative;
    width: 100%;
    height: 100%;
}

.shape {
    position: absolute;
    /* Cor um pouco mais visível */
    background-color: rgba(67, 203, 156, 0.15);
    border-radius: 30%;
    animation: float-abstract 20s infinite ease-in-out alternate;
    /* EFEITO GLOW ADICIONADO AQUI */
    box-shadow: 0 0 50px rgba(67, 203, 156, 0.2);
}

@keyframes float-abstract {
    from {
        transform: translateY(0px) rotate(0deg) scale(1);
        opacity: 0.7;
    }

    to {
        transform: translateY(-30px) rotate(60deg) scale(1.05);
        opacity: 1;
    }
}

/* Tamanhos e posições (sem alteração) */
.shape-1 {
    width: 200px;
    height: 200px;
    top: -50px;
    left: -50px;
    animation-duration: 25s;
}

.shape-2 {
    width: 300px;
    height: 300px;
    top: 10%;
    left: 70%;
    animation-duration: 30s;
    animation-delay: 2s;
    border-radius: 40%;
}

.shape-3 {
    width: 150px;
    height: 150px;
    top: 80%;
    left: 10%;
    animation-duration: 22s;
}

.shape-4 {
    width: 400px;
    height: 400px;
    top: 70%;
    left: 60%;
    animation-duration: 35s;
    animation-delay: 5s;
    border-radius: 35%;
}

.shape-5 {
    width: 100px;
    height: 100px;
    top: 30%;
    left: 30%;
    animation-duration: 28s;
}

.shape-6 {
    width: 250px;
    height: 250px;
    top: 50%;
    left: -80px;
    animation-duration: 26s;
    animation-delay: 3s;
}

.shape-7 {
    width: 180px;
    height: 180px;
    top: -30px;
    left: 40%;
    animation-duration: 29s;
}

.shape-8 {
    width: 220px;
    height: 220px;
    top: 90%;
    left: 85%;
    animation-duration: 32s;
    animation-delay: 1s;
    border-radius: 50%;
}

.shape-9 {
    width: 120px;
    height: 120px;
    top: 40%;
    left: 80%;
    animation-duration: 24s;
}

.shape-10 {
    width: 350px;
    height: 350px;
    top: 5%;
    left: 15%;
    animation-duration: 38s;
    animation-delay: 4s;
}
</style>
<template>
  <div class="absolute inset-0 overflow-hidden -z-10">
    <div class="w-full h-full animate-gradient bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]"></div>

    <div class="w-full h-full pointer-events-none">
      <div v-for="n in 30" :key="n" class="absolute bg-[#43cb9c]/30 rounded-full w-2 h-2 animate-float"
        :style="{ top: Math.random() * 100 + '%', left: Math.random() * 100 + '%' }"></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  background-size: 300% 300%;
  animation: gradient 25s ease infinite;
}

@keyframes float {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.5;
  }

  50% {
    transform: translateY(-20px) scale(1.2);
    opacity: 0.8;
  }

  100% {
    transform: translateY(0) scale(1);
    opacity: 0.5;
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}
</style>

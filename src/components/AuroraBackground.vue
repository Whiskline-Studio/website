<!-- AuroraBackground.vue -->
<template>
  <div class="absolute inset-0 overflow-hidden">
    <div class="aurora w-full h-full"></div>
  </div>
</template>

<style scoped>
.aurora {
  background: linear-gradient(120deg, #00f6ff, #8affc1, #ff00ff);
  background-size: 600% 600%;
  animation: aurora 20s ease infinite;
  opacity: 0.5;
  filter: blur(120px);
}

@keyframes aurora {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>

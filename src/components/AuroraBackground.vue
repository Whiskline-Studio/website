<!-- AuroraBackground.vue -->
<template>
  <div class="holo-effect"></div>
</template>

<style scoped>
.holo-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 15% 25%, hsla(158, 64%, 52%, 0.4), transparent 50%),
    radial-gradient(circle at 85% 75%, hsla(260, 64%, 62%, 0.3), transparent 50%);
  filter: blur(80px);
  animation: aurora-animation 15s linear infinite;
}

@keyframes aurora-animation {
  0% {
    transform: rotate(0deg) scale(1.2);
  }

  50% {
    transform: rotate(180deg) scale(1.3);
  }

  100% {
    transform: rotate(360deg) scale(1.2);
  }
}
</style>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const x = ref(0);
const y = ref(0);
const isPointer = ref(false);

const moveCursor = (e: MouseEvent) => {
  x.value = e.clientX;
  y.value = e.clientY;
  // Detecta se o mouse está sobre algo clicável
  const target = e.target as HTMLElement;
  isPointer.value = window.getComputedStyle(target).cursor === 'pointer';
};

onMounted(() => window.addEventListener('mousemove', moveCursor));
onUnmounted(() => window.removeEventListener('mousemove', moveCursor));
</script>

<template>
  <div class="custom-cursor hidden lg:block"
       :class="{ 'is-active': isPointer }"
       :style="{ transform: `translate3d(${x}px, ${y}px, 0)` }">
    <div class="cursor-crosshair"></div>
  </div>
</template>

<style scoped>
.custom-cursor {
  position: fixed;
  top: -10px;
  left: -10px;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(67, 203, 156, 0.5);
  pointer-events: none;
  z-index: 99999;
  transition: width 0.3s, height 0.3s, background 0.3s;
}

.cursor-crosshair {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: #43cb9c;
  transform: translate(-50%, -50%);
}

.is-active {
  width: 40px;
  height: 40px;
  background: rgba(67, 203, 156, 0.1);
  border-color: #43cb9c;
  mix-blend-mode: difference;
}
</style>
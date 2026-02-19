<script setup lang="ts">
defineProps<{
  moduleId?: string;
}>();
</script>

<template>
  <div class="card-wrapper group h-full">
    <div
      class="relative overflow-hidden bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-2xl transition-all duration-500 group-hover:border-[#43cb9c]/40 group-hover:-translate-y-3 h-full flex flex-col shadow-2xl">

      <div
        class="absolute top-0 left-0 w-10 h-10 border-t border-l border-[#43cb9c]/30 group-hover:border-[#43cb9c]/60 transition-colors duration-500">
      </div>

      <span v-if="moduleId"
        class="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#43cb9c]/30 group-hover:text-[#43cb9c]/80 transition-colors duration-500">
        MOD_{{ moduleId }}
      </span>

      <div class="relative z-10 flex-grow flex flex-col justify-center">
        <slot></slot>
      </div>

      <div
        class="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#43cb9c] to-[#36a880] transition-all duration-700 w-0 group-hover:w-full opacity-80 shadow-[0_0_15px_#43cb9c]">
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  perspective: 1000px;
}
</style>
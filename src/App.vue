<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterView, useRoute } from 'vue-router'; 
import FullScreenLoader from './components/FullScreenLoader.vue';
import NavbarMain from './sections/NavbarMain.vue';
import FooterMain from './sections/FooterMain.vue';

const isLoading = ref(true);
const route = useRoute(); 

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>

<template>
  <FullScreenLoader :show="isLoading" />

  <div v-if="!isLoading" class="relative bg-black text-white font-sans min-h-screen overflow-hidden flex flex-col">
    <NavbarMain />
    <main class="relative z-10 flex-grow">
      <RouterView :key="route.path" />
    </main>
    <FooterMain />
  </div>
</template>
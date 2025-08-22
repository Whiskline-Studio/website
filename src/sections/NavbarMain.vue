<script setup lang="ts">
import { useNavbar } from '../composables/useNavbar';
import NavbarHome from '../components/navbars/NavbarHome.vue';
import NavbarProject from '../components/navbars/NavbarProject.vue';
import NavbarAbout from '../components/navbars/NavbarAbout.vue'; // Se você tiver um layout 'Sobre'
import NavbarMobileMenu from '../components/navbars/NavbarMobileMenu.vue';

// Apenas uma linha para obter todo o estado e lógica!
const { route, isScrolled, currentProject, accentColor } = useNavbar();
</script>

<template>
  <div> <header
      class="fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl z-50 rounded-2xl flex items-center p-3 transition-all duration-300"
      :class="{
        'bg-black/80 backdrop-blur-lg shadow-inner': isScrolled || route.name !== 'home',
        'bg-black/70 backdrop-blur-md shadow-inner': !isScrolled && route.name === 'home'
      }" 
      :style="{ boxShadow: `inset 0 0 10px ${accentColor}` }"
    >
      <transition name="nav-content-swap" mode="out-in">
        <NavbarProject v-if="currentProject" :key="currentProject.id" />
        <NavbarAbout v-else-if="route.name === 'about'" key="about-nav" />
        <NavbarHome v-else key="home-nav" />
      </transition>
    </header>

    <NavbarMobileMenu />
  </div>
</template>

<style scoped>
.nav-content-swap-enter-active,
.nav-content-swap-leave-active {
  transition: all 0.3s ease-in-out;
}

.nav-content-swap-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.nav-content-swap-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>
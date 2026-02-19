<script setup lang="ts">
import { useNavbar } from '../composables/useNavbar';
import NavbarHome from '../components/navbars/NavbarHome.vue';
import NavbarProject from '../components/navbars/NavbarProject.vue';
import NavBarLabs from '../components/navbars/NavbarLabs.vue';
import NavbarAbout from '../components/navbars/NavbarAbout.vue';
import NavbarMobileMenu from '../components/navbars/NavbarMobileMenu.vue';

const { route, isScrolled, currentProject, accentColor } = useNavbar();
</script>

<template>
  <div>
    <header
      class="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-7xl z-50 rounded-2xl flex items-center p-2 md:p-3 transition-all duration-500 border border-white/10 header-enter-animation"
      :class="{
        'bg-black/80 backdrop-blur-xl shadow-2xl': isScrolled || route.name !== 'home',
        'bg-black/40 backdrop-blur-md': !isScrolled && route.name === 'home'
      }" :style="{
        boxShadow: `inset 0 0 20px ${accentColor}40`,
        borderColor: isScrolled ? `${accentColor}80` : 'rgba(255,255,255,0.1)'
      }">
      <transition name="nav-content-swap" mode="out-in">
        <NavbarProject v-if="currentProject" :key="currentProject.id" />
        <NavbarAbout v-else-if="route.name === 'about'" key="about-nav" />
        <NavBarLabs v-else-if="route.name === 'labs'" key="labs-nav" />
        <NavbarHome v-else key="home-nav" />
      </transition>
    </header>

    <NavbarMobileMenu />
  </div>
</template>

<style scoped>
header {
  opacity: 0;
  transform: translateY(-100%) translateX(-50%);
}

.nav-content-swap-enter-active,
.nav-content-swap-leave-active {
  transition: all 0.3s ease-in-out;
}

.nav-content-swap-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.nav-content-swap-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@keyframes navbar-enter {
  from {
    opacity: 0;
    transform: translate(-50%, -100%) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
  }
}

.header-enter-animation {
  animation: navbar-enter 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
}
</style>
<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useScroll } from '../composables/useScroll';
import { navLinks } from '../data/config';
import { projects } from '../data/projects';
import { useNavbarScroll } from '../composables/useNavbarScroll';
import { useMobileMenu } from '../composables/useMobileMenu';
import { useTranslations } from "../composables/useTranslations";

// --- Configuração ---
const { t, currentLocale, setLocale } = useTranslations();
const route = useRoute();
const routeList = navLinks;
const { scrollToSection } = useScroll();

// --- Lógica e Estado ---
const { isOpen } = useMobileMenu();
const { isScrolled, activeSection } = useNavbarScroll(routeList);

// --- Lógica para a cor e ícone de destaque ---
const currentProject = computed(() => {
  if (route.name === 'projectDetail') {
    const projectId = route.params.id;
    return projects.find(p => p.id === projectId);
  }
  return null;
});

const accentColor = computed(() => {
  return currentProject.value ? currentProject.value.accentColor : '#43cb9c';
});

// --- Funções do Componente ---
const handleLinkClick = (id: string) => {
  scrollToSection(id, () => {
    isOpen.value = false;
  });
};
</script>

<template>
  <header
    class="fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl z-50 rounded-2xl flex items-center p-3 transition-all duration-300"
    :class="{
      'bg-black/80 backdrop-blur-lg shadow-inner': isScrolled || route.name !== 'home',
      'bg-black/70 backdrop-blur-md shadow-inner': !isScrolled && route.name === 'home'
    }" :style="{ boxShadow: `inset 0 0 10px ${accentColor}` }">
    <transition name="nav-content-swap" mode="out-in">

      <div v-if="currentProject" :key="currentProject.id"
        class="w-full h-full flex items-center justify-between gap-4">
        <router-link to="/"
          class="flex-shrink-0 flex items-center gap-2 text-white font-semibold px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd" />
          </svg>
          <span class="hidden sm:inline">{{ t('nav.back') }}</span>
        </router-link>

        <div v-if="currentProject.icon" class="flex-grow flex items-center justify-center overflow-hidden h-full">
          <img :src="currentProject.icon" class="h-10 w-auto object-contain" />
        </div>
        <div v-else class="flex-grow flex items-center justify-center overflow-hidden h-full">
          <span class="sm:inline">{{ currentLocale ? currentProject[currentLocale].title : ''}}</span>
        </div>

        <a href="/"
          class="flex-shrink-0 flex items-center ml-auto pl-4 opacity-50 hover:opacity-100 transition-opacity">
          <img src="@/assets/WHISKLINE_icon.png" alt="Logo Icon" class="w-8 h-8 object-contain" />
        </a>
      </div>

      <div v-else :key="'home-nav'" class="w-full h-full flex items-center justify-between">
        <router-link :to="{ name: 'home'}" class="flex items-center">
          <img src="@/assets/WHISKLINE_icon.png" alt="Logo Icon" class="w-9 h-9 mr-3 object-contain" />
          <img src="@/assets/whiskline.png" alt="Whiskline" class="h-10 md:h-12 object-contain" />
        </router-link>
        <div class="flex items-center">
          <div class="flex items-center lg:hidden">
            <button @click="isOpen = !isOpen" class="text-white p-2 rounded-full hover:bg-white/10 transition z-50"
              aria-label="Abrir menu" :aria-expanded="isOpen" aria-controls="mobile-menu">
              <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav class="hidden lg:flex space-x-6 text-white font-medium mr-3">
            <a v-for="item in routeList" :key="item.labelKey" :href="`#${item.href}`"
              @click.prevent="handleLinkClick(item.href)" class="nav-link"
              :class="{ 'active': activeSection === item.href }">
              {{ t(item.labelKey) }}
            </a>
          </nav>
        </div>
      </div>
    </transition>
  </header>

  <transition name="menu-fade">
    <div v-if="isOpen" id="mobile-menu" class="mobile-menu-container">
      <transition-group tag="div" name="menu-item-fade"
        class="flex flex-col items-center justify-center h-full space-y-8">
        <a v-for="(item, index) in routeList" :key="item.labelKey" :href="`#${item.href}`"
          @click.prevent="handleLinkClick(item.href)" class="nav-link text-3xl"
          :class="{ 'active': activeSection === item.href }" :style="{ 'transition-delay': `${index * 100}ms` }">
          {{ t(item.labelKey) }}
        </a>
      </transition-group>
    </div>
  </transition>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

.mobile-menu-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 40;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(12px);
  overflow: hidden;
}

.mobile-menu-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 15% 25%, hsla(158, 64%, 52%, 0.5), transparent 50%),
    radial-gradient(circle at 85% 75%, hsla(260, 64%, 62%, 0.4), transparent 50%);
  filter: blur(70px);
  animation: aurora-animation 12s linear infinite;
}

@keyframes aurora-animation {
  0% {
    transform: rotate(0deg) scale(1.1);
  }

  50% {
    transform: rotate(180deg) scale(1.2);
  }

  100% {
    transform: rotate(360deg) scale(1.1);
  }
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.4s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}

.menu-item-fade-enter-active,
.menu-item-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.menu-item-fade-enter-from,
.menu-item-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.nav-link {
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #43cb9c;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #43cb9c;
  bottom: -6px;
  left: 0;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}

.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.nav-link.active {
  color: #43cb9c;
}
</style>
<script setup lang="ts">
import { useNavbar } from '../../composables/useNavbar';

const { isOpen, routeList, handleLinkClick, t, activeSection } = useNavbar();
</script>

<template>
  <transition name="menu-fade">
    <div v-if="isOpen" id="mobile-menu" class="mobile-menu-container">
      
      <div class="absolute top-10 left-10 w-12 h-12 border-t border-l border-white/10"></div>
      <div class="absolute bottom-10 right-10 w-12 h-12 border-b border-r border-white/10"></div>

      <transition-group 
        tag="div" 
        name="menu-item-fade"
        class="flex flex-col items-start justify-center h-full px-12 space-y-6 relative z-10"
      >
        <a v-for="(item, index) in routeList" 
          :key="item.labelKey" 
          :href="`#${item.href}`"
          @click.prevent="handleLinkClick(item.href)" 
          class="nav-link group relative flex items-baseline gap-4"
          :class="{ 'active': activeSection === item.href }"
          :style="{ 'transition-delay': `${index * 80}ms` }"
        >
          <span class="font-mono text-xs text-[#43cb9c]/40 group-hover:text-[#43cb9c] transition-colors">
            0{{ index + 1 }}
          </span>
          
          <span class="text-5xl md:text-7xl font-black italic tracking-tighter uppercase transition-all duration-300 group-hover:translate-x-3">
            {{ t(item.labelKey) }}
          </span>

          <div v-if="activeSection === item.href" class="absolute -inset-x-6 inset-y-0 bg-[#43cb9c]/10 blur-2xl -z-10 rounded-full animate-pulse"></div>
        </a>
      </transition-group>

      <div class="absolute bottom-12 left-12 flex flex-col gap-2 opacity-30">
        <span class="text-[10px] uppercase tracking-[0.5em] text-white">Whiskline Studio</span>
        <div class="w-12 h-[1px] bg-white"></div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.mobile-menu-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background-color: #050505;
    overflow: hidden;
}

.mobile-menu-container::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
        radial-gradient(circle at 20% 30%, hsla(158, 64%, 52%, 0.15), transparent 40%),
        radial-gradient(circle at 80% 70%, hsla(260, 64%, 62%, 0.1), transparent 40%);
    filter: blur(80px);
    animation: aurora-move 20s infinite alternate;
}

@keyframes aurora-move {
    0% { transform: scale(1) translate(0, 0); }
    100% { transform: scale(1.3) translate(5%, 5%); }
}

.nav-link {
    color: rgba(255, 255, 255, 0.4);
    text-decoration: none;
    will-change: transform, color;
}

.nav-link.active, .nav-link:hover {
    color: #ffffff;
    text-shadow: 0 0 20px rgba(67, 203, 156, 0.3);
}

.nav-link::after { display: none; }

.menu-item-fade-enter-from {
    opacity: 0;
    transform: skewX(-10deg) translateX(-50px);
}

.menu-item-fade-enter-active {
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
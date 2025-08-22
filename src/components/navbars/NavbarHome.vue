<script setup lang="ts">
import { useNavbar } from '../../composables/useNavbar';
const { routeList, activeSection, handleLinkClick, t, isOpen } = useNavbar();
</script>

<template>
    <div class="w-full h-full flex items-center justify-between">
        <router-link :to="{ name: 'home' }" class="flex items-center">
            <img src="@/assets/WHISKLINE_icon.png" loading="lazy" alt="Logo Icon" class="w-9 h-9 mr-3 object-contain" />
            <img src="@/assets/whiskline.png" loading="lazy" alt="Whiskline" class="h-10 md:h-12 object-contain" />
        </router-link>
        <div class="flex items-center">
            <div class="flex items-center lg:hidden">
                <button @click="isOpen = !isOpen" class="text-white p-2 rounded-full hover:bg-white/10 transition z-50"
                    aria-label="Abrir menu" :aria-expanded="isOpen" aria-controls="mobile-menu">
                    <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
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
</template>

<style scoped>
/* Copie o CSS de .nav-link e .nav-link::after do seu NavbarMain.vue para aqui */
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
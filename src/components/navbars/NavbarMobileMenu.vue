<script setup lang="ts">
import { useNavbar } from '../../composables/useNavbar';

const { isOpen, routeList, handleLinkClick, t, activeSection } = useNavbar();
</script>

<template>
    <transition name="menu-fade">
        <div v-if="isOpen" id="mobile-menu" class="mobile-menu-container">
            <transition-group tag="div" name="menu-item-fade"
                class="flex flex-col items-center justify-center h-full space-y-8">
                <a v-for="(item, index) in routeList" :key="item.labelKey" :href="`#${item.href}`"
                    @click.prevent="handleLinkClick(item.href)" class="nav-link text-3xl"
                    :class="{ 'active': activeSection === item.href }"
                    :style="{ 'transition-delay': `${index * 100}ms` }">
                    {{ t(item.labelKey) }}
                </a>
            </transition-group>
        </div>
    </transition>
</template>

<style scoped>
/* Container principal do menu (fundo translúcido) */
.mobile-menu-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(12px);
    overflow: hidden;
}

/* Efeito "Holo/Aurora" de fundo */
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

/* Animação de fade para o container do menu */
.menu-fade-enter-active,
.menu-fade-leave-active {
    transition: opacity 0.4s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
    opacity: 0;
}

/* Animação escalonada para os itens do menu (links) */
.menu-item-fade-enter-active,
.menu-item-fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.menu-item-fade-enter-from,
.menu-item-fade-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

/* Estilo dos links de navegação */
.nav-link {
    position: relative;
    transition: color 0.3s ease;
    color: white;
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
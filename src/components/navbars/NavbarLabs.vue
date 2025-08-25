<script setup lang="ts">
import { useNavbar } from '../../composables/useNavbar';
const { t } = useNavbar();
</script>

<template>
    <div class="w-full h-full flex items-center justify-between">
        <router-link to="/"
            class="flex-shrink-0 flex items-center gap-2 text-white font-semibold px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clip-rule="evenodd" />
            </svg>
            <span class="hidden sm:inline">{{ t('nav.back') }}</span>
        </router-link>



        <div class="absolute left-1/2 -translate-x-1/2">
            <div class="labs-tag">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        d="M5 4a2 2 0 012-2h6a2 2 0 012 2v2a2 2 0 01-2 2H7a2 2 0 01-2-2V4zm2 11V9h6v6a2 2 0 01-2 2H7a2 2 0 01-2-2z" />
                    <path d="M15 8h.01M15 12h.01M15 16h.01M5 8h.01M5 12h.01M5 16h.01M8 15a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
                <span class="font-bold tracking-wider">{{ t('nav.labs') }}</span>
            </div>
        </div>

        <router-link :to="{ name: 'home' }" class="flex items-center">
            <img src="@/assets/WhisklineLabs.png" loading="lazy" alt="Whiskline" class="h-10 md:h-12 object-contain" />
        </router-link>
    </div>
</template>

<style scoped>
/* NOVO: Estilo para o selo "Labs" aprimorado */
.labs-tag {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    /* gap-3 */
    padding: 0.5rem 1.25rem;
    /* py-2 px-5 */
    border-radius: 9999px;
    /* rounded-full */
    font-size: 0.875rem;
    /* text-sm */
    text-transform: uppercase;
    color: #d8b4fe;
    /* text-purple-300 */

    /* Efeito de vidro com borda e brilho */
    background-color: rgba(168, 85, 247, 0.1);
    /* bg-purple-500/10 */
    border: 1px solid rgba(168, 85, 247, 0.4);
    /* border-purple-400/40 */
    box-shadow: 0 0 15px rgba(168, 85, 247, 0.2);
    /* Sombra/glow */

    /* Animação de pulso */
    animation: pulse-glow 3s infinite ease-in-out;
}

@keyframes pulse-glow {

    0%,
    100% {
        box-shadow: 0 0 15px rgba(168, 85, 247, 0.2);
        transform: scale(1);
    }

    50% {
        box-shadow: 0 0 25px rgba(168, 85, 247, 0.4);
        transform: scale(1.03);
    }
}
</style>

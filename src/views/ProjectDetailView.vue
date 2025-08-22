<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTranslations } from "../composables/useTranslations";
import { projects } from '../data/projects';
import ParticleFogBackground from '../components/ParticleFogBackground.vue'; 

// Importa os ícones para o botão dinâmico
import playstoreIcon from "@/assets/playstore.png";
import steamIcon from "@/assets/steam.svg";
import githubIcon from "@/assets/github2.svg";
import behanceIcon from "@/assets/behance.svg";

const { t, currentLocale } = useTranslations();
const route = useRoute();
const router = useRouter();

// --- LÓGICA DO PROJETO E NAVEGAÇÃO ---
const project = computed(() => {
    const projectId = String(route.params.id);
    return projects.find(p => p.id === projectId);
});

const checkProjectExists = () => {
    if (!project.value) {
        router.replace({ name: 'NotFound' });
    }
};

onMounted(() => {
    checkProjectExists();
});
watch(() => route.params.id, () => {
    checkProjectExists();
});

const currentIndex = computed(() => project.value ? projects.findIndex(p => p.id === project.value?.id) : -1);
const previousProject = computed(() => currentIndex.value > 0 ? projects[currentIndex.value - 1] : null);
const nextProject = computed(() => currentIndex.value < projects.length - 1 ? projects[currentIndex.value + 1] : null);


// --- LÓGICA DO BOTÃO DE PLATAFORMA DINÂMICO ---
const platformStyles = computed(() => {
    if (!project.value?.platform) return null;
    const styles: Record<string, { color: string; icon: string; text: string }> = {
        "Play Store": { color: "from-green-500 to-green-600", icon: playstoreIcon, text: t('projectPage.liveProject') },
        "Steam": { color: "from-gray-700 to-gray-800", icon: steamIcon, text: t('projectPage.liveProject') },
        "Github": { color: "from-gray-800 to-black", icon: githubIcon, text: t('projectPage.liveProject') },
        "Behance": { color: "from-blue-500 to-blue-600", icon: behanceIcon, text: t('projectPage.liveProject') },
    };
    return styles[project.value.platform];
});

// --- LÓGICA DO LIGHTBOX (MELHORADA) ---
const activeImageIndex = ref<number | null>(null);

const activeImage = computed(() => {
    if (activeImageIndex.value !== null && project.value) {
        return project.value.gallery[activeImageIndex.value];
    }
    return null;
});

const openImage = (index: number) => {
    activeImageIndex.value = index;
    document.body.style.overflow = 'hidden';
};

const closeImage = () => {
    activeImageIndex.value = null;
    document.body.style.overflow = 'auto';
};

const nextImage = () => {
    if (project.value && activeImageIndex.value !== null) {
        activeImageIndex.value = (activeImageIndex.value + 1) % project.value.gallery.length;
    }
};

const prevImage = () => {
    if (project.value && activeImageIndex.value !== null) {
        const galleryLength = project.value.gallery.length;
        activeImageIndex.value = (activeImageIndex.value - 1 + galleryLength) % galleryLength;
    }
};

const handleKeydown = (e: KeyboardEvent) => {
    if (activeImage.value) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeImage();
    }
};
onMounted(() => document.addEventListener('keydown', handleKeydown));
onUnmounted(() => document.removeEventListener('keydown', handleKeydown));

watch(() => route.path, () => {
    closeImage();
});
</script>

<template>
    <div v-if="project" class="project-detail-page page-enter">
        <ParticleFogBackground />
        <header class="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
            <div class="absolute inset-0 bg-black/60 z-10"></div>
            <img :src="project.bannerImage" :alt="currentLocale ? project[currentLocale].title : ''" loading="lazy"
                class="absolute inset-0 w-full h-full object-cover animate-kenburns" />

            <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20"></div>

            <div class="relative z-20 p-6">
                <h1 class="text-4xl md:text-6xl font-extrabold mb-4">{{ currentLocale ? project[currentLocale].title :
                    '' }}</h1>
                <div class="flex flex-wrap justify-center gap-2">
                    <span v-for="tag in project.tags" :key="tag"
                        class="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {{ tag }}
                    </span>
                </div>
            </div>
        </header>

        <div class="max-w-6xl mx-auto px-6 py-16">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <aside class="lg:col-span-1 space-y-6">
                    <div v-if="currentLocale && project[currentLocale].client">
                        <h3 class="info-title">{{ t('projectPage.client') }}</h3>
                        <p class="info-text">{{ project[currentLocale].client }}</p>
                    </div>
                    <div>
                        <h3 class="info-title">{{ t('projectPage.platform') }}</h3>
                        <p class="info-text capitalize">{{ project.platform }}</p>
                    </div>
                    <div v-if="project.link && platformStyles">
                        <a :href="project.link" target="_blank"
                            :class="['button-cta', 'bg-gradient-to-br', platformStyles.color]">
                            <img :src="platformStyles.icon" alt="" class="w-5 h-5" loading="lazy" />
                            <span>{{ platformStyles.text }}</span>
                        </a>
                    </div>
                </aside>

                <div class="lg:col-span-2">
                    <h2 class="text-3xl font-bold text-white mb-4">{{ t('projectPage.aboutProject') }}</h2>
                    <p class="text-gray-300 leading-relaxed whitespace-pre-line">{{ currentLocale ?
                        project[currentLocale].fullDescription : '' }}
                    </p>

                    <div v-if="project.testimonial" class="testimonial-card">
                        <span class="testimonial-quote">“</span>
                        <p class="text-lg italic text-white">{{ project.testimonial.text }}</p>
                        <cite class="block text-right mt-4 not-italic text-[#43cb9c] font-semibold">- {{
                            project.testimonial.author }}</cite>
                    </div>

                    <h2 v-if="project.gallery.length > 0" class="text-3xl font-bold text-white mt-12 mb-6">{{
                        t('projectPage.gallery') }}</h2>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <img v-for="(img, index) in project.gallery" loading="lazy" :key="img" :src="img"
                            class="gallery-image" @click="openImage(index)" />
                    </div>
                </div>
            </div>

            <div class="mt-24 border-y border-white/10">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <router-link v-if="previousProject && currentLocale"
                        :to="{ name: 'projectDetail', params: { id: previousProject.id } }" class="nav-block group">
                        <span class="arrow">&larr;</span>
                        <div>
                            <span class="nav-label">{{ t('projectPage.prevProject') }}</span>
                            <span class="nav-title">{{ previousProject[currentLocale].title }}</span>
                        </div>
                    </router-link>
                    <div v-else class="nav-block-placeholder"></div>

                    <router-link v-if="nextProject && currentLocale"
                        :to="{ name: 'projectDetail', params: { id: nextProject.id } }"
                        class="nav-block group text-right">
                        <div class="flex-grow">
                            <span class="nav-label">{{ t('projectPage.nextProject') }}</span>
                            <span class="nav-title">{{ nextProject[currentLocale].title }}</span>
                        </div>
                        <span class="arrow">&rarr;</span>
                    </router-link>
                    <div v-else class="nav-block-placeholder"></div>
                </div>
            </div>
        </div>

    </div>

    <div v-else class="text-center py-40 min-h-screen">
        <h1 class="text-3xl text-white">{{ t('projectPage.notFound') }}</h1>
        <router-link to="/" class="text-[#43cb9c] hover:underline mt-4 inline-block">{{ t('projectPage.backHome')
        }}</router-link>
    </div>
    <Teleport to="body">
        <transition name="fade">
            <div v-if="activeImage" @click="closeImage" class="lightbox-backdrop">

                <button @click="closeImage" class="lightbox-close-button" aria-label="Fechar galeria">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <button @click.stop="prevImage" class="lightbox-nav-button left-4" aria-label="Imagem anterior">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <transition name="image-swap" mode="out-in">
                    <img :key="activeImage" :src="activeImage" alt="Visualização da galeria" class="lightbox-image"
                        @click.stop />
                </transition>

                <button @click.stop="nextImage" class="lightbox-nav-button right-4" aria-label="Próxima imagem">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

            </div>
        </transition>
    </Teleport>
</template>

<style scoped>
/* Animação de entrada da página */
@keyframes page-enter-animation {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.page-enter {
    animation: page-enter-animation 0.7s ease-out forwards;
}

/* Animação Ken Burns para o banner */
@keyframes kenburns {
    0% {
        transform: scale(1) translate(0, 0);
    }

    100% {
        transform: scale(1.1) translate(-2%, 2%);
    }
}

.animate-kenburns {
    animation: kenburns 20s ease-in-out infinite alternate;
}

/* --- ESTILOS DO LIGHTBOX MELHORADO --- */
.lightbox-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(8px);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}

.lightbox-image {
    max-width: 85vw;
    max-height: 85vh;
    border-radius: 0.5rem;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.7);
}

/* NOVO ESTILO DOS BOTÕES */
.lightbox-nav-button,
.lightbox-close-button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    /* Tamanho Fixo */
    height: 44px;
    /* Tamanho Fixo */

    /* Efeito de vidro com borda */
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.3);

    color: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    /* Transição mais suave */
    cursor: pointer;
}

.lightbox-nav-button:hover,
.lightbox-close-button:hover {
    color: white;
    background-color: rgba(67, 203, 156, 0.1);
    /* Fundo verde subtil */
    border-color: #43cb9c;
    /* Borda acende em verde */
    transform: scale(1.1);
    /* Efeito de brilho "Glow" */
    box-shadow: 0 0 20px rgba(67, 203, 156, 0.5);
}

.lightbox-close-button {
    top: 1.5rem;
    right: 1.5rem;
    z-index: 101;
}

/* Posicionamento responsivo */
.lightbox-nav-button.left-4 {
    left: 1rem;
}

.lightbox-nav-button.right-4 {
    right: 1rem;
}

@media (min-width: 768px) {
    .lightbox-nav-button.left-4 {
        left: 1.5rem;
    }

    .lightbox-nav-button.right-4 {
        right: 1.5rem;
    }
}

/* ... (O resto do seu CSS continua aqui) ... */
.image-swap-enter-active,
.image-swap-leave-active {
    transition: opacity 0.2s ease-in-out;
}

.image-swap-enter-from,
.image-swap-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-image:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(67, 203, 156, 0.3);
}

/* --- ESTILOS DO RESTO DA PÁGINA --- */
.info-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: #9ca3af;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.25rem;
}

.info-text {
    font-size: 1.125rem;
    color: white;
    text-transform: capitalize;
}

.button-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    font-weight: 700;
    color: white;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    transition: all 0.3s ease;
}

.button-cta:hover {
    box-shadow: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
    --tw-shadow-color: rgba(67, 203, 156, 0.3);
}

.testimonial-card {
    margin-top: 3rem;
    padding: 2rem;
    border-left: 4px solid #43cb9c;
    background-color: rgba(255, 255, 255, 0.05);
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    position: relative;
}

.testimonial-quote {
    position: absolute;
    top: -1.25rem;
    left: -0.5rem;
    font-size: 4.5rem;
    font-family: serif;
    color: rgba(67, 203, 156, 0.5);
}

.nav-block {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 2rem;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    transition: background-color 0.3s ease;
    position: relative;
    overflow: hidden;
}

.nav-block::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 3px;
    background-color: #43cb9c;
    box-shadow: 0 0 15px #43cb9c;
    transition: transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);
}

.nav-block:first-of-type::before {
    left: -3px;
}

.nav-block:first-of-type:hover::before {
    transform: translateX(3px);
}

.nav-block:last-of-type::before {
    right: -3px;
}

.nav-block:last-of-type:hover::before {
    transform: translateX(-3px);
}

.nav-block-placeholder {
    display: none;
}

@media (min-width: 768px) {
    .nav-block:first-of-type {
        border-right-width: 0.5px;
    }

    .nav-block:last-of-type {
        border-left-width: 0.5px;
        justify-content: flex-end;
    }

    .nav-block-placeholder {
        display: block;
        border-left: 1px solid rgba(255, 255, 255, 0.1);
        border-right: 1px solid rgba(255, 255, 255, 0.1);
    }
}

.nav-label {
    display: block;
    font-size: 0.75rem;
    color: #9ca3af;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.nav-title {
    display: block;
    font-size: 1.125rem;
    color: white;
    font-weight: 700;
    transition: color 0.3s ease;
}

.nav-block:hover .nav-title {
    color: #43cb9c;
}

.arrow {
    font-size: 1.875rem;
    color: #4b5563;
    transition: all 0.3s ease;
}

.nav-block:hover .arrow {
    color: #43cb9c;
    transform: scale(1.25);
}
</style>
<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTranslations } from "../composables/useTranslations";
import { projects } from '../data/projects';

import AbstractBackground from '../components/AbstractBackground.vue';

import playstoreIcon from "@/assets/playstore.png";
import steamIcon from "@/assets/steam.svg";
import githubIcon from "@/assets/github2.svg";
import behanceIcon from "@/assets/behance.svg";
const { t, currentLocale, setLocale } = useTranslations();

const route = useRoute();
const router = useRouter();
const activeImage = ref<string | null>(null);

const project = computed(() => {
    const projectId = route.params.id;
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

const currentIndex = computed(() => projects.findIndex(p => p.id === project.value?.id));
const previousProject = computed(() => currentIndex.value > 0 ? projects[currentIndex.value - 1] : null);
const nextProject = computed(() => currentIndex.value < projects.length - 1 ? projects[currentIndex.value + 1] : null);


const platformStyles = computed(() => {
    if (!project.value?.platform) return null;
    const styles: Record<string, { color: string; icon: string; text: string }> = {
        "Play Store": { color: "from-green-500 to-green-600", icon: playstoreIcon, text: t('projectPage.liveProject') },
        Steam: { color: "from-gray-700 to-gray-800", icon: steamIcon, text: t('projectPage.liveProject') },
        Github: { color: "from-gray-800 to-black", icon: githubIcon, text: t('projectPage.liveProject') },
        Behance: { color: "from-blue-500 to-blue-600", icon: behanceIcon, text: t('projectPage.liveProject') },
    };
    return styles[project.value.platform];
});

const openImage = (img: string) => {
    activeImage.value = img;
    document.body.style.overflow = 'hidden';
};
const closeImage = () => {
    activeImage.value = null;
    document.body.style.overflow = 'auto';
};

watch(() => route.path, () => {
    closeImage();
});
</script>

<template>
    <div v-if="project" class="project-detail-page page-enter">
        <header class="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
            <div class="absolute inset-0 bg-black/60 z-10"></div>
            <img :src="project.bannerImage" :alt="project.pt.title" loading="lazy"
                class="absolute inset-0 w-full h-full object-cover animate-kenburns" />
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

        <AbstractBackground />
        <div class="max-w-6xl mx-auto px-6 py-16">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <aside class="lg:col-span-1 space-y-6">
                    <div v-if="currentLocale ? project[currentLocale].client : ''">
                        <h3 class="info-title">{{ t('projectPage.client') }}</h3>
                        <p class="info-text">{{ currentLocale ? project[currentLocale].client : '' }}</p>
                    </div>
                    <div>
                        <h3 class="info-title">{{ t('projectPage.platform') }}</h3>
                        <p class="info-text capitalize">{{ project.platform }}</p>
                    </div>
                    <div v-if="project.link && platformStyles">
                        <a :href="project.link" target="_blank"
                            :class="['button-cta', 'bg-gradient-to-br', platformStyles.color]">
                            <img :src="platformStyles.icon" alt="" class="w-5 h-5" loading="lazy" />
                            <span>{{ platformStyles.text }} {{ project.platform }}</span>
                        </a>
                    </div>
                </aside>

                <div class="lg:col-span-2">
                    <h2 class="text-3xl font-bold text-white mb-4">{{ t('projectPage.aboutProject') }}</h2>
                    <p class="text-gray-300 leading-relaxed whitespace-pre-line">{{ currentLocale ?
                        project[currentLocale].fullDescription : ''}}
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
                        <img v-for="img in project.gallery" loading="lazy" :key="img" :src="img" class="gallery-image"
                            @click="openImage(img)" />
                    </div>
                </div>
            </div>

            <div class="mt-24 border-y border-white/10">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <router-link v-if="previousProject"
                        :to="{ name: 'projectDetail', params: { id: previousProject.id } }" class="nav-block group">
                        <span class="arrow">&larr;</span>
                        <div>
                            <span class="nav-label">{{ t('projectPage.prevProject') }}</span>
                            <span class="nav-title">{{ currentLocale ? previousProject[currentLocale].title : '' }}</span>
                        </div>
                    </router-link>
                    <div v-else class="nav-block-placeholder"></div>

                    <router-link v-if="nextProject" :to="{ name: 'projectDetail', params: { id: nextProject.id } }"
                        class="nav-block group text-right">
                        <div class="flex-grow">
                            <span class="nav-label">{{ t('projectPage.nextProject') }}</span>
                            <span class="nav-title">{{ currentLocale ? nextProject[currentLocale].title : '' }}</span>
                        </div>
                        <span class="arrow">&rarr;</span>
                    </router-link>
                    <div v-else class="nav-block-placeholder"></div>
                </div>
            </div>
        </div>

        <transition name="fade">
            <div v-if="activeImage" @click="closeImage"
                class="fixed inset-0 backdrop-blur-md z-50 flex items-center justify-center p-4">
                <img :src="activeImage" alt="Visualização da galeria" loading="lazy"
                    class="max-w-full max-h-full rounded-lg shadow-2xl" @click.stop />
            </div>
        </transition>
    </div>
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

/* Animação de Fade para o Lightbox */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Estilos da Sidebar e Componentes */
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

.gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.gallery-image:hover {
    transform: scale(1.05);
}

/* --- MELHORIAS NA NAVEGAÇÃO ENTRE PROJETOS --- */

.nav-block {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 2rem;
    /* Altura diminuída (padding vertical) */
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    transition: background-color 0.3s ease;
    position: relative;
    overflow: hidden;
}

/* Efeito de "glow" que vem da borda no hover */
.nav-block::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 3px;
    /* Espessura da "luz" */
    background-color: #43cb9c;
    box-shadow: 0 0 15px #43cb9c;
    transition: transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);
}

/* Posiciona o glow na borda esquerda para o link "Anterior" */
.nav-block:first-of-type::before {
    left: -3px;
    /* Começa escondido */
}

.nav-block:first-of-type:hover::before {
    transform: translateX(3px);
    /* Desliza para a vista */
}

/* Posiciona o glow na borda direita para o link "Próximo" */
.nav-block:last-of-type::before {
    right: -3px;
    /* Começa escondido */
}

.nav-block:last-of-type:hover::before {
    transform: translateX(-3px);
    /* Desliza para a vista */
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
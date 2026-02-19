<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { useHead } from '@vueuse/head';
import { useRoute, useRouter } from 'vue-router';
import { useTranslations } from "../composables/useTranslations";
import { useProjectStore } from '../stores/projectStore';
import { projects } from '../data/projects';

import playstoreIcon from "@/assets/playstore.png";
import steamIcon from "@/assets/steam.svg";
import githubIcon from "@/assets/github2.svg";
import behanceIcon from "@/assets/behance.svg";

const { t, currentLocale } = useTranslations();
const route = useRoute();
const projectStore = useProjectStore();
const router = useRouter();

const project = computed(() => projectStore.getProjectById(String(route.params.id)));

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

const previousProject = computed(() => {
    if (currentIndex.value === -1) return null;
    const prevIdx = (currentIndex.value - 1 + projects.length) % projects.length;
    return projects[prevIdx];
});

const nextProject = computed(() => {
    if (currentIndex.value === -1) return null;
    const nextIdx = (currentIndex.value + 1) % projects.length;
    return projects[nextIdx];
});

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

const activeImageIndex = ref<number | null>(null);

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
    if (activeImageIndex.value !== null) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeImage();
    }
};
onMounted(() => document.addEventListener('keydown', handleKeydown));
onUnmounted(() => document.removeEventListener('keydown', handleKeydown));

useHead({
    title: computed(() => `Whiskline Studio | ${project.value ? project.value.pt.title : 'Projeto'}`),
    meta: [
        {
            name: 'description',
            content: computed(() => project.value ? project.value.pt.shortDescription : 'Um projeto da Whiskline Studio')
        },
    ],
})

watch(() => route.path, () => {
    closeImage();
});
</script>

<template>
    <div v-if="project" class="project-detail-page page-enter relative">
        <div class="fixed top-0 left-0 w-full h-[2px] bg-[#43cb9c]/20 z-[60]">
            <div class="h-full bg-[#43cb9c] shadow-[0_0_10px_#43cb9c] transition-all duration-300" style="width: 100%"></div>
        </div>

        <header class="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
            <img :src="project.bannerImage" class="absolute inset-0 w-full h-full object-cover animate-kenburns" />
            <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#0a0a0a] z-10"></div>

            <div class="relative z-20 px-6 max-w-4xl">
                <span class="inline-block px-4 py-1 rounded-full bg-[#43cb9c]/20 text-[#43cb9c] text-xs font-bold uppercase tracking-widest mb-6 border border-[#43cb9c]/30">
                    {{ project.platform }}
                </span>
                <h1 class="text-5xl md:text-7xl font-black uppercase italic tracking-tighter animate-reveal text-white drop-shadow-[0_0_30px_rgba(67,203,156,0.3)]">
                    {{ currentLocale ? project[currentLocale].title : '' }}
                </h1>
                <div class="flex flex-wrap justify-center gap-3 mt-8">
                    <span v-for="tag in project.tags" :key="tag"
                        class="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-xs font-medium uppercase tracking-wider">
                        #{{ tag }}
                    </span>
                </div>
            </div>
        </header>

        <div class="max-w-6xl mx-auto px-6 py-16">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <aside class="lg:col-span-1 space-y-8 sticky top-32 h-fit">
                    <div class="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl relative overflow-hidden group">
                        <div class="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#43cb9c]/30"></div>
                        
                        <div class="space-y-8 relative z-10">
                            <div v-if="currentLocale && project[currentLocale].client">
                                <h3 class="text-[10px] uppercase tracking-[0.3em] text-[#43cb9c] font-bold mb-1">.Client</h3>
                                <p class="text-xl font-black italic text-white uppercase">{{ project[currentLocale].client }}</p>
                            </div>
                            <div>
                                <h3 class="text-[10px] uppercase tracking-[0.3em] text-[#43cb9c] font-bold mb-1">.Platform</h3>
                                <p class="text-xl font-black italic text-white uppercase">{{ project.platform }}</p>
                            </div>

                            <div v-if="project.link && platformStyles" class="pt-4">
                                <a :href="project.link" target="_blank"
                                    :class="['group relative overflow-hidden rounded-xl py-4 flex items-center justify-center gap-3 font-black uppercase italic text-xs tracking-widest transition-all duration-300 hover:skew-x-[-6deg]', platformStyles.color]">
                                    <img :src="platformStyles.icon" alt="" class="w-5 h-5 relative z-10" />
                                    <span class="relative z-10">{{ platformStyles.text }}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </aside>

                <div class="lg:col-span-2">
                    <div class="flex items-center gap-3 mb-4">
                        <span class="font-mono text-xs text-[#43cb9c] opacity-50 tracking-tighter">PROJECT_FILE</span>
                        <div class="h-[1px] w-12 bg-[#43cb9c]/30"></div>
                    </div>
                    <h2 class="text-3xl font-black uppercase italic tracking-tighter text-white mb-6 leading-none">
                        {{ t('projectPage.aboutProject') }}<span class="text-[#43cb9c]">_</span>
                    </h2>
                    <p class="text-gray-400 leading-relaxed whitespace-pre-line font-light text-lg">
                        {{ currentLocale ? project[currentLocale].fullDescription : '' }}
                    </p>

                    <div v-if="project.testimonial" class="mt-12 p-8 rounded-2xl bg-[#43cb9c]/5 border-l-4 border-[#43cb9c] relative">
                        <span class="absolute top-4 right-8 text-6xl font-serif text-[#43cb9c]/20">“</span>
                        <p class="text-xl italic text-white leading-relaxed relative z-10">{{ project.testimonial.text }}</p>
                        <cite class="block text-right mt-6 not-italic font-black uppercase tracking-widest text-xs text-[#43cb9c]">
                            // {{ project.testimonial.author }}
                        </cite>
                    </div>

                    <h2 v-if="project.gallery.length > 0" class="text-3xl font-black uppercase italic tracking-tighter text-white mt-16 mb-8 leading-none">
                        {{ t('projectPage.gallery') }}<span class="text-[#43cb9c]">.</span>
                    </h2>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <img v-for="(img, index) in project.gallery" loading="lazy" :key="img" :src="img"
                            class="gallery-image shadow-2xl" @click="openImage(index)" />
                    </div>
                </div>
            </div>

            <div class="mt-32 -mx-6 md:-mx-12 lg:-mx-24 border-t border-white/5 flex flex-col md:flex-row h-auto md:h-64 overflow-hidden relative group/nav">
                
                <router-link v-if="previousProject && currentLocale" 
                    :to="{ name: 'projectDetail', params: { id: previousProject.id } }"
                    class="group relative flex-1 flex items-center p-12 overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
                    
                    <img :src="previousProject.bannerImage" class="absolute inset-0 w-full h-full object-cover opacity-20 scale-105 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700 blur-sm" />
                    <div class="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

                    <div class="relative z-10">
                        <span class="text-[10px] uppercase tracking-[0.4em] text-[#43cb9c] font-bold mb-2 block opacity-70 group-hover:opacity-100 transition-opacity">
                            &larr; {{ t('projectPage.prevProject') }}
                        </span>
                        <h4 class="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white group-hover:translate-x-3 transition-transform duration-500">
                            {{ previousProject[currentLocale]?.title }}
                        </h4>
                    </div>
                </router-link>

                <div class="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                    <div class="divider-line"></div>
                </div>

                <router-link v-if="nextProject && currentLocale" 
                    :to="{ name: 'projectDetail', params: { id: nextProject.id } }"
                    class="group relative flex-1 flex items-center justify-end p-12 text-right overflow-hidden">
                    
                    <img :src="nextProject.bannerImage" class="absolute inset-0 w-full h-full object-cover opacity-20 scale-105 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700 blur-sm" />
                    <div class="absolute inset-0 bg-gradient-to-l from-black via-black/60 to-transparent"></div>

                    <div class="relative z-10">
                        <span class="text-[10px] uppercase tracking-[0.4em] text-[#43cb9c] font-bold mb-2 block opacity-70 group-hover:opacity-100 transition-opacity">
                            {{ t('projectPage.nextProject') }} &rarr;
                        </span>
                        <h4 class="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white group-hover:-translate-x-3 transition-transform duration-500">
                            {{ nextProject[currentLocale]?.title }}
                        </h4>
                    </div>
                </router-link>
            </div>
        </div>
    </div>

    <Teleport to="body">
        <transition name="fade">
            <div v-if="activeImageIndex !== null && project" @click="closeImage" class="lightbox-backdrop">
                <button @click.stop="prevImage" class="lightbox-nav-button left-8">
                    <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <transition name="image-swap" mode="out-in">
                    <img :key="activeImageIndex" :src="project.gallery[activeImageIndex]" class="lightbox-image" @click.stop />
                </transition>
                <button @click.stop="nextImage" class="lightbox-nav-button right-8">
                    <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </transition>
    </Teleport>
</template>

<style scoped>
@keyframes reveal {
    0% { opacity: 0; filter: blur(20px); letter-spacing: 0.5em; transform: translateY(20px); }
    100% { opacity: 1; filter: blur(0); letter-spacing: -0.02em; transform: translateY(0); }
}
.animate-reveal { animation: reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

@keyframes divider-pulse {
    0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scaleY(1); box-shadow: 0 0 15px #43cb9c; }
    50% { opacity: 1; transform: translate(-50%, -50%) scaleY(1.2); box-shadow: 0 0 30px #43cb9c; }
}
.divider-line {
    width: 2px;
    height: 120px;
    background: #43cb9c;
    border-radius: 99px;
    animation: divider-pulse 3s infinite ease-in-out;
}

.gallery-image {
    width: 100%;
    aspect-ratio: 16/10;
    object-fit: cover;
    border-radius: 1rem;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.gallery-image:hover {
    transform: scale(1.03) translateY(-10px);
    border-color: #43cb9c;
    box-shadow: 0 30px 60px rgba(0,0,0,0.5), 0 0 20px rgba(67, 203, 156, 0.2);
}

.lightbox-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(5,5,5,0.98);
    backdrop-filter: blur(15px);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: zoom-out;
}
.lightbox-image {
    max-width: 90vw;
    max-height: 85vh;
    border-radius: 1rem;
    box-shadow: 0 0 100px rgba(67, 203, 156, 0.1);
    border: 1px solid rgba(255,255,255,0.1);
}
.lightbox-nav-button {
    position: absolute;
    color: white;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
}
.lightbox-nav-button:hover { background: #43cb9c; color: black; border-color: #43cb9c; transform: scale(1.1); }

@keyframes kenburns {
    0% { transform: scale(1); }
    100% { transform: scale(1.15) translate(-1%, 1%); }
}
.animate-kenburns { animation: kenburns 25s infinite alternate ease-in-out; }
</style>
<script setup lang="ts">
import { ref } from "vue";
import { useTranslations } from "../composables/useTranslations";
import { useProjectStore } from '../stores/projectStore'; 
import ProjectCard from '@/components/ProjectCard.vue';

const projectStore = useProjectStore();
const { t } = useTranslations();
const projectList = projectStore.projectList;
</script>

<template>
  <section id="portfolio" class="relative py-24 bg-[#050505] overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(67,203,156,0.05)_0%,transparent_50%)] pointer-events-none"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="text-[#43cb9c] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Crafted Work</span>
        <h2 class="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
          {{ t('portfolio.title') }}
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-[#43cb9c] to-transparent mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard 
          v-for="(project, index) in projectList" 
          :key="project.id" 
          :project="project"
          class="project-card-animate"
          :style="{ animationDelay: `${index * 0.1}s` }"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-card-animate {
  opacity: 0;
  transform: translateY(30px);
  animation: cardAppear 0.8s ease-out forwards;
}

@keyframes cardAppear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Efeito de "Blur" no fundo da seção caso queira manter a conexão com a anterior */
#portfolio {
  background-image: radial-gradient(circle at top right, rgba(67, 203, 156, 0.02), transparent);
}
</style>
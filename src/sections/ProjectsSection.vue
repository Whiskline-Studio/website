<script setup lang="ts">
import { useTranslations } from "../composables/useTranslations";
import { useProjectStore } from '../stores/projectStore';
import ProjectCard from '@/components/ProjectCard.vue';
import ProjectMatrixBackground from '@/components/anims/ProjectMatrixBackground.vue';
const projectStore = useProjectStore();
const { t } = useTranslations();
const projectList = projectStore.projectList;
</script>

<template>
  <section id="portfolio" class="relative py-32 bg-[#050505] overflow-hidden">
    <ProjectMatrixBackground />
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
         style="background-image: radial-gradient(#43cb9c 1px, transparent 1px); background-size: 30px 30px;">
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <header class="mb-20 text-left">
        <div class="flex items-center gap-3 mb-4">
          <span class="font-mono text-[10px] text-[#43cb9c] uppercase tracking-[0.5em] opacity-60">
            System_Archives // SEC_03
          </span>
          <div class="h-[1px] w-24 bg-gradient-to-r from-[#43cb9c]/40 to-transparent"></div>
        </div>
        
        <h2 class="text-6xl md:text-7xl font-black uppercase italic tracking-tighter text-white leading-[0.85] mb-6">
          {{ t('portfolio.title') }}<span class="text-[#43cb9c]">_</span>
        </h2>
        
        <p class="text-gray-500 font-mono text-xs uppercase tracking-[0.2em] max-w-xl">
          <span class="text-[#43cb9c]">></span> Iniciando protocolo de exibição de projetos ativos...
        </p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        <ProjectCard 
          v-for="(project, index) in projectList" 
          :key="project.id" 
          :project="project"
          :index="index"
          class="project-card-animate" 
          :style="{ '--delay': `${index * 0.15}s` }" 
        />
      </div>
    </div>

    <div class="absolute bottom-10 left-10 font-mono text-[8px] text-white/10 uppercase vertical-text hidden md:block">
      Whiskline_Studio_v2.6
    </div>
  </section>
</template>

<style scoped>
.project-card-animate {
  opacity: 0;
  transform: translateY(40px) skewY(1deg);
  animation: cardAppear 0.8s var(--delay) cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes cardAppear {
  to {
    opacity: 1;
    transform: translateY(0) skewY(0);
  }
}

.vertical-text {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}

#portfolio::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #050505 0%, transparent 20%, transparent 80%, #050505 100%);
  pointer-events: none;
  z-index: 2;
}
</style>
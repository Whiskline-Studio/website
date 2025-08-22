<script setup lang="ts">
import { ref } from "vue";
import { useTranslations } from "../composables/useTranslations";
import { projects, type Project } from "../data/projects";
import ProjectCard from '@/components/ProjectCard.vue';

const { t } = useTranslations();
const projectList = ref<Project[]>(projects);
</script>

<template>
  <section id="portfolio" class="relative py-20 backdrop-blur-md text-center">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-extrabold mb-12 text-white">
        {{ t('portfolio.title') }}
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <ProjectCard v-for="project in projectList" :key="project.id" :project="project" />
      </div>

    </div>
  </section>
</template>
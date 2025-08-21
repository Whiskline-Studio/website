<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import FullScreenLoader from './components/FullScreenLoader.vue';
import NavbarMain from './sections/NavbarMain.vue';
import FooterMain from './sections/FooterMain.vue';
import LanguageModal from './components/LanguageModal.vue';
import { useTranslations } from './composables/useTranslations';

const isLoading = ref(true);
const showLanguageModal = ref(false);
const route = useRoute(); 

const { setLocale } = useTranslations();

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;

    const saved = localStorage.getItem("user-language") as "pt" | "en" | null;

    if (saved) {
      // idioma já salvo → aplica
      setLocale(saved);
    } else {
      // sem idioma salvo → mostra modal
      showLanguageModal.value = true;
    }
  }, 1000);
});


// função que será chamada quando usuário escolher idioma no modal
const handleLanguageSelect = (lang: "pt" | "en") => {
  setLocale(lang);
  showLanguageModal.value = false;
};
</script>

<template>
  
  <LanguageModal
  v-if="showLanguageModal"
  @selectLanguage="handleLanguageSelect"
  />
  <FullScreenLoader :show="isLoading" />

  <div v-if="!isLoading" class="relative bg-black text-white font-sans min-h-screen overflow-hidden flex flex-col">
    <NavbarMain />
    <main class="relative z-10 flex-grow">
      <RouterView :key="route.path" />
    </main>
    <FooterMain />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useScroll } from '../composables/useScroll';
import { navLinks } from '../data/config';
import { useTranslations } from "../composables/useTranslations";
import LanguageSwitcher from '../components/LanguageSwitcher.vue';

const routeList = navLinks;

const { t } = useTranslations();

const { scrollToSection } = useScroll();

const footerRef = ref<HTMLElement | null>(null);
const isFooterVisible = ref(false);

let observer: IntersectionObserver;

onMounted(() => {
  if (!footerRef.value) return;

  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isFooterVisible.value = true;
      observer.unobserve(entry.target);
    }
  }, {
    threshold: 0.1
  });

  observer.observe(footerRef.value);
});

const socialLinks = [
  {
    label: 'Play Store',
    url: 'https://play.google.com/store/apps/dev?id=5944494200528190284',
    path: 'M16.03,15l-11.53,11.53c-0.13,-0.27 -0.19,-0.57 -0.19,-0.88v-21.3c0,-0.31 0.06,-0.61 0.19,-0.88zM17.41,16.22l3.85,3.85l-13.69,7.38c-0.32,0.17 -0.68,0.26 -1.03,0.26c-0.19,0 -0.38,-0.02 -0.56,-0.07zM17.41,13.78l-11.42,-11.42c0.53,-0.15 1.09,-0.09 1.59,0.18l13.69,7.38zM28.37,15c0,0.8 -0.44,1.53 -1.14,1.91l-4.33,2.34l-4.25,-4.25l4.25,-4.25l4.33,2.34c0.7,0.38 1.14,1.11 1.14,1.91z',
    viewBox: '0 0 32 32', // Ajustado para o padrão do ícone
    scale: 'scale(1)'
  },
  {
    label: 'Steam',
    url: 'https://store.steampowered.com/curator/45745455',
    path: 'M11.5,6c-3.01977,0 -5.5,2.48023 -5.5,5.5v25c0,3.01977 2.48023,5.5 5.5,5.5h16.22266c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381h-16.22266c-1.39823,0 -2.5,-1.10177 -2.5,-2.5v-8.43945l4.05078,1.73633c-0.029,0.231 -0.05078,0.46412 -0.05078,0.70313c0,3.033 2.467,5.5 5.5,5.5c3.033,0 5.5,-2.467 5.5,-5.5c0,-0.266 -0.0255,-0.5243 -0.0625,-0.7793l4.79492,-3.73437c0.089,0.003 0.17758,0.01367 0.26758,0.01367c3.859,0 7,-3.141 7,-7c0,-3.859 -3.141,-7 -7,-7c-3.859,0 -7,3.141 -7,7c0,0.207 0.01325,0.41028 0.03125,0.61328l-3.24414,5.40234c-0.096,-0.005 -0.19011,-0.01562 -0.28711,-0.01562c-1.721,0 -3.25858,0.79511 -4.26758,2.03711l-5.23242,-2.24023v-13.29687c0,-1.39823 1.10177,-2.5 2.5,-2.5h2.5c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381zM21.29883,6c-0.54095,-0.00765 -1.04412,0.27656 -1.31683,0.74381c-0.27271,0.46725 -0.27271,1.04514 0,1.51238c0.27271,0.46725 0.77588,0.75146 1.31683,0.74381h15.20117c1.39823,0 2.5,1.10177 2.5,2.5v25c0,1.39823 -1.10177,2.5 -2.5,2.5h-2.18164c-0.54095,-0.00765 -1.04412,0.27656 -1.31683,0.74381c-0.27271,0.46725 -0.27271,1.04514 0,1.51238c0.27271,0.46725 0.77588,0.75146 1.31683,0.74381h2.18164c3.01977,0 5.5,-2.48023 5.5,-5.5v-25c0,-3.01977 -2.48023,-5.5 -5.5,-5.5z',
    viewBox: '0 0 48 48',
    scale: 'scale(1)'
  },
  {
    label: 'Discord',
    url: 'https://discord.gg/Q7tegBxbHY',
    path: 'M41.625,10.76953c-3.98047,-3.20313 -10.27734,-3.74609 -10.54687,-3.76563c-0.41797,-0.03516 -0.81641,0.19922 -0.98828,0.58594c-0.01562,0.02344 -0.15234,0.33984 -0.30469,0.83203c2.63281,0.44531 5.86719,1.33984 8.79297,3.15625c0.46875,0.28906 0.61328,0.90625 0.32422,1.375c-0.19141,0.30859 -0.51562,0.47656 -0.85156,0.47656c-0.17969,0 -0.36328,-0.05078 -0.52734,-0.15234c-5.03125,-3.12109 -11.3125,-3.27734 -12.52344,-3.27734c-1.21094,0 -7.49609,0.15625 -12.52344,3.27734c-0.46875,0.29297 -1.08594,0.14844 -1.375,-0.32031c-0.29297,-0.47266 -0.14844,-1.08594 0.32031,-1.37891c2.92578,-1.8125 6.16016,-2.71094 8.79297,-3.15234c-0.15234,-0.49609 -0.28906,-0.80859 -0.30078,-0.83594c-0.17578,-0.38672 -0.57031,-0.62891 -0.99219,-0.58594c-0.26953,0.01953 -6.56641,0.5625 -10.60156,3.80859c-2.10547,1.94922 -6.32031,13.33984 -6.32031,23.1875c0,0.17578 0.04688,0.34375 0.13281,0.49609c2.90625,5.10938 10.83984,6.44531 12.64844,6.50391c0.00781,0 0.01953,0 0.03125,0c0.32031,0 0.62109,-0.15234 0.80859,-0.41016l1.82813,-2.51562c-4.93359,-1.27344 -7.45312,-3.4375 -7.59766,-3.56641c-0.41406,-0.36328 -0.45312,-0.99609 -0.08594,-1.41016c0.36328,-0.41406 0.99609,-0.45312 1.41016,-0.08984c0.05859,0.05469 4.69922,3.99219 13.82422,3.99219c9.14063,0 13.78125,-3.95312 13.82813,-3.99219c0.41406,-0.35937 1.04297,-0.32422 1.41016,0.09375c0.36328,0.41406 0.32422,1.04297 -0.08984,1.40625c-0.14453,0.12891 -2.66406,2.29297 -7.59766,3.56641l1.82813,2.51563c0.1875,0.25781 0.48828,0.41016 0.80859,0.41016c0.01172,0 0.02344,0 0.03125,0c1.80859,-0.05859 9.74219,-1.39453 12.64844,-6.50391c0.08594,-0.15234 0.13281,-0.32031 0.13281,-0.49609c0,-9.84766 -4.21484,-21.23828 -6.375,-23.23047z',
    viewBox: '0 0 50 50',
    scale: 'scale(1)'
  }
];

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <footer ref="footerRef"
    class="relative bg-[#050505] text-gray-500 py-20 px-6 border-t border-white/5 transition-all duration-1000 ease-out overflow-hidden"
    :class="isFooterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">

    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[1px] bg-[#43cb9c] shadow-[0_0_15px_#43cb9c]"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        <div class="lg:col-span-5 flex flex-col items-center md:items-start">
          <img src="@/assets/whiskline.webp" loading="lazy" alt="Whiskline Logo"
            class="h-10 object-contain mb-8 brightness-125" />
          <p class="max-w-sm text-sm leading-relaxed font-light text-gray-400">
            <span class="text-[#43cb9c] font-mono mr-2">//</span>
            {{ t('footer.description') }}
          </p>

          <div class="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] opacity-30 hidden md:block">
            <p>System_Status: Stable</p>
            <p>Connection: Secure_SSL</p>
            <p>Local_Time: 2026.02.19_12:28</p>
          </div>
        </div>

        <div class="lg:col-span-3 text-center md:text-left">
          <h3 class="text-[10px] uppercase tracking-[0.5em] text-[#43cb9c] font-bold mb-8">.Navigation</h3>
          <ul class="space-y-4">
            <li v-for="(item, index) in routeList" :key="item.labelKey">
              <a :href="`#${item.href}`" @click.prevent="scrollToSection(item.href)"
                class="group flex items-center gap-3 text-2xl font-black italic uppercase tracking-tighter text-white hover:text-[#43cb9c] transition-all duration-300">
                <span class="text-[9px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">0{{ index + 1
                }}</span>
                <span class="group-hover:translate-x-2 transition-transform">{{ t(item.labelKey) }}</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-4 flex flex-col items-center md:items-end space-y-10">
          <div class="text-center md:text-right w-full">
            <h3 class="text-[10px] uppercase tracking-[0.5em] text-[#43cb9c] font-bold mb-8">.Network</h3>
            <div class="flex justify-center md:justify-end gap-6">
              <div class="flex justify-center md:justify-end gap-6">
                <a v-for="link in socialLinks" :key="link.label" :href="link.url" target="_blank"
                  :aria-label="link.label" class="social-icon group">
                  <div
                    class="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-[#43cb9c]/50 group-hover:bg-[#43cb9c]/10 transition-all duration-300">
                    <svg :viewBox="link.viewBox" width="24" height="24" class="transition-colors duration-300">
                      <g fill="currentColor">
                        <path :d="link.path"></path>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class="pt-4">
            <LanguageSwitcher />
          </div>
        </div>

      </div>

      <hr class="my-16 border-white/5" />

      <div
        class="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono uppercase tracking-[0.2em] opacity-40">
        <p>{{ t('footer.rights') }}</p>
        <div class="flex items-center gap-4">
          <span>{{ t('footer.madeBy') }}</span>
          <a href="https://github.com/joseminelli" target="_blank"
            class="text-white hover:text-[#43cb9c] transition-colors underline decoration-[#43cb9c]/30">José Minelli</a>
          <span class="opacity-20">|</span>
          <a href="https://www.linkedin.com/in/joseminelli" target="_blank"
            class="text-white hover:text-[#43cb9c] transition-colors underline decoration-[#43cb9c]/30">LinkedIn</a>
        </div>
      </div>
    </div>

    <div class="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-white/5 pointer-events-none"></div>
    <div class="absolute top-6 right-6 w-8 h-8 border-t border-r border-white/5 pointer-events-none"></div>
  </footer>
</template>

<style scoped>
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
  bottom: -4px;
  left: 0;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}

.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.social-icon {
  color: #9ca3af;
  transition: color 0.3s ease, transform 0.3s ease, filter 0.3s ease;
}

.social-icon:hover {
  color: #ffffff;
  transform: scale(1.1) translateY(-2px);
  filter: drop-shadow(0 0 5px #43cb9c);
}

.led-bar {
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
  height: 2px;
  background: #43cb9c;
  box-shadow: 0 0 10px #43cb9c, 0 0 20px #43cb9c;
  animation: led-pulse 2.5s infinite ease-in-out;
}

@keyframes led-pulse {
  0% {
    opacity: 0.7;
    box-shadow: 0 0 8px #43cb9c, 0 0 16px #43cb9c;
  }

  50% {
    opacity: 1;
    box-shadow: 0 0 12px #43cb9c, 0 0 24px #43cb9c;
  }

  100% {
    opacity: 0.7;
    box-shadow: 0 0 8px #43cb9c, 0 0 16px #43cb9c;
  }
}
</style>
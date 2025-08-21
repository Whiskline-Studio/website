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

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <footer ref="footerRef"
    class="relative bg-black/70 backdrop-blur-md text-gray-400 py-16 px-6 mt-32 border-t border-white/10 transition-all duration-700 ease-out"
    :class="isFooterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
    <div class="led-bar"></div>

    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

        <div class="flex flex-col items-center md:items-start">
          <img src="@/assets/whiskline.png" alt="Whiskline Logo" class="h-12 object-contain mb-4" />
          <p class="max-w-xs text-sm">
            <span>{{ t('footer.description') }}</span>
          </p>
        </div>

        <div>
          <h3 class="font-bold text-lg text-white mb-4">{{ t('footer.navigation') }}</h3>
          <ul class="space-y-3">
            <li v-for="item in routeList" :key="item.labelKey">
              <a :href="`#${item.href}`" @click.prevent="scrollToSection(item.href)" class="nav-link">
                {{ t(item.labelKey) }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-lg text-white mb-4">{{ t('footer.followUs') }}</h3>
          <div class="flex justify-center md:justify-start space-x-5">
            <a href="https://play.google.com/store/apps/dev?id=5944494200528190284" target="_blank" class="social-icon"
              aria-label="Google Play Store">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0,0,256,256">
                <g fill="currentColor" fill-rule="nonzero">
                  <g transform="scale(8.53333,8.53333)">
                    <path
                      d="M16.03,15l-11.53,11.53c-0.13,-0.27 -0.19,-0.57 -0.19,-0.88v-21.3c0,-0.31 0.06,-0.61 0.19,-0.88zM17.41,16.22l3.85,3.85l-13.69,7.38c-0.32,0.17 -0.68,0.26 -1.03,0.26c-0.19,0 -0.38,-0.02 -0.56,-0.07zM17.41,13.78l-11.42,-11.42c0.53,-0.15 1.09,-0.09 1.59,0.18l13.69,7.38zM28.37,15c0,0.8 -0.44,1.53 -1.14,1.91l-4.33,2.34l-4.25,-4.25l4.25,-4.25l4.33,2.34c0.7,0.38 1.14,1.11 1.14,1.91z">
                    </path>
                  </g>
                </g>
              </svg>
            </a>
            <a href="https://store.steampowered.com/publisher/minelli" target="_blank" class="social-icon"
              aria-label="Steam">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0,0,256,256">
                <g fill="currentColor" fill-rule="nonzero">
                  <g transform="scale(5.33333,5.33333)">
                    <path
                      d="M11.5,6c-3.01977,0 -5.5,2.48023 -5.5,5.5v25c0,3.01977 2.48023,5.5 5.5,5.5h16.22266c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381h-16.22266c-1.39823,0 -2.5,-1.10177 -2.5,-2.5v-8.43945l4.05078,1.73633c-0.029,0.231 -0.05078,0.46412 -0.05078,0.70313c0,3.033 2.467,5.5 5.5,5.5c3.033,0 5.5,-2.467 5.5,-5.5c0,-0.266 -0.0255,-0.5243 -0.0625,-0.7793l4.79492,-3.73437c0.089,0.003 0.17758,0.01367 0.26758,0.01367c3.859,0 7,-3.141 7,-7c0,-3.859 -3.141,-7 -7,-7c-3.859,0 -7,3.141 -7,7c0,0.207 0.01325,0.41028 0.03125,0.61328l-3.24414,5.40234c-0.096,-0.005 -0.19011,-0.01562 -0.28711,-0.01562c-1.721,0 -3.25858,0.79511 -4.26758,2.03711l-5.23242,-2.24023v-13.29687c0,-1.39823 1.10177,-2.5 2.5,-2.5h2.5c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381zM21.29883,6c-0.54095,-0.00765 -1.04412,0.27656 -1.31683,0.74381c-0.27271,0.46725 -0.27271,1.04514 0,1.51238c0.27271,0.46725 0.77588,0.75146 1.31683,0.74381h15.20117c1.39823,0 2.5,1.10177 2.5,2.5v25c0,1.39823 -1.10177,2.5 -2.5,2.5h-2.18164c-0.54095,-0.00765 -1.04412,0.27656 -1.31683,0.74381c-0.27271,0.46725 -0.27271,1.04514 0,1.51238c0.27271,0.46725 0.77588,0.75146 1.31683,0.74381h2.18164c3.01977,0 5.5,-2.48023 5.5,-5.5v-25c0,-3.01977 -2.48023,-5.5 -5.5,-5.5zM29,15c2.206,0 4,1.794 4,4c0,2.206 -1.794,4 -4,4c-2.206,0 -4,-1.794 -4,-4c0,-2.206 1.794,-4 4,-4zM29,17c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM18.5,27c1.93,0 3.5,1.57 3.5,3.5c0,1.93 -1.57,3.5 -3.5,3.5c-1.882,0 -3.41233,-1.49633 -3.48633,-3.36133l2.89453,1.24023c0.193,0.082 0.3938,0.12109 0.5918,0.12109c0.582,0 1.13491,-0.34116 1.37891,-0.91016c0.326,-0.761 -0.02511,-1.6437 -0.78711,-1.9707l-2.89062,-1.23828c0.617,-0.541 1.41483,-0.88086 2.29883,-0.88086z">
                    </path>
                  </g>
                </g>
              </svg>
            </a>
            <a href="https://discord.gg/Q7tegBxbHY" target="_blank" class="social-icon" aria-label="Discord">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0,0,256,256">
                <g fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                  stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                  font-family="none" font-weight="none" font-size="none" text-anchor="none"
                  style="mix-blend-mode: normal">
                  <g transform="scale(5.12,5.12)">
                    <path
                      d="M41.625,10.76953c-3.98047,-3.20313 -10.27734,-3.74609 -10.54687,-3.76563c-0.41797,-0.03516 -0.81641,0.19922 -0.98828,0.58594c-0.01562,0.02344 -0.15234,0.33984 -0.30469,0.83203c2.63281,0.44531 5.86719,1.33984 8.79297,3.15625c0.46875,0.28906 0.61328,0.90625 0.32422,1.375c-0.19141,0.30859 -0.51562,0.47656 -0.85156,0.47656c-0.17969,0 -0.36328,-0.05078 -0.52734,-0.15234c-5.03125,-3.12109 -11.3125,-3.27734 -12.52344,-3.27734c-1.21094,0 -7.49609,0.15625 -12.52344,3.27734c-0.46875,0.29297 -1.08594,0.14844 -1.375,-0.32031c-0.29297,-0.47266 -0.14844,-1.08594 0.32031,-1.37891c2.92578,-1.8125 6.16016,-2.71094 8.79297,-3.15234c-0.15234,-0.49609 -0.28906,-0.80859 -0.30078,-0.83594c-0.17578,-0.38672 -0.57031,-0.62891 -0.99219,-0.58594c-0.26953,0.01953 -6.56641,0.5625 -10.60156,3.80859c-2.10547,1.94922 -6.32031,13.33984 -6.32031,23.1875c0,0.17578 0.04688,0.34375 0.13281,0.49609c2.90625,5.10938 10.83984,6.44531 12.64844,6.50391c0.00781,0 0.01953,0 0.03125,0c0.32031,0 0.62109,-0.15234 0.80859,-0.41016l1.82813,-2.51562c-4.93359,-1.27344 -7.45312,-3.4375 -7.59766,-3.56641c-0.41406,-0.36328 -0.45312,-0.99609 -0.08594,-1.41016c0.36328,-0.41406 0.99609,-0.45312 1.41016,-0.08984c0.05859,0.05469 4.69922,3.99219 13.82422,3.99219c9.14063,0 13.78125,-3.95312 13.82813,-3.99219c0.41406,-0.35937 1.04297,-0.32422 1.41016,0.09375c0.36328,0.41406 0.32422,1.04297 -0.08984,1.40625c-0.14453,0.12891 -2.66406,2.29297 -7.59766,3.56641l1.82813,2.51563c0.1875,0.25781 0.48828,0.41016 0.80859,0.41016c0.01172,0 0.02344,0 0.03125,0c1.80859,-0.05859 9.74219,-1.39453 12.64844,-6.50391c0.08594,-0.15234 0.13281,-0.32031 0.13281,-0.49609c0,-9.84766 -4.21484,-21.23828 -6.375,-23.23047zM18.5,30c-1.93359,0 -3.5,-1.78906 -3.5,-4c0,-2.21094 1.56641,-4 3.5,-4c1.93359,0 3.5,1.78906 3.5,4c0,2.21094 -1.56641,4 -3.5,4zM31.5,30c-1.93359,0 -3.5,-1.78906 -3.5,-4c0,-2.21094 1.56641,-4 3.5,-4c1.93359,0 3.5,1.78906 3.5,4c0,2.21094 -1.56641,4 -3.5,4z">
                    </path>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <hr class="my-10 border-white/10" />
      <div class="text-center">
        <p class="text-sm mb-4">{{ t('footer.rights') }}</p>
        <div class="inline-block px-3 py-1 border border-white/20 text-white/80 font-semibold rounded-full text-xs">
          {{ t('footer.madeBy') }}
          <a href="https://github.com/joseminelli" target="_blank" class="text-[#43cb9c] hover:underline">José
            Minelli
          </a>
          |
          <a href="https://www.linkedin.com/in/joseminelli" target="_blank"
            class="text-[#43cb9c] hover:underline">LinkedIn</a>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center md:justify-end pt-8 md:pt-0 md:absolute md:bottom-8 md:right-8">
  <LanguageSwitcher />
</div>
  </footer>
</template>

<style scoped>
/* EFEITO DE HOVER PARA OS LINKS DE NAVEGAÇÃO */
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

/* EFEITO DE HOVER "GLOW" PARA OS ÍCONES SOCIAIS */
.social-icon {
  color: #9ca3af;
  /* text-gray-400 */
  transition: color 0.3s ease, transform 0.3s ease, filter 0.3s ease;
}

.social-icon:hover {
  color: #ffffff;
  transform: scale(1.1) translateY(-2px);
  filter: drop-shadow(0 0 5px #43cb9c);
}

/* ANIMAÇÃO E ESTILO DA BARRA DE LED */
.led-bar {
  position: absolute;
  top: -1px;
  /* Posiciona sobre a borda */
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
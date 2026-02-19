<script setup lang="ts">
import { ref } from 'vue';
import { useTranslations } from "../composables/useTranslations";
import { useContactForm } from '../composables/useContactForm';
import FullScreenLoader from '../components/FullScreenLoader.vue';
import GridScanBackground from '../components/anims/GridScanBackground.vue';

const { t } = useTranslations();

const { name, email, message, status, sending, handleSubmit } = useContactForm();

type ContactReason = 'project' | 'bug';
const contactReason = ref<ContactReason>('project');

const setContactReason = (reason: ContactReason) => {
    contactReason.value = reason;
    status.value = { type: null, message: '' };
};
</script>

<template>
    <FullScreenLoader :show="sending" />

    <section id="contato" class="marginTop relative py-24 overflow-hidden"style="background: radial-gradient(circle at center, rgba(67, 203, 156, 0.02) 0%, transparent 70%); height: 100vh;">
        <GridScanBackground />
        
        <div class="max-w-3xl mx-auto px-6 relative z-10">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-6xl font-extrabold mb-4 text-white tracking-tight">
                    {{ t('contact.title') }}
                </h2>
                <p class="text-gray-400 max-w-lg mx-auto leading-relaxed">
                    {{ t('contact.subtitle') }}
                </p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-12">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div class="flex flex-col gap-2">
                        <label class="text-[10px] uppercase tracking-[0.3em] text-[#43cb9c] font-bold ml-1">
                            01. {{ t('contact.formName') }}
                        </label>
                        <input v-model="name" type="text" placeholder="John Doe" required
                            class="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white transition-all duration-300 focus:outline-none focus:border-[#43cb9c]/50 focus:bg-[#43cb9c]/5" />
                    </div>

                    <div class="flex flex-col gap-2">
                        <label class="text-[10px] uppercase tracking-[0.3em] text-[#43cb9c] font-bold ml-1">
                            02. {{ t('contact.formEmail') }}
                        </label>
                        <input v-model="email" type="email" placeholder="email@exemplo.com" required
                            class="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white transition-all duration-300 focus:outline-none focus:border-[#43cb9c]/50 focus:bg-[#43cb9c]/5" />
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <label class="text-[10px] uppercase tracking-[0.3em] text-[#43cb9c] font-bold ml-1">
                        03. {{ t('contact.formMessage') }}
                    </label>
                    <textarea v-model="message" rows="5" :placeholder="t('contact.formPlaceholder')" required
                        class="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white transition-all duration-300 focus:outline-none focus:border-[#43cb9c]/50 focus:bg-[#43cb9c]/5 resize-none"></textarea>
                </div>

                <div class="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                    <button type="submit" :disabled="sending"
                        class="group relative px-12 py-4 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-full transition-all duration-300 hover:bg-[#43cb9c] hover:text-white disabled:opacity-50">
                        <span v-if="!sending">{{ t('contact.buttonSend') }}</span>
                        <span v-else class="flex items-center gap-2">
                            <div class="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                            {{ t('contact.buttonSending') }}
                        </span>
                    </button>

                    <transition name="status-fade">
                        <div v-if="status.message" :class="status.type === 'success' ? 'text-[#43cb9c]' : 'text-red-400'"
                            class="flex items-center gap-2 text-xs font-mono tracking-wider">
                            <span v-if="status.type === 'success'">[SUCCESS]:</span>
                            <span v-else>[ERROR]:</span>
                            {{ status.message }}
                        </div>
                    </transition>
                </div>
            </form>
        </div>

        <div class="absolute top-10 left-10 w-12 h-12 border-t border-l border-white/10 pointer-events-none"></div>
        <div class="absolute bottom-10 right-10 w-12 h-12 border-b border-r border-white/10 pointer-events-none"></div>
    </section>
</template>

<style scoped>
/* Refinando o foco nos campos */
input:focus::placeholder,
textarea:focus::placeholder {
    opacity: 0;
}

/* Remove o fundo branco do autofill do Chrome */
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus {
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 1000px transparent inset;
  transition: background-color 5000s ease-in-out 0s;
}
.marginTop {
    margin-top: 10rem !important;
}

@media (max-width: 768px) {
    .marginTop {
        margin-top: 6rem !important;
    }
}

form::after {
    content: "";
    position: absolute;
    inset: -10%;
    background: radial-gradient(circle at center, rgba(67, 203, 156, 0.05) 0%, transparent 70%);
    z-index: -1;
    pointer-events: none;
}

/* Melhorando a animação de fade */
.status-fade-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.status-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
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

    <section id="contato" class="marginTop relative py-24 overflow-hidden bg-[#050505] min-h-screen flex items-center">
        <GridScanBackground />

        <div class="max-w-4xl mx-auto px-6 relative z-10 w-full">
            <div class="mb-16 text-left">
                <div class="flex items-center gap-3 mb-4">
                    <span class="font-mono text-[10px] text-[#43cb9c] uppercase tracking-[0.5em] opacity-60">
                        System_TERMINAL_COMMS // SEC_05
                    </span>
                    <div class="h-[1px] w-24 bg-gradient-to-r from-[#43cb9c]/40 to-transparent"></div>
                </div>
                <h2 class="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white leading-none">
                    {{ t('contact.title') }}<span class="text-[#43cb9c]">_</span>
                </h2>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-10 relative">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="group relative">
                        <label
                            class="text-[10px] uppercase font-black italic tracking-[0.2em] text-[#43cb9c] mb-2 block">
                            01. {{ t('contact.formName') }}
                        </label>
                        <div class="relative">
                            <div
                                class="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-focus-within:border-[#43cb9c]">
                            </div>
                            <input v-model="name" type="text" placeholder="USER_IDENTIFICATION" required
                                class="w-full bg-white/5 border border-white/10 rounded-lg p-5 text-white font-mono text-xs transition-all duration-300 focus:outline-none focus:border-[#43cb9c]/40 focus:bg-[#43cb9c]/5 placeholder:text-white/10" />
                        </div>
                    </div>

                    <div class="group relative">
                        <label
                            class="text-[10px] uppercase font-black italic tracking-[0.2em] text-[#43cb9c] mb-2 block">
                            02. {{ t('contact.formEmail') }}
                        </label>
                        <div class="relative">
                            <div
                                class="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-focus-within:border-[#43cb9c]">
                            </div>
                            <input v-model="email" type="email" placeholder="ACCESS_NODE@HOST.COM" required
                                class="w-full bg-white/5 border border-white/10 rounded-lg p-5 text-white font-mono text-xs transition-all duration-300 focus:outline-none focus:border-[#43cb9c]/40 focus:bg-[#43cb9c]/5 placeholder:text-white/10" />
                        </div>
                    </div>
                </div>

                <div class="group relative">
                    <label class="text-[10px] uppercase font-black italic tracking-[0.2em] text-[#43cb9c] mb-2 block">
                        03. {{ t('contact.formMessage') }}
                    </label>
                    <div class="relative">
                        <div
                            class="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-focus-within:border-[#43cb9c]">
                        </div>
                        <textarea v-model="message" rows="4" :placeholder="t('contact.formPlaceholder')" required
                            class="w-full bg-white/5 border border-white/10 rounded-lg p-5 text-white font-mono text-xs transition-all duration-300 focus:outline-none focus:border-[#43cb9c]/40 focus:bg-[#43cb9c]/5 resize-none placeholder:text-white/10"></textarea>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
                    <button type="submit" :disabled="sending"
                        class="group rounded-xl relative px-12 py-5 bg-white text-black font-black uppercase italic text-[11px] tracking-[0.3em] transition-all duration-300 hover:bg-[#43cb9c] hover:text-white hover:skew-x-[-10deg] disabled:opacity-50 overflow-hidden">
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000">
                        </div>
                        <span v-if="!sending" class="relative z-10 flex items-center gap-2">
                            {{ t('contact.buttonSend') }}
                            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                        <span v-else class="flex items-center gap-3">
                            <div class="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin">
                            </div>
                            ENCRYPTING_DATA...
                        </span>
                    </button>

                    <transition name="status-fade">
                        <div v-if="status.message" class="flex flex-col items-end gap-1 font-mono uppercase">
                            <div class="text-[8px] opacity-30 tracking-widest">TRANSMISSION_LOG:</div>
                            <div :class="status.type === 'success' ? 'text-[#43cb9c]' : 'text-red-500'"
                                class="text-[10px] font-bold flex items-center gap-2">
                                <span v-if="status.type === 'success'">[SUCCESS]</span>
                                <span v-else>[FAILURE]</span>
                                {{ status.message }}
                            </div>
                        </div>
                    </transition>
                </div>
            </form>
        </div>

        <div class="absolute top-10 left-10 w-24 h-24 border-t border-l border-white/5 pointer-events-none"></div>
        <div class="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-white/5 pointer-events-none"></div>
    </section>
</template>

<style scoped>
input:focus::placeholder,
textarea:focus::placeholder {
    opacity: 0;
}

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

.status-fade-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.status-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
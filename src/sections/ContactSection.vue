<script setup lang="ts">
import { ref } from 'vue';
import { useTranslations } from "../composables/useTranslations";
import { useContactForm } from '../composables/useContactForm';
import FullScreenLoader from '../components/FullScreenLoader.vue';

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

    <section id="contato" class="relative py-20 bg-black/80 backdrop-blur-md">
        <div class="max-w-3xl mx-auto px-6 text-center">

            <transition name="status-fade" mode="out-in">
                <div :key="contactReason">
                    <h2 v-if="contactReason === 'project'" class="text-4xl md:text-5xl font-extrabold mb-4 text-white">
                        {{ t('contact.titleProject') }}</h2>
                    <h2 v-else class="text-4xl md:text-5xl font-extrabold mb-4 text-white">{{ t('contact.titleBug') }}</h2>

                    <p v-if="contactReason === 'project'" class="text-gray-400 mb-12 max-w-xl mx-auto">{{ t('contact.subtitleProject') }}</p>
                    <p v-else class="text-gray-400 mb-12 max-w-xl mx-auto">{{ t('contact.subtitleBug') }}</p>
                </div>
            </transition>

            <div class="flex justify-center gap-4 mb-12">
                <button @click="setContactReason('project')" :class="[
                    'px-6 py-2 rounded-full font-semibold transition-all duration-300',
                    contactReason === 'project'
                        ? 'bg-[#43cb9c] text-black shadow-lg shadow-[#43cb9c]/20'
                        : 'border border-white/20 text-white/70 hover:bg-white/10 hover:border-white/40'
                ]">
                    {{ t('contact.buttonProject') }}
                </button>
                <button @click="setContactReason('bug')" :class="[
                    'px-6 py-2 rounded-full font-semibold transition-all duration-300',
                    contactReason === 'bug'
                        ? 'bg-[#43cb9c] text-black shadow-lg shadow-[#43cb9c]/20'
                        : 'border border-white/20 text-white/70 hover:bg-white/10 hover:border-white/40'
                ]">
                    {{ t('contact.buttonBug') }}
                </button>
            </div>

            <form @submit.prevent="handleSubmit" class="relative z-10 text-left space-y-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input v-model="name" type="text" :placeholder="t('contact.formName')"
                        class="w-full p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-[#43cb9c] focus:shadow-[0_0_15px_rgba(67,203,156,0.5)]" />
                    <input v-model="email" type="email" :placeholder="t('contact.formEmail')"
                        class="w-full p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-[#43cb9c] focus:shadow-[0_0_15px_rgba(67,203,156,0.5)]" />
                </div>

                <textarea v-model="message" rows="5"
                    :placeholder="contactReason === 'project' ? t('contact.formMessageProject') : t('contact.formMessageBug')"
                    class="w-full p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-[#43cb9c] focus:shadow-[0_0_15px_rgba(67,203,156,0.5)] resize-none"></textarea>

                <div class="flex items-center justify-end gap-6 pt-4">
                    <transition name="status-fade">
                        <div v-if="status.message"
                            :class="status.type === 'success' ? 'text-green-400' : 'text-red-400'"
                            class="flex items-center gap-2 text-sm font-semibold">
                            <svg v-if="status.type === 'success'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <svg v-if="status.type === 'error'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>{{ status.message }}</span>
                        </div>
                    </transition>
                    <button type="submit" :disabled="sending"
                        class="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-[#43cb9c] via-[#36a880] to-[#43cb9c] text-white font-bold shadow-lg transition-all duration-300 min-w-[200px] h-[52px] hover:shadow-xl hover:shadow-[#43cb9c]/30 disabled:opacity-70 disabled:cursor-not-allowed">
                        <span v-if="!sending">{{ t('contact.buttonSend') }}</span>
                        <span v-else class="flex items-center justify-center">
                            <img loading="lazy" src="@/assets/WHISKLINE_icon_main.png" alt="Enviando..."
                                class="w-6 h-6 mr-3 animate-spin-slow" />
                            {{ t('contact.buttonSending') }}
                        </span>
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>

<style scoped>

.status-fade-enter-active,
.status-fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.status-fade-enter-from,
.status-fade-leave-to {
    opacity: 0;
    transform: translateX(10px);
}

@keyframes spin-slow {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.animate-spin-slow {
    animation: spin-slow 2s linear infinite;
}
</style>
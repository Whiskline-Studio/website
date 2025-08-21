import { ref } from 'vue';
import emailjs from "emailjs-com";

// Novo tipo para um status mais detalhado
export type FormStatus = {
    type: 'success' | 'error' | null;
    message: string;
};

export function useContactForm() {
    const name = ref('');
    const email = ref('');
    const message = ref('');
    const sending = ref(false);
    // Agora o status é um objeto
    const status = ref<FormStatus>({ type: null, message: '' });

    const handleSubmit = async () => {
        status.value = { type: null, message: '' }; // Limpa o status anterior
        if (!name.value || !email.value || !message.value) {
            status.value = { type: 'error', message: 'Por favor, preencha todos os campos.' };
            return;
        }

        sending.value = true;

        try {
            await emailjs.send(
                'service_n3p2vvq',
                'template_x1kcwzf',
                { from_name: name.value, from_email: email.value, message: message.value },
                'V2CPCjRogcx-fl4X0'
            );

            status.value = { type: 'success', message: 'Mensagem enviada com sucesso!' };
            name.value = '';
            email.value = '';
            message.value = '';
        } catch (e) {
            status.value = { type: 'error', message: 'Erro ao enviar a mensagem. Tente novamente.' };
            console.error(e);
        } finally {
            sending.value = false;
        }
    };

    return { name, email, message, status, sending, handleSubmit };
}
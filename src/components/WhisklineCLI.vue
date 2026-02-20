<script setup lang="ts">
import { ref, watch, nextTick, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const command = ref('');
const logs = ref<string[]>(['SYSTEM_BOOT_COMPLETE', 'TYPE "HELP" FOR COMMANDS', 'TYPE "?" FOR SECRET_FILES']);
const isExpanded = ref(false);
const inputRef = ref<HTMLInputElement | null>(null);

// Histórico e Matrix
const history = ref<string[]>([]);
const historyIndex = ref(-1);
let matrixInterval: any = null;

// --- LÓGICA DO CANVAS MATRIX ---
const startMatrix = () => {
    if (matrixInterval) return;
    
    document.documentElement.classList.add('matrix-active');
    
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-canvas';
    document.body.prepend(canvas); 
    
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "WHISKLINEBLOOMRISE01ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿ".split("");
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) drops[x] = 1;

    const draw = () => {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00ff41"; 
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    };
    matrixInterval = setInterval(draw, 35);
};

const stopMatrix = () => {
    document.documentElement.classList.remove('matrix-active');
    if (matrixInterval) {
        clearInterval(matrixInterval);
        matrixInterval = null;
    }
    document.getElementById('matrix-canvas')?.remove();
};

const executeCommand = () => {
    const cmd = command.value.toLowerCase().trim();
    if (!cmd) return;

    logs.value.push(`> ${command.value}`);
    history.value.unshift(command.value);
    historyIndex.value = -1;

    switch (cmd) {
        case 'help':
            logs.value.push('NAV: HOME, ABOUT, PROJECTS, LABS, CLEAR, UNLOCK');
            break;
        case '?':
            logs.value.push('--- DISCOVERED_EXPLOITS ---');
            logs.value.push('DOOM: Emergency Protocol');
            logs.value.push('MATRIX: Digital Rain Canvas');
            logs.value.push('RECOVERY: System Reset');
            logs.value.push('UNLOCK: ???');
            break;
        case 'home': router.push('/'); break;
        case 'about': router.push('/sobre'); break;
        case 'labs': router.push('/labs'); break;
        case 'projects':
            router.push({ path: '/', hash: '#portfolio' });
            logs.value.push('ACCESSING_ARCHIVES...');
            break;
        case 'clear': logs.value = []; break;

        // --- EASTER EGGS ---
        case 'doom':
            stopMatrix();
            document.documentElement.className = 'doom-theme';
            logs.value.push('WARN: SENSORS_OVERLOADED');
            break;
        case 'matrix':
            document.documentElement.className = 'matrix-theme';
            startMatrix();
            logs.value.push('RUNNING: digital_rain.sh');
            break;
        case 'recovery':
            stopMatrix();
            document.documentElement.className = '';
            logs.value.push('SUCCESS: UI_STABILIZED');
            break;
        case 'unlock':
            logs.value.push('--- TALES OF BLOOMRISE: RAYY ---');
            logs.value.push('      /\\_/\\      ');
            logs.value.push('     ( o.o )     ');
            logs.value.push('      > ^ <      ');
            logs.value.push(' [ BLOOMRISE_DEV_BUILD ] ');
            logs.value.push('Secret: Rayy is not a cat!');
            break;
        case 'scan':
            logs.value.push('PERFORMING_SYSTEM_SCAN...');
            document.documentElement.classList.add('glitch-effect');
            setTimeout(() => {
                document.documentElement.classList.remove('glitch-effect');
                logs.value.push('SCAN_COMPLETE: 0_THREATS_FOUND');
            }, 1000);
            break;
        default:
            logs.value.push(`ERR: UNKNOWN_CMD: ${cmd}`);
    }
    command.value = '';
};

const handleHistory = (direction: 'up' | 'down') => {
    if (history.value.length === 0) return;
    if (direction === 'up') {
        if (historyIndex.value < history.value.length - 1) {
            historyIndex.value++;
            command.value = history.value[historyIndex.value];
        }
    } else {
        if (historyIndex.value > 0) {
            historyIndex.value--;
            command.value = history.value[historyIndex.value];
        } else {
            historyIndex.value = -1;
            command.value = '';
        }
    }
};

watch(isExpanded, async (newVal) => {
    if (newVal) {
        await nextTick();
        inputRef.value?.focus();
    }
});

onUnmounted(() => stopMatrix());
</script>

<template>
    <div class="fixed bottom-0 right-0 z-[1000] font-mono transition-all duration-500"
        :class="isExpanded ? 'w-full md:w-[450px] h-[350px]' : 'w-48 h-10'">

        <div @click="isExpanded = !isExpanded"
            class="cli-header bg-[#43cb9c] text-black px-4 py-2 flex justify-between items-center cursor-pointer select-none">
            <span class="text-[10px] font-black italic tracking-tighter">WHISKLINE_CORE_OS</span>
            <span class="text-xs font-bold">{{ isExpanded ? '[-]' : '[+]' }}</span>
        </div>

        <div v-if="isExpanded"
            class="bg-black/95 backdrop-blur-md border-l border-t border-[#43cb9c]/30 h-[calc(100%-40px)] p-4 overflow-hidden flex flex-col">
            <div class="flex-grow overflow-y-auto mb-2 text-[11px] text-[#43cb9c]/80 space-y-1 scrollbar-hide">
                <div v-for="(log, i) in logs" :key="i" class="break-all font-light whitespace-pre">
                    <span class="opacity-50 text-[9px]">[{{ new Date().toLocaleTimeString() }}]</span> {{ log }}
                </div>
            </div>

            <div class="flex gap-2 items-center border-t border-[#43cb9c]/20 pt-3">
                <span class="text-[#43cb9c] animate-pulse">></span>
                <input ref="inputRef" v-model="command" @keydown.up.prevent="handleHistory('up')"
                    @keydown.down.prevent="handleHistory('down')" @keyup.enter="executeCommand"
                    @blur="isExpanded && inputRef?.focus()" placeholder="ENTER COMMAND..."
                    class="bg-transparent border-none outline-none text-[#43cb9c] w-full text-[11px] placeholder:opacity-30" />
            </div>
        </div>
    </div>
</template>

<style>
/* --- TEMA DOOM --- */
:root.doom-theme { filter: sepia(1) saturate(8) hue-rotate(-50deg) contrast(1.2); }
:root.doom-theme .cli-header { background: #ff0000 !important; }
:root.doom-theme .text-[#43cb9c] { color: #ff0000 !important; }

/* --- TEMA MATRIX --- */
:root.matrix-theme { background-color: #00000000 !important; }
:root.matrix-theme .cli-header { background-color: #00ff41 !important; color: #000 !important; }
:root.matrix-theme .text-[#43cb9c] { color: #00ff41 !important; text-shadow: 0 0 5px #00ff41; }

.glitch-effect { animation: shake 0.2s infinite; filter: invert(1); }
@keyframes shake {
    0% { transform: translate(2px, 2px); }
    50% { transform: translate(-2px, -2px); }
    100% { transform: translate(0, 0); }
}

.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

.matrix-active body, 
.matrix-active main, 
.matrix-active section {
    background-color: transparent !important;
    background-image: none !important;
}

#matrix-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 11;
    opacity: 0.5;
    pointer-events: none;
    background: black;
}

/* Garante que o texto fique legível sobre a chuva de código */
.matrix-theme p, 
.matrix-theme h1, 
.matrix-theme h2, 
.matrix-theme h3 {
    text-shadow: 0 0 5px rgba(0, 255, 65, 0.5);
    color: #e0ffe0 !important;
}
</style>
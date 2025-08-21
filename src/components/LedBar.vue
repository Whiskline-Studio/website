<template>
    <div class="led-bar-container">
        <div class="led-bar"></div>
    </div>
</template>

<style>
.led-bar-container {
    display: flex;
    justify-content: center;
}

.led-bar {
    bottom: 0rem;
    width: 64rem;
    max-width: 90%;
    height: 0.25rem;
    background-color: #43cb9c;
    box-shadow: 0 0 10px #43cb9c, 0 0 20px #43cb9c;
    border-radius: 9999px;
    z-index: 10;
    animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {
    50% {
        opacity: 0.75;
        box-shadow: 0 0 12px #43cb9c, 0 0 24px #43cb9c;
    }
}
</style>
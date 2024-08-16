<script setup lang="ts">
    import { ref, onMounted, computed } from 'vue'
    import type { Character } from '../../types/character'

    const props = defineProps({
        character: {
            type: Object as () => Character,
            required: true
        }
    });

    const emits = defineEmits(['unselectCharacter']);

    const kiEmptyBalls = ref<HTMLElement | null>(null);
    const kiFilledBalls = ref<HTMLElement | null>(null);
    const maxKiEmptyBalls = ref<HTMLElement | null>(null);
    const maxKiFilledBalls = ref<HTMLElement | null>(null);
    
    function setupAndUpdateKiBar() {
        const ki = parseFloat(props.character.ki);
        const maxKiString = props.character.maxKi;
        const maxKi = parseFloat(maxKiString.split(' ')[0]) * 1e24;
        console.log(ki, maxKi);
        const kiBar = document.getElementById('current-ki');
        const dragonBallsContainer = document.getElementById('dragon-balls');
        const kiValue = document.getElementById('ki-value');
        const maxKiValue = document.getElementById('max-ki-value');

    // Limpiar el contenedor de esferas del dragón
        dragonBallsContainer.innerHTML = '';

    // Crear las 7 esferas del dragón
        for (let i = 0; i < 7; i++) {
            const ball = document.createElement('div');
            ball.className = 'dragon-ball';
            dragonBallsContainer.appendChild(ball);
        }

        const dragonBalls = document.querySelectorAll('.dragon-ball');

    // Actualizar la barra y las esferas
        const percentage = (ki / maxKi) * 100;
        kiBar.style.width = `${Math.min(percentage, 100)}%`;

        const activeBalls = Math.ceil((percentage / 100) * 7);
        dragonBalls.forEach((ball, index) => {
            if (index < activeBalls) {
                ball.classList.add('active');
            } else {
                ball.classList.remove('active');
            }
        });

        kiValue.textContent = ki.toLocaleString();
        maxKiValue.textContent = maxKi.toLocaleString();
    }

    onMounted(() => {
        setupAndUpdateKiBar();
    });
</script>
<template>
    <div class="character-card" @click.prevent="emits('unselectCharacter')">
        <div class="character-image">
            <img :src="character.image" :alt="character.name" />
        </div>
        <div class="character-info">
            <h3 class="character-name">{{ character.name }}</h3>
            <div id="ki-bar">
                <div id="current-ki"></div>
                <div id="dragon-balls"></div>
            </div>
            <div class="ki-values">
                <p>Ki actual: <span id="ki-value"></span></p>
                <p>Ki máximo: <span id="max-ki-value"></span></p>
            </div>
            <p class="character-description">{{ character.description }}</p>
        </div>
    </div>
</template>

<style scoped>
   .character-card {
        position: absolute;
        z-index: 99999;
        background: linear-gradient(135deg, rgba(255,165,0,0.8), rgba(255,69,0,0.8));
        border-radius: 15px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        overflow: hidden;
        width: 300px;
        transition: transform 0.3s ease;
        cursor:pointer;
    }

    .character-card:hover {
        transform: scale(1.05);
    }

    .character-image {
        width: 100%;
        height: 200px;
        overflow: hidden;
        display:flex;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
    }

    .character-image img {
        width: auto;
        height: 200px;
        object-fit: cover;
    }

    .character-info {
        padding: 20px;
    }

    .character-name {
        font-size: 24px;
        font-weight: bold;
        color: #fff;
        margin-bottom: 10px;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }

    #ki-bar {
        height: 20px;
        background-color: rgba(0,0,0,0.3);
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 10px;
    }

    #current-ki {
        height: 100%;
        background-color: #f39c12;
        transition: width 0.5s ease;
    }

    #dragon-balls {
        display: flex;
        justify-content: space-around;
        margin-top: 5px;
    }

    .dragon-ball {
        width: 15px;
        height: 15px;
        background-color: #e74c3c;
        border-radius: 50%;
        opacity: 0.3;
        transition: opacity 0.3s ease;
    }

    .dragon-ball.active {
        opacity: 1;
        box-shadow: 0 0 10px #e74c3c;
    }

    .ki-values {
        display: flex;
        justify-content: space-between;
        color: #fff;
        font-size: 14px;
        margin-bottom: 10px;
    }

    .character-description {
        color: #fff;
        font-size: 14px;
        line-height: 1.4;
        max-height: 80px;
        overflow-y: auto;
    }

    /* Estilos para la barra de desplazamiento en la descripción */
    .character-description::-webkit-scrollbar {
        width: 5px;
    }

    .character-description::-webkit-scrollbar-thumb {
        background-color: rgba(255,255,255,0.5);
        border-radius: 5px;
    }
</style>
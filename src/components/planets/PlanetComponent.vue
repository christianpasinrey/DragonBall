<script setup lang="ts">
    import { ref, onMounted, computed } from 'vue'
    import type { Planet } from '../../types/planet'

    const props = defineProps({
        planet: {
            type: Object as () => Planet,
            required: true
        }
    });

    const emits = defineEmits(['unselectCharacter']);

    const kiEmptyBalls = ref<HTMLElement | null>(null);
    const kiFilledBalls = ref<HTMLElement | null>(null);
    const maxKiEmptyBalls = ref<HTMLElement | null>(null);
    const maxKiFilledBalls = ref<HTMLElement | null>(null);
    

    onMounted(() => {
        
    });
</script>
<template>
    <div class="planet-card">
        <div class="planet-image">
            <img :src="planet.image" alt="planet.name">
        </div>
        <div class="planet-info">
            <h2 class="planet-name">{{ planet.name }}</h2>
            <p class="planet-description">{{ planet.description }}</p>
        </div>
    </div>
</template>

<style scoped>
   .planet-card {
        background: linear-gradient(135deg, rgba(255,165,0,0.8), rgba(255,69,0,0.8));
        border-radius: 15px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        overflow: hidden;
        width: 300px;
        transition: transform 0.3s ease;
        cursor:pointer;
        padding: 0;
    }

    .planet-card:hover {
        transform: scale(1.05);
    }

    .planet-image {
        width: 100%;
        height: 200px;
        overflow: hidden;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    .planet-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .planet-info {
        padding: 20px;
    }

    .planet-name {
        font-size: 24px;
        font-weight: bold;
        color: #fff;
        margin-bottom: 10px;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }

    .planet-description {
        color: #fff;
        font-size: 14px;
        line-height: 1.4;
        max-height: 80px;
        overflow-y: auto;
    }

    /* Estilos para la barra de desplazamiento en la descripción */
    .planet-description::-webkit-scrollbar {
        width: 5px;
    }

    .planet-description::-webkit-scrollbar-thumb {
        background-color: rgba(255,255,255,0.5);
        border-radius: 5px;
    }
</style>
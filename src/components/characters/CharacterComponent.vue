<script setup lang="ts">
    import { ref, onBeforeMount, onMounted, computed, onBeforeUnmount } from 'vue'
    import type { Character } from '../../types/character'
    import { DbApi } from '@/api/requests';

    const { getCharacter } = DbApi();
    const props = defineProps({
        character: {
            type: Object as () => Character,
            required: true
        }
    });

    const char = ref<Character | null>(null);
    const emits = defineEmits(['unselectCharacter']);
    const showTransformations = ref<boolean>(false);
    const charImages = ref<string[]>([]);
    const charNames = ref<string[]>([]);
    const charKis = ref<number[]>([]);
    const currentCharIndex = ref<number>(0);
    const currentImage = computed(() => charImages.value[currentCharIndex.value]);
    const currentName = computed(() => charNames.value[currentCharIndex.value]);
    const currentKi = computed(() => charKis.value[currentCharIndex.value]);

    const charHasTransformations = computed(() => char.value?.transformations && char.value.transformations.length ? true : false);

    const handleLoadCharacter = async() => {
        const response = await getCharacter(props.character.id);
        char.value = response;
        charImages.value = [];
        charNames.value = [];
        charImages.value.push(response.image);
        charNames.value.push(response.name);
        charKis.value.push(response.ki);
        if (charHasTransformations.value) {
            response.transformations.forEach((transformation:any) => {
                charImages.value.push(transformation.image);
                charNames.value.push(transformation.name);
                charKis.value.push(transformation.ki);
            });
        }
    }

    const prevTransformation = () => {
        if (currentCharIndex.value > 0) {
            currentCharIndex.value--;
        }
    }

    const nextTransformation = () => {
        if (currentCharIndex.value < charImages.value.length - 1) {
            currentCharIndex.value++;
        }
    }

    const handleClickOutside = (e:MouseEvent) => {
        e.stopPropagation();
        if (!document.querySelector('.character-card')?.contains(e.target as Node)) {
           document.getElementById('close-btn')?.click();
        }else{
            e.stopPropagation();
        }
    }

    onBeforeMount(async() => {
        await handleLoadCharacter();
    });
</script>
<template>
    <div class="character-card" v-if="!showTransformations">
        <button @click.prevent="emits('unselectCharacter')" class="absolute top-4 left-4 text-lg" id="close-btn">
            &times;
        </button>
        <button class="absolute flex items-center content-center align-middle text-center top-[45%] left-4 rounded-full bg-[rgb(255,255,255,0.5)] h-fit w-fit p-1.5" 
            @click.prevent="prevTransformation" 
            v-if="currentCharIndex != 0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-left w-3 h-3" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            </svg>
        </button>
        <button class="absolute flex items-center content-center align-middle text-center top-[45%] right-4 rounded-full bg-[rgb(255,255,255,0.5)] h-fit w-fit p-1.5" 
            @click.prevent="nextTransformation" 
            v-if="currentCharIndex != charImages.length - 1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-right w-3 h-3" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
        </button>
        <div class="character-image">
            <img ref="charImage" :src="currentImage" :alt="char?.name" />
        </div>
        <div class="character-info">
            <h3 class="character-name">{{ currentName.replace('Ultra Instinc','Miggate no-goku`i') }}</h3>
            <div class="ki-values flex flex-col">
                <p>Ki actual: <span id="ki-value">{{ currentKi }}</span></p>
                <p>Ki máximo: <span id="max-ki-value">{{ char?.maxKi }}</span></p>
            </div>
            <p class="character-description">{{ char?.description }}</p>
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
        width: 350px;
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
<script setup lang="ts">
    import { ref, onMounted, computed } from 'vue'
    import type { Character } from '../../types/character'
    import { DbApi } from '../../api/requests'

    const { getCharacters } = DbApi();

    const elsForChunk = ref(4);
    const characters = ref<Character[]>([]);
    const links = ref<string[]>([]);

    const handleResize = () => {
        if(window.innerWidth < 1024){
            elsForChunk.value = 2;
        }else{
            elsForChunk.value = 4;
        }
    }

    onMounted(async () => {
        const response = await getCharacters();
        characters.value = response.data.items;
        
        handleResize();
        window.addEventListener('resize', () => {
            handleResize();
        });
    });
</script>
<template>
    <div class="flex flex-col justify-center items-center content-center" v-if="characters.length">
        <div class="flex flex-wrap list-none justify-start items-center content-center">
            <div v-for="character in characters" :key="character?.id" class="flex w-3/12 px-12">
                <img class="character-img" :src="character?.image" :alt="character?.name" />
                <!-- <router-link :to="{ name: 'Character', params: { id: character.id } }">
                    {{ character.name }}
                </router-link> -->
            </div>
        </div>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>
<style scoped>
    .characters {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .character-img {
        width: auto;
        height: 300px;
        object-fit: cover;
        transition: all 0.3s ease-in-out;
    }
    
    .character-img:hover {
        transform: scale(1.1);
        filter: drop-shadow(1px 1px 5px #000000);
    }

    @media (width <= 1024px) {
        .character-img {
            width: auto;
            height: 100%;
        }
    }
</style>
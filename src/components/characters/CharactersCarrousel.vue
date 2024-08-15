<script setup lang="ts">
    import { ref, onMounted, computed } from 'vue'
    import type { Character } from '../../types/character'
    import { DbApi } from '../../api/requests'

    const { getCharacters } = DbApi();

    const elsForChunk = ref(4);
    const characters = ref<Character[]>([]);
    const selectedChunk = ref<number|null>(null);

    const chunks = computed(() => {
        return characters.value.reduce((acc, _, i) => {
            if (i % elsForChunk.value === 0) {
                acc.push(characters.value.slice(i, i + elsForChunk.value));
            }
            return acc;
        }, [] as Character[][]);
    });

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
        
        if(characters.value.length > 0){
            selectedChunk.value = 0;
        }

        handleResize();
        window.addEventListener('resize', () => {
            handleResize();
        });
    });
</script>
<template>
    <div class="flex justify-center items-center content-center" v-if="selectedChunk != null">
        <ul class="flex flex-wrap list-none justify-center items-center content-center" 
            v-for="(chunk,index) in chunks" :key="`chunk${index}`">
            <template v-if="selectedChunk === index">
                <li v-for="character in chunk" :key="character?.id" class="flex w-3/12 px-auto">
                    <img class="character-img" :src="character?.image" :alt="character?.name" />
                    <!-- <router-link :to="{ name: 'Character', params: { id: character.id } }">
                        {{ character.name }}
                    </router-link> -->
                </li>
            </template>
        </ul>
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
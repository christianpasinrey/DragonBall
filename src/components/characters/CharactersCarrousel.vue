<script setup lang="ts">
    import { ref, onMounted, computed } from 'vue'
    import type { Character } from '../../types/character'
    import { DbApi } from '../../api/requests'

    const { getCharacters } = DbApi();

    const elsForChunk = 4;
    const characters = ref<Character[]>([]);
    const selectedChunk = ref<number|null>(null);

    const chunks = computed(() => {
        return characters.value.reduce((acc, _, i) => {
            if (i % elsForChunk === 0) {
                acc.push(characters.value.slice(i, i + elsForChunk));
            }
            return acc;
        }, [] as Character[][]);
    });

    onMounted(async () => {
        const response = await getCharacters();
        characters.value = response.data.items;
        console.log(characters.value);
        if(characters.value.length > 0){
            selectedChunk.value = 0;
        }
    });
</script>
<template>
    <div class="flex justify-center items-center content-center" v-if="selectedChunk != null">
        <ul class="flex flex-wrap list-none" 
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
        width: 100px;
        height: auto;
        object-fit: cover;
        border-radius: 50%;
    }
    
    .character-img:hover {
        transform: scale(1.1);
        filter: drop-shadow(1px 1px 5px #000000);
    }
</style>
<script setup lang="ts">
    import { ref, onMounted, computed, defineAsyncComponent } from 'vue'
    import type { Character } from '../../types/character'
    import { DbApi } from '../../api/requests'

    const CharacterComponent = defineAsyncComponent(() => import('./CharacterComponent.vue'));
    const { getCharacters } = DbApi();

    const timeout = ref<any>(null);
    const limit = ref<number>(1);
    const searchstring = ref<string>('');
    const characters = ref<Character[]>([]);
    const chunkedCharacters = ref<Character[][]>([]);
    const selectedCharacter = ref<any>(null);
    const currentCharIndex = ref<number>(0);
    const links = ref<any>([
        {
            link: '',
            key: 'previous'
        },
        {
            link: '',
            key: 'next'
        }
    ]);
    
    const moveDirection = ref<string>('next');
    const meta = ref<any>({
        currentPage: 1,
        lastPage: 1
    });

    const setLimit = () => {
        if(window.innerWidth < 480){
            limit.value = 1;
        }else if(window.innerWidth < 1024){
            limit.value = 2;
        }else{
            limit.value = 4;
        }
    }

    const handleResize = () => {
        setLimit();
        clearTimeout(timeout.value);
        timeout.value = setTimeout(() => {
            fetchCharacters();
        }, 600);
    }

    const handleChunks = (data:string[]) => {
        let chunked = [];
        let i,j;
        for (i=0,j=data.length; i<j; i+=limit.value) {
            chunked.push(data.slice(i,i+limit.value));
        }
        return chunked;
    }

    const fetchCharacters = async () => {
        let params = new URLSearchParams();
        
        if(searchstring.value !== ''){
            params.append('name', searchstring.value);
        }else{
            params.append('limit', limit.value.toString());
            params.append('page', meta.value.currentPage);
        }
        const { data } = await getCharacters(params);
        currentCharIndex.value = 0;
        if(searchstring.value === ''){         
            characters.value = data.items;
            links.value.find((link: { key: string; }) => link.key === 'next').link = data.links.next;
            links.value.find((link: { key: string; }) => link.key === 'previous').link = data.links.previous;
            meta.value = data.meta;
            console.log(links.value);
        }else{
            chunkedCharacters.value = handleChunks(data);
            characters.value = chunkedCharacters.value[0];
            currentIndex.value = 0;
            console.log(characters.value);
        }
    }

    const changePage = async (key: string) => {
        switch(key){
            case 'next':
                if(searchstring.value !== ''){
                    if(currentCharIndex.value < chunkedCharacters.value.length - 1){
                        currentCharIndex.value++;
                        characters.value = chunkedCharacters.value[currentCharIndex.value];
                    }
                }else{
                    meta.value.currentPage++;
                    moveDirection.value = 'next';
                }
                break;
            case 'previous':
                if(searchstring.value !== ''){
                    if(currentCharIndex.value > 0){
                        currentCharIndex.value--;
                        characters.value = chunkedCharacters.value[currentCharIndex.value];
                    }
                }else{
                    meta.value.currentPage--;
                    moveDirection.value = 'previous';
                }
                break;
        }
    }

    const handlePage = async (key: string) => {
        await changePage(key);
        if(searchstring.value !== ''){
            return;
        }
        characters.value = [];
        setTimeout(() => {
            fetchCharacters();
        }, 600);
    }

    const beforeEnter = (el: HTMLElement) => {
        let direction = moveDirection.value === 'next' ? '100%' : '-100%';
        el.style.transform = `translateX(${direction})`;
    };

    const enter = (el: HTMLElement, done: () => void) => {
        el.offsetHeight; // trigger reflow
        el.style.transition = 'transform 0.8s ease-in-out';
        el.style.transform = 'translateX(0)';
        done();
    };

    const beforeLeave = (el: HTMLElement) => {
        el.style.transition = 'transform 0.8s ease-in-out';
        let direction = moveDirection.value === 'next' ? '-100%' : '100%';
        el.style.transform = `translateX(${direction})`;
    };

    const handleSelectCharacter = (character: Character | null) => {
        selectedCharacter.value = character;   
    }

    const handleSearchCharacter = async () => {
        clearTimeout(timeout.value);
        timeout.value = setTimeout(() => {
            fetchCharacters();
        }, 600);
    }

    onMounted(async () => {
        handleResize();
        window.addEventListener('resize', () => {
            handleResize();
        });
    });
</script>
<template>
    <div class="flex flex-col justify-center items-center content-center w-full gap-4">
        <input type="search" placeholder="Buscar personaje" class="w-full p-2 rounded-md" v-model="searchstring" @input.prevent="handleSearchCharacter"/>
        <transition
            name="character"
            @before-enter="beforeEnter"
            @enter="enter"
            @before-leave="beforeLeave"
        >
            <div v-if="characters.length" class="flex flex-wrap list-none justify-start items-center content-center relative">
                <div v-for="character in characters" :key="character?.id"
                    class="flex px-12"
                    :class="{
                        'xs:w-full sm:w-1/2 lg:w-3/12 ': characters.length !== 1,
                        'w-full': characters.length === 1,
                    }"
                    >
                    <img class="character-img cursor-pointer" @click.prevent="handleSelectCharacter(character)" :src="character?.image" :alt="character?.name" />
                </div>
            </div>
        </transition>

        <CharacterComponent 
            v-if="selectedCharacter" 
            :character="selectedCharacter" 
            @unselectCharacter="handleSelectCharacter(null)"
            />

        <div class="absolute w-screen flex justify-between top-1/2 px-4 md:px-16" v-if="links.some(l=>l.link != '')">
            <button
                v-for="(link, index) in links"
                :key="`link-${index}`"
                :disabled="link.link === ''"
                @click="handlePage(link.key)"
                class="bg-[rgb(255,255,255,0.5)] p-2 rounded-full"
                >
                <svg
                    v-if="link.key === 'previous'"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-double-left"
                    viewBox="0 0 16 16"
                >
                    <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                    <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
                <svg v-if="link.key === 'next'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                    <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </button>
        </div>
    </div>
</template>
<style scoped>
    .character-img {
        width: auto;
        height: 300px;
        object-fit: contain;
        transition: all 0.3s ease-in-out;
    }

    .character-img:hover {
        transform: scale(1.1);
        filter: drop-shadow(1px 1px 5px #000000);
    }

    @media (max-width: 1024px) {
        .character-img {
            width: auto;
            height: 300px;
        }
    }
</style>
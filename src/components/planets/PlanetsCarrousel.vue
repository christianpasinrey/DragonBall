<script setup lang="ts">
    import { ref, onMounted, computed, defineAsyncComponent } from 'vue'
    import type { Planet } from '../../types/planet'
    import { DbApi } from '../../api/requests'

    const PlanetComponent = defineAsyncComponent(() => import('./PlanetComponent.vue'));
    const { getPlanets } = DbApi();

    const timeout = ref<any>(null);
    const limit = ref<number>(4);
    const planets = ref<Planet[]>([]);
    const selectedPlanet = ref<Planet | null>(null);
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

    const handleResize = () => {
        if(window.innerWidth < 600){
            limit.value = 1;
        }else if(window.innerWidth < 1024){
            limit.value = 2;
        }else if(window.innerWidth < 1440){
            limit.value = 3;
        }else{
            limit.value = 4;
        }
        clearTimeout(timeout.value);
        timeout.value = setTimeout(() => {
            fetchPlanets();
        }, 600);
    }

    const fetchPlanets = async () => {
        let params = new URLSearchParams();
        params.append('limit', limit.value.toString());
        params.append('page', meta.value.currentPage);
        const { data } = await getPlanets(params);
        planets.value = data.items;
        //filter links to only have next and previous
        links.value.find((link: { key: string; }) => link.key === 'next').link = data.links.next;
        links.value.find((link: { key: string; }) => link.key === 'previous').link = data.links.previous;
        meta.value = data.meta;
        console.log(links.value);
    }

    const changePage = async (key: string) => {
        switch(key){
            case 'next':
                meta.value.currentPage++;
                moveDirection.value = 'next';
                break;
            case 'previous':
                meta.value.currentPage--;
                moveDirection.value = 'previous';
                break;
        }
    }

    const handlePage = async (key: string) => {
        await changePage(key);
        planets.value = [];
        setTimeout(() => {
            fetchPlanets();
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

    const handleSelectPlanet = (character: Character | null) => {
        //if click if outside the selected character, close it
        if(selectedPlanet.value === character){
            selectedPlanet.value = null;
        }else{
            selectedPlanet.value = character;
        }
    }

    onMounted(async () => {
        handleResize();
        window.addEventListener('resize', () => {
            handleResize();
        });
    });
</script>
<template>
    <div class="flex flex-col justify-center items-center content-center">
        <transition
        name="character"
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        >
            <div v-if="planets.length" class="flex flex-wrap list-none justify-start items-center content-center relative">
                <div v-for="planet in planets" :key="planet?.id"
                    class="flex xs:w-full sm:w-1/2 lg:w-3/12 px-12">
                    <PlanetComponent 
                        :planet="planet"
                        />
                </div>
            </div>
        </transition>

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
    .planet-img {
        width: auto;
        height: 300px;
        object-fit: contain;
        transition: all 0.3s ease-in-out;
    }

    .planet-img:hover {
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
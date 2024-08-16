<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useGlobalStore } from '@/stores/global';

const global = useGlobalStore();

</script>
<template>
    <header class="flex w-full items-center content-center align-middle px-6 py-3 sticky top-0 left-0 right-0 z-[999]">
        <div class="logo-wrapper">
            <img 
                alt="Dragon ball logo" 
                class="db-logo"
                src="@/assets/img/db-logo.png" />
        </div>

        <nav class="hidden md:flex ml-auto w-fit gap-6">
            <RouterLink class="dark:text-white" to="/">Home</RouterLink>
            <RouterLink class="dark:text-white" to="/characters">Characters</RouterLink>
            <RouterLink class="dark:text-white" to="/planets">Planets</RouterLink>
            <RouterLink class="dark:text-white" to="/about">About</RouterLink>
        </nav>

        <button class="md:hidden" @click.prevent="global.toggleMenu">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>

        <nav v-if="global.showingMenu" class="md:hidden flex flex-col justify-evenly gap-2 text-center w-screen h-screen bg-[rgb(255,255,255,0.7)] absolute inset-0">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/characters">Characters</RouterLink>
            <RouterLink to="/planets">Planets</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <button @click.prevent="global.toggleMenu">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </nav>
    </header>
</template>
<style scoped>
 .db-logo {
    filter: drop-shadow(1px 1px 5px #000000); /* Sombra negra, con desplazamiento y desenfoque mayores */
    height: 40px;
    width: auto;
  }

  header{
    background: linear-gradient(135deg, rgba(255,165,0,0.8), rgba(255,69,0,0.8));
    opacity: 0.8;
  }
</style>
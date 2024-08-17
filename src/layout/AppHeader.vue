<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useGlobalStore } from '@/stores/global';

const global = useGlobalStore();

</script>
<template>
    <header class="flex w-full items-center content-center align-middle justify-between px-6 py-3 sticky top-0 left-0 right-0 z-[999] bg-slate-900">
        <nav class="hidden md:flex mr-auto w-fit gap-6">
            <RouterLink class="text-white text-3xl font-thin font-saiyan tracking-wider" to="/">Inicio</RouterLink>
            <RouterLink class="text-white text-3xl font-thin font-saiyan tracking-wider" to="/characters">Personajes</RouterLink>
            <RouterLink class="text-white text-3xl font-thin font-saiyan tracking-wider" to="/planets">Planetas</RouterLink>
            <!-- <RouterLink class="text-white text-md uppercase font-semibold" to="/about"></RouterLink> -->
        </nav>

        <div class="logo-wrapper">
            <img 
                alt="Dragon ball logo" 
                class="db-logo"
                src="@/assets/img/db-logo.png" />
        </div>

       

        <button class="md:hidden" @click.prevent="global.toggleMenu">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>
        
        <transition name="fade">
          <nav v-if="global.showingMenu" class="md:hidden absolute inset-0 flex flex-col justify-evenly gap-2 text-center w-screen h-screen bg-[rgb(255,255,255,0.7)] transition-all ease-in-out duration-300">
              <RouterLink class="text-lg uppercase font-semibold" to="/">inicio</RouterLink>
              <RouterLink class="text-lg uppercase font-semibold" to="/characters">personajes</RouterLink>
              <RouterLink class="text-lg uppercase font-semibold" to="/planets">planetas</RouterLink>
              <RouterLink class="text-lg uppercase font-semibold" to="/about">About</RouterLink>
              <button @click.prevent="global.toggleMenu" class="text-black absolute top-6 right-6">
                  <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
              </button>
          </nav>
        </transition>
        
    </header>
</template>
<style scoped>
 .db-logo {
    filter: drop-shadow(1px 1px 5px #000000); /* Sombra negra, con desplazamiento y desenfoque mayores */
    height: 40px;
    width: auto;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-to, .fade-leave {
    opacity: 1;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
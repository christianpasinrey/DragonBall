<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class=" flex w-full items-center content-center align-middle px-6 py-3 sticky top-0 left-0 right-0 z-[999]">
    <div class="logo-wrapper">
      <img 
        alt="Dragon ball wallpaper" 
        class="db-logo"
        src="@/assets/img/db-logo.png" />
    </div>
    <nav class="flex ml-auto w-fit gap-6">
      <RouterLink class="dark:text-white" to="/">Home</RouterLink>
      <RouterLink class="dark:text-white" to="/characters">Characters</RouterLink>
      <RouterLink class="dark:text-white" to="/planets">Planets</RouterLink>
      <RouterLink class="dark:text-white" to="/about">About</RouterLink>
    </nav>   
  </header>
  <div class="absolute inset-0 z-[-1] overflow-hidden">
      <img
        class="w-full h-full object-cover opacity-40"
        src="@/assets/img/db-goku-transformations-2.webp"
        alt="Dragon Ball background"
      />
  </div>
  <div class="flex flex-col max-h-[90dvh] overflow-y-auto">
    <RouterView />
  </div>
  <footer class="absolute bottom-0 left-0 right-0">
    <p class="text-center flex justify-center items-center content-center align-middle text-white bg-black py-4">
      <a href="https://github.com/christianpasinrey/DragonBall" target="_blank" class="fixed bottom-4 right-4 hidden sm:flex">
        <img src="@/assets/img/github-mark.svg" alt="Github icon" class="w-12 h-12" />
      </a>Agradecimientos al servicio
      <a href="https://web.dragonball-api.com/" class="hover:scale-110 transition-all ease-in-out duration-300">
        <img src="@/assets/img/logo_dragonballapi.webp" height="98" width="98"> 
      </a>
      de &nbsp;
      <a class="text-orange-500 hover:text-yellow-600" href="https://www.linkedin.com/in/antonio-alvarez-lopez/">Antonio Alvarez Lopez</a></p>
  </footer>
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

  footer {
    background: linear-gradient(135deg, rgba(255,165,0,0.8), rgba(255,69,0,0.8));
  }
</style>

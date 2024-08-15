<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-white dark:bg-slate-700 flex w-full items-center content-center align-middle px-6 py-3 sticky top-0 left-0 right-0">
    <div class="logo-wrapper">
      <img 
        alt="Dragon ball wallpaper" 
        class="db-logo"
        src="@/assets/img/db-logo.png" />
    </div>
    <nav class="flex ml-auto w-fit gap-6">
      <RouterLink class="dark:text-white" to="/">Home</RouterLink>
      <RouterLink class="dark:text-white" to="/about">About</RouterLink>
    </nav>   
  </header>

  <RouterView />
</template>

<style scoped>
  .db-logo {
    filter: drop-shadow(1px 1px 5px #000000); /* Sombra negra, con desplazamiento y desenfoque mayores */
    height: 40px;
    width: auto;
  }
</style>

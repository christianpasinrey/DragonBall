<script setup lang="ts">
  import { defineAsyncComponent } from 'vue';


  const CharactersCarrousel = defineAsyncComponent(() => import('@/components/characters/CharactersCarrousel.vue'));
</script>

<template>
  <main class="relative overflow-hidden flex flex-col justify-center min-h-[93dvh] items-center content-center align-middle bg-transparent">
    <div class="absolute inset-0 z-[-1] overflow-hidden">
      <img
        class="w-full h-full object-cover opacity-40"
        src="@/assets/img/db-goku-transformations-2.webp"
        alt="Dragon Ball background"
      />
    </div>
  
    <div class="flex flex-col items-center content-center align-middle gap-6">
      <h1 class="text-4xl font-bold text-gray-800">Welcome to the Dragon Ball Universe</h1>
      <p class="text-lg text-gray-800">This is a simple Vue 3 project with Vite and Tailwind CSS</p>
    </div>
    <CharactersCarrousel />
  </main>
</template>
<style scoped>
  
</style>
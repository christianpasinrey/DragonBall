<script setup lang="ts">
  import { defineAsyncComponent } from 'vue';


  const CharactersCarrousel = defineAsyncComponent(() => import('@/components/characters/CharactersCarrousel.vue'));
</script>

<template>
  <main class="relative overflow-hidden flex flex-col h-full justify-center items-center content-center align-middle bg-transparent px-4 py-36 md:p-36">
   <!--  <div class="hero-text flex flex-col items-center content-center align-middle gap-6 p-4 rounded-md text-clip justify-center text-center">
      <h1 class="bg-db-gradient text-4xl font-bold text-transparent bg-clip-text bg-clip-text-fix">Dragon Ball Wiki</h1>
      <p class="text-lg">Descubre todo sobre tus personajes favoritos de Dragon Ball</p>
    </div> -->
    <CharactersCarrousel />
  </main>
</template>
<style scoped>
  .hero-text {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }

</style>
<script setup lang="ts">
  import { defineAsyncComponent } from 'vue';


  const CharactersCarrousel = defineAsyncComponent(() => import('@/components/characters/CharactersCarrousel.vue'));
</script>

<template>
  <main class="relative overflow-hidden flex flex-col justify-center min-h-[93dvh] items-center content-center align-middle bg-transparent p-4 md:p-16">
    <div class="absolute inset-0 z-[-1] overflow-hidden">
      <img
        class="w-full h-full object-cover opacity-40"
        src="@/assets/img/db-goku-transformations-2.webp"
        alt="Dragon Ball background"
      />
    </div>
  
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
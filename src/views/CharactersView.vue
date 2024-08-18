<script setup lang="ts">
  import { defineAsyncComponent } from 'vue';


  const CharactersCarrousel = defineAsyncComponent(() => import('@/components/characters/CharactersCarrousel.vue'));
</script>

<template>
  <main class="relative overflow-hidden flex flex-wrap h-full justify-center items-center content-center align-middle bg-transparent px-4 py-24 md:p-24">
    <div class="flex flex-col cursor-default items-center content-center align-middle gap-6 p-4 my-4 rounded-md text-clip justify-center text-center bg-slate-50 border dark:bg-slate-900">
      <h1 class="text-4xl text-slate-700 dark:text-slate-200 font-bold">Dragon Ball - Personajes</h1>
      <p class="text-lg dark:text-slate-200 text-slate-700">Descubre todo sobre tus personajes favoritos de Dragon Ball</p>
    </div>
    <div class="flex flex-col w-full md:w-8/12">
      <CharactersCarrousel />
    </div>
  </main>
</template>
<style scoped>

</style>
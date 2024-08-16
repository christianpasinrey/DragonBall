<script setup lang="ts">
    import { defineAsyncComponent } from 'vue';
    const GithubIcon = defineAsyncComponent(() => import('@/components/icons/GithubIcon.vue'));
</script>
<template>
     <footer class="absolute bottom-0 left-0 right-0">
        <p class="text-center flex justify-center items-center content-center align-middle text-white bg-black py-4">
        <a href="https://github.com/christianpasinrey/DragonBall" target="_blank" class="fixed bottom-5 right-5 hidden sm:flex text-white hover:text-orange-400 transition-all ease-in-out duration-300">
            <GithubIcon/>
        </a>Agradecimientos al servicio
        <a href="https://web.dragonball-api.com/" class="hover:scale-110 transition-all ease-in-out duration-300">
            <img src="@/assets/img/logo_dragonballapi.webp" height="98" width="98" alt="DB API logo"> 
        </a>
        de &nbsp;
        <a class="text-orange-500 hover:text-yellow-600" href="https://www.linkedin.com/in/antonio-alvarez-lopez/">Antonio Alvarez Lopez</a></p>
    </footer>
</template>
<style scoped>
 footer {
    background: linear-gradient(135deg, rgba(255,165,0,0.8), rgba(255,69,0,0.8));
  }
</style>
<script setup lang="ts">
    import { defineAsyncComponent } from 'vue';
    const GithubIcon = defineAsyncComponent(() => import('@/components/icons/GithubIcon.vue'));
</script>
<template>
     <footer class="absolute bottom-0 left-0 right-0 bg-db-orange dark:bg-slate-800 py-2">
        <div class="relative flex w-full justify-center items-center content-center align-middle">
            <a href="https://github.com/christianpasinrey/DragonBall" target="_blank" class="fixed bottom-4 right-5 flex text-white hover:text-orange-400 transition-all ease-in-out duration-300">
                <GithubIcon/>
            </a>
            <p class="flex text-center justify-center items-center content-center align-middle text-white md:text-md text-xs w-fit">
                <span class="hidden sm:block">Agradecimientos al servicio</span>
                <a href="https://web.dragonball-api.com/" class="hover:scale-110 transition-all ease-in-out duration-300">
                    <img src="@/assets/img/logo_dragonballapi.webp" height="98" width="98" alt="DB API logo"> 
                </a>
                <span class="hidden sm:block">de &nbsp;
                <a class="dark:text-orange-500 dark:hover:text-yellow-600 text-red-800 hover:text-blue-800" href="https://www.linkedin.com/in/antonio-alvarez-lopez/">Antonio Alvarez Lopez</a></span>
            </p>
        </div>
    </footer>
</template>
<style scoped>

</style>
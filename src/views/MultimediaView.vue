<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    
    const images = [
        'src/assets/img/db-goku-ball.webp',
        'src/assets/img/db-goku-transformations-2.webp',
        'src/assets/img/db-goku-transformations.webp',
        'src/assets/img/db-goku-wp.webp'
    ];
    const selectedImage = ref<string>('');
    const handleMakeImagesDownloadable = () => {
        const images = document.querySelectorAll('img');
        images.forEach((img) => {
            img.addEventListener('click', () => {
                const a = document.createElement('a');
                a.href = img.src;
                a.download = img.alt;
                a.click();
            });
        });
    }

    onMounted(() => {
        document.title = 'Multimedia - Dragon Ball Wiki - Vue 3 Playground Project';
        handleMakeImagesDownloadable();
    });
</script>
<template>
    <div class="relative overflow-hidden flex flex-wrap h-full w-full gap-4 justify-start items-center content-center align-middle overflow-y-auto bg-transparent py-36 md:px-24">
        <div class="img-wrapper" 
            v-for="image in images" 
            :key="image" 
            @mouseenter.prevent="selectedImage = image" 
            @mouseleave.prevent="selectedImage = ''">
            <img :src="image" alt="Dragon Ball multimedia"/>
            <div v-if="selectedImage === image" class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col text-center justify-center items-center">
                <span class="text-white text-2xl font-bold flex flex-col text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                    </svg>
                </span>
                <span class="text-white text-sm font-semibold">Descargar</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
 img{
    @apply w-full h-full object-cover rounded-md cursor-pointer hover:shadow-md hover:scale-105 transition-all ease-in-out duration-300;
 }
 .img-wrapper{
    @apply relative cursor-pointer flex flex-col w-[300px] h-[300px] rounded-md overflow-hidden hover:shadow-md hover:scale-105 transition-all ease-in-out duration-300
 }
</style>
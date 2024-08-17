<script setup lang="ts">
    import { onMounted } from 'vue';

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
        <div class="img-wrapper">
            <img src="@/assets/img/db-goku-ball.webp" alt="Dragon Ball background"/>
        </div>
        <div class="img-wrapper">
            <img src="@/assets/img/db-goku-transformations-2.webp" alt="Dragon Ball background" />
        </div>
        <div class="img-wrapper">
            <img src="@/assets/img/db-goku-transformations.webp" alt="Dragon Ball background"/>
        </div>
        <div class="img-wrapper">
            <img src="@/assets/img/db-goku-wp.webp" alt="Dragon Ball background"/>
        </div>
    </div>
</template>
<style scoped>
 img{
    @apply w-full h-full object-cover rounded-md cursor-pointer hover:shadow-md hover:scale-105 transition-all ease-in-out duration-300;
 }
 .img-wrapper{
    @apply flex flex-col px-8 w-[300px] h-[300px] rounded-md overflow-hidden hover:shadow-md hover:scale-105 transition-all ease-in-out duration-300
 }
</style>
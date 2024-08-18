<script setup lang="ts">
    import { RouterView } from 'vue-router';
</script>
<template>
     <div class="flex flex-col max-h-[90dvh] overflow-y-auto">
        <RouterView />
    </div>
</template>
<style scoped>
    div{
        background-color: rgba(255, 255, 255, 0.7);
    }
    html.dark div{
        background-color: rgba(0, 0, 0, 0.8);
    }
</style>
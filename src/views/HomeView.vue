<script setup lang="ts">
 
</script>

<template>
  <main class="relative overflow-hidden grid h-full w-full place-items-center bg-transparent py-36 md:py-36 px-12 md:px-24">
    <!-- <div class="flex flex-col w-full md:w-1/3 px-8">
      <div class="box">
        Hola
      </div>
    </div>
    <div class="flex flex-col w-full md:w-2/3 px-8">
      <div class="box">
        Que tal
      </div>
    </div> -->
    <div class="flex flex-wrap w-full md:w-[600px] h-fit border">
      <div class="flex flex-col w-full md:w-1/2 items-center content-center align-middle justify-center p-4 bg-slate-50">
        <h1 class="text-3xl justify-center text-center font-bold">Dragon Ball Fan Page <h3 class="text-xl font-semibold">Playground Project</h3></h1>
        <div class="img-wrapper">
          <img width="150" height="150" src="@/assets/img/vue.png" alt="Js fetch logo" class="logo"/>
        </div>
      </div>
      <div class="flex flex-col w-full md:w-1/2 box items-center content-center align-middle justify-center p-4 rounded-r-md rounded-l-none">
        <p class="font-saiyan tracking-wider text-[54px] text-yellow-400 welcome-text">Bienvenido!</p>
      </div>
    </div>
  </main>
</template>
<style scoped>
.logo{
  filter: drop-shadow(1px 1px 10px #000000); /* Sombra negra, con desplazamiento y desenfoque mayores */
}
.welcome-text{
  filter: drop-shadow(1px 1px 10px #000000);
}
</style>
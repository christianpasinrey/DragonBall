<script setup lang="ts">
  import AppHeader from './layout/AppHeader.vue'
  import AppBody from './layout/AppBody.vue'
  import AppFooter from './layout/AppFooter.vue'
  import AppBackground from './layout/AppBackground.vue'
</script>

<template>
  <!-- <AppBackground/> -->
  <AppHeader/>
  <AppBody/>
  <AppFooter/>
</template>
<style>
 ::-webkit-scrollbar {
  width: 5px;
}

/* Estilo del thumb (la parte móvil) del scrollbar */
::-webkit-scrollbar-thumb {
  background-color: #f2842a;
  border-radius: 6px;
}

/* Estilo del thumb al pasar el mouse por encima */
::-webkit-scrollbar-thumb:hover {
  background-color: #f27837;
}

/* Estilo del track cuando el scrollbar está activo */
::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}
</style>
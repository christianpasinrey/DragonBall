import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const showingMenu = ref(false);
  const toggleMenu = () => {
    showingMenu.value = !showingMenu.value;
  }

  const menuState = computed(() => showingMenu.value);

  return {
    showingMenu,
    toggleMenu,
    menuState
  }
})

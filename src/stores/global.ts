import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useDark, useToggle } from '@vueuse/core'

export const useGlobalStore = defineStore('global', () => {
  const showingMenu = ref(false);
  const isDark = useDark()
  const toggleDark = ()=> { return isDark.value = !isDark.value }
  const toggleMenu = () => {
    showingMenu.value = !showingMenu.value;
  }

  const menuState = computed(() => showingMenu.value);

  return {
    showingMenu,
    toggleMenu,
    menuState,
    isDark,
    toggleDark
  }
})

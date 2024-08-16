import { createRouter, createWebHistory } from 'vue-router'
import { useGlobalStore } from '@/stores/global';
import { routes } from './routes';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line no-console
  if(useGlobalStore().menuState){
    useGlobalStore().toggleMenu();
  }
  next()
});

export default router

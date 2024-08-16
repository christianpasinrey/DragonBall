import { createRouter, createWebHistory } from 'vue-router'
import { useGlobalStore } from '@/stores/global';
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('../views/CharactersView.vue')
    },
    {
      path: '/planets',
      name: 'planets',
      component: () => import('../views/PlanetsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line no-console
  if(useGlobalStore().menuState){
    useGlobalStore().toggleMenu();
  }
  next()
});

export default router

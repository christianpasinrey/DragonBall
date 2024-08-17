import HomeView from '../views/HomeView.vue'
import CharactersView from '../views/CharactersView.vue';
import PlanetsView from '../views/PlanetsView.vue';
import AboutView from '../views/AboutView.vue';
import MultimediaView from '../views/MultimediaView.vue';

export const routes =  [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/characters',
      name: 'characters',
      component: CharactersView
    },
    {
      path: '/planets',
      name: 'planets',
      component: PlanetsView
    },
    {
      path: '/multimedia',
      name: 'multimedia',
      component: MultimediaView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    }
];
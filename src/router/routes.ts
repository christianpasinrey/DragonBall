import HomeView from '../views/HomeView.vue'
import CharactersView from '../views/CharactersView.vue';
import PlanetsView from '../views/PlanetsView.vue';
import AboutView from '../views/AboutView.vue';
import MultimediaView from '../views/MultimediaView.vue';

export const routes =  [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home',
        description: 'Home page',
        disallow: true
        // meta tags
      }
    },
    {
      path: '/characters',
      name: 'characters',
      component: CharactersView,
      meta: {
        title: 'Characters',
        description: 'Characters page',
      }
    },
    {
      path: '/planets',
      name: 'planets',
      component: PlanetsView,
      meta: {
        title: 'Planets',
        description: 'Planets page',
      }
    },
    {
      path: '/multimedia',
      name: 'multimedia',
      component: MultimediaView,
      meta: {
        title: 'Multimedia',
        description: 'Multimedia page',
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
      meta: {
        title: 'About',
        description: 'About page',
      }
    }
];
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ParkingView from '../views/ParkingView.vue'
import UserView from '../views/UserView.vue'
import VehicleView from '../views/VehicleView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import SearchView from '../views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/parkings',
      name: 'parkings',
      component: ParkingView
    },
    {
      path: '/users',
      name: 'users',
      component: UserView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: VehicleView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFoundView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
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

export default router

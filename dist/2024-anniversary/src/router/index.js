import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Year1View from '../views/year1view.vue'
import Year2View from '../views/year2view.vue'
import Year3View from '../views/year3view.vue'
import endView from '../views/endView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/year1',
      name: 'year_1',
      component: Year1View,
    },
    {
      path: '/year2',
      name: 'year_2',
      component: Year2View,
    },
    {
      path: '/year3',
      name: 'year_3',
      component: Year3View,
    },
    {
      path: '/end',
      name: 'end',
      component: endView,
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { top:0 }
  }
})

export default router

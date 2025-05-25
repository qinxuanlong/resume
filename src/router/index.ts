import { createMemoryHistory, createRouter } from 'vue-router'


// import AboutView from '../view/AboutView.vue'
import HomeView from '../view/HomView.vue'

const routes = [
  { path: '/', component: HomeView },
  // { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
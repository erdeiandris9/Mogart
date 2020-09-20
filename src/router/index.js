import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sign from '../views/Sign.vue'
import Alkotok from '../views/Alkotok.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/alkotok',
    name: 'Alkotok',
    component: Alkotok
  },

  {
    path: '/sign',
    name: 'Sign',
    component: Sign
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

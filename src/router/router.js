import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sign from '../views/Sign.vue'
import Alkotok from '../views/Alkotok.vue'
import Kuratorok from '../views/Kurator.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

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
  {
    path: '/kuratorok',
    name: 'Kuratorok',
    component: Kuratorok
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

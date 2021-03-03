import App from '../App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import data from './data.js'
// import Main from '../Main.vue'
// import Login from '../login.vue'

Vue.use(VueRouter)



// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      children: data,
      // component: () => import('@/views/Home.vue'),
    }
  ]
})

export default router

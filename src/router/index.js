import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(`from ${from.path}  to ${to.path}`)
  next()
})

export default router

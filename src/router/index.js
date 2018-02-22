import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Facebook from '@/components/Facebook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/facebook',
      name: 'Facebook',
      component: Facebook
    }
  ]
})

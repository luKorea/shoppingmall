import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      component: () => import('./components/Home/Home')
    },
    {
      path: '/search',
      component: () => import('./components/Search/Search')
    },
    {
      path: '/member',
      component: () => import('./components/Member/Member')
    },
    {
      path: '/shopcar',
      component: () => import('./components/ShopCar/ShopCar')
    }
  ],
  linkActiveClass: 'mui-active'
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// 引入视图文件夹的页面组件
import ArtHome from './views/ArtHome'
import ArtCart from './views/ArtCart'
import ArtDetails from './views/ArtDetails'
import entrypage from './views/entrypage'

// 使用Router功能
Vue.use(Router)

// 配置抛出路由
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      // 路径别名
      name: 'home',
      component: ArtHome
    },
    {
      path: '/cart/',
      // 路径别名
      // 进入购物车不用通过路由传参，
      name: 'cart',
      component: ArtCart,
    },
    {
      path: '/myhome',
      // 路径别名
      name: 'myhome',
      component: Home
    },

    {
      path: '/details/:i',
      // 路径别名
      name: 'xiangqing',
      component: ArtDetails,
      props: true
    },
    {
      path: '/entrypage',
      // 路径别名
      name: 'entrypage',
      component: entrypage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    //重定向到home页面
    path: '/',
    name: 'Home',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      index: 1 //添加meta属性，约定1为第一级
    }
  },
  {
    path: '/category',
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/cart',
    component: () => import(/* webpackChunkName: "cart"*/'../views/Cart.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/user',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail"*/'../views/Detail.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login"*/'../views/Login.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/product-list',
    name: 'product-list',
    component: () => import(/* webpackChunkName: "product-list"*/'../views//ProductList.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import(/* webpackChunkName: "productDetail*/'../views/ProductDetail.vue'),
    meta: {
      index: 3
    }
  }
  // {
  //   path: '/about',
  //   name: '',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  //   meta: {
  //     index: 2 //添加meta属性，约定2为第二季
  //   }
  // }
]

const router = new VueRouter({
  routes
})

export default router

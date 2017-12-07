import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const Home = () => import('../views/Home.vue')
const Foo = () => import('../views/Foo.vue')
const Bar = () => import('../views/Bar.vue')
const Baz = () => import('../views/Baz.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/home', component: Home },
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar },
      { path: '/baz', component: Baz },
      { path: '/', redirect: '/home' }
    ]
  })
}

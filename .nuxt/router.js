import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4e76af48 = () => interopDefault(import('..\\pages\\characters.vue' /* webpackChunkName: "pages/characters" */))
const _7d3b9b26 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _cff58b0a = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _f27ceefe = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _6344d138 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/characters",
    component: _4e76af48,
    name: "characters"
  }, {
    path: "/dashboard",
    component: _7d3b9b26,
    name: "dashboard"
  }, {
    path: "/login",
    component: _cff58b0a,
    name: "login"
  }, {
    path: "/register",
    component: _f27ceefe,
    name: "register"
  }, {
    path: "/",
    component: _6344d138,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

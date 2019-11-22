import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'views/Dashboard'
import Domains from 'views/Domains'
import DnsRouters from 'views/DnsRouters'
import About from 'views/About'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    component: Dashboard,
    meta: {
      title: 'Dashboard'
    }
  }, {
    path: '/domains',
    component: Domains,
    meta: {
      title: 'Domains'
    }
  }, {
    path: '/routers',
    component: DnsRouters,
    meta: {
      title: 'Routers'
    }
  }, {
    path: '/about',
    component: About,
    meta: {
      title: 'About'
    }
  }, {
    path: '*', redirect: '/' }
]
export const router = new Router({ mode: 'history', routes })

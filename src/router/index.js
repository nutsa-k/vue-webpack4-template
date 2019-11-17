import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import contact from 'pages/contact'
import profile from 'pages/profile'
import login from 'pages/login'
import logout from 'pages/logout'
import gallery from 'pages/gallery'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },

  {
    path: '/contact',
    component: contact
  },

  {
    path: '/profile',
    component: profile
  },

  {
    path: '/login',
    component: login
  },

  {
    path: '/logout',
    component: logout
  },

  {
    path: '/gallery',
    component: gallery
  }
]

export default new Router({
  routes
})

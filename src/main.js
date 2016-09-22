import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import Music from './components/Music.vue'
import About from './components/About.vue'
import Gallery from './components/Gallery.vue'

import App from './App'

Vue.use(Router)

var router = new Router()

router.map({
  '/home': {
    component: Home,
    page: 'home'
  },
  '/gallery': {
    component: Gallery,
    page: 'gallery'
  },
  '/music': {
    component: Music,
    page: 'music'
  },
  '/about': {
    component: About,
    page: 'about'
  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
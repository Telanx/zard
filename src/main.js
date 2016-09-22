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
    component: Home
  },
  '/gallery': {
    component: Gallery
  },
  '/music': {
    component: Music
  },
  '/about': {
    component: About
  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
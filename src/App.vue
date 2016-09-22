<template>
  <div id="app">
      <frame-header></frame-header>
      <transition name="fade" mode="out-in">
        <router-view keep-alive></router-view>
      </transition>
      <frame-footer>
        <p slot="cpy" class="text-center">Powered By Telanx | 2015</p>
      </frame-footer>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import FrameHeader from './components/FrameHeader.vue'
import FrameFooter from './components/FrameFooter.vue'

export default {
  components: {
    FrameHeader,
    Home,
    FrameFooter
  }
}
</script>

<style>
  @import './assets/index.css'
</style>

<template>
  <div id="app">
      <frame-header :page="$route.page"></frame-header>
      <audio v-el:audio :src="mp3" hidden></audio>
      <router-view keep-alive 
        transition="fade"
        transition-mode="out-in"></router-view>
      <frame-footer>
        <p slot="cpy" class="text-center">Powered By Telanx | 2015</p>
      </frame-footer>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import FrameHeader from './components/FrameHeader.vue'
import FrameFooter from './components/FrameFooter.vue'
import $ from 'jquery'

export default {
  data() {
    return {
      audio: '',
      mp3: ''
    }
  },
  ready() {
    this.audio = this.$els.audio;
  },
  components: {
    FrameHeader,
    Home,
    FrameFooter
  },
  created: function () {
    console.log('組件構建完成')
    console.log(Home)
  }
}
</script>

<style>
  @import './assets/index.css'
</style>

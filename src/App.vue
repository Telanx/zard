<template>
  <div id="app">
      <frame-header :page="$route.page"></frame-header>
      
      <audio v-el:audio :src="mp3" hidden></audio>
      
      <router-view keep-alive 
        transition="fade"
        transition-mode="out-in">
      </router-view>
      
      <frame-footer><p slot="cpy" class="text-center">Powered By Telanx | 2015</p></frame-footer>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import FrameHeader from './components/FrameHeader.vue'
import FrameFooter from './components/FrameFooter.vue'
import $ from 'jquery'

// 歌曲播放应该是全局的，因此放在最外层
export default {
  data() {
    return {
      audio: '',
      mp3: ''
    }
  },
  ready() {
    // 获取元素绑定
    this.audio = this.$els.audio;
  },
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

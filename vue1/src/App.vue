<template>
  <div id="app">
      <frame-header :page="$route.page"></frame-header>
      
      <audio v-el:audio :src="mp3" hidden></audio>
      <div class="center" :min-height="centerHeight + 'px'">
        <router-view keep-alive 
          transition="fade"
          transition-mode="out-in">
        </router-view>
      </div>
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
    var de = document.documentElement;
    var db = document.body;
    var cm = (document.compatMode === "CSS1Compat");
    var iH = cm ? de.clientHeight : db.clientHeight;
    return {
      audio: '',
      mp3: '',
      centerHeight: iH-90
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

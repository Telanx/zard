<template>
<div id="app">
  <frame-header />
  <frame-aside :style="asideMenuStyle" />
  <cros-audio ref="crosaudio" v-show="false"></cros-audio>
  <div id="content" :style="contentStyle">
    <div class="container">
      <transition name="fade-transition" mode="out-in">
        <keep-alive>
        <router-view></router-view>
        </keep-alive>
      </transition>
    
    </div>
  </div>
  <!-- Footer START -->
  <div id="footer">
    <p class="text-center">©ZARD 2017 | Telanx</p>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import FrameHeader from '@/components/FrameHeader';
import FrameAside from '@/components/FrameAside';
import CrosAudio from '@/components/CrosAudio';

export default {
  name: 'app',
  components: {
    FrameHeader,
    FrameAside,
    CrosAudio,
  },
  data() {
    return {
      contentStyle: '',
      audio: '',
    };
  },
  computed: {
    ...mapGetters({
      menu_expanded: 'menu_expanded_status',
    }),
    asideMenuStyle() {
      const x = this.menu_expanded ? '-100%' : '0%';
      return `transform: translateX(${x})`;
    },
  },
  mounted() {
    window.vm = this;
    const ch = document.documentElement.clientHeight - 115;
    this.contentStyle = `min-height:${ch}px`;
    this.audio = this.$refs.crosaudio.audio;
  },
};
</script>

<style lang="scss">
/**引入全局样式 */
@import './assets/css/base.scss';
#content {
  background: rgb(20,139,205);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#footer {
  width: 100%;
  background: #fff;
  box-shadow: 0 -2px 5px rgba(0,0,0,.2);
  position: relative;
  bottom: 0;
  p {
    margin: 0;
    line-height: 40px;
  }
}

@media (max-width: 720px) {
  #content>.container {
    width: 100%;
    padding: 0;
  }
}
</style>

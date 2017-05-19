<template>
<div id="intro" class="zard-content">
  <div class="left-text col-md-7 text-center">
    <printer :data="printData" @end="onPrinterEnd"></printer>
  </div>
  <transition name="fade-transition">
  <div class="right-pic col-md-5 col-xs-12" v-show="showPic">
    <img src="http://www.wezard.net/20th/images/live/livephoto.jpg" style="width:100%">
    <p class="text-center">What a beautiful moment...</p>
  </div>
  </transition>
</div>
</template>
<script>
import Printer from '../util/Printer';

const printData = [
  '<h4 style="margin-bottom:20px;">きっと忘れない，一定不会忘记。</h4>',
  '<p>一定不会忘记 她突然离世。</p>',
  '<p>即使很少公开露面也同样被许多人所喜爱着，她的歌声始终支撑着我们。</p>',
  '<p>哭泣的时候也好，欢笑的时候也好，委屈的时候也好，</p>',
  '<p>痛苦的时候也好，都被她的歌声温柔地包围着。</p>',
  '<p>2007年5月27日。</p>',
  '<p>她一个人踏上了去往天国的旅途。</p>',
  '<p>留下了许多被称做作品的宝物，和柔和的微笑。</p>',
  '<p>在那之后的三个月里，面对充斥悲伤的每一天，还有可以看到的东西。</p>',
  '<p>我们不会忘记叫坂井泉水的这个人。</p>',
  '<p>不会忘记她为此献出人生的ZARD的音乐。</p>',
  '<p>一定不会忘记。</p>',
];
export default {
  name: 'index',
  components: {
    Printer,
  },
  data() {
    return {
      printData,
      showPic: false,
    };
  },
  methods: {
    onPrinterEnd() {
      this.showPic = true;
    },
  },
};
</script>

<style>
.zard-content {
  color: #fff;
}
.right-pic p {
  line-height: 35px;
  font-family: Brush Script MT;
}
</style>

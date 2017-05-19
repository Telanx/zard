<template>
<aside id="sidebar" class="sidebar sidebar-active">
  <div class="sidebar-inner">
    <section class="site-overview">
      <div class="site-author">
        <img class="site-author-image" src="../assets/img/zard.jpg">
        <p class="site-author-name">What a beautiful moment...</p>
      </div>
      <div class="liner-split"></div>
      <nav class="menu" @click="closeMenu">
        <ul>
          <li>
            <router-link to="/"><i class="glyphicon glyphicon-home"></i> 首页</router-link>
          </li>
          <div class="liner-split"></div>
          <li>
            <router-link to="/music"><i class="glyphicon glyphicon-music"></i> 音乐盒</router-link>
          </li>
          <div class="liner-split"></div>
          <li>
            <router-link to="/gallery"><i class="glyphicon glyphicon-picture"></i> 图库</router-link>
          </li>
          <div class="liner-split"></div>
          <li>
            <router-link to="/more"><i class="glyphicon glyphicon-option-horizontal"></i> 更多</router-link>
          </li>
        </ul>
      </nav>
    </section>
    <div class="sidebar-close text-center">
      <i class="iconfont icon-tubiao06" @click="closeMenu"></i>
    </div>
  </div>
</aside>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'aside',
  methods: {
    ...mapActions({
      closeMenu: 'TOGGLE_MENU',
    }),
  },
};
</script>

<style lang="scss">
.sidebar {
  position : fixed;
  top: 0;
  right:-80%;
  transition: all ease .3s; 
  background: #164062;
  z-index: 10001;
  width: 80%;
  height: 100%;
  .sidebar-inner {
    padding: 20px 0;
  }
  .site-author {
    text-align: center;
    .site-author-image {
      width: 100px;
      height: 100px;
      //border: solid 2px #aaa;
    }
    .site-author-name {
      font-family: Brush Script MT;
      font-size: 1.5em;
      color: #d5d602;
      line-height: 30px;
      text-align: center;
    }
  }
  .liner-split {
    height: 1px;
    background: linear-gradient(to
    left, #164062,#fff,#164062);
  }
  .menu {
    ul {
      margin: 0;
      padding: 0;
    }
    li {
      list-style: none;
      text-align: center;
      line-height: 60px;
      a {
        color: #fff;
      }
    }
  }
  .sidebar-close {
    position: absolute;
    width: 100%;
    bottom: 30px;
  }
  .sidebar-close i {
    font-size: 36px;
    color: #fff;
  }
}
</style>

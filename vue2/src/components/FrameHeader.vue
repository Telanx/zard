<template>
<div id="header">
    <div class='container'>
      <div class='logo'>
        <img src='../assets/img/logo.png'>
      </div>
      <nav class='menu'>
        <ul>
          <li class='active'>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to='/music'>音乐盒</router-link>
          </li>
          <li>
            <router-link to="/gallery">图库</router-link>
          </li>
          <li>
            <router-link to='/more'>更多</router-link>
          </li>
        </ul>
      </nav>
      <div class="nav-toggle">
        <i class="iconfont icon-rectangular4" @click="toggleMenu"></i>
      </div>
      <div class='text-logo'>
        <div class='logo-svg line'>
          <svg version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox = "0 0 60 23">
					<path id='path' fill="none"
					stroke = "rgb(19,191,255)"
					stroke-width = "0.4"
					d = "M3.3,2.8 L14.9,2.8 14.9,4.4 7.1,14.6 14.8,14.6 14.8,17.0 2.8,17.0 2.8,15.3 10.6,5.3 3.3,5.2 3.3,2.8   M15.5,17.0 L20.9,2.8 24.7,2.8 30.1,17 26.6,17 25.4,13.8 20,13.8 19,17 15.4,17 M20.7,11.4  L24.7,11.4 22.7,5.3 20.7,11.4 M32,17 L32,2.8 37.4,2.8 C40.4,2.8 42.6,7 39.2,10.6 C39.2,10.6 42.2,13.7 44.4,17 L40.7,17 C40.7,17  38.7,13.9 36.6,11.4 L35.2,11.4 35.2,17.0 32,17.0  M35.2,5.0 L37.3,5.0 C37.3,5.0 39.2,7.0  37.3,9.2 L35.2,9.1 35.2,5.0  M45.9,17.0 L45.9,2.7 51.8,2.8 C51.8,2.8 58,3.9 59.0,8.7 L59.0,10.3 C59.0,10.3 58.1,15.7 51.8,17.0 L45.9,17.0 M49.1,14.5 L49.1,5.2 51.2,5.3  C51.2,5.3 55.9,6.4 55.7,9.5 C55.7,9.5 55.4,13.8 51.2,14.6  L49.1,14.5"/>
				</svg>

        </div>       
      </div>
    </div>
  </div>
</div>  
</template>
<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
      toggleMenu: 'TOGGLE_MENU',
    }),
  },
};
</script>

<style lang="scss">
#header {
  background: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,.2);
  .logo {
    width: 70px;
    height: 70px;
    float: left;
    img {
      height: 70px;
    }
  }
  .menu {
    float: left;
    line-height: 70px;
  }
  .menu .active {
    color: rgb(17, 151, 226);
  }
  .menu li {
    float: left;
    width: 60px;
    line-height: 70px;
    list-style: none;
    text-align: center;
    a {
      display: block;
      color: #000;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    a:focus {
      color: #0089ff;
    }
  }
  .nav-toggle {
    display: none;
    float: right;
    line-height: 70px;
  }
  .nav-toggle i {
    font-size: 2em;
  }
  .text-logo {
    float: right;
    width: 200px;
    height: 70px
  }
  #path {
    color: #fff;
    stroke-dasharray: 265.07;
    stroke-dashoffset: 250;
    animation: dash 5s linear infinite;
    -webkit-animation: dash 5s linear infinite;
  }
}

/**小屏幕适配 */
@media (max-width: 720px) {
  #header {
    .nav-toggle {
      display: block;
    }
    .menu, .text-logo {
      display: none;
    }
  }
}
</style>

<template>
<div id="more">
  <div class="section">
    <h3 class="section-header sites">链接</h3>
    <div class="section-content">
      <ul class="links">
        <li v-for="site in sites" :key="site.id">
          <a :href="site.href" target="_blank">
            <div class="box">
              <div class="url-pic">
                <img width="100%" height="100%" :src="site.logo">
              </div>
              <div class="url-info">{{site.title}}</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="section">
    <h3 class="section-header qq-wechat-weibo">QQ/微信/微博</h3>
    <div class="section-content">
      <p><i class="iconfont icon-unie61d text-red"></i>新浪微博<a href=#>坂井泉水_ZARD</a></p>
      <p><i class="iconfont icon-qq text-blue"></i>QQ群Soffio~Taste ZARD 群号:65367929</p>
    </div>
    <div>
      <div class="col-xs-6 qr">
        <div class="text-center">
          <img src="../assets/img/wechat.png" />
        </div>
         <p><i class="iconfont icon-weixin text-green"></i>微信公众号ZARD</p>
      </div>
      <div class="col-xs-6 qr">
        <div class="text-center">
          <img src="../assets/img/qq.png" />
        </div>
        <p><i class="iconfont icon-qq text-blue"></i>QQ部落ZARD</p>
      </div>
    </div>
  </div>
</div>
</template>
<script>
const sites = [
  { id: 0, href: 'http://tieba.baidu.com/f?ie=utf-8&kw=zard', title: 'ZARD吧', logo: 'http://m.tiebaimg.com/timg?wapp&quality=80&size=b150_150&subsize=20480&cut_x=0&cut_w=0&cut_y=0&cut_h=0&sec=1369815402&srctrace&di=cba18935fcf1b709e66801265c3032c3&wh_rate=null&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2F960a304e251f95ca10fd515ac8177f3e660952d6.jpg' },
  { id: 1, href: 'http://tieba.baidu.com/f?ie=utf-8&kw=%E5%9D%82%E4%BA%95%E6%B3%89%E6%B0%B4', title: '坂井泉水吧', logo: 'http://m.tiebaimg.com/timg?wapp&quality=80&size=b150_150&subsize=20480&cut_x=0&cut_w=0&cut_y=0&cut_h=0&sec=1369815402&srctrace&di=25fab98291b68ac997dbc39ce7a5e351&wh_rate=null&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2F1b2af71349540923edadc9779358d109b2de490a.jpg' },
  { id: 2, href: 'http://wezard.net/', title: 'WEZARD官方', logo: 'http://wezard.net/25th/img/zard_image-assets/25thlogo.png' },
  { id: 3, href: 'http://tieba.baidu.com/f?kw=suoying&fr=telanx', title: 'suoying吧', logo: 'http://m.tiebaimg.com/timg?wapp&quality=80&size=b150_150&subsize=20480&cut_x=0&cut_w=0&cut_y=0&cut_h=0&sec=1369815402&srctrace&di=6eba38095869aef71e36994faab64579&wh_rate=null&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2F9f510fb30f2442a740ac862dd043ad4bd0130293.jpg' },
  { id: 4, href: 'http://telanx.gotoip1.com/cloud/pic.html', title: 'ZARD图库', logo: 'http://7u2k6l.com1.z0.glb.clouddn.com/zard.jpg' },
];
export default {
  name: 'more',
  data() {
    return {
      sites,
    };
  },
};
</script>
<style lang="scss">
#more {
	width:100%;
	height:100%;
  color: #fff;
  a {
    color:#000;
  }
  .section {
    margin: 40px 0;
    .section-header {
      padding: 10px 0;
    }
    .section-content {
      border-top: solid 1px #aac6d5;
      padding-top: 10px;
    }
  }
  .links {
    display: inline-block;
    .url-pic,.url-info {
      width:100px;
      height:102px;
      position:absolute;
      line-height:100px;
      text-align:center;
    }
    .url-info:hover {
      background:rgba(0,0,0,0.5);
      border:solid 2px #aa0;
      color:#fff;
    }
    li {
      list-style: none;
      float: left;
      width: 100px;
      height: 100px;
      margin:0 20px 20px 0;
    }
  }
  .qr {
    margin: 20px 0;
    img {
      max-width: 150px;
      max-height: 150px;
      box-shadow: 1px 0px 20px 6px #fff;
    }
    p {
      margin-top: 10px;
      text-align: center;
      text-shadow: 1px -1px 20px #000;
    }
  }
}
</style>

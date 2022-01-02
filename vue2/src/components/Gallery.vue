<template>
<div id="gallery">
  <div style="height: 500px">
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
      <swiper-slide v-for="pic in pics" :key="pic" :style="'background-image:url(' + pic + ');'">
      </swiper-slide>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
      <swiper-slide v-for="pic in pics" :key="pic" :style="'background-image:url(' + pic + ');'"></swiper-slide>
    </swiper>
    </div>
</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import $ from 'jquery';

export default {
  name: 'gallary',
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperTop: { activeIndex: 0 },
      swiperThumbs: null,
      swiperOptionTop: {
        notNextTick: true,
        spaceBetween: 10,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        onSlideChangeEnd: (sp) => {
          const idx = sp.activeIndex;
          if (idx === this.pics.length - 2) {
            // 加载更多slides
            this.preload();
          }
        },
      },
      swiperOptionThumbs: {
        notNextTick: true,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
      pics: [],
    };
  },
  methods: {
    preload(fn) {
      $.getJSON('http://vercel-api-rose.vercel.app/api/pic?n=8', (res) => {
        this.pics = this.pics.concat(res.map(x => x.url));
        if (typeof fn !== 'undefined') {
          fn();
        }
      });
    },
  },
  mounted() {
    this.preload(() => {
      this.swiperTop = this.$refs.swiperTop.swiper;
      this.swiperThumbs = this.$refs.swiperThumbs.swiper;
      this.swiperTop.params.control = this.swiperThumbs;
      this.swiperThumbs.params.control = this.swiperTop;
    });
  },
};
</script>
<style scoped>
  .swiper-container {
    height: 100%;
    background-color: #000;
  }
  .swiper-slide {
    background-repeat: no-repeat;
    background-position: center;
  }
  .gallery-top {
    height: 80%!important;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20%!important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }

</style>

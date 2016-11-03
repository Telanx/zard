import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import $ from 'jquery'

import Home from './components/Home.vue'
import Music from './components/Music.vue'
import About from './components/About.vue'
import Gallery from './components/Gallery.vue'

import App from './App'

Vue.use(Router)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true;
// 注册transition
Vue.transition('print', {
	beforeEnter: function () {
		console.log('调用打印机效果')
	},
	enter: function (el, done) {
		console.log('进入了')
		// 元素已被插入 DOM
		// 在动画结束后调用 done
		var dft = {
			//以下为该插件的属性及其默认值
						speed: 100,//打印文字间隔
						sspeed: 1000,//字符间隔停顿
						text: 'Hello world'
		};
		var ops = $.extend(dft, { text: $(el).html() });
		// 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
		var str = ops.text.replace(/(\s){2,}/g, " ");
		var index = 0;
		var _this = $(el);
		console.log(ops.text);
		var timer = function () {
						var args = arguments;
						var current = str.slice(index, index + 1);
						// html标签完整输出,如：<p>
						if (current == '<') {
				index = str.indexOf('>', index) + 1;
						}
						else {
				index++;
						}
						//位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
						if (index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
				_this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
				setTimeout(timer, ops.speed);
						} else {
				_this.html(str.substring(0, index));
				clearTimeout(timer);
				console.log('加载完毕');

						};
		}
		setTimeout(timer, ops.speed);
	},
	enterCancelled: function (el) {
		$(el).stop()
	},
	leave: function (el, done) {
		// 与 enter 相同

	},
	leaveCancelled: function (el) {

	}
}
);

var router = new Router()

router.map({
  '/home': {
    component: Home,
    page: 'home'
  },
  '/gallery': {
    component: Gallery,
    page: 'gallery'
  },
  '/music': {
    component: Music,
    page: 'music'
  },
  '/about': {
    component: About,
    page: 'about'
  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
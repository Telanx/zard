<template>
	<div id='index' class='wrap mytran-transition'  :style="{ marginLeft: marginLeft+'px'}">
		<div class='index zard-content'>
			<div class='container line'>
				<div class='left-text col-md-7' v-if="show" transition="print">
					<h4 style='margin-bottom:20px;'>きっと忘れない，一定不会忘记。</h4>
					<p>一定不会忘记 她突然离世。</p>
					<p>即使很少公开露面也同样被许多人所喜爱着，她的歌声始终支撑着我们。</p>
					<p>哭泣的时候也好，欢笑的时候也好，委屈的时候也好，</p>
					<p>痛苦的时候也好，都被她的歌声温柔地包围着。</p>
					<p>2007年5月27日。</p>
					<p>她一个人踏上了去往天国的旅途。</p>
					<p>留下了许多被称做作品的宝物，和柔和的微笑。</p>
					<p>在那之后的三个月里，面对充斥悲伤的每一天，还有可以看到的东西。</p>
					<p>我们不会忘记叫坂井泉水的这个人。</p>
					<p>不会忘记她为此献出人生的ZARD的音乐。</p>
					<p>一定不会忘记。</p>
				</div>
				<div class='right-pic col-md-5 col-xs-12'>
					<img src='http://www.wezard.net/20th/images/live/livephoto.jpg' style='width:100%'>
					<p>What a beautiful moment...</p>
				</div>
			</div>
			<div class='zard-btn line text-center'>
				<button class='btn btn-next' @click="next">开启ZARD音乐之旅</button>
			</div>
		</div>
		<div class='intro1 zard-content'>
			<div class='container'>
				<div class='line'>
					<img src='http://i0.itc.cn/20130806/2f6f_49863f9c_d822_fd0c_b6e8_4a7e71d1e838_2.jpg' width='100%'>
				</div>
				<div class='line'>
					灌篮高手主题曲《我的朋友》
				</div>

				<div class='line text-center'><button class='btn btn-next' @click="next">Next</button></div>
			</div>
		</div>

		<div class='intro2 zard-content'>
			<div class='container'>
				<div class='line'>
					<div class='left col-md-4 col-xs-12'>
						<img src='http://p3.qhimg.com/t01926e0c82e700a4fc.jpg' width='100%'>
					</div>

					<div class='left col-md-8 col-xs-12'>
						名侦探柯南转动命运之轮

					</div>
				</div>
				<div class='line text-center'><button class='btn btn-next' @click="next">Continue</button></div>
			</div>
		</div>
		<div class='intro3 zard-content'>
			<div class='container'>
				<div class='line'>
					<div class='left col-md-8 col-xs-12'>
						七龙珠 DANDAN
					</div>

					<div class='right col-md-4 col-xs-12'>
						<img src='http://game.onegreen.net/emu/UploadFile/gba/2009080412585911397.jpg' width='100%'>

					</div>
				</div>
				<div class='line text-center'><button class='btn btn-next' @click="next">Continue</button></div>

			</div>
		</div>
		<div class='intro4 zard-content'>
			<div class='container'>
				<div class='line'>
					<div class='left col-md-4 col-xs-12'>
						<img src='http://7u2mbi.com1.z0.glb.clouddn.com/%E7%BD%91%E5%8F%8B%E4%B8%8A%E4%BC%A0/%5D2%7B~%249Y_SHGM%40IJ7%24MZ5W%24R.jpg'
							width='100%'>
					</div>

					<div class='left col-md-8 col-xs-12'>
						突然

					</div>
				</div>
				<div class='line text-center'><button class='btn btn-next' @click="next">More</button></div>
			</div>
		</div>
	</div>
</template>
<script>
	import $ from 'jquery'
	export default {
		created() {
			// 组件被创建
		},
		ready() {
			console.log('组件渲染完毕');
			this.show = true;
		},
		data(){
			return {
				currentPage: 1,
				marginLeft: 0,
				show: false
			}
		},
		methods:{
			next(e){
				this.currentPage = ++this.currentPage% 5
				this.go(this.currentPage)
			},
			go(idx){
				this.marginLeft = -(this.currentPage) * window.innerWidth;
			}
		}
	}
</script>

<style>
.mytran-transition { 
	transition: all 0.3s ease;  
} 
</style>
<template>
    <div id='gallery' transition="fade">
		<div class='container'>
			<div class='top pic-preview'>
				<ul>
					<li v-for="pic in picList" :class="{ 'active': $index=== current.index }">
						<img :src="pic.url">
					</li>
				</ul>
				<div id='gallery-refresh'  style='height:60px;line-height:60px'><button  @click="refresh" class='btn btn-primary'><span class='glyphicon glyphicon-refresh'></span></button></div>
			</div>
			<div class='gallery-show'>
				<div class='gallery-box'>
						<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
						
						<div class="carousel-inner" role="listbox">
							<div class="item">
								<img data-src="http://www.wezard.net/20th/images/logo_on.png" alt="First slide [900x500]" src="http://www.wezard.net/20th/images/logo_on.png">
							</div>
							
							<div class="item active">
								<img :src="current.pic" :transition="fade">
							</div>
						</div>
						<a class="left carousel-control" href="#" role="button" data-slide="prev" @click="prev">
							<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
							<span class="sr-only">Previous</span>
						</a>
						<a class="right carousel-control" href="#" role="button" data-slide="next" @click="next">
							<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
							<span class="sr-only">Next</span>
						</a>
						</div>
				</div>
			</div>
			
			
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			picList: [],
			current: {
				index: '',
				pic: 'http://7u2mbi.com1.z0.glb.clouddn.com/%E7%BD%91%E5%8F%8B%E4%B8%8A%E4%BC%A0/%5D2%7B~%249Y_SHGM%40IJ7%24MZ5W%24R.jpg'
			}
		}
	},
	ready() {
		this.refresh();
	},
	methods: {
		prev(e) {
			e.preventDefault();
			if (this.current.index === 0) {
				this.refresh();
				return false;
			}
			this.current.index--;
		},
		next(e) {
			e.preventDefault();
			if (this.current.index === 7) {
				this.refresh();
				return false;
			}
			this.current.index++;
		},
		refresh() {
			this.current.index = '';
			this.$http.get('http://telanx.gotoip1.com/api/pic.php?n=8')
			.then(data => {
				this.picList = JSON.parse(data.body);
				this.current.index = 0;
			})
			.catch(err => {
				console.log('出错了..' + err);
			});
		}
	},
	watch: {
		'current.index': {
			handler(cur, prev) {
				if (cur == '') cur = 0;
				this.current.pic = this.picList[cur].url;
			}
		}
	}
}
</script>
<style></style>
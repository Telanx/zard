<template>
    <div id='music' class="mytran-transition">
		<div class='line'>
			<div class='music-box'>
				<div class='top'>
					<div class='left fleft'>
                        <img :src='current.pic' width=70px height=70px />
                       
					</div>
					
					<div class='right fleft'>
						<div class='line song-control' style='height:30px;'>
							<ul>
                                <li><span class='pp glyphicon glyphicon-play' title='开始/暂停'></span></li>
								<li><span class='forward glyphicon glyphicon-forward' title='下一首'></span></li>
                                <li><span class='lrc-list glyphicon glyphicon-text-width' title='切换歌词/列表'></span></li>
                                <li><span class='play-type glyphicon glyphicon-music' title='播放方式'></span></li>
                                <li>
                                    <span class='share-qzone glyphicon glyphicon-share' title='分享到QQ空间'></span>
                                </li>
								
							</ul>
						</div>
							
						
					</div>
					
				</div>
				<div class='middle'>
					<div class='line song-info' style='height:24px;background:#fff;'>
							<audio v-el:audio :src="current.mp3" hidden></audio>
							<div class='song-name fleft'><span>{{current.song}}</span></div>
							<div class='song-time fright text-right'><span class='current-time'>00:00</span>/<span class='total-time'>00:00</span></div>
					</div>
						<div class="progress" style='height:5px;margin-bottom:0;'>
						<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
						<span class="sr-only">60% Complete</span>
						</div>
						</div>

				</div>
				<div class='song-center'>
				<div class='song-wrap'>
					<!---歌曲列表-->
					<div class='song-list'>
						<ul v-for="r in songs">
							<li data-index='{{r.id}}' data-id='{{r.netid}}' @click="play(r.id, r.netid, r.title)" :class="{'active': r.id == current.index}">{{(r.id)+'.'+r.title}}</li>
						</ul>
					</div>
					<!---歌词部分-->
					<div class='song-lrc'>
						<div class='lrc-content'>
						<p class='text-center'>歌词</p>
						</div>
					</div>
				</div>
				</div>
				<div class='bottom'>
					<p class='text-right'>ZARD歌曲全集</p>
				</div>
			</div>
			
		</div>
	</div>
</template>
<script>
import $ from 'jquery'
export default {
	ready() {
		// 拉取数据并渲染
		this.$http.get('../../data/songs.json').then(function(data) {
			console.log(data);
			this.songs = data.body
		});
		this.audio = this.$els.audio;
		console.log(this.audio)
	},
	data() {
		return {
			current: {
				pic: 'http://tb.himg.baidu.com/sys/portrait/item/d34f657375796d6c6020',
				mp3: 'http://pnp.51t.com/23/2070/58459/92018107.m4a',
				song: 'AKB48-柠檬の年顷',
				index: 0
			},
			songs: [],
			audio: ''
		}
	},
	methods: {
		play(index, id, title) {
			this.current.song = title;
			this.current.index = index;
			this.current.mp3 = 'http://d.139.sh/1327799743/zard/'+id+'.mp3';
			this.$nextTick(() => {this.audio.play()});

		}
	}
}
</script>
<style></style>
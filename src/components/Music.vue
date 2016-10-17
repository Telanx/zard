<template>
	<div id='music' class="mytran-transition">
		<div class='line'>
			<div class='music-box'>
				<div class='top'>
					<div class='left fleft'>
						<img :src='current.pic' width=70px height=70px />
						<audio :src='current.mp3' autoplay></audio>
					</div>

					<div class='right fleft'>
						<div class='line song-control' style='height:30px;'>
							<ul>
								<li><span class='pp glyphicon glyphicon-play' title='开始/暂停'></span></li>
								<li><span class='forward glyphicon glyphicon-forward' title='下一首'></span></li>
								<li @click="toggleLrc"><span class='lrc-list glyphicon' v-bind:class="{ 'glyphicon-text-width': player.lrc, 'glyphicon-list': !player.lrc }"
										title='切换歌词/列表'></span></li>
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
						<div class='song-name fleft'><span>{{current.song}}</span></div>

						<div class='song-time fright text-right'><span class='current-time'>{{ current.current_time }}</span>/<span class='total-time'>{{ current.total_time }}</span></div>
					</div>
					<div class="progress" style='height:5px;margin-bottom:0;'>
						<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
							<span class="sr-only">60% Complete</span>
						</div>
					</div>

				</div>
				<div class='song-center'>
					<div class='song-wrap' v-bind:class="{ 'transform-width': player.lrc }">
						<!---歌曲列表-->
						<div class='song-list'>
							<ul v-for="r in songs">
								<li v-bind:class="{ 'active': current.id === r.id }" data-index='{{r.id}}' data-id='{{r.netid}}' @click="selectSong({ id: r.id, netId: r.netid, title: r.title })">{{(r.id)+'.'+r.title}}</li>
							</ul>
						</div>
						<div class='song-lrc'>

							<div class='lrc-content' v-bind:style="{ 'margin-top': -player.lrcline*27+'px'}" >
								<p class="text-center" v-if="LRC.words.length<1">暂无歌词</p>
								<p class='text-center' v-for="(k,v) in LRC.words">
									<span v-bind:class="{ 'active': $index === player.lrcline }">{{ v }}</span>
								</p>
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
		})
	},
	data() {
		return {
			player: {
				lrc: false,		// 歌词，歌曲列表
				play: false,	// 播放状态
				mod: '' ,	// 随机rand, 单曲循环cycle, 顺序 seq
				lrcline: 10
			},
			current: {
				id: 0,
				pic: 'http://tb.himg.baidu.com/sys/portrait/item/d34f657375796d6c6020',
				mp3: 'http://pnp.51t.com/23/2070/58459/92018107.m4a',
				song: 'AKB48-柠檬の年顷',
				current_time: '00:00',
				total_time: '00:00',
				lrc: '歌词'
			},
			songs: [],
			LRC: { words:[] }
		}
	},
	methods: {
		selectSong(song) {
			console.log(song);
			this.current.id = song.id;
			this.current.song = song.title;
			var netId = song.netId;
			this.$http.jsonp('//music.163.com/api/song/media?id=' + netId)
				.then(function(data) {
					var LRC = this.parseLrc(data.body.lyric);
					console.log(LRC)
					this.LRC = LRC;
					//this.current.lrc = data.body.lyric;
				})
				.catch(function(err) {
					console.log('获取失败！'+JSON.stringify(err))
				});
			// 获取歌曲的信息
			var bl = {"id":netId,"ids":[netId],"limit":10000,"offset":0,"csrf_token":""};
			var p1 = "010001";
 			var p2="00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7"
 			var p3 = "0CoJUm6Qyw8W8jud";
 			var t = window.asrsea(JSON.stringify(bl),p1,p2,p3);
			 console.log(t);
			this.$http.jsonp('//localhost:3000/',
				{
					params: {
						net_id: netId,
						encText: t.encText,
						encSecKey: t.encSecKey
						
				}
				}).then(function(r){
				console.log('获取歌曲成功');
				console.log(r);
			}).catch(function(err) {
				console.log('获取歌曲信息失败');
			})
		},
		parseLrc(lrc) {
			var arr = lrc.split(/[\r\n]/), 
		  	len = arr.length, 
		  	words = {}, 
		  	times = [], i = 0;
			var musicData = {ti:'',ar:'',al:''};
			for (; i < len;) {
				var temp,doit = true,
					str = decodeURIComponent(arr[i]), 
					word = str.replace(/\[\d*:\d*((\.|\:)\d*)*\]/g, '');
				
				'ti ar al'.replace(/\S+/g,function(a){
					
					if(doit && musicData[a]===''){
						temp = str.match(new RegExp('\\['+a+'\\:(.*?)\\]'));
						if(temp && temp[1]){
							doit = false;
							musicData[a] = temp[1]; 
						}
					}
				});
				
				if(word.length===0){
					word = "…… ……";
				}
				if(str.match(/\[(\d*):(\d*)([\.|\:]\d*)*\]/g)){
					str.replace(/\[(\d*):(\d*)([\.|\:]\d*)*\]/g, function() {
						var min = arguments[1] | 0, 
						sec = arguments[2] | 0, 
						time = min * 60 + sec,
						p = times.push(time * 1e3);
					words[times[--p]] = word.trim();
					});
				}else{
					//针对网易云音乐的歌词
					var  time = 180*i/len;//分3分钟内放完
					times.push(time*1e3);
					words[time*1e3]=word.trim();
				}
				i++;
			}
			times.sort(function(a, b) {
				return a - b;
			});
			return {
				words: words,
				times: times,
				data:musicData
			};
		},
		// 播放歌曲
		play() {
			
		},
		// 暂停播放
		pause() {

		},
		// 切换歌词，歌曲
		toggleLrc() {
			this.player.lrc = !this.player.lrc;
		}
	}
}
</script>
<style></style>
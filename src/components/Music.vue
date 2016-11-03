<template>
	<div id='music' transition="fade">
		<div class='line'>
			<div class='music-box'>
				<div class='top'>
					<div class='left fleft'>
                        <img :src='current.pic' width=70px height=70px />
					</div>

					<div class='right fleft'>
						<div class='line song-control' style='height:30px;'>
							<ul>
								<li><span @click="pause" class='pp glyphicon' :class="{ 'glyphicon-play': !player.play, 'glyphicon-pause': player.play }" title='开始/暂停'></span></li>
								<li @click="next"><span class='forward glyphicon glyphicon-forward' title='下一首'></span></li>
								<li @click="toggleLrc"><span class='lrc-list glyphicon' v-bind:class="{ 'glyphicon-text-width': !player.lrc, 'glyphicon-list': player.lrc }"
										title='切换歌词/列表'></span></li>
								<li @click="togglePlayerMod"><span class='play-type glyphicon' :class="{ 'glyphicon-music': player.mod === 'seq'  , 'glyphicon-repeat': player.mod == 'cycle', 'glyphicon-random': player.mod === 'rand'}" title='播放方式'></span></li>
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
		});
		this.audio = this.$parent.audio; 
	},
	data() {
		return {
			player: {
				lrc: false,		// 歌词，歌曲列表
				play: false,	// 播放状态
				mod: 'seq' ,	// 随机rand, 单曲循环cycle, 顺序 seq
				lrcline: 10,
				timer: null
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
	headers: {
		'Content-Type': 'application/json'
	},
	methods: {
		togglePlayerMod(e) {
			var mods = ['seq', 'cycle', 'rand'];
			var index = mods.indexOf(this.player.mod);
			index = ++index % 3;
			this.player.mod = mods[index];
		},
		selectSong(song) {
			console.log(song);
			var _this = this;
			this.current.id = song.id;
			this.current.song = song.title;
			var netId = song.netId;
			this.$http.jsonp('http://music.163.com/api/song/media?id=' + netId)
				.then(function(data) {
					//var lrcStr = JSON.parse(data.body);
					var LRC = this.parseLrc(data.body.lyric);
					console.log(LRC)
					this.LRC = LRC;
					this.player.lrcline = 0;
					//this.current.lrc = data.body.lyric;
				})
				.catch(function(err) {
					console.log('获取失败！'+JSON.stringify(err))
				});
			this.$http.get('http://telanx.gotoip1.com/api/api.php?url=music.163.com/api/song/detail?ids=[' + netId + ']')
				.then(function(data) {
					data = JSON.parse(data.body);
					console.log(data.songs[0].album.blurPicUrl);
					_this.current.pic = data.songs[0].album.blurPicUrl;
					_this.current.total_time = _this.timeParse(data.songs[0].duration)
				})
				.catch(function(err) {
					console.log('获取歌曲信息失败！'+JSON.stringify(err));
				})
			this.play(song.id, song.title, song.netId);
			
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
		play(id, title, netId) {
			this.$parent.mp3 = 'http://d.139.sh/1327799743/zard/'+netId+'.mp3';
			clearInterval(this.player.timer);
			this.$nextTick(() => {
				this.$parent.audio.play();
				this.player.play = true;
				this.player.timer = setInterval(this.updateProgress, 500);
			})
		},
		// 上一首
		prev() {
			if (this.current.id === 1) {
				this.current.id = this.songs.length;
			} else {
				this.current.id--;
			}
			this.selectSong({
				id: this.current.id,
				netId: this.songs[this.current.id-1].netid,
				title: this.songs[this.current.id-1].title
			})
		}, 
		// 下一首
		next() {
			if (this.current.id === this.songs.length) {
				this.current.id = 1;
			} else {
				this.current.id++;
			}
			this.selectSong({
				id: this.current.id,
				netId: this.songs[this.current.id-1].netid,
				title: this.songs[this.current.id-1].title
			});
		},
		// 暂停播放
		pause() {
			if (this.player.play)this.$parent.audio.pause();
			else this.$parent.audio.play();
			this.player.play = !this.player.play;
		},
		// 切换歌词，歌曲
		toggleLrc() {
			this.player.lrc = !this.player.lrc;
		},
		// 更新歌词等进度
		updateProgress() {
			var audio = this.$parent.audio; 
			// 歌词，进度条等
			//var t = current.t;
			//$ctime = this.$parent.audio.currentTime*1000;
			//$ct = timeParse($ctime);
			//n_currentTime.html($ct);
			//console.log('进度'+t+'%');
			//n_progress.css('width',100*$ctime/t+'%');
				
			//设置歌词
			var current = { lrc: this.LRC };
			var $ctime = this.$parent.audio.currentTime*1000;
			this.current.current_time = this.timeParse($ctime);
			var n_lrc = $('.lrc-content')
			for(var i=0;i<current.lrc.times.length;i++){
				var tt = current.lrc.times;
				if($ctime>=tt[i]&&$ctime<tt[i+1]){
					this.player.lrcline = i;
					}
			}
			if(audio.ended){
				//停止,则播放下一首或者随机播放一首
				console.log('歌曲结束了!');
				clearInterval(this.player.timer);
				var sl = current.len;
				var randIndex = Math.floor((sl+1)*Math.random());
				switch(this.player.mod){
					case 'seq': this.next();break;
					case 'cycle': this.replay();break;
					case 'rand': current.index = (randIndex+1)%sl;_this.go(current);break;
					default:
				}
			}

		},
		replay() {
			this.$parent.audio.play();
		},
		timeParse(t) {
				//获取分钟
				var m =Math.floor(t/60000);
				m = m>9?m:('0'+m);
				var s = Math.round((t%60000)/1000);
				s = s>9?s:('0'+s);
				return m+':'+s;
		}
	}
}
</script>
<style></style>
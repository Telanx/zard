<template>
	<div id='music' transition="fade">
		<div class='line'>
			<div class='music-box'>
				<div class='top'>
					<div class='left fleft'>
            <img :src='current.pic' width=70px height=69px onerror="this.src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCACWAJYDAREAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAUDBAYCAQf/xAA2EAABBAIABAQFAQcEAwAAAAABAAIDBAUREiExUQYTQWEUInGBkVIVI0JiocHRMjSx8EOi4f/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EAC0RAQEAAgEDAgQFBQEBAAAAAAABAhEDEiExQVEEEyJxMlJhgaEjkbHB4ULw/9oADAMBAAIRAxEAPwD8ZQEBAQEBAQEBAQEBAQEBAQEBAQEBAQemtc8hrQST6BC3XlareHJfIFnITx0q56OlPM/QdT9leY+7my55vWE3XoyeHqfKOOzecP4najb/AHP9E3jE9PNl5sn8gzmMbybgote8x/wnVPZHyM/zvhyeEmOpsO+IHq6KbZH2I/unVPY+Vyzxk9txWIv/AOwyYikP/itDgP2PQ/lNY3xT5nLh+Kbn6J+Qw93Gv4bELmjqHAciouNjTDlwz8VPVWogICAgICAgICAg2aVKe/YbBAwvc48gApktUzzmE3VyWejgGGCq1lu+P9cx5xxHsP1Efge6vuY+PLnmOfN3y7T290O3bsXpjNamfLIf4nHf29lS211Y444zWM01lCRAQEFXH5y5SjEBLbFbfOCYbb9vUfZWmVjLPhxz7+L7t2xjKeUqvuYc6cwblquPzM+nce4+6tZL3jGcmXHenk/u59zS1xBBBHUFZut5QEBAQEBAQEGatWltzthhaXOcdABTJtXLKYzdXr1pmBqOxdNw+LeNWp2nm3+Rp/5P27q9vTNRz4Y3ly+Zl49J/tzazdQgICAgICDPWszVLEc8EhjljO2uHom9IsmU1fC7bigz9J96pG2K7CN2IG8gR+tvt7ei0uspuOXG3hy6b4vhzhBB0eqzdb4gICAgICDJHG6WRrGDbnHQCIt1Nuikmb4XgEMHC7Jyt295G/hwemv5iPwtN9P3ckl57u/h/wA/8c25xe4ucSSeZJ9Vm7HlAQEBAQEBAQbmPuzY25HahPzMPMHo4HqD7EKZdXaueEzxuNUM7Th4YclTB+GtAnh/Q71afoVbKesY8OdluGXmIao6BAQEBAQXfD0TIG2crKwObUZxMDujnnk0fkhXx8bc3PeqzjnqjzzyWZ3zTOL5JHFznHqSVR0SSTUYkSICAgICAgICAg6Dw9Iy7BYw83MTtMkG/SQDoPqP6gK+Hfs5ueXHXJPTz9kOaN0Mro3DRadFUdEu5tjRIgICAg6K6x1PwjVh1wm3OXu9w0cv6uWl7YuXj+rmt9o51ZuoQEBAQEBAQEBAQZq1iSrZisRHUkTw9p9wdpEZSZSyrfiSi6Sy3JVYiattglaQOQ31H2OwtM56xzcGckuGXmOe1rqs3UICAgILviiVxynwo5RVI2xMHp0BJ/JKvne7n+Hn0b9b3QlR0CAgICAgICAgICAgqU85kqMQhjsF0DSf3EnzM/B/srTKxlnw4Z3dnf3b00/hq68PdHcqPcBxBrWvaD665719la3Gspjz4dpZXkeH6l3njMnDO/0if8jz9Adb+ydMvinzs8fx4pNzH2qEpjswujI7hUss8t8OTHOdq1VC4g67L1oMrhpMnVcHTslD5mDrwFjWk/Yt391rlNzbh4crhnMMvGu393JaOt65d1k7nxAQEBAQEBAQEBAQEBAB0gt0s/Kxja2Rb8dV6cMh+dg/ld1H0PJWmVYZ8EvfHtXzK4hkUTb1B/nUpejvVh/S7sQpuPbcRx8t30Z9qiqjobuOyE+NtNngfojqPQjsVMuqz5OOZzVX4rGAyFaevMx1J85D2Fo22KQbBIHYjqPYaWn01z2c2Fl86/mI2Rw9vGCOSUMfDKT5c0buJr9f96FUuNjo4+XHk8eXYS+H8dlvDYyTqzql0VfM8yIgxylrevbnrn0IK16Zcd+rgnNnx8vRvc3+8fniwemICAgICAgINui2s67C2497K5eBI5muIN7hTNb7q53KY3p8uv8AE+JxWL8OllSqWy/EtDJ3HidIOEk8+2vQclrnjJHB8Py8nJy/Ve2vDhVi9EQEFXDZQ46y5ko8ypOOGePuO49x1CtjdMuXj6528zw0JjEZXljTwcR4efooaTeu7CoSIK+OzJrQuqW4RaqSf6o3Hp7g+h91eZa7VhycW71Y3VdVgMlRGLuY2pNK6N0Ermxy6JYS09D/AN791pjZqyOLmwy68c8p33H58sHqCAgICAgICAgu289JkPDVbFzAmSpLuOT9TNEaP0/4+ivct46YY8Mx5bnPVCVG4gICAgICAgs+GZmw5mMPIDZAWEnpzGv7q+F7uf4iW4J0lSxHZdXdC/zWuILQ0k8lTTeZSzbC5paSHAgj0KJeUBAQEBAQEBAQEBAA2dIB6oCAgIPTXFjg5p0R0KFm1it4ry1bgDLLtNV5nXPl8Nx30bPiGI5AMzcEe45mgWC0cmS9OfbfI/lMu/eK/D3p/p3zPH2c4qOoQEBAQEBAQEBAQEBAQEBAQEFLGZaTH+ZE6MTQSjUkb+jgpl0x5OLq1Z2sb2Qx1KzjG5LFCRrWHViu48Rj7OB7eh7claya3FOPkzmfRyftXPqjpVsTiHXy6axJ8PTi5yzEf0b3JVscdsuXlmE1O99lqLB4PLVLMlGSemazC7zZ3h0btd+Q1v2/Cv042dnL8/lwykym9+zjysneICAgICAgICAgICAgICDdoZKzjpvMryFp6EehHuplsUz48c5qt79s0j8zsNUL+/CQPxvSt1T2ZfKz/NWavLkPEluOqXBldnPgYA1kbfXkOimbyqmWOHDOrzWHLZZskZx1AeXRY706zEfxO/sPRRll6RrxcWvqy8/4RmMMj2sHVx0FRstS4SjXldDZzNeOVh05oY92j22AQr9M93P83OzcxZIPDsF9720srBMY2F79scxrGjqSSAAnRL4qMufLHvliwjFYrXPPQA9vKk/wmp7rfM5PysrvDnk12W7F+COnIdRzgFwedb1oDYPL1Tp/VE57b0yd2E4rF65Z2An0/cyf4TU90/M5PyfzGWbw4ylwftDIwVhK3jiIa54kb3BaCnTrzUTnyy/Bjt4GGoSuEdfNV5JXHTWlj2gntsjSdM90/Nzne4pM8ElaZ8MrC17DpwPoVW9m0sym4xKEiAgICAgINzG4+bJXGVoW7LjzPoApk3WfJyTDHdVMjk4adZ2KxT/3WtTzjkZj6gfy/wDKtb6Rlx8Vt6+Tz6T2/wCufVHS+glpBB0QUHY4XOZWGq/IWJPOiZ+6gjc0EzSnoB3A6la45XW3By8WFy6J97+ke5yyr4bzFR5Et1/lzWpR+syD5R7DZ++0vbGxONuXLjlPHeT+zbOaj/alWWHOVI6bGRh0RjPLQGwRr6qerv5Z3ivTfpu+7QhsRNwtezovibni/TW7Jbwg8h6/RRvt+7W4252evSpvzMIltyvkvyRSRSBsTqWgCQdc/ZW6p3YThy7dp6erWrRPx9jCDiikfHjp3gsIe3mXkc+h6qJ200ysymf3n+k6HM3clgsvHbkEjWxtc35RyPG1V6rZWl48cOTCz/7sneKgBnJNDqxh/wDUKuflr8N+BGVW4gICAgICDoiBhvDgcOVrI7aD6sjHX89PytPGP3ck/q8v6T/LnVm6xB7Y0Oka0nQJ1tC+HaV5JYcmyR2FyT6lSMx02xQnk48jIdjqev47LX18ODLVw11Td89/4eP2dvCZX4ehkGzStZ/uWgF3zg6a3qehPsmu17EznXjvKant9nyxnPhvEFeqyvT+GZ5bHh0DT6DezrrvadXfROLq47lu77+rPXrTxY2sfIkaI8352uAjhj0Pm1+n36KZLr9zOy5Xv/51+7Ux+fvT5+1HLelfDKyVoaXEg7B0NKJldmfDjOOWTv2bFeKzUjw0kmOtztjqTRyxwxnibxOdrfbqDzTvNdi3HLrnVJuzX8NdtJsdC5UqYrJRyXA1vm2WBsbAHAkk+g5Jrt2iereUyyynb2RfEFllvMTPhPEwANDm9HaGtqmV3XRw42YTaUqthAQEBAQW8Ni47DZLt13l0q4293q7sB3J6BXxnrXPy8llmGPmtbL5WTK2hK5rY4428EUbejGjoPc+6rbutOLjnHjqJqhoIAOjtBSoXZpb1eKe9LHC+RrZHeYRwt3zO/op6qp8vH2W2wY1+TfHLkpHQticWyNsgAu2dEbO+muXcdk3Tox9k5lPHPbGZ7nlvcx5c/zA/bydMGgNjuT26KF2csx5Gm5GYtbH8+5gNHY3oa+bls6HX8qd1Xox9mjUr0XxxyyWS2QucCzjDCSASDsjkDyG++1Cyix1D4CWT9pTMssk1w+eSOHjA5cufyk8/bandU6MfZ58UOo154WYnJS2YHtPHxTF2jv/AAm6TDGejm1C4gICAgIMkEfmysZvXEdKYjK6m1vxFKa74cPH8sNRoLtfxvI2Xfg6H/1Wzuuzn+Hm5eS+agKjpEBAQEBAQEBAQEBB/9k='"/>
					</div>
					<div class='right fleft'>
						<div class='line song-control' style='height:30px;'>
							<ul>
								<li><span @click="pause" class='pp glyphicon' :class="{ 'glyphicon-play': !player.play, 'glyphicon-pause': player.play }" title='开始/暂停'></span></li>
								<li @click="next"><span class='forward glyphicon glyphicon-forward' title='下一首'></span></li>
								<li @click="toggleLrc"><span class='lrc-list glyphicon' v-bind:class="{ 'glyphicon-text-width': !player.lrc, 'glyphicon-list': player.lrc }"
										title='切换歌词/列表'></span></li>
								<li @click="togglePlayerMod"><span class='play-type glyphicon' :class="{ 'glyphicon-music': player.mod === 'seq'  , 'glyphicon-repeat': player.mod == 'cycle', 'glyphicon-random': player.mod === 'rand'}" title='播放方式'></span></li>
								<li @click="share">
									<span class='share-qzone glyphicon glyphicon-share' title='分享到QQ空间'></span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class='middle'>
					<div class='line song-info' style='height:24px;background:#fff;'>
						<div class='song-name fleft'><span>{{current.song}}</span></div>

						<div class='song-time fleft text-right'><span class='current-time'>{{ current.current_time }}</span>/<span class='total-time'>{{ current.total_time }}</span></div>
					</div>
					<div class="progress" style='height:5px;margin-bottom:0;'>
						<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="'width: ' + current.percent + '%;'">
							<span class="sr-only">60% Complete</span>
						</div>
					</div>

				</div>
				<div class='song-center'>
					<div class='song-wrap' :class="{ 'transform-lrc': player.lrc }">
						<!---歌曲列表-->
						<div class='song-list'>
							<ul>
								<li v-for="r in songs" :class="{ 'active': current.id === r.id }" :data-index='r.id' :data-id='r.netid' @click="selectSong({ id: r.id, netId: r.netid, title: r.title })">{{(r.id)+'.'+r.title}}</li>
							</ul>
						</div>
						<div class='song-lrc'>

							<div class='lrc-content' :style="{ 'margin-top': -player.lrcline*27+'px'}" >
								<p class="text-center" v-if="LRC.words.length<1">暂无歌词</p>
								<p class='text-center' v-for="(v, k, idx) in LRC.words">
									<span :class="{ 'active': idx === player.lrcline }">{{ v }}</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class='bottom'>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
 /* eslint-disable */ 
import $ from 'jquery'
const songs = require('../../data/songs.json');

export default {
	mounted() {
		// 拉取数据并渲染
		this.songs = songs;
		this.audio = this.$parent.audio;
		var id = this.$route.params.id; 
		
		if (id != undefined) {
			id = parseInt(id);
			this.selectSong({
				id: id,
				netId: this.songs[id-1].netid,
				title: this.songs[id-1].title
			})
		}
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
				pic: 'data:image/jpeg;base64,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',
				mp3: '//pnp.51t.com/23/2070/58459/92018107.m4a',
				song: 'ZARD-坂井泉水',
				current_time: '00:00',
				total_time: '00:00',
				lrc: '歌词',
				duration: 0,
				percent: 0
			},
			songs: [],
			LRC: {
        words:[]
      }
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
			var _this = this;
			this.current.id = song.id;
			this.current.song = song.title;
			var netId = song.netId;
			_this.player.lrcline = 0;
      $.ajax({  
        type: "get",  
        async: false,  
        url: "//music.163.com/api/song/media?id=" + netId,
        dataType: "jsonp",  
        success: function(data){
          var LRC = _this.parseLrc(data.lyric);
					_this.LRC = LRC;
        },  
        error: function(){  
            alert('fail');  
        }  
      });  
			$.get('http://vercel-api-rose.vercel.app/api/proxy?url=music.163.com/api/song/detail?ids=[' + netId + ']')
				.then(function(data) {
          if (typeof data === 'string') data = JSON.parse(data);
					_this.current.pic = data.songs[0].album.blurPicUrl;
					_this.current.total_time = _this.timeParse(data.songs[0].duration);
					_this.current.duration = data.songs[0].duration || 0;
				})
				.catch(function(err) {
					console.log('获取歌曲信息失败！'+JSON.stringify(err));
				});
			_this.play(song.id, song.title, song.netId);
			
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
      let _this = this;
			if (id > 5) {
				$('.song-list').animate({ scrollTop: (id-5)*36})
			}
     	let audio_url = 'http://zard-file-telanx.vercel.app/zard/audio/'+netId+'.mp3';
        _this.$parent.audio.src = audio_url;
        clearInterval(_this.player.timer);
        _this.$nextTick(() => {
          _this.$parent.audio.play();
          _this.player.play = true;
          _this.player.timer = setInterval(_this.updateProgress, 500);
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
			//设置歌词
			var current = { lrc: this.LRC };
			var $ctime = this.$parent.audio.currentTime*1000;
			this.current.current_time = this.timeParse($ctime);
			this.current.percent = (100 * $ctime / this.current.duration) | 0;
			var n_lrc = $('.lrc-content')
			for(var i=0;i<current.lrc.times.length;i++){
				var tt = current.lrc.times;
				if($ctime>=tt[i]&&$ctime<tt[i+1]){
					this.player.lrcline = i;
					}
			}
			if(audio.ended){
				//停止,则播放下一首或者随机播放一首
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
		},
		// 分享接口
		share() {
			var netid = this.current.netId;
			var pic = this.current.pic;
			var songIndex = this.current.id;
			var songname = this.current.song;
			var p = {
				url:'/#music/'+songIndex,
				showcount:'0',/*是否显示分享总数,显示：'1'，不显示：'0' */
				desc:'我正在听ZARD的歌曲《'+songname+'》，也推荐你来听哦^^',/*默认分享理由(可选)*/
				summary:'ZARD',/*分享摘要(可选)*/
				title:songname,/*分享标题(可选)*/
				site:'ZARD',/*分享来源 如：腾讯网(可选)*/
				pics:pic, /*分享图片的路径(可选)*/
				style:'202',
				width:105,
				height:31
			};
			var s = [];
			for(var i in p){
				s.push(i + '=' + encodeURIComponent(p[i]||''));
			}
			window.open('http://connect.qq.com/widget/shareqq/index.html?'+s.join('&'));
		}
	}
}
</script>
<style>
.music-box {
	height:500px;
  border-top:1px solid #aaa;
	padding:0;
	max-width:420px;
	margin:auto;
}
#music .top {
	height:70px;
	border-radius:4px 4px 0 0;
	background:#fff;
}
#music .center {
	min-height:385px;
	background:#fff;
	border-bottom:1px solid #aaa;
	border-top:1px solid #aaa;
}
#music .bottom {
	height:35px;
	background:#fff;
	padding:0 30px;
	border-radius:0 0 4px 4px;
  border-top: 1px solid #aaa;
}
#music .right {
	//width:220px;
	overflow:hidden;
}
#music .fleft {
	float:left;
}
#music .fright {
	float:right;
}
#music .whalf {
	width:48%;
}
#music .song-name {
	width:65%;
  float: left;
	white-space: nowrap;
	overflow: hidden;
}
#music .song-time {
	width:28%;
}
#music .song-control li {
	list-style:none;
	font-size:30px;
	margin:0 10px;
	color:#888;
	padding-top:5%;
	float:left;
}
#music .progress {
  width: 100%;
	height:3px;
}
#music .song-center {
	width:100%;
	overflow-y:auto;
	overflow-x:hidden;
	//padding:10px;
	background:#fff;
	border-top:1px solid #aaa;
	height:380px;
}
#music .song-wrap {
	width:200%;
	    transition: all .3s ease-in-out;
}
#music ul {
	padding:0;
	transition: all .3s ease-in-out;
}
#music .song-list {
	transition: all .3s ease-in-out;
}
#music .song-list li {
	list-style:none;
	padding-left:5px;
	line-height:35px;
	border-bottom:1px solid #ccc;
}
#music .song-list li:hover {
	background:#eee;
	cursor:pointer;
}
#music .song-list li.active {
	color:#fff;
	background:rgb(20,80,132);
}
#music .song-list,.song-lrc {
	float:left;
	height:375px;
	overflow:auto;
	width:50%;
}
#music .song-lrc {
	background:rgba(0,0,0,0.8);
	color:#ccc;
	font-size:12px;
	padding-top:150px;
	height:375px;
	overflow:hidden;
}
#music .song-lrc .active {
	color: #0f0;
}
#music .share-qzone ,.pp,.forward,.lrc-list,.play-type {
	cursor:pointer;
}
#music .share-qzone:hover,.pp:hover,.forward:hover,.lrc-list:hover,.play-type:hover {
	box-shadow:0 0 4px #000;
}
#music .lrc-content {
	transition: all .3s ease;
}
#music .lrc-content p {
	white-space:nowrap;
	overflow:hidden;
}

#music .transform-lrc {
  transition: all .ease .3s;
  transform: translateX(-50%);
}
</style>
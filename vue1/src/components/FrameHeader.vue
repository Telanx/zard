<template>
<div id='header'>
     <div class='container'>
         <div class='head-logo'>
         	<img src='http://www.wezard.net/20th/images/logo_on.png' width=60px height=60px>
         </div>
         <div class='menu'>
             <ul>
                 <li class="{{ page === 'home'?'active':'' }}"><a v-link="{ path: '/home', params:{page:'home'} }">首页</a></li>
                 <li class="{{ page === 'music'?'active':'' }}"><a v-link="{ path: '/music', params:{page:'music'} }">音乐盒</a></li>
                 <li class="{{ page === 'gallery'?'active':'' }}"><a v-link="{ path: '/gallery', params:{page:'gallery'} }">图库</a></li>
                 <li class="{{ page === 'about'?'active':'' }}"><a v-link="{ path: '/about', params:{page:'about'} }">关于</a></li>
             </ul>
         </div>
         <div class='text-logo'>
             <div class='logo-svg line'>
				<svg version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox = "0 0 60 23">
					<path id='path' fill="none"
					stroke = "rgb(19,191,255)"
					stroke-width = "0.4"
					d = "M3.3,2.8 L14.9,2.8 14.9,4.4 7.1,14.6 14.8,14.6 14.8,17.0 2.8,17.0 2.8,15.3 10.6,5.3 3.3,5.2 3.3,2.8   M15.5,17.0 L20.9,2.8 24.7,2.8 30.1,17 26.6,17 25.4,13.8 20,13.8 19,17 15.4,17 M20.7,11.4  L24.7,11.4 22.7,5.3 20.7,11.4 M32,17 L32,2.8 37.4,2.8 C40.4,2.8 42.6,7 39.2,10.6 C39.2,10.6 42.2,13.7 44.4,17 L40.7,17 C40.7,17  38.7,13.9 36.6,11.4 L35.2,11.4 35.2,17.0 32,17.0  M35.2,5.0 L37.3,5.0 C37.3,5.0 39.2,7.0  37.3,9.2 L35.2,9.1 35.2,5.0  M45.9,17.0 L45.9,2.7 51.8,2.8 C51.8,2.8 58,3.9 59.0,8.7 L59.0,10.3 C59.0,10.3 58.1,15.7 51.8,17.0 L45.9,17.0 M49.1,14.5 L49.1,5.2 51.2,5.3  C51.2,5.3 55.9,6.4 55.7,9.5 C55.7,9.5 55.4,13.8 51.2,14.6  L49.1,14.5"
					/>
				</svg>
				</div>
         </div>
     </div>
 </div>
</template>
<script>
export default {
	props:['page']
}
</script>

<style>
@import '../assets/index.css'
</style>
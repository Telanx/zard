<template>
<div class="printer-content" v-html="text"></div>
</template>
<script>
/* eslint-disable */
export default {
	name: 'printer',
	props: {
		data: {
			type: Array
		}
	},
	data() {
		return {
			text: ''
		}
	},
	mounted() {
		let dft = {
			speed: 100,
			sspeed: 1000,
			text: 'Hello world',
		};
		let ops = Object.assign(dft, { text: this.data.join('') });
		let str = ops.text.replace(/(\s){2,}/g, " ");
		let index = 0;
		let _this = this;
		function timer () {
			var args = arguments;
			var current = str.slice(index, index + 1);
			if (current == '<') {
				index = str.indexOf('>', index) + 1;
			} else {
				index++;
			}
			if (index < str.length - 1) {
				_this.text = (str.substring(0, index) + (index & 1 ? '_' : ''));
				setTimeout(timer, ops.speed);
			} else {
				_this.text = (str.substring(0, index));
				// 通知结束
				_this.$emit('end');
				clearTimeout(timer);
			};
		}
		setTimeout(timer, ops.speed);
	}
};
</script>

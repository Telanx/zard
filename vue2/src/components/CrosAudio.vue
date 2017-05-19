<template>
<div class="crosaudio">
  <iframe ref="crosaudio" src="javascript:'<audio></audio>'"></iframe>
</div>
</template>
<script>
export default {
  name: 'crosaudio',
  data() {
    return {
      audio: null,
    };
  },
  mounted() {
    this.audio = this.$refs.crosaudio.contentWindow.document.getElementsByTagName('audio')[0];
  },
};
</script>

<template>
<div class="crosaudio">
  <audio ref="crosaudio"></audio>
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
    this.audio = this.$refs.crosaudio;
  },
};
</script>

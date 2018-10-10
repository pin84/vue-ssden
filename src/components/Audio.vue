<template>

    <audio autoplay ref="audio">
      <source :src="require('../assets/mp3/'+mp3_name+'.mp3')">
    </audio>
</template>
<script>
export default {
  props: {
    mp3_name: '',
    flag: true
  },

  data() {
    return {

    }
  },

  mounted() {
    this._playa()
  },

  methods: {
    _playa() {
      let audio = this.$refs.audio
    }
  }

}
</script>
<style lang='stylus' scoped>

</style>
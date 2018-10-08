<template>
  <audio >
    <source :src="require('../assets/mp3/'+mp3_name+'.mp3')"> 
  </audio>
</template>
<script>
export default {
  props: {
    mp3_name: ''
  },

  data(){
    return{

    }
  },

  computed:{
    aaa:function(){
      return this.mp3_name
    }
  },


  mounted() {
  },

}
</script>
<style lang='stylus' scoped>

</style>
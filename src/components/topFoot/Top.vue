<template>
<div class="wrapper">
  <div class="back"
   ref="back"
   @touchstart="backTouchstart"
   @touchend="backTouchend"
   ></div>
  <div class="right">
    <!-- <span class="search"></span> -->
    <!-- <span></span> -->
  </div>
</div>
</template>
<script>
export default {
  methods:{
    backTouchstart(){
      let back = this.$refs.back
      back.style.backgroundColor = '#006699'
    },

    backTouchend(e){
      let back = this.$refs.back
      back.style.backgroundColor = ''
      this.$root.eventHub.$emit('closeBook') //cover.vue
      // this.$root.eventHub.$emit('toggleTopFoot',e) //book.vue
    }
  }
}
</script>
<style lang='stylus' scoped>
.wrapper
  width 100%
  height 40px
  background #333
  display flex
  justify-content space-between
  padding-right 10px 
  box-sizing border-box
  .back
    width 40px
    height 40px
    background url(../../assets/icon/back.png) no-repeat center center
  .right
    .search
      display inline-block
      width 40px
      height 40px
      background url(../../assets/icon/search.png) no-repeat center center 
    
    
</style>
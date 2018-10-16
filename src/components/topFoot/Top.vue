<template>
<div class="wrapper">
  <div class="back"></div>
  <div class="right">
    <span class="search"></span>
    <span></span>
  </div>
</div>
</template>
<script>
export default {
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
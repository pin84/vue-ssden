<template>
  <div class="wrapper">
    <div class="main">
      <div class="show">
        <img src="" alt="">
      </div>
      <div class="btn">
        <input type="file"  value="选择图片" class="select">
        <input type="button" value="上传图片" class="upload">
      </div>
    </div>
    <div class="preview">
      <span>预览区</span>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang='stylus' scoped>
.wrapper
  display flex
  .main
    width 500px
    height 400px
    border 1px solid blue 
    margin-right 10px 
    .show
      width 100%
      height 80%
      border 1px solid pink
    .btn
      display flex
      height 20%
      justify-content center
      align-items center
      .select
        display block
  .preview
    width 150px
    height 120px
    border 1px solid blue
    position relative
    span 
      position absolute 
      bottom -25px
      left 0
      font-size 10px
      color #fff
      background gray
      padding 3px 10px
      border-radius 10px
</style>
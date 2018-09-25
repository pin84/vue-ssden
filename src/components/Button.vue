<template>
<div class="wrapper">
  <input type="file"  name="file" class="inputfile">
  <label for="file" class="btn">选择文件</label>
</div>
</template>
<script>
export default {
}
</script>
<style lang='stylus' scoped>
.wrapper
  // display flex
  border 1px solid red
  position relative
  .inputfile
    position absolute
    clip:rect(0,0,0,0);
</style>
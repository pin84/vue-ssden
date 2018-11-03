<template>
<div class="partTwo">
  <div class="index">
    <h2>Part Two Grammar Focus</h2>
    <strong>名词:</strong>
    <span>名词是表示人或物的名称的词。</span>
  </div>
  <P01 />
  <P02 />
</div>
</template>
<script>
import P01 from './P01'
import P02 from './P02'
export default {
  components:{
    P01,
    P02
  }
}
</script>
<style lang='stylus' scoped>
.partTwo
  position relative
  width 100%
  .index
    padding-bottom 10px
    h2
      color red
      padding 10px 0
      text-align center 

</style>
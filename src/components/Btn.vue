<template>
  <!-- <div> -->
  <input class="_btn" type="submit" :value='msg' ref="btn" :class="isactive" />
  <!-- </div> -->
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      default: '上传'
    },
    flag: {
      type: Boolean,
      default: false
    },
  },

  computed: {
    isactive: function () {
      return this.flag ? 'isactive' : 'navigator'
    }
  },
}
</script>
<style lang='stylus' scoped>
._btn
  border none
  outline none
  padding 5px 20px
  border-radius 5px
  color #fff
  font-size 14px
.isactive
  background #336699
  cursor pointer
  &:hover
    background #336666
.navigator
  background gray
  cursor not-allowed 
</style>
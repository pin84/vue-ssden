<template>
  <div class="wrapper">
    <h1 class="title">创新实用英语</h1>
    <ul class="nav">
      <li class="preview">目录</li>
    </ul>
    <!-- <ul class="list" v-for="(item,index) in titles" :key="index"> -->
    <ul class="list">
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>2222222</li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      titles: []
    }
  },
  mounted() {
    this.initData()
  },

  methods: {
    initData() {
      axios.get('http://192.168.3.107:8081/web/dfbook/findBookPreview').then((response) => {
        console.log(response.data);
        this.titles = response.data
      })
    }
  }
}
</script>
<style lang='stylus' scoped>
.wrapper
  width 100% 
  height 100%
  background #FFFFCC
  position relative
  transform scale3d(1,1,1)
  .title
    text-align center
    font-size 18px
    padding-top 10px
  .nav .preview
    padding 10px 0
    box-sizing border-box
    border-bottom 1px solid #CCCCCC
  .list
    padding 10px
    box-sizing border-box
    position fixed
    width 99%
    top 86px
    bottom 0
    overflow-y scroll
    overflow-x hidden
    li
      padding 5px 0
      &:first-child
        padding-top 10px

</style>
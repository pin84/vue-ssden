<template>
  <div class="wrapper">
    <h1 class="title">新时代大学英语</h1>
    <ul class="nav">
      <li class="preview">目录</li>
    </ul>
    <ul class="list" ref="list">
      <li v-for="(item,index) in titles" :key="index" @touchstart='liTouchstart' @touchend='toDetailPage' ref="oli">
        {{item.title}}
      </li>
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
    liTouchstart(e) {
      e.target.style.background = '#FFCC00'
    },

    toDetailPage(e) {
      let target = e.target
      target.style.background = ''
      this.$root.eventHub.$emit('getData', target.innerText) //detail.vue
      this.$root.eventHub.$emit('showNav') //book.vue
    },

    initData() {
      axios.get('http://data.iathena.top/web/dfbook/findBookPreview').then((response) => {
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
    padding 10px 0 0 10px
    box-sizing border-box
    border-bottom 1px solid #CCCCCC
  .list
    padding 10px
    box-sizing border-box
    position fixed
    width 97%
    top 66px
    bottom 0
    overflow-y scroll
    overflow-x hidden
    li
      padding 5px
      border-bottom 1px solid #ccc
      &:first-child
        padding-top 10px

</style>
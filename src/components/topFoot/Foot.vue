<template>
  <div class="foot">
    <PageToggle />
    <ul class="list">
      <li @touchstart='liClickStart' @touchend='liClickEnd' v-for="(item,index) in mulu" :key="index" >
        {{item}}
      </li>
    </ul>
  </div>
</template>
<script>
import PageToggle from '../PageToggle'
export default {
  data() {
    return {
      mulu: ['目录', '设置']
    }
  },
  components: {
    PageToggle
  },
  updated() {
    // this.liClick()
  },
  methods: {
    liClickStart(e) {
      let target = e.target
      if (target.tagName !== 'LI') {
        target.parentNode.style.background = '#99CCCC'
        return
      }
      target.style.background = '#99CCCC'
    },
    liClickEnd(e) {
      let target = e.target
      if (target.tagName !== 'LI') {
        target.parentNode.style.background = ''
        return
      }
      target.style.background = ''
      if(target.innerText === '目录'){
        this.$root.eventHub.$emit('showNav')
      }
    },
    
  }
}
</script>
<style lang='stylus' scoped>
.foot
  width 100% 
  height 100px
  background #333
  display flex
  flex-direction column
  position relative
  .list
    width 90%
    margin 0 auto
    box-sizing border-box
    display flex
    li
      width 20% 
      text-align center
      color #fff
      font-size 12px
      display flex
      flex-direction column
      padding 5px 0
      &:before
        content:''
        width 100%
        height 20px
        background url(../../assets/icon/mulu.png)  no-repeat 50% 0px
       
</style>
<template>
  <div class="wrapper">
    <!-- <Cover class="cover" /> -->
    <div class="book" @click="toggleTopFoot">
      <Top class="top" ref="top" />
      <div class="main">
        <router-view />
        <!-- <Nav class="nav"  /> -->
      </div>
      <Foot class="foot" ref="foot" />
    </div>
  </div>
</template>
<script>

// import PageToggle from './PageToggle'
import Nav from './Nav'
import Top from './topFoot/Top'
import Foot from './topFoot/Foot'
import Cover from './topFoot/Cover'
export default {
  data() {
    return {
      flag: true,
      TFflag: true
    }
  },
  components: {
    // PageToggle,
    Nav,
    Top,
    Foot,
    Cover,
  },
  created() {

  },

  mounted() {
  },
  updated() {
    // this.toggleNav()
  },

  methods: {
    toggleTopFoot(e) {
      let target = e.target
      let wrapper = this.$refs.wrapper,
        top = this.$refs.top.$el,
        foot = this.$refs.foot.$el
      if (target.tagName === 'INPUT') { //上一篇 下一篇时
        return
      }
      if (this.TFflag) {
        if (target.className === 'text' || target.className === 'content' || target.className === 'book') {
          top.style.transform = `translateY(0%)`
          foot.style.transform = `translateY(0%)`
          this.TFflag = false
        }
      } else {
        top.style.transform = `translateY(-100%)`
        foot.style.transform = `translateY(100%)`
        this.TFflag = true
      }
    },
  }

}
</script>
<style lang='stylus' scoped>
.wrapper
  width 100%
  .cover
    position fixed 
    width 100%
    height 100%
    top 0
    left 0
    right 0
    bottom 0
    z-index 2
  .book
    position relative
    height 100vh
    .main
      padding 5px
      position relative
      box-sizing border-box
      margin-bottom 20px
      // margin-top -40px //减去TOP的高度
      .nav
        position fixed
        top 0
        left 0
        width 80%
    .top, .foot
      transition 800ms
      transform translateY(-100%)
      position fixed
      left 0
      z-index 2
    .foot
      bottom 0
      transform translateY(100%)


</style>
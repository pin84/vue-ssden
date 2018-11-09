<template>
  <div class="wrapper">
    <Cover class="cover" />
    <div class="book" @click="toggleTopFoot" ref="book">
      <Top class="top" ref="top" />
      <div class="main">
        <router-view />
        <Nav class="nav" />
      </div>
      <Foot class="foot" ref="foot" />
    </div>
  </div>
</template>
<script>

import Nav from './Nav'
import Top from './topFoot/Top'
import Foot from './topFoot/Foot'
import Cover from './topFoot/Cover'
export default {
  data() {
    return {
      // flag: true,
      TFflag: true,
      exclude: ['Unit 1 Communication', 'Part One Reading', 'Part Two Grammar Focus', '名词', 'Part Three Practical Writing', 'Part Four Translation Focus', '词义的选择', '[+]', '[-]'],

    }
  },
  components: {
    Nav,
    Top,
    Foot,
    Cover,
  },
  created() {


  },

  mounted() {
    this.$root.eventHub.$on('toggleTopFoot', (e) => {  //top.vue
      this.toggleTopFoot(e)
    })
    // this.pageChange()
  },
  updated() {

  },
  methods: {

    pageChange() {
      let book = this.$refs.book
      let start, end
      let SWidth = document.body.scrollWidth / 5;
      let curUrl = window.location.href


      book.addEventListener('touchstart', (e) => {
        start = e.touches[0].pageX
      })

      book.addEventListener('touchend', (e) => {
        end = e.changedTouches[0].pageX
        let distance = end - start
        if (Math.abs(distance) > SWidth) {
          if (distance > 0) {
            this.$root.eventHub.$emit('toPreview')
            console.log('next');
          } else {
            console.log('preview');
            this.$root.eventHub.$emit('toNext')
          }
        }




      })






    },

    toggleTopFoot(e) {
      let target = e.target,
        top = this.$refs.top.$el,
        foot = this.$refs.foot.$el

      if (target.parentNode.id !== 'isToggle' || target.className.split(' ')[1] === 'nav') {
        if (this.TFflag && target.className.split(' ')[0] !== 'audio' && target.className !== 'symbol' && target.className.split(' ')[0] !== 'CH_EN' && target.className !== 'preview' && target.className !== 'next') {
          top.style.transform = `translateY(0%)`
          foot.style.transform = `translateY(0%)`
          this.TFflag = false
        } else {
          top.style.transform = `translateY(-100%)`
          foot.style.transform = `translateY(100%)`
          this.TFflag = true
        }
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
    .main
      position relative
      box-sizing border-box
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
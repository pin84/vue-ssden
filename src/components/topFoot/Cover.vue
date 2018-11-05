<template>
  <div class="cover" ref="cover" @click="openbook">
    <div class="move" ref="move">
      <div class="img_3d" ref="img_3d">
        <img src="../../assets/book/cover_1.jpg"  alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: true
    }
  },
  mounted(){
    this.$root.eventHub.$on('closeBook',()=>{
      this.openbook()
    })
  },
  
  methods: {
    openbook() {
      let img_3d = this.$refs.img_3d,
      cover = this.$refs.cover
      if(this.flag){
        img_3d.style.transform = 'rotateY(-180deg)'
        setTimeout(()=>{
          cover.style.display = 'none'
        },800)
        this.flag = false
      } else {
        cover.style.display = 'block'
        let s = setTimeout(()=>{
          img_3d.style.transform = 'rotateY(0deg)'
        },100)
        this.flag = true
      }
    }
  }
}
</script>
<style lang='stylus' scoped>
.cover
  width 100vh
  height 100vh
  transition 800ms
  .move
    perspective 750px
    width 100%
    height 100%
    .img_3d
      width 100%
      height 100%
      transform-style preserve-3d
      transition 1800ms
      transform-origin 0 50%
      img
        width 100%
        height 100%
</style>
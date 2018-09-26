<template>
  <form class="wrapper" ref="imgForm">
    <div class="main">
      <div class="show">
        <img src="" alt="">
      </div>
      <div class="btn">
        <FileBtn class="choosefile" :flag=false  ref="fileBtn" />
        <Btn class="upload" msg='上传' :flag=true  ref="upload"/>
      </div>
    </div>
    <div class="preview" ref="preview">
      <span>预览区</span>
    </div>
  </form>
</template>
<script>
import FileBtn from './FileBtn'
import Btn from './Btn'
export default {
  components: {
    FileBtn,
    Btn
  },
  mounted(){
    this.getdata()
  },

  methods:{
    getdata(){
      let upload = this.$refs.preview
      let imgForm = this.$refs.fileBtn.$el

      imgForm.addEventListener('change',(e)=>{
        let formData = new FormData()
        formData.append('userfile',imgForm.firstChild.files[0])

        console.log(formData.getAll('userfile'));
        
      })
      
    }
  }
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
    box-sizing border-box
    .show
      width 100%
      height 80%
      border 1px solid pink
      box-sizing border-box
    .btn
      display flex
      height 20%
      justify-content center
      align-items center
      .upload
        margin-left 60px
      .choosefile.lab
        background red
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
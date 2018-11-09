<template>
  <div class="section">
    <h3>Section 2 Sentence Analysis</h3>
    <ul class="list">
      <li class="item" ref="myli" v-for="(item,index) in data" :key="index">
        <strong>{{item.strong}}</strong>
        <p>{{item.p1}}</p>
        <p>{{item.p2}}</p>
      </li>
    </ul>
    <!-- <PageToggle /> -->
  </div>
</template>


<script>
import PageToggle from '../../PageToggle'
export default {
  data() {
    return {
      data: [],
      color: ['#CC9999', '#009933', '#3399CC', '#99CCCC']
    }
  },
  components: {
    PageToggle
  },

  created() {
    this._initData()
  },
  updated() {
    this.addBackground()
  },

  methods: {
    addBackground() {
      let mylis = this.$refs.myli
      let num = 0
      mylis.forEach((item) => {

        item.style.background = `${this.color[num]}`
        num++
        if (num > this.color.length - 1) {
          num = 0
        }
      })
    },
    _initData() {
      fetch('http://data.iathena.top/web/xsden/initData_s2').then((res) => {
        // fetch('http://localhost:9000/web/xsden/initData_s2').then((res) => {
        // fetch('http://192.168.3.107:9000/web/xsden/initData_s2').then((res) => {
        return res.json()
      }).then((myjson) => {
        this.data = myjson
      })
    }
  }

}
</script>


<style lang='stylus' scoped>
.section
  position relative
  width 100%
  padding 5px
  box-sizing border-box
  h3
    color #fff
    width 80%
    text-align center
    padding 20px 0
    margin 20px auto
    background url(../../../assets/img/s1_item_bg.jpg) no-repeat center center 
    background-size cover
    transform skewX(160deg)
  .list
    position relative
    line-height 24px
    .item
      margin-bottom 10px
      border 1px solid black
      border-radius 5px 
      padding 5px 
      box-shadow 3px 3px 5px #999 
      p
        text-indent 1em
</style>

<template>
  <div class="section">
    <h3>Section 2 Sentence Analysis</h3>
    <ul class="list">
      <li class="item" v-for="(item,index) in data" :key="index">
        <strong>{{item.strong}}</strong>
        <p>{{item.p1}}</p>
        <p>{{item.p2}}</p>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      data: []
    }
  },

  created() {
    this._initData()
  },

  methods: {
    _initData() {
      fetch('http://data.iathena.top/web/xsden/initData_s2').then((res) => {
      // fetch('http://192.168.3.107:9000/web/xsden/initData_s2').then((res) => {
      // fetch('http://localhost:9000/web/xsden/initData_s2').then((res) => {
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
  h3
    color red
    text-align center
    margin 10px 0
  .list
    position relative
    line-height 24px
    .item
      margin-bottom 10px
      p
        text-indent 1em
</style>

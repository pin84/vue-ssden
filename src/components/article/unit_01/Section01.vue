<template>
  <div class="section">
    <h3>Section 1 Vocabulary</h3>
    <ul class="list">
      <li class="item" v-for="(item ,index ) in data" :key="index">
        <strong class="first" @touchstart='ts' @touchend='te' ref="strong">
          {{item.strong}}
          <Audio :mp3_name='item.mp3' />
        </strong>
        <div class="content" >
          <span>{{item.c1}}</span>
          <p>{{item.zh1}}</p>
        </div>

        <div class="content" >
          <span>{{item.c2}}</span>
          <p>{{item.zh2}}</p>
        </div>
      </li>
    </ul>
    <div class="names">
      <h4>Proper Names</h4>
      <ul class="list">
        <li>1.	Jane [] （女子名）简</li>
        <li>2.	Manchester [] 曼彻斯特（英格兰西北部城市）</li>
        <li>3.	Moss Side [] 莫斯赛德（地名）</li>
      </ul>
    </div>
  </div>
</template>


<script>
import Audio from '../../Audio'
export default {
  data() {
    return {
      items: {

        a: {
          strong: '1. the other day 前几天；不久前的一天',
          mp3: 'a01',
          contents: {
            c1: {
              span: '1) I saw him in town the other day',
              p: '我前几天在镇上见过他'
            },
            c2: {
              span: '2)It was a terrible piece of work you turned in the other day.',
              p: '那天你交的作业太糟糕了。'
            }
          }
        },



        b: {
          strong: '2. arrange []  v. 安排；准备',
          mp3: 'a02',
          contents: {
            c1: {
              span: '1)	They arranged to meet at seven o’clock.',
              p: '他们约好7点钟见面。'
            },
            c2: {
              span: '2)	I have arranged to meet him at the restaurant. ',
              p: '我和他约好了在饭馆见面。'
            }
          }
        },
      },
      data: [],
    }
  },
  components: {
    Audio
  },

  mounted() {
    this._initData()
  },
  methods: {

    _initData() {
      fetch('http://data.iathena.top/web/xsden/initData_1').then((res) => {
        // fetch('http://localhost:9000/web/xsden/initData_1').then((res) => {
      // fetch('http://192.168.3.107:9000/web/xsden/initData_1').then((res) => {
        return res.json()
      }).then((myjson) => {
        this.data = myjson
      })
    },

    ts(e) {
      e.target.style.background = '#6699CC'
    },
    te(e) {
      e.target.style.background = ''
      this.$root.eventHub.$emit('stopPlay')
      e.target.children[0].play()
    }
  }

}
</script>


<style lang='stylus' scoped>
.section
  position relative
  h3
    color red
    text-align center
    margin 10px 0
    &::before
      content ''
      display inline-block
      width 20px
      height 20px
      background url(../../../assets/icon/whisper_1.png)   center center
      margin-right 10px
      vertical-align top
  .list
    position relative
    line-height 24px
    .item
      position relative
      .content
        margin-left 1em
        display flex
        flex-direction column
        p
          text-indent 1em
  .names
    margin-top 10px 
    li
      text-indent 1em       

</style>

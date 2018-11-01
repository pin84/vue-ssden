<template>
  <div class="section">
    <h3>Section 1 Vocabulary</h3>
    <ul class="list">
      <!-- <li class="item">
        <div>
          <strong class="first" @touchstart='ts' @touchend='te' ref="strong">1. the other day 前几天；不久前的一天
            <Audio mp3_name='a01' />
          </strong>
        </div>
        <div class="centence">
          <div class="num">1)</div>
          <div>
            <span>I saw him in town </span><strong>the other day. </strong>
            <p>我前几天在镇上见过他</p>
          </div>
        </div>
        <div class="centence">
          <div class="num">2)</div>
          <div>
            <span>It was a terrible piece of work you turned in </span><strong>the other day. </strong>
            <p>那天你交的作业太糟糕了。</p>
          </div>
        </div>
      </li>
      <li class="item">
        <div>
          <strong class="first" @touchstart='ts' @touchend='te' ref="strong">2. arrange [] v. 安排；准备
            <Audio mp3_name='a02' />
          </strong>
        </div>
        <div class="centence">
          <div class="num">1)</div>
          <div>
            <span>I saw him in town </span><strong>the other day. </strong>
            <p>我前几天在镇上见过他</p>
          </div>
        </div>
        <div class="centence">
          <div class="num">2)</div>
          <div>
            <span>It was a terrible piece of work you turned in </span><strong>the other day. </strong>
            <p>那天你交的作业太糟糕了。</p>
          </div>
        </div>
      </li> -->
      <p>{{tes}}</p>
      <li class="item" v-for="(item ,index ) in s1_strong" :key="index">
        <strong class="first" @touchstart='ts' @touchend='te' ref="strong">
          {{item.strong}}
          <Audio :mp3_name='item.mp3' />
        </strong>
        <div class="content" v-for="(content , index ) in item.contents" :key="index">
          <span>{{content.span}}</span>
          <p>{{content.p}}</p>
        </div>
      </li>

    </ul>
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
      tes: '',
      s1_strong: [],
      s1_contents:[]
    }
  },
  components: {
    Audio
  },

  mounted() {
    this._initData()
  },
  methods: {
    handleData(data) {
      let arr = []
      data.forEach((item) => {
        let obj = {}
        obj['strong'] = item.strong
        obj['mp3'] = item.mp3
        arr.push(obj)
      })
      return arr
    },

    handleData_1(data){
      
      let arr = [1,2,4,1,6,4]
      let result = []

      for(let i = 0; i < arr.length ; i++){
        for(let j = i+1; j < arr.length; j++){
          if(arr[i] === arr[j]){
            j = ++i
          }
        }
        result.push(arr[i])
      }

      console.log(result);
      
      
    },

    _initData() {
      fetch('http://localhost:9000/web/xsden/initData_1').then((res) => {
        return res.json()
      }).then((myjson) => {
        // console.log(myjson);
        
        this.s1_strong = this.handleData(myjson)
      })

      fetch('http://localhost:9000/web/xsden/initData_2').then((res) => {
        return res.json()
      }).then((myjson) => {
        this.handleData_1(myjson)
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

</style>

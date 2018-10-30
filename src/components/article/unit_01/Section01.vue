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
      <li class="item" v-for="(item ,index ) in items" :key="index">
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
          strong: '2.	arrange []  v. 安排；准备',
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
      }
    }
  },
  components: {
    Audio
  },
  methods: {
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

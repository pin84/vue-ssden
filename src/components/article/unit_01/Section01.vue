<template>
  <div class="section">
    <h3>Section 1 Vocabulary</h3>
    <ul class="list">
      <li class="item">
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
      </li>

    </ul>
  </div>
</template>


<script>
import Audio from '../../Audio'
export default {
  data() {
    return {

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
    margin-bottom 10px
  .list
    position relative
    line-height 24px
    .item
      position relative
      // .first
      //   font-size 1.8rem
      .centence
        margin-left 1em
        display flex
        .num
          margin-right 10px

</style>

<template>
  <div class="section">
    <h3>Section 1 Vocabulary</h3>
    <ul class="list">
      <li class="item">
        <strong class="first">1.	the other day 前几天；不久前的一天</strong>
        <div class="centence">
          <div class="num">1)</div>
          <div >
            <span>I saw him in town </span><strong>the other day. </strong>
            <p>我前几天在镇上见过他</p>
          </div>
        </div>
        <div class="centence">
          <div class="num">2)</div>
          <div >
            <span>It was a terrible piece of work you turned in  </span><strong>the other day. </strong>
            <p>那天你交的作业太糟糕了。</p>
          </div>
        </div>
      </li>

    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {

    }
  }

}
</script>


<style lang='stylus' scoped>
.section
  position relative
  h3
    color red
  .list
    position relative
    line-height 24px
    .item
      position relative
      .first
        font-size 1.8rem
      .centence
        margin-left 1em
        display flex
        .num
          margin-right 10px

</style>

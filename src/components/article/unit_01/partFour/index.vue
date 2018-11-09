<template>
  <div class="wrapper">
    <h2 class="title">Part Four Translation Focus</h2>
    <div class="ex">
      <h3>词义的选择</h3>
      <p>词是句子的基本构建单位。如何选择正确的词义，是翻译过程中首先要解决的问题。在英语和汉语中，一词多义的现象都十分普遍。同样，一个简单的字或词语，在不同的上下文中，就可能有不同的含义，这就需要我们依靠具体的语境来判断某个字或词语的意义。</p>
      <p>在翻译过程中，如果仅拘泥于词典提供的基本释义，机械地在两种语言中寻找对应的词语，是有碍译文质量的。译者只有在掌握词典基本释义的基础上，根据具体的语言环境和搭配习惯确定和选择词义，才能进行不同的翻译搭配，并确定词义。</p>
      <p>词义选择可以从以下三个方面着手。</p>
    </div>

    <div class="detail" >
      <h3>1. 根据搭配确定词义</h3>
      <ul class="list">
        <li>英语和汉语都具有各自的组合规律或搭配习惯。因此，在翻译中，可以通过词之间的固定关系选择词及确定词义。</li>
        <li>下面，我们以“work”一词为例，来看不同搭配中的不同词义。</li>
        <li>1)	Most people have to work in order to live.
          <p>大多数人均须工作以维持生活。</p>
        </li>
        <li>2)	My plan worked, and I got them to agree.
          <p>我的计划奏效了，我让他们同意了。</p>
        </li>
        <li>3)	Her face worked as she stared at him in terror.
          <p>她惊恐地注视着他，吓得脸也抽动起来。</p>
        </li>
        <li>4)	Rain has worked in through the roof.
          <p>雨水透过房顶逐渐渗到屋子里来了。</p>
        </li>
        <li>5)	My watch doesn’t work.
          <p>我的表不走了。</p>
        </li>
      </ul>
    </div>
    <div class="detail" >
      <h3>2. 根据上下文确定词义</h3>
      <ul class="list">
        <li>在英语中，同一个词在不同的场合往往有不同的含义，因此翻译中要根据语境来判断和确定某个词在特定场合下所具有的含义，以达到翻译的通顺流畅。</li>
        <li>下面，我们以“figure”为例。</li>
        <li>1)	He has an income of six figures.
          <p>他的收入是六位数的。</p>
        </li>
        <li>2)	The central figure in the painting is the artist’s daughter.
          <p>画中间的那个人是画家的女儿。</p>
        </li>
        <li>3)	She’s a fine figure of a woman.
          <p>她身材苗条。</p>
        </li>
        <li>4)	The figure on Page 22 shows a map of Africa.
          <p>第22页的插图是非洲地图。</p>
        </li>
      </ul>
    </div>
    <div class="detail" >
      <h3>3. 根据词性确定词义</h3>
      <ul class="list">
        <li>很多英文单词有多种词性。遇到这种情况时，如果不弄清楚词性，常常就会将词义搞错，进而影响对原文的正确理解和准确翻译。因此，在翻译中，我们可以根据语法关系来辨别关键词的词性，以便准确地判断词义。</li>
        <li>下面，我们以“round”一词为例。</li>
        <li>1)	The Earth is not completely round. (形容词)
          <p>地球并不完全是圆的。</p>
        </li>
        <li>2)	Let’s go into the museum and have a look round. (副词)
          <p>让我们进博物馆转一转。</p>
        </li>
        <li>3)	Cut the pastry into small rounds, one for each pie. (名词)
          <p>把油酥面团切成小圆片，每一片做一个馅饼。</p>
        </li>
        <li>4)	The Earth moves round the Sun. (介词)
          <p>地球环绕太阳运行。</p>
        </li>
      </ul>
    </div>
    <PageToggle />
  </div>
</template>


<script>
import PageToggle from '../../../PageToggle'
export default {
  components:{
    PageToggle
  },
}
</script>


<style lang='stylus' scoped>
.wrapper
  position relative
  line-height 24px
  box-sizing border-box
  .title
    padding 10px 0
    text-align center 
    padding 20px 0 5px 0
    background #339999
    box-shadow 3px 3px 5px #666
    margin-bottom 6px
  .ex
    padding 5px
    h3 
      color #fff
      width 80%
      text-align center
      padding 10px 0
      margin 10px auto
      background url(../../../../assets/img/s1_item_bg.jpg) no-repeat center center 
      background-size cover
      transform skewX(160deg)
    p
      text-indent 1em
  .detail
    padding 5px
    h3
      display inline
      color #006699
      border-bottom 2px solid #009966
    .list
      width 100%
      li
        text-indent 1em
        p
          text-indent 2em
</style>

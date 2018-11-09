<template>
  <div class="wrapper">
    <h3 class="title">2. 名词的格</h3>
    <ul class="list">
      <li class="item">
        <h4>2.1 名词所有格的构成</h4>
        <p>英语中，有很多名词都是由名词加-’s来表示所有关系的，此形式称为名词所有格，其构成主要有以下几种情况：</p>
        <p>(1) 单数名词和不以-s结尾的复数名词一般在词尾加-’s，如：my sister’s book, Linda’s pen, policemen’s opinions, women’s hobbies</p>
        <p>(2) 以-s结尾的复数名词，则只要加一个-’即可，如：the teachers’ office, workers’ time</p>
        <p>(3) 复合名词和作为一个整体的名词短语则在最后一个词的词尾加-’s，如：the Secretary of State’s visit, my brother-in-law’s friend</p>
        <p>(4) 以-s结尾且其发音为[]的专有名词，其所有格形式用-’s或-’均可，如：Mr. Jones’ house或Mr. Jones’s house</p>
        <p>但以-s结尾且其发音不是[]的专有名词，其所有格形式用-’s, 如：Ross’s family</p>
      </li>
      <li class="item">
        <h4>2.2 名词所有格的用法</h4>
        <p>(1) 表示有生命的名词，尤其用于人或较高级动物的名词：</p>
        <p>1) What’s your favorite children’s book from when you were a kid ?</p>
        <p>2) From the plane, we had a bird’s eye view of Manhattan.</p>
        <p class="middle">(2) 表示时间、距离、价格等名词：</p>
        <p>1) The winner will receive eighty pounds’ worth of books.</p>
        <p>2) It’s about half an hour’s train ride from here.</p>
        <p class="middle">(3) 表示地理、国家、城市等地方的名词：</p>
        <p>1) The Burj Khalifa, now the world’s tallest building, is 2,717 feet high.</p>
        <p>2) How is Chicago’s weather in spring?</p>
        <p class="middle">(4) 表示集体、机构等的名词：</p>
        <p>1) They asked for further clarification of the government’s plans.</p>
        <p>2) The school’s music group will be giving a big show tomorrow night.</p>
        <p class="middle">(5) 用在某些固定的词组中：</p>
        <p>1) She was at her wit’s end wondering how she’d manage to finish it in time.</p>
        <p>2) She paused, imagining the scene in her mind’s eye.</p>
      </li>
      <li class="item">
        <h4>2.3 所有格所修饰词省略的情况</h4>
        <p>(1) 名词所有格所修饰的词在上文已经出现过，可以省略，以避免重复：</p>
        <p>1) —Whose car is this? </p>
        <p class="it"> —It’s Peter’s.</p>
        <p>2)	Her father seems to be stricter than Mary’s.</p>
        <p class="middle">(2)	可以用来表示店铺、教堂、公司的名字或表示某人的家：</p>
        <p>1)	She often does her shopping at Macy’s.</p>
        <p>2)	I went to Jason’s, only to find that he was at his cousin’s.</p>
        <p class="middle">(3)	定冠词the加上某些名词的所有格表示一种场所：</p>
        <p>1)	I’m going to the barber’s to get my hair cut.</p>
        <p>2)	They’re freshly baked. I fetched them from the baker’s this morning.</p>
      </li>
    </ul>
    <!-- <PageToggle /> -->
  </div>

</template>


<script>
import PageToggle from '../../../PageToggle'
export default {
components:{
  PageToggle
}
}
</script>


<style lang='stylus' scoped>
.wrapper
  width 100%
  padding 5px
  box-sizing border-box
  background #f8f8f8
  .title
    color #fff
    width 80%
    text-align center
    padding 10px 0
    margin 10px auto
    background url(../../../../assets/img/s1_item_bg.jpg) no-repeat center center 
    background-size cover
    transform skewX(160deg)
  .list
    width 100%
    .item
      padding 5px 
      margin 20px 0 
      line-height 24px  
      box-shadow 3px 5px 5px #999
      background #fff
      h4
        display inline-block
        color #003366
        border-bottom 2px solid #009966
        margin-bottom 10px
      p
        text-indent 1em
      .middle
        margin 10px 0 0 0 
      .it
        text-indent 2em
</style>

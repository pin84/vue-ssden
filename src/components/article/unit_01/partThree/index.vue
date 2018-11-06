<template>
  <div class="wrapper">
    <h3 class="title">Part Three Practical Writing</h3>
    <div class="ex">
      <h4>Business Card</h4>
      <p>在商务活动中，交换名片是一项很流行也很重要的活动。在对外交流中，将自己的名片印上英文是很有必要的。这就要求名片上的英文写法要规范，顺序符合英语规则。</p>
    </div>

    <div class="explain">
      <h3>A business card should include the following details:</h3>
      <ul class="list">
        <li>1. 单位或公司名称（the name of your work unit or company）</li>
        <li>2. 姓名（your name）</li>
        <li>3. 职位、头衔或职业（your position, title, or occupation）</li>
        <li> 4. 通讯方式:
          <p>1) 地址（the address of your company）</p>
          <p>2) 电话号码（telephone number）</p>
          <p>3) 传真号码（fax number）</p>
          <p>4) 电子邮箱（e-mail address）</p>
          <p>5) 网址（website）</p>
        </li>
        <li>现在，名片有朝着多样化、个性化方向发展的趋势，不仅仅限于自我介绍的功效，还带着广告宣传的色彩。根据实际情况或艺术效果往往可以调整上述要点1和要点2在名片上的位置。下面是两个实例。</li>
      </ul>
    </div>
    <div class="sample">
      <h3 class="num">Sample 1</h3>
      <div class="show">
        <div class="top">
          <strong>Li Hua</strong>
          <p>Deputy Manager</p>
          <p>Export Department</p>
          <p>Yilong Mechanical & Electronic Products Trading Co., Ltd.</p>
        </div>
        <div class="bottom">
          <div class="left">
            <p>No. 123, Tianmushan Rd.</p>
            <p>Xihu District, Hangzhou </p>
            <p>Zhejiang Province 310000</p>
            <p>P.R.China </p>
          </div>
          <div class="right">
            <p>Tel.: 86-0571-88888888</p>
            <p>Fax: 86-0571-66666666</p>
            <p>E-mail: lihua@yilong.com</p>
            <p>Mobile: 86-13905710000</p>
          </div>
        </div>
      </div>
    </div>
    <div class="sample">
      <h3  class="num">Sample 2</h3>
      <div class="show">
        <div class="top">
          <p>QIANJIANG FINANCIAL SCHOOL</p>
          <strong>Han Meimei</strong>
          <p>Associate Professor</p>
        </div>
        <div class="bottom">
          <div class="left">
            <p>No. 468, Zhongshan Rd. </p>
            <p>Ningbo,Zhejiang Province</p>
            <p>P.R.China </p>
            <p>www.qianjiang.edu.cn</p>
          </div>
          <div class="right">
            <p>Tel.: 86-0571-88888888</p>
            <p>Fax: 86-0571-66666666</p>
            <p>E-mail:hanmm@qianjiang.cn</p>
            <p>Mobile: 86-13905740000</p>
          </div>
        </div>
      </div>
    </div>
    <div class="notes">
      <h3>【注意】</h3>
      <p>1. 英语地名的写法，一般遵循从小地名到大地名的写法。一般顺序为： 室号——门牌号——街道名——城市名——省（州）——国家
      </p>
      <p>2.	地址在名片上，应该保持一定的完整性。门牌号与街道名不可分开写，必须在同一行，不可断行。</p>
    </div>
  </div>
</template>


<script>
export default {

}
</script>


<style lang='stylus' scoped>
.wrapper
  width 100%
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
    h4
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
  .explain
    padding 5px
    border-bottom 1px solid #339999
    h3
      color #009966
    li
      text-indent 1em   
      p
        text-indent 2em
  .sample
    width 90%
    margin 0 auto
    text-align center
    font-size 1rem
    line-height 12px
    margin-top 20px
    .num
      margin 50px 0
      font-size 20px
    .show
      border 1px solid black
      padding 2px
      background #f7f7f7
      transform rotate(10deg)
      box-shadow 6px 5px 4px #888
      .top
        margin-bottom 10px
        strong 
          display block
          font-size 1.2rem
          padding 3px 0
      .bottom
        display flex
        text-align left
        justify-content space-around
  .notes
    margin-top 40px
    padding 5px 
    p
      text-indent 1em      
        
</style>

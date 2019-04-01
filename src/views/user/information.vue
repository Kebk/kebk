<template>
  <div class="information-box">
    <div class="info">
      <div class="infoTitle">用户头像</div>
      <div class="infoDetails">
        <img src="http://yanxuan.nosdn.127.net/c3a03895c73694d922310c76e4915cdb.png?imageView&quality=95">
      </div>
    </div>
    <div class="info">
      <div class="infoTitle">用户ID</div>
      <div class="infoDetails">30638198</div>
    </div>
    <div class="info">
      <div class="infoTitle">账    号</div>
      <div class="infoDetails">tvtpvh@163.com</div>
    </div>
    <div class="info">
      <div class="infoTitle">昵    称</div>
      <div class="infoDetails">
        <input type="text">
      </div>
    </div>
    <div class="info">
      <div class="infoTitle">性    别</div>
      <div class="infoDetails">
        <div class="male">
          <input type="radio" name="gender" value="0" id="male">
          <label for="male">男</label>
        </div>
        <div class="female">
          <input type="radio" name="gender" value="1" id="female">
          <label for="female">女</label>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="infoTitle">手机号码</div>
      <div class="infoDetails">137****0464</div>
    </div>
    <div class="info">
      <div class="infoTitle">出生日期</div>
      <div class="infoDetails">
        <select name="birthYear">
          <option value="0">--</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
          <option value="2007">2007</option>
          <option value="2006">2006</option>
          <option value="2005">2005</option>
          <option value="2004">2004</option>
          <option value="2003">2003</option>
          <option value="2002">2002</option>
          <option value="2001">2001</option>
          <option value="2000">2000</option>
          <option value=""></option>
        </select>
        <label>年</label>
        <select name="birthMonth">
          <option value="0">--</option>
        </select>
        <label >月</label>
        <select name="birthDay">
          <option value="0">--</option>
        </select>
        <label >日</label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "information"
  }
</script>

<style scoped lang="stylus">
  .information-box
    width 890px
    border 1px solid #e8e8e8
    padding 30px 0
    font-size 14px
    .info
      margin-left 60px
      margin-bottom 20px
      height 34px
      line-height 34px
      clear both
      .infoTitle
        float left
        width 70px
        font-size 14px
        color #333
      .infoDetails
        float left
        margin-left 48px
        font-size 14px
        color #333
        img
          width 70px
          height 70px
        .male
          float left
        .female
          float left
          margin-left 40px
        select
          width 70px
          height 28px
        label
          margin 0 20px 0 6px

</style>

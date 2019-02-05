<template>
  <transition name="error">
    <div class="error">
      <p class="message">对不起，您要找的页面不见了</p>
      <div class="container clearfix">
        <img class="img-person"
             src="../../src/assets/img/error-person.png">
        <img class="img-chip"
             src="../../src/assets/img/error-thing.png">
      </div>
      <p class="bottom">
        <router-link class="btn"
                     to='/'>返回首页</router-link>
      </p>

    </div>
  </transition>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.error
  width 960px
  margin 50px auto
  padding 20px
  .message
    line-height 50px
    font-size 24px
    text-align center
  .container
    position relative
    width 100%
    height 300px
    .img-person
      width 400px
      position absolute
      right 0
      bottom 0
    .img-chip
      width 200px
      position absolute
      left 0
      bottom 38px
  .bottom
    text-align center
    line-height 50px
    margin-top 50px
    .btn
      padding 10px 20px
      line-height 50px
      color $c-white
      background $c-blue
      text-align center
      border-radius 4px
      outline none
      transition background-color 0.2s
      &:hover
        background $c-lightblue
.error-enter-active
  transition opacity 0.5s
.error-enter
  opacity 0
</style>

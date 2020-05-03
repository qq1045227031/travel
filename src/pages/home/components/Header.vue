<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">
        &#xe682;
      </span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe68e;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      <span class="iconfont arrow-icon">&#xe657;</span>
      城市
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeHeader.vue"
    }
</script>
<!--scoped表示该style样式只对改组件有效-->
<!--~@在style是src目录  @import 是在style中特殊规定-->
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  /*@import '~@/assets/styles/varibles.styl'*/
  /*@import "../../../assets/styles/varibles.styl"*/
  .header
    display flex
    line-height .86rem
    background $bgColor
    color #ffffff
    .header-left
      width .64rem
      float: left
       /*.back-icon*/
       /*   text-align center*/
       /*   font-size .4rem*/
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      height .64rem
      background #ffffff
      margin-top .12rem
      padding-left .2rem
      margin-left .2rem
      border-radius .1rem   /*四边圆角*/
      color #ccc
    .header-right
      width 1.24rem
      float right
      text-align center
      .arrow-icon
        margin-left -.04rem
        font-size .24rem


</style>

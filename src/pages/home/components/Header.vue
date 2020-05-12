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
<!--      {{this.$store.state.city}}-->
    </div>
    <router-link to="/city">
    <div class="header-right">
      <span class="iconfont arrow-icon">&#xe657;</span>
<!--      {{this.$store.state.city}}-->
      {{this.city}}
    </div>
    </router-link>
  </div>
</template>

<script>
  import { mapState ,mapGetters} from 'vuex'
    export default {
        name: "HomeHeader.vue",
      computed: {
          //获取store里面state为city的数据,并且在这创建名为city的计算属性
          ...mapState(['city']),
        //获取store里面getter为doubleCity的数据,并且在这创建doubleCity的计算属性
        ...mapGetters(['doubleCity'])
      }
    }
</script>
<!--scoped表示该style样式只对改组件有效-->
<!--~@在style是src目录  @import 是在style中特殊规定-->
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  /*@import '~@/assets/styles/varibles.styl'*/
  /*@import "../../../assets/styles/varibles.styl"*/
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem


</style>

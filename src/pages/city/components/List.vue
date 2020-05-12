<template>
<!--  使用better-scroll创建无极滚动,要有一个div-->
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
<!--            <div class="button">{{this.$store.state.city}}</div>-->
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot"
               :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(item,key) of cities"
           :key="key" :ref="key">
<!--        这里的key是对象的名字,注意v-for自己的组件也会循环-->
        <div class="title border-topbottom" >{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item"
               :key="innerItem.id"  @click="handleCityClick(innerItem.name)">
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import BScroll from 'better-scroll'
  import {mapState,mapMutations} from 'vuex'
  // import vuex from 'vuex'
  export default {
    name: 'CityList',
    props: {
      hot: Array,
      cities: Object,
      letter: String
    },
    computed: {
      ...mapState({
        //取得store内的data的city并且这里命名为currentCity
        currentCity:'city'
      })
      // currentCity: this.$store.state.city
    },
    methods: {
      handleCityClick (city) {
        // this.$store.dispatch('changeCity',city)
        //可以直接使用commit调用mutations
        // this.$store.commit('changeCity',city)
        this.changeCity(city)
        //通过$router.push进行页面跳转
        this.$router.push('/')
      },
      //获取store里名字为changeCity的mutation并且命名为changeCity方法
      ...mapMutations(['changeCity'])
    },
    mounted() {
      //创建滚动
      this.scroll = new BScroll(this.$refs.wrapper)
    },
    watch: {
      letter () {
        if (this.letter){
          //注意this.$refs[this.letter]得出的是一个数组，其虽然只有一个值，加[0]变成单个dom元素
        //通过this.$refs[this.letter][0]获取对应单个dom元素
          const element = this.$refs[this.letter][0]
          // console.log(this.$refs[this.letter])
          // 调用Scroll的方法
          this.scroll.scrollToElement(element)
        }
        // console.log(this.letter)
      }
    }

  }
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
<!--边框样式-->
<!--.border-topbottom-->
<!--&:before-->
<!--border-color #ccc-->
<!--&:after-->
<!--border-color #777-->

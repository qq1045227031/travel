<template>
  <div>
    <router-link tag="div"
                 to="/"
                 class="header-abs" v-show="showAbs">
      <span class="iconfont header-abs-back">
        &#xe682;
      </span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe682;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailHeader.vue",
      data () {
          return{
            showAbs: true,
            opacityStyle:{
              opacity: 0
            }
          }
      },
      methods: {
        handleScroll(){
          const top = document.documentElement.scrollTop
          //若滚轮与顶端高度大于60像素覆盖返回图标的时候，就展示上面的经典详情隐藏返回
          if(top>60){
            //往下拖越多 上面的经典详情框越明显
            let opacity = top / 140
            opacity = opacity > 1 ? 1 : opacity
            this.opacityStyle = { opacity: opacity}//可以省略为{opacity}
            this.showAbs=false
          }else{
            this.showAbs=true
          }
          // console.log(document.documentElement.scrollTop)
        }
      },
      //当定义了keep-alive的时候进行页面跳转会执行用于代替mounted，
      //因为使用了keep-alive缓存，所以在缓存作用范围内页面跳转mounted不会被执行了，相对的activated会被执行
      //但是如果刚进入该keep-alive页面的时候，mounted和activated都会被执行
      activated() {
          //监听滚动时间，变化调用hanleScroll方法,但是这是全局组件会监听页面的所有scroll
          window.addEventListener('scroll',this.handleScroll,)
      },
      //deactivated是页面即将关闭的时候调用
      deactivated() {
          //离开此页面的时候对scroll进行解绑，防止其影响全局的其他页面
          window.removeEventListener('scroll',this.handleScroll)
      }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .header-abs-back
      color: #fff
      font-size: .4rem
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
<!--z-index是图片的优先级，优先级高的会覆盖优先级低的显示 z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面-->

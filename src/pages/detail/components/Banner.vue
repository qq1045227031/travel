<template>
  <div>
   <div class="banner" @click="handlerBannerClick">
     <img class="banner-img" :src="bannerImg"/>
     <div class="banner-info">
       <div class="banner-tittle">{{this.sightName}}</div>
       <div class="banner-number">
         <span class="iconfont banner-item">&#xe75d;</span>
         {{this.bannerImgs.length}}
       </div>
     </div>
   </div>
    <fade-animation>
<!--      其会把comm-gallary的内容当作插槽slot的形式-->
     <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="hanleGallaryClose"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
  import CommonGallary from "common/gallary/Gallary"
  // 动画组件
  import FadeAnimation from "common/fade/FadeAnimation";
    export default {
        name: "DetailBanner.vue",
      props: {
        sightName: String,
        bannerImg: String,
        bannerImgs: Array
      },
      data() {
          return{
            // imgs: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg','http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg'],
            showGallary: false
          }
      },
      components: {
          CommonGallary,
        FadeAnimation
      },
      methods: {
        handlerBannerClick() {
          this.showGallary = true
        },
        hanleGallaryClose() {
          this.showGallary = false
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display: flex
      color #fff
      position absolute
      left 0
      right 0
      bottom 0
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      line-height .6rem
      .banner-tittle
         flex 1
         font-size: .32rem
         padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .36rem
        .banner-icon
          font-size: .36rem
</style>
<!--background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))是从上到下的阴影渐变效果-->

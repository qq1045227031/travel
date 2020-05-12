<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption"><!-- -->
        <swiper-slide v-for="(item,index) in imgs">
          <img class="gallary-img" :src="item"/>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
    export default {
        name: "Gallary.vue",
      props: {
        imgs:{
          type: Array,
          default () {
            return []
          }
        }
      },
      methods: {
        handleGallaryClick() {
          this.$emit('close')
        }
      },
      data () {
          return{
            swiperOption: {
              //下面的圆圈
              pagination: '.swiper-pagination',
              //改成数字形式
              paginationType: 'fraction',
              //防止v-for由true改为false后导致轮播异常问题
              //如果dom元素发生变化自动刷新
              observeParents: true,
              observer: true
            }
          }
      }
    }
</script>

<style lang="stylus" scoped>
  .container>>>.swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    .wrapper
      width 100%
      padding-bottom 100%
      height 0
      .gallary-img
        width 100%
      .swiper-pagination
        bottom -1rem
        color: #fff;


</style>

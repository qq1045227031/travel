<template>
<!--  解决网速慢时轮播图后加载显示的问题-->
  <div class="wrapper">
  <swiper :options="swiperOption">
    <!-- slides -->
<!--    v-if="list.length"是为了防止一开始展示空数据，传入数据之后显示第四页，所以让空数据的时候不创建，有数据才创建-->
    <swiper-slide v-for="item of list" v-if="showSwiper">
<!--      v-bind:  就是他去vue里面找数据-->
      <img class="swiper-img" :src="item.imgUrl" :key="item.id"/>
    </swiper-slide>
<!--    <swiper-slide><img class="swiper-img" src="http://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg"></swiper-slide>-->
<!--    <swiper-slide><img class="swiper-img" src="//imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg"></swiper-slide>-->
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
<!--    左箭头-->
<!--    <div class="swiper-button-prev" slot="button-prev"></div>-->
<!--    右箭头-->
<!--    <div class="swiper-button-next" slot="button-next"></div>-->
    <!--    滚动条-->
<!--    <div class="swiper-scrollbar"   slot="scrollbar"></div>-->

  </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props: {
      list: Array
    },
    data() {
      return{
        //这里是上面用到的options数据
      swiperOption:{
        //这里是轮播图里的点点，当前轮播图是蓝色
        pagination:'.swiper-pagination',
        //loop是支持循环轮播
        loop:true
      }
        // swiperList:[{
        // id:'0001',
        //   imgUrl:"http://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg"
        // },{
        // id:'0002',
        //   imgUrl:"http://imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg"
        // }]
      }
    },
    computed:{
      showSwiper() {
        return this.list.length
      }
    }
  }
</script>

<style lang="stylus"scoped>
  .wrapper>>> .swiper-pagination-bullet-active
    background #ffffff
  .wrapper
     overflow hidden
     width 100%
     height 0
     padding-bottom 31%
     background #eee
     .swiper-img
       width 100%
</style>
<!--padding-bottom 64%是高对应于宽度的比例-->
<!--.wrapper>>> .swiper-pagination-bullet-active的作用：由于.swiper-pagination-bullet-active是在.swiper类下要进行穿透-->

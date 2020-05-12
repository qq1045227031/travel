<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
<!--      会把其渲染成一个li标签-->
      <router-link
        tag="li" class="item border-bottom"
        v-for="item of list"
        :key="item.id" :to="'/detail/'+item.id">
<!--        to是链接= /detail/图片顺序地址-->
          <img class="item-img" :src="item.imgUrl"/>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
      </router-link>>

    </ul>
  </div>

</template>

<script>
    export default {
        name: "HomeRecommend.vue",
      props:{
          list: Array
      },
      data() {
          return{
          recommendList:[{
            id: '0001',
            imgUrl: 'http://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg',
            title: '标题',
            desc: '描述描述描述描述描述描述描述描述描述描述描述描述'
          },{
            id: '0002',
            imgUrl: 'http://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg',
            title: '标题',
            desc: '描述描述描述描述描述描述描述描述描述描述描述描述'
          },{
            id: '0003',
            imgUrl: 'http://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg',
            title: '标题',
            desc: '描述描述描述描述描述描述描述描述描述描述描述描述'
          },{
            id: '0004',
            imgUrl: 'http://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg',
            title: '标题',
            desc: '描述描述描述描述描述描述描述描述描述描述描述描述'
          }]
          }
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height 2.1rem
    .item-img
      width 2.5rem
      height 1.7rem
      padding  .1rem
    .item-info
      min-width 0
      flex 1
      padding .1rem
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        line-height .44rem
        color #fff
        border-radius .06rem
        margin-top .16rem
        background #ff9300
        padding 0 .2rem




</style>
<!--line-height .8rem该行高  text-indent缩进-->

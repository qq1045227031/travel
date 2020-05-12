<template>
  <div>
    <div class="item"
         v-for="(item,index) of list" :key="index">
      <div class="item-title">
        <span class="item-title-icon border-bottom"></span>
        {{item.title}}
      </div>
<!--      先判断是否存在子组件用于循环递归-->
      <div v-if="item.children" class="item-chilren">
<!--        detail-list是调用自身，同时传入每一项item的children-->
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
<!--List:[{-->
<!--  title: '成人票',-->
<!--  children: [{-->
<!--  title: '成人一级票',-->
<!--  children: [{-->
<!--  title: '成人二级票'-->
<!--  }]-->
<!--  }]-->
<!--  }-->
</template>

<script>
    export default {
        name: "DetailList",
      props: {
          list: Array
      }
    }
</script>

<style lang="stylus" scoped>
  .item-title-icon
    position: relative
    left: .06rem
    top: .06rem
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
  .item-chilren
    padding: 0 .2rem


</style>

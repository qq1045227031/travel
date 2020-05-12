<template>
  <transition>
    <slot>
<!--要加入插槽才能在使用的时候有效果,这里的slot本质就是使用的时候common-gallary这个组件,才会生效-->
<!--      <fade-animation>-->
<!--        &lt;!&ndash;      其会把comm-gallary的内容当作插槽slot的形式&ndash;&gt;-->
<!--        <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="hanleGallaryClose"></common-gallary>-->
<!--      </fade-animation>-->
    </slot>
  </transition>

</template>

<script>
  // 此组件为一个渐隐渐现的动画效果
    export default {
        name: "FadeAnimation.vue"
    }
</script>

<style lang="stylus" scoped>
  .v-enter,.v-leave-to
    opacity 0
  .v-enter-active,.v-leave-active
    transition opacity.5s

</style>

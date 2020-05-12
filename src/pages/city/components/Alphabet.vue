<template>
    <ul class="list">
      <li class="item"
        v-for="item of letters"
          :key="item" :ref="item"
          @touchstart.prevent="handleTouchStart"
          @touchmove="hadleTouchMove"
          @touchend="handleTouchEnd"
          @click="handleLetterClick"
          >{{item}}</li>
<!--      上面的@touchstart是点击开始，move是移动，tochend是结束调用的方法-->
    </ul>
</template>

<script>
    export default {
        name: "CityAlphabet.vue",
      props: {
          cities: Object
      },
      data() {
          return{
            touchStatus: false,
            startY: 0,
            timer: null
          }
      },
      updated() {
          this.startY=this.$refs['A'][0].offsetTop
      },
      computed: {
          letters () {
            const  letters = []
            for (let i in this.cities){
              letters.push(i)
            }
            return letters

        }
      },
      methods: {
        handleLetterClick(e) {
          this.$emit('change',e.target.innerText)
          // console.log(e.target.innerText)
        },
        handleTouchStart () {
          this.touchStatus=true
        },
        hadleTouchMove (e) {
          if (this.touchStatus){
            //用于控制滚动记算速度
            if (this.timer){
              clearTimeout(this.timer)
            }
            this.timer = setTimeout(()=>{
              //offsetTop用于记算该组件！顶部与最高的A上面的距离
              // const startY = this.$refs['A'][0].offsetTop
              // console.log(this.$refs['A'][0])
              //获取点击的与整个顶端的距离 这里的75是header组件的高度
              const touchY = e.touches[0].clientY-74
              // this.startY=this.$refs['A'][0].offsetTop
              const index = Math.floor((touchY-this.startY)/20)
              // console.log(index)
              //把该索引对饮的字母传入到city.vue中，调用点击字母的方法
              if (index>=0&&index<this.letters.length){
                this.$emit('change',this.letters[index])
            }
            },16)
          }
        },
        handleTouchEnd () {
          this.touchStatus = false
        }
      }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor

</style>
<!--line-height .4rem是行高用于定义ul中li的间距-->

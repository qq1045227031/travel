<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
    <!--    <router-link to="/list">列表页</router-link>-->
  </div>
</template>
<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import axios from 'axios'
  import {mapState} from 'vuex'
  export default {
    name:'Home',
    components:{
      HomeHeader,
      // HomeHeader: ()=>import('./components/Header'),
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    },
    computed: {
      // city2: this.$store.state.city,
      ...mapState(['city'])
    },
    mounted() {
      //存没修改城市之前的city，和修改之后的city用于判断是否城市已发生改变
      this.lastcity = this.city
      this.getHomeInfo()
      // console.log(this.city2)
    },
    activated() {
      //用于控制keep-alive的缓存，因为下载每次ajax只会被执行一次
      // 所以为了再次调用请求，使用该activeed函数每当加载页面被执行
      console.log('active')
      if (this.lastcity!==this.city){
        this.lastcity=this.city
        this.getHomeInfo()
      }
    },
    data(){
      return{
        // city:'',
        swiperList:[],
        iconList: [],
        recommendList:[],
        weekendList:[],
        lastcity: ''
      }

    },
    methods: {
      getHomeInfo() {
        axios.get('/static/mock/index.json?city='+this.city)
        .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        //一开始默认有一层data
        res=res.data
        if (res.ret&&res.data){
          //这一层data是我们定义的
          const data=res.data
          // this.city =data.city
          this.swiperList=data.swiperList
          this.iconList = data.iconList
          this.recommendList=data.recommendList
          this.weekendList=data.weekendList
        }
        // console.log(res)
      }
    }
  }
</script>
<style>

</style>

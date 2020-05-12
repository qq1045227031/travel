<template>
    <div>
      <detail-banner
        :sightName="sightName" :bannerImg="bannerImg"
        :bannerImgs="gallaryImgs"></detail-banner>
      <detail-header></detail-header>
      <div class="content">
        <detail-list :list="list"></detail-list>
      </div>
    </div>
</template>

<script>
  import DetailBanner from "./components/Banner"
  import DetailHeader from './components/Header'
  import DetailList from "./components/List"
  import axios from 'axios'
    export default {
        name: "Detail",

      components: {
        DetailList,
        DetailBanner,
        DetailHeader
      },
      data () {
          return{
            sightName:'',
            //展示图
            bannerImg: "",
            //详情图
            gallaryImgs: [],
            //票类型
            list:[{
              title: '成人票',
              children: [{
                title: '成人一级票',
                children: [{
                  title: '成人二级票'
                }]
              }]
            },
              {
                title: '学生票',
                children: [{
                  title: '学生一级票'
                }]
              },
              {
                title: '儿童票',
                children: [{
                  title: '儿童一级票'
                }]
              },{
                title: '特惠票',
                children: [{
                  title: '特惠一级票'
                }]
              }]
          }
      },
      methods: {
          getDetailInfo () {
            //this.$route.params.id是网页上的id参数，其本质是在路由定义的：id即Recommend进行页面跳转传入的item.id
            // axios.get('/static/mock/detail.json?id='+this.$route.params.id)
            //和上面效果相同的第二种写法
            axios.get('/static/mock/detail.json',{
              params:{
                id: this.$route.params.id
              }
            }).then(this.handleGetDataSucc)
          },
        handleGetDataSucc (res) {
            res = res.data
          if (res.data&&res.ret){
            const data = res.data
            this.sightName = data.sightName
            this.bannerImg = data.bannerImg
            this.gallaryImgs = data.gallaryImgs
            this.list = data.categoryList
            console.log(data)
          }
        }

      },
      mounted() {
          this.getDetailInfo()
      }
    }
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>

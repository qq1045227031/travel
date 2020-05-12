<template>
  <div>
  <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :hot="hotCities"
      :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
  import axios from "axios"
  import CityHeader from "./components/Header"
  import CitySearch from "./components/Search"
  import CityList from "./components/List"
  import CityAlphabet from "./components/Alphabet"

 export default {
   name: 'City',
   components: {
     CityList,
     CityHeader,
     CitySearch,
     CityAlphabet
   },data() {
     return{
       cities: {},
       hotCities: [],
       letter: ""
     }
   },
   methods:{
     getCityInfo() {
       axios.get('/static/mock/city.json').then(this.handleGetCityInfoSucc)
         //测试获取异地数据http://120.26.178.72/springboot/frontend/listshopspageinfo
        // , axios.get('/springboot/frontend/listshopspageinfo').then(this.textProxyTable)
     },
     handleGetCityInfoSucc(res){
       // console.log(res)
       res = res.data
       if (res.ret && res.data) {
         const data = res.data
         this.cities = data.cities
         this.hotCities = data.hotCities
       }
     },
     // textProxyTable(res) {
     //   console.log(res)
     //   console.log(res.data)
     // },
     handleLetterChange(letter) {
       // console.log(letter)
       this.letter=letter
     }
   },
   mounted() {
     this.getCityInfo()
   }
 }
</script>
<style lang="stylus" scoped>

</style>

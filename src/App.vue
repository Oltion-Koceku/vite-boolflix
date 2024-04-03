<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import { store } from './data/store'
import axios from 'axios'
  export default {

    data(){
      return{
        axios
      }
    },

    methods:{
      getApiMovie(){
        this.axios.get(store.urlApiMovie, {
          params:{
            api_key: store.api_key,
            query: store.query,
            language: store.language
          }
        })
        .then(res =>{
          store.cardArray = res.data.results
          console.log(res.data.results);
        })  

        .catch(error =>{
          console.log("errore");
        })
      },
      getApiTv(){
        this.axios.get(store.urlApiTv, {
          params:{
            api_key: store.api_key,
            query: store.query,
            language: store.language
          }
        })
        .then(res =>{
          store.cardArrayTv = res.data.results
          console.log(res.data.results);
        })  

        .catch(error =>{
          console.log("errore");
        })
      },
    },

    components:{
      Header,
      Main,
      Footer
    },

    mounted(){
    
    }


  }
</script>

<template>
   <div>
    <font-awesome-icon icon="star" style="color: gold;"></font-awesome-icon>
    <font-awesome-icon icon="star-half-alt" style="color: gold;"></font-awesome-icon>
    <font-awesome-icon icon="star-empty" style="color: gold;"></font-awesome-icon>
  </div>
  <Header 
    @searchMovie="getApiMovie(), getApiTv()"
  />
  <Main />
</template>



<style lang="scss">
@use './assets/scss/main.scss' as *;
</style>
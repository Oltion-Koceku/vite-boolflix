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
            language: store.language,
            
          }
        })
        .then(res =>{
          store.cardArray = res.data.results
          console.log(res.data.results);
        })  

        .catch(error =>{
          if (store.cardArray.length === 0) {
            console.log(error);
          }
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
          // store.cardArrayTv.forEach((element, index) => {
          //   this.getApiActor(index.id)
          // });
          console.log(res.data.results);
        })  

        .catch(error =>{
          console.log("errore");
        })
      },

      getRightApi(){
        store.cardArray = []
        store.cardArrayTv = []

        // store.tvBoolean = false
        // store.filmBoolean = false

        let tv = store.tvBoolean
        let film = store.filmBoolean
        if (tv === true && film === true) {
          this.getApiTv()
          this.getApiMovie()
        }else if(film === true && tv === false){
          this.getApiMovie()
        }else if(tv === true && film === false){
          this.getApiTv()
        }
      },

      

      getApiActor(id){
        this.axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
          params:{
            api_key: store.api_key,
          }
        })
        .then(res =>{
          console.log(res.data.name);
        })
      }
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
  <Header 
    @searchMovie="getRightApi()"
  />
  <Main />
</template>



<style lang="scss">
@use './assets/scss/main.scss' as *;
</style>
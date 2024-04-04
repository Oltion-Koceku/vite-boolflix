<script>
import cardFilm from './partials/cardFilm.vue';
import cardTv from './partials/cardTv.vue';
import {store} from '../data/store'
  export default {
    data(){
      return{
        store
      }
    },

    methods:{
      
    },

    mounted(){
     
    },

    components:{
      cardFilm,
      cardTv
    }
  }
</script>


<template>
  <div class="container text-center">
    <h2>FILM</h2>
    <div class="row ">
      <cardFilm 
      v-for="card in store.cardArray"
      :key="card.id"
      :titolo="card.title"
      :titoloOriginale="card.original_title"
      :lingua="card.original_language"
      :voto="Math.ceil(card.vote_average / 2)"
      :img="card.poster_path"
      :description="card.overview"

      />
    </div>
    <h2>Serie TV</h2>
    <div class="row">
      <cardTv
      v-for="card in store.cardArrayTv"
      :key="card.id"
      :titolo="card.name"
      :titoloOriginale="card.original_name"
      :lingua="card.original_language"
      :voto="Math.ceil(card.vote_average / 2)"
      :img="card.poster_path"
      :description="card.overview"
      />
    </div>
      
  </div>
</template>



<style lang="scss" scoped>
  .container{
    height: 100%;
    background-color: #010b09;

    h2{
      color: white;
    }
  }
</style>
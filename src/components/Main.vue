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

    components:{
      cardFilm,
      cardTv
    }
  }
</script>


<template>
  <div class="container">
    <h2>FILM</h2>
    <div class="row row-cols-4 ">
      <cardFilm 
      v-for="card in store.cardArray"
      :key="card.id"
      :titolo="card.title"
      :titoloOriginale="card.original_title"
      :lingua="card.original_language"
      :voto="card.vote_average"
      :img="card.poster_path"
      />
    </div>
    <h2>Serie TV</h2>
    <div class="row row-cols-4 ">
      <cardTv
      v-for="card in store.cardArrayTv"
      :key="card.id"
      :titolo="card.name"
      :titoloOriginale="card.original_name"
      :lingua="card.original_language"
      :voto="card.vote_average"
      :img="card.poster_path"
      />
    </div>
      
  </div>
</template>



<style lang="scss" scoped>
  .container{
    height: 100%;
    background-color: gray;
  }
</style>
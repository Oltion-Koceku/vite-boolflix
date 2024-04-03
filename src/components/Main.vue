<script>
import cardFilm from './partials/cardFilm.vue';
import {store} from '../data/store'
  export default {
    data(){
      return{
        store
      }
    },

    components:{
      cardFilm
    }
  }
</script>


<template>
  <div class="container">
    <div class="row row-cols-4 ">
      <cardFilm 
      v-for="card in store.cardArray"
      :key="card.id"
      :titolo="card.title"
      :titoloOriginale="card.original_title"
      :lingua="card.original_language"
      :voto="card.vote_average"
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
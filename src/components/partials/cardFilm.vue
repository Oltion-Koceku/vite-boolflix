<script>
import { store } from '../../data/store';
  export default {
    data(){
      return{
        store
      }
    },

    props:{
      titolo: String,
      titoloOriginale:String,
      lingua: String,
      voto:Number
    }
  }
</script>

<template>
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <p class="card-text">{{titolo}}</p>
    <p class="card-text">{{titoloOriginale}}</p>
    <p class="card-text">{{lingua}}</p>
    <p class="card-text">{{voto}}</p>
  </div>
</div>
</template>


<style lang="scss" scoped>

</style>
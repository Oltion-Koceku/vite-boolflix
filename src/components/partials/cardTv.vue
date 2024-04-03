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
      voto:Number,
      img:String
    }
  }
</script>

<template>
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" :src="store.urlImg + img" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">{{titolo}}</p>
    <p class="card-text">{{titoloOriginale}}</p>
    <div class="flag">
      <div v-show="lingua !== 'it' && lingua !== 'en'">
        {{lingua}}
      </div>
      <img :src="'src/img/'+ lingua + '.png'" alt="">
      
    </div>
    <p class="card-text">{{voto}}</p>
  </div>
</div>
</template>


<style lang="scss" scoped>
  .flag{
    width: 50px;
    img{
      width: 100%;
    }
  }
</style>
<script>
import { store } from '../../data/store';
  export default {
    data(){
      return{
        store
      }
    },

    methods:{
      getStar(rating){
        let stararray = []
        for (let i = rating; i >= 1; i--) {
         stararray.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');
          if (i == .5) stararray.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');       
        }
        for (let i = (5 - rating); i >= 1; i--){
            stararray.push('<i class="fa-regular fa-star"></i>');
        }
        return stararray.join('')
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
    <p v-html="getStar(voto)" class="card-text"></p>
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
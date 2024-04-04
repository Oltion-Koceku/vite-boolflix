<script>
import { store } from '../../data/store';
  export default {
    data(){
      return{
        store,
        flipped: false
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
      },

      flipCard(){
        this.flipped = !this.flipped
      }
    },

    props:{
      titolo: String,
      titoloOriginale:String,
      lingua: String,
      voto:Number,
      img:String,
      description:String
    }
  }
</script>

<template>
  <div @click="flipCard()" class="card-ol position-relative ">
    <div class="flip" :class="flipped === true ? 'flipped' : ''">
      <div class="card-left d-flex " :class="flipped === true ? 'd-none' : ''">
        <div class="poster">
          <img v-if="img === null" src="https://i.etsystatic.com/29318579/r/il/21818a/3635770890/il_570xN.3635770890_cw9z.jpg" alt="">
          <img v-else :src="'https://image.tmdb.org/t/p/w185' + img" alt="">
        </div>
        <div class="info-poster p-1 d-flex flex-column justify-content-center ">
          <div class="titolo d-flex align-items-center ">
            <h4> Titolo: </h4>
            <span> <strong>{{ titolo }}</strong></span>
          </div>
          <div class="titoloOriginale d-flex align-items-center ">
            <h4> Titolo Originale: </h4>
            <span> <strong>{{ titoloOriginale }}</strong></span>
          </div>

          <div class="lingua d-flex align-items-center">
            <h4>Lingua:</h4>
            <span v-if="lingua !== 'it' && lingua !== 'en'"> <strong>{{ lingua }}</strong></span>
            <img :src="'src/img/'+ lingua + '.png'" alt="">
          </div>

          <div class="star d-flex align-items-center">
            <h4>Voto:</h4>
            <span v-html="getStar(voto)"></span>
            
          </div>
          
        </div>
    </div>
    <div class="card-right" :class="flipped === true ? 'd-block' : 'd-none'" >
      <div class="description ">
        <h4>Descrizione:</h4>
        <p>{{ description }}</p>
      </div>
    </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  strong, p{
    color: azure;
  }

  h4{
    color: blck;
  }
  .card-ol{
    width: 43%;
    height: 300px;
    margin: 30px 46px;
    border: 1px solid bisque; //debug
    border-radius: 20px;
    background-color: #415051;
    padding: 0;
    .flip{
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.8s;
      transform-style: preserve-3d;
    }
    .flipped{
      transform: rotateY(180deg);
      .card-right{
        display: block;
      }
      .card-left{
        display: none;
      }
    }
    .card-right{
      position: absolute;
      top: 0;
      transform: rotateY(180deg);
      .description{
        height: 300px;
        overflow: auto;
      }
    }
    .card-left{
      .info-poster{
        .lingua{
          img{
            width: 30px;
          }
        }
      }
      .poster{
        height: 298px;
        border-radius: 20px;
        img{
          height: 100%;
          border-radius: 20px;
        }
      }
    }
  }
</style>
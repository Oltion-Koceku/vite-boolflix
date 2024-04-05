<script>
import {store} from '../data/store'
  export default {  
    data(){
      return{
        store
      }
    },

    methods:{
      boolean(value){
        if (value === "1") {
          this.store.filmBoolean = true
          this.store.tvBoolean = true
        }else if(value === "2"){
          this.store.filmBoolean = true
          this.store.tvBoolean = false
        }else{
          this.store.tvBoolean = true
          this.store.filmBoolean = false
        }
        console.log(store.tvBoolean, store.filmBoolean);
      }
    },

    components:{

    }
    
  }
</script>


<template>
  <div class="container bg-black">
    <div class="searchbar d-flex justify-content-between align-items-center text-danger ">
      <h1>BOOLFLIX</h1>
      <div class="d-flex">
        <input type="text" v-model="store.query" placeholder="Cerca il tuo film..">
        <button @click="$emit('searchMovie')" class="btn btn-danger">cerca</button>
        <select class="form-select" @change="boolean($event.target.value)">
          <option selected>Scegli...</option>
          <option value="1">All</option>
          <option value="2">Movie</option>
          <option value="3">Tv</option>
        </select>
      </div>

    </div>
  </div>
</template>



<style lang="scss" scoped>
  .searchbar{
    height: 80px;
  }
</style>
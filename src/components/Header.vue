<script>
import {store} from '../data/store'
  export default {  
    data(){
      return{
        store
      }
    }
    
  }
</script>


<template>
  <div class="container bg-black">
    <div class="searchbar d-flex justify-content-between align-items-center text-danger ">
      <h1>BOOLFLIX</h1>
      <input type="text" placeholder="Cerca il tuo film..">
    </div>
  </div>
</template>



<style lang="scss" scoped>
  .searchbar{
    height: 80px;
  }
</style>
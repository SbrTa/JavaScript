<template>
  <div class="container">
    <h1>Filters & Mixins</h1>
    <hr>
    <p>{{text | toLowerCase}}</p>
    <p>{{text | toUpperCase}}</p>
    <p>{{text | toLowerCase | toUpperCase}}</p>
    <hr>

    <input v-model="filterText"/>
    <ul>
      <li v-for="fruit in filteredFruits"> {{fruit}} </li>
    </ul>

    <app-list></app-list>
  </div>
</template>

<script>
  import List from './List.vue';
  import {fruitMixin} from "./fruitMixin";

  export default {
  data(){
    return {
      text : 'Sample Text',
    }
  },
  filters:{
    toLowerCase(value){
      return value.toLowerCase();
    }
  },
  components:{
    appList: List
  },
  mixins: [fruitMixin]

}
</script>

<style>

</style>

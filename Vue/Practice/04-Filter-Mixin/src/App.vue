<template>
  <div id="app">
    <h1>Filters & Mixins</h1>
    <hr>
    <p>{{text | toLowerCase}}</p>
    <p>{{text | toUpperCase}}</p>
    <p>{{text | toLowerCase | toUpperCase}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      text : 'Sample Text'
    }
  },
  filters:{
    toLowerCase(value){
      return value.toLowerCase();
    }
  }

}
</script>

<style>

</style>

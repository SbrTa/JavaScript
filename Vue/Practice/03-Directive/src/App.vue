<template>
  <div>
    <h2>Custom Directive</h2>
    <p v-highlight="'red'">Default Paragraph</p>
    <p v-highlight:background.delayed="'red'">Global</p>
    <hr>
    <p v-local-highlight:background.delayed.blink="{mainColor:'red', secondColor:'green', interval:500}">Local</p>


  </div>
</template>

<script>
  export default {
    directives:{
      'local-highlight':{
        bind(el,binding,vnode){
          var delay=0;
          if (binding.modifiers['delayed']) {
            delay=2500;
          }
          if (binding.modifiers['blink']){
            let mainColor = binding.value.mainColor;
            let secondColor = binding.value.secondColor;
            let currentColor = mainColor;
            setTimeout(()=>{
              setInterval(()=>{
                currentColor= currentColor==secondColor ? mainColor: secondColor;
                if (binding.arg=='background'){
                  el.style.backgroundColor=currentColor;
                }else {
                  el.style.color=currentColor;
                }
              },binding.value.interval);

            },delay);
          }else {
            setTimeout(()=>{
              if (binding.arg=='background'){
                el.style.backgroundColor=binding.value.mainColor;
              }else {
                el.style.color=binding.value.mainColor;
              }
            },delay);
          }
        }
      }
    }
  }
</script>

<style>
</style>

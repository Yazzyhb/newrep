<template>
 
  <div>
    
   
   
  <NavBar></NavBar>
  <div class="container main"><RouterView></RouterView></div>
 


</div>
</template>

<script>

import NavBar from '@/components/navBar.vue';


export default {
  name: 'App',
  components: {
    NavBar,
   
},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
    margin: 0;
    padding: 0;
}
body{
    margin-top: -60px;
    font-family: Arial, Helvetica, sans-serif;
    background-color: rgb(255, 255, 255);
  color: black;
   
}


</style>

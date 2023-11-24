<template>
    <div class="board-container-one">
  <homePage></homePage>
  <MonDay></MonDay>
  <ThuesDay></ThuesDay>
  <WednesDay></WednesDay>
</div>
  <div class="board-container-three">
    <ThursDay></ThursDay>

  <FriDay></FriDay>
  <SaturDay></SaturDay>
</div>
</template>

<script>
import homePage from '@/components/homePage.vue';
import MonDay from '@/components/MonDay.vue';
import ThuesDay from '@/components/ThuesDay.vue';
import WednesDay from '@/components/WednesDay.vue';
import FriDay from '@/components/FriDay.vue';
import SaturDay from '@/components/SaturDay.vue';
import ThursDay from '@/components/ThursDay.vue';

export default {
  name: 'App',
  components: {
  
    homePage,
    MonDay,
    ThuesDay,
    WednesDay,
    ThursDay,
    FriDay,
    SaturDay,
},
}
</script>
<style>
.board-container-one {
  display: flex; /* Use flexbox to create a flexible container */
  justify-content: space-around; /* Distribute space around the components */
  margin: 20px; /* Add some margin for spacing */
}
.board-container-three {
  display: flex; /* Use flexbox to create a flexible container */
  justify-content: space-around; /* Distribute space around the components */
  margin: 20px; /* Add some margin for spacing */
}
</style>
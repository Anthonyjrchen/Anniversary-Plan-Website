<script setup>
  import { RouterLink,RouterView } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'
  import IconHeart from './components/icons/IconHeart.vue';

</script>
<!-- MAYBE ADD "HAPPY ANNIVERSARY" LANDING PAGE TRANSITION COVER -->
<template class="wrap">
  <div class="wrap">
    <div class="content">
        <HelloWorld msg="We're here now <3" />
    </div>
    <RouterView />
  </div> 
</template>

<style scoped>
.wrap {
  position:relative;
}

.wrap:before {
  content:"";
  position:fixed;
  min-width:100vw;
  min-height:100vh;
  background-image: url('./assets/tunnelbluffs.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  opacity:0.7;
  
}

.btn{
  position:absolute;
}

.content{
  position:relative;
}


</style>

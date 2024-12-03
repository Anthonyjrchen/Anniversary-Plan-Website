<script setup>
  import { RouterView } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'
 

</script>

<template>
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
  position:absolute;
  min-height:100vh;
  min-width:100vw;
  background-image: url('./assets/dimsumplace.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  opacity:0.5;
  
}

.content{
  position:relative;
}


</style>

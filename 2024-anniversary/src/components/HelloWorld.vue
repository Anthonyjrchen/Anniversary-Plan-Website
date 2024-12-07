<script setup>
  import Stopwatch from './stopwatch.vue';
  defineProps({
    msg: {
      type: String,
      required: true,
    },
  })

  
</script>

<template>
  <div class="greetings">
    <div class="grid">
      <h1>{{ msg }}</h1>
      <div class= "custom header">
      <Stopwatch />
    </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.custom.header {
  font-size: 1.4rem;

}

.greetings {
  text-align: center;
  color: white;
}

.grid {
  display: grid;
  justify-content: center;
  align-items: center;
}
</style>

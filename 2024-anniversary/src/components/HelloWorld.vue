<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1>{{ msg }}</h1>
    <div class="custom header">
      Three years have never flew past so fast 
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
</style>

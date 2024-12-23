<script setup>
 import ILYButton from '../components/ILYButton.vue'
</script>

<template>
  <header>
      <div  class="container flex flex-col items-center">
        <ILYButton />
      </div>
    
      <!-- <nav>
        <RouterLink to="/year1">Click me shawty</RouterLink>
      </nav> -->
    </header>
</template>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg {
  /* backdrop-filter: grayscale(20%); */
  opacity: 0.6;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
}
.logo {
  display: block;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

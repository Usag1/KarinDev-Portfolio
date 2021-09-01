<template>
  <Header />
</template>

<script>
import { compile } from 'vue';
import Header from './components/Header';

  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style>

@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background: #212121;
  background-size: auto;
  margin: 0 auto;
  padding: 0%;
  height: 100%;
  width: 100%;
}
h2 {
  font-size: 2.5rem;
}
p {
  font-size: 1.25rem;
  line-height: 1.5rem;
  letter-spacing: 1px;
}

/* Mobile & Tablet */
@media (max-width: 768px) {
  h2 {
  font-size: 2rem;
  }
  p {
  font-size: 1rem;
  line-height: 1.4rem;
  letter-spacing: 1px;
  }
}
</style>

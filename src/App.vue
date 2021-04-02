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
  background-size: cover;
  background-position: center top;
  margin: 0 auto;
  padding: 0 4%;
  min-height: 100vh;
}
</style>

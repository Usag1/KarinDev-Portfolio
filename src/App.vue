<template>
  <div id="nav">
    <div class="header-left">
      <img src="" alt="Logo" class="logo">
    </div>
    <div class="header-right">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link> |
      <router-link :to="{ name: 'Blog'}">Blog</router-link> |
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
    </div>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background: #212121;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
  min-height: 100vh;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
}

#nav a {
  padding: 6px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  text-decoration: none; 
  transition: all 0.3s;
}

#nav a:hover {
  color: #00838F;
}

.img {
  max-width: 100%;
}

</style>

<template>
  <div id="nav">
    <div class="header-left">
     <img src="https://see.fontimg.com/api/renderfont4/dE0g/eyJyIjoiZnMiLCJoIjoxNDUsInciOjE3NjUsImZzIjo4MiwiZmdjIjoiI0ZGRkNGQyIsImJnYyI6IiMwM0EwOEIiLCJ0IjoxfQ/S2FyaW5EZXY/beautiful-people-personal-use.png" 
     alt="Fancy fonts" class="logo">
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
    <div class="header-right">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <span>|</span> 
      <router-link :to="{ name: 'About' }">About</router-link>
      <span>|</span>
      <router-link :to="{ name: 'Blog'}">Blog</router-link>
      <span>|</span>
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
    </div>
  </div>
  <transition name="router-anim" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown">
  <router-view/>
  </transition>
</template>

<script>
export default {
  name: 'App'
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
#nav {
  height: 100px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
}
#nav a {
  padding: 6px;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  text-decoration: none; 
  transition: all 0.3s;
}
#nav a:hover {
  color: #00838F;
}
#nav .logo {
  width: 200px;
}
#nav .bi {
  float: right;
  display: none;
}
.img {
  max-width: 100%;
}
h2 {
  font-size: 2.5rem;
}
p {
  font-size: 1.25rem;
  line-height: 1.5rem;
  letter-spacing: 1px;
}

</style>

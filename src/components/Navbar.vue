<template>
    <div class="navbar">
        <router-link :to="{ name: 'Home' }">Home</router-link>
       
        <router-link :to="{ name: 'About' }">About</router-link>
      
        <router-link :to="{ name: 'Blog'}">Blog</router-link>
      
        <router-link :to="{ name: 'Contact' }">Contact</router-link>
    </div>
</template>

<script>
    export default {
       name: 'Navbar' 
    }
</script>

<style scoped>
.navbar {
    margin: 3%;
    display: flex;
}
.navber ul {
    list-style: none;
}
.navbar a {
  margin-right: 26px;
  padding: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  text-decoration: none; 
  transition: all 0.3s;
  background: linear-gradient(currentColor, currentColor) left bottom / 0% 1px no-repeat;
}
.navbar a:hover {
  color: #00838F;
  background: linear-gradient(currentColor, currentColor) left bottom / 100% 1px no-repeat;
}
</style>
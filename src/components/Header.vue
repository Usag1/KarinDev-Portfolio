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
       
      <router-link :to="{ name: 'About' }">About</router-link>
      
      <router-link :to="{ name: 'Blog'}">Blog</router-link>
      
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
    </div>
  </div>
  <transition name="router-anim" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown">
  <router-view/>
  </transition>
</template>

<script>
  export default {
  name: 'Header'
  }
</script>

<style scope>
#nav {
  height: 6vh;
  padding: 30px;
  display: flex;
  justify-content: space-between;
}
#nav a {
  padding: 0 20px 0 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  text-decoration: none; 
  transition: all 0.3s;
  background: linear-gradient(currentColor, currentColor) left bottom / 0% 1px no-repeat;
}
#nav a:hover {
  color: #00838F;
  background: linear-gradient(currentColor, currentColor) left bottom / 85% 1px no-repeat;
}
#nav .logo {
  padding-right: 20px;
  width: 50%;
}
#nav .bi {
  float: right;
  display: none;
}
.img {
  max-width: 100%;
}
.header-right {
  margin-top: 1.5rem;
  display: flex;
}
#nav ul {
  list-style: none;
}
.humberger {
  display: none;
}

/* Mobile & Tablet */
@media (max-width: 768px) {
  #nav {
    overflow-x: hidden;
  }
  .header-right {
    position: absolute;
    right: 0px;
    height: 90vh;
    top: 10vh;
    background: rgba(33, 33, 33, .8);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    transform: translate(100%);
    transition: transform .5s ease-in;
  }
  .header-right a {
    opacity: 0;
  }
  
}
</style>
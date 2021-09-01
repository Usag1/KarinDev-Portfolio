<template>
    <div class="navbar_mobile">
        <router-link :to="{ name: 'Home' }" @click="!showNav">Home</router-link>
       
        <router-link :to="{ name: 'About' }" @click="!showNav">About</router-link>
      
        <router-link :to="{ name: 'Blog' }" @click="!showNav">Blog</router-link>
      
        <router-link :to="{ name: 'Contact' }" @click="!showNav">Contact</router-link>
    </div>
</template>

<script>
    export default {
       name: 'NavbarMobile'
    }
</script>

<style scoped>
.navbar_mobile {
    position: absolute;
    z-index: 3;
    width: 50%;
    height: 100vh;
    left: 1%;
    display: flex;
    flex-direction: column;
    background: #212121;
    transition: 1.5s cubic-bezier(.05,.27,0,1.02);
}
.navber_mobile ul {
    list-style: none;
}
.navbar_mobile a {
  margin-top: 3em;
  padding-bottom: 1%;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  text-decoration: none; 
  transition: all 0.3s;
  background: linear-gradient(currentColor, currentColor) left bottom / 0% 1px no-repeat;
}
.navbar_mobile a:hover {
  color: #00838F;
  background: linear-gradient(currentColor, currentColor) left bottom / 100% 1px no-repeat;
}
</style>
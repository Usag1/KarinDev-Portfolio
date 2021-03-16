<template>
  <div id="home">
    <div class="home-left">
      <h1>Karin Ikenaga</h1>
      <p>Web designer<br>&<br> Frontend developer</p>
      <router-link :to="{ name:'Contact' }" class="button" >
      Contact me
      </router-link>
    </div>
    <img src="../assets/karin.png" alt="my-pic">
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped>
#home {
  padding: 100px 0;
  height: 50vh;
  display: flex;
  justify-content: space-around;
}
.home-left {
 padding-top: 350px;
}
#home .button {
  border-radius: 4px;
  padding: 6px 12px;
  text-decoration: none;
  background: #00838F;
  color: #212121;
  cursor: pointer;
  font-size: 1.25rem;
}
#home .button:hover {
  box-shadow: 0 0 8px 2px #00838F; 
}
#home h1 {
  font-size: 2.5rem;
}
#home p {
  font-size: 1.5rem;
  line-height: 30px;
}
#home img {
  padding-top: 50px;
}
</style>

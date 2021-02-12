<template>
  <div id="home">
    <div class="home-left">
      <h1>Karin Ikenaga</h1>
      <p>Web designer & Frontend developer</p>
      <router-link :to="{ name:'Contact' }" class="button" >
      Contact me
      </router-link>
    </div>
    <img src="../assets/home-pic.jpg" alt="my-pic">
    <Sns /> 
  </div>
</template>

<script>
import Sns from '../components/Sns'

export default {
  name: 'Home',
  components: { Sns }
}
</script>

<style>
#home {
  padding: 100px 0;
  height: 50vh;
  display: flex;
  justify-content: space-around;
}
.home-left {
 padding-top: 10rem;
}
#home .button {
  border-radius: 5px;
  padding: 6px 12px;
  text-decoration: none;
  background: #00838F;
  color: #212121;
  cursor: pointer;
}
#home .button:hover {
  box-shadow: 0 0 8px 2px #00838F; 
}
img {
  height: 20rem;
  width: 28rem;
}
</style>

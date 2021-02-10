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

<style scoped>
#home {
  padding: 100px 0;
  height: 50vh;
  display: flex;
  justify-content: space-around;
}

.home-left {
 padding-top: 25rem;
}

#home .button {
  border-radius: 5px;
  padding: 6px 12px;
  text-decoration: none;
  background: rgba(0, 155, 159, .8);
  color: #212121;
  cursor: pointer;
}

img {
  width: 40rem;
}
</style>

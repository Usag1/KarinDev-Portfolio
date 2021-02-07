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
  <Footer />
</template>

<script>
import Footer from '../components/Footer'
import Sns from '../components/Sns'

export default {
  name: 'Home',
  components: { Footer, Sns }
}
</script>

<style scoped>
#home {
  margin: 50px 0;
  padding: 100px 0;
  display: flex;
  justify-content: space-around;
}

.home-left {
 margin-top: 130px;
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
  width: 360px;
}
</style>

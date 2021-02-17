<template>
  <div id="home">
    <div class="home-left">
      <h1>Karin Ikenaga</h1>
      <p>Web designer & Frontend developer</p>
      <router-link :to="{ name:'Contact' }" class="button" >
      Contact me
      </router-link>
    </div>
    <img src="../assets/karin1_edited.jpg" alt="my-pic">
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
  justify-content: center;
}
.home-left {
 padding-top: 350px;
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
  padding-top: 200px;
  height: 20rem;
  width: 28rem;
}
</style>

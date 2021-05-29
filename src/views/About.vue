<template>
  <div class="about">
    <h2>About me</h2>
    <h3>Hello World!</h3>
    <p>My name is Karin Ikenaga. I am a positve and passionate self-taught developer. My focus is on frontend, but I also know some backend using Node.JS 
    other than HTML and CSS I enjoy writing JavaScript, and know React.JS and Vue.JS. 
    I am originally from Japan, now living in Denmark.</p>

    <div class="grid">
      <img src="../assets/html5-logo.png" alt="HTML5-logo">
      <img src="../assets/css3-logo.png" alt="CSS3-logo">
      <img src="../assets/JS-logo.png" alt="Javascript-logo">
      <img src="../assets/React.js-logo.png" alt="React-logo">
      <img src="../assets/Vue-logo.png" alt="Vue-logo">
      <img src="../assets/node.js-logo.png" alt="node-logo">
    </div>
  </div>
</template>

<script>

  export default {
    name: 'About',
  }

</script>

<style scoped>
h3 {
  margin-top: 5%;
  font-size: 1.8rem;
  line-height: 40px;
}
.grid {
  margin: 10%;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
}
img {
  height: 3em;
}
p {
  margin: 2rem auto;
  width: 750px;
}

/* Mobile & Tablet */
@media (max-width: 768px) {
  h3 {
  margin-top: 1.5em;
  font-size: 1.5rem;
  line-height: 25px;
  }
  p {
  margin: 2rem auto;
  width: 80%;
  }
  .grid {
  padding: 0 40%;
  display: grid;
  grid-template-columns: repeat(3, 1fr) ;
  row-gap: 10px;
  }
  img {
    height: 2em;
  }
}
</style>


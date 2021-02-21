<template>
  <div class="about">
    <h2>About me</h2>
    <h3>Hello World<br>I'm Karin</h3>
    <p>I am a positve and passionate self-taught developer<br>My focus is on frontend, but I also know some backend using Node.JS<br>
    other than HTML and CSS I enjoy writing JavaScript, and know React.JS and Vue.JS<br>
    I am originally from Japan, now living in Denmark</p>

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

<style scoped>
h3 {
  margin-top: 100px;
  font-size: 1.8rem;
  line-height: 40px;
}
.grid {
  margin: 10%;
  display: flex;
  justify-content: center;
  gap: 10px;
}
img {
  height: 3em;
}
</style>


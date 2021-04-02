<template>
  <div class="about-ja">
    <h2>About me</h2>
    <h3>Hello World!</h3>
    <p>池永夏鈴　1994年埼玉県生まれ。東京の大学を卒業後、独学でプログラミングの勉強を始める。
      HTML、CSS、JavaScript、React.JSやVue.JSを使ったフロントエンドを中心に行っているが、Node.JSを使ったバックエンドの知識も多少ある。
      現在は、Googleが提供している'Google IT Automation with Python プロフェッショナル認定'を受講中。
      日本生まれ日本育ちで、現在はデンマークのコペンハーゲンに生活の拠点をおいている。
    </p>

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
p {
  margin: 2rem auto;
  width: 750px;
}
</style>
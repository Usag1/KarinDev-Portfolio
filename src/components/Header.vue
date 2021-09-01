<template>
  <NavbarMobile v-if="mobileView" :class="{'open':!showNav}" />
  <div class="nav">
    <div class="menu-icon" v-if="mobileView" @click="showNav = !showNav">
      <button class="burger-x" :class="x">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="header-left">
     <img src="https://see.fontimg.com/api/renderfont4/dE0g/eyJyIjoiZnMiLCJoIjoxNDUsInciOjE3NjUsImZzIjo4MiwiZmdjIjoiI0ZGRkNGQyIsImJnYyI6IiMwM0EwOEIiLCJ0IjoxfQ/S2FyaW5EZXY/beautiful-people-personal-use.png" 
     alt="Fancy fonts" class="logo">
    </div>
    <div class="header-right">
      <Navbar v-if="!mobileView" />
    </div>
  </div>
  <transition name="router-anim" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown">
  <router-view/>
  </transition>
</template>

<script>
import { computed } from 'vue';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';

  export default {
  name: 'Header',
  components: {
    Navbar,
    NavbarMobile
  },
  data: () => {
    return {
      mobileView: true,
      showNav: false
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 768;
    }
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },
  computed: {
    x: function(){
      return {
        x: this.showNav
      }
    }
  }
};
</script>

<style scoped>
.nav {
  height: 5vh;
  padding: 3%;
  display: flex;
  justify-content: space-between;
}
.nav .logo {
  padding-right: 20px;
  height: 4em;
}
.img {
  max-width: 100%;
}
.burger-x{
  padding: 5%;
  margin-right: 5%;
  cursor: pointer;
}
.burger-x,
.burger-x span {
  display: inline-block;
  transition: all .4s;
  box-sizing: border-box;
}
.burger-x {
  position: relative;
  width: 2.5em;
  height: 2em;
  background: none;
  border: none;
  appearance: none;
  cursor: pointer;
}
.burger-x span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #fff;
  border-radius: 4px;
}
.burger-x span:nth-of-type(1) {
  top: 0;
}
.burger-x span:nth-of-type(2) {
  top: 45%;
}
.burger-x span:nth-of-type(3) {
  bottom: 0;
}
.burger-x.x span:nth-of-type(1) {
  transform: translateY(12.5px) rotate(-315deg);
  z-index: 5;
}
.burger-x.x span:nth-of-type(2) {
  opacity: 0;
  z-index: 5;
}
.burger-x.x span:nth-of-type(3) {
  transform: translateY(-12.5px) rotate(315deg);
  z-index: 5;
}
.open {
  transform: translateX(-103%);
  transition: all 2.1s;
}
</style>

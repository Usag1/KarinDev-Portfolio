<template>
    <div id="burger" class="float-right" 
        :class="{'active' : isBurgerActive}"
        @click.prevent="toggle">
        <slot>
          <button type="button" class="burger-button" title="Menu">
            <span class="burger-bar burger-bar--1"></span>
            <span class="burger-bar burger-bar--2"></span>
            <span class="burger-bar burger-bar--3"></span>
          </button>
        </slot>
    </div>
</template>


<script>
  export default {
    name:'Burger',
    data: () => ({
      isBurgerActive: false,
    }),
    methods: {
      toggle () {
        this.isBurgerActive = !this.isBurgerActive

      }
    }
  }
</script>


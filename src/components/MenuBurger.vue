<script>
export default {
  name: 'MenuBurger',
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
      this.$emit('toggle-menu', this.isActive);
    },

    resetIcone() {
      this.isActive = false;
      this.isVisible = false;
    },
  },
};

</script>

<template>
  <div class="bouton-menu">
      <span class="menu-burger" @click="toggleMenu">
        <span class="line" :class="{active: isActive}"></span>
        <span class="line2" :class="{active: isActive}"></span>
        <span class="line3" :class="{active: isActive}"></span>
      </span>
  </div>
</template>

<style scoped>

.bouton-menu {
  display: none;
}

@media screen and (max-width: 910px) {
  .bouton-menu {
    display: block;

    .menu-burger {
      display: block;
      cursor: pointer;
      position: absolute;
      top: 11px;
      left: 11px;
      z-index: 9999999;
    }
  }

  .line, .line2, .line3 {
    display: block;
    width: 30px;
    height: 3px;
    background-color: #E94F35;
    margin: 6px 0;
    transition: 0.4s;
  }

  .line.active {
    top: 8px;
    left: 0px;
    position: fixed;
    transform: rotate(-45deg);
  }

  .line2.active {
    top: 8px;
    left: 0px;
    position: fixed;
    transform: rotate(45deg);
  }

  .line3.active {
    display: none;
    transition: opacity 0.4s;
  }

}

</style>
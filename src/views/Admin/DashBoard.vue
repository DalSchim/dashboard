<script>
import NewNav from "@/components/navigation/NewNav.vue";

export default {
  name: "DashBoard",
  components: {NewNav}
}
</script>

<template>
  <div class="wrapeur">
    <new-nav/>
    <div class="container-app">
      <transition name="fade" >
        <router-view/>
      </transition>
    </div>
    <div class="gray-backgound"></div>
  </div>
</template>

<style scoped>
cursor {
  display: flex;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}



.container-app {
  width: 100%;
  padding-left: 82px;
  @media screen and (max-width: 910px) {
    padding-left: 0px;
    padding-top: 64px;
  }
}

.wrapeur {
  display: flex;
}

.gray-backgound {
  width: 100%;
  height: 80vh;
  background: #f8f8f8;
  position: fixed;
  z-index: -1;
  bottom: 0;
}



</style>
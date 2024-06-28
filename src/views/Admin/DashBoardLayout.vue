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
        <router-view/>
    </div>
    <div class="gray-backgound"></div>
  </div>
</template>

<style scoped>
cursor {
  display: flex;
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
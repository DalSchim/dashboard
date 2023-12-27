<script>
import NewNav from "@/components/NewNav.vue";

export default {
  name: "DashBoard",
  components: {NewNav}
}
</script>

<template>
  <div class="wrapeur">
    <new-nav/>
    <router-view/>
    <div class="gray-backgound"></div>
  </div>
</template>

<style scoped>
cursor{
  display: flex;

}

.wrapeur {
  display: grid;
  grid-template-columns: 0.02fr 1fr;
}

.gray-backgound {
  width: 100%;
  height: 80vh;
  background: #f8f8f8;
  position: fixed;
  z-index: -1;
  bottom: 0;
}

@media screen and (max-width: 910px) {
  .wrapeur {
    display: grid;
    grid-template-columns: 1fr;
  }

}

</style>
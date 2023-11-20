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
    </div>
    <div class="gray-backgound"></div>

</template>

<style scoped>
.wrapeur{
  display: grid;
  grid-template-columns: 0.02fr 1fr;
}
@media screen and (max-width: 910px) {
  .wrapeur{
    display: grid;
    grid-template-columns: 1fr;
  }


}

</style>
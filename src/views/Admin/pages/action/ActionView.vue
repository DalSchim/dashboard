<script>


import DropFile from "@/components/DropFile.vue";
import ImageGalery from "@/components/ImageGalery.vue";

export default {
  name: 'ActionView',
  components: {
    ImageGalery,
    DropFile},
}

</script>

<template>
  <div class="container">
    <div class="tabs"></div>

    <div class="form">
      <form action="">
        <drop-file/>
      </form>
    </div>

    <div class="galeri">
      <image-galery/>
    </div>

  </div>

</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.4fr 1fr;
  grid-auto-columns: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "tabs tabs"
    "form galeri";
}

.tabs {
  grid-area: tabs;
}

.form {
  grid-area: form;
}

.galeri {
  grid-area: galeri;
}

</style>
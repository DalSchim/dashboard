<script>


import DropFile from "@/components/DropFile.vue";
import ImageGalery from "@/components/ImageGalery.vue";
import DeploimentosView from "@/views/Admin/pages/action/DeploimentosView.vue";
import AplicationView from "@/views/Admin/pages/action/AplicationView.vue";


export default {
  name: 'ActionView',
  data: () => ({
    tab: null,
  }),
  components: {
    AplicationView,
    DeploimentosView,
    ImageGalery,
    DropFile
  },
}

</script>

<template>
  <v-card>
    <v-tabs
        v-model="tab"
        color="#E94F35"
    >
      <v-tab value="one">Alumage/Extinction</v-tab>
      <v-tab value="two">Font d’écrans</v-tab>
      <v-tab value="three">Deploiment os</v-tab>
      <v-tab value="fore">Mise à jour</v-tab>
      <v-tab  value="five">instalation d'aplication</v-tab>

    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          One
        </v-window-item>

        <v-window-item value="two">
          <div class="container">

            <div class="form">
              <form action="">
                <drop-file/>
              </form>
            </div>
            <div class="galeri">
              <image-galery/>
            </div>
          </div>
        </v-window-item>

        <v-window-item class="pa-2" value="three">
          <deploimentos-view/>
        </v-window-item>
        <v-window-item value="fore">
          fore
        </v-window-item>
        <v-window-item value="five">
          <aplication-view/>
        </v-window-item>
      </v-window>
    </v-card-text>

  </v-card>

</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
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

@media screen and (max-width: 910px) {
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 1.1fr;
    gap: 16px;
    grid-auto-flow: row;
    grid-template-areas:
      "tabs"
      "form"
      "galeri";
    width: 100%;
    height: 100vh;
  }
}

</style>
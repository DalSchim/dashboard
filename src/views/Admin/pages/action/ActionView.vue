<script>


import DropFile from "@/components/DropFile.vue";
import ImageGalery from "@/components/ImageGalery.vue";
import DeploimentosView from "@/views/Admin/pages/action/DeploimentosView.vue";
import AplicationView from "@/views/Admin/pages/action/AplicationView.vue";


export default {
  name: 'ActionView',
  data: () => ({
    tab: null,
    length:2,
    search: '',
    items: ['Alumage/Extinction', 'Font d’écrans', 'Deploiment os', 'Mise à jour', 'Instalation d\'aplication'],
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
  <v-card class="mx-auto" width="100%">
    <v-tabs
        v-model="tab"
        color="#E94F35"
        show-arrows
        slider-color="#E94F35"
        grow
    >
      <v-tab
          v-for="(item, i) in items"
          :key="i">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="Alumage/Extinction">
          One
        </v-window-item>

        <v-window-item value="Font d’écrans">
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

        <v-window-item class="pa-2" value="Deploiment os">
          <deploimentos-view/>
        </v-window-item>
        <v-window-item value="Mise à jour">
          fore
        </v-window-item>
        <v-window-item value="Instalation d'aplication">
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


</style>
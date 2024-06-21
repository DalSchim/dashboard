<script>
import DeploimentosView from "@/views/Admin/pages/action/DeploimentOsView.vue";
import AplicationView from "@/views/Admin/pages/action/AplicationView.vue";

export default {
  name: 'ActionView',
  data: () => ({
    tab: null,
    length: 2,
    search: '',
    items: ['Alumage/Extinction', 'Font d’écrans', 'Deploiment os', 'Mise à jour', 'Instalation d\'aplication'],
  }),
  components: {
    AplicationView,
    DeploimentosView,
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
        </v-window-item>
        <v-window-item value="Font d’écrans">
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
.tabs {
  display: grid;
  grid-template-areas: "tabs";

}

.form {
  grid-area: form;
}

.galeri {
  grid-area: galeri;
}


</style>
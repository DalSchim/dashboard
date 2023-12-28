<template>
  <v-card>
    <v-tabs
        v-model="tab"
        color="#E94F35">
      <v-tab value="one">Item One</v-tab>
      <v-tab value="two">Item Two</v-tab>
      <v-tab value="three">Item Three</v-tab>
      <v-tab value="for">Item for</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <os-form-component/>
        </v-window-item>

        <v-window-item value="two">
          Two
        </v-window-item>

        <v-window-item value="three">
          Three
        </v-window-item>

        <v-window-item value="for">
          fore
        </v-window-item>
      </v-window>
    </v-card-text>

  </v-card>
</template>
<script>
import OsFormComponent from "@/components/OsFormComponenent.vue";

export default {
  components: {OsFormComponent},
  data: () => ({
    tab: null,
  }),

}
</script>
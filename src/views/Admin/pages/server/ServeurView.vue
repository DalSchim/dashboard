<style scoped>


</style>
<template>
  <v-card class="mx-auto" width="100%">
    <!--  respncive tabs--->
    <v-tabs v-model="tab" background-color="primary" dark grow show-arrows>
      <v-tab v-for="item in items" :key="item" @click="tab = item" >
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="stat">
          <DataTableComponent name="Serveur"/>
        </v-window-item>

        <v-window-item value="accès">
          <div class="tab-container">
            <FormAccerdistance/>
            <div class="view-pc">
              Hello
            </div>
          </div>

        </v-window-item>

        <v-window-item value="assistance">
          Three
        </v-window-item>
        <v-window-item value="nouveau">
          nouveau
        </v-window-item>

      </v-window>
    </v-card-text>

  </v-card>

</template>

<script>/*
import ChartCpu from "@/components/ChartCpu.vue";
import ChartRam from "@/components/ChartRam.vue";
import ChartMemor from "@/components/ChartMemorie.vue";
import ChartUtil from "@/components/Chartutil.vue";
import UtilisateurComponent from "@/components/UtilisateurComponent.vue";
import RamComponent from "@/components/RamComponent.vue";*/
import FormAccerdistance from "@/components/FormAccerdistance.vue";
import DataTableComponent from "@/components/DataTable/HostTableComponent.vue";

export default {
  name: 'AboutView',
  components: {
    DataTableComponent,

    FormAccerdistance,
    /*RamComponent,
    UtilisateurComponent,
    ChartUtil,
    ChartMemor,
    ChartRam,
    ChartCpu*/
  },
  data: () => ({
    tab: null,
    search: '',
    items: ['stat', 'accès', 'assistance', 'nouveau'],

  }),

}
</script>

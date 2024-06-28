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
          <ActivEtab/>
        </v-window-item>

      </v-window>
    </v-card-text>

  </v-card>

</template>

<script>
import FormAccerdistance from "@/components/FormAccerdistance.vue";
import DataTableComponent from "@/components/DataTable/HostTableComponent.vue";
import ActivEtab from "@/views/Admin/pages/server/ActivEtab.vue";

export default {
  name: 'AboutView',
  components: {
    ActivEtab,
    DataTableComponent,

    FormAccerdistance,

  },
  data: () => ({
    tab: null,
    search: '',
    items: ['stat', 'accès', 'assistance', 'nouveau'],
  }),

}
</script>

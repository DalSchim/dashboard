<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows:   1fr 1.1fr;
  gap: 0 0;
  grid-auto-flow: row;
  grid-template-areas:
    "information stat-area stat-area"
    "information stat-area stat-area";
  width: 100%;
}

.information {
  grid-area: information;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 0.2fr 0.2fr;
  gap: 16px;
  grid-auto-flow: row;
  margin: 32px;

}

.stat-area {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 16px 16px;
  grid-auto-flow: row;
  margin: 32px;
  grid-template-areas:
    "cpu ram"
    "memory user";
  grid-area: stat-area;
}

.cpu {
  grid-area: cpu;
}

.ram {
  grid-area: ram;
}

.memory {
  grid-area: memory;
}

.user {
  grid-area: user;
}

.box {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #FAFAFA;
  box-shadow: -4px -1px 4px 0 rgba(0, 0, 0, 0.25);
  padding: 16px;
}


.tab-container {
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  grid-template-rows: 1fr;
  gap: 16px;
  grid-auto-flow: row;
   grid-template-areas:
      "form view-pc";
  width: 100%;
  height: 90vh;
}

.view-pc {
  background:black ;
  box-shadow: -4px -1px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  grid-area: view-pc;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}


/* responsive*/

@media screen and (max-width: 1024px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.2fr 1.1fr;
    gap: 0 0;
    grid-auto-flow: row;
    grid-template-areas:
      "information information"
      "stat-area stat-area";
    height: 100vh;
  }

  .stat-area {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 16px 16px;
    grid-auto-flow: row;
    margin: 32px;
    grid-template-areas:
      "cpu"
      "ram"
      "memory"
      "user";
    grid-area: stat-area;
    overflow-y: scroll;
<<<<<<< HEAD
    margin: 0;
    padding: 8px;
  }

  .information {
    padding: 8px;
    margin: 0;
=======
>>>>>>> parent of 14eab5d (responsive card statSe4)
  }

  .margin {
    margin-left: 44px;
  }

  .tab-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 1.1fr;
    gap: 16px;
    grid-auto-flow: row;
    grid-template-areas:
      "form"
      "view-pc";
    width: 100%;
    height: 100vh;
  }
}

</style>
<template>
  <v-card>
    <v-tabs class="margin" v-model="tab" color="#E94F35">
      <v-tab value="stat">Stat des SE4</v-tab>
      <v-tab value="accès">Accès à distance</v-tab>
      <v-tab value="assistance">Assistance utilsateur</v-tab>
      <v-tab vlaue="nouveau">Activer un nouveau site</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">

        <v-window-item value="stat">
          <form action="">
            <v-row>
              <v-col cols="12" sm="6" md="3">
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-select
                    v-model="select"
                    :items="items"
                    label="Select"
                    single-line
                    hide-details
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-select
                    v-model="select"
                    :items="items"
                    label="Select"
                    single-line
                    hide-details
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-select
                    v-model="select"
                    :items="items"
                    label="Select"
                    single-line
                    hide-details
                ></v-select>
              </v-col>
            </v-row>
          </form>
          <div class="container">
            <div class="information">
              <div class="box">
                <utilisateur-component/>
              </div>
              <div class="box">
                <ram-component/>
              </div>
            </div>
            <div class="stat-area">
              <div class=" box cpu">
                <chart-cpu/>
              </div>
              <div class="box ram">
                <chart-ram/>
              </div>
              <div class="box memory">
                <chart-memor/>
              </div>
              <div class=" box user">
                <chart-util/>
              </div>
            </div>
          </div>
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

<script>
import ChartCpu from "@/components/ChartCpu.vue";
import ChartRam from "@/components/ChartRam.vue";
import ChartMemor from "@/components/ChartMemorie.vue";
import ChartUtil from "@/components/Chartutil.vue";
import UtilisateurComponent from "@/components/UtilisateurComponent.vue";
import RamComponent from "@/components/RamComponent.vue";
import FormAccerdistance from "@/components/FormAccerdistance.vue";

export default {
  name: 'AboutView',
  components: {FormAccerdistance, RamComponent, UtilisateurComponent, ChartUtil, ChartMemor, ChartRam, ChartCpu},
  data: () => ({
    tab: null,
  }),
}
</script>
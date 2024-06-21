<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <h3>Choisir l'établissement</h3>
          </v-card-title>
          <v-card-text>
            <v-select
                v-model="selectedEtab"
                :items="etabs"
                item-text="fullname"
                item-value="cn"
                label="Etablissement"
                outlined
                @change="updateRooms"
            ></v-select>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <h3>Choisir la salle</h3>
          </v-card-title>
          <v-card-text>
            <v-select
                v-model="selectedRoom"
                :items="rooms"
                item-text="fullname"
                item-value="cn"
                label="Salle"
                outlined
                :disabled="!selectedEtab"
                @change="updateComputers"
            ></v-select>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <h3>Choisir l'ordinateur</h3>
          </v-card-title>
          <v-card-text>
            <v-select
                v-model="selectedComputer"
                :items="computers"
                item-text="fullname"
                item-value="cn"
                label="Ordinateur"
                outlined
                :disabled="!selectedRoom"
            ></v-select>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn @click="deployOs" color="primary" :disabled="!selectedComputer">Déployer l'OS</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    etabs: [],
    rooms: [],
    computers: [],
    selectedEtab: null,
    selectedRoom: null,
    selectedComputer: null,
  }),

  async mounted() {
    const response = await axios.get(`https://central.moncollege95.fr/api2/directory/etabs`);
    this.etabs = response.data;
  },

  methods: {


    async updateRooms() {
      this.rooms = [];
      this.computers = [];
      if (this.selectedEtab) {
        const response = await axios.get(`https://central.moncollege95.fr/api2/directory/etabs`);
        this.rooms = response.data;
      }
    },
    async updateComputers() {
      this.computers = [];
      if (this.selectedRoom) {
        const response = await axios.get(`https://central.moncollege95.fr/api2/directory/rooms`);
        this.computers = response.data;
      }
    },
    async deployOs() {
      if (this.selectedComputer) {
        const response = await axios.post(`https://central.moncollege95.fr/api2/computer`);
        console.log(response.data);
      }
    }
  },
};
</script>

<style scoped lang="scss">
</style>

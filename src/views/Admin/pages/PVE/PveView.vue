<template>
  <v-container>
    <v-combobox
        v-model="selectedItem"
        :items="items.map(item => item.etab)"
        item-text="etab"
        label="Sélectionnez un établissement"
    ></v-combobox>
    <v-btn @click="fetchMachines">Récupérer les machines</v-btn>
  </v-container>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>Les machines</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="fetchMachines">
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-data-table
        :items="machines"
        :headers="headers"
        :items-per-page="5"
        class="elevation-1"
    >
      <template v-slot:item.state="{ item }">
        <v-chip
            :color="item.state === 'up' ? 'green' : 'red'"
            dark
        >
          {{ item.state }}
        </v-chip>
      </template>
      <template v-slot:item.user="{ item }">
        <v-chip
            :color="item.user === 'N/A' ? 'grey' : 'blue'"
            dark
        >
          {{ item.user }}
        </v-chip>
      </template>
      <template v-slot:item.action="{ item }">
        <v-btn
            @click="showMachine(item)"
            color="primary"
            small
        >
          Voir
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedItem: null,
      items: [],
      machines: [],
      headers: [
        { title: 'CN', value: 'cn', align: 'start'},
        { title: 'État', value: 'state', align: 'end'},
        { title: 'Description', value: 'description', align: 'end' },
        { title: 'Utilisateur', value: 'user', align: 'end' },
        { title: 'Action', value: 'action', sortable: false, align: 'end' },
      ],
    };
  },
  created() {
    this.loadFromLocalStorage();
    this.fetchItems();
  },
  watch: {
    selectedItem(newVal) {
      localStorage.setItem('selectedItem', newVal);
    }
  },
  methods: {
    loadFromLocalStorage() {
      const savedSelectedItem = localStorage.getItem('selectedItem');
      if (savedSelectedItem) {
        this.selectedItem = savedSelectedItem;
        this.fetchMachines();
      }
    },
    async fetchItems() {
      try {
        const response = await fetch('https://central.moncollege95.fr/api2/directory/etabs');
        const data = await response.json();
        this.items = data.filter(item => item.state).map(item => ({
          etab: item.etab,
          id: item.cn,
        }));
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    },
    async fetchMachines() {
      if (this.selectedItem) {
        try {
          const selectedEtab = this.items.find(item => item.etab === this.selectedItem);
          const response = await axios.get(`https://central.moncollege95.fr/${selectedEtab.id}/api2/status/parc?name=base`);
          this.machines = response.data.map(machine => ({
            cn: machine.cn,
            state: machine.state,
            description: machine.description,
            user: machine.user ? machine.user.length : 'N/A',
            etab: machine.etab,
          }));
        } catch (error) {
          console.error('Erreur lors de la récupération des données :', error);
        }
      }
    },
    showMachine(machine) {
      this.$router.push({name: 'MachineView', params: {cn: machine.cn, etab: machine.etab}});
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>

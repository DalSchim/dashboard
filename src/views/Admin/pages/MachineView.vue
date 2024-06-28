<template>
  <div class="container">
    <div class="sidebar">
      <!-- Affichez les informations de la machine ici -->
      <h2>Informations de la machine</h2>
      <v-card>
        <v-card-title>{{ machine ? machine.cn : 'N/A' }}</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item>
                <v-list-item-title>Utilisateur</v-list-item-title>
                <v-list-item-subtitle>{{ userName }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
                <v-list-item-title>Adresse IP</v-list-item-title>
                <v-list-item-subtitle>{{ machineIp ? machineIp : 'N/A'}}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
                <v-list-item-title>MAC</v-list-item-title>
                <v-list-item-subtitle>{{ machineMac ? machineMac : 'N/A' }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
                <v-list-item-title>Statut</v-list-item-title>
                <v-list-item-subtitle>{{ machine ? machine.state : 'N/A' }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </div>

    <div class="data">
      <!-- Affichez la liste des logiciels installés ici -->
      <h2>Logiciels installés</h2>
      <v-text-field
          v-model="search"
          label="Rechercher..."
          append-icon="mdi-magnify"
          class="mb-4"
      ></v-text-field>

      <v-btn @click="fetchLogiciel">Rafraîchir</v-btn>

      <v-data-table
          :headers="headers"
          :items="filteredLogiciels"
          item-key="nom_app"
          :search="search"
          no-data-text="Aucun logiciel trouvé."
      >
        <template v-slot:no-data>
          <v-alert :value="true" color="error" icon="mdi-alert">
            Aucun logiciel trouvé.
          </v-alert>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    cn: {
      type: String,
      required: true
    },
    etab: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      machine: null,
      userName: null,
      machineIp: null,
      machineMac: null,
      logiciel: [],
      search: '', // Champ de recherche pour filtrer les logiciels
      headers: [
        { title: 'Nom', value: 'nom_app' },
        { title: 'Version', value: 'version_app' },
        { title: 'Catégorie', value: 'categorie_app' },
        { title: 'Statut', value: 'statut_poste_app' }
      ]
    };
  },
  computed: {
    filteredLogiciels() {
      // Filtrer les logiciels en fonction de la recherche
      return this.logiciel.filter(item => {
        return (
            item.nom_app.toLowerCase().includes(this.search.toLowerCase()) ||
            item.version_app.toLowerCase().includes(this.search.toLowerCase()) ||
            item.categorie_app.toLowerCase().includes(this.search.toLowerCase()) ||
            item.statut_poste_app.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    }
  },
  methods: {
    async fetchMachine() {
      try {
        const response = await axios.get(`https://central.moncollege95.fr/${this.etab}/api2/status/parc?name=base`);
        const machine = response.data.find(machine => machine.cn === this.cn);
        if (machine) {
          this.machine = machine;
          this.userName = machine.user && machine.user.length > 0 ? machine.user[0].name : 'N/A';
        } else {
          console.error('Machine non trouvée');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    },
    async fetchLogiciel() {
      try {
        const response = await axios.get(`https://central.moncollege95.fr/${this.etab}/api2/status/wpkg?name=${this.cn}`);
        this.logiciel = Object.values(response.data.app);
        this.machineIp = response.data.info.ip;
        this.machineMac = response.data.info.mac;
      } catch (error) {
        console.error('Erreur lors de la récupération des logiciels :', error);
      }
    }
  },
  created() {
    this.fetchMachine();
    this.fetchLogiciel();
  }
};
</script>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  grid-gap: 20px;
  height: 100vh;
  overflow: auto;
  padding: 20px;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .sidebar {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  }


}
</style>

<template>
  <!-- Tableau de données -->
  <v-toolbar>
    <v-toolbar-title>Software</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-detail
    ></v-text-field>
    <v-btn @click="fetchData">Refresh</v-btn>
  </v-toolbar>
  <v-card>
    <v-data-table
        v-model="localSelected"
        :loading="loading"
        :loading-text="loadingtext"
        :headers="headers"
        :items="filteredAPI"
        item-value="id"
        return-object
        show-select
    >
      <template v-slot:loading>
        <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "SoftwareTable",
  mounted() {
    this.initSession();
  },
  props: {
    selected: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      API: [],
      search: "",
      loading: true,
      loadingtext: "Chargement des données...",
      localSelected: this.selected,
      headers: [
        { title: "ID", value: "id" , align: "start" ,key: 'id'},
        { title: "Name", value: "name", align: 'start',key: 'name'  },
        { title: "Date de création", value: "date_creation", align: 'end', key:'dae_reation'  },
        { title: "Manufacturer", value: "manufacturer", align: 'end',key: 'manufacturer'  },
      ],
      sessionToken: '',
    };
  },

  watch: {
    selected(newValue) {
      this.localSelected = newValue;
    },
    localSelected(newValue) {
      this.$emit('update:selected', newValue);
    },
  },

  computed: {
    filteredAPI() {
      if (!this.search) {
        return this.API;
      }
      return this.API.filter(item => {
        return Object.keys(item).some(key =>
            String(item[key]).toLowerCase().includes(this.search.toLowerCase())
        );
      });
    }
  },
  methods: {
    async initSession() {
      try {
        const response = await axios.get("http://172.19.254.113/apirest.php/initSession/", {
          headers: {
            'Content-Type': 'application/json',
            "Authorization": "user_token PQ0EeWu5TJxDlmXso70mPa6kuH5d5pGtjgXCKCFp",
            'App-Token': 'xMDZe4FFlEZ6TKaGRAf811g5NfTvELljYhGa5qnf',
          },
        });
        this.sessionToken = response.data.session_token;
        this.fetchItemData();
      } catch (error) {
        console.error("Erreur lors de l'initialisation de la session :", error);
        this.loading = false;
      }
    },

    async fetchManufacturerName(url) {
      try {
        const response = await axios.get(url, {
          headers: {
            'Content-Type': 'application/json',
            'Session-Token': this.sessionToken,
            'App-Token': 'xMDZe4FFlEZ6TKaGRAf811g5NfTvELljYhGa5qnf',
          },
        });
        return response.data.name;
      } catch (error) {
        console.error("Erreur lors de la récupération du nom du fabricant :", error);
        return 'N/A';
      }
    },

    
    async fetchItemData() {
      try {
        const response = await axios.get(`http://172.19.254.113/apirest.php/software/?range=0-999999`, {
          headers: {
            'Content-Type': 'application/json',
            'Session-Token': this.sessionToken,
            'App-Token': 'xMDZe4FFlEZ6TKaGRAf811g5NfTvELljYhGa5qnf',
          },
        });
        const softwareData = response.data;
        const apiData = await Promise.all(softwareData.map(async (item) => {
          const manufacturerLink = item.links.find(link => link.rel === 'Manufacturer');
          const manufacturerName = manufacturerLink ? await this.fetchManufacturerName(manufacturerLink.href) : 'N/A';
          return {
            id: item.id,
            name: item.name,
            version: item.version,
            date_creation: item.date_creation,
            manufacturer: manufacturerName,
          };
        }));
        this.API = apiData;
        this.loading = false;
      } catch (error) {
        console.error("Erreur lors de la récupération des données de l'API GLPI :", error);
        this.loading = false;
      }
    },
    fetchData() {
      this.loading = true;
      this.initSession();
    },
  }
};
</script>

<style scoped>
</style>
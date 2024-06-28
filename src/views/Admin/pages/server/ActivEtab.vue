<template>
  <v-data-table
    :headers="headers"
    :items="etabs"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Les établissements</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-toolbar>
    </template>

  </v-data-table>
</template>
<script>
import axios from 'axios';
export default {
  name: 'ActivEtab',
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Nom',
          align: 'start',
          sortable: false,
          value: 'description',
        },
        { text: 'Nom complet', value: 'fullname' },
        { text: 'Info', value: 'info' },
        { text: 'Coordonnées', value: 'textencodedoraddress' },
        { text: 'Etab', value: 'etab' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      etabs: [],
    };
  },
  //https://central.moncollege95.fr/api2/directory/etabs
  /*
      {
        "cn": "0951279z",
        "description": "COLLEGE LES COUTURES PARMAIN",
        "fullname": "LES COUTURES",
        "info": "7182",
        "textencodedoraddress": "49.09575685,2.2017616343564095",
        "dn": "CN=0951279z,OU=etablissements,DC=athena,DC=moncollege95,DC=fr",
        "etab": "0951279z"
    },
     {
        "cn": "0950000y",
        "description": "Bac \u00e0 sable Conseil departemental du Val d'Oise Cergy Pontoise",
        "fullname": "Conseil departemental du Val d'Oise",
        "info": "0",
        "textencodedoraddress": "0.0",
        "dn": "CN=0950000y,OU=etablissements,DC=athena,DC=moncollege95,DC=fr",
        "etab": "0950000y",
        "state": true
    },*/
  mounted() {
    this.getEtabs();
  },


  methods: {
    // recuupe les etablissements
    getEtabs() {
      axios.get('https://central.moncollege95.fr/api2/directory/etabs')
        .then((response) => {
          this.etabs = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
</style>
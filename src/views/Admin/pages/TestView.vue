<template>
  <div class="test-view">
    <pre>{{ sourceData }}</pre>
    <h1>Données converties</h1>
    <pre>{{ convertedData }}</pre>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TestView',
  data() {
    return {
      sourceData: null,
      convertedData: [],
    };
  },

  mounted() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://central.moncollege95.fr/api2/directory/etabs');
        this.sourceData = response.data;
        this.convertData();
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    },

    convertData() {
      if (!this.sourceData || !Array.isArray(this.sourceData)) {
        console.error('Aucune donnée valide à convertir');
        return;
      }

      this.convertedData = this.sourceData.map(item => {
        const { description, fullname, textencodedoraddress, etab } = item;

        return {
          fields: {
            titre: fullname,
            uai: etab,
            categorie1: description,
            url: "https://sambaedu.0952282p.moncollege95.fr/admin",
            url1: "https://proxmox.0952282p.moncollege95.fr",
            ipfs: "",
            ipad: "",
          },
          geometry: {
            type: "Point",
            // string to number
            coordinates: [textencodedoraddress && parseFloat(textencodedoraddress.split(',')[0]), textencodedoraddress && parseFloat(textencodedoraddress.split(',')[1])],
          }
        };
      });
    }

  },


};
</script>

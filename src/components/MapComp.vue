<template>
  <div ref="map" style="height: 400px;"></div>
</template>

<script>
import L from 'leaflet';
import axios from "axios";

export default {
  data() {
    return {
      sourceData: [], // Stockage des données récupérées
      icons: {
        green: L.icon({
          iconUrl: require('@/assets/marker-icon.png'),
          iconSize: [32, 32],
        }),
        red: L.icon({
          iconUrl: require('@/assets/marker-icon-icon.png'),
          iconSize: [32, 32],
        }),
        grey: L.icon({
          iconUrl: require('@/assets/marker-icon-grey.png'),
          iconSize: [32, 32],
        })
      }
    };
  },
  mounted() {
    this.map = L.map(this.$refs.map).setView([48.9283964, 2.2147149], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.fetchData(); // Appel de la méthode fetchData lors du montage du composant
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://central.moncollege95.fr/api2/directory/etabs');
        this.sourceData = response.data;

        // Convertir les données et afficher les marqueurs sur la carte
        this.sourceData.forEach(item => {
          const {description, fullname, textencodedoraddress, cn, state} = item;
          const coordinates =  [textencodedoraddress && parseFloat(textencodedoraddress.split(',')[0]), textencodedoraddress && parseFloat(textencodedoraddress.split(',')[1])];
          if (!isNaN(coordinates[0]) && !isNaN(coordinates[1])) {
            L.marker(coordinates, { icon: this.checkStatus(state) })
                .addTo(this.map)
                .bindPopup(`<b>${fullname}</b> <span>(${cn})</span><br>${description}<br><a href="https://sambaedu.0952282p.moncollege95.fr/admin">Lien 1</a><br><a href="https://proxmox.0952282p.moncollege95.fr">Lien 2</a><br><b>${state}</b>`);
          }
        });

      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    },
    checkStatus(state) {
      if (state === true) {
        return this.icons.green;
      } else if (state === false) {
        return this.icons.red;
      } else {
        return this.icons.grey;
      }
    }
  }
}
</script>

<style>
/* Vous pouvez ajouter du style ici si nécessaire */
</style>

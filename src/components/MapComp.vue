<script>

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
/*import axios from "axios";*/
import monGeoJSON from "../assets/data/geojsontest.json";

export default {
  name: 'MapComp',
  data() {
    return {
      dataFromPhp: null,
    };
  },
  mounted() {
    this.map = L.map('map').setView([48.92463703019094 , 2.055805191580724], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Ajoutez le GeoJSON à la carte avec une icone qui ce trouve dans le dossier assets
    L.geoJSON(monGeoJSON, {
      pointToLayer: function (feature, latlng) {
        if (feature.properties.etat === "inactif") {
          return L.marker(latlng, {
            icon: L.icon({
              iconUrl: require('../assets/placeholder.png'),
              iconSize: [32, 32],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41]
            })
          });
        }else {
        return L.marker(latlng, {
          icon: L.icon({
            iconUrl: require('../assets/marker-icon.png'),
            iconSize: [32, 32],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          })
        });
        }
      },

      onEachFeature: function (feature, layer) {
        const popupContent = `
      <b>${feature.properties.titre}(${feature.properties.uai})</b></br>
      Categorie1: ${feature.properties.categorie1uai }</br>
      Autre info: ${feature.properties.t}`;

        layer.bindPopup(popupContent);
      }
    }).addTo(this.map);








  }

};

</script>

<template>
  <div id="map"></div>
</template>

<style scoped>

#map {
  height: 100%;
  width: 100%;
}
</style>
<template>
  <canvas id="myChartComputerByMarck"></canvas>
  <!-- Le canvas pour afficher le graphique -->
</template>

<script>
import axios from "axios"; // Importation de axios pour les requêtes HTTP
import {Chart, registerables} from 'chart.js'; // Importation de Chart.js pour les graphiques

Chart.register(...registerables); // Enregistrement des composants nécessaires de Chart.js

export default {
  name: "ChartComputerByMarck",
  data() {
    return {
      sessionToken: '', // Token de session pour l'authentification
      manufacturers: {}, // Dictionnaire pour stocker les informations des fabricants
    };
  },

  mounted() {
    this.initSession(); // Initialisation de la session lorsque le composant est monté
  },

  methods: {
    async initSession() {
      try {
        this.sessionToken = await this.getSessionToken();
        await this.fetchItemData();
        await this.getChartData();
      } catch (error) {
        console.error("Erreur lors de l'initialisation de la session :", error);
      }
    },

    async getSessionToken() {
      const response = await axios.get("http://172.19.254.113/apirest.php/initSession/", {
        headers: this.getHeaders()
      });
      return response.data.session_token;
    },

    async fetchItemData() {
      try {
        const response = await axios.get(`http://172.19.254.113/apirest.php/computer/?range=0-9000`, {
          headers: this.getHeaders(this.sessionToken)
        });
        this.API = response.data.results;
      } catch (error) {
        console.error("Erreur lors de la récupération des données de l'API GLPI :", error);
      }
    },

    // mode cors

    async getChartData() {
      try {
        const response = await axios.get('http://172.19.254.113/apirest.php/computer/?range=0-9000', {
          headers: this.getHeaders(this.sessionToken)
        });

        const manufacturerLinks = [...new Set(response.data.map(data => data.links.find(link => link.rel === "ComputerModel").href))];
        const manufacturers = await this.fetchManufacturers(manufacturerLinks);

        this.manufacturers = manufacturers.reduce((acc, {id, name}) => ({...acc, [id]: name}), {});

        const brandCounts = this.getBrandCounts(response.data);

        const defaultColors = ['rgb(133,11,236)', 'rgb(16,99,237)', 'rgb(0, 255, 0)', 'rgb(255, 0, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)', 'rgb(255, 0, 255)', 'rgb(0, 255, 255)', 'rgb(192, 192, 192)', 'rgb(128, 128, 128)', 'rgb(128, 0, 0)', 'rgb(128, 128, 0)', 'rgb(0, 128, 0)', 'rgb(128, 0, 128)', 'rgb(0, 128, 128)', 'rgb(0, 0, 128)', 'rgb(255, 215, 0)', 'rgb(0, 128, 128)', 'rgb(0, 0, 255)', 'rgb(0, 255, 0)', 'rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(255, 0, 255)', 'rgb(0, 255, 255)', 'rgb(192, 192, 192)', 'rgb(128, 128, 128)', 'rgb(128, 0, 0)', 'rgb(128, 128, 0)', 'rgb(0, 128, 0)', 'rgb(128, 0, 128)', 'rgb(0, 128, 128)', 'rgb(0, 0, 128)', 'rgb(255, 215, 0)', 'rgb(0, 128, 128)', 'rgb(0, 0, 255)', 'rgb(0, 255, 0)', 'rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(255, 0, 255)', 'rgb(0, 255, 255)', 'rgb(192, 192, 192)', 'rgb(128, 128, 128)', 'rgb(128, 0, 0)', 'rgb(128, 128, 0)', 'rgb(0, 128, 0)'];
        const backgroundColors = Object.keys(brandCounts).map((_, i) => defaultColors[i % defaultColors.length]);

        this.createChart(Object.keys(brandCounts), Object.values(brandCounts), backgroundColors);
      } catch (error) {
        console.error("Erreur lors de la récupération des données de l'API GLPI :", error);
      }
    },
//mode cors
    getHeaders(sessionToken = '') {
      return {
        'Content-Type': 'application/json',
        'Authorization': 'user_token PQ0EeWu5TJxDlmXso70mPa6kuH5d5pGtjgXCKCFp',
        'App-Token': 'xMDZe4FFlEZ6TKaGRAf811g5NfTvELljYhGa5qnf',
        ...(sessionToken && {'Session-Token': sessionToken})
      };
    },

    async fetchManufacturers(links) {
      const requests = links.map(link => axios.get(link, {headers: this.getHeaders(this.sessionToken)})
          .then(res => ({id: link.split('/').pop(), name: res.data.name}))
          .catch(() => ({id: link.split('/').pop(), name: 'Unknown'})));
      return Promise.all(requests);
    },

    getBrandCounts(data) {
      return data.reduce((acc, item) => {
        const manufacturerId = item.links.find(link => link.rel === "ComputerModel").href.split('/').pop();
        const manufacturerName = this.manufacturers[manufacturerId] || 'Unknown';
        acc[manufacturerName] = (acc[manufacturerName] || 0) + 1;
        return acc;
      }, {});
    },

    createChart(labels, values, colors) {
      const ctx = document.getElementById('myChartComputerByMarck').getContext('2d');
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels,
          datasets: [{
            label: 'Nombre ' + 'd\'ordinateurs par fabricant',
            data: values,
            backgroundColor: colors,
            borderColor: colors.map(color => color.replace('0.2', '1')),
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 1,
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
            },
          },
          scales: {
            y: {
              display: false,
            },
            x: {
              display: false,
            }
          }
        }
      });
    }
  },
};
</script>

<style scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>

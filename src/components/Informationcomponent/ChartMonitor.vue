<template>
    <canvas id="myChartMonitorByModel"></canvas> <!-- Le canvas pour afficher le graphique -->
</template>

<script>
import axios from "axios"; // Importation de axios pour les requêtes HTTP
import { Chart, registerables } from 'chart.js'; // Importation de Chart.js pour les graphiques

Chart.register(...registerables); // Enregistrement des composants nécessaires de Chart.js

export default {
  name: "ChartMonitorByModel",
  data() {
    return {
      sessionToken: '', // Token de session pour l'authentification
      monitors: [], // Liste pour stocker les informations des moniteurs
      models: {}, // Dictionnaire pour stocker les informations des modèles
    };
  },

  mounted() {
    this.initSession(); // Initialisation de la session lorsque le composant est monté
  },

  methods: {
    async initSession() {
      try {
        this.sessionToken = await this.getSessionToken();
        await this.fetchMonitorData();
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

    async fetchMonitorData() {
      try {
        const response = await axios.get(`http://172.19.254.113/apirest.php/monitor/?range=0-9000`, {
          headers: this.getHeaders(this.sessionToken)
        });
        this.monitors = response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des données de l'API GLPI :", error);
      }
    },

    async getChartData() {
      try {
        // Extraction des liens uniques des modèles de moniteurs
        const modelLinks = [...new Set(this.monitors.map(data => data.links.find(link => link.rel === "MonitorModel").href))];

        // Requête asynchrone pour récupérer les données des modèles
        const modelPromises = modelLinks.map(link => axios.get(link, {
          headers: this.getHeaders(this.sessionToken)
        }).then(res => ({id: link.split('/').pop(), name: res.data.name}))
            .catch(() => ({id: link.split('/').pop(), name: 'Unknown'})));

        const models = await Promise.all(modelPromises);

        // Transformation des données des modèles en un dictionnaire {id: name}
        this.models = models.reduce((acc, {id, name}) => ({...acc, [id]: name}), {});

        // Comptage des occurrences de chaque modèle
        const modelCounts = this.getModelCounts(this.monitors);

        // Définition des couleurs par défaut
        const defaultColors = ['rgb(133,11,236)', 'rgb(16,99,237)', 'rgb(0, 255, 0)', 'rgb(255, 0, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)', 'rgb(255, 0, 255)', 'rgb(0, 255, 255)', 'rgb(192, 192, 192)', 'rgb(128, 128, 128)', 'rgb(128, 0, 0)', 'rgb(128, 128, 0)', 'rgb(0, 128, 0)', 'rgb(128, 0, 128)', 'rgb(0, 128, 128)', 'rgb(0, 0, 128)', 'rgb(255, 215, 0)', 'rgb(0, 128, 128)', 'rgb(0, 0, 255)', 'rgb(0, 255, 0)', 'rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(255, 0, 255)', 'rgb(0, 255, 255)', 'rgb(192, 192, 192)', 'rgb(128, 128, 128)', 'rgb(128, 0, 0)', 'rgb(128, 128, 0)', 'rgb(0, 128, 0)', 'rgb(128, 0, 128)', 'rgb(0, 128, 128)', 'rgb(0, 0, 128)', 'rgb(255, 215, 0)', 'rgb(0, 128, 128)', 'rgb(0, 0, 255)', 'rgb(0, 255, 0)', 'rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(255, 0, 255)', 'rgb(0, 255, 255)', 'rgb(192, 192, 192)', 'rgb(128, 128, 128)', 'rgb(128, 0, 0)', 'rgb(128, 128, 0)', 'rgb(0, 128, 0)'];
        const backgroundColors = Object.keys(modelCounts).map((_, i) => defaultColors[i % defaultColors.length]);

        // Création du graphique avec les données préparées
        this.createChart(Object.keys(modelCounts), Object.values(modelCounts), backgroundColors);
      } catch (error) {
        console.error("Erreur lors de la récupération des données de l'API GLPI :", error);
      }
    },

    getHeaders(sessionToken = '') {
      return {
        'Content-Type': 'application/json',
        'Authorization': 'user_token PQ0EeWu5TJxDlmXso70mPa6kuH5d5pGtjgXCKCFp',
        'App-Token': 'xMDZe4FFlEZ6TKaGRAf811g5NfTvELljYhGa5qnf',
        ...(sessionToken && { 'Session-Token': sessionToken })
      };
    },

    getModelCounts(data) {
      return data.reduce((acc, item) => {
        const modelId = item.links.find(link => link.rel === "MonitorModel").href.split('/').pop();
        const modelName = this.models[modelId] || 'Unknown';
        acc[modelName] = (acc[modelName] || 0) + 1;
        return acc;
      }, {});
    },

    createChart(labels, values, colors) {
      const ctx = document.getElementById('myChartMonitorByModel').getContext('2d');
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels,
          datasets: [{
            label: 'Nombre de moniteurs par modèle',
            data: values,
            backgroundColor: colors,
            borderColor: colors.map(color => color.replace('0.2', '1')),
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins:{
            legend: {
              display : true,
              position : 'bottom',
            }
          },
          scales: {
            y: {
              display: false,
            },
            x:{
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
</style>

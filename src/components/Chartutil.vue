<template>
  <canvas id="myChartUtil" aria-label="chart" role="img"></canvas>
</template>



<style scoped>
  canvas {
    width: 100%;
    height: 100%;
  }
</style>

<script >
import Chart from 'chart.js/auto';

export default {
  name: 'ChartUtil',

  mounted() {
    // Récupérer le contexte 2D du canvas
    const ctx = document.getElementById('myChartUtil').getContext('2d');

    // Données du graphique (exemple)
    const data = {
      labels: ['0h00', '1h00', '2h00', '3h00', '4h00'],
      datasets: [
        {
          label: 'nombre d\'utilisateur connecté',
          data: [0, 10, 5, 2, 20],
          backgroundColor: '#0d50ff',
          borderColor: 'rgb(13,80,255)',
          borderWidth: 2,
        },
      ],
    };

    // Options du graphique (peut être personnalisé)
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Créer l'instance du graphique
    new Chart(ctx, {
      type: 'line', // Type de graphique (bar, line, etc.)
      data: data,
      options: options,
    });
  },
}



</script>

<template>
  <canvas id="myChartMemor" aria-label="chart" role="img"></canvas>
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
  name: 'ChartMemor',

  mounted() {

    // Récupérer le contexte 2D du canvas
    const ctx = document.getElementById('myChartMemor').getContext('2d');

    // Données du graphique (exemple)
    // Donées d'une API
    const data = {
      labels: ['0h00', '1h00', '2h00', '3h00', '4h00'],
      datasets: [
        {
          label: 'État de la Mémoire',
          data: [0, 10, 5, 2, 20],
          backgroundColor: '#000000',
          borderColor: '#000000',
          borderWidth: 2,
          tension: 0.3,
          pointRadius: 3,
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

<script >
import Chart from 'chart.js/auto';
export default {
  name: 'ChartTest',





  mounted() {

    // Récupérer le contexte 2D du canvas
    const ctx = document.getElementById('testchart').getContext('2d');
    // Données du graphique (exemple)
    const data = {
      labels: ['0h00', '1h00', '2h00', '3h00', '4h00'],
      datasets: [
        {
          label: 'nombre d\'utilisateur connecté',
          data: [0, 10, 5, 2, 20],
          backgroundColor: '#1e283e',
          borderColor: 'rgb(30,40,62)',
          borderWidth: 2,
          tension: 0.3,
          pointRadius: 2,
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
  }
}

</script>

<template>
<div>
  <canvas id="testchart" width="400" height="200"></canvas>
</div>
</template>

<style scoped>

</style>
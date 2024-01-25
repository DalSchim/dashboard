<template>
  <div>
  </div>
  <canvas id="myChartRam" aria-label="chart" role="img"></canvas>
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
  name: 'ChartRam',

  mounted() {
    // Récupérer le contexte 2D du canvas
    const ctx = document.getElementById('myChartRam').getContext('2d');

    // Données du graphique (exemple)
    const data = {
      labels: ['0h00', '1h00', '2h00', '3h00', '4h00', '5h00', '6h00', '7h00', '8h00', '9h00', '10h00', '12h00', '13h00', '15h00', '17h00', '18h00', '20h00', '21h00', '22h00', '23h00'],
      datasets: [
        {
          label: 'État de la RAM',
          //random data ram
          data: [ 0,2,3,3,3,5,10,12,6,3,3,3,5,2,],
          backgroundColor: '#E94F35',
          borderColor: '#E94F35',
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
      type: 'line', // 'line', 'bar', 'pie', 'doughnut', 'radar', 'polarArea
      data: data,
      options: options,
    });
  },
}



</script>

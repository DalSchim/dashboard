<script>
import {Chart} from 'chart.js'
export default {
  name: "RamChart",
  mounted(){
    this.generatechart()
  },
  methods:{
    generatechart(){
      const ctx = document.getElementById('ram-chart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'RAM Usage',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(0,255,3)',
            backgroundColor: 'rgb(0,255,3)',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }

}
</script>

<template>
  <div class="ram-chart">
    <canvas id="ram-chart"></canvas>
  </div>
</template>

<style scoped>
</style>
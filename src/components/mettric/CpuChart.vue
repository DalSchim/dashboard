<script>
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns'; // Import the date-fns adapter
import { addSeconds } from 'date-fns'; // Import required function from date-fns

Chart.register(...registerables); // Register Chart.js components

export default {
  name: "CpuChart",
  data() {
    return {
      currentCpuUsage: 0 // Property to store current CPU usage
    };
  },
  mounted() {
    this.generateChart();
    this.startUpdatingChart();
  },
  methods: {
    generateChart() {
      const ctx = document.getElementById('cpu-chart').getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'line', // Line chart for time series visualization
        data: {
          labels: this.initializeTimeLabels(), // Initialize labels with current time
          datasets: [{
            label: 'CPU Usage',
            data: Array.from({ length: 10 }, () => this.randomData()), // Initial random data
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          animation: {
            duration: 400, // Reduced animation duration to 300ms for smoother transitions
            easing: 'easeInOutQuad'
          },
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'second',
                tooltipFormat: 'PPpp', // Format for the tooltip
                displayFormats: {
                  second: 'HH:mm:ss' // Format for x-axis labels
                }
              },
            },
            y: {
              beginAtZero: true,
              max: 100
            }
          }
        }
      });
    },
    initializeTimeLabels() {
      const labels = [];
      const now = new Date();
      for (let i = 0; i < 10; i++) {
        labels.unshift(addSeconds(now, -i)); // Labels for the last 10 seconds
      }
      return labels;
    },
    randomData() {
      return Math.floor(Math.random() * 100);
    },
    updateChartData() {
      const newData = this.randomData();
      this.currentCpuUsage = newData; // Update current CPU usage
      const now = new Date();

      // Add new data point
      this.chart.data.labels.push(now);
      this.chart.data.datasets[0].data.push(newData);

      // Remove old data point if there are more than 10
      if (this.chart.data.labels.length > 10) {
        this.chart.data.labels.shift();
        this.chart.data.datasets[0].data.shift();
      }

      this.chart.update(); // Update the chart with smooth animation
    },
    startUpdatingChart() {
      this.updateInterval = setInterval(() => {
        this.updateChartData();
      }, 2000); // Update every 2 seconds
    },
    beforeDestroy() {
      clearInterval(this.updateInterval); // Clear interval on component destruction
    }
  }
}
</script>

<template>
  <div class="cpu-chart">
    <!-- Display current CPU usage -->
    <div class="information-data" :class="{ 'high-usage': currentCpuUsage > 80 }">
      {{ currentCpuUsage }}%
    </div>
    <canvas id="cpu-chart"></canvas>
  </div>
</template>

<style scoped lang="scss">
.cpu-chart {
  position: relative;
}

.information-data {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: bold;
  color: rgb(75, 192, 192);
}

.high-usage {
  color: red; /* Change color to red if CPU usage is above 80% */
}
</style>

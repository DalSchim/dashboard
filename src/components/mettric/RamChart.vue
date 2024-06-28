<template>
  <div class="host-metrics">
    <h2>{{ host }}</h2>

    <!-- Graphique RAM -->
    <div class="metric-ram">
      <canvas :id="ramChartId"></canvas>
    </div>

    <!-- Graphique CPU -->
    <div class="metric-cpu">
      <canvas :id="cpuChartId"></canvas>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns'; // Import the date-fns adapter
import { InfluxDB } from '@influxdata/influxdb-client';

Chart.register(...registerables);

export default {
  props: {
    cpu: {
      type: String,
      required: true
    },
    ram: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      host: 'Your Host', // Add a default value or set through props
      ramChartId: `ram-chart-${this.ram}`,
      cpuChartId: `cpu-chart-${this.cpu}`,
      ramData: [],
      cpuData: [],
      client: null,
      ramChart: null,
      cpuChart: null,
      intervalId: null
    };
  },
  mounted() {
    const token = 'LZTBLrh5dw5kseb8FQ9Q1d7gWUlIPkDF8zl9mChCncAuT8TtoK-ZwPlI2pmct92VwQJkgxtO4Pf-kBJLJL9Ikw==';
    const client = new InfluxDB({url: 'http://172.19.254.107:8086', token: token});
    this.client = client;

    this.fetchData(); // Initial fetch of data
    this.intervalId = setInterval(this.fetchData, 180000); // Update every 3 minutes (180000 ms)
  },

  methods: {
    async fetchData() {
      await this.fetchRAMData();
      await this.fetchCPUData();
    },
    async fetchRAMData() {
      const bucket = 'bucket'; // Replace with correct bucket name
      const org = 'athena'; // Replace with correct InfluxDB organization
      const queryApi = this.client.getQueryApi(org);

      const query = `from(bucket: "${bucket}") |> range(start: -1h) |> filter(fn: (r) => r._measurement == "memory") |> filter(fn: (r) => r._field == "memused") |> filter(fn: (r) => r.host == "${this.ram}")`;
      const response = await queryApi.collectRows(query);

      this.ramData = response.map(row => ({
        time: new Date(row._time),
        value: row._value * 100 // Convert RAM usage to percentage
      }));

      this.updateRAMChart();
    },

    async fetchCPUData() {
      const bucket = 'bucket'; // Replace with correct bucket name
      const org = 'athena'; // Replace with correct InfluxDB organization
      const queryApi = this.client.getQueryApi(org);

      const query = `from(bucket: "${bucket}") |> range(start: -1h) |> filter(fn: (r) => r._measurement == "cpu") |> filter(fn: (r) => r._field == "cpuload") |> filter(fn: (r) => r.host == "${this.cpu}")`;
      const response = await queryApi.collectRows(query);

      this.cpuData = response.map(row => ({
        time: new Date(row._time),
        value: row._value * 100 // Convert CPU usage to percentage
      }));

      this.updateCPUChart();
    },
    updateRAMChart() {
      if (this.ramData.length === 0) return;

      const ctx = document.getElementById(this.ramChartId);
      if (!ctx) return; // Check if canvas element exists

      if (this.ramChart) {
        this.ramChart.destroy(); // Destroy old chart instance
      }

      this.ramChart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
          labels: this.ramData.map(item => item.time),
          datasets: [{
            label: 'RAM Usage (%)',
            data: this.ramData.map(item => ({x: item.time, y: item.value})),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.1,
            fill: false
          }]
        },
        options: {
          responsive: true,

          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'minute',
                displayFormats: {
                  minute: 'HH:mm' // 24-hour format for minutes
                },
                tooltipFormat: 'PPpp', // Full date and time format for tooltips
              },
            },
            y: {
              beginAtZero: true,

            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'top'
            }
          }
        }
      });
    },
    updateCPUChart() {
      if (this.cpuData.length === 0) return;

      const ctx = document.getElementById(this.cpuChartId);
      if (!ctx) return; // Check if canvas element exists

      if (this.cpuChart) {
        this.cpuChart.destroy(); // Destroy old chart instance
      }

      this.cpuChart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
          labels: this.cpuData.map(item => item.time),
          datasets: [{
            label: 'CPU Usage (%)',
            data: this.cpuData.map(item => ({x: item.time, y: item.value})),
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: false,
            tension: 0.1,
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'minute',
                displayFormats: {
                  minute: 'HH:mm' // 24-hour format for minutes
                },
                tooltipFormat: 'PPpp', // Full date and time format for tooltips
              },
            },
            y: {
              beginAtZero: true,
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'top'
            }
          }
        }
      });
    }
  },
  unmounted() {
    // Cleanup interval on component unmount
    clearInterval(this.intervalId);
  }
};
</script>

<style scoped>
.host-metrics {
  grid-area: host-metrics;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  grid-template-areas:
    "ram cpu";
  .metric-ram {
    grid-area: ram;
    canvas {
      width: 100%;
      height: 300px;
    }
  }
  .metric-cpu {
    grid-area: cpu;
    canvas {
      width: 100%;
      height: 300px;
    }
  }
}
@media (max-width: 768px) {
  .host-metrics {
    grid-template-columns: 1fr;
    grid-template-areas:
      "ram"
      "cpu";
  }
}
</style>

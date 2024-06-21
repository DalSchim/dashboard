<template>
  <div class="container">
    <div class="zone-map">
      <MapComp/>
    </div>
    <div class="zone-info">
      <div class="grid-litel-icone">
        <nulber-server/>
        <computer-component item-name="Nombre-d'ordinateur" item-endpoint="computer" icon="mdi:desktop-classic"/>
        <computer-component item-endpoint="printer" item-name="Imprimante" icon="mdi:printer"/>
        <computer-component item-endpoint="monitor" item-name="Moniteur" icon="mdi:desktop-classic"/>
        <computer-component item-endpoint="software" item-name="Logiciel" icon="mdi:application"/>
        <computer-component item-endpoint="networkequipment" item-name="Réseau" icon="mdi:router-wireless"/>
        <computer-component item-endpoint="phone" item-name="Telephone" icon="mdi:cellphone"/>
      </div>
    </div>
    <div class="zone-circle">
      <div class="chart-conataineur">
        <div>
          <chart-computer-by-marck/>
        </div>
      </div>
      <div class="chart-conataineur">
        <div>
          <chart-monitor-by-marck/>
        </div>
      </div>
    </div>
    <div class="zone-chart">
      <div class="cpu-chart">
        <CpuChart/>
      </div>
      <div class="ram-chart">
        <ram-chart/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns:repeat(2, 1fr);
  padding: 16px;
  width: 100%;
  grid-template-areas:
    "zone-map zone-info"
    "zone-circle zone-circle"
    "zone-chart zone-chart";
  .zone-map {
    grid-area: zone-map;
    width: 100%;
    height: 50vh;
  }

  .zone-circle {
    grid-area: zone-circle;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 20px;
    padding-top: 16px;
    .chart-conataineur {
      height: 350px ;
      background: white;
      border-radius: 50px;
      padding: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }
    }
  }

  .zone-chart {
    grid-area: zone-chart;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "cpu-chart ram-chart";
    gap: 20px;
  }

  .zone-info {
    grid-area: zone-info;
    overflow: scroll;
    width: 100%;
    height: 100%;

    .grid-litel-icone {
      padding: 16px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      gap: 10px;
    }
  }
}

@media screen and (max-width: 910px) {
  .container {
   display: flex;
    flex-direction: column;
    gap: 20px;

    .zone-chart {
     display: flex;
      flex-direction: column;
    }

    .zone-map {
      height: 50vh;
    }

    .zone-info {
      overflow: scroll;
      width: 100%;
      height: 100%;
    }
    .zone-circle {
      display: flex;
      justify-content: space-evenly;
      gap: 20px;
      flex-wrap: wrap;
      .chart-conataineur {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f8f8f8;
        border-radius: 50px;
        width: fit-content;
        height: 100%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        padding: 8px;
        div {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>

<script>
import MapComp from "@/components/MapComp.vue";
import NulberServer from "@/components/Informationcomponent/NulberServer.vue";
import ComputerComponent from "@/components/Informationcomponent/IteamComponent.vue";
import ChartComputerByMarck from "@/components/Informationcomponent/ChartComputerByMarck.vue";
import ChartMonitorByMarck from "@/components/Informationcomponent/ChartMonitor.vue";
import CpuChart from "@/components/mettric/CpuChart.vue";
import RamChart from "@/components/mettric/RamChart.vue";

export default {
  name: 'HomeView',
  components: {
    RamChart,
    CpuChart,
    ChartMonitorByMarck,
    ChartComputerByMarck,
    ComputerComponent,
    NulberServer,
    MapComp,
  },
}
</script>

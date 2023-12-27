<template>
  <div class="container">
    <div class="zone-map">
      <MapComp/>
    </div>
    <div class="zone-info">
      <div class="box">
        <nulber-server></nulber-server>
      </div>
      <div class="box">
        <UtilisateurComponent/>
      </div>
      <div class="box">
        <RamComponent/>
      </div>
      <div class="chart">
        <ChartCpu/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.gray-backgound {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80%;
  background: #f1f1f1;
  opacity: 0.5;
  z-index: -1;
}

.leaflet-control-attribution {
  display: none;
}

.leaflet-container {
  z-index: 12;
}

.zone-map {
  padding: 16px;
  border-radius: 12px;
}

.zone-info {
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 16px;
  gap: 32px;
}

.chart {
  width: 100%;
  border-radius: 8px;
  background: #FAFAFA;
  box-shadow: -4px -1px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 8px;
}


.box {
  width: 100%;
  height: 90px;
  border-radius: 8px;
  background: #FAFAFA;
  box-shadow: -4px -1px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 8px;

}

.container {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "zone-info zone-map zone-map"
}


.zone-map {
  grid-area: zone-map;
}

.zone-info {
  grid-area: zone-info;
}

@media screen and (max-width: 910px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.5fr 0.5fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "zone-map zone-map"
      "zone-map zone-map"
      "zone-info zone-info";

  }
}


</style>

<script>


import ChartCpu from "@/components/ChartCpu.vue";
import MapComp from "@/components/MapComp.vue";
import RamComponent from "@/components/RamComponent.vue";
import UtilisateurComponent from "@/components/UtilisateurComponent.vue";
import NulberServer from "@/components/NulberServer.vue";

export default {
  name: 'HomeView',
  components: {NulberServer, UtilisateurComponent, RamComponent, MapComp, ChartCpu},


}
</script>

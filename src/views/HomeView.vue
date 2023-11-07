<template>
  <div class="parent">
    <div class="container">
        <div class="box inf inf1"></div>
        <div class="box inf inf2"></div>
        <div class="box inf inf3">
          <ram-component></ram-component>
        </div>
        <div class="box inf inf4"></div>
      <div class="box graph-1">
       <chart-cpu></chart-cpu>
      </div>
      <div class="box graph-2">
        <map-comp/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.leaflet-control-attribution {
  display: none;
}
.leaflet-container {
  z-index: 12;
}



.box{
    border-radius: 8px;
    background: #FAFAFA;
    box-shadow: -4px -1px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 8px;
}

.container {
  padding: 64px;
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 1fr 1fr;
  gap: 32px 16px;
  grid-template-areas:
    "inf1 inf2 inf3 inf4"
    "graph-2 graph-2 graph-1 graph-1"
    "graph-2 graph-2 graph-1 graph-1"
}

.graph-1 { grid-area: graph-1;
background: #FAFAFA;}
.graph-2 { grid-area: graph-2; }
.inf1 { grid-area: inf1;}
.inf2 { grid-area: inf2; }
.inf3 {
  grid-area: inf3;
  display: flex;

}
.inf4 { grid-area: inf4; }
@media screen and (max-width: 910px) {
    .container {
      padding: 64px;
      display: grid;
      grid-auto-columns: 1fr;
      grid-auto-rows: 1fr;
      grid-template-columns: 1fr 1fr ;
      grid-template-rows: 0.5fr 0.5fr 1fr ;
      gap: 32px 16px;
      grid-template-areas:
        "inf1 inf2"
        "inf3 inf4"
        "graph-1 graph-1"
        "graph-2 graph-2"
    }

  .inf{
    max-height: 50%;
  }
}

</style>

<script>




import ChartCpu from "@/components/ChartCpu.vue";
import MapComp from "@/components/MapComp.vue";
import RamComponent from "@/components/RamComponent.vue";

export default {
  name: 'HomeView',
  components: {RamComponent, MapComp, ChartCpu},



}
</script>

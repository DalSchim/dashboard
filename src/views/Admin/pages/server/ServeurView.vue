<style scoped>
.container {
  margin: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 16px;
  grid-template-areas:
    "information area-2 area-1"
    "information area-3 area-4";
}
.information { grid-area: information; }
.area-1 { grid-area: area-1; }
.area-2 { grid-area: area-2; }
.area-3 { grid-area: area-3; }
.area-4 { grid-area: area-4; }

.box{
  height: fit-content;
  border-radius: 8px;
  background: #FAFAFA;
  box-shadow: -4px -1px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 8px;

}

</style>


<template>
  <div class="container">
    <div class="information"></div>
    <div class="area-1 box">
      <chart-cpu></chart-cpu>
    </div>
    <div class="area-2 box">
      <chart-ram></chart-ram>
    </div>
    <div class="area-3 box"></div>
    <div class="area-4 box"></div>
  </div>
</template>

<script>




import ChartCpu from "@/components/ChartCpu.vue";
import ChartRam from "@/components/ChartRam.vue";

export default {
  name: 'AboutView',
  components: {ChartRam, ChartCpu},

}

</script>



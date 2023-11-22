<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows:  0.5fr 1fr 1.1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "tabs tabs tabs"
    "information stat-area stat-area"
    "information stat-area stat-area";
  width: 100%;
  height: 100vh;
}

.information {
  grid-area: information;
  display: grid;
  grid-template-columns: 1fr ;
  grid-template-rows: 0.2fr 0.2fr 0.2fr;
  gap: 16px ;
  grid-auto-flow: row;
  margin: 32px;

}

.stat-area {  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr ;
  gap: 16px 16px;
  grid-auto-flow: row;
  margin: 32px;
  grid-template-areas:
    "cpu ram"
    "memory user";
  grid-area: stat-area;
}

.cpu { grid-area: cpu; }

.ram { grid-area: ram; }

.memory { grid-area: memory; }

.user { grid-area: user; }

.box{
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
    border-radius: 8px;
    background: #FAFAFA;
    box-shadow: -4px -1px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 16px;
}

/* responsive*/

@media screen and (max-width: 1024px) {
  .container {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.5fr 1fr 1.1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "tabs tabs"
      "information information"
      "stat-area stat-area";
  }
  .stat-area {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 16px 16px;
    grid-auto-flow: row;
    margin: 32px;
    grid-template-areas:
      "cpu"
      "ram"
      "memory"
      "user";
    grid-area: stat-area;
  }
}


</style>
<template>
  <div class="container">
    <div class="tabs"></div>
    <div class="information">
      <div class="box">
        <utilisateur-component/>
      </div>
      <div class="box">
        <ram-component/>
      </div>
    </div>
    <div class="stat-area">
      <div class=" box cpu">
        <chart-cpu/>
      </div>
      <div class="box ram">
        <chart-ram/>
      </div>
      <div class="box memory">
        <chart-memor/>
      </div>
      <div class=" box user">
        <chart-util/>
      </div>
    </div>
  </div>
</template>

<script>

import ChartCpu from "@/components/ChartCpu.vue";
import ChartRam from "@/components/ChartRam.vue";
import ChartMemor from "@/components/ChartMemorie.vue";
import ChartUtil from "@/components/Chartutil.vue";
import UtilisateurComponent from "@/components/UtilisateurComponent.vue";
import RamComponent from "@/components/RamComponent.vue";

export default {
  name: 'AboutView',
  components: {RamComponent, UtilisateurComponent, ChartUtil, ChartMemor, ChartRam, ChartCpu},

}

</script>



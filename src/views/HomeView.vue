<template>
  <div class="parent">
    <div class="container">
        <div class="box inf inf1"></div>
        <div class="box inf inf2"></div>
        <div class="box inf inf3"></div>
        <div class="box inf inf4"></div>
      <div class="box graph-1"></div>
      <div class="box graph-2"></div>
    </div>
  </div>
</template>

<style lang="scss">
.box{
    border-radius: 8px;
    background: #e0e0e0;
    padding: 8px;
}

.container {
  padding: 64px;
  height: 100VH;
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

.graph-1 { grid-area: graph-1; }
.graph-2 { grid-area: graph-2; }
.inf1 { grid-area: inf1;


}
.inf2 { grid-area: inf2; }
.inf3 { grid-area: inf3; }
.inf4 { grid-area: inf4; }
@media screen and (max-width: 910px) {
    .container {
      padding: 64px;
      height: 100VH;
      display: grid;
      grid-auto-columns: 1fr;
      grid-auto-rows: 1fr;
      grid-template-columns: 1fr 1fr ;
      grid-template-rows: 0.5fr 1fr 1fr ;
      gap: 32px 16px;
      grid-template-areas:
        "inf1 inf2"
        "inf3 inf4"
        "graph-1 graph-1"
        "graph-2 graph-2"
    }
}



</style>

<script>

export default {
  name: 'HomeView',
}
</script>

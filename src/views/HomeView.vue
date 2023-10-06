<template>
  <div class="parent">

      <div class="container">
          <div class="box data1">test</div>
          <div class="box data2">test</div>
          <div class="box data3">test</div>
          <div class="box graph-1">test</div>
          <div class="box graph2">test</div>
          <div class="box inf-1">test</div>
          <div class="box inf2">test</div>
          <div class="box inf3">test</div>
      </div>
  </div>
</template>
<style>

.box{
    border-radius: 8px;
    background: #e0e0e0;
    padding: 8px;
}

.container {
    padding: 64px;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 0.4fr 1fr 1fr 1fr;
    gap: 16px 8px;
    grid-template-areas:
    "data1 data1 data2 data2 data3 data3"
    "graph2 graph2 graph2 graph-1 graph-1 graph-1"
    "graph2 graph2 graph2 graph-1 graph-1 graph-1"
    "inf2 inf2 inf3 inf3 inf-1 inf-1";
}

.data1 {
    grid-area: data1;
}

.data2 { grid-area: data2;
}

.data3 { grid-area: data3;
}

.graph-1 {grid-area: graph-1;
}
.graph2 { grid-area: graph2;
}
.inf-1 { grid-area: inf-1;
}
.inf2 { grid-area: inf2;

}
.inf3 { grid-area: inf3;
}
</style>





<script>

export default {
  name: 'HomeView',

}
</script>

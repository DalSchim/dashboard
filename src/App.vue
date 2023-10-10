<template>
    <div class="wrapeur">
        <nav2-component/>
        <router-view/>
    </div>
</template>

<style>






#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.wrapeur{
    display: grid;
    grid-template-columns: 14rem 1fr;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

@media screen and (max-width: 910px) {
    .wrapeur{
        display: grid;
        grid-template-columns: 1fr;
    }


}

router-view{
    margin-left:32px;
}
</style>
<script setup>
  import Nav2Component from "@/components/Nav2Component.vue";
</script>
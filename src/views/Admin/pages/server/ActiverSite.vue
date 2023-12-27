<script setup>

</script>

<template>
  <section>
    <div class="containere">
      <div class="choixetablisement">
        <form>
          <v-select v-model="selectionEtablissement" :options="options"></v-select>
          <button @click.prevent="validerFormulaire">Valider</button>
        </form>
      </div>
      <div class="enattente">
        <div class="boxe">
          <h2> en cour d'activation</h2>
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

h2{
  padding: 8px 16px;
  color: white;
}

button {
  background: #E94F35;
  border-radius: 8px;
  padding: 8px 16px;
  color: white;
  border: none;
  margin: 16px 0px;
  &:hover {
    cursor: pointer;
  }
}

.containere {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 32px;
  height: 100%;
  width: 100%;
}

.choixetablisement {
  width: 30%;
  height: 100%;
}

.enattente {
  width: 80%;
  height: 100%;
}

.boxe {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 32px;
  background: #2A3138;
  border-radius: 8px;
  padding: 16px;
  height: 100%;
}

</style>
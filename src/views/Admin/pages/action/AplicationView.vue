<script setup>


</script>

<template>
  <h1>installation application</h1>
  <div class="grid">
    <div>
      <form action="">
        <v-label>Choix de l'etablisement</v-label>
        <v-select name="etablisements" placeholder="Établisement" color="#E94F35">
        </v-select>
        <v-label>Choix de la salle</v-label>
        <v-select name="salle" placeholder="salle" color="#E94F35">
        </v-select>
        <div class="choix-poste">
          <v-checkbox label="Checkbox"></v-checkbox>
        </div>
      </form>

    </div>
    <div></div>
  </div>
</template>

<style scoped>
/*grid fit*/


.grid {
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  grid-gap: 10px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
}

</style>
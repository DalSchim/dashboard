<template>
  <div>
    <form action="">
      <label for="etablissement">Établissement</label>
      <v-select v-model="selectionEtablissement" :options="options"></v-select>

      <label for="salle">Salle</label>
      <v-select v-model="selectionSalle" :options="options"></v-select>

      <label for="poste">Poste</label>
      <v-select v-model="selectionPoste" :options="options"></v-select>

      <button @click.prevent="validerFormulaire">Valider</button>
    </form>
  </div>
</template>

<script>


export default {
  name: 'FormulaireAccerdistance',

};
</script>

<style scoped>
/* Ajoutez vos styles spécifiques au composant ici si nécessaire */


</style>

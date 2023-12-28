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

<style scoped lang="scss">
/* Ajoutez vos styles spécifiques au composant ici si nécessaire */

button {
  background-color: transparent;
  border: 2px solid #E94F35;
  color: #E94F35;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 10px;
  margin: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #E94F35;
    color: white;
    transform: scale(1.1);
  }
}


</style>

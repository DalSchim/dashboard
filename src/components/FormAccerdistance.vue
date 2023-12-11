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
import { ref } from 'vue';

export default {
  name: 'FormulaireAccerdistance',
  setup() {
    const selectionEtablissement = ref(null);
    const selectionSalle = ref(null);
    const selectionPoste = ref(null);

    const options = [
      { name: 'Établissement 1', code: '1' },
      { name: 'Établissement 2', code: '2' },
      { name: 'Établissement 3', code: '3' },
    ];

    const validerFormulaire = () => {
      // Ajoutez votre logique de validation du formulaire ici
      console.log('Formulaire validé !');
    };

    return {
      selectionEtablissement,
      selectionSalle,
      selectionPoste,
      options,
      validerFormulaire,
    };
  },
};
</script>

<style scoped>
/* Ajoutez vos styles spécifiques au composant ici si nécessaire */
</style>

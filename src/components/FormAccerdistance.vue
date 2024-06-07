<template>
  <!--formulaire d'accée a distance des pc des établisemnt selon les salle champ : etablisemnent / sall / pc -->
  <v-form>
    <v-container>

      <v-select
        v-model="select"
        :items="items"
        label="Etablissement"
        required
      ></v-select>
      <v-select
        v-model="select"
        :items="items"
        label="Salle"
        required
      ></v-select>
      <v-select
        v-model="select"
        :items="items"
        label="PC"
        required
      ></v-select>
    </v-container>
  </v-form>
</template>

<script>


export default {
  name: 'FormulaireAccerdistance',
data() {
    return {
      select: null,
    };
  },
  methods: {
    // Ajoutez vos méthodes spécifiques au composant ici si nécessaire
  },

  mounted() {
    // Ajoutez vos actions à exécuter lors de la création du composant ici si nécessaire
  },

  computed: {
    // Ajoutez vos propriétés calculées spécifiques au composant ici si nécessaire
  },

  watch: {
    // Ajoutez vos observateurs spécifiques au composant ici si nécessaire
  },

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

<template>
  <v-empty-state image="https://cdn.vuetifyjs.com/docs/images/components/v-empty-state/teamwork.png">
    <template v-slot:title>
      <div class="text-subtitle-2 mt-8">
        Manage your inventory transfers
      </div>
    </template>

    <template v-slot:text>
      <div class="text-caption">
        Oh oh il n'y a pas de données à afficher veuillez  revenir sur la page d'accueil
      </div>
    </template>

    <template v-slot:actions>
      <v-btn color="primary" href="/">Retour</v-btn>
    </template>
  </v-empty-state>
</template>
<script>
export default {
  name: 'EmptyStateExample',
};
</script>

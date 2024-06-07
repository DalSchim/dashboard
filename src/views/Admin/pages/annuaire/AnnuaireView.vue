<template>
  <v-data-table
      :headers="headers"
      :items="filteredAnnuaire"
      item-key="id"
      class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Annuaire</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
      </v-toolbar>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";

export default {
  name: "AnnuaireView",
  data() {
    return {
      annuaire: [],
      search: "",
      headers: [
        {text: "Username", value: "username"},
        {text: "First Name", value: "first_name"},
        {text: "Last Name", value: "last_name"}
      ]
    };
  },
  computed: {
    filteredAnnuaire() {
      return this.annuaire.filter(item => {
        return (
            item.username.toLowerCase().includes(this.search.toLowerCase()) ||
            item.first_name.toLowerCase().includes(this.search.toLowerCase()) ||
            item.last_name.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    }
  },
  mounted() {
    axios
        .get("http://172.19.254.12:8013/api/v2/users/", {
          headers: {
            Authorization: "Bearer 8AhwVYlxmmWGGr2f8vZxX3cBox6YQr"
          }
        })
        .then(response => {
          this.annuaire = response.data.results;
          console.log(response.data.results);
        })
        .catch(error => {
          console.error(error);
        });
  }
};
</script>

<style scoped>

</style>

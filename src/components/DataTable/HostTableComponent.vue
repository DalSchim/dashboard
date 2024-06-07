<template>
  <!-- filter search -->
  <v-toolbar color="white" flat>
    <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-btn @click="fetchData">Refresh</v-btn>
    <v-chip-group v-model="selected" multiple>
      <v-chip
          v-for="item in headers"
          :key="item.value"
          :value="item.value"
          close
          @click:close="selected = selected.filter(i => i !== item.value)"
      >
        {{ item.title }}
      </v-chip>
    </v-chip-group>
  </v-toolbar>

  <v-card>
    <v-data-table
        :loading="loading"
        :headers="headers"
        :items="filteredAPI"
        item-key="id"
        class="elevation-1"
        show-select
        :single-select="true"
        v-model:select="selected"
    >
      <template v-slot:loading>
        <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "DataTableComponent",

  mounted() {
    this.fetchData();
  },

  data() {
    return {
      API: [],
      search: "",
      loading: true,
      selected: [],
      headers: [
        { title: "Name", value: "name" },
        { title: "Description", value: "description" },
        { title: "Inventory", value: "inventory" },
        { title: "Last Job", value: "last_job" },
        { title: "Status", value: "status" }
      ],
    };
  },

  computed: {
    filteredAPI() {
      if (this.search) {
        const searchTerm = this.search.toLowerCase();
        return this.API.filter(item => {
          return (
              item.name.toLowerCase().includes(searchTerm) ||
              item.description.toLowerCase().includes(searchTerm) ||
              item.summary_fields.inventory.name.toLowerCase().includes(searchTerm) ||
              item.summary_fields.last_job.name.toLowerCase().includes(searchTerm) ||
              item.summary_fields.last_job.status.toLowerCase().includes(searchTerm)
          );
        });
      } else {
        return this.API.map(item => {
          return {
            ...item,
            inventory: item.summary_fields.inventory.name,
            last_job: item.summary_fields.last_job.name,
            status: item.summary_fields.last_job.status
          };
        });
      }
    }
  },

  methods: {
    fetchData() {
      this.loading = true;
      axios
          .get("http://172.19.254.12:8013/api/v2/hosts/", {
            headers: {
              Authorization: "Bearer 8AhwVYlxmmWGGr2f8vZxX3cBox6YQr"
            }
          })
          .then(response => {
            this.API = response.data.results;
            this.loading = false;
          })
          .catch(error => {
            console.error(error);
            this.loading = false;
          });
    }
  }
};
</script>

<style scoped>
</style>

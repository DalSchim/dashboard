<script>
import axios from "axios";

export default {
  name: "JobsView",
  data() {
    return {
      jobs: [],
      currentPage: 1,
      totalPages: null,
      perPage: 25, // Nombre d'éléments par page
      search: "",
      headers: [
        { text: "Job ID", value: "id" },
        { text: "Job Name", value: "name" },
        { text: "Job Type", value: "job_type" },
        { text: "Job Status", value: "status" },
        { text: "Job Created", value: "created" },
        { text: "Job Updated", value: "updated" }
      ]
    };
  },
  methods: {
    fetchData() {
      axios
          .get(`http://172.19.254.12:8013/api/v2/jobs/?format=json&page=${this.currentPage}`, {
            headers: {
              Authorization: "Bearer 8AhwVYlxmmWGGr2f8vZxX3cBox6YQr"
            }
          })
          .then(response => {
            this.jobs = this.jobs.concat(response.data.results);
            if (!this.totalPages) {
              this.totalPages = Math.ceil(response.data.count / this.perPage);
            }
            console.log(response.data.results);
            if (response.data.next) {
              this.currentPage++;
              this.fetchData();
            }
          })
          .catch(error => {
            console.error(error);
          });
    },
    fetchNextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchData();
      }
    },
    fetchPrevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchData();
      }
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<template>
  <h1> Jobs </h1>
  <section class="">
    <div class="formulaire">
      <v-data-table
          :headers="headers"
          :items="jobs"
          :search="search"
          item-key="name"
          page="1"
          :items-per-page="perPage"
          :total-items="totalPages"
          :loading="loading"
          :loading-text="loadingText"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Jobs</v-toolbar-title>
            <v-divider
                class="mx-4"
                inset
                vertical
            ></v-divider>
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
        <template v-slot:footer>
          <v-pagination
              v-model="currentPage"
              :length="totalPages"
              @input="fetchData"
          ></v-pagination>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
              small
              class="mr-2"
              @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
              small
              @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </div>
    <div class="retour-information">
    </div>

  </section>

</template>

<style scoped>

</style>

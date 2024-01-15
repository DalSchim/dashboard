<template>
  <v-card>
    <v-tabs v-model="tab" color="#E94F35">
      <v-tab value="one">Recherche</v-tab>
      <v-tab value="two">Import-export</v-tab>
    </v-tabs>
    <v-card-text>
      <v-window v-model="tab">
        <v-window-item class="windo" value="one">
          <div class="recher-form">
            <h2>Recherche d'utilisateur dans l'annuaire</h2>
            <searsh-bar></searsh-bar>
            <div class="v-butun">
              <v-btn
                  color="#E94F35"
                  @click="searchUser"
              >Rechercher
              </v-btn>
              <v-btn
                  color="#E94F35"
                  @click="resetSearch"
              >Reset
              </v-btn>
            </div>
          </div>
          <v-data-table
              :headers="headers"
              :items="users"
              :search="search"
              :loading="loading"
              :loading-text="loadingText"
              :no-data-text="noDataText"
              :no-results-text="noResultsText"
              :footer-props="footerProps"
              :items-per-page="itemsPerPage"
              :server-items-length="totalUsers"
          >
            <template v-slot:top>
              <v-toolbar flat color=" #12FFFF ">
                <v-toolbar-title>Users</v-toolbar-title>
                <v-divider
                    class="mx-4"
                    inset
                    vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                  <template v-slot:activator="{ on }">
                    <v-btn
                        color="#E94F35"
                        dark
                        class="mb-2"
                        v-on="on"
                    >New Item
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.name" label="Name">
                            </v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                                v-model="editedItem.calories"
                                label="Calories"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                                v-model="editedItem.fat"
                                label="Fat (g)"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                                v-model="editedItem.carbs"
                                label="Carbs (g)"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                                v-model="editedItem.protein"
                                label="Protein (g)"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                          color="#E94F35"
                          text
                          @click="close"
                      >Cancel
                      </v-btn>
                      <v-btn
                          color="#E94F35"
                          text
                          @click="save"
                      >Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                          color="#E94F35"
                          text
                          @click="closeDelete"
                      >Cancel
                      </v-btn>
                      <v-btn
                          color="#E94F35"
                          text
                          @click="deleteItemConfirm"
                      >OK
                      </v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item="{ item }">
              <v-icon
                  small
                  class="mr-2"
                  @click="editItem(item)"
              >mdi-pencil
              </v-icon>
              <v-icon
                  small
                  @click="deleteItem(item)"
              >mdi-delete
              </v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn
                  color="#E94F35"
                  @click="initialize"
              >Reset
              </v-btn>
            </template>
          </v-data-table>
        </v-window-item>
        <v-window-item class="windo" value="two">
          Two
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script>
import SearshBar from "@/components/SearshBar.vue";

export default {
  name: "AnnuaireView",
  components: {SearshBar},
  data: () => ({
    tab: null,
    search: "",
    loading: false,
    loadingText: "Loading...",
    noDataText: "No matching records found",
    noResultsText: "No matching records found",
    totalUsers: 0,
    footerProps: {
      showFirstLastPage: true,
      firstIcon: "mdi-arrow-collapse-left",
      lastIcon: "mdi-arrow-collapse-right",
      prevIcon: "mdi-minus",
      nextIcon: "mdi-plus",
    },
    itemsPerPage: 5,
    dialog: false,
    dialogDelete: false,
    headers: [
      {text: "Dessert (100g serving)", align: "start", sortable: false, value: "name"},
      {text: "Calories", value: "calories"},
      {text: "Fat (g)", value: "fat"},
      {text: "Carbs (g)", value: "carbs"},
      {text: "Protein (g)", value: "protein"},
      {text: "Actions", value: "actions", sortable: false},
    ],
    users: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.loading = true;
      this.loadingText = "Loading...";
      this.users = [];
      this.totalUsers = 0;
      this.loading = false;
    },
    editItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = {...item}; // Use the spread operator for object cloning
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = {...item}; // Use the spread operator for object cloning
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.users.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = {...this.defaultItem}; // Use the spread operator for object cloning
        this.editedIndex = -1;
      }, 300);
    },
    closeDelete() {
      this.dialogDelete = false;
      setTimeout(() => {
        this.editedItem = {...this.defaultItem}; // Use the spread operator for object cloning
        this.editedIndex = -1;
      }, 300);
    },
    save() {
      if (this.editedIndex > -1) {
        this.$set(this.users, this.editedIndex, {...this.editedItem}); // Use the spread operator for object cloning
      } else {
        this.users.push({...this.editedItem}); // Use the spread operator for object cloning
      }
      this.close();
    },
    searchUser() {
      this.loading = true;
      this.loadingText = "Searching...";
      this.users = [];
      this.totalUsers = 0;
      this.loading = false;
    },
    resetSearch() {
      this.search = "";
      this.loading = true;
      this.loadingText = "Loading...";
      this.users = [];
      this.totalUsers = 0;
      this.loading = false;
    },
  },
};
</script>

<style>
.recher-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.windo {
  padding: 20px;
}

.v-butun {
  gap: 16px;
  display: flex;
}
</style>

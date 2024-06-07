<template>
  <h1>Installation application</h1>
  <div class="grid">
    <div class="form-contain">
      <form action="submit.prevent">
        <v-label>Choix de l'établissement</v-label>
        <v-select name="etablissements" placeholder="Établissement" color="#E94F35"></v-select>
        <v-label>Choix de la salle</v-label>
        <v-select name="salle" placeholder="Salle" color="#E94F35"></v-select>
        <div>
          <!-- v-for selected-->
          <ul>
            <v-label>Logiciels sélectionnés</v-label>
            <li v-for="item in selectedSoftware" :key="item.id">
              <h3>{{ item.name }}</h3>
              <p>{{ item.manufacturer }}</p>
            </li>
          </ul>
        </div>
      </form>

    </div>
    <div class="data">
      <SoftwareTable v-model:selected="selectedSoftware"/>
    </div>
  </div>
</template>

<script>
import SoftwareTable from "@/components/DataTable/SoftwareTable.vue";

export default {
  name: "AplicationView",
  components: {
    SoftwareTable
  },
  data() {
    return {
      selectedSoftware: [],
    };
  },
};
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  grid-gap: 10px;
  grid-template-areas:
    "form data";
}

.data {
  grid-area: data;
}

.form-contain {
  grid-area: form;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  border: 1px solid #E94F35;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
}

@media (max-width: 910px) {
  .grid {
    padding: 32px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 100vh;
    grid-template-areas:
    "data"
    "form";
  }
  .data {
    overflow: scroll;
  }

  .form-contain {
    overflow: scroll;
  }
}
</style>

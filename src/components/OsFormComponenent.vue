<template>
  <form class="chois-os">
    <div class="d-flex pa-4">
       <v-checkbox
          v-model="cheak"
          class="checkbox"
       />
      <v-select
        v-model="selected"
        :items="items"
        label="choisir un os"
        class="v-selecte"
        :disabled="cheak"
      >
      </v-select>
    </div>
    <div class="d-flex pa-4">
      <v-checkbox
        v-model="cheak"
        id="cheak"
        class="checkbox"
        @click="cheakBox"
      />
      <v-select
        v-model="selected"
        :items="items"
        label="choisir un os"
        class="v-selecte"
        :disabled="cheak"
      />
    </div>

  </form>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      items: ["Windows", "Linux", "MacOS"],
      cheak: true,
    };
  },
  methods: {
    cheakBox() {
      this.cheak = !this.cheak;
    },
  },
};
</script>

<style scoped lang="scss">
.chois-os {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  .v-selecte {
  }
}

.chois-os div label {
  margin-left: 10px;
}

.checkbox {
  color: #E94F35;
}
</style>

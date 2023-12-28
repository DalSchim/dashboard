<template>
  <form class="chois-os">
    <div>
      <div>
        <input class="checkbox" type="checkbox" id="w-10"
               @change="handleCheckboxChange('w-10', 'selectedWin10', 'win10Checked', 'win11Checked')">
        <label for="w-10">Windows 10</label>
        <v-select
            class="v-selecte"
            color="red"
            v-model="selectedWin10"
            :items="win10Items"
            label="Standard"
            chips
            small-chips
            deletable-chips
            hint="Select verssion"
            persistent-hint
            :disabled="!win10Checked"
        ></v-select>
      </div>
      <div>
        <input class="checkbox" type="checkbox" id="w-11"
               @change="handleCheckboxChange('w-11', 'selectedWin11', 'win11Checked', 'win10Checked')">
        <label for="w-11">Windows 11</label>
        <v-select
            class="v-selecte"
            color="red"
            v-model="selectedWin11"
            :items="win11Items"
            label="Standard"
            chips
            small-chips
            deletable-chips
            hint="Select version"
            persistent-hint
            :disabled="!win11Checked"
        ></v-select>
      </div>
    </div>

    <!-- liste des établisement -->
    <div>
      <label for="etablisement">Etablisement</label>
      <v-select
          class="v-selecte"
          color="red"
          v-model="selectedEtablisement"
          :items="etablisementItems"
          label="Standard"
          chips
          small-chips
          deletable-chips
          hint="Select Etablisement"
          persistent-hint
      ></v-select>
    </div>

  </form>
</template>

<script>
export default {
  data() {
    return {
      selectedEtablisement: [],
      selectedWin10: [],
      selectedWin11: [],
      win10Checked: false,
      win11Checked: false,
      win10Items: ["Version 1", "Version 2", "Version 3"], // Define your items for Windows 10
      win11Items: ["Version A", "Version B", "Version C"], // Define your items for Windows 11
      etablisementItems: ["Etablisement 1", "Etablisement 2", "Etablisement 3"], // Define your items for Etablisement
    };
  },
  methods: {
    handleCheckboxChange(checkboxId, dataProperty, checkedProperty, otherCheckedProperty) {
      const checkbox = document.getElementById(checkboxId);
      this[dataProperty] = [];
      this[checkedProperty] = checkbox.checked;

      // If the current checkbox is checked, uncheck the other checkbox
      if (checkbox.checked) {
        this[otherCheckedProperty] = false;
      }
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
    width: 30%;
  }
}

.chois-os div label {
  margin-left: 10px;
}

.checkbox {
  color: #E94F35;
}
</style>

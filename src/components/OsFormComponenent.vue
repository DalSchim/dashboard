<template>
  <form class="chois-os">
    <div class="d-flex pa-4">
      <v-checkbox-btn
          v-model="enabled"
          class="pe-2"
          color="#E94F35"
          base-color="#E94F35"
      ></v-checkbox-btn>
      <v-text-field
          :disabled="!enabled"
          hide-details
          label="I only work if you check the box"
      ></v-text-field>
    </div>
  </form>
</template>

<script>
  export default {
    name: "OsFormComponenent",
    data: () => ({
      includeFiles: true,
      enabled: false,
    }),
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

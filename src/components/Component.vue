<!-- Tab.vue -->
<template>
  <div>
    <div>
      <button @click="changeTab" :class="{ active: isActive }">
        <slot name="tabTitle"></slot>
      </button>
    </div>

    <div v-show="isActive">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    changeTab() {
      this.$emit('tab-clicked');
    }
  },
  watch: {
    isActive(newValue) {
      if (newValue) {
        this.$emit('tab-active');
      }
    }
  }
};
</script>

<style>
/* Ajoutez du style pour rendre les onglets attrayants visuellement */
</style>



<script>

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  etab: ref(''),
  cn: ref(''),
  route: useRoute(),
  async fetchMachine() {
    const { data } = await axios.get(`http://localhost:3000/machine/${this.route.params.cn}`)
    this.machine = data
  },

}

</script>

<template>
  <div>
    <h1>Single Server View</h1>
  </div>
</template>

<style scoped>

</style>
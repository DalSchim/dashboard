<template>
  <div class="ram-info">
    <p class="titel">Ram</p>
    <p class="data">{{ ramUsage }}%</p>
    <div class="ram-jauge">
      <div class="ram-bar" :style="{ width: ramUsage + '%' }"></div>
    </div>
  </div>
  <div class="icone">
  </div>
</template>

<script>
export default {
  data() {
    return {
      ramUsage: 0, // Vous pouvez initialiser à zéro ou à la valeur réelle d'utilisation de la RAM
    };
  },

  mounted() {
    // Ici, vous pouvez appeler une API ou un service pour obtenir l'utilisation réelle de la RAM.
    // Remplacez cette valeur factice par les données réelles.
    this.ramUsage = 45; // Exemple d'utilisation de la RAM à 75%
  },

};
</script>

<style scoped>
.ram-jauge {
  width: 100%;
  height: 0.5rem;
  font-size: 2rem;
  background-color: #e0e0e0;
  border-radius: 90px;
  position: relative;
}

.ram-info{
  width: 100%;
  height: 100%;

}

.titel{
  font-size: 1rem;
  color: #E94F35;
}

.data{
  font-size: 1rem;
  font-weight: 700 ;
}

.ram-bar {
  height: 100%;
  background-color: #E94F35;
  border-radius: 90px;
  text-align: center;
  line-height: 30px;
  font-weight: bold;
}
</style>

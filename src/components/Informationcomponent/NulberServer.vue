<template>
  <router-link class="linke" to="server">
  <div class="box">
    <div class="item-info">
      <p class="title">Serveurs SE4FS</p>
      <p class="data"><span>{{ numberServerSE4FS }}</span></p>
    </div>
    <div class="icone">
      <Icon icon="bx:bx-server" width="32" height="32"/>
    </div>
  </div>
  </router-link>

  <router-link to="server">
  <div class="box">
    <div class="item-info">
      <p class="title">Serveurs SE4AD</p>
      <p class="data"><span>{{ numberServerSE4AD }}</span></p>
    </div>
    <div class="icone">
      <Icon icon="bx:bx-server" width="32" height="32"/>
    </div>
  </div>
  </router-link>
</template>

<script>
import axios from "axios";
import {Icon} from "@iconify/vue";

export default {
  name: 'NumberServer',
  components: {Icon},

  data() {
    return {
      numberServerSE4FS: 0,
      numberServerSE4AD: 0,
    };
  },


  mounted() {
    axios
        .get("http://172.19.254.12:8013/api/v2/hosts/", {
          headers: {
            Authorization: "Bearer 8AhwVYlxmmWGGr2f8vZxX3cBox6YQr"
          }
        })
        .then(response => {
          // Filtrer les serveurs dont le nom commence par "SE4FS"
          const filteredServersSE4FS = response.data.results.filter(server =>
              server.name.toLowerCase().startsWith("se4fs")
          );
          this.numberServerSE4FS = filteredServersSE4FS.length;
          console.log(`Nombre de serveurs SE4FS: ${this.numberServerSE4FS}`);

          // Filtrer les serveurs dont le nom commence par "SE4AD"
          const filteredServersSE4AD = response.data.results.filter(server =>
              server.name.toLowerCase().startsWith("se4ad")
          );
          this.numberServerSE4AD = filteredServersSE4AD.length;
          console.log(`Nombre de serveurs SE4AD: ${this.numberServerSE4AD}`);
        })
        .catch(error => {
          console.error(error);
        });
  }
};
</script>

<style scoped>
a{
  text-decoration: none;
  color: black;
}


.box {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  cursor: pointer;
  width: 100%;
  height: 100%;
}
.box:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}
.item-info {
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 16px;
  font-weight: 700;
  color: #333;
}
.data {
  font-size: 1.5rem;
  font-weight: 700;
  color: #E94F35;
}
.icone {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 12px;
  right: 12px;
  opacity: 0.5;
  z-index: 0;
}
</style>

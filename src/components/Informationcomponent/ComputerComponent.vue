<template>
  <div class="box">
    <div class="item-info">
      <p class="title">Nombre de {{ itemName }}</p>
      <p class="data"><span>{{ itemCount }}</span></p>
    </div>
    <div class="icon">
      <Icon :icon="icon" width="32" height="32"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {Icon} from "@iconify/vue";

export default {
  name: "ItemComponent",
  components: {Icon},
  props: {
    itemName: {
      type: String,
      required: true,
    },
    itemEndpoint: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      itemCount: 0,
      sessionToken: '',
    };
  },
  mounted() {
    this.initSession();
  },
  methods: {
    async initSession() {
      try {
        const response = await axios.get("http://172.19.254.113/apirest.php/initSession/", {
          headers: {
            'Content-Type': 'application/json',
            "Authorization": "user_token PQ0EeWu5TJxDlmXso70mPa6kuH5d5pGtjgXCKCFp",
            'App-Token': 'xMDZe4FFlEZ6TKaGRAf811g5NfTvELljYhGa5qnf',
          },
        });
        this.sessionToken = response.data.session_token;
        this.fetchItemData();
      } catch (error) {
        console.error("Erreur lors de l'initialisation de la session :", error);
      }
    },

    async fetchItemData() {
      try {
        const response = await axios.get(`http://172.19.254.113/apirest.php/${this.itemEndpoint}/?range=0-999999`, {
          headers: {
            'Content-Type': 'application/json',
            'Session-Token': this.sessionToken,
            'App-Token': 'xMDZe4FFlEZ6TKaGRAf811g5NfTvELljYhGa5qnf',
          },
        });
        this.itemCount = response.data.length;
        console.log(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données de l'API GLPI :", error);
      }
    },
  },
};
</script>

<style scoped>
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
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
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
.icon {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom:12px ;
  right: 12px;
  opacity: 0.5;
  z-index: 0;
}


</style>

<script>
import {Icon} from '@iconify/vue';

export default {
  name: "DisconectView",
  components: {Icon},
  data() {
    return {
      openprofil: false,
      name: 'Admin'
    }
  },


  methods: {
    profilopen() {
      this.openprofil = !this.openprofil;
    },
    // deconnecte et redirige vers la page de connexion et supprime le token en local storage

    deconnecte() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  }
}
</script>

<template>
  <div>

    <div>
      <hr class="bars">
      <div class="profils">
        <icon class="profil" id="open-profil" @click="profilopen" icon="mdi:account-circle" color="white" width="32"
              height="32"/>
      </div>
    </div>

    <div v-if="openprofil" class="disconnect-popup">
      <v-avatar image="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" class="logo"
                color="surface-variant" size="64"/>
      <h2>{{ name }}</h2>
      <hr>
      <div class="direction-flex">
        <p @click="deconnecte">Déconnexion</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profils {
  padding-top: 24px;

  .bars {
    border: 1px solid #FFFFFF;
    border-radius: 900px;
    margin: 16px 0px;
  }

  .profil {
    &:hover {
      cursor: pointer;
    }
  }
}

.disconnect-popup {
  z-index: 9999;
  position: fixed;
  bottom: 16px;
  left: 90px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  width: 170px;
  height: 170px;
  border-radius: 10px;
  background: #2A3138;

  .logo {
    width: 70px;
    height: 70px;
    border-radius: 90px;
    justify-content: center;
  }

  h2 {
    color: var(--Color, #FFF);
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }

  hr {
    width: 80%;
    border: 1px solid #FFFFFF;
    border-radius: 900px;
  }

  .direction-flex {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    color: white;

    &:hover {
      cursor: pointer;
      color: #E94F35;
    }

    p {
      font-size: 14px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
    }
  }
}

</style>
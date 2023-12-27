<script>
import {Icon} from '@iconify/vue';

export default {
  name: "DisconectView",
  components: {Icon},
  data() {
    return {
      openprofil: false,
    }
  },
  methods: {
    profilopen() {
      this.openprofil = !this.openprofil;
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
      <div class="logo">
        <img src="../assets/logo.png" alt="logo">
      </div>
      <h2>Admin</h2>
      <hr>
      <div class="direction-flex">
        <p>Ce déconecté</p>
        <Icon color="white" icon="pepicons-pop:leave"/>
      </div>
    </div>
  </div>


</template>

<style scoped lang="scss">
.profils {
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
  display: flex;
  width: 170px;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #2A3138;

  .logo {
    width: 70px;
    height: 70px;
    border-radius: 90px;

    img {
      width: 100%;
      height: 100%;
    }

  }

  h2 {
    color: var(--Color, #FFF);
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }

  hr {
    width: 100%;
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
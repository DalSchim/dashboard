<template>
  <menu-burger @toggle-menu="handleToggleMenu" ref="menuBurger"></menu-burger>
  <div class="nav" v-if="isVisible" id="app">
    <router-link to="home">
      <div>
        <div class="logo">
          <img src="@/assets/Fichier%203.png" alt="">
        </div>
        <hr>
      </div>
    </router-link>
    <nav>
      <ul>
        <router-link to="server">
          <link-component icon="ion:server" linkName="Satelite"/>
        </router-link>
        <router-link to="PVE">
          <link-component icon="material-symbols:school" linkName="PVE"/>
        </router-link>
        <router-link to="etat">
          <link-component icon="material-symbols:link" linkName="État des liens"/>
        </router-link>
        <router-link to="cloud">
          <link-component icon="material-symbols:cloud" linkName="Cloud"/>
        </router-link>
        <router-link to="action">
          <link-component icon="carbon:flash-filled" linkName="Action en masse"/>
        </router-link>
        <router-link to="annuaire">
          <link-component icon="fluent:calendar-agenda-28-filled" linkName="Annuaire"/>
        </router-link>
        <router-link to="autorisation">
          <link-component icon="material-symbols:key" linkName="Autorisations"/>
        </router-link>
        <router-link to="testview">
          <link-component icon="mdi:gear" linkName="TestView"/>
        </router-link>
        <router-link to="securité">
          <link-component icon="carbon:security" linkName="Sécurité"/>
        </router-link>
        <router-link to="jobs">
          <link-component icon="carbon:tools" linkName="Jobs"/>
        </router-link>
      </ul>
    </nav>
    <disconect-view/>
  </div>

</template>

<script>
import LinkComponent from "@/components/navigation/LinkComponent.vue";
import MenuBurger from "@/components/navigation/MenuBurger.vue";
import DisconectView from "@/components/DisconectView.vue";

export default {
  name: "NewNav",
  components: {DisconectView, MenuBurger, LinkComponent},
  data() {
    return {
      isVisible: false,
    };
  },
  // au chargement de la page on vérifie si la taille de l'écran est inférieure à 910px pour afficher le menu burger
  mounted() {
    if (window.innerWidth < 910) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }
    // on écoute le redimensionnement de la fenêtre pour afficher ou cacher le menu
    window.addEventListener('resize', () => {
      if (window.innerWidth < 910) {
        this.isVisible = false;
      } else {
        this.isVisible = true;
      }
    });

  },
  methods: {
    // fonction pour afficher ou cacher le menu
    handleToggleMenu(isActive) {
      this.isVisible = isActive;
    },
  }
}

</script>

<style lang="scss" scoped>

hr {
  margin: 15px 0px;
}


a {
  text-decoration: none;
  color: #ffff;
}

.profil {

  width: 100%;
}

.nav {
  position: fixed;
  z-index: 999;
  width: 82px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 100vh;
  background: rgba(42, 49, 56, 0.96);
  gap: 32px;

  .logo {
    display: flex;
    padding: 8px;
    width: 50px;
    height: 50px;
    background: #ffff;
    border-radius: 90px;

    svg {
      align-self: center;
      margin: auto;
    }
  }

  nav {
    z-index: 999;
    position: absolute;
    top: 17%;
    left: 30%;

    ul {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }
}

@media screen and (max-width: 910px) {
  .nav {
    z-index: 9999;
    position: fixed;
    backdrop-filter: opacity(0.5);
    backdrop-filter: blur(7px);
    background: #2A3138C2;
    width: 100%;

    nav {
      position: static;
    }
  }
}
</style>
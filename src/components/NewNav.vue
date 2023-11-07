<template>
  <menu-burger @toggle-menu="handleToggleMenu" ref="menuBurger"></menu-burger>
  <div class="nav" v-if="isVisible" id="app">
    <router-link to="/home">
    <div class="logo">
      <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0L3.53118 7.95727H9.69586V22H22.2684L32 0H27.1999C23.2343 0 20.7857 1.55224 19.4629 5.15424L15.9696 14.6754L10.6143 0H0Z" fill="#E94F35"/>
      </svg>
    </div>
    </router-link>
    <hr>
    <nav>
      <ul>
        <router-link to="/server"><link-component icon="ion:server" linkName="Serveur SE4" /></router-link>
        <router-link to="/PVE"><link-component icon="material-symbols:school" linkName="PVE" /></router-link>
        <router-link to="/etat"><link-component icon="material-symbols:link" linkName="État des liens" /></router-link>
        <router-link to="/cloud"><link-component icon="material-symbols:cloud" linkName="Cloud" /></router-link>
        <router-link to="/action"><link-component icon="carbon:flash-filled" linkName="Action en masse" /></router-link>
        <router-link to="/annuaire"><link-component icon="fluent:calendar-agenda-28-filled" linkName="Annuaire" /></router-link>
        <router-link to="/autorisation"><link-component icon="material-symbols:key" linkName="Autorisations" /></router-link>

      </ul>

    </nav>
  </div>

</template>

<script>
import LinkComponent from "@/components/LinkComponent.vue";
import MenuBurger from "@/components/MenuBurger.vue";
import router from "@/router";
export default {
  name: "NewNav",
  components: {MenuBurger, LinkComponent},
  data(){
    return {
      isVisible:(window.innerWidth > 910)==true,
    }
  },
  methods: {
    handleToggleMenu(isActive) {
      this.isVisible = !this.isVisible;
      if(!isActive || !this.isVisible ){
        this.$refs.menuBurger.resetIcone();
      }
    },
  },
  created() {
    router.beforeEach((to, from, next) => {
      if (window.innerWidth < 910) {
        this.isVisible = false;
      }
      this.$refs.menuBurger.resetIcone();
      next();
    })
  },
}
</script>

<style lang="scss" scoped >
hr{
  width: 70%;
}

a{
  text-decoration: none;
  color: #ffff;
}
.nav{
  position: relative;
  align-items: center;
  justify-content: start;
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 100vh;
  background: rgba(42, 49, 56, 0.96);
  gap: 32px;
  .logo{
    display: flex;
    padding: 8px;
    width: 50px;
    height: 50px;
    background: #ffff;
    border-radius: 90px;
    svg{
      align-self: center;
      margin: auto;
    }
  }
  nav{
    z-index: 999;
    position: absolute;
    top: 17%;
    left: 30%;
    ul{
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }
}

@media screen and (max-width: 910px){
  .nav {
    z-index: 9999;
    position: fixed;
    backdrop-filter: opacity(0.5);
    backdrop-filter: blur(7px);
    background: #2A3138C2;
    width: 100%;
    nav{
      position: static;
    }
  }

}


</style>
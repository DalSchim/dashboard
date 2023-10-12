<template>
  <!--bouton menu-->
  <menu-burger @toggle-menu="handleToggleMenu" ref="menuBurger"></menu-burger>
  <transition class="menu" name="menu-fade">
    <div class="global" v-if="isVisible"  id="app">

       <ul>
           <svg class="logo" width="124" height="69" viewBox="0 0 124 69" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_4_73)">
                   <path d="M32.5073 46.6292C32.5073 43.5985 30.463 42.9856 28.6897 42.9856H23.7269C21.9528 42.9856 19.9086 43.5985 19.9086 46.6292V48.8315C19.9086 51.8622 21.9528 52.4744 23.7269 52.4744H28.6897C30.463 52.4744 32.5073 51.8622 32.5073 48.8315V46.6292ZM29.1946 48.1665C29.1946 49.4828 28.5912 49.8801 26.9995 49.8801H25.4155C23.8231 49.8801 23.2205 49.4828 23.2205 48.1665V47.2966C23.2205 45.9795 23.8231 45.583 25.4155 45.583H26.9995C28.5912 45.583 29.1946 45.9795 29.1946 47.2966V48.1665Z" fill="white"/>
                   <path d="M35.042 52.4729H38.5171V42.9842H35.042V52.4729Z" fill="white"/>
                   <path d="M35.042 41.6503H38.5171V39.0031H35.042V41.6503Z" fill="white"/>
                   <path d="M34.1497 27.0582H37.9318L40.885 33.8415L43.8336 27.0567H47.6166L43.0563 36.5462H38.7123L34.1497 27.0582Z" fill="white"/>
                   <path d="M63.198 36.5461H66.6723V23.0748H63.198V36.5461Z" fill="white"/>
                   <path d="M47.7453 50.1835C48.9699 50.1835 49.4871 50.0693 49.4871 49.4656C49.4871 48.8512 48.9684 48.7906 47.7438 48.7906L45.0276 48.7867C42.2715 48.7867 41.2216 48.2153 41.2216 45.8596C41.2216 43.4686 42.9018 42.9861 45.06 42.9861H52.2148V45.275H45.7881C44.7352 45.275 44.2918 45.3771 44.2918 45.9002C44.2918 46.4241 44.7352 46.5522 45.7881 46.5522L48.5258 46.5568C52.2864 46.5568 52.565 47.765 52.565 49.4065C52.565 51.8412 51.6807 52.4725 48.1017 52.4725H41.227L41.2293 50.1835H47.7453Z" fill="white"/>
                   <path d="M60.3077 50.3021C58.8323 50.3021 58.1303 50.0375 58.1303 49.0641V48.7595H66.7322V47.2085C66.7322 44.0167 65.1821 42.985 61.4161 42.985H58.9416C56.3578 42.985 54.5853 43.7429 54.5853 47.2238V48.1067C54.5853 52.0403 57.059 52.4722 59.4034 52.4722H66.6737V50.3021H60.3077ZM58.1303 46.8035C58.1303 45.633 58.3135 45.1504 60.7141 45.1504C62.8438 45.1504 63.2994 45.613 63.2994 46.8035H58.1303Z" fill="white"/>
                   <path d="M4.23243 42.9854C2.45834 42.9854 0.41333 43.5983 0.41333 46.629V48.8321C0.41333 51.862 2.45834 52.4742 4.23243 52.4742H9.1945C10.9678 52.4742 13.0128 51.862 13.0128 48.8321V39.0005H9.53698V44.8256H9.50003C9.28376 43.3828 7.81833 42.9854 6.38751 42.9854H4.23243ZM9.69938 48.1662C9.69938 49.4825 9.09674 49.8799 7.50429 49.8799H5.92108C4.32864 49.8799 3.72522 49.4825 3.72522 48.1662V47.2964C3.72522 45.9793 4.32864 45.5827 5.92108 45.5827H7.50429C9.09674 45.5827 9.69938 45.9793 9.69938 47.2964V48.1662Z" fill="white"/>
                   <path d="M54.7996 34.5262H53.4196C52.0619 34.5262 51.5916 34.2922 51.5916 33.6962C51.5916 32.9391 51.8995 32.5441 53.3649 32.5441H54.9035C56.8223 32.5441 57.0208 32.867 57.0208 33.5528C57.0208 34.3405 56.4813 34.5262 54.7996 34.5262ZM56.9485 36.5459C59.0651 36.565 60.422 36.0956 60.422 33.9309V30.3587C60.422 28.1947 59.1559 27.0595 56.7684 27.0595H48.9916V29.2288H55.3191C56.6776 29.2288 56.9485 29.5478 56.9485 30.4492V31.3351C56.2789 30.6494 55.229 30.5957 53.3287 30.5957C49.963 30.5957 48.2258 30.7399 48.2258 33.2467V33.9309C48.2258 36.0956 49.5828 36.565 51.6993 36.5459H56.9485Z" fill="white"/>
                   <path d="M21.2974 39.003V39.0536L17.0065 44.0296H14.7475L16.4354 40.7795C16.9087 39.869 17.4729 39.003 18.9422 39.003H21.2974Z" fill="white"/>
                   <mask id="mask0_4_73" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="-273" y="-27" width="416" height="545">
                       <path d="M-272.621 517.819H142.23V-26.0372H-272.621V517.819Z" fill="white"/>
                   </mask>
                   <g mask="url(#mask0_4_73)">
                       <path d="M0.413879 66.3209H1.46834V57.1022H0.413879V66.3209Z" fill="white"/>
                   </g>
                   <path d="M3.69153 63.7616C3.69153 66.1556 5.26166 66.4233 6.63552 66.4233H8.55121C10.5154 66.4233 11.7053 65.9784 11.7053 64.4872V64.3606H10.6501C10.5885 65.3532 10.049 65.5319 8.72439 65.5319H7.27433C5.43329 65.5319 4.74597 65.15 4.74597 63.6718V63.2652H11.7053V62.5403C11.7053 60.2222 10.343 59.7252 8.4527 59.7252H6.75942C5.26165 59.7252 3.69153 59.9914 3.69153 62.3478V63.7616ZM10.6501 62.3739H4.74597C4.84449 60.8957 5.23703 60.6158 6.90721 60.6158H8.4527C10.1706 60.6158 10.6501 61.2785 10.6501 61.9405V62.3739Z" fill="white"/>
                   <path d="M24.9273 57.1029H23.8721V60.6928H23.8467C23.6258 60.0186 23.0493 59.7248 21.8463 59.7248H20.2377C17.6978 59.7248 16.9243 60.4635 16.9243 62.5399V63.686C16.9243 65.9266 18.262 66.4229 20.1777 66.4229H21.6501C22.7545 66.4229 23.6135 66.0792 23.9206 65.2899H23.9452V66.3216H24.9273V57.1029ZM17.9795 62.3996C17.9795 60.8969 18.7038 60.6154 20.1531 60.6154H21.5754C22.9993 60.6154 23.8721 60.8723 23.8721 62.4249V63.6591C23.8721 64.845 23.3687 65.5323 21.7971 65.5323H20.0792C18.3613 65.5323 17.9795 64.934 17.9795 63.6729V62.3996Z" fill="white"/>
                   <path d="M27.0013 63.7616C27.0013 66.1556 28.5722 66.4233 29.9468 66.4233H31.861C33.8259 66.4233 35.0166 65.9784 35.0166 64.4872V64.3606H33.9606C33.899 65.3532 33.3588 65.5319 32.0326 65.5319H30.5849C28.743 65.5319 28.0557 65.15 28.0557 63.6718V63.2652H35.0166V62.5403C35.0166 60.2222 33.6535 59.7252 31.7625 59.7252H30.0692C28.5722 59.7252 27.0013 59.9914 27.0013 62.3478V63.7616ZM29.9591 58.8339H30.7811L33.0393 56.4781H31.7748L29.9591 58.8339ZM33.9606 62.3739H28.0557C28.1542 60.8957 28.5468 60.6158 30.217 60.6158H31.7625C33.4804 60.6158 33.9606 61.2785 33.9606 61.9405V62.3739Z" fill="white"/>
                   <path d="M37.0411 68.5881H38.0964V65.4554H38.1217C38.3419 66.1311 38.8452 66.4234 39.9628 66.4234H41.9747C44.149 66.4234 45.0442 65.7108 45.0442 63.6106V62.4622C45.0442 60.2224 43.6457 59.7253 42.1479 59.7253H40.1468C39.2139 59.7253 38.355 60.069 38.0479 60.8583H38.0232V59.8266H37.0411V68.5881ZM43.9889 63.7494C43.9889 65.2513 43.2516 65.5328 42.0247 65.5328H40.1468C39.03 65.5328 38.0964 65.2774 38.0964 63.7241V62.4883C38.0964 61.3684 38.6251 60.6159 40.0113 60.6159H42.1094C43.5956 60.6159 43.9889 61.215 43.9889 62.4753V63.7494Z" fill="white"/>
                   <path d="M53.5862 66.3213H54.6415V61.9666C54.6415 60.0305 53.3161 59.7252 51.3534 59.7252H49.6825C47.7922 59.7252 47.0687 60.2084 47.0687 61.3936V61.7111H48.1247V61.4826C48.1247 60.9472 48.3817 60.6158 49.7071 60.6158H51.2542C52.8735 60.6158 53.5862 60.7692 53.5862 61.9398V63.1625H53.5624C53.1929 62.5396 52.7019 62.3862 51.3281 62.3862H49.634C47.7922 62.3862 46.7855 62.5649 46.7855 64.0423V64.4764C46.7855 65.6976 47.2042 66.4233 48.7989 66.4233H51.3281C52.949 66.4233 53.2799 66.2576 53.5624 65.6716H53.5862V66.3213ZM53.5862 64.5769C53.5862 65.3916 52.8497 65.5319 50.9355 65.5319H49.5363C48.0862 65.5319 47.8422 65.2266 47.8422 64.5002V64.297C47.8422 63.4816 48.2232 63.279 49.5855 63.279H51.2049C52.8251 63.279 53.5862 63.3933 53.5862 64.2839V64.5769Z" fill="white"/>
                   <path d="M56.9615 59.8267H57.9436V60.7687H57.9675C58.36 59.928 59.1589 59.7255 59.8832 59.7255H60.5859C62.5624 59.7255 63.2128 60.3875 63.2128 61.9784V62.7562H62.2307V62.4754C62.2307 60.8715 61.912 60.6161 60.034 60.6161H59.6738C58.5571 60.6161 58.0168 61.3547 58.0168 62.1954V66.3223H56.9615V59.8267Z" fill="white"/>
                   <path d="M65.3974 60.7185H64.0228V59.8272H65.3974V58.2862H66.4519V59.8272H70.6381V60.7185H66.4519V63.9525C66.4519 65.1622 66.8567 65.5319 68.0112 65.5319H68.343C69.7422 65.5319 69.9623 65.2259 69.9623 63.8643V63.3795H70.8221V64.0921C70.8221 65.3923 70.6989 66.424 68.4169 66.424H67.8396C65.8639 66.424 65.3974 65.4314 65.3974 64.3736V60.7185Z" fill="white"/>
                   <path d="M72.1968 63.7614C72.1968 66.1562 73.7677 66.4232 75.1423 66.4232H77.0572C79.0214 66.4232 80.2129 65.9783 80.2129 64.4871V64.3605H79.1561C79.0945 65.3531 78.5542 65.5318 77.2296 65.5318H75.7804C73.9393 65.5318 73.252 65.1498 73.252 63.6724V63.2651H80.2129V62.5403C80.2129 60.2222 78.849 59.7251 76.9595 59.7251H75.2654C73.7677 59.7251 72.1968 59.9913 72.1968 62.3485V63.7614ZM79.1561 62.3738H73.252C73.3505 60.8956 73.7438 60.6157 75.4125 60.6157H76.9595C78.6774 60.6157 79.1561 61.2784 79.1561 61.9404V62.3738Z" fill="white"/>
                   <path d="M82.2373 59.8267H83.2187V60.5923H83.2433C83.6851 59.9172 84.2862 59.7255 85.3422 59.7255H87.0485C88.0044 59.7255 88.7426 60.119 89.0735 60.9221C89.466 60.0446 90.3127 59.7255 91.3933 59.7255H92.6709C94.3634 59.7255 95.4063 60.4895 95.4063 61.9669V66.3223H94.3519V62.0942C94.3519 61.3417 94.0325 60.6161 92.3508 60.6161H91.6019C89.6993 60.6161 89.4414 61.4322 89.4414 62.4754V66.3223H88.3854V62.3865C88.3854 61.1261 88.0045 60.6161 86.3243 60.6161H85.2683C83.9183 60.6161 83.2918 61.2013 83.2918 62.2468V66.3223H82.2373V59.8267Z" fill="white"/>
                   <path d="M97.481 63.7614C97.481 66.1562 99.0518 66.4232 100.426 66.4232H102.341C104.306 66.4232 105.496 65.9783 105.496 64.4871V64.3605H104.44C104.379 65.3531 103.838 65.5318 102.514 65.5318H101.066C99.2227 65.5318 98.5362 65.1498 98.5362 63.6724V63.2651H105.496V62.5403C105.496 60.2222 104.133 59.7251 102.242 59.7251H100.55C99.0518 59.7251 97.481 59.9913 97.481 62.3485V63.7614ZM104.44 62.3738H98.5362C98.6347 60.8956 99.0265 60.6157 100.697 60.6157H102.242C103.962 60.6157 104.44 61.2784 104.44 61.9404V62.3738Z" fill="white"/>
                   <path d="M107.521 59.8267H108.502V60.9482H108.527C108.919 59.9418 109.742 59.7255 111.056 59.7255H112.639C114.616 59.7255 115.241 60.7564 115.241 61.9285V66.3223H114.185V62.1954C114.185 61.2404 113.928 60.6161 111.877 60.6161H111.607C109.141 60.6161 108.576 61.1001 108.576 62.6288V66.3223H107.521V59.8267Z" fill="white"/>
                   <path d="M118.162 60.7185H116.787V59.8271H118.162V58.2861H119.219V59.8271H123.403V60.7185H119.219V63.9533C119.219 65.1622 119.622 65.5319 120.776 65.5319H121.108C122.508 65.5319 122.728 65.2258 122.728 63.8643V63.3795H123.587V64.0921C123.587 65.3923 123.465 66.424 121.181 66.424H120.604C118.628 66.424 118.162 65.4314 118.162 64.3736V60.7185Z" fill="white"/>
                   <path d="M49.9453 0.408653L58.0715 19.2403H72.258V52.4738H101.191L123.586 0.408653H112.539C103.413 0.408653 97.7787 4.08217 94.7346 12.6067L86.6954 35.1395L74.3715 0.408653H49.9453Z" fill="#E94F35"/>
               </g>
               <defs>
                   <clipPath id="clip0_4_73">
                       <rect width="124" height="69" fill="white"/>
                   </clipPath>
               </defs>
           </svg>
            <li>
                <router-link to="/home">Accueil</router-link>
            </li>
           <hr>
           <h3>support</h3>
           <li>
              <dropdown-menu   class="drop-a" title="Serveur SE4" :isActive="activeDropdown === 1" @toggle-dropdown="toggleDropdown(1)">
                  <router-link class="link" id="link" to="/server">Statistiques des SE4</router-link>
                  <router-link class="link" id="link" to="/acces-distance">Accès à distance</router-link>
                  <router-link class="link" id="link" to="/assistance">Assistance utilisateur</router-link>
                  <router-link class="link" id="link" to="/activation">Activer un nouveau site</router-link>
              </dropdown-menu>
              <dropdown-menu class="drop-a"  title="PVE" :isActive="activeDropdown === 2" @toggle-dropdown="toggleDropdown(2)">
                   <router-link class="link" id="link" to="/PVE">Stat des Pve</router-link>
                   <router-link class="link" id="link" to="/save">État des sauvegardes</router-link>
              </dropdown-menu>
           </li>
           <hr>
           <li>
               <router-link class="" id="link" to="/Etat">État des liens</router-link>
               <router-link class="" id="link" to="/cloud">Cloud</router-link>
           </li>
           <hr>
           <h3>Action</h3>
           <li>
               <dropdown-menu class="drop-a"  title="Action en masse" :isActive="activeDropdown === 3" @toggle-dropdown="toggleDropdown(3)">
                   <router-link class="link" id="link" to="/start">allumage / Extinction</router-link>
                   <router-link class="link" id="link" to="/deploiment">Déploiment OS</router-link>
                   <router-link class="link" id="link" to="/screen">Fond d'écrant</router-link>
                   <router-link class="link" id="link" to="/update">Mise à jour</router-link>
               </dropdown-menu>
               <dropdown-menu class="drop-a" title="Annuaire" :isActive="activeDropdown === 4" @toggle-dropdown="toggleDropdown(4)">
                 <router-link class="link" id="link" to="/search">Recherche</router-link>
                 <router-link class="link" id="link" to="/import">Imports / Exports</router-link>

               </dropdown-menu>
               <dropdown-menu class="drop-a" title="Autorisations" :isActive="activeDropdown === 5" @toggle-dropdown="toggleDropdown(5)" >
                  <router-link class="link" id="link" to="/cree">Créer un compte</router-link>
                  <router-link class="link" id="link" to="/deleg">Délégation(droitt/site)</router-link>
               </dropdown-menu>
           </li>
       </ul>
    </div>
  </transition>
</template>

<script>
import DropdownMenu from './DropComponent.vue';
import MenuBurger from './MenuBurger.vue'
import router from "@/router";

export default {
    components: {
      'menu-burger': MenuBurger,
      DropdownMenu,
    },
    data() {
        return {
            activeDropdown: null,
            isVisible:(window.innerWidth > 910)==true,
        };
    },
    created() {
     router.beforeEach((to, from, next) => {
        if (window.innerWidth < 910) {
          this.isVisible = false;
        }
        this.$refs.menuBurger.resetIcone();
        next();
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth > 910) {
          this.isVisible = true;
        } else {
          this.isVisible = false
        }
      });

    },

  methods: {
        handleToggleMenu(isActive) {
          this.isVisible = !this.isVisible;
          if(!isActive || !this.isVisible ){
            this.$refs.menuBurger.resetIcone();
          }
        },
        toggleDropdown(menuIndex){
            if (this.activeDropdown === menuIndex) {
                this.activeDropdown = null;
            } else {
                this.activeDropdown = menuIndex;
            }
        },
    },

};


</script>


<style scoped lang="scss">



.global{
    padding: 16px;
    background-color: #009dff;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    transform: translatex(0);
    align-items: flex-start;
    color: white;
}


hr{
    border: white solid 1px;
    margin: 8px 0px;
}

ul{
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
}

svg{
    align-self: center;
    margin: 16px;
}

li{
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin-top: 16px;
    width: 100%;
    gap: 16px;

}

.link{
    color: black;
    text-decoration: none;
}

.drop-a a{

    font-size:14px ;
    color: black;
    text-decoration: none;
}

a{
    color: white;
    text-decoration: none;
    width:length( 100%);
    &::after{
      position: relative;
      content: "";
      display: block;
      width: 0%;
      bottom:-4px;
      height: 2px;
      background-color: #E94F35;
      transition: width 0.3s ease-in-out;
    }

    &:hover::after{
      width: 100%;
    }
}

a.router-link-active{
  &::after{
    position: relative;
    content: "";
    display: block;
    width: 100%;
    bottom:-4px;
    height: 2px;
    background-color: #E94F35;
    transition: width 0.3s ease-in-out;
  }

}



@media screen and (max-width: 910px) {
    .global{
        backdrop-filter: opacity(0.5);
        backdrop-filter: blur(7px);
        height: 100vh;
        position: fixed;
        align-items: center;
        width: 100vw;
        z-index: 100;
        top: 0;
        left: 0;
        padding: 0;
        margin: 0;
        background-color:#009DFF72;
    }
    ul{
        width: 100%;
        align-items: center;
    }
    li{
        width: 100%;
        align-items: center;
    }
    svg{
        align-self: center;
        margin: 16px;
    }
    hr{
      width: 20%;
        border: white solid 1px;
        margin: 8px 0px;
    }
    .drop-a a{
        font-size: 14px;
        color: black;
        text-decoration: none;
    }
    a{
        color: white;
        text-decoration: none;
    }

  .menu-fade-enter-active, {
    transforme: translateX(-300);

  }
}






</style>

import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


// Vetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles';
import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        iconfont: 'mdi',
    },

});

createApp(App).use(vuetify).use(store).use(router).mount('#app');
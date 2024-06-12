import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  
import './assets/styles.css'
import i18n from './i18n';

// Importa las dependencias de Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

// Añade los iconos a la librería
library.add(faArrowUp);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(i18n);
app.mount('#app');

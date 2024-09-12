import './utils/rem';
import './style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue';
import router from './router';

const app = createApp(App);
const paina = createPinia();

paina.use(piniaPluginPersistedstate);
app.use(paina);
app.use(router);

app.mount('#app');

import { createApp } from 'vue'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import router from './routes';

import * as FaIcons from "oh-vue-icons/icons/";

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

const app = createApp(App);
app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");

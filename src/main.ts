import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import element from "./plugins/element";
import i18n from "./plugins/i18n";

const app = createApp(App);
app.use(router).use(element).use(i18n);
app.mount("#app");

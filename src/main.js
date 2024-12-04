import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "@/assets/scss/main.scss"
createApp(App).use(store).use(router).mount("#app");

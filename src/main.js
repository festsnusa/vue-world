import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import "./utils/filter";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;

const api = axios.create({
  baseURL:
    process.env.VUE_APP_API_URL !== undefined
      ? process.env.VUE_APP_API_URL
      : "https://restcountries.com/v2/",
});

//API call prototype variable
Vue.prototype.$http = api;

//Font awesome Icon setup
library.add(faMoon);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

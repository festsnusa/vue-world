import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";

Vue.config.productionTip = false;

const api = axios.create({
  baseURL:
    process.env.VUE_APP_API_URL !== undefined
      ? process.env.VUE_APP_API_URL
      : "https://restcountries.com/v2/",
});

Vue.prototype.$http = api;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

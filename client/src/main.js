import Vue from "vue";
import vuetify from "./plugins/vuetify";
import router from './router';
import Navbar from "./components/Navbar.vue";
import Home from "./views/Home.vue";

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    render: (h) => h(Navbar)
}).$mount("#navbar");

new Vue({
    vuetify,
    router,
    render: (h) => h(Home)
}).$mount("#app");
import Vue from "vue";
import vuetify from "./plugins/vuetify";
import router from './router'
import Navbar from "./components/Navbar.vue"

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    render: (h) => h(Navbar)
}).$mount("#navbar");
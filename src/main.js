// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuetify from "vuetify";
import VueApollo from "vue-apollo";
import VueCookies from "vue-cookies";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import axios from "axios";
import VueAxios from "vue-axios";
import fullCalendar from "vue-fullcalendar";
import swatches from "vue-swatches";
import Viewer from "v-viewer";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-swatches/dist/vue-swatches.min.css";
import "vuetify/dist/vuetify.min.css";
import "font-awesome/css/font-awesome.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "viewerjs/dist/viewer.css";

import App from "./App";
import router from "./router";

Vue.use(VueCookies);
Vue.use(VueAxios, axios);
Vue.component("full-calendar", fullCalendar);
Vue.component("swatches", swatches);

Vue.use(VueApollo);
// HTTP connection to the API
const httpLink = createHttpLink({
  uri: "http://localhost:3841/graphql"
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(Vuetify);
Vue.use(Viewer, {
  debug: true,
  defaultOptions: {
    zIndex: 9999
  }
});
Vue.config.productionTip = false;

Vue.$cookies.config("7d");

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (Vue.$cookies.get("token") === null) {
      next({ name: "Login" });
    } else {
      next(); // go to wherever I'm going
    }
  } else {
    next(); // does not require auth, make sure to always call next()!
  }
});
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  apolloProvider,
  components: { App },
  template: "<App/>"
});

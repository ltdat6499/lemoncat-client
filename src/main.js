// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuetify from "vuetify";
import VueApollo from "vue-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import axios from "axios";
import VueAxios from "vue-axios";
import fullCalendar from "vue-fullcalendar";
import swatches from "vue-swatches";
import "vue-swatches/dist/vue-swatches.min.css";
import "vuetify/dist/vuetify.min.css";
import "font-awesome/css/font-awesome.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

import App from "./App";
import router from "./router";
// import "./styles/global.css";

Vue.use(VueAxios, axios);
Vue.component("full-calendar", fullCalendar);
Vue.component("swatches", swatches);

Vue.use(VueApollo);
// HTTP connection to the API
const httpLink = createHttpLink({
  uri: "http://localhost:3841/admin-graphql"
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

Vue.use(Vuetify);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  apolloProvider,
  components: { App },
  template: "<App/>"
});

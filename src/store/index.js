import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: "",
      image: "",
      name: "",
      email: "",
      slug: "",
      role: "",
      data: {}
    }
  },
  getters: {
    getUser: state => state.user
  },
  mutations: {
    updateUser(state, newUser) {
      state.user = newUser;
    }
  },
  actions: {
    handleUpdateUser(ctx, newUser) {
      ctx.commit("updateUser", newUser);
    }
  }
});

<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  async created() {
    if (this.$cookies.get("token") !== null) {
      let data = await axios({
        method: "post",
        url: "http://127.0.0.1:3841/profile",
        data: {
          token: this.$cookies.get("token")
        }
      });
      const user = {
        id: data.data.data.id,
        image: data.data.data.image,
        name: data.data.data.name,
        email: data.data.data.email,
        slug: data.data.data.slug
      };
      this.$store.dispatch("handleUpdateUser", user);
    }
  },
  // mounted() {
  //   window.onpopstate = event => {
  //     if (
  //       this.$cookies.get("token") !== null &&
  //       this.$route.path === "/login"
  //     ) {
  //       this.$router.push("/");
  //     }
  //   };
  // },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || "Home";
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "URW Gothic", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 30px;
  background-color: #eeedee;
  /* margin-top: 60px; */
}
</style>

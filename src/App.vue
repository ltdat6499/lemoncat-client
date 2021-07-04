<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  mounted() {
    window.onpopstate = event => {
      if (
        this.$cookies.get("token") !== null &&
        this.$route.path === "/login"
      ) {
        this.$router.push("/");
      }
    };
  },
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

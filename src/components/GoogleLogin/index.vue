<template>
  <v-btn elevation="4" color="grey lighten-3" icon large @click="loginGoogle">
    <img :src="google" alt="" style="width:30px" />
  </v-btn>
</template>

<script>
export default {
  name: "GoogleLogin",

  data() {
    return {
      google: require("@/icons/google.svg")
    };
  },
  methods: {
    async loginGoogle() {
      // const left = window.screen.width / 2 - 300;
      // const top = window.screen.height / 2 - 400;
      window.open(
        `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3841%2Fauth%2Fgoogle%2Fcallback&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&client_id=319769288012-4g798du39fn8kpfc9iio7t4ifqlkc2g8.apps.googleusercontent.com`,
        "_self"
        // `width=600px,height=800px,left=${left},top=${top}`
      );
    }
  }
};
</script>

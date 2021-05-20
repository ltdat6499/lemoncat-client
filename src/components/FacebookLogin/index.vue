<template>
  <v-btn elevation="4" color="grey lighten-3" icon large @click="loginFacebook">
    <img :src="facebook" alt="" style="width:30px" />
  </v-btn>
</template>

<script>
export default {
  name: "FacebookLogin",

  data() {
    return {
      facebook: require("@/icons/facebook.svg")
    };
  },
  methods: {
    async loginFacebook() {
      // const left = window.screen.width / 2 - 300;
      // const top = window.screen.height / 2 - 400;
      window.open(
        `https://www.facebook.com/v3.2/dialog/oauth?auth_type=reauthenticate&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3841%2Fauth%2Ffacebook%2Fcallback&scope=user_friends&client_id=842437046515626`,
        "_self"
        // `width=600px,height=800px,left=${left},top=${top}`
      );
    }
  }
};
</script>

<template>
  <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
    <div>
      <v-snackbar
        top
        absolute
        centered
        color="red darken-2"
        v-model="snackbar"
        :timeout="timeout"
      >
        {{ text }}
        <v-icon dark>
          mdi-cancel
        </v-icon>
      </v-snackbar>
      <v-tabs
        v-model="tab"
        show-arrows
        background-color="deep-purple accent-4"
        icons-and-text
        grow
      >
        <v-tabs-slider color="teal darken-4"></v-tabs-slider>
        <v-tab v-for="i in tabs" :key="i.name">
          <v-icon large>{{ i.icon }}</v-icon>
          <div class="caption py-1">{{ i.name }}</div>
        </v-tab>
        <v-tab-item>
          <v-card class="px-4">
            <v-card-text>
              <v-form ref="loginForm" v-model="valid" lazy-validation>
                <b-row>
                  <b-col cols="12">
                    <v-text-field
                      v-model="loginEmail"
                      :rules="loginEmailRules"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </b-col>
                  <b-col cols="12">
                    <v-text-field
                      v-model="loginPassword"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      label="Password"
                      hint="At least 8 characters"
                      counter
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </b-col>
                  <b-col cols="12"> </b-col>
                  <v-spacer></v-spacer>
                  <b-col cols="12" align-end>
                    <v-btn
                      x-large
                      block
                      :disabled="!valid"
                      color="light-green accent-3"
                      @click="validate"
                    >
                      Login
                    </v-btn>
                  </b-col>
                </b-row>
              </v-form>
              <v-spacer></v-spacer>
              <span>Or Login with</span>
              <v-spacer></v-spacer>
              <google-login></google-login>
              <facebook-login></facebook-login>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card class="px-4">
            <v-card-text>
              <v-form ref="registerForm" v-model="valid" lazy-validation>
                <b-row>
                  <b-col cols="12">
                    <v-text-field
                      v-model="name"
                      :rules="[rules.required]"
                      label="Name"
                      maxlength="20"
                      required
                    ></v-text-field>
                  </b-col>
                  <b-col cols="12">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </b-col>
                  <b-col cols="12">
                    <v-text-field
                      v-model="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      label="Password"
                      hint="At least 8 characters"
                      counter
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </b-col>
                  <b-col cols="12">
                    <v-text-field
                      block
                      v-model="verify"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, passwordMatch]"
                      :type="show1 ? 'text' : 'password'"
                      label="Confirm Password"
                      counter
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </b-col>
                  <v-spacer></v-spacer>
                  <b-col cols="12">
                    <v-btn
                      x-large
                      block
                      :disabled="!valid"
                      color="light-green accent-3"
                      @click="validate"
                      >Register</v-btn
                    >
                  </b-col>
                </b-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
  </v-dialog>
</template>
<script>
import axios from "axios";
import GoogleLogin from "@/components/GoogleLogin";
import FacebookLogin from "@/components/FacebookLogin";
export default {
  components: {
    GoogleLogin,
    FacebookLogin
  },
  data() {
    return {
      valid: false,
      e1: false,
      password: "",
      passwordRules: [v => !!v || "Password is required"],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ]
    };
  },
  created() {
    if (this.$cookies.get("token") !== null) this.$router.push("/");
  },
  mounted() {
    const data = this.$route.query.token;
    if (data) {
      this.$cookies.set("token", data);
      this.$router.push("/");
    }
  },
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    }
  },
  methods: {
    async validate() {
      if (this.$refs.loginForm.validate()) {
        try {
          const { data } = await axios.post("http://localhost:3841/login", {
            email: this.loginEmail,
            password: this.loginPassword
          });
          if (data === "auth failed") {
            this.snackbar = true;
            return;
          }
          let res = await axios({
            method: "post",
            url: "http://127.0.0.1:3841/profile",
            data: {
              token: this.$cookies.get("token")
            }
          });
          this.$cookies.set("token", data);
          const user = {
            id: res.data.data.id,
            image: res.data.data.image,
            name: res.data.data.name,
            email: res.data.data.email,
            slug: res.data.data.slug
          };
          this.$store.dispatch("handleUpdateUser", user);
          // alert(JSON.stringify(this.$cookies.get("token")));
          this.$router.push("/");
        } catch (error) {
          alert(error);
        }
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  },
  data: () => ({
    facebook: require("@/icons/facebook.svg"),
    dialog: true,
    tab: 0,
    tabs: [
      { name: "Login", icon: "mdi-account" },
      { name: "Register", icon: "mdi-account-outline" }
    ],
    valid: true,
    snackbar: false,
    text: "Authenticate Failed",
    timeout: 2000,
    name: "",
    email: "",
    password: "",
    verify: "",
    loginPassword: "",
    loginEmail: "",
    loginEmailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    emailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],

    show1: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 8) || "Min 8 characters"
    }
  })
};
window.setRefreshToken = refreshToken => {
  window.vue.$children[0].$store.dispatch(
    "google/setRefreshToken",
    refreshToken
  );
};
</script>
<style scoped></style>

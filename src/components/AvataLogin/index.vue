<template>
  <v-menu open-on-hover bottom right min-width="110px" rounded offset-y>
    <template v-slot:activator="{ on }">
      <v-btn icon x-large v-on="on">
        <v-avatar>
          <img :src="image" />
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-list-item-content>
        <div class="mx-auto">
          <b-button tile class="block" variant="outline-success">
            <span class="title-container">
              <span
                ><v-icon class="icon">
                  mdi-account-circle-outline
                </v-icon></span
              >
              <span>Profile</span>
            </span>
          </b-button>
          <b-button tile class="block" variant="outline-success">
            <span class="title-container">
              <span
                ><v-icon class="icon">
                  mdi-settings
                </v-icon></span
              >
              <span>Settings</span>
            </span>
          </b-button>
          <v-divider></v-divider>
          <b-button
            tile
            class="block"
            variant="outline-danger"
            @click="logout()"
          >
            <span class="title-container">
              <span
                ><v-icon class="icon">
                  mdi-logout
                </v-icon></span
              >
              <span>Logout</span>
            </span>
          </b-button>
        </div>
      </v-list-item-content>
    </v-card>
  </v-menu>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      image: require("../../icons/logo.png"),
      slug: ""
    };
  },
  async created() {
    if (this.$cookies.get("token") != null) {
      let data = await axios({
        method: "post",
        url: "http://127.0.0.1:3841/profile",
        data: {
          token: this.$cookies.get("token")
        }
      });
      this.image = data.data.data.image;
      this.slug = data.data.data.slug;
    }
  },
  methods: {
    logout() {
      this.$cookies.remove("token", "/", "localhost");
      this.$router.go("/");
    }
  }
};
</script>

<style scoped>
.title-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.block {
  margin: 0;
  display: block;
  width: 100%;
  border: none;
  text-align: center;
  color: black;
}
.icon {
  color: black;
  margin-right: 5px;
}
.block:hover .icon {
  color: white;
  margin-right: 5px;
}
.block:hover {
  margin: 0;
  display: block;
  width: 100%;
  border: none;
  text-align: center;
  color: white !important;
}
</style>

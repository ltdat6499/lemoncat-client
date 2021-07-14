<template>
  <v-menu v-if="user.id !== ''" open-on-hover bottom right min-width="110px" rounded offset-y>
    <template v-slot:activator="{ on }">
      <v-btn icon x-large v-on="on">
        <v-avatar>
          <img :src="user.image" />
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <div>
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
      </div>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  // created() {
  //   console.log(this.$store.state.user);
  // },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logout() {
      this.$cookies.remove("token", "/", "localhost");
      this.$store.dispatch("handleUpdateUser", {
        id: "",
        image: "",
        name: "",
        email: "",
        slug: ""
      });
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

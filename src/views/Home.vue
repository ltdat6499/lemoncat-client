<template>
  <div>
    <!-- Header -->
    <navbar class="navbar container"></navbar>
    <v-card tile outlined elevation="0" class="container body-container">
      <!-- Body -->
      <div></div>
      <!-- Footer -->
      <div></div>
    </v-card>
  </div>
</template>

<script>
// import getAllUsers from "@/apollo/queries/getAllUsers.gql";
import Navbar from "@/components/Navbar";
export default {
  name: "Home",
  components: {
    Navbar
  },
  data() {
    return {
      // msg: "Welcome to Your Vue.js App"
    };
  }
  // apollo: {
  //   users: {
  //     query: getAllUsers,
  //     result(res) {
  //       this.msg = res;
  //     }
  //   }
  // }
};
</script>
<style scoped>
.container {
  background-color: #48cf73;
}
.body-container {
  background-color: #434e47 !important;
}
</style>

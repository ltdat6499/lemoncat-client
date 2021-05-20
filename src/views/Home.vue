<template>
  <v-card elevation="1">
    <!-- Header -->
    <div><navbar></navbar></div>
    <!-- Body -->
    <div></div>
    <!-- Footer -->
    <div></div>
  </v-card>
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

</style>
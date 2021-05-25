<template>
  <div>
    <!-- Header -->
    <navbar id="myHeader" class="navbar container"></navbar>
    <!-- Body -->
    <v-card tile outlined elevation="0" class="container body-container">
      <div>
        
      </div>
      <div>

      </div>
    </v-card>
    <!-- Footer -->
    <div></div>
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
// window.onscroll = function() {
//   myFunction();
// };

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
</script>
<style scoped>
.container {
  background-color: #48cf73;
}
.body-container {
  background-color: #434e47 !important;
}
.sticky {
  position: fixed;
  top: 0;
}
</style>

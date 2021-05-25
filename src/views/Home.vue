<template>
  <div>
    <!-- Header -->
    <navbar id="myHeader" class="navbar container"></navbar>
    <!-- Body -->
    <v-card
      tile
      outlined
      elevation="0"
      class="container body-container row-style"
    >
      <b-row cols="12">
        <b-col lg="6"> <carousel-home style="width:100%" /> </b-col>
        <b-col lg="3">Variable width content</b-col>
        <b-col lg="3">3 of 3</b-col>
      </b-row>
    </v-card>
    <!-- Footer -->
    <div></div>
  </div>
</template>

<script>
// import getAllUsers from "@/apollo/queries/getAllUsers.gql";
import Navbar from "@/components/Navbar";
import CarouselHome from "@/components/CarouselHome";
export default {
  name: "Home",
  components: {
    Navbar,
    CarouselHome
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
  background-color: #ffffff !important;
}
.sticky {
  position: fixed;
  top: 0;
}
.row-style {
  padding: 0 !important;
}
</style>

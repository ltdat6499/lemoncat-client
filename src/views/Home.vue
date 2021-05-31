<template>
  <div>
    <!-- Header -->
    <navbar
      style="z-index:9999"
      id="myHeader"
      class="navbar container"
    ></navbar>
    <!-- Body -->
    <v-card
      tile
      outlined
      elevation="0"
      class="container body-container row-style"
      style="display:block;"
    >
      <div
        style="padding-top:4px;display:flex;align-items:center;z-index:1000;max-height:20px;position:absolute;height:20px;width:100%;background-color:black;opacity:0.6;color:white"
      >
        <span style="color: #F6DC24;margin-left:10px"
          ><strong>TRENDING ON LC</strong></span
        >
        <b-link class="trending-link" style="margin-left:10px"
          >Eternals Trailer
        </b-link>
        <b-link class="trending-link" style="margin-left:10px"
          >Disney Animation Showdown
        </b-link>

        <b-link class="trending-link" style="margin-left:10px"
          >TV Premiere Dates
        </b-link>
        <b-link class="trending-link" style="margin-left:10px"
          >The Lemoncat Channel
        </b-link>
        <b-link
          style="text-decoration:none;margin-left: auto;margin-right:10px"
        >
          <v-icon dense small style="color:white;">
            mdi-facebook
          </v-icon>
        </b-link>
        <b-link
          style="text-decoration:none;margin-left: 10px;margin-right:10px"
        >
          <v-icon dense small style="color:white;">
            mdi-snapchat
          </v-icon>
        </b-link>
        <b-link
          style="text-decoration:none;margin-left: 10px;margin-right:10px"
        >
          <v-icon dense small style="color:white;">
            mdi-instagram
          </v-icon>
        </b-link>
        <b-link
          style="text-decoration:none;margin-left: 10px;margin-right:10px"
        >
          <v-icon dense small style="color:white;">
            mdi-twitter
          </v-icon>
        </b-link>
        <b-link
          style="text-decoration:none;margin-left: 10px;margin-right:10px"
        >
          <v-icon dense small style="color:white;">
            mdi-youtube
          </v-icon>
        </b-link>
      </div>
      <b-row style="width:100%;">
        <b-col lg="6">
          <carousel-home style="width:100%" />
        </b-col>
        <b-col lg="3"><news-home style="width:100%"/></b-col>
        <b-col lg="3"><news-home style="width:100%"/></b-col>
      </b-row>
    </v-card>
    <v-card
      tile
      outlined
      elevation="0"
      class="container body-container row-style"
      style="display:block;"
    >
      <slider-movie>
        <span slot="header">NEW & UPCOMING MOVIES </span>
      </slider-movie>
      <b-row>
        <b-col
          ><home-table>
            <span slot="header">POPULAR STREAMING MOVIES </span>
          </home-table></b-col
        >
        <b-col
          ><home-table>
            <span slot="header">MOST POPULAR TV ON LC </span></home-table
          ></b-col
        >
        <b-col
          ><home-table>
            <span slot="header">NEW TV THIS WEEK </span></home-table
          ></b-col
        >
      </b-row>
      <slider-movie>
        <span slot="header">POPULAR IN THEATERS </span>
      </slider-movie>
      <slider-movie>
        <span slot="header">ESSENTIAL ZOMBIE MOVIES </span>
      </slider-movie>
      <slider-movie>
        <span slot="header">BEST SERIES ON NETFLIX </span>
      </slider-movie>
      <slider-movie>
        <span slot="header">EVERY '90S BLOCKBUSTER MOVIE RANKED </span>
      </slider-movie>
      <slider-movie>
        <span slot="header">BEST ASIAN-AMERICAN MOVIES </span>
      </slider-movie>
      <slider-movie>
        <span slot="header">NEWLY CERTIFIED FRESH CLASSICS </span>
      </slider-movie>
      <news-preview>
        <span slot="header">TRAILERS & VIDEOS </span>
      </news-preview>
      <movie-guide>
        <span slot="header">MOVIE & TV GUIDES </span>
      </movie-guide>
      <top-headline>
        <span slot="header">TOP HEADLINES </span>
      </top-headline>
    </v-card>
    <!-- Footer -->
    <v-card
      tile
      outlined
      elevation="0"
      class="container body-container row-style"
      style="display:block;"
    >
      <page-footer />
    </v-card>
  </div>
</template>

<script>
// import getAllUsers from "@/apollo/queries/getAllUsers.gql";
import Navbar from "@/components/Navbar";
import CarouselHome from "@/components/CarouselHome";
import NewsHome from "@/components/NewsHome";
import PageFooter from "@/components/Footer";
import SliderMovie from "@/components/SliderMovie";
import HomeTable from "@/components/HomeTable";
import NewsPreview from "@/components/NewsPreview";
import MovieGuide from "@/components/MovieGuide";
import TopHeadline from "@/components/TopHeadline";
export default {
  name: "Home",
  components: {
    Navbar,
    CarouselHome,
    NewsHome,
    PageFooter,
    SliderMovie,
    HomeTable,
    NewsPreview,
    MovieGuide,
    TopHeadline
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
.row {
  --bs-gutter-x: 0 !important;
}
.trending-link {
  text-decoration: none;
  color: white;
}
.trending-link:hover {
  text-decoration: none;
  color: #f6dc24;
}
</style>

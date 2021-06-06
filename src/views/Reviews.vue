<template>
  <div>
    <!-- HEADER -->
    <navbar
      style="z-index:9999"
      id="myHeader"
      class="navbar container"
    ></navbar>
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
    </v-card>
    <!-- BODY -->
    <v-card
      tile
      outlined
      elevation="0"
      class="container body-container row-style"
    >
      <b-row style="padding-top:30px">
        <b-col cols="3"><tv-card v-if="type === 'tv'"></tv-card> </b-col>
        <b-col cols="9">
          <b-row>
            <div style="padding-left:10px;padding-right:10px;width:100%">
              <header-bar>
                <span slot="header"
                  >THE WALKING DEAD: SEASON 10 - EPISODE 1 REVIEWS</span
                >
              </header-bar>
            </div>
          </b-row>
          <b-row
            style="padding-top: 20px;padding-bottom:20px;padding-left:10px;padding-right:10px"
          >
            <v-tabs v-model="tab" grow>
              <v-tab><strong>All Critics</strong></v-tab>
              <v-tab><strong>Top Critics</strong></v-tab>
              <v-tab><strong>All Audience</strong></v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item>
                <reviews></reviews>
              </v-tab-item>
              <v-tab-item>
                <reviews></reviews>
              </v-tab-item>
              <v-tab-item>
                <reviews></reviews>
              </v-tab-item>
            </v-tabs-items>
          </b-row>
        </b-col>
      </b-row>
    </v-card>
    <!-- FOOTER -->
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
import PageFooter from "@/components/Footer";
import TopHeadline from "@/components/TopHeadline";

import TvCard from "@/components/Review/TvCard";
import HeaderBar from "@/components/Movie/HeaderBar";
import Reviews from "@/components/Review/Table";
export default {
  name: "Home",
  components: {
    Navbar,
    PageFooter,
    TopHeadline,
    TvCard,
    HeaderBar,
    Reviews
  },
  data() {
    return {
      tab: null,
      popoverCriticSelected: "all",
      audienceRating: 3.55,
      showAllCrew: false,
      overCrew: true,
      showReview: false,
      type: "tv",
      ratingValue: 5,
      content: "<p><strong>gsdfgdfgsdfgsdfgsdfgdfgfdgsdfgfdgsdfg</strong></p>",
      quotes: [
        {
          name: "Ed Warren",
          text:
            "It was big mistake, acknowledging this doll. Though it. The inhuman spirit tricked you.."
        },
        {
          name: "Roger Perron",
          text:
            "I don't know what you are! But you leave my wife alone damn you!"
        },
        {
          name: "Bathsheba",
          text: "She's already gone.. And now your all gonna die"
        },
        {
          name: "Ed Warren",
          text: "Sometimes it's better to keep the genie in the bottle."
        },
        {
          name: "Drew",
          text: "You can't shoot a ghost"
        }
      ]

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
.rating:hover {
  color: #4f86d9;
}
.shadow-box {
  -webkit-box-shadow: 1px 1px 17px 0px rgba(0, 0, 0, 0.38);
  box-shadow: 1px 1px 17px 0px rgba(0, 0, 0, 0.38);
}
</style>

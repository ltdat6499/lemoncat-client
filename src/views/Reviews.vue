<template>
  <div>
    <loading v-if="isLoading"> </loading>
    <div v-else>
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
          <b-col cols="3"
            ><tv-card :slug="$route.params.slug"></tv-card>
          </b-col>
          <b-col cols="9">
            <b-row>
              <div style="padding-left:10px;padding-right:10px;width:100%">
                <header-bar>
                  <span slot="header">ALL REVIEWS</span>
                </header-bar>
              </div>
            </b-row>
            <b-row
              style="padding-top: 20px;padding-bottom:20px;padding-left:10px;padding-right:10px"
            >
              <v-tabs grow>
                <v-tabs-slider color="green"></v-tabs-slider>
                <v-tab><strong>All Critics</strong></v-tab>
                <v-tab><strong>Top Critics</strong></v-tab>
                <v-tab><strong>All Audience</strong></v-tab>
                <v-tab-item>
                  <reviews :posts="posts"></reviews>
                </v-tab-item>
                <v-tab-item>
                  <reviews :posts="top"></reviews>
                </v-tab-item>
                <v-tab-item>
                  <reviews :posts="audience"></reviews>
                </v-tab-item>
              </v-tabs>
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
  </div>
</template>

<script>
import _ from "lodash";
import getReviewsForFlim from "@/apollo/queries/getReviewsForFlim.gql";
import Navbar from "@/components/Navbar";
import PageFooter from "@/components/Footer";
import TopHeadline from "@/components/TopHeadline";

import TvCard from "@/components/Review/TvCard";
import HeaderBar from "@/components/Movie/HeaderBar";
import Reviews from "@/components/Review/Table";
import Loading from "@/components/Loading";
export default {
  components: {
    Navbar,
    PageFooter,
    TopHeadline,
    TvCard,
    HeaderBar,
    Reviews,
    Loading
  },
  data() {
    return {
      top: [],
      audience: [],
      isLoading: true,
      posts: [],
      allCritic: 0,
      fresh: 0,
      rotten: 0
    };
  },
  apollo: {
    reviewsForFlim: {
      query: getReviewsForFlim,
      variables() {
        return {
          slug: this.$route.params.slug
        };
      },
      result(result) {
        this.posts = result.data.reviewsForFlim;
        this.allCritic = this.posts.length;
        this.posts = this.posts.map(item => {
          item.score = parseFloat(item.score);
          return item;
        });
        this.posts = _.sortBy(this.posts, ["score"]).reverse();
        if (this.top.length === 0 && this.audience.length === 0)
          for (const item of this.posts) {
            if (item.data.score >= 60) this.fresh++;
            else this.rotten++;

            if (item.user.role === "s-user") {
              this.top.push(item);
            } else {
              this.audience.push(item);
            }
          }
        this.isLoading = false;
      }
    }
  }
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

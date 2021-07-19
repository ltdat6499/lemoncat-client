<template>
  <div>
    <loading v-if="isLoading"></loading>

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
        <b-row style="padding-top:50px;padding-bottom:20px">
          <b-col cols="3">
            <img
              :src="user.image"
              style="width:150px;height:150px;border-radius:50%"
            />
          </b-col>
          <b-col cols="9">
            <div style="display:flex;align-items:center;margin-bottom:15px">
              <span style="font-size:28px;margin-right:20px"
                >{{ user.name
                }}<b-badge v-if="user.role === 's-user'"
                  ><v-icon style="color:#26BA3A" large
                    >mdi-star-circle</v-icon
                  ></b-badge
                ></span
              >
              <b-button
                style="font-weight:bold;font-size:14px;color:black"
                variant="outline-secondary"
                >Edit your info</b-button
              >
              <v-btn elevation="4" icon><v-icon>mdi-wrench</v-icon></v-btn>
            </div>
            <div
              style="display:flex;align-items:center;justify-content:space-between;font-size:17px;width:70%;margin-bottom:15px"
            >
              <span
                ><strong>{{ user.data.working }}</strong></span
              >
              <span
                ><strong>{{ reviews.length }}</strong> Reviews</span
              >
              <span
                ><strong>{{ news.length }}</strong> News</span
              >
              <span
                ><strong>{{ histories.length }}</strong> Histories</span
              >
            </div>
            <div
              style="display:flex;align-items:center;font-size:17px;width:70%"
            >
              <strong
                >Contact at <i>{{ user.email }}</i></strong
              >
            </div>
          </b-col>
        </b-row>
        <hr style="width: 85%;margin-left: auto;margin-right: auto;" />
        <b-row style="width:100%">
          <v-tabs fixed-tabs style="width:100%;" v-model="tab">
            <v-tabs-slider color="green"></v-tabs-slider>
            <v-tab style="font-weight:bold" v-for="item in items" :key="item">
              {{ item }}
            </v-tab>
          </v-tabs>
          <v-tabs-items
            v-model="tab"
            style="width:80%;margin-left: auto;margin-right: auto;"
          >
            <v-tab-item v-for="item in items" :key="item">
              <div v-if="item === 'Reviews'">
                <reviews :posts="reviews"></reviews>
              </div>
              <div v-else-if="item === 'News'"><news :posts="news"></news></div>
              <div v-else><histories :posts="histories"></histories></div>
            </v-tab-item>
          </v-tabs-items>
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
import getUserInfo from "@/apollo/queries/getUserInfo.gql";
import Navbar from "@/components/Navbar";
import PageFooter from "@/components/Footer";
import HeaderBar from "@/components/Movie/HeaderBar";
import NewsCard from "@/components/NewsCard";
import Reviews from "@/components/User/Review";
import News from "@/components/User/News";
import Histories from "@/components/User/History";
import Loading from "@/components/Loading";

export default {
  components: {
    Navbar,
    PageFooter,
    HeaderBar,
    NewsCard,
    Reviews,
    News,
    Loading,
    Histories
  },
  data() {
    return {
      isLoading: true,
      reviews: [],
      histories: [],
      news: [],
      tab: null,
      items: ["Reviews", "News", "Histories"]
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  apollo: {
    getUserInfo: {
      query: getUserInfo,
      variables() {
        return {
          token: this.$cookies.get("token")
        };
      },
      result(res) {
        this.reviews = res.data.getUserInfo.reviews;
        this.histories = res.data.getUserInfo.histories;
        this.news = res.data.getUserInfo.news;
        this.isLoading = false;
        document.title = this.user.name.toUpperCase() + " - LEMONCAT";
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
.block {
  display: block;
  width: 100%;
  border: none;
  background-color: transparent;
  padding: 10px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  color: gray;
}
.block:hover {
  display: block;
  width: 100%;
  border: none;
  background-color: transparent;
  padding: 10px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  color: gray;
  background-color: #d1d1d1;
}
.react-icon {
  height: 38px;
  width: 38px;
  transition: all 0.1s ease-in-out;
}
.react-icon:hover {
  height: 41px;
  width: 41px;
  transform: scale(1.1);
}
.no-gutters {
  width: auto;
  margin-left: 10px;
}
.card {
  padding: 10px;
  border: none;
  max-width: 260px;
  margin: 10px;
}
</style>

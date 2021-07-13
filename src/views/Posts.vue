<template>
  <div>
    <div v-if="!isLoading">
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
        <b-row style="padding-top:50px">
          <b-col cols="9" style="padding-right:10px">
            <header-bar>
              <span slot="header">{{ section.toUpperCase() }} NEWS LIST</span>
            </header-bar>
            <br />
            <div style="display:flex;flex-wrap: wrap;margin:10px">
              <news-card
                v-for="item of posts"
                :key="item.slug"
                :slug="item.slug"
                :src="item.data.previewPoster"
                :date="item.createdAt"
                :name="item.title"
                class="card"
              ></news-card>
            </div>
            <hr style="width: 95%;margin-left: auto;margin-right: auto;" />
            <div
              style="display: flex;align-items: center;justify-content: space-between;padding:0 20px"
            >
              <b-link @click="previous()" style="text-decoration:none;"
                ><strong>Previous</strong></b-link
              >
              <div
                style="display: flex;align-items: center;justify-content: center"
              >
                <span style="margin-right:5px">Showing page: </span>
                <v-select
                  v-model="currentPage"
                  single-line
                  style="max-width:18%"
                  :items="pages"
                  @change="change()"
                ></v-select>
                <span style="margin-left:5px"> of {{ pages.length }}</span>
              </div>
              <b-link @click="next()" style="text-decoration:none;"
                ><strong>Next</strong></b-link
              >
            </div>
          </b-col>
          <b-col cols="3">
            <div>
              <header-bar>
                <span slot="header">FRESH NEWS IN WEEK</span>
              </header-bar>
              <side-best-news-week></side-best-news-week>
            </div>
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
    <loading v-else></loading>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import PageFooter from "@/components/Footer";
import HeaderBar from "@/components/Movie/HeaderBar";
import NewsCard from "@/components/NewsCard";
import Loading from "@/components/Loading";
import getPreviewPosts from "@/apollo/queries/getPreviewPosts.gql";
import SideBestNewsWeek from "@/components/SideBestNewsWeek";
export default {
  components: {
    Navbar,
    PageFooter,
    HeaderBar,
    NewsCard,
    Loading,
    SideBestNewsWeek
  },
  data() {
    return {
      posts: [],
      count: 0,
      isLoading: true,
      currentPage: 1,
      maxPage: 10,
      perPage: 21,
      section: "24 Frames",
      slug: "24-frames"
    };
  },
  created() {
    this.slug = this.$route.params.slug;
    switch (this.slug) {
      case "24-frames":
        this.section = "24 Frames";
        break;
      case "all-time-lists":
        this.section = "All-Time Lists";
        break;
      case "countdown":
        this.section = "Countdown";
        break;
      case "binge-guide":
        this.section = "Binge Guide";
        break;
      case "comics-on-tv":
        this.section = "Comics on TV";
        break;
      case "critics-consensus":
        this.section = "Critics Consensus";
        break;
      case "five-favorite-films":
        this.section = "Five Favorite Films";
        break;
      case "the-zeros":
        this.section = "The Zeros";
        break;
      case "parental-guidance":
        this.section = "Parental Guidance";
        break;
      case "red-carpet-roundup":
        this.section = "Red Carpet Roundup";
        break;
      case "video-interviews":
        this.section = "Video Interviews";
        break;
      case "weekly-ketchup":
        this.section = "Weekly Ketchup";
        break;
      case "sub-cult":
        this.section = "Sub-Cult";
        break;
      case "weekend-box-office":
        this.section = "Weekend Box Office";
        break;
      case "scorecards":
        this.section = "Scorecards";
        break;
      case "total-recall":
        this.section = "Total Recall";
        break;
      case "now-streaming":
        this.section = "Now Streaming";
        break;
      case "what-to-watch":
        this.section = "What to Watch";
        break;
      default:
        break;
    }
    document.title = this.section.toUpperCase() + " NEWS - LEMONCAT";
  },
  computed: {
    pages() {
      const results = [];
      for (let i = 1; i * this.perPage < this.count; i++) {
        results.push(i);
        this.maxPage = i;
      }
      return results;
    }
  },
  methods: {
    next() {
      if (this.currentPage < this.maxPage) {
        this.currentPage++;
        this.isLoading = true;
        this.$apollo
          .query({
            query: getPreviewPosts,
            variables: {
              page: this.currentPage || 1,
              size: this.perPage || 21,
              type: "news",
              section: this.section || "24 Frames"
            }
          })
          .then(result => {
            this.isLoading = true;
            this.posts = result.data.posts.results || [];
            this.count = result.data.posts.count || 0;
            this.isLoading = false;
          })
          .catch(() => {})
          .finally(() => {
            this.isLoading = false;
          });
        this.isLoading = false;
      }
    },
    previous() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.isLoading = true;
        this.$apollo
          .query({
            query: getPreviewPosts,
            variables: {
              page: this.currentPage || 1,
              size: this.perPage || 21,
              type: "news",
              section: this.section || "24 Frames"
            }
          })
          .then(result => {
            this.isLoading = true;
            this.posts = result.data.posts.results || [];
            this.count = result.data.posts.count || 0;
            this.isLoading = false;
          })
          .catch(() => {})
          .finally(() => {
            this.isLoading = false;
          });
        this.isLoading = false;
      }
    },
    change() {
      this.isLoading = true;
      this.$apollo
        .query({
          query: getPreviewPosts,
          variables: {
            page: this.currentPage || 1,
            size: this.perPage || 21,
            type: "news",
            section: this.section || "24 Frames"
          }
        })
        .then(result => {
          this.isLoading = true;
          this.posts = result.data.posts.results || [];
          this.count = result.data.posts.count || 0;
          this.isLoading = false;
        })
        .catch(() => {})
        .finally(() => {
          this.isLoading = false;
        });
      this.isLoading = false;
    }
  },
  apollo: {
    posts: {
      query: getPreviewPosts,
      variables() {
        return {
          page: this.currentPage || 1,
          size: this.perPage || 21,
          type: "news",
          section: this.section || "24 Frames"
        };
      },
      result(result) {
        this.isLoading = true;
        this.posts = result.data.posts.results || [];
        this.count = result.data.posts.count || 0;
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

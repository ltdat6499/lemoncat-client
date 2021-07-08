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
      <b-row style="padding-top:50px;padding:50px 10px 10px 10px">
        <b-col cols="3">
          <div
            style="display:flex;flex-direction: column;text-align:left;margin-left:10px"
          >
            <strong style="color:gray;margin-bottom:5px">IN THEATERS</strong>
            <b-link
              :class="{
                'tab-link-active': slug === 'opening_this_week',
                'tab-link': slug !== 'opening_this_week'
              }"
              @click="slug = 'opening_this_week'"
              ><strong>OPENING THIS WEEK</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'top_box_office',
                'tab-link': slug !== 'top_box_office'
              }"
              @click="slug = 'top_box_office'"
              ><strong>TOP BOX OFFICE</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'opening_soon',
                'tab-link': slug !== 'opening_soon'
              }"
              @click="slug = 'opening_soon'"
              ><strong>OPENING SOON</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'coming_soon',
                'tab-link': slug !== 'coming_soon'
              }"
              @click="slug = 'coming_soon'"
              ><strong>COMING SOON</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'weekend_earnings',
                'tab-link': slug !== 'weekend_earnings'
              }"
              @click="slug = 'weekend_earnings'"
              ><strong>WEEDKEND EARNINGS</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'certified_fresh',
                'tab-link': slug !== 'certified_fresh'
              }"
              @click="slug = 'certified_fresh'"
              ><strong>CERTIFIED FRESH MOVIES</strong></b-link
            >
          </div>
          <hr style="width: 90%;margin-left: auto;margin-right: auto;" />
          <div
            style="display:flex;flex-direction: column;text-align:left;margin-left:10px"
          >
            <strong style="color:gray;margin-bottom:5px"
              >DVD & STREAMING MOVIES</strong
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'netflix',
                'tab-link': slug !== 'netflix'
              }"
              @click="slug = 'netflix'"
              ><strong>NETFLIX</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'amazon_prime_video_us',
                'tab-link': slug !== 'amazon_prime_video_us'
              }"
              @click="slug = 'amazon_prime_video_us'"
              ><strong>AMAZON PRIME VIDEO US</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'disney',
                'tab-link': slug !== 'disney'
              }"
              @click="slug = 'disney'"
              ><strong>DISNEY+</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'hbo_max',
                'tab-link': slug !== 'hbo_max'
              }"
              @click="slug = 'hbo_max'"
              ><strong>HBO MAX</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'hbo_now',
                'tab-link': slug !== 'hbo_now'
              }"
              @click="slug = 'hbo_now'"
              ><strong>HBO NOW</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'fandango_now',
                'tab-link': slug !== 'fandango_now'
              }"
              @click="slug = 'fandango_now'"
              ><strong>FANDANGO NOW</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'vudu',
                'tab-link': slug !== 'vudu'
              }"
              @click="slug = 'vudu'"
              ><strong>VUDU</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'apple_tv_plus_us',
                'tab-link': slug !== 'apple_tv_plus_us'
              }"
              @click="slug = 'apple_tv_plus_us'"
              ><strong>APPLE TV PLUS US</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'peacock',
                'tab-link': slug !== 'peacock'
              }"
              @click="slug = 'peacock'"
              ><strong>PEACOCK</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'hulu',
                'tab-link': slug !== 'hulu'
              }"
              @click="slug = 'hulu'"
              ><strong>HULU</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'itunes',
                'tab-link': slug !== 'itunes'
              }"
              @click="slug = 'itunes'"
              ><strong>PARAMOUNT</strong></b-link
            >
            <b-link
              :class="{
                'tab-link-active': slug === 'top_streamings',
                'tab-link': slug !== 'top_streamings'
              }"
              @click="slug = 'top_streamings'"
              ><strong>TOP DVD & STREAMING </strong></b-link
            >
          </div>
          <hr style="width: 90%;margin-left: auto;margin-right: auto;" />
          <div
            style="margin-bottom: 300px;display:flex;flex-direction: column;text-align:left;margin-left:10px"
          >
            <strong style="color:gray;margin-bottom:5px">TV</strong>
            <b-link class="tab-link"><strong>NEW TV TONIGHT </strong></b-link>
            <b-link class="tab-link"
              ><strong>MOST POPULAR TV ON LC </strong></b-link
            >
            <b-link class="tab-link"
              ><strong>CERTIFIED FRESH TV</strong></b-link
            >
          </div>
          <div
            style="padding: 20px;background-color: #F3F3F3;margin: 20px;border-radius:4px"
          >
            <img
              src="https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png"
              style="width:50px; height:50px;margin-bottom:15px"
            />
            <br />
            <p style="text-align:justify">
              Movies and TV shows are Certified Fresh with a steady Lemoncater
              of 75% or higher after a set amount of reviews (80 for
              wide-release movies, 40 for limited-release movies, 20 for TV
              shows), including 5 reviews from Top Critics.
            </p>
            <b-link>What‘s the LEMONCATER?</b-link>
          </div>
        </b-col>
        <b-col cols="9" style="padding-left:10px">
          <header-bar>
            <span slot="header">ALL MOVIES</span>
          </header-bar>
          <!-- Filters -->
          <div
            style="border: 1px solid gray;border-radius: 4px;padding:10px;width:100%;display:flex;flex-wrap:wrap;align-items: center;"
          >
            <!-- Left -->
            <div style="float:left;">
              <!-- Search -->
              <b-input-group style="width:95%">
                <b-form-input
                  v-model="filter"
                  type="search"
                  placeholder="Type to Search"
                ></b-form-input>

                <b-button :disabled="!filter" @click="filter = ''"
                  >Clear</b-button
                >
              </b-input-group>
            </div>
            <!-- Filter Score -->
            <div
              @click="show.range = !show.range"
              style="float:left;color:gray;border: 1px solid #CED4DA;padding:4px;border-radius: 4px;cursor:pointer"
            >
              <img :src="valueIcon[0]" style="width:20px; height:20px" />
              <span>{{ value[0] }}%</span>
              <span> - </span>
              <img :src="valueIcon[1]" style="width:20px; height:20px" />
              <span>{{ value[1] }}% <v-icon>mdi-menu-down</v-icon></span>
            </div>
            <!-- Filter Genres -->
            <div
              @click="show.genre = !show.genre"
              style="margin-left:10px;float:left;color:gray;border: 1px solid #CED4DA;padding:4px;border-radius: 4px;cursor:pointer"
            >
              <span
                >Genres:
                <span style="color:black"
                  ><strong>{{
                    selected.length ? selected.length : "ALL"
                  }}</strong></span
                >
                <v-icon>mdi-menu-down</v-icon></span
              >
            </div>
            <!-- Options -->
            <div
              v-if="show.range"
              style="padding: 5px; border-radius: 4px; border: 1px solid gray; position: absolute; top: 151px; right: 404px; background-color: white;z-index:999"
            >
              <strong>LEMONCATER</strong>
              <div class="app-content">
                <vue-range-slider
                  style="width:200px"
                  v-model="value"
                  :min="min"
                  :max="max"
                  :enable-cross="enableCross"
                  :tooltip="false"
                ></vue-range-slider>
              </div>
              <v-checkbox
                v-model="showFreshOnly"
                color="success"
                value="success"
                hide-details
              >
                <template v-slot:label>
                  <img
                    src="https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png"
                    style="width:20px;height:20px;"
                  /><span>Certified Fresh Only</span>
                </template>
              </v-checkbox>
            </div>
            <div
              v-if="show.genre"
              style="padding: 10px; border-radius: 4px; border: 1px solid gray; position: absolute; top: 151px; right: 171px; background-color: white;z-index:999"
            >
              <div v-for="item in genres" :key="item">
                <v-checkbox
                  v-model="selected"
                  color="success"
                  :value="item"
                  :label="item"
                  hide-details
                >
                </v-checkbox>
              </div>
            </div>
            <!-- Right -->
            <div
              @click="show.date = !show.date"
              style="float:right;margin-left:auto;color:gray;border: 1px solid #CED4DA;padding:4px;border-radius: 4px;cursor:pointer;width:193px"
            >
              <span
                >Sort by: <strong>{{ sort }}</strong>
                <v-icon>mdi-menu-down</v-icon></span
              >
            </div>
            <div
              v-if="show.date"
              style="border-radius: 4px; border: 1px solid gray; position: absolute; top: 151px; right: 10px; background-color: white; width: 193px;z-index:999"
            >
              <div @click="sort = 'Release Date'" class="sort-button">
                Release Date
              </div>
              <div @click="sort = 'Lemoncater'" class="sort-button">
                Lemoncater
              </div>
            </div>
          </div>
          <!-- View Mode -->
          <div style="display:flex;align-items: center;padding:10px;width:100%">
            <span
              >View mode: <strong>{{ viewMode.toUpperCase() }}</strong></span
            >
            <v-btn-toggle
              elevation="0"
              style="float:right;margin-left:auto;margin-"
            >
              <v-btn
                color="success"
                style="color:white"
                @click="viewMode = 'Grid'"
              >
                <v-icon>mdi-view-grid</v-icon>
              </v-btn>

              <v-btn
                color="success"
                style="color:white"
                @click="viewMode = 'Detail'"
              >
                <v-icon>mdi-view-list</v-icon>
              </v-btn>
            </v-btn-toggle>
          </div>
          <hr style="width: 95%;margin-left: auto;margin-right: auto;" />

          <!-- CONTENT BODY -->
          <!-- Grid View -->
          <div>
            <loading v-if="isLoading"> </loading>
            <div v-else>
              <div
                v-if="viewMode === 'Grid' && flims && flims.length"
                style="display:flex;padding:10px;flex-wrap: wrap;justify-content: space-between;margin-bottom:15px"
              >
                <grid-card
                  v-for="item of flims"
                  :key="item.slug"
                  :slug="item.slug"
                  :src="item.info.poster"
                  :name="item.info.name"
                  :score="
                    parseInt(item.data.rottenTomatoes.tomatometerScore) || -1
                  "
                  :releaseDate="item.createdAt"
                  style="margin-bottom:15px"
                ></grid-card>
              </div>
              <!-- List View -->
              <div
                v-if="viewMode === 'Detail' && flims && flims.length"
                style="display:flex;padding:10px;flex-wrap: wrap;justify-content: space-between;margin-bottom:15px"
              >
                <list-card
                  v-for="item of flims"
                  :key="item.slug"
                  :slug="item.slug"
                  :src="item.info.poster"
                  :name="item.info.name"
                  :score="
                    parseInt(item.data.rottenTomatoes.tomatometerScore) || -1
                  "
                  :releaseDate="item.createdAt"
                  :rating="item.info.rating"
                  :runtime="item.info.runtime"
                  :summary="item.info.summary || ''"
                  style="margin-bottom:15px"
                ></list-card>
              </div>
            </div>
          </div>

          <b-pagination
            v-model="currentPage"
            align="center"
            :total-rows="rows"
            :per-page="perPage"
            first-number
            last-number
          ></b-pagination>
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
import getFlimsByParams from "@/apollo/queries/getFlimsByParams.gql";
import "vue-range-component/dist/vue-range-slider.css";
import VueRangeSlider from "vue-range-component";
import Navbar from "@/components/Navbar";
import PageFooter from "@/components/Footer";
import HeaderBar from "@/components/Movie/HeaderBar";
import NewsCard from "@/components/NewsCard";
import GridCard from "@/components/Movies/GridCard";
import ListCard from "@/components/Movies/ListCard";
import Loading from "@/components/Loading";

export default {
  name: "Home",
  components: {
    Navbar,
    PageFooter,
    HeaderBar,
    NewsCard,
    VueRangeSlider,
    GridCard,
    ListCard,
    Loading
  },
  data() {
    return {
      isLoading: false,
      show: {
        range: false,
        genre: false,
        date: false
      },
      slug: "",
      currentPage: 1,
      rows: 0,
      perPage: 20,
      viewMode: "Detail",
      showFreshOnly: false,
      sort: "Release Date",
      selected: [],
      genres: [
        "Sci-fi",
        "Mystery & Thriller",
        "Comedy",
        "Drama",
        "Horror",
        "Adventure",
        "Fantasy",
        "Action",
        "Documentary",
        "Kids & Family",
        "Biography",
        "Animation",
        "Crime",
        "War",
        "Romance",
        "Western",
        "Music",
        "Anime",
        "Unknown",
        "Musical",
        "History",
        "Sports & fitness",
        "Other",
        "Stand-up"
      ],
      status: false,
      value: [1, 99],
      filter: ""
    };
  },
  computed: {
    valueIcon() {
      const results = [];
      if (this.value[0] >= 80)
        results.push(
          "https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png"
        );
      else if (this.value[0] >= 60 && this.value[0] < 80)
        results.push(
          "https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png"
        );
      else
        results.push(
          "https://live.staticflickr.com/65535/51278099823_29be28c9b3_o.png"
        );

      if (this.value[1] >= 80)
        results.push(
          "https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png"
        );
      else if (this.value[1] >= 60 && this.value[1] < 80)
        results.push(
          "https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png"
        );
      else
        results.push(
          "https://live.staticflickr.com/65535/51278099823_29be28c9b3_o.png"
        );
      return results;
    }
  },
  created() {
    this.min = 1;
    this.max = 99;
    this.enableCross = false;
    this.tooltipMerge = false;
    this.slug = this.$route.params.slug;
    switch (this.slug) {
      case "opening_this_week":
        document.title = "LIST OPENING THIS WEEK - LEMONCAT";
        break;
      case "top_box_office":
        document.title = "LIST TOP BOX OFFICE - LEMONCAT";
        break;
      case "opening_soon":
        document.title = "LIST OPENING SOON - LEMONCAT";
        break;
      case "coming_soon":
        document.title = "LIST COMING SOON - LEMONCAT";
        break;
      case "weekend_earnings":
        document.title = "LIST WEEDKEND EARNINGS - LEMONCAT";
        break;
      case "certified_fresh":
        document.title = "LIST CERTIFIED FRESH MOVIES - LEMONCAT";
        break;
      case "netflix":
        document.title = "LIST NETFLIX - LEMONCAT";
        break;
      case "amazon_prime_video_us":
        document.title = "LIST AMAZON PRIME VIDEO US - LEMONCAT";
        break;
      case "disney":
        document.title = "LIST DISNEY PLUS - LEMONCAT";
        break;
      case "hbo_max":
        document.title = "LIST HBO MAX - LEMONCAT";
        break;
      case "hbo_now":
        document.title = "LIST HBO NOW - LEMONCAT";
        break;
      case "fandango_now":
        document.title = "LIST FANDANGO NOW - LEMONCAT";
        break;
      case "vudu":
        document.title = "LIST VUDU - LEMONCAT";
        break;
      case "apple_tv_plus_us":
        document.title = "LIST APPLE TV PLUS US - LEMONCAT";
        break;
      case "peacock":
        document.title = "LIST PEACOCK - LEMONCAT";
        break;
      case "hulu":
        document.title = "LIST HULU - LEMONCAT";
        break;
      case "itunes":
        document.title = "LIST PARAMOUNT - LEMONCAT";
        break;
      default:
        document.title = "LIST - LEMONCAT";
        break;
    }
  },
  watch: {
    currentPage(val, old) {
      this.isLoading = true;
      if (JSON.stringify(val) !== JSON.stringify(old))
        this.$apollo
          .query({
            query: getFlimsByParams,
            variables: {
              page: this.currentPage || 1,
              size: this.perPage || 20,
              type: "movie",
              sortKey: this.sort || "Release Date",
              params: {
                range: this.value || [1, 99],
                genres: this.selected.map(item => item.toLowerCase()) || [],
                searchKey: this.filter || "",
                condition: this.slug
              }
            }
          })
          .then(result => {
            this.flims = result.data.flimsByParams.results || [];
            this.rows = result.data.flimsByParams.count || 0;
          })
          .catch(() => {})
          .finally(() => {
            this.isLoading = false;
          });
      this.isLoading = false;
    },
    sort(val, old) {
      this.isLoading = true;
      if (JSON.stringify(val) !== JSON.stringify(old))
        this.$apollo
          .query({
            query: getFlimsByParams,
            variables: {
              page: this.currentPage || 1,
              size: this.perPage || 20,
              type: "movie",
              sortKey: this.sort || "Release Date",
              params: {
                range: this.value || [1, 99],
                genres: this.selected.map(item => item.toLowerCase()) || [],
                searchKey: this.filter || "",
                condition: this.slug
              }
            }
          })
          .then(result => {
            this.flims = result.data.flimsByParams.results || [];
            this.rows = result.data.flimsByParams.count || 0;
          })
          .catch(() => {})
          .finally(() => {
            this.isLoading = false;
          });
      this.isLoading = false;
      this.currentPage = 1;
    },
    selected: {
      handler(val, old) {
        this.isLoading = true;
        if (JSON.stringify(val) !== JSON.stringify(old))
          this.$apollo
            .query({
              query: getFlimsByParams,
              variables: {
                page: this.currentPage || 1,
                size: this.perPage || 20,
                type: "movie",
                sortKey: this.sort || "Release Date",
                params: {
                  range: this.value || [1, 99],
                  genres: this.selected.map(item => item.toLowerCase()) || [],
                  searchKey: this.filter || "",
                  condition: this.slug
                }
              }
            })
            .then(result => {
              this.flims = result.data.flimsByParams.results || [];
              this.rows = result.data.flimsByParams.count || 0;
            })
            .catch(() => {})
            .finally(() => {
              this.isLoading = false;
            });
        this.isLoading = false;
        this.currentPage = 1;
      },
      deep: true
    },
    value(val, old) {
      this.isLoading = true;
      if (JSON.stringify(val) !== JSON.stringify([80, 99]))
        this.showFreshOnly = false;
      if (JSON.stringify(val) !== JSON.stringify(old))
        this.$apollo
          .query({
            query: getFlimsByParams,
            variables: {
              page: this.currentPage || 1,
              size: this.perPage || 20,
              type: "movie",
              sortKey: this.sort || "Release Date",
              params: {
                range: this.value || [1, 99],
                genres: this.selected.map(item => item.toLowerCase()) || [],
                searchKey: this.filter || "",
                condition: this.slug
              }
            }
          })
          .then(result => {
            this.flims = result.data.flimsByParams.results || [];
            this.rows = result.data.flimsByParams.count || 0;
          })
          .catch(() => {})
          .finally(() => {
            this.isLoading = false;
          });
      this.isLoading = false;
      this.currentPage = 1;
    },
    showFreshOnly(val) {
      this.isLoading = true;
      if (val) this.value = [80, 99];
      if (JSON.stringify(val) !== JSON.stringify(old))
        this.$apollo
          .query({
            query: getFlimsByParams,
            variables: {
              page: this.currentPage || 1,
              size: this.perPage || 20,
              type: "movie",
              sortKey: this.sort || "Release Date",
              params: {
                range: this.value || [1, 99],
                genres: this.selected.map(item => item.toLowerCase()) || [],
                searchKey: this.filter || "",
                condition: this.slug
              }
            }
          })
          .then(result => {
            this.flims = result.data.flimsByParams.results || [];
            this.rows = result.data.flimsByParams.count || 0;
          })
          .catch(() => {})
          .finally(() => {
            this.isLoading = false;
          });
      this.isLoading = false;
      this.currentPage = 1;
    },
    slug(val) {
      switch (val) {
        case "opening_this_week":
          document.title = "LIST OPENING THIS WEEK - LEMONCAT";
          break;
        case "top_box_office":
          document.title = "LIST TOP BOX OFFICE - LEMONCAT";
          break;
        case "opening_soon":
          document.title = "LIST OPENING SOON - LEMONCAT";
          break;
        case "coming_soon":
          document.title = "LIST COMING SOON - LEMONCAT";
          break;
        case "weekend_earnings":
          document.title = "LIST WEEDKEND EARNINGS - LEMONCAT";
          break;
        case "certified_fresh":
          document.title = "LIST CERTIFIED FRESH MOVIES - LEMONCAT";
          break;
        case "netflix":
          document.title = "LIST NETFLIX - LEMONCAT";
          break;
        case "amazon_prime_video_us":
          document.title = "LIST AMAZON PRIME VIDEO US - LEMONCAT";
          break;
        case "disney":
          document.title = "LIST DISNEY PLUS - LEMONCAT";
          break;
        case "hbo_max":
          document.title = "LIST HBO MAX - LEMONCAT";
          break;
        case "hbo_now":
          document.title = "LIST HBO NOW - LEMONCAT";
          break;
        case "fandango_now":
          document.title = "LIST FANDANGO NOW - LEMONCAT";
          break;
        case "vudu":
          document.title = "LIST VUDU - LEMONCAT";
          break;
        case "apple_tv_plus_us":
          document.title = "LIST APPLE TV PLUS US - LEMONCAT";
          break;
        case "peacock":
          document.title = "LIST PEACOCK - LEMONCAT";
          break;
        case "hulu":
          document.title = "LIST HULU - LEMONCAT";
          break;
        case "itunes":
          document.title = "LIST PARAMOUNT - LEMONCAT";
          break;
        default:
          document.title = "LIST - LEMONCAT";
          break;
      }
    }
  },
  apollo: {
    flimBySlug: {
      query: getFlimsByParams,
      variables() {
        return {
          page: this.currentPage || 1,
          size: this.perPage || 20,
          type: "movie",
          sortKey: this.sort || "Release Date",
          params: {
            range: this.value || [1, 99],
            genres: this.selected.map(item => item.toLowerCase()) || [],
            searchKey: this.filter || "",
            condition: this.slug
          }
        };
      },
      result(result) {
        this.isLoading = true;
        this.flims = result.data.flimsByParams.results || [];
        this.rows = result.data.flimsByParams.count || 0;
        this.isLoading = false;
      }
    }
  }
};
</script>
<style scoped>
.sort-button {
  cursor: pointer;
  padding: 5px;
  width: 100%;
}
.sort-button:hover {
  padding: 5px;
  cursor: pointer;
  width: 100%;
  background-color: #3976dc;
  color: white;
}
.tab-link-active {
  text-decoration: none;
  padding: 10px 20px;
  color: white;
  background-color: #3976dc;
  border-radius: 4px;
  width: 95%;
}
.tab-link {
  text-decoration: none;
  padding: 10px 20px;
  color: #2a2c32;
}
.tab-link:hover {
  text-decoration: none;
  color: #3976dc;
  padding: 10px 20px;
}
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
.app-content {
  padding: 10px 10px;
}
</style>

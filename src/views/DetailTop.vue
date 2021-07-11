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
        <b-row style="padding-top:20px">
          <b-col cols="8" style="padding:20px">
            <header-bar>
              <span slot="header"
                >TOP 100 FLIMS OF {{ yearSelect }} -
                {{ genreSelect.toUpperCase() }}</span
              >
            </header-bar>

            <div
              style="display:flex;align-items: center;margin-bottom: 20px;margin-top:20px"
            >
              <img
                src="../assets/img/oscal-chibi.jpg"
                style="width:115px;height:115px;margin-right:10px"
              />
              <div>
                <p style="color:gray;text-align:left">
                  <strong>BEST OF LEMONCAT</strong>
                </p>
                <p style="text-align: left;">
                  Movies with 40 or more critic reviews vie for their place in
                  history at Lemoncat. Eligible movies are ranked based on their
                  Adjusted Scores.
                </p>
              </div>
            </div>

            <div style="display: flex;align-items: center;width:100%">
              <!-- <v-select
              :items="['Movies', 'TVs']"
              label="Flim Type"
              style="max-width:20%;margin-right:30px"
            ></v-select> -->

              <v-select
                v-model="genreSelect"
                :items="genres"
                label="Genres"
                style="max-width:20%;margin-right:30px"
              ></v-select>

              <v-select
                v-model="yearSelect"
                :items="years"
                label="Year"
                style="max-width:10%;margin-right:30px"
              ></v-select>

              <span style="color:gray;float:right;margin-left:auto">
                Sorted by Adjusted Score
                <v-icon style="cursor: pointer" id="target-help" small
                  >mdi-help-circle</v-icon
                >
              </span>

              <b-popover
                target="target-help"
                triggers="hover"
                placement="topright"
              >
                Each critic from our discrete list gets one vote, weighted
                equally. A movie must have 40 or more rated reviews to be
                considered. The 'Adjusted Score' comes from a weighted formula
                (Bayesian) that we use that accounts for variation in the number
                of reviews per movie.
              </b-popover>
            </div>
            <div style="margin-bottom:50px">
              <b-table hover :items="items">
                <template #cell(rating)="item">
                  <span style="color:black"
                    ><img
                      :src="item.value.icon"
                      style="height:20px;width:20px"
                    />
                    <strong>{{ item.value.value }}</strong></span
                  ></template
                >
                <template #cell(title)="item" style="display:flex;width:100%">
                  <b-link
                    :href="'/m/' + item.value.slug"
                    style="text-decoration:none;color:black;text-align:left"
                    >{{ item.value.name }}</b-link
                  >
                </template>
              </b-table>
            </div>
          </b-col>
          <b-col cols="4" style="padding:20px">
            <div>
              <header-bar>
                <span slot="header">TODAY'S TOP RATED MOVIES</span>
              </header-bar>
              <span style="color: gray">CERTIFIED FRESH IN THEATERS</span>
              <row
                v-for="item of topToday"
                :key="item.slug"
                :slug="item.slug"
                :name="item.info.name"
                :score="item.lemonScore"
              ></row>

              <b-link
                style="text-decoration: none; float: left; margin-top: 5px"
              >
                View All
              </b-link>
              <br />
              <br />
              <span style="color: gray">TOP 10 DVD RELEASES</span>
              <row
                v-for="item of topStreaming"
                :key="item.slug"
                :slug="item.slug"
                :name="item.info.name"
                :score="item.lemonScore"
              ></row>

              <b-link
                style="text-decoration: none; float: left; margin-top: 5px"
              >
                View All
              </b-link>
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
  </div>
</template>

<script>
import getFlimsTopDetail from "@/apollo/queries/getFlimsTopDetail.gql";
import Navbar from "@/components/Navbar";
import PageFooter from "@/components/Footer";
import HeaderBar from "@/components/Movie/HeaderBar";
import NewsCard from "@/components/NewsCard";
import Row from "@/components/Top/Row";
import Loading from "@/components/Loading";
export default {
  components: {
    Navbar,
    PageFooter,
    HeaderBar,
    NewsCard,
    Row,
    Loading
  },
  data() {
    return {
      genreSelect: "All",
      yearSelect: "All",
      genres: [
        "All",
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
        "Stand-up",
        "Other"
      ],
      items: [],
      topToday: [],
      topStreaming: [],
      isLoading: true,
      years: (() => {
        const results = [];
        for (let i = 1950; i <= 2021; i++) {
          results.push("" + i);
        }
        results.push("All");
        return results.reverse();
      })()
    };
  },
  created() {
    const genre = this.$route.params.genre;
    this.genreSelect = (genre.charAt(0).toUpperCase() + genre.slice(1)).replace(
      "&",
      " & "
    );
    this.yearSelect = this.$route.params.year.toString();

    document.title = `TOP 100 MOVIES - ${this.yearSelect ||
      "ALL"} - ${this.genreSelect.toUpperCase() || "ALL"} - LEMONCAT`;
  },
  watch: {
    genreSelect(val) {
      this.isLoading = true;
      this.$apollo
        .query({
          query: getFlimsTopDetail,
          variables: {
            year: this.yearSelect.toLowerCase() || "all",
            genre: val.toLowerCase() || "all"
          }
        })
        .then(result => {
          let rank = 1;
          this.items = result.data.flimByTop.flims.map(item => {
            return {
              rank: rank++,
              rating: {
                value: `${item.lemonScore}%`,
                icon: (() => {
                  if (item.lemonScore >= 80)
                    return "https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png";
                  else if (item.lemonScore >= 60 && item.lemonScore < 80)
                    return "https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png";
                  else if (item.lemonScore < 60 && item.lemonScore >= 0)
                    return "https://live.staticflickr.com/65535/51278099823_29be28c9b3_o.png";
                  else
                    return "https://live.staticflickr.com/65535/51278655199_d54f32f82e_o.png";
                })()
              },
              title: {
                name: item.info.name,
                slug: item.slug
              },
              "no. of reviews":
                item.lemonReviewCount > 0 ? item.lemonReviewCount : 1
            };
          });
        })
        .catch(() => {})
        .finally(() => {
          this.isLoading = false;
        });
      this.isLoading = false;
    },
    yearSelect(val) {
      this.isLoading = true;
      this.$apollo
        .query({
          query: getFlimsTopDetail,
          variables: {
            year: val || "all",
            genre: this.genreSelect.toLowerCase() || "all"
          }
        })
        .then(result => {
          let rank = 1;
          this.items = result.data.flimByTop.flims.map(item => {
            return {
              rank: rank++,
              rating: {
                value: `${item.lemonScore}%`,
                icon: (() => {
                  if (item.lemonScore >= 80)
                    return "https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png";
                  else if (item.lemonScore >= 60 && item.lemonScore < 80)
                    return "https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png";
                  else if (item.lemonScore < 60 && item.lemonScore >= 0)
                    return "https://live.staticflickr.com/65535/51278099823_29be28c9b3_o.png";
                  else
                    return "https://live.staticflickr.com/65535/51278655199_d54f32f82e_o.png";
                })()
              },
              title: {
                name: item.info.name,
                slug: item.slug
              },
              "no. of reviews":
                item.lemonReviewCount > 0 ? item.lemonReviewCount : 1
            };
          });
        })
        .catch(() => {})
        .finally(() => {
          this.isLoading = false;
        });
      this.isLoading = false;
    }
  },
  apollo: {
    flimByTop: {
      query: getFlimsTopDetail,
      variables() {
        return {
          year: this.yearSelect.toLowerCase() || "all",
          genre: this.genreSelect.toLowerCase() || "all"
        };
      },
      result(result) {
        this.isLoading = true;
        let rank = 1;
        this.items = result.data.flimByTop.flims.map(item => {
          return {
            rank: rank++,
            rating: {
              value: `${item.lemonScore}%`,
              icon: (() => {
                if (item.lemonScore >= 80)
                  return "https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png";
                else if (item.lemonScore >= 60 && item.lemonScore < 80)
                  return "https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png";
                else if (item.lemonScore < 60 && item.lemonScore >= 0)
                  return "https://live.staticflickr.com/65535/51278099823_29be28c9b3_o.png";
                else
                  return "https://live.staticflickr.com/65535/51278655199_d54f32f82e_o.png";
              })()
            },
            title: {
              name: item.info.name,
              slug: item.slug
            },
            "no. of reviews":
              item.lemonReviewCount > 0 ? item.lemonReviewCount : 1
          };
        });
        this.topToday = result.data.flimByTop.topToday;
        this.topStreaming = result.data.flimByTop.topStreaming;
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

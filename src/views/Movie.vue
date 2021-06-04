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
    </v-card>
    <v-card
      tile
      outlined
      elevation="0"
      class="container body-container row-style"
    >
      <b-row style="padding-top:30px">
        <b-col cols="4"
          ><left-tab-bar
            style="margin-left:10px;margin-right:10px"
          ></left-tab-bar
        ></b-col>
        <b-col cols="8">
          <b-row style="padding-top: 20px;padding-bottom:10px;cursor:pointer">
            <div
              style="padding-left:10px;padding-right:10px;"
              v-b-modal.modal-trailer
            >
              <v-parallax
                style="border-radius:4px"
                class="shadow-box"
                height="300"
                :src="require('../assets/img/horizontal-poster.jpg')"
              ></v-parallax>
              <b-modal
                size="xl"
                hide-footer
                hide-header
                id="modal-trailer"
                centered
              >
                <b-embed
                  style="width:100%;height:500px;"
                  type="iframe"
                  aspect="16by9"
                  src="https://www.youtube-nocookie.com/embed/ju3dY0V6Wb0"
                  allowfullscreen
                ></b-embed>
              </b-modal>
              <v-icon
                color="white"
                style="top: 145px;font-size: 100px;position: absolute;left: 749px;"
                x-large
                >mdi-play-circle-outline</v-icon
              >
            </div></b-row
          >
          <b-row>
            <div
              style="height:210px;background-color:white;padding:10px;display:flex;margin-bottom:40px;"
            >
              <div>
                <img
                  style="width: 145px;height:210px;border-radius:4px"
                  src="../assets/img/sample-poster.png"
                />
              </div>
              <div
                style="margin-left:10px;width:100%;height: 210px;background-color:#F3F3F3;border-radius:4px"
              >
                <h4 style="margin-top:30px">
                  <strong>THE CONJURING</strong>
                </h4>
                <h6>
                  <span
                    style="border: 1px solid #CCCFD1;border-radius:3px;padding-top:2px;padding-left:2px;padding-right:2px;"
                    >R+</span
                  >
                  2013, Horror/Mystery & thriller, 1h 51m
                </h6>
                <div
                  style="display:flex;justify-content:center;margin-top:20px;height:100%"
                >
                  <div style="margin-right:40px">
                    <b-link
                      v-b-modal.modal-1
                      style="margin-bottom:12px;text-decoration: none;display:flex;align-items: center;color:#2A2C32"
                    >
                      <img
                        style="width:45px;height:45px"
                        src="../icons/certified_fresh_lc.svg"
                      />
                      <span
                        class="rating"
                        style="font-size:30px;margin-left:5px"
                      >
                        <strong>86%</strong>
                      </span>
                    </b-link>
                    <span><strong>LEMONCATER</strong></span
                    ><br />
                    <span style="color:#4f86d9;font-size:12px;align-self:right"
                      >223 Reviews</span
                    >
                  </div>
                  <div>
                    <b-link
                      v-b-modal.modal-1
                      style="margin-bottom:12px;margin-left:20px;text-decoration: none;display:flex;align-items: center;color:#2A2C32"
                    >
                      <img
                        style="width:45px;height:45px"
                        src="../icons/fresh-score-user.svg"
                      />
                      <span
                        class="rating"
                        style="font-size:30px;margin-left:5px"
                      >
                        <strong>35%</strong>
                      </span>
                    </b-link>
                    <span><strong>AUDIENCE SCORE</strong></span
                    ><br />
                    <span style="color:#4f86d9;font-size:12px;align-self:right"
                      >100,000+ Ratings</span
                    >
                  </div>
                  <b-modal
                    size="lg"
                    hide-footer
                    hide-header
                    id="modal-1"
                    centered
                  >
                    <b-row>
                      <b-col
                        style="margin-left:20px;margin-top:20px;border-right:1px solid #E9E9EA"
                      >
                        <h4>
                          <strong>LEMONCATER</strong>
                          <v-icon id="popover-target-1"
                            >mdi-help-circle-outline</v-icon
                          >
                        </h4>
                        <b-popover
                          target="popover-target-1"
                          triggers="hover"
                          placement="topleft"
                        >
                          The percentage of Approved Lemoncater Critics who have
                          given this movie a positive review.
                        </b-popover>
                        <b-form-group>
                          <b-form-radio-group
                            id="btn-radios-1"
                            v-model="popoverCriticSelected"
                            :options="[
                              { text: 'ALL CRITICS', value: 'all' },
                              { text: 'TOP CRITICS', value: 'top' }
                            ]"
                            button-variant="outline-secondary"
                            size="md"
                            name="radios-btn-default"
                            buttons
                          ></b-form-radio-group
                          ><br />
                          <div style="display: flex;align-items: center;">
                            <img
                              style="margin-top:20px;width:45px;height:45px"
                              src="../icons/certified_fresh_lc.svg"
                            />
                            <h1 style="margin-top:20px;margin-right:30px">
                              86%
                            </h1>
                          </div>
                          <span style="color:#707176">223 Reviews</span
                          ><br /><br />
                          <span style="color: #707176"
                            ><strong style="color: #707176"
                              >7.20 out of 10</strong
                            >
                            average rating</span
                          >
                          <div class="row mb-1">
                            <div style="color:#707176" class="col-sm-2">
                              Fresh:
                            </div>
                            <div class="col-sm-8 pt-1 w-50">
                              <b-progress
                                :value="75"
                                :variant="'secondary'"
                              ></b-progress>
                            </div>
                            <div
                              style="color:#707176;padding-left:20px"
                              class="col-sm-2"
                            >
                              191
                            </div>
                          </div>
                          <div class="row mb-1">
                            <div style="color:#707176" class="col-sm-2">
                              Rotten:
                            </div>
                            <div class="col-sm-8 pt-1 w-50">
                              <b-progress
                                height="15px"
                                :value="35"
                                :variant="'secondary'"
                              ></b-progress>
                            </div>
                            <div
                              style="color:#707176;padding-left:20px"
                              class="col-sm-2"
                            >
                              32
                            </div>
                          </div>
                        </b-form-group>
                      </b-col>
                      <b-col style="margin-left:20px;margin-top:20px"
                        ><h4>
                          <strong>AUDIENCE </strong
                          ><v-icon id="popover-target-2"
                            >mdi-help-circle-outline</v-icon
                          >
                        </h4>
                        <b-popover
                          target="popover-target-2"
                          triggers="hover"
                          placement="topleft"
                        >
                          The percentage of users who rated this 3.5 stars or
                          higher.
                        </b-popover>
                        <div style="display: flex;align-items: center;">
                          <img
                            style="margin-top:20px;width:45px;height:45px"
                            src="../icons/fresh-score-user.svg"
                          />
                          <h1 style="margin-top:20px;margin-right:30px">
                            86%
                          </h1>
                        </div>
                        <span style="color:#707176">100,000+ Ratings</span
                        ><br /><br />
                        <div style="dislay:flex;align-items: center;">
                          <b-form-rating
                            v-model="audienceRating"
                            readonly
                            inline
                            no-border
                            precision="2"
                            color="#ff8800"
                          ></b-form-rating>
                          <span style="color: #707176"
                            ><strong style="color: #707176"
                              >3.55 out of 5</strong
                            >
                            average rating</span
                          >
                        </div>
                      </b-col>
                    </b-row>
                  </b-modal>
                </div>
              </div>
            </div>
          </b-row>
          <b-row>
            <div style="padding-left:10px;padding-right:10px;width:100%">
              <header-bar>
                <span slot="header">WHAT TO KNOW</span>
              </header-bar>
            </div></b-row
          >
          <b-row style="padding-top: 20px;padding-bottom:10px">
            <div style="padding-left:10px;padding-right:10px">
              <div
                style="padding-left:5px;padding-right:5px;display:flex;flex-direction: column;text-align: left;"
              >
                <h5><strong>CRITICS CONSENSUS</strong></h5>
                <p>
                  Well-crafted and gleefully creepy, The Conjuring ratchets up
                  dread through a series of effective old-school scares. Read
                  critic reviews
                </p>
                <h5><strong>AUDIENCE SAYS</strong></h5>
                <p>
                  Almost as scary and intense as the original, A Quiet Place
                  Part II will leave audiences on the edge of their seats -- and
                  waiting for Part III. Read audience reviews
                </p>
              </div>
            </div></b-row
          >
          <b-row>
            <div style="padding-left:10px;padding-right:10px;width:100%">
              <header-bar>
                <span slot="header">YOU MIGHT ALSO LIKE</span>
              </header-bar>
            </div></b-row
          >
          <b-row>
            <div
              style="padding-top:20px;padding-bottom:20px;padding-left:10px;padding-right:10px;width:100%;display:flex;justify-content:space-between"
            >
              <movie-card></movie-card>
              <movie-card></movie-card>
              <movie-card></movie-card>
              <movie-card></movie-card>
              <movie-card></movie-card>
            </div>
          </b-row>
          <b-row>
            <div style="padding-left:10px;padding-right:10px;width:100%">
              <header-bar>
                <span slot="header">WHERE TO WATCH</span>
              </header-bar>
            </div></b-row
          >
          <b-row
            style="padding-top:20px;padding-bottom:20px;padding-left:10px;padding-right:10px;width:100%;"
          >
            <div
              style="display:flex;justify-content:space-between;margin-bottom:15px"
            >
              <streaming-card></streaming-card>
              <streaming-card></streaming-card>
              <streaming-card></streaming-card>
            </div>
            <div style="display:flex;justify-content:space-between">
              <streaming-card></streaming-card>
              <streaming-card></streaming-card>
              <streaming-card></streaming-card>
            </div>
          </b-row>
          <b-row>
            <div style="padding-left:10px;padding-right:10px;width:100%">
              <header-bar>
                <span slot="header">THE CONJURING PHOTOS</span>
              </header-bar>
            </div></b-row
          >
          <b-row
            style="padding-top:20px;padding-left:10px;padding-right:10px;width:100%;"
          >
            <slider-image></slider-image>
          </b-row>
          <b-row>
            <div style="padding-left:10px;padding-right:10px;width:100%">
              <header-bar>
                <span slot="header">MOVIE INFO</span>
              </header-bar>
            </div></b-row
          >
          <b-row style="padding-top: 20px;padding-bottom:20px">
            <div style="padding-left:10px;padding-right:10px">
              <div
                style="padding-left:5px;padding-right:5px;display:flex;flex-direction: column;text-align: left;"
              >
                <p style="text-align: justify">
                  In 1970, paranormal investigators and demonologists Lorraine
                  (Vera Farmiga) and Ed (Patrick Wilson) Warren are summoned to
                  the home of Carolyn (Lili Taylor) and Roger (Ron Livingston)
                  Perron. The Perrons and their five daughters have recently
                  moved into a secluded farmhouse, where a supernatural presence
                  has made itself known. Though the manifestations are
                  relatively benign at first, events soon escalate in horrifying
                  fashion, especially after the Warrens discover the house's
                  macabre history.
                </p>
                <div style="font-size:15px">
                  <b-row>
                    <b-col
                      cols="4"
                      style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                    >
                      Rating:
                    </b-col>
                    <b-col cols="8"> R (Disturbing Violence and Terror) </b-col>
                  </b-row>
                  <b-row>
                    <b-col
                      cols="4"
                      style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                    >
                      Genre:
                    </b-col>
                    <b-col cols="8"> Horror, Mystery & Thriller </b-col>
                  </b-row>
                  <b-row>
                    <b-col
                      cols="4"
                      style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                    >
                      Original Language:
                    </b-col>
                    <b-col cols="8"> English </b-col>
                  </b-row>
                  <b-row>
                    <b-col
                      cols="4"
                      style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                    >
                      Director:
                    </b-col>
                    <b-col cols="8">
                      <b-link style="text-decoration:none;">James Wan</b-link>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col
                      cols="4"
                      style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                    >
                      Producer:
                    </b-col>
                    <b-col cols="8">
                      <b-link style="text-decoration:none;">
                        Tony DeRosa-Grund</b-link
                      >,
                      <b-link style="text-decoration:none;">Peter Safran</b-link
                      >,
                      <b-link style="text-decoration:none;">Rob Cowan</b-link>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col
                      cols="4"
                      style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                    >
                      Writer:
                    </b-col>
                    <b-col cols="8">
                      <b-link style="text-decoration:none;">Chad Hayes</b-link>,
                      <b-link style="text-decoration:none;"
                        >Carey W. Hayes</b-link
                      >
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col
                      cols="4"
                      style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                    >
                      Release Date (Theaters):
                    </b-col>
                    <b-col cols="8"> Jul 19, 2013 </b-col>
                  </b-row>
                  <b-row>
                    <b-col
                      cols="4"
                      style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                    >
                      Release Date (Streaming):
                    </b-col>
                    <b-col cols="8"> Jul 9, 2015 </b-col>
                  </b-row>
                  <b-row>
                    <b-col
                      cols="4"
                      style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                    >
                      Box Office (Gross USA):
                    </b-col>
                    <b-col cols="8"> $137.4M </b-col>
                  </b-row>
                  <b-row>
                    <b-col
                      cols="4"
                      style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                    >
                      Runtime:
                    </b-col>
                    <b-col cols="8"> 1h 51m </b-col>
                  </b-row>
                  <b-row>
                    <b-col
                      cols="4"
                      style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                    >
                      Production Co:
                    </b-col>
                    <b-col cols="8">
                      Safran Company, Evergreen Media Group
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col
                      cols="4"
                      style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                    >
                      Sound Mix:
                    </b-col>
                    <b-col cols="8"> SDDS, Dolby Digital, Datasat </b-col>
                  </b-row>
                  <b-row>
                    <b-col
                      cols="4"
                      style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                    >
                      Aspect Ratio:
                    </b-col>
                    <b-col cols="8"> Scope (2.35:1) </b-col>
                  </b-row>
                  <b-row>
                    <b-col
                      cols="4"
                      style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                    >
                      View the collection:
                    </b-col>
                    <b-col cols="8">
                      <b-link style="text-decoration:none;"
                        >The Conjuring Universe</b-link
                      >
                    </b-col>
                  </b-row>
                </div>
              </div>
            </div>
          </b-row>
          <b-row>
            <div style="padding-left:10px;padding-right:10px;width:100%">
              <header-bar>
                <span slot="header">CAST & CREW</span>
              </header-bar>
            </div></b-row
          >
          <b-row style="padding-top: 20px;padding-bottom:10px">
            <div style="padding-left:10px;padding-right:10px;">
              <div style="display:flex;margin-bottom:15px">
                <cast-card style="margin-right:11px"></cast-card>
                <cast-card style="margin-right:11px"></cast-card
                ><cast-card style="margin-right:11px"></cast-card
                ><cast-card style="margin-right:11px"></cast-card
                ><cast-card style="margin-right:11px"></cast-card
                ><cast-card style="margin-right:11px"></cast-card
                ><cast-card style="margin-right:11px"></cast-card>
              </div>
              <div
                v-if="overCrew && showAllCrew"
                style="display:flex;margin-bottom:15px"
              >
                <cast-card style="margin-right:11px"></cast-card>
                <cast-card style="margin-right:11px"></cast-card
                ><cast-card style="margin-right:11px"></cast-card
                ><cast-card style="margin-right:11px"></cast-card
                ><cast-card style="margin-right:11px"></cast-card
                ><cast-card style="margin-right:11px"></cast-card
                ><cast-card style="margin-right:11px"></cast-card>
              </div>
              <div
                v-if="overCrew && showAllCrew"
                style="display:flex;margin-bottom:15px"
              >
                <cast-card style="margin-right:11px"></cast-card>
                <cast-card style="margin-right:11px"></cast-card
                ><cast-card style="margin-right:11px"></cast-card
                ><cast-card style="margin-right:11px"></cast-card
                ><cast-card style="margin-right:11px"></cast-card
                ><cast-card style="margin-right:11px"></cast-card
                ><cast-card style="margin-right:11px"></cast-card>
              </div>
              <div
                v-if="overCrew && showAllCrew"
                style="display:flex;margin-bottom:15px"
              >
                <cast-card style="margin-right:11px"></cast-card>
                <cast-card style="margin-right:11px"></cast-card
                ><cast-card style="margin-right:11px"></cast-card
                ><cast-card style="margin-right:11px"></cast-card
                ><cast-card style="margin-right:11px"></cast-card
                ><cast-card style="margin-right:11px"></cast-card
                ><cast-card style="margin-right:11px"></cast-card>
              </div>
              <div style="width:100%;text-align:right;">
                <b-link
                  v-if="overCrew && showAllCrew"
                  style="text-decoration:none;"
                  @click="showAllCrew = false"
                  ><strong>Hide Cast & Crew</strong>
                  <v-icon color="#4993DB" small>mdi-arrow-up-bold</v-icon>
                </b-link>
                <b-link
                  v-if="overCrew && !showAllCrew"
                  style="text-decoration:none;"
                  @click="showAllCrew = true"
                  ><strong>Show all Cast & Crew</strong>
                  <v-icon color="#4993DB" small>mdi-arrow-down-bold</v-icon>
                </b-link>
              </div>
            </div>
          </b-row>
          <b-row>
            <div style="padding-left:10px;padding-right:10px;width:100%">
              <header-bar>
                <span slot="header">NEWS & INTERVIEWS FOR THE CONJURING </span>
              </header-bar>
            </div></b-row
          >
          <b-row style="padding-top: 20px;padding-bottom:10px;">
            <div
              style="padding-left:10px;padding-right:10px;display:flex;justify-content:space-around"
            >
              <news-card></news-card>
              <news-card></news-card>
              <news-card></news-card>
            </div>
            <b-link
              style="text-decoration:none;width:100%;text-align:right;padding-right:10px;padding-top:15px"
              ><strong>View All</strong>
            </b-link></b-row
          >
          <b-row>
            <div style="padding-left:10px;padding-right:10px;width:100%">
              <header-bar>
                <span slot="header">CRITIC REVIEWS FOR THE CONJURING</span>
              </header-bar>
            </div></b-row
          >
          <b-row style="padding-top: 20px;padding-bottom:10px">
            <div style="padding-left:10px;padding-right:10px; display:flex">
              <div
                style="padding-left:5px;padding-right:5px;display:flex;text-align: left;"
              >
                <b-link style="text-decoration:none;">All Critics (223)</b-link>
                |
                <b-link style="text-decoration:none;">Top Critics (62) </b-link>
                | <b-link style="text-decoration:none;">Fresh (191)</b-link> |
                <b-link style="text-decoration:none;">Rotten (32)</b-link>
              </div>
            </div></b-row
          >
        </b-col>
      </b-row>
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
import PageFooter from "@/components/Footer";
import TopHeadline from "@/components/TopHeadline";

import LeftTabBar from "@/components/Movie/TabBar";
import HeaderBar from "@/components/Movie/HeaderBar";
import MovieCard from "@/components/Movie/MovieCard";
import StreamingCard from "@/components/Movie/StreamingCard";
import SliderImage from "@/components/Movie/SliderImage";
import CastCard from "@/components/CastCard";
import NewsCard from "@/components/Movie/NewsCard";
export default {
  name: "Home",
  components: {
    Navbar,
    PageFooter,
    TopHeadline,
    LeftTabBar,
    HeaderBar,
    MovieCard,
    StreamingCard,
    SliderImage,
    CastCard,
    NewsCard
  },
  data() {
    return {
      popoverCriticSelected: "all",
      audienceRating: 3.55,
      showAllCrew: false,
      overCrew: true

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

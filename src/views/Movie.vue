<template>
  <div>
    <div v-if="!isLoading">
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
                  :src="flim.data.trailerPhoto"
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
                    :src="flim.info.trailer"
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
                    :src="flim.info.poster"
                  />
                </div>
                <div
                  style="margin-left:10px;width:100%;height: 210px;background-color:#F3F3F3;border-radius:4px"
                >
                  <h4 style="margin-top:30px">
                    <strong>{{ flim.info.name.toUpperCase() }}</strong>
                  </h4>
                  <h6>
                    <span
                      style="border: 1px solid #CCCFD1;border-radius:3px;padding-top:2px;padding-left:2px;padding-right:2px;"
                      >{{ flim.info.rating }}</span
                    >
                    {{ this.flim.createdAt.split("-")[0] }},
                    {{ this.flim.info.genres.join("/") }},
                    {{ flim.info.runtime }}
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
                          :src="flim.lemonIcon"
                        />
                        <span
                          class="rating"
                          style="font-size:30px;margin-left:5px"
                        >
                          <strong>{{ flim.lemonScoreDisplay }}</strong>
                        </span>
                      </b-link>
                      <span><strong>LEMONCATER</strong></span
                      ><br />
                      <span
                        style="color:#4f86d9;font-size:12px;align-self:right"
                        >{{ flim.lemonReviewCount }} Reviews</span
                      >
                    </div>
                    <div>
                      <b-link
                        v-b-modal.modal-1
                        style="margin-bottom:12px;margin-left:20px;text-decoration: none;display:flex;align-items: center;color:#2A2C32"
                      >
                        <img
                          style="width:45px;height:45px"
                          :src="flim.userIcon"
                        />
                        <span
                          class="rating"
                          style="font-size:30px;margin-left:5px"
                        >
                          <strong>{{ flim.userScoreDisplay }}</strong>
                        </span>
                      </b-link>
                      <span><strong>AUDIENCE SCORE</strong></span
                      ><br />
                      <span
                        style="color:#4f86d9;font-size:12px;align-self:right"
                        >{{ flim.userReviewCount }} Ratings</span
                      >
                    </div>
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
                  <span v-for="item in flim.whatToKnows" :key="item.title">
                    <h5>
                      <strong>{{ item.title.toUpperCase() }}</strong>
                    </h5>
                    <p>
                      {{ item.content }}
                    </p>
                  </span>
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
                style="padding-top:20px;padding-bottom:20px;padding-left:10px;padding-right:10px;width:100%;display:flex;justify-content:space-between;"
              >
                <slider-movie :id="flim.id" :pageSize="4"></slider-movie>
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
              style="padding-top:20px;padding-bottom:20px;padding-left:10px;padding-right:10px;width:100%;display:flex;flex-wrap: wrap;justify-content:space-around"
            >
              <streaming-card
                v-for="item in flim.streamings"
                :key="item"
                :name="item"
                style="margin-bottom:15px"
              ></streaming-card>
            </b-row>
            <b-row>
              <div style="padding-left:10px;padding-right:10px;width:100%">
                <header-bar>
                  <span slot="header"
                    >{{ flim.info.name.toUpperCase() }} PHOTOS</span
                  >
                </header-bar>
              </div></b-row
            >
            <b-row
              style="padding-top:20px;padding-left:10px;padding-right:10px;width:100%;"
            >
              <slider-image
                :images="
                  flim.photos.map(item => ({
                    index: flim.photos.indexOf(item),
                    src: item
                  }))
                "
              ></slider-image>
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
                    {{ flim.info.summary }}
                  </p>
                  <div style="font-size:15px">
                    <b-row>
                      <b-col
                        cols="4"
                        style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                      >
                        Rating:
                      </b-col>
                      <b-col cols="8"> {{ flim.info.rating }} </b-col>
                    </b-row>
                    <b-row>
                      <b-col
                        cols="4"
                        style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                      >
                        Genre:
                      </b-col>
                      <b-col cols="8">
                        {{ flim.info.genres.join(", ") }}
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col
                        cols="4"
                        style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                      >
                        Original Language:
                      </b-col>
                      <b-col cols="8"> {{ flim.info.originalLanguage }} </b-col>
                    </b-row>
                    <b-row>
                      <b-col
                        cols="4"
                        style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                      >
                        Director:
                      </b-col>
                      <b-col cols="8">
                        <span
                          v-for="item in flim.directors"
                          :key="item.person.id"
                        >
                          <b-link
                            :href="'/person/' + item.person.slug"
                            style="text-decoration:none;"
                            >{{ item.person.name.trim() }}</b-link
                          >
                          <span
                            v-if="
                              flim.directors.indexOf(item) !==
                                flim.directors.length - 1
                            "
                            >,
                          </span>
                        </span>
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
                        <span
                          v-for="item in flim.producers"
                          :key="item.person.id"
                        >
                          <b-link
                            :href="'/person/' + item.person.slug"
                            style="text-decoration:none;"
                            >{{ item.person.name.trim() }}</b-link
                          >
                          <span
                            v-if="
                              flim.producers.indexOf(item) !==
                                flim.producers.length - 1
                            "
                            >,
                          </span>
                        </span>
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
                        <span
                          v-for="item in flim.writers"
                          :key="item.person.id"
                        >
                          <b-link
                            :href="'/person/' + item.person.slug"
                            style="text-decoration:none;"
                            >{{ item.person.name.trim() }}</b-link
                          >
                          <span
                            v-if="
                              flim.writers.indexOf(item) !==
                                flim.writers.length - 1
                            "
                            >,
                          </span>
                        </span>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col
                        cols="4"
                        style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                      >
                        Release Date (Theaters):
                      </b-col>
                      <b-col cols="8"> {{ flim.info.theatersDate }} </b-col>
                    </b-row>
                    <b-row>
                      <b-col
                        cols="4"
                        style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                      >
                        Release Date (Streaming):
                      </b-col>
                      <b-col cols="8"> {{ flim.info.streamingDate }} </b-col>
                    </b-row>
                    <!-- <b-row>
                    <b-col
                      cols="4"
                      style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                    >
                      Box Office (Gross USA):
                    </b-col>
                    <b-col cols="8"> $137.4M </b-col>
                  </b-row> -->
                    <b-row>
                      <b-col
                        cols="4"
                        style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                      >
                        Runtime:
                      </b-col>
                      <b-col cols="8"> {{ flim.info.runtime }} </b-col>
                    </b-row>
                    <b-row>
                      <b-col
                        cols="4"
                        style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                      >
                        Production Co:
                      </b-col>
                      <b-col cols="8">
                        {{ flim.info.productions.join(", ") }}
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col
                        cols="4"
                        style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                      >
                        Sound Mix:
                      </b-col>
                      <b-col cols="8">
                        {{ flim.info.soundMixs.join(", ") }}
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col
                        cols="4"
                        style="text-align:right;padding-right:20px;font-weight:bold;color:#757A84"
                      >
                        Aspect Ratio:
                      </b-col>
                      <b-col cols="8"> {{ flim.info.aspectRatio }} </b-col>
                    </b-row>
                    <!-- <b-row>
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
                  </b-row> -->
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
                <div
                  style="display:flex;flex-wrap: wrap;justify-content:space-around;width:100%"
                >
                  <cast-card
                    v-for="item in crews"
                    :key="item.id"
                    :slug="item.person.slug"
                    :image="item.person.images[0]"
                    :name="item.person.name"
                    :role="item.role"
                    style="margin-right:11px;margin-bottom:15px;max-width:120px"
                  ></cast-card>
                </div>

                <div style="width:100%;text-align:right;">
                  <b-link
                    v-if="showAllCrew"
                    style="text-decoration:none;"
                    @click="showAllCrew = false"
                    ><strong>Hide Cast & Crew</strong>
                    <v-icon color="#4993DB" small>mdi-arrow-up-bold</v-icon>
                  </b-link>
                  <b-link
                    v-if="!showAllCrew"
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
                  <span slot="header"
                    >NEWS & INTERVIEWS FOR {{ flim.info.name.toUpperCase() }}
                  </span>
                </header-bar>
              </div></b-row
            >
            <b-row style="padding-top: 20px;padding-bottom:10px;">
              <div
                style="padding-left:10px;padding-right:10px;display:flex;justify-content:space-around"
              >
                <news-card
                  v-for="item of flim.data.news"
                  :key="item.slug"
                  :slug="item.slug"
                  :src="item.data.previewPoster"
                  :date="item.createdAt"
                  :name="item.title"
                ></news-card>
              </div>
              <b-link
                style="text-decoration:none;width:100%;text-align:right;padding-right:10px;padding-top:15px"
                ><strong>View All</strong>
              </b-link></b-row
            >
            <b-row>
              <div style="padding-left:10px;padding-right:10px;width:100%">
                <header-bar>
                  <span slot="header">RATE AND REVIEW</span>
                </header-bar>
              </div></b-row
            ><b-row style="padding-top: 20px;padding-bottom:10px;width:100%">
              <div
                style="padding-left:10px;padding-right:10px; display:flex;justify-content:center"
              >
                <v-card elevation="5" outlined shaped style="width:90%">
                  <div v-if="user.id.length" style="padding: 5px;">
                    <b-form-input
                      v-model="title"
                      ref="title"
                      :state="title.length > 20 ? true : false"
                      aria-describedby="input-live-feedback"
                      placeholder="Enter your review title"
                      trim
                      required
                    ></b-form-input>

                    <b-form-invalid-feedback id="input-live-feedback">
                      Enter at least 20 letters
                    </b-form-invalid-feedback>

                    <b-form-rating
                      v-model="ratingValue"
                      variant="warning"
                      size="lg"
                      stars="10"
                      no-border
                    ></b-form-rating>
                    <tinymce style="max-width: 693px" ref="editor" v-model="form.content"></tinymce>
                    <b-button
                      style="margin-top:15px;margin-bottom:10px"
                      block
                      variant="outline-success"
                      @click="submitReview()"
                      >Submit your Review</b-button
                    >
                  </div>
                  <b-link href="/login" v-else>
                    <b-button size="lg" variant="outline-success"
                      >Write Your Review</b-button
                    >
                  </b-link>
                </v-card>
              </div>
            </b-row>
            <b-alert
              :show="dismissCountDown"
              class="fixed-top m-0 rounded-0"
              style="z-index: 2000;"
              variant="success"
              dismissible
              @dismissed="dismissCountDown = 0"
              @dismiss-count-down="countDownChanged"
              >{{
                `Your review has been ${
                  this.haveReview ? "Updated" : "Created"
                }`
              }}
            </b-alert>
            <b-row>
              <div style="padding-left:10px;padding-right:10px;width:100%">
                <header-bar>
                  <span slot="header"
                    >CRITIC REVIEWS FOR {{ flim.info.name.toUpperCase() }}</span
                  >
                </header-bar>
              </div></b-row
            >
            <critic
              v-if="!isLoading"
              :id="flim.id"
              :name="flim.info.name"
              :slug="slug"
              style="width:100%;"
            />
            <b-row>
              <div style="padding-left:10px;padding-right:10px;width:100%">
                <header-bar>
                  <span slot="header"
                    >{{ flim.info.name.toUpperCase() }} QUOTES</span
                  >
                </header-bar>
              </div></b-row
            ><b-row style="padding-top: 20px;padding-bottom:10px;width:60%">
              <div style="padding-left:10px;padding-right:10px; display:flex">
                <div
                  style="padding-left:5px;padding-right:5px;display:flex;text-align: left;display: flex;
  flex-wrap: wrap;justify-content:space-around"
                >
                  <quote-card
                    v-for="item in flim.quotes"
                    :key="item.content"
                    :content="item.content"
                    :name="item.name"
                  ></quote-card>

                  <b-link
                    style="text-decoration:none;width:100%;text-align:right;padding-right:10px;padding-top:15px;padding-bottom:50px"
                    ><strong>View All Quotes</strong>
                  </b-link>
                </div>
              </div>
            </b-row>
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
    <loading v-else></loading>
  </div>
</template>

<script>
import axios from "axios";
import updatePost from "@/apollo/mutations/updatePost.gql";
import getFlimBySlug from "@/apollo/queries/getFlimBySlug.gql";
import Loading from "@/components/Loading";
import moment from "moment";
import Navbar from "@/components/Navbar";
import PageFooter from "@/components/Footer";
import TopHeadline from "@/components/TopHeadline";
import Tinymce from "@/components/Tinymce";

import LeftTabBar from "@/components/Movie/TabBar";
import HeaderBar from "@/components/Movie/HeaderBar";
import SliderMovie from "@/components/SliderMovieById";
import StreamingCard from "@/components/Movie/StreamingCard";
import SliderImage from "@/components/Movie/SliderImage";
import CastCard from "@/components/CastCard";
import NewsCard from "@/components/Movie/NewsCard";

import QuoteCard from "@/components/Movie/QuoteCard";
import Critic from "@/components/Movie/Critic";

export default {
  components: {
    Navbar,
    PageFooter,
    TopHeadline,
    LeftTabBar,
    HeaderBar,
    StreamingCard,
    SliderImage,
    CastCard,
    NewsCard,
    QuoteCard,
    Tinymce,
    Loading,
    SliderMovie,
    Critic
  },
  data() {
    return {
      dismissCountDown: 0,
      showDismissibleAlert: false,
      flim: {},
      first: true,
      isLoading: true,
      slug: "",
      popoverCriticSelected: "all",
      audienceRating: 3.55,
      showAllCrew: false,
      showReview: false,
      ratingValue: 5,
      title: "",
      id: "",
      form: {
        content: ""
      },
      haveReview: false
    };
  },
  async created() {
    this.slug = this.$route.params.slug;
    if (this.$cookies.get("token")) {
      let data = await axios({
        method: "post",
        url: "http://127.0.0.1:3841/ownerReviewByFlim",
        data: {
          token: this.$cookies.get("token"),
          slug: this.slug
        }
      });
      if (data.data !== "") {
        this.haveReview = true;
        this.id = data.data.id;
        this.ratingValue = data.data.data.score / 10;
        this.title = data.data.title;
        this.form.content = data.data.content;
      } else {
        let ids = await axios({
          method: "get",
          url: "http://127.0.0.1:3841/genIds"
        });
        this.id = ids.data[0];
      }
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    crews() {
      let max = 6;
      if (this.showAllCrew) max = this.flim.crews.length;
      const results = [];
      for (let i = 0; i < max; i++) {
        results.push(this.flim.crews[i]);
      }
      return results;
    },
    review() {
      return {
        id: this.id,
        type: "review",
        title: this.title,
        data: {
          flim: this.flim.id,
          score: this.ratingValue * 10
        },
        content: this.form.content,
        slug:
          "review-" +
          this.title
            .toLowerCase()
            .replace(/[`~!#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
            .replaceAll(" ", "-") +
          "-" +
          this.slug +
          "-" +
          this.user.slug,
        token: this.$cookies.get("token"),
        action: this.haveReview ? "update" : "create"
      };
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    submitReview() {
      if (this.title.length < 20) this.$refs.title.$el.focus();
      else {
        this.$apollo.mutate({
          mutation: updatePost,
          manual: true,
          variables: {
            input: this.review
          }
        });
        this.dismissCountDown = 3;
        this.haveReview = true;
      }
    }
  },
  apollo: {
    flimBySlug: {
      query: getFlimBySlug,
      variables() {
        return {
          slug: this.slug
        };
      },
      result(result) {
        if (!this.first) return;
        this.first = false;
        this.isLoading = true;
        this.flim = result.data.flimBySlug;
        this.flim.info.name = this.flim.info.name.toUpperCase();
        this.flim.info.genres = this.flim.info.genres.map(
          item => item.charAt(0).toUpperCase() + item.slice(1)
        );
        if (this.flim.lemonScore >= 80)
          this.flim.lemonIcon =
            "https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png";
        else if (this.flim.lemonScore >= 60 && this.flim.lemonScore < 80)
          this.flim.lemonIcon =
            "https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png";
        else if (this.flim.lemonScore < 60 && this.flim.lemonScore >= 0)
          this.flim.lemonIcon =
            "https://live.staticflickr.com/65535/51278099823_29be28c9b3_o.png";
        else
          this.flim.lemonIcon =
            "https://live.staticflickr.com/65535/51278655199_d54f32f82e_o.png";

        if (this.flim.userScore >= 60)
          this.flim.userIcon =
            "https://live.staticflickr.com/65535/51277934536_26d8b990e5_o.png";
        else if (this.flim.userScore < 60 && this.flim.userScore >= 0)
          this.flim.userIcon =
            "https://live.staticflickr.com/65535/51278953920_e842d17506_o.png";
        else
          this.flim.userIcon =
            "https://live.staticflickr.com/65535/51277185452_0092492af4_o.png";

        this.flim.lemonScoreDisplay =
          this.flim.lemonScore === -1
            ? "_ _ _"
            : `${this.flim.lemonScore + "%"}`;
        this.flim.userScoreDisplay =
          this.flim.userScore === -1 ? "_ _ _" : `${this.flim.userScore + "%"}`;

        this.flim.directors = this.flim.crews.filter(item =>
          item.role.toLowerCase().includes("director")
        );
        this.flim.writers = this.flim.crews.filter(item =>
          item.role.toLowerCase().includes("writer")
        );
        this.flim.producers = this.flim.crews.filter(item =>
          item.role.toLowerCase().includes("producer")
        );
        this.flim.info.theatersDate = moment(
          this.flim.info.theatersDate
        ).format("ll");
        this.flim.info.streamingDate = moment(
          this.flim.info.streamingDate
        ).format("ll");
        this.showAllCrew = this.flim.crews.length > 6 ? false : true;
        document.title = this.flim.info.name + " - LEMONCAT";
        if (this.flim.info.name.length > 35)
          this.flim.info.name = this.flim.info.name.substring(0, 32) + "...";
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

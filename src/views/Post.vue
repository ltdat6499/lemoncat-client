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
        <b-row style="padding-top:50px">
          <b-col cols="9">
            <h2>
              <strong>{{ post.title.toUpperCase() }}</strong>
            </h2>
            <h5>
              {{ post.sideTitle.toUpperCase() }}
            </h5>
            <div>
              <span>by </span>
              <b-link
                :href="'/user/' + post.user.slug"
                style="text-decoration:none;"
                >{{ post.user.name }}</b-link
              >
              <span style="color:gray"> | {{ post.updatedAt }}</span>
              <b-link style="text-decoration:none;">
                | <v-icon small>mdi-message</v-icon> Comments</b-link
              >
            </div>
            <hr style="width: 90%;margin-left: auto;margin-right: auto;" />
            <p style="padding:20px"><span v-html="post.content"></span></p>
            <hr style="width: 90%;margin-left: auto;margin-right: auto;" />
            <div
              style="width: 90%;margin-left: auto;margin-right: auto;padding-bottom:20px"
            >
              <div style="float:left">
                <div style="display: flex;">
                  <div style="margin-right:45px">
                    <img
                      src="../icons/emoji/love.svg"
                      style="height:20px;width:20px"
                    />
                    <img
                      src="../icons/emoji/care.svg"
                      style="height:20px;width:20px;position:absolute;left:61px"
                    />
                    <img
                      src="../icons/emoji/haha.svg"
                      style="height:20px;width:20px;position:absolute;left:78px"
                    />
                  </div>
                  <div>
                    <b-link style="text-decoration:none;color:gray"
                      >4,2k</b-link
                    >
                  </div>
                </div>
              </div>

              <div style="float:right">
                <b-link style="text-decoration:none;color:gray"
                  >2 Comments</b-link
                >
              </div>
            </div>
            <hr style="width: 90%;margin-left: auto;margin-right: auto;" />
            <div style="width:90%;margin-left: auto;margin-right: auto;">
              <b-row>
                <b-col
                  ><b-button class="block" id="popover-react"
                    ><span style="display:flex;justify-content: center">
                      <v-icon style="margin-right:5px"
                        >mdi-thumb-up-outline</v-icon
                      >
                      <strong>React</strong></span
                    ></b-button
                  ><b-popover
                    target="popover-react"
                    triggers="hover"
                    placement="top"
                    delay="100"
                  >
                    <img class="react-icon" src="../icons/emoji/love.svg" />
                    <img src="../icons/emoji/care.svg" class="react-icon" />
                    <img src="../icons/emoji/haha.svg" class="react-icon" />
                    <img src="../icons/emoji/wow.svg" class="react-icon" />
                    <img src="../icons/emoji/like.svg" class="react-icon" />
                    <img
                      src="../icons/emoji/angry.svg"
                      class="react-icon"
                    /> </b-popover
                ></b-col>
                <b-col
                  ><b-button class="block"
                    ><span style="display:flex;justify-content: center">
                      <v-icon style="margin-right:5px"
                        >mdi-comment-processing-outline</v-icon
                      >
                      <strong>Comment</strong></span
                    ></b-button
                  ></b-col
                >
                <b-col
                  ><b-button class="block" :pressed="false"
                    ><span style="display:flex;justify-content: center">
                      <v-icon style="margin-right:5px"
                        >mdi-share-outline</v-icon
                      >
                      <strong>Share</strong></span
                    ></b-button
                  ></b-col
                >
              </b-row>
            </div>

            <hr style="width: 90%;margin-left: auto;margin-right: auto;" />

            <div
              style="width: 90%;margin-left: auto;margin-right: auto;padding-bottom:20px"
            >
              <div style="width:100%;display:flex;align-items: center;">
                <img
                  src="../icons/emoji/care.svg"
                  style="height:35px;width:35px;float:left;margin-right:10px"
                />
                <b-form-input
                  style="border-radius: 30px !important;float:left;max-width:70%;margin-right:36px;background-color: #F0F2F5"
                  placeholder="Write your comment"
                />
                <v-select
                  style="max-width:20%;float:right"
                  v-model="selected"
                  :items="['Time', 'Top', 'Most Relative']"
                  label="View Mode"
                ></v-select>
              </div>
              <div>
                <b-row>
                  <b-col
                    style="margin-left:0px!important"
                    class="no-gutters"
                    cols="1"
                    ><img
                      src="../icons/emoji/care.svg"
                      style="height:35px;width:35px;float:left;"
                  /></b-col>
                  <b-col
                    class="no-gutters"
                    cols="11"
                    style="display:flex;flex-direction:column"
                  >
                    <div
                      style="margin-bottom:5px;border-radius: 10px !important;float:left;background-color: #F0F2F5;display:flex;flex-direction: column;padding:10px"
                    >
                      <b-link
                        style="float:left;margin-right:auto;text-decoration:none;"
                        ><strong>Min Khant Nyi Thway </strong></b-link
                      >
                      <span style="float:left;margin-right:auto;"
                        >Wow nice it's grateful! , it's support for javascript
                        with language? 😅</span
                      >
                    </div>
                    <div style="padding-left:10px">
                      <b-link
                        style="text-decoration:none;color:gray;float:left;font-size:12px"
                        id="popover-id-1"
                        ><strong>React</strong></b-link
                      >
                      <strong style="float:left; color:gray"
                        >&nbsp;·&nbsp;</strong
                      ><b-link
                        style="text-decoration:none;color:gray;float:left;font-size:12px"
                        ><strong>Reply</strong></b-link
                      ><strong style="float:left;color:gray"
                        >&nbsp;·&nbsp;</strong
                      ><b-link
                        style="text-decoration:none;color:gray;float:left;font-size:12px"
                        ><strong>11 Weeks ago</strong></b-link
                      >
                      <b-popover
                        target="popover-id-1"
                        triggers="hover"
                        placement="top"
                        delay="100"
                      >
                        <img class="react-icon" src="../icons/emoji/love.svg" />
                        <img src="../icons/emoji/care.svg" class="react-icon" />
                        <img src="../icons/emoji/haha.svg" class="react-icon" />
                        <img src="../icons/emoji/wow.svg" class="react-icon" />
                        <img src="../icons/emoji/like.svg" class="react-icon" />
                        <img
                          src="../icons/emoji/angry.svg"
                          class="react-icon"
                        />
                      </b-popover>
                    </div>
                    <!-- Child comments -->
                    <div>
                      <!-- Comment -->
                      <div>
                        <b-row>
                          <b-col
                            style="margin-left:0px!important"
                            class="no-gutters"
                            cols="1"
                            ><img
                              src="../icons/emoji/care.svg"
                              style="height:25px;width:25px;float:left;"
                          /></b-col>
                          <b-col class="no-gutters" cols="11">
                            <div
                              style="margin-bottom:5px;border-radius: 10px !important;float:left;background-color: #F0F2F5;display:flex;flex-direction: column;padding:10px"
                            >
                              <b-link
                                style="float:left;margin-right:auto;text-decoration:none;"
                                ><strong>Min Khant Nyi Thway </strong></b-link
                              >
                              <span
                                >Wow nice it's grateful! , it's support for
                                javascript with language? 😅</span
                              >
                            </div>
                            <div style="margin-left:10px">
                              <b-link
                                style="text-decoration:none;color:gray;float:left;font-size:12px"
                                id="popover-id-2"
                                ><strong>React</strong></b-link
                              >
                              <strong style="float:left; color:gray"
                                >&nbsp;·&nbsp;</strong
                              ><b-link
                                style="text-decoration:none;color:gray;float:left;font-size:12px"
                                ><strong>Reply</strong></b-link
                              ><strong style="float:left;color:gray"
                                >&nbsp;·&nbsp;</strong
                              ><b-link
                                style="text-decoration:none;color:gray;float:left;font-size:12px"
                                ><strong>11 Weeks ago</strong></b-link
                              >
                              <b-popover
                                target="popover-id-2"
                                triggers="hover"
                                placement="top"
                                delay="100"
                              >
                                <img
                                  class="react-icon"
                                  src="../icons/emoji/love.svg"
                                />
                                <img
                                  src="../icons/emoji/care.svg"
                                  class="react-icon"
                                />
                                <img
                                  src="../icons/emoji/haha.svg"
                                  class="react-icon"
                                />
                                <img
                                  src="../icons/emoji/wow.svg"
                                  class="react-icon"
                                />
                                <img
                                  src="../icons/emoji/like.svg"
                                  class="react-icon"
                                />
                                <img
                                  src="../icons/emoji/angry.svg"
                                  class="react-icon"
                                />
                              </b-popover>
                            </div>
                          </b-col>
                        </b-row>
                      </div>
                      <!-- Reply -->
                      <div style="width:100%;display:flex;align-items: center;">
                        <img
                          src="../icons/emoji/care.svg"
                          style="height:25px;width:25px;float:left;margin-right:10px"
                        />
                        <b-form-input
                          style="border-radius: 30px !important;float:left;background-color: #F0F2F5"
                          placeholder="Write your comment"
                        />
                      </div>
                      <!-- Show more -->
                      <div style="margin:10px;float:left">
                        <v-icon small>mdi-subdirectory-arrow-right</v-icon>
                        <b-link style="text-decoration:none;color:gray"
                          ><strong> Show more comments</strong></b-link
                        >
                      </div>
                    </div>
                  </b-col>
                </b-row>
                <!-- Parent show more -->
                <div style="margin:10px;float:left">
                  <v-icon small>mdi-subdirectory-arrow-right</v-icon>
                  <b-link style="text-decoration:none;color:gray"
                    ><strong> Show more comments</strong></b-link
                  >
                </div>
              </div>
            </div>
            <div
              style="width: 90%;margin-left: auto;margin-right: auto;padding-bottom:20px"
            ></div>
          </b-col>
          <b-col cols="3">
            <div>
              <header-bar>
                <span slot="header">MOVIE & TV NEWS</span>
              </header-bar>
              <news-card></news-card>
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
import moment from "moment";
import getPostBySlug from "@/apollo/queries/getPostBySlug.gql";
import Navbar from "@/components/Navbar";
import PageFooter from "@/components/Footer";
import HeaderBar from "@/components/Movie/HeaderBar";
import NewsCard from "@/components/SideBestNewsWeek";
import Loading from "@/components/Loading";
export default {
  name: "Home",
  components: {
    Navbar,
    PageFooter,
    HeaderBar,
    NewsCard,
    Loading
  },
  data() {
    return {
      post: {},
      isLoading: true,
      slug: "",
      selected: "Time"
    };
  },
  created() {
    this.slug = this.$route.params.slug;
  },
  apollo: {
    postBySlug: {
      query: getPostBySlug,
      variables() {
        return {
          slug: this.slug
        };
      },
      result(result) {
        this.post = result.data.postBySlug;
        this.post.updatedAt = moment(this.post.updatedAt).format("LL");
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
</style>

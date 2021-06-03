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
      style="display:block;"
    >
      <b-row style="padding-top:30px">
        <b-col cols="4"
          ><left-tab-bar
            style="margin-left:10px;margin-right:10px"
          ></left-tab-bar
        ></b-col>
        <b-col cols="8">
          <div
            class="container"
            style="height:100px;background-color:white;padding:10px;display:flex"
          >
            <div>
              <b-img
                v-bind="{
                  blank: true,
                  blankColor: '#777',
                  width: 150,
                  height: 210,
                  class: 'm1'
                }"
                rounded
                alt="Rounded image"
              ></b-img>
            </div>
            <div
              style="margin-left:10px;width:100%;height: 210px;background-color:#F3F3F3;border-radius:4px"
            >
              <h4 style="margin-top:30px"><strong>THE CONJURING</strong></h4>
              <h6>
                <span
                  style="border: 1px solid #CCCFD1;border-radius:3px;padding-top:2px;padding-left:2px;padding-right:2px;"
                  >R+</span
                >
                2013, Horror/Mystery & thriller, 1h 51m
              </h6>
              <div>
                <b-button v-b-modal.modal-1>Launch demo modal</b-button>

                <b-modal
                  size="lg"
                  hide-footer
                  hide-header
                  id="modal-1"
                  centered
                >
                  <b-row>
                    <b-col style="margin-left:20px;margin-top:20px;border-right:1px solid #E9E9EA">
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
                        ></b-form-radio-group>
                      </b-form-group>
                    </b-col>
                    <b-col style="margin-left:20px;margin-top:20px"
                      ><h4>
                        <strong>AUDIENCE</strong
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
                    </b-col>
                  </b-row>
                </b-modal>
              </div>
            </div>
          </div>
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
export default {
  name: "Home",
  components: {
    Navbar,
    PageFooter,
    TopHeadline,
    LeftTabBar
  },
  data() {
    return {
      popoverCriticSelected: "all"
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
</style>

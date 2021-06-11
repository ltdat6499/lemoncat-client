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
      <b-row style="padding-top:20px">
        <b-col cols="8" style="padding:20px">
          <header-bar>
            <span slot="header">TOP 100 FLIMS OF 1995</span>
          </header-bar>

          <div style="display:flex;align-items: center;margin-bottom: 20px;margin-top:20px">
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
            <v-select
              :items="['Movies', 'TVs']"
              label="Flim Type"
              style="max-width:20%;margin-right:30px"
            ></v-select>

            <v-select
              :items="['Genres', 'All Time', 'Today']"
              label="Type"
              style="max-width:20%;margin-right:30px"
            ></v-select>

            <v-select
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
                    src="../icons/certified-fresh.svg"
                    style="height:20px;width:20px"
                  />
                  <strong>{{ item.value }}</strong></span
                ></template
              >
              <template #cell(title)="item">
                <b-link style="text-decoration:none;color:black">{{
                  item.value
                }}</b-link>
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
            <row></row>
            <row></row>
            <row></row>
            <row></row>
            <row></row>
            <row></row>
            <row></row>
            <row></row>
            <row></row>
            <row></row>
            <b-link style="text-decoration: none; float: left; margin-top: 5px">
              View All
            </b-link>
            <br />
            <br />
            <span style="color: gray">TOP 10 DVD RELEASES</span>
            <row></row>
            <row></row>
            <row></row>
            <row></row>
            <row></row>
            <row></row>
            <row></row>
            <row></row>
            <row></row>
            <row></row>
            <b-link style="text-decoration: none; float: left; margin-top: 5px">
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
</template>

<script>
// import getAllUsers from "@/apollo/queries/getAllUsers.gql";
import Navbar from "@/components/Navbar";
import PageFooter from "@/components/Footer";
import HeaderBar from "@/components/Movie/HeaderBar";
import NewsCard from "@/components/NewsCard";
import Row from "@/components/Top/Row";
export default {
  name: "Home",
  components: {
    Navbar,
    PageFooter,
    HeaderBar,
    NewsCard,
    Row
  },
  computed: {
    tags() {
      return this.tagsString.split(" ");
    },
    years() {
      const results = [];
      for (let i = 1950; i <= 2021; i++) {
        results.push(i);
      }
      return results.reverse();
    }
  },
  data() {
    return {
      items: [
        {
          rank: 40,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 21,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 89,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        },
        {
          rank: 38,
          rating: `90%`,
          title:
            "La Graine et le Mulet (The Secret of the Grain) (Couscous) (2007)	",
          "no. of reviews": 288
        }
      ],
      tagsString:
        "gameofthrones FirstLook werewolf Spectrum Originals DC Comics GLAAD CBS All Access laika anthology adaptation GIFs TNT hist Tarantino 007 TCM ghosts justice league 2016 El Rey zombie TCA Winter 2020 Super Bowl Amazon Studios series MCU Disney The Academy festival Endgame Film Festival Best and Worst NBC IFC Films parents Emmy Nominations stop motion jurassic park TV renewals Teen Turner Classic Movies criterion Toys BBC One finale Food Network popular documentary A24 IFC Trivia kids Pop stand-up comedy science fiction cats Holidays cancelled television book adaptation richard e. Grant child's play 2021 Disney Channel The CW Dark Horse Comics Crunchyroll directors superman Legendary Tumblr comiccon Television Critics Association binge worst movies facebook Paramount Network Action boxoffice mission: impossible Mary Poppins Returns Reality disaster NYCC cancelled APB Creative Arts Emmys spain social media Universal Calendar BAFTA E3 Premiere Dates Exclusive Video australia period drama composers The Arrangement hispanic SundanceTV children's TV medical drama 72 Emmy Awards Classic Film Fall TV San Diego Comic-Con indie singing competition cults unscripted FX rotten movies we love know your critic festivals worst christmas movies travel PlayStation award winner reviews DGA Comic Book video on demand WGN boxing Writers Guild of America Sneak Peek Set visit FOX strong female leads Box Office Avengers hollywood canceled TV shows MSNBC ITV The Walking Dead 20th Century Fox universal monsters a nightmare on elm street asian-american Awards Tour Discovery Channel women Fox News Logo Fantasy Watching Series E! YA toronto Baby Yoda Tubi 93rd Oscars Ghostbusters dramedy cancelled TV shows Tomatazos sequels Warner Bros. high school Oscars marvel cinematic universe Opinion diversity Rock japanese nfl Amazon Prime Video Spring TV kaiju The Witch war Countdown TV One Family zombies joker news tv talk aapi LGBT crime Lifetime Christmas movies Winners emmy awards live action revenge DC streaming service cancelled TV series 2019 Masterpiece dceu godzilla TBS mockumentary Academy Awards teaser Anna Paquin Hulu dogs Apple TV Red Carpet docudrama twilight police drama game show Valentine's Day Reality Competition Amazon Prime Animation blaxploitation pirates of the caribbean spy thriller talk show comedies TruTV Black History Month elevated horror Acorn TV movie historical drama vampires casting Television Academy video new star wars movies TCA Esquire Sci-Fi Crackle stoner serial killer 78th Annual Golden Globe Awards SXSW doctor who VICE Superheroes Cannes foreign 21st Century Fox YouTube adventure king kong golden globes Nickelodeon Schedule scary movies Photos Starz Certified Fresh based on movie heist movie comic thriller spanish language chucky Emmys Black Mirror Martial Arts new york Music crime drama james bond Heroines Columbia Pictures supernatural what to watch YouTube Red Disney Plus psychological thriller Trailer 4/20 Elton John GoT Cosplay See It Skip It ratings ESPN First Reviews Netflix Christmas movies TLC all-time Comedy obituary AMC Musical Ovation USA Network Comedy Central nbcuniversal sitcom Brie Larson Apple TV Plus critics renewed TV shows RT History VH1 PBS Biopics Nominations 2015 Funimation 2020 green book Adult Swim X-Men psycho Summer crime thriller MTV black politics latino robots rt archives Quiz Star Wars lord of the rings Character Guide Western mutant ABC Family President Star Trek Disney+ Disney Plus natural history french ViacomCBS Travel Channel Freeform Britbox BBC America Spike RT21 theme song indiana jones CNN OWN south america Holiday fresh superhero nature anime Women's History Month transformers Lucasfilm Nat Geo hidden camera Chernobyl classics versus blockbuster sequel Lifetime kong Peacock Marvel spanish discovery franchise cars Polls and Games Binge Guide streaming Hear Us Out dark Pacific Islander Podcast History Unbreakable Kimmy Schmidt Marathons documentaries cooking PaleyFest Rocketman spider-man Hallmark Christmas movies razzies die hard comics cartoon animated Pop TV Shudder FXX football canceled Mudbound Video Games Syfy true crime Apple TV+ witnail screen actors guild jamie lee curtis TIFF Pixar Sundance TV name the review sports Pride Month slashers Year in Review ABC Signature Drama 99% New York Comic Con YouTube Premium reboot American Society of Cinematographers spinoff DC Universe Fox Searchlight dc TCA 2017 Amazon OneApp italian golden globe awards Showtime DirecTV biography HBO docuseries Chilling Adventures of Sabrina Sundance Paramount Thanksgiving television concert best Walt Disney Pictures BET fast and furious Netflix 71st Emmy Awards remakes Winter TV CMT The Purge Pirates monster movies Extras movies venice TCA Awards scene in color deadpool National Geographic Mary Tyler Moore Pet Sematary 2017 HBO Max cops ID 2018 Disney streaming service Christmas sag awards scorecard political drama WarnerMedia Broadway Country 45 Election prank Captain marvel breaking bad dragons Grammys Marvel Television Shondaland miniseries Paramount Plus Sony Pictures blockbusters Sundance Now 24 frames romance Mindy Kaling FX on Hulu target Arrowverse BET Awards HBO Go Comics on TV quibi Lionsgate free movies Vudu Ellie Kemper Alien Stephen King Horror international USA VOD batman Superheroe Hallmark films technology screenings zero dark thirty ABC archives LGBTQ rotten satire halloween tv independent trailers Trophy Talk harry potter Epix rom-coms comic books saw Rocky cinemax The Walt Disney Company Song of Ice and Fire Infographic Marvel Studios halloween Mary poppins crossover A&E Cartoon Network BBC aliens Interview toy story Kids & Family CW Seed SDCC book Bravo Mystery Film Turner telelvision space Awards CBS TV Land romantic comedy Musicals Rom-Com"
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

<template>
  <div style="width:100%">
    <b-link
      style="text-decoration:none;display:flex;align-items: center;flex-wrap: wrap;width:100%;margin-left: auto;margin-left: auto;"
      :href="thisUrl"
    >
      <b-row style="width:100%">
        <b-col cols="2"
          ><img
            :src="thisSrc"
            style="height:190px;width:130px;border-radius:4px;float:left"
        /></b-col>
        <b-col cols="10"
          ><div
            style="display: flex;flex-direction: column;flex-wrap: wrap;width:100%"
          >
            <h6 style="margin-top:5px;color:black;margin-right:auto;float:left">
              <strong>{{ thisName }}</strong>
            </h6>
            <span style="color:black;margin-right:auto;float:left"
              ><img :src="thisIcon" style="height:20px;width:20px" />
              {{ thisScore }}</span
            >
            <span style="margin-right:auto;float:left;color:gray">Summary</span>
            <span style="text-align:justify;margin-right:auto;float:left">{{
              thisSummary
            }}</span>
            <span style="margin-right:auto;float:left;color:gray"
              >{{ thisRating }}, {{ thisRuntime }}</span
            >
            <span style="margin-right:auto;float:left;color:gray">{{
              thisReleaseDate
            }}</span>
          </div></b-col
        >
      </b-row>
    </b-link>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: {
    slug: {
      type: String,
      default: "#"
    },
    src: {
      type: String,
      default: require("../../../assets/img/sample-poster.png")
    },
    name: {
      type: String,
      default: "Harry Potter and The Sorcerer's Stone"
    },
    score: {
      type: Number,
      default: -1
    },
    releaseDate: {
      type: String,
      default: "Available Feb 20"
    },
    rating: {
      type: String,
      default: "R"
    },
    runtime: {
      type: String,
      default: "1 hr 20 min"
    },
    summary: {
      type: String,
      default: `The violence of civil war has been a fact of life in Colombia for
              so long that a generation has grown up there never knowing peace,
              and three members of a street gang-turned-paramilitary force are
              profiled in this documentary, shot during the space of a year in
              Le Sierra, a ghetto community in the Colombia`
    }
  },
  computed: {
    thisUrl() {
      return "/m/" + this.slug;
    },
    thisSrc() {
      return this.src;
    },
    thisName() {
      return this.name;
    },
    thisIcon() {
      if (this.score >= 80)
        return "https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png";
      else if (this.score >= 60 && this.score < 80)
        return "https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png";
      else if (this.score < 60 && this.score >= 0)
        return "https://live.staticflickr.com/65535/51278099823_29be28c9b3_o.png";
      else
        return "https://live.staticflickr.com/65535/51278655199_4ec122dafd_o.png";
    },
    thisScore() {
      return this.score === -1 ? "_ _ _" : this.score + "%";
    },
    thisReleaseDate() {
      return moment(this.releaseDate).format("ll");
    },
    thisRating() {
      return this.rating;
    },
    thisRuntime() {
      return this.runtime;
    },
    thisSummary() {
      return (this.summary || "").length > 360
        ? this.summary.substring(0, 360) + " ..."
        : this.summary;
    }
  }
};
</script>

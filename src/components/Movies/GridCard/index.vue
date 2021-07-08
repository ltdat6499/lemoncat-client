<template>
  <div>
    <b-link
      style="text-decoration:none;display:flex;justify-content:center;align-items: center;flex-direction: column;flex-wrap: wrap;max-width:170px"
      :href="thisUrl"
    >
      <img :src="thisSrc" style="height:190px;width:130px;border-radius:4px" />
      <h5 style="margin-top:5px;color:black;">
        <strong>{{ thisName }}</strong>
      </h5>
      <span style="color:black"
        ><img :src="thisIcon" style="height:20px;width:20px" />
        {{ thisScore }}</span
      >
      <span style="color:gray">{{ thisReleaseDate }}</span>
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
    }
  }
};
</script>

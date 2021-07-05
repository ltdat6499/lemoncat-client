<template>
  <div>
    <b-link style="text-decoration:none;display:flex;" :href="thisUrl">
      <img :src="thisSrc" style="height:100px;width:67px;margin-right:10px" />
      <div
        style="display:flex;align-items: flex-start;flex-direction: column;justify-content:center;max-width:425px"
      >
        <span style="color:black;font-weight:bold"
          >{{ thisName }}
          <span style="color:#767B85">({{ thisYear }})</span></span
        >
        <span style="margin-top:5px;color:black;text-align:justify;">{{
          thisSummary
        }}</span>
        <div style="margin-top:5px;">
          <img
            :src="thisIcon"
            style="height:20px;width:20px;margin-right:5px"
          />
          <span style="color:black;font-weight:bold">{{ thisScore }}</span>
        </div>
      </div>
    </b-link>
  </div>
</template>
<script>
export default {
  props: {
    slug: {
      type: String,
      default: "#"
    },
    src: {
      type: String,
      default: require("../../assets/img/sample-poster.png")
    },
    name: {
      type: String,
      default: "Harry Potter and The Sorcerer's Stone"
    },
    summary: {
      type: String,
      default: `Daniel Radcliffe, Emma Charlotte Duerre Watson,...,
         Emma Charlotte Duerre Watson,...
         Daniel Radcliffe, Emma Charlotte Duerre Watson,...,
         Daniel Radcliffe, Emma Charlotte Duerre Watson,...`
    },
    score: {
      type: Number,
      default: 92
    },
    year: {
      type: Number,
      default: 2021
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
    thisSummary() {
      if (this.summary && this.summary.length > 150)
        return (this.summary.substring(0, 150) || "") + "...";
      return this.summary;
    },
    thisYear() {
      return this.year.split(", ")[1];
    },
    thisScore() {
      return this.score === -1 ? "_ _ _" : this.score + "%";
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
    }
  }
};
</script>

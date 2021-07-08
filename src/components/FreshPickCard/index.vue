<template>
  <div>
    <b-link
      style="text-decoration:none;max-width:135px;display:flex;justify-content:center;
align-items: center;flex-direction: column"
      :href="thisUrl"
    >
      <img :src="thisSrc" style="height:200px;width:135px" />
      <div style="margin-top:5px">
        <img :src="thisIcon" style="height:20px;width:20px" />
        <span style="color:black">{{ thisScore }}</span>
      </div>
      <span style="margin-top:5px;color:black">{{ thisName }}</span>
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
    score: {
      type: Number,
      default: -1
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
    }
  }
};
</script>

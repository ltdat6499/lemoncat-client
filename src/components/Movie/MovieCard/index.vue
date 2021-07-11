<template>
  <div>
    <b-link
      style="text-decoration:none;max-width:135px;display:flex;justify-content:center;
align-items: center;flex-direction: column"
      :href="thisUrl"
    >
      <img :src="thisSrc" style="height:200px;width:135px" />
      <div style="display:flex;">
        <div style="margin-top:5px">
          <img :src="thisIcon" style="height:20px;width:20px" />
          <span style="color:black"
            ><strong>{{ thisScore }}</strong></span
          >
        </div>
        <div style="margin-top:5px;margin-left:10px">
          <img :src="thisUserIcon" style="height:20px;width:20px" />
          <span style="color:black"
            ><strong>{{ thisUserScore }}</strong></span
          >
        </div>
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
    userScore: {
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
        return "https://live.staticflickr.com/65535/51278655199_d54f32f82e_o.png";
    },
    thisUserIcon() {
      if (this.userScore >= 60)
        return "https://live.staticflickr.com/65535/51277934536_26d8b990e5_o.png";
      else if (this.userScore < 60 && this.userScore >= 0)
        return "https://live.staticflickr.com/65535/51278953920_e842d17506_o.png";
      else
        return "https://live.staticflickr.com/65535/51277185452_0092492af4_o.png";
    },
    thisScore() {
      if (this.score === -1) return "_ _";
      return this.score + "%";
    },
    thisUserScore() {
      if (this.userScore === -1) return "_ _";
      return this.userScore + "%";
    }
  }
};
</script>

<template>
  <div>
    <b-link
      style="text-decoration:none;max-width:135px;display:flex;justify-content:center;
align-items: center;flex-direction: column"
      :href="thisUrl"
    >
      <img :src="thisSrc" style="height:250px;width:165px" />
      <div style="margin-top:5px">
        <img :src="thisIcon" style="height:20px;width:20px" />
        <strong style="color:black">{{
          thisScore === -1 ? "_ _" : thisScore + "%"
        }}</strong>
      </div>
      <span style="margin-top:5px;color:black">{{ thisName }}</span>
    </b-link>
  </div>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      default: "#"
    },
    src: {
      type: String,
      default: "../../assets/img/sample-poster.png"
    },
    name: {
      type: String,
      default: "Harry Potter and The Sorcerer's Stone"
    },
    score: {
      type: Number,
      default: 92
    }
  },
  computed: {
    thisUrl() {
      return this.url;
    },
    thisIcon() {
      if (this.score >= 80)
        return "https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png";
      else if (this.score >= 60 && this.score < 80)
        return "https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png";
      else if (this.score < 60 && this.score >= 0)
        return "https://live.staticflickr.com/65535/51278099823_29be28c9b3_o.png";
      return "https://live.staticflickr.com/65535/51278655199_d54f32f82e_o.png";
    },
    thisSrc() {
      return this.src;
    },
    thisScore() {
      return this.score;
    },
    thisName() {
      if (this.name.length > 25) return this.name.substring(0, 15) + " ...";
      return this.name;
    }
  }
};
</script>

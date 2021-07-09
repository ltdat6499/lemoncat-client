<template>
  <b-link :href="thisUrl" class="my-b-link">
    <img :src="thisIcon" style="height:20px;width:20px;margin-right:5px" />
    <strong style="margin-right:20px;">{{ thisScore }}</strong>
    <span style="text-align:left">{{ thisName }}</span>
  </b-link>
</template>
<script>
export default {
  props: {
    slug: {
      type: String,
      default: "#"
    },
    name: {
      type: String,
      default: "Harry Potter and The Sorcerer's Stone"
    },
    score: {
      type: Number,
      default: 0
    }
  },
  computed: {
    thisUrl() {
      return "/m/" + this.slug;
    },
    thisIcon() {
      if (this.score >= 80)
        return "https://live.staticflickr.com/65535/51280469111_d17f4e62ea_o.png";
      else if (this.score >= 60 && this.score < 80)
        return "https://live.staticflickr.com/65535/51280643468_b13c69ff22_o.png";
      else if (this.score < 60 && this.score >= 0)
        return "https://live.staticflickr.com/65535/51278099823_29be28c9b3_o.png";
      return "https://live.staticflickr.com/65535/51278655199_4ec122dafd_o.png";
    },
    thisScore() {
      return this.score === -1 ? "_ _ _" : this.score + "%";
    },
    thisName() {
      if (this.name.length > 25) return this.name.substring(0, 25) + " ...";
      return this.name;
    }
  }
};
</script>

<style scoped>
.my-b-link {
  display: flex;
  margin: 5px;
  text-decoration: none;
  color: black;
  justify-content: flex-start;
  align-items: center;
}
.my-b-link:hover {
  display: flex;
  margin: 5px;
  text-decoration: none;
  color: #3976dc;
}
</style>

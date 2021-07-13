<template>
  <div>
    <b-link
      style="text-decoration:none;display:flex;justify-content:center;align-items: center;flex-direction: column"
      :href="thisUrl"
    >
      <img :src="thisSrc" style="height:135px;width:260px" />
      <h5 style="margin-top:5px;color:black;font-weight:bold">
        {{ thisName }}
      </h5>
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
      default: require("../../assets/img/sample-news.jpg")
    },
    name: {
      type: String,
      default: "Harry Potter and The Sorcerer's Stone"
    }
  },
  computed: {
    thisUrl() {
      return "/post/" + this.slug;
    },
    thisSrc() {
      return this.src;
    },
    thisName() {
      if (this.name.length > 55) return this.name.substring(0, 55) + " ...";
      return this.name;
    }
  }
};
</script>
